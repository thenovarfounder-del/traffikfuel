import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@supabase/supabase-js'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(request: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { topic, businessId, userId } = await request.json()

    if (!topic || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    let brainContext = ''
    if (businessId) {
      const { data: profile } = await supabase
        .from('business_profiles')
        .select('brain, business_name')
        .eq('id', businessId)
        .single()

      if (profile?.brain) {
        brainContext = `\n\nBusiness context:\n${profile.brain}`
      }
    }

    const prompt = `You are an expert content marketer and SEO writer. Write a complete blog article about: ${topic}${brainContext}

Return a JSON object with this exact format:
{"title": "article title", "content": "full article content in HTML format with h2, p, ul tags"}

No markdown, no backticks, just raw JSON.`

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

    let parsed: { title: string; content: string }
    try {
      const match = rawText.match(/\{[\s\S]*\}/)
      if (!match) throw new Error('No JSON found')
      parsed = JSON.parse(match[0])
    } catch {
      return NextResponse.json({ error: 'Failed to parse AI response', raw: rawText }, { status: 500 })
    }

    const { data: saved, error: insertError } = await supabase
      .from('blog_posts')
      .insert({
        user_id: userId,
        business_id: businessId || null,
        topic,
        title: parsed.title,
        content: parsed.content,
        status: 'draft',
      })
      .select()
      .single()

    if (insertError) {
      return NextResponse.json({ error: 'Failed to save post', details: insertError.message }, { status: 500 })
    }

    return NextResponse.json({ post: saved })
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 })
  }
}