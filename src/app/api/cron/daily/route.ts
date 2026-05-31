// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.traffikora.com'

export async function GET(req) {
  try {
    const authHeader = req.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get all users with auto_mode enabled
    const { data: profiles } = await supabase
      .from('business_profiles')
      .select('user_id')
      .eq('auto_mode', true)

    if (!profiles || profiles.length === 0) {
      return NextResponse.json({ message: 'No users with auto mode enabled' })
    }

    const results = []
    for (const profile of profiles) {
      const res = await fetch(`${BASE_URL}/api/agents/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: profile.user_id })
      })
      const data = await res.json()
      results.push({ user_id: profile.user_id, ...data })
    }

    return NextResponse.json({ success: true, ran_for: profiles.length, results })

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
