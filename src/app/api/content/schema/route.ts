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
      max_tokens: 1500,
      messages: [
        {
          role: 'user',
          content: `You are a schema markup expert. Using the business information below, generate a complete JSON-LD schema markup block.

Include these schema types where the data supports them:
- LocalBusiness (or a more specific subtype like LegalService, MedicalBusiness, etc.)
- Organization
- WebSite with SearchAction if applicable

Rules:
- Output ONLY the raw JSON-LD object — no markdown, no backticks, no explanation
- Use real data from the business info — do not invent details
- If a field is unknown, omit it rather than guessing
- The output must be valid JSON

Business Information:
${brain}

Business Name: ${businessName}`,
        },
      ],
    })

    const raw = message.content[0].type === 'text' ? message.content[0].text : ''

    const cleaned = raw
      .replace(/^```json\s*/i, '')
      .replace(/^```\s*/i, '')
      .replace(/```\s*$/i, '')
      .trim()

    JSON.parse(cleaned)

    return NextResponse.json({ schema: cleaned })
  } catch (err: any) {
    console.error('Schema generation error:', err)
    return NextResponse.json({ error: err.message || 'Schema generation failed' }, { status: 500 })
  }
}