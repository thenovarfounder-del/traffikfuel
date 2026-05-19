// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    const anthropic = new Anthropic()
    const { userId, businessId, topic, platform, duration } = await req.json()

    if (!userId || !businessId || !topic) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { data: biz } = await supabase.from('business_profiles').select('*').eq('id', businessId).single()
    const businessName = biz?.business_name || 'this business'

    const prompt = `You are a viral video script writer. Write a ${duration}-second ${platform} video script for ${businessName} about: ${topic}.

Return ONLY a JSON object with exactly these 3 keys, no other text:
{
  "hook": "the opening 1-2 sentences that grab attention in the first 3 seconds",
  "body": "the main content explaining the value or information (2-4 sentences)",
  "cta": "a clear call to action at the end (1 sentence)"
}`

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    })

    const rawText = message.content[0].type === 'text' ? message.content[0].text : ''
    const jsonMatch = rawText.match(/\{[\s\S]*\}/)
    if (!jsonMatch) throw new Error('Failed to parse script from AI response')
    const parsed = JSON.parse(jsonMatch[0])

    const { data, error } = await supabase.from('video_scripts').insert({
      user_id: userId,
      business_id: businessId,
      topic,
      platform,
      duration,
      hook: parsed.hook,
      body: parsed.body,
      cta: parsed.cta,
      status: 'done'
    }).select().single()

    if (error) throw new Error(error.message)
    return NextResponse.json(data)
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
