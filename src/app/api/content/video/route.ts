import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const anthropic = new Anthropic()

  try {
    const { topic, platform, duration, userId } = await req.json()

    if (!topic || !platform || !duration || !userId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Fetch business profile
    const { data: business, error: bizError } = await supabase
      .from('business_profiles')
      .select('*')
      .eq('user_id', userId)
      .single()

    if (bizError || !business) {
      return NextResponse.json({ error: 'Business profile not found' }, { status: 404 })
    }

    const businessName = business.business_name || 'this business'
    const businessDesc = business.description || ''

    const prompt = `You are a short-form video script expert. Write a ${duration}-second ${platform} video script for the following business and topic.

Business Name: ${businessName}
Business Description: ${businessDesc}
Topic: ${topic}
Platform: ${platform}
Video Length: ${duration} seconds

Write a script with exactly 3 sections. Return ONLY valid JSON with no extra text, in this exact format:
{
  "hook": "The first 3-5 seconds — one punchy sentence that grabs attention immediately",
  "body": "The middle section — 2-4 sentences delivering the core value or story",
  "cta": "The final 2-3 seconds — one clear call to action"
}

Make it conversational, platform-native, and optimized for ${platform}. The hook must stop the scroll.`

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    })

    const rawText = message.content[0].type === 'text' ? message.content[0].text : ''

    let parsed: { hook: string; body: string; cta: string }
    try {
      const cleaned = rawText.replace(/```json|```/g, '').trim()
      parsed = JSON.parse(cleaned)
    } catch {
      return NextResponse.json({ error: 'Failed to parse AI response', raw: rawText }, { status: 500 })
    }

    // Save to Supabase
    const { data: saved, error: saveError } = await supabase
      .from('video_scripts')
      .insert({
        user_id: userId,
        business_id: business.id || null,
        topic,
        platform,
        duration,
        hook: parsed.hook,
        body: parsed.body,
        cta: parsed.cta,
        status: 'draft'
      })
      .select()
      .single()

    if (saveError) {
      return NextResponse.json({ error: 'Failed to save script', details: saveError.message }, { status: 500 })
    }

    return NextResponse.json({ script: saved })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { searchParams } = new URL(req.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'Missing userId' }, { status: 400 })
    }

    const { data, error } = await supabase
      .from('video_scripts')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
      .limit(20)

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ scripts: data })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}