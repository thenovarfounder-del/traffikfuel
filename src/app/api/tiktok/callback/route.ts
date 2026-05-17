import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')

  if (error) {
    console.error('TikTok OAuth error:', error)
    return NextResponse.redirect(new URL('/dashboard/content/social?error=tiktok_auth_failed', req.url))
  }

  if (!code) {
    return NextResponse.redirect(new URL('/dashboard/content/social?error=no_code', req.url))
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_key: process.env.TIKTOK_CLIENT_KEY || '',
        client_secret: process.env.TIKTOK_CLIENT_SECRET || '',
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: process.env.TIKTOK_REDIRECT_URI || '',
      }),
    })

    const tokenData = await tokenResponse.json()

    if (tokenData.error) {
      console.error('TikTok token error:', tokenData.error)
      return NextResponse.redirect(new URL('/dashboard/content/social?error=token_exchange_failed', req.url))
    }

    // Store the token in Supabase (optional — add your user logic here)
    // const { error: dbError } = await supabase
    //   .from('tiktok_tokens')
    //   .upsert({ ... })

    return NextResponse.redirect(new URL('/dashboard/content/social?success=tiktok_connected', req.url))
  } catch (err) {
    console.error('TikTok callback error:', err)
    return NextResponse.redirect(new URL('/dashboard/content/social?error=unexpected', req.url))
  }
}