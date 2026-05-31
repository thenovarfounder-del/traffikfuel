// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { topic, platform, tone, businessName, industry, city, websiteUrl } = await req.json();

    const platforms = platform === 'All Platforms'
      ? ['Facebook', 'Instagram', 'TikTok', 'X', 'LinkedIn']
      : [platform];

    const prompt = `You are a social media expert for ${businessName}, a ${industry} business located in ${city}. Website: ${websiteUrl}.

Create social media posts about: "${topic}"
Tone: ${tone}

Write one post for each platform: ${platforms.join(', ')}.

Each post should be platform-optimized:
- Facebook: 100-150 words, conversational, include a call to action
- Instagram: 80-100 words, engaging, include relevant hashtags
- TikTok: 50-80 words, energetic, trendy language, hashtags
- X: Under 280 characters, punchy and direct
- LinkedIn: 100-150 words, professional, thought leadership

Return ONLY a valid JSON object with platform names as keys and post content as values. No markdown, no explanation, just the JSON object.
Example: {"Facebook": "post here", "Instagram": "post here"}`;

    const message = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 2000,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = message.content[0].text.trim();
    const clean = text.replace(/```json/g, '').replace(/```/g, '').trim();
    const posts = JSON.parse(clean);

    return NextResponse.json({ success: true, posts });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
