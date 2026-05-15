import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { supabase } from '@/lib/supabase';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { adPlatform, adType, topic, userId, businessId } = await req.json();
    if (!adPlatform || !topic || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    const { data: profile } = await supabase
      .from('business_profiles')
      .select('business_name, brain')
      .eq('user_id', userId)
      .single();
    const businessName = profile?.business_name || 'our business';
    const brain = profile?.brain || '';
    const promptText = 'You are an expert ad copywriter for ' + businessName + '. Business context: ' + brain + '. Write a high-converting ad. Platform: ' + adPlatform + '. Ad type: ' + adType + '. Topic: ' + topic + '. Return in this exact format: HEADLINE: [headline here] BODY: [ad body here] CTA: [call to action here]. Requirements: headline under 40 characters, body under 125 characters for social or 300 for search, punchy and persuasive, strong call to action.';
    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      messages: [{ role: 'user', content: promptText }],
    });
    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';
    const headlineMatch = responseText.match(/HEADLINE:\s*(.+)/);
    const bodyMatch = responseText.match(/BODY:\s*([\s\S]+?)(?=CTA:|$)/);
    const ctaMatch = responseText.match(/CTA:\s*(.+)/);
    const headline = headlineMatch ? headlineMatch[1].trim() : 'Your Headline';
    const body = bodyMatch ? bodyMatch[1].trim() : responseText;
    const cta = ctaMatch ? ctaMatch[1].trim() : 'Learn More';
    const { error: saveError } = await supabase.from('ad_drafts').insert({
      user_id: userId,
      business_id: businessId,
      ad_platform: adPlatform,
      ad_type: adType,
      topic: topic,
      headline: headline,
      body: body,
      cta: cta,
      status: 'draft',
    });
    if (saveError) { console.error('Save error:', saveError); }
    return NextResponse.json({ headline, body, cta });
  } catch (error) {
    console.error('Ad generation error:', error);
    return NextResponse.json({ error: 'Failed to generate ad' }, { status: 500 });
  }
}
