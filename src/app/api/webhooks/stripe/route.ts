import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const code = searchParams.get('code')

  if (!code) {
    return NextResponse.redirect(new URL('/login?error=no_code', req.url))
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

    const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=pkce`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey,
      },
      body: JSON.stringify({ auth_code: code }),
    })

    if (!response.ok) {
      return NextResponse.redirect(new URL('/login?error=auth_failed', req.url))
    }

    return NextResponse.redirect(new URL('/dashboard', req.url))
  } catch (err) {
    console.error('Auth callback error:', err)
    return NextResponse.redirect(new URL('/login?error=unexpected', req.url))
  }
}