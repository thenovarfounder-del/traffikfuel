// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

function generateCode(name) {
  const clean = (name || 'USER').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 5) || 'USER'
  const num = Math.floor(100 + Math.random() * 900)
  return clean + num
}

export async function POST(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const body = await request.json()
  const { userId, name, action } = body
  const actionData = body.data

  // Track a click
  if (action === 'click') {
    const { code, ip, userAgent } = actionData
    const { data: refCode } = await supabase.from('referral_codes').select('*').eq('code', code).single()
    if (refCode) {
      await supabase.from('referral_clicks').insert({ code, referrer_id: refCode.user_id, ip_address: ip, user_agent: userAgent })
      await supabase.from('referral_codes').update({ total_clicks: (refCode.total_clicks || 0) + 1 }).eq('code', code)
    }
    return NextResponse.json({ success: true })
  }

  // Track a signup
  if (action === 'signup') {
    const { code, referredUserId } = actionData
    const { data: refCode } = await supabase.from('referral_codes').select('*').eq('code', code).single()
    if (refCode) {
      await supabase.from('referral_codes').update({ total_signups: (refCode.total_signups || 0) + 1 }).eq('code', code)
      await supabase.from('users').update({ referred_by: code }).eq('id', referredUserId)
    }
    return NextResponse.json({ success: true })
  }

  // Create or get referral code
  const { data: existing } = await supabase.from('referral_codes').select('*').eq('user_id', userId).single()
  if (existing) return NextResponse.json({ code: existing })

  let code = generateCode(name)
  let attempts = 0
  while (attempts < 10) {
    const { data: conflict } = await supabase.from('referral_codes').select('id').eq('code', code).single()
    if (!conflict) break
    code = generateCode(name)
    attempts++
  }

  const { data: inserted, error } = await supabase.from('referral_codes').insert({
    user_id: userId,
    code,
    tier: 'customer',
    commission_rate: 0.20,
    total_clicks: 0,
    total_signups: 0,
    total_conversions: 0,
    total_earned: 0,
    status: 'active'
  }).select().single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ code: inserted })
}

export async function GET(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  const code = searchParams.get('code')

  if (code) {
    const { data } = await supabase.from('referral_codes').select('*').eq('code', code).single()
    return NextResponse.json({ code: data })
  }

  const { data, error } = await supabase.from('referral_codes').select('*').eq('user_id', userId).single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ code: data })
}
