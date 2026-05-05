import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import crypto from 'crypto'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const { userId } = await req.json()
    if (!userId) return NextResponse.json({ error: 'userId required' }, { status: 400 })

    const { data } = await supabase
      .from('user_security_settings')
      .select('hashed_phone')
      .eq('user_id', userId)
      .single()

    return NextResponse.json({ hasPhone: !!data?.hashed_phone })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}