import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(request: NextRequest) {
const { searchParams } = new URL(request.url)
const code = searchParams.get('code')
const error = searchParams.get('error')

if (error || !code) {
return NextResponse.redirect(new URL('/login?error=tiktok_denied', request.url))
}

try {
const tokenResponse = await fetch('https://open.tiktokapis.com/v2/oauth/token/', {
method: 'POST',
headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
body: new URLSearchParams({
client_key: process.env.NEXT_PUBLIC_TIKTOK_CLIENT_KEY!,
client_secret: process.env.TIKTOK_CLIENT_SECRET!,
code: code,
grant_type: 'authorization_code',
redirect_uri: 'https://www.traffikfuel.com/auth/callback',
}),
})

const tokenData = await tokenResponse.json()

if (!tokenData.access_token) {
return NextResponse.redirect(new URL('/login?error=tiktok_token_failed', request.url))
}

const profileResponse = await fetch(
'https://open.tiktokapis.com/v2/user/info/?fields=open_id,display_name,avatar_url',
{ headers: { Authorization: `Bearer ${tokenData.access_token}` } }
)

const profileData = await profileResponse.json()
const tiktokUser = profileData.data?.user

if (!tiktokUser?.open_id) {
return NextResponse.redirect(new URL('/login?error=tiktok_profile_failed', request.url))
}

const { data: existingProfile } = await supabaseAdmin
.from('profiles')
.select('*')
.eq('tiktok_open_id', tiktokUser.open_id)
.single()

let userEmail: string

if (existingProfile) {
userEmail = existingProfile.email
} else {
userEmail = `tiktok_${tiktokUser.open_id}@traffikfuel.com`

const { data: newUser, error: createError } = await supabaseAdmin.auth.admin.createUser({
email: userEmail,
password: crypto.randomUUID(),
email_confirm: true,
})

if (createError || !newUser.user) {
return NextResponse.redirect(new URL('/login?error=user_create_failed', request.url))
}

await supabaseAdmin.from('profiles').upsert({
id: newUser.user.id,
tiktok_open_id: tiktokUser.open_id,
display_name: tiktokUser.display_name,
avatar_url: tiktokUser.avatar_url,
tiktok_access_token: tokenData.access_token,
tiktok_refresh_token: tokenData.refresh_token || null,
updated_at: new Date().toISOString(),
})
}

const { data: sessionData, error: sessionError } = await supabaseAdmin.auth.admin.generateLink({
type: 'magiclink',
email: userEmail,
})

if (sessionError || !sessionData?.properties?.action_link) {
return NextResponse.redirect(new URL('/login?error=session_failed', request.url))
}

return NextResponse.redirect(sessionData.properties.action_link)

} catch (err) {
console.error('TikTok callback error:', err)
return NextResponse.redirect(new URL('/login?error=server_error', request.url))
}
}
