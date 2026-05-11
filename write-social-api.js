const fs = require('fs');
const content = `import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  try {
    const { topic, platform, brain } = await req.json()

    const businessContext = brain
      ? \`Business: \${brain.businessName}. Services: \${Array.isArray(brain.services) ? brain.services.join(', ') : brain.services}. Target Audience: \${brain.targetAudience}. Tone: \${brain.tone}.\`
      : 'No business context available.'

    const prompts: Record<string, string> = {
      instagram: \`Write an Instagram post about "\${topic}" for: \${businessContext}

Write the post, then on a NEW LINE write exactly this:
HASHTAGS: #[hashtag1] #[hashtag2] #[hashtag3] #[hashtag4] #[hashtag5] #[hashtag6] #[hashtag7] #[hashtag8] #[hashtag9] #[hashtag10]

Use emojis, keep under 150 words, end with a call to action before the hashtags.\`,

      facebook: \`Write a Facebook post about "\${topic}" for: \${businessContext}

Write 2-3 conversational paragraphs, end with a question to drive comments.

Then on a NEW LINE write exactly this:
HASHTAGS: #[hashtag1] #[hashtag2] #[hashtag3] #[hashtag4] #[hashtag5]

Do not skip the HASHTAGS line. It is required.\`,

      linkedin: \`Write a LinkedIn post about "\${topic}" for: \${businessContext}

Write 3-4 professional paragraphs, end with a thought-provoking question.

Then on a NEW LINE write exactly this:
HASHTAGS: #[hashtag1] #[hashtag2] #[hashtag3] #[hashtag4] #[hashtag5]

Do not skip the HASHTAGS line. It is required.\`,
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