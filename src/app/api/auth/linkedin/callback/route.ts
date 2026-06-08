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

  if (error) return NextResponse.redirect(new URL('/dashboard/connect/linkedin?error=access_denied', request.url))
  if (!code) return NextResponse.redirect(new URL('/dashboard/connect/linkedin?error=no_code', request.url))

  try {
    const tokenRes = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'https://www.traffikora.com/api/auth/linkedin/callback',
        client_id: process.env.LINKEDIN_CLIENT_ID,
        client_secret: process.env.LINKEDIN_CLIENT_SECRET,
      })
    })
    const tokenData = await tokenRes.json()
    if (!tokenData.access_token) return NextResponse.redirect(new URL('/dashboard/connect/linkedin?error=token_failed', request.url))

    const profileRes = await fetch('https://api.linkedin.com/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokenData.access_token}` }
    })
    const profile = await profileRes.json()

    await supabase.from('social_connections').upsert({
      user_id: state,
      platform: 'linkedin',
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token || null,
      expires_at: tokenData.expires_in ? new Date(Date.now() + tokenData.expires_in * 1000).toISOString() : null,
      profile_id: profile.sub || profile.id || '',
      profile_name: profile.name || '',
      profile_url: profile.picture || null,
      connected: true,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,platform' })

    return NextResponse.redirect(new URL('/dashboard/connect/linkedin?success=true', request.url))
  } catch (e) {
    console.error('LinkedIn OAuth error:', e)
    return NextResponse.redirect(new URL('/dashboard/connect/linkedin?error=server_error', request.url))
  }
}
