import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { supabase } from '@/lib/supabase';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

export async function POST(request: NextRequest) {
  try {
    const { topic, businessId, userId } = await request.json();

    if (!topic || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    let brainContext = '';
    if (businessId) {
      const { data: profile } = await supabase
        .from('business_profiles')
        .select('brain, business_name')
        .eq('id', businessId)
        .single();

      if (profile?.brain) {
        brainContext = `\n\nBusiness context:\n${profile.brain}`;
      }
    }

    const prompt = `You are an expert content marketer and SEO writer. Write a complete blog article about the following topic.${brainContext}

Topic: ${topic}

Requirements:
- Length: 800-1200 words
- Format the response as JSON with exactly these fields:
  {
    "title": "Article title here",
    "content": "Full article in markdown format with ## headings, paragraphs, and a conclusion"
  }
- The article must have: an engaging intro paragraph, 3-5 sections with ## headings, and a conclusion
- Write in a helpful, authoritative, conversational tone
- Optimize naturally for SEO
- Do NOT include any explanation outside the JSON`;

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    });

    const rawText = message.content[0].type === 'text' ? message.content[0].text : '';

    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: 'Failed to parse article from AI response' }, { status: 500 });
    }

    const article = JSON.parse(jsonMatch[0]);
    const wordCount = article.content.split(/\s+/).length;

    const { data: savedPost, error: saveError } = await supabase
      .from('blog_posts')
      .insert({
        user_id: userId,
        business_id: businessId || null,
        topic,
        title: article.title,
        content: article.content,
        word_count: wordCount,
        status: 'draft',
      })
      .select()
      .single();

    if (saveError) {
      console.error('Save error:', saveError);
      return NextResponse.json({ error: 'Failed to save article' }, { status: 500 });
    }

    return NextResponse.json({ success: true, article: savedPost });
  } catch (error) {
    console.error('Blog generation error:', error);
    return NextResponse.json({ error: 'Failed to generate article' }, { status: 500 });
  }
}