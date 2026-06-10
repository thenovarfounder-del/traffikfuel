// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')

  if (error) return NextResponse.redirect(new URL('/dashboard/connect/instagram?error=access_denied', request.url))
  if (!code) return NextResponse.redirect(new URL('/dashboard/connect/instagram?error=no_code', request.url))

  try {
    const tokenRes = await fetch('https://api.instagram.com/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: process.env.INSTAGRAM_APP_ID,
        client_secret: process.env.INSTAGRAM_APP_SECRET,
        grant_type: 'authorization_code',
        redirect_uri: 'https://www.traffikora.com/api/auth/instagram/callback',
        code,
      })
    })
    const tokenData = await tokenRes.json()
    if (!tokenData.access_token) return NextResponse.redirect(new URL('/dashboard/connect/instagram?error=token_failed', request.url))

    const profileRes = await fetch('https://graph.instagram.com/me?fields=id,username&access_token=' + tokenData.access_token)
    const profile = await profileRes.json()

    await supabase.from('social_connections').upsert({
      user_id: state,
      platform: 'instagram',
      access_token: tokenData.access_token,
      profile_id: profile.id || '',
      profile_name: profile.username || '',
      connected: true,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,platform' })

    return NextResponse.redirect(new URL('/dashboard/connect/instagram?success=true', request.url))
  } catch (e) {
    console.error('Instagram OAuth error:', e)
    return NextResponse.redirect(new URL('/dashboard/connect/instagram?error=server_error', request.url))
  }
}