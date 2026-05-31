const fs = require('fs');

fs.writeFileSync('src/app/api/generate-social/route.ts', `// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { topic, platform, tone, businessName, industry, city, websiteUrl } = await req.json();

    const platforms = platform === 'All Platforms'
      ? ['Facebook', 'Instagram', 'TikTok', 'X', 'LinkedIn']
      : [platform];

    const prompt = \`You are an expert social media copywriter for \${businessName}, a \${industry} business in \${city}. Website: \${websiteUrl}.

Create high-quality, engaging social media posts about: "\${topic}"
Tone: \${tone}

STRICT REQUIREMENTS FOR EACH PLATFORM:

Facebook (120-150 words):
- Strong opening hook
- 2-3 sentences of valuable content
- Clear call to action
- 3-5 relevant hashtags at the end

Instagram (100-120 words):
- Attention-grabbing first line with emoji
- Engaging story-style content with emojis throughout
- Strong call to action
- 10-15 relevant hashtags at the end on a new line

TikTok (60-80 words):
- Trendy energetic opening
- Short punchy sentences
- Call to action
- 5-8 trending hashtags at the end

X (200-250 characters maximum):
- Punchy and direct
- Include 2-3 hashtags within the character limit

LinkedIn (150-200 words):
- Professional thought leadership tone
- Share insight or data point
- Build credibility
- Clear professional call to action
- 3-5 professional hashtags at the end

Return ONLY a valid JSON object. No markdown, no code blocks, no explanation. Just the raw JSON:
{"Facebook": "full post here", "Instagram": "full post here", "TikTok": "full post here", "X": "full post here", "LinkedIn": "full post here"}\`;

    const message = await client.messages.create({
      model: 'claude-opus-4-5',
      max_tokens: 3000,
      messages: [{ role: 'user', content: prompt }],
    });

    let text = message.content[0].text.trim();
    text = text.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '').trim();
    
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    if (jsonStart === -1 || jsonEnd === -1) {
      return NextResponse.json({ success: false, error: 'Invalid response from AI' }, { status: 500 });
    }
    
    const posts = JSON.parse(text.substring(jsonStart, jsonEnd + 1));
    return NextResponse.json({ success: true, posts });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
`);

console.log('DONE -- generate-social rewritten with better prompts');