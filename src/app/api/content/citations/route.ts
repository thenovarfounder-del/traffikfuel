import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { query, businessName, userId } = await req.json()

    if (!query || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const prompt = `You are checking if "${businessName}" is mentioned by AI engines when someone searches for "${query}".

Simulate responses from ChatGPT, Gemini, Perplexity, and Claude for the query: "${query}"

Return ONLY a raw JSON object, no markdown, no backticks:
{
  "score": <number 0-100>,
  "mention_count": <number of engines that mention the business>,
  "total_engines": 4,
  "results": [
    {"engine": "ChatGPT", "mentioned": true, "excerpt": "brief excerpt showing mention"},
    {"engine": "Gemini", "mentioned": false, "excerpt": ""},
    {"engine": "Perplexity", "mentioned": true, "excerpt": "brief excerpt showing mention"},
    {"engine": "Claude", "mentioned": false, "excerpt": ""}
  ]
}`

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }],
    })

    const rawText = message.content
      .filter((b) => b.type === 'text')
      .map((b) => (b as { type: 'text'; text: string }).text)
      .join('')
      .trim()

    let parsed: { score: number; mention_count: number; total_engines: number; results: any[] }
    try {
      const match = rawText.match(/\{[\s\S]*\}/)
      if (!match) throw new Error('No JSON found')
      parsed = JSON.parse(match[0])
    } catch {
      return NextResponse.json({ error: 'Failed to parse AI response', raw: rawText }, { status: 500 })
    }

    const { data: saved, error: insertError } = await supabase
      .from('citation_checks')
      .insert({
        user_id: userId,
        query,
        business_name: businessName,
        score: parsed.score,
        mention_count: parsed.mention_count,
        total_engines: parsed.total_engines,
        results: parsed.results,
      })
      .select()
      .single()

    if (insertError) {
      return NextResponse.json({ error: 'Failed to save', details: insertError.message }, { status: 500 })
    }

    return NextResponse.json({ citation: saved })
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 })
  }
}