// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { searchParams } = new URL(req.url)
  const userId = searchParams.get('userId')
  const siteUrl = searchParams.get('siteUrl')

  if (!userId || !siteUrl) {
    return NextResponse.json({ error: 'Missing userId or siteUrl' }, { status: 400 })
  }

  const { data: profile } = await supabase
    .from('business_profiles')
    .select('google_access_token, google_refresh_token')
    .eq('user_id', userId)
    .single()

  if (!profile?.google_access_token) {
    return NextResponse.json({ error: 'not_connected' }, { status: 401 })
  }

  const endDate = new Date().toISOString().split('T')[0]
  const startDate = new Date(Date.now() - 28 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  const scResponse = await fetch(
    'https://searchconsole.googleapis.com/webmasters/v3/sites/' + encodeURIComponent(siteUrl) + '/searchAnalytics/query',
    {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + profile.google_access_token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 10,
      }),
    }
  )

  const scData = await scResponse.json()

  if (scData.error) {
    return NextResponse.json({ error: scData.error.message }, { status: 500 })
  }

  return NextResponse.json({ rows: scData.rows || [], startDate, endDate })
}
