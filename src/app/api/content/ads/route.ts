import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@supabase/supabase-js'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { adPlatform, adType, topic, userId, businessId } = await req.json()

    if (!adPlatform || !adType || !topic || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data: profile } = await supabase
      .from('business_profiles')
      .select('business_name, brain')
      .eq('user_id', userId)
      .single()

    const businessName = profile?.business_name || 'our business'
    const brain = profile?.brain || ''

    const promptText = `You are an expert ad copywriter for ${businessName}.

Business context: ${brain}

Write a ${adType} ad for ${adPlatform} about: ${topic}

Return a JSON object with this exact format:
{"headline": "headline here", "body": "ad body here", "cta": "call to action here"}

No markdown, no backticks, just raw JSON.`

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      messages: [{ role: 'user', content: promptText }],
    })

    const rawText = message.content
      .filter((b) => b.type === 'text')
      .map((b) => (b as { type: 'text'; text: string }).text)
      .join('')
      .trim()

    let parsed: { headline: string; body: string; cta: string }
    try {
      const match = rawText.match(/\{[\s\S]*\}/)
      if (!match) throw new Error('No JSON found')
      parsed = JSON.parse(match[0])
    } catch {
      return NextResponse.json({ error: 'Failed to parse AI response', raw: rawText }, { status: 500 })
    }

    const { data: saved, error: insertError } = await supabase
      .from('ad_drafts')
      .insert({
        user_id: userId,
        business_id: businessId || null,
        ad_platform: adPlatform,
        ad_type: adType,
        topic,
        headline: parsed.headline,
        body: parsed.body,
        cta: parsed.cta,
        status: 'draft',
      })
      .select()
      .single()

    if (insertError) {
      return NextResponse.json({ error: 'Failed to save draft', details: insertError.message }, { status: 500 })
    }

    return NextResponse.json({ draft: saved })
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 })
  }
}