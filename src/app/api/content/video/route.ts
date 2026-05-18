// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { topic, platform, duration, userId, businessId, businessName } = await req.json()

  const anthropic = new Anthropic()

  const message = await anthropic.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 1024,
    messages: [{
      role: 'user',
      content: 'Write a ' + duration + ' second video script for ' + platform + ' about: ' + topic + ' for the business: ' + (businessName || 'our business') + '. Return ONLY a JSON object with three fields: hook (attention-grabbing opening), body (main content), cta (call to action). No markdown, no backticks, just the raw JSON object.'
    }]
  })

  const text = message.content[0].type === 'text' ? message.content[0].text : '{}'
  const start = text.indexOf('{')
  const end = text.lastIndexOf('}')
  const clean = text.substring(start, end + 1)
  const parsed = JSON.parse(clean)

  const { data, error } = await supabase
    .from('video_scripts')
    .insert({
      user_id: userId,
      business_id: businessId,
      topic,
      platform,
      duration,
      hook: parsed.hook,
      body: parsed.body,
      cta: parsed.cta,
      status: 'done'
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}
