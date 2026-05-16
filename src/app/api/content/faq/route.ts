import { NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { brain, businessName } = await request.json()

    if (!brain) {
      return NextResponse.json({ error: 'No business brain provided' }, { status: 400 })
    }

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 2000,
      messages: [
        {
          role: 'user',
          content: `You are an FAQ schema expert. Using the business information below, generate 8 frequently asked questions and detailed answers.

Rules:
- Output ONLY a valid JSON array — no markdown, no backticks, no explanation
- Each item must have exactly two fields: "question" and "answer"
- Questions should be things real customers would search for
- Answers should be 2-4 sentences, helpful and specific
- Base everything on the business info — do not invent details

Business Name: ${businessName}

Business Information:
${brain}

Output format:
[
  { "question": "...", "answer": "..." },
  { "question": "...", "answer": "..." }
]`,
        },
      ],
    })

    const raw = message.content[0].type === 'text' ? message.content[0].text : ''

    const cleaned = raw
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/```\s*$/i, '')
      .trim()

    const faqs = JSON.parse(cleaned)

    const schema = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq: { question: string; answer: string }) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }, null, 2)

    return NextResponse.json({ faqs, schema })
  } catch (err: any) {
    console.error('FAQ generation error:', err)
    return NextResponse.json({ error: err.message || 'FAQ generation failed' }, { status: 500 })
  }
}