const fs = require('fs');
const content = `import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  try {
    const { topic, platform, brain } = await req.json()

    const businessContext = brain
      ? \`Business: \${brain.businessName}. Description: \${brain.description}. Services: \${Array.isArray(brain.services) ? brain.services.join(', ') : brain.services}. Target Audience: \${brain.targetAudience}. Tone: \${brain.tone}. Location: \${brain.location}.\`
      : 'No business context available.'

    const prompts: Record<string, string> = {
      instagram: \`Write an Instagram post about "\${topic}" for this business: \${businessContext}. Start with a bold hook, use 5-8 emojis, keep under 150 words, end with a call to action. REQUIRED: End with 10-15 hashtags on their own line.\`,
      facebook: \`Write a Facebook post about "\${topic}" for this business: \${businessContext}. Start with a bold question, write 2-3 conversational paragraphs, end with a question to drive comments. REQUIRED: End with 5-8 hashtags on their own line. Do not skip the hashtags.\`,
      linkedin: \`Write a LinkedIn post about "\${topic}" for this business: \${businessContext}. Start with a bold insight, write 3-4 professional paragraphs, end with a thought-provoking question. REQUIRED: End with 5 professional hashtags on their own line. Do not skip the hashtags.\`,
    }

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompts[platform] || prompts.instagram }],
    })

    const content = message.content[0].type === 'text' ? message.content[0].text : ''
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Social generation error:', error)
    return NextResponse.json({ content: 'Error: ' + String(error) }, { status: 500 })
  }
}
`;
fs.writeFileSync('src/app/api/content/social/route.ts', content);
console.log('Done!');