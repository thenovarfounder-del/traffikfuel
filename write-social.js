const fs = require('fs');
const path = require('path');

const base = 'C:\\Users\\randy\\traffikfuel\\src\\app';

// ─── CALLBACK ROUTE ───────────────────────────────────────────────
const callbackRoute = `// @ts-nocheck
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
      headers: { Authorization: \`Bearer \${tokenData.access_token}\` }
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
`;

// ─── CONNECT PAGE ─────────────────────────────────────────────────
const connectPage = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function ConnectLinkedin() {
  const [user, setUser] = useState(null)
  const [connected, setConnected] = useState(false)
  const [profileName, setProfileName] = useState('')
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    async function load() {
      const params = new URLSearchParams(window.location.search)
      if (params.get('success') === 'true') setStatus('success')
      if (params.get('error')) setStatus('error')
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUser(user)
      const { data } = await supabase.from('social_connections').select('*').eq('user_id', user.id).eq('platform', 'linkedin').single()
      if (data?.connected) { setConnected(true); setProfileName(data.profile_name || 'LinkedIn Account') }
      setLoading(false)
    }
    load()
  }, [])

  function connectLinkedIn() {
    if (!user) return
    const clientId = '789mjbauw6b595'
    const redirectUri = encodeURIComponent('https://www.traffikora.com/api/auth/linkedin/callback')
    const scope = encodeURIComponent('openid profile email w_member_social')
    const state = user.id
    window.location.href = \`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=\${clientId}&redirect_uri=\${redirectUri}&scope=\${scope}&state=\${state}\`
  }

  async function disconnect() {
    if (!user) return
    await supabase.from('social_connections').update({ connected: false }).eq('user_id', user.id).eq('platform', 'linkedin')
    setConnected(false); setProfileName(''); setStatus(null)
  }

  if (loading) return <div style={{ minHeight:'100vh', background:'#0a0a0a', display:'flex', alignItems:'center', justifyContent:'center', color:'#E8610A' }}>Loading...</div>

  return (
    <div style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', fontFamily:'DM Sans, sans-serif' }}>
      <div style={{ background:'linear-gradient(135deg,#111 0%,#1a0e00 100%)', borderBottom:'1px solid #1e1e1e', padding:'32px 40px', marginBottom:'40px', textAlign:'center' }}>
        <div style={{ fontSize:'48px', marginBottom:'16px' }}>\ud83d\udcbc</div>
        <h1 style={{ fontFamily:'Playfair Display, serif', fontSize:'36px', fontWeight:900, color:'#fff', margin:'0 0 12px' }}>Connect LinkedIn</h1>
        <p style={{ color:'#888', fontSize:'16px', maxWidth:'500px', margin:'0 auto' }}>Publish content to your LinkedIn profile automatically</p>
      </div>
      <div style={{ maxWidth:'600px', margin:'0 auto', padding:'0 40px 60px' }}>
        {status === 'success' && (
          <div style={{ background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.25)', borderRadius:'12px', padding:'16px 20px', marginBottom:'20px', display:'flex', alignItems:'center', gap:'12px' }}>
            <span style={{ fontSize:'20px' }}>\u2705</span>
            <div>
              <div style={{ fontSize:'14px', fontWeight:700, color:'#22c55e' }}>LinkedIn connected successfully!</div>
              <div style={{ fontSize:'12px', color:'#555' }}>Traffikora will now publish to your LinkedIn automatically.</div>
            </div>
          </div>
        )}
        {status === 'error' && (
          <div style={{ background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.25)', borderRadius:'12px', padding:'16px 20px', marginBottom:'20px' }}>
            <div style={{ fontSize:'14px', fontWeight:700, color:'#ef4444' }}>Connection failed. Please try again.</div>
          </div>
        )}
        <div style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:'14px', padding:'28px', marginBottom:'20px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'24px' }}>
            <div style={{ width:'10px', height:'10px', borderRadius:'50%', background: connected ? '#22c55e' : '#555' }} />
            <span style={{ color:'#888', fontSize:'14px' }}>
              Status: <strong style={{ color:'#fff' }}>{connected ? 'Connected' : 'Not connected'}</strong>
              {connected && profileName && <span style={{ color:'#E8610A', marginLeft:'8px' }}>({profileName})</span>}
            </span>
          </div>
          {connected ? (
            <div>
              <div style={{ background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.2)', borderRadius:'10px', padding:'20px', marginBottom:'20px', textAlign:'center' }}>
                <div style={{ fontSize:'32px', marginBottom:'8px' }}>\u2705</div>
                <p style={{ color:'#22c55e', fontWeight:700, fontSize:'15px', marginBottom:'4px' }}>LinkedIn Connected</p>
                <p style={{ color:'#555', fontSize:'13px' }}>Traffikora is publishing to your LinkedIn automatically.</p>
              </div>
              <button onClick={disconnect} style={{ width:'100%', background:'transparent', color:'#ef4444', border:'1px solid #ef444440', borderRadius:'8px', padding:'12px', fontSize:'13px', fontWeight:700, cursor:'pointer', fontFamily:'DM Sans, sans-serif' }}>
                Disconnect LinkedIn
              </button>
            </div>
          ) : (
            <div>
              <div style={{ background:'rgba(10,102,194,0.08)', border:'1px solid rgba(10,102,194,0.2)', borderRadius:'10px', padding:'20px', marginBottom:'20px', textAlign:'center' }}>
                <div style={{ fontSize:'32px', marginBottom:'8px' }}>\ud83d\udcbc</div>
                <p style={{ color:'#0A66C2', fontWeight:700, fontSize:'15px', marginBottom:'4px' }}>Connect Your LinkedIn</p>
                <p style={{ color:'#888', fontSize:'13px' }}>Click below to authorize Traffikora to post on your behalf.</p>
              </div>
              <button onClick={connectLinkedIn} style={{ width:'100%', background:'linear-gradient(135deg,#0A66C2,#004182)', color:'#fff', border:'none', borderRadius:'8px', padding:'14px', fontSize:'15px', fontWeight:700, cursor:'pointer', fontFamily:'DM Sans, sans-serif', boxShadow:'0 4px 20px rgba(10,102,194,0.4)' }}>
                Connect LinkedIn Account
              </button>
            </div>
          )}
        </div>
        <div style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:'14px', padding:'24px' }}>
          <p style={{ fontSize:'12px', fontWeight:700, color:'#E8610A', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'16px' }}>What Traffikora will access</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            {[
              { scope:'openid + profile', desc:'Read your LinkedIn name and profile info' },
              { scope:'w_member_social', desc:'Post content to LinkedIn on your behalf' },
              { scope:'email', desc:'Read your LinkedIn email address' },
            ].map(s => (
              <div key={s.scope} style={{ borderLeft:'3px solid #E8610A', paddingLeft:'14px' }}>
                <p style={{ color:'#fff', fontSize:'14px', fontWeight:600, margin:'0 0 2px' }}>{s.scope}</p>
                <p style={{ color:'#666', fontSize:'12px', margin:0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`;

// Write files
const callbackDir = path.join(base, 'api', 'auth', 'linkedin', 'callback');
fs.mkdirSync(callbackDir, { recursive: true });
fs.writeFileSync(path.join(callbackDir, 'route.ts'), callbackRoute, 'utf8');
console.log('SUCCESS: api/auth/linkedin/callback/route.ts');

const connectDir = path.join(base, 'dashboard', 'connect', 'linkedin');
fs.mkdirSync(connectDir, { recursive: true });
fs.writeFileSync(path.join(connectDir, 'page.tsx'), connectPage, 'utf8');
console.log('SUCCESS: dashboard/connect/linkedin/page.tsx');