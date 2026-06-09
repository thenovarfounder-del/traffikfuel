// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (!code) {
      return NextResponse.redirect(new URL('/dashboard/connect/google?error=no_code', req.url))
    }

    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: 'https://www.traffikora.com/api/auth/google/callback',
        grant_type: 'authorization_code',
      }),
    })

    const tokenData = await tokenRes.json()

    if (!tokenData.access_token) {
      return NextResponse.redirect(new URL('/dashboard/connect/google?error=token_failed', req.url))
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    await supabase
      .from('business_profiles')
      .update({
        google_access_token: tokenData.access_token,
        google_refresh_token: tokenData.refresh_token || null,
      })
      .eq('user_id', state)

    return NextResponse.redirect(new URL('/dashboard/connect/google?connected=true', req.url))
  } catch (err) {
    return NextResponse.redirect(new URL('/dashboard/connect/google?error=exception', req.url))
  }
}
