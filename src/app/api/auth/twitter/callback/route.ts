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
  if (error) return NextResponse.redirect(new URL('/dashboard/connect/twitter?error=access_denied', request.url))
  if (!code) return NextResponse.redirect(new URL('/dashboard/connect/twitter?error=no_code', request.url))
  try {
    const tokenRes = await fetch('https://api.twitter.com/2/oauth2/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(process.env.TWITTER_CLIENT_ID + ':' + process.env.TWITTER_CLIENT_SECRET).toString('base64')
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        redirect_uri: 'https://www.traffikora.com/api/auth/twitter/callback',
        code_verifier: 'challenge'
      })
    })
    const tokenData = await tokenRes.json()
    if (!tokenData.access_token) return NextResponse.redirect(new URL('/dashboard/connect/twitter?error=token_failed', request.url))
    const profileRes = await fetch('https://api.twitter.com/2/users/me?user.fields=name,username,profile_image_url', {
      headers: { Authorization: 'Bearer ' + tokenData.access_token }
    })
    const profileJson = await profileRes.json()
    const profile = profileJson.data || {}
    await supabase.from('social_connections').upsert({
      user_id: state,
      platform: 'twitter',
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token || null,
      expires_at: tokenData.expires_in ? new Date(Date.now() + tokenData.expires_in * 1000).toISOString() : null,
      profile_id: profile.id || '',
      profile_name: profile.name || profile.username || '',
      profile_url: profile.profile_image_url || null,
      connected: true,
      updated_at: new Date().toISOString()
    }, { onConflict: 'user_id,platform' })
    return NextResponse.redirect(new URL('/dashboard/connect/twitter?success=true', request.url))
  } catch (e) {
    console.error('Twitter OAuth error:', e)
    return NextResponse.redirect(new URL('/dashboard/connect/twitter?error=server_error', request.url))
  }
}
