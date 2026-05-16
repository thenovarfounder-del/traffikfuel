import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { brain, businessName, topic } = await request.json()

    if (!brain) {
      return NextResponse.json({ error: 'No business brain provided' }, { status: 400 })
    }

    if (!topic) {
      return NextResponse.json({ error: 'No topic provided' }, { status: 400 })
    }

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 4000,
      messages: [
        {
          role: 'user',
          content: `You are an expert SEO content writer. Using the business information below, write a comprehensive long-form authority article on the given topic.

Article requirements:
- Length: 800-1000 words
- Structure: Introduction, 4-5 clearly labeled sections with headers, Conclusion
- Tone: Expert, trustworthy, helpful — not salesy
- SEO: Naturally include the topic keywords throughout
- Authority: Position ${businessName} as the expert on this topic
- Do NOT use markdown formatting symbols like ** or ## — use plain text headers only
- Start each section header on its own line in ALL CAPS
- Write for both human readers and AI search engines like ChatGPT and Perplexity

Output format:
- First line: the article title only
- Blank line
- Then the full article body

Business Name: ${businessName}

Business Information:
${brain}

Article Topic: ${topic}`,
        },
      ],
    })

    const raw = message.content[0].type === 'text' ? message.content[0].text : ''
    const lines = raw.trim().split('\n')
    const title = lines[0].trim()
    const article = lines.slice(2).join('\n').trim()

    return NextResponse.json({ title, article })
  } catch (err: any) {
    console.error('Authority content error:', err)
    return NextResponse.json({ error: err.message || 'Article generation failed' }, { status: 500 })
  }
}