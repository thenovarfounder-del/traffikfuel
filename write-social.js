const fs = require('fs');

const signup = `// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { email, password, name, business, plan } = await req.json()

  if (!email || !password || !name || !business) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  const { data: authData, error: authError } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
  })

  if (authError) {
    return NextResponse.json({ error: authError.message }, { status: 400 })
  }

  const userId = authData.user.id

  const { error: profileError } = await supabase
    .from('profiles')
    .insert({ id: userId, name, business, plan, email })

  if (profileError) {
    return NextResponse.json({ error: profileError.message }, { status: 400 })
  }

  const { data: sessionData, error: sessionError } = await supabase.auth.signInWithPassword({ email, password })

  if (sessionError) {
    return NextResponse.json({ error: sessionError.message }, { status: 400 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set('sb-access-token', sessionData.session.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  response.cookies.set('sb-refresh-token', sessionData.session.refresh_token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
  })

  return response
}
`;

const me = `// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function GET(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const accessToken = req.cookies.get('sb-access-token')?.value

  if (!accessToken) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const { data: { user }, error } = await supabase.auth.getUser(accessToken)

  if (error || !user) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }

  return NextResponse.json({ user: { id: user.id, email: user.email } })
}
`;

const logout = `// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const response = NextResponse.redirect(new URL('/', req.url))
  response.cookies.delete('sb-access-token')
  response.cookies.delete('sb-refresh-token')
  return response
}
`;

fs.writeFileSync('src/app/api/signup/route.ts', signup);
fs.writeFileSync('src/app/api/me/route.ts', me);
fs.writeFileSync('src/app/api/logout/route.ts', logout);
console.log('Written: all 3 API routes');