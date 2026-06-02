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
  const { userId, name } = await request.json()
  const { data: existing } = await supabase
    .from('referral_codes')
    .select('*')
    .eq('user_id', userId)
    .single()
  if (existing) return NextResponse.json({ code: existing })
  let code = generateCode(name)
  let attempts = 0
  while (attempts < 10) {
    const { data: conflict } = await supabase.from('referral_codes').select('id').eq('code', code).single()
    if (!conflict) break
    code = generateCode(name)
    attempts++
  }
  const { data, error } = await supabase.from('referral_codes').insert({
    user_id: userId,
    code
  }).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ code: data })
}

export async function GET(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const { searchParams } = new URL(request.url)
  const userId = searchParams.get('userId')
  const { data, error } = await supabase
    .from('referral_codes')
    .select('*')
    .eq('user_id', userId)
    .single()
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ code: data })
}
