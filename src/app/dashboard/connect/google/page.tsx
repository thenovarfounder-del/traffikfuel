// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function ConnectGoogle() {
  const [isMobile, setIsMobile] = useState(false)
  const [user, setUser] = useState(null)
  const [connected, setConnected] = useState(false)
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(null)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const params = new URLSearchParams(window.location.search)
    if (params.get('connected') === 'true') setStatus('success')
    if (params.get('error')) setStatus('error')

    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUser(user)
      const { data } = await supabase.from('business_profiles').select('google_access_token').eq('user_id', user.id).single()
      if (data?.google_access_token) setConnected(true)
      setLoading(false)
    }
    load()
  }, [])

  const handleConnect = () => {
    if (!user) return
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '626240603555-54ics7fvsqud63j9nl38mu8lrcqbu3ag.apps.googleusercontent.com'
    const redirectUri = encodeURIComponent('https://www.traffikora.com/api/auth/google/callback')
    const scope = encodeURIComponent([
      'openid',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/webmasters.readonly',
    ].join(' '))
    const url = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&response_type=code&scope=' + scope + '&access_type=offline&prompt=consent&state=' + user.id
    window.location.href = url
  }

  async function disconnect() {
    if (!user) return
    await supabase.from('business_profiles').update({ google_access_token: null, google_refresh_token: null }).eq('user_id', user.id)
    setConnected(false)
    setStatus(null)
  }

  if (loading) return <div style={{ minHeight:'100vh', background:'#0a0a0a', display:'flex', alignItems:'center', justifyContent:'center', color:'#E8610A' }}>Loading...</div>

  return (
    <div style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', fontFamily:'DM Sans, sans-serif' }}>
      <div style={{ background:'linear-gradient(135deg,#111 0%,#0a1a0e 100%)', borderBottom:'1px solid #1e1e1e', padding:'32px 40px', marginBottom:'40px', textAlign:'center' }}>
        <div style={{ fontSize:'48px', marginBottom:'16px' }}>\ud83d\udd0d</div>
        <h1 style={{ fontFamily:'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight:900, color:'#fff', margin:'0 0 12px' }}>Connect Google</h1>
        <p style={{ color:'#888', fontSize:'16px', maxWidth:'500px', margin:'0 auto' }}>Connect Google Business Profile and Search Console</p>
      </div>
      <div style={{ maxWidth:'600px', margin:'0 auto', padding: isMobile ? '0 20px 60px' : '0 40px 60px' }}>
        {status === 'success' && (
          <div style={{ background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.25)', borderRadius:'12px', padding:'16px 20px', marginBottom:'20px', display:'flex', alignItems:'center', gap:'12px' }}>
            <span style={{ fontSize:'20px' }}>\u2705</span>
            <div>
              <div style={{ fontSize:'14px', fontWeight:700, color:'#22c55e' }}>Google connected successfully!</div>
              <div style={{ fontSize:'12px', color:'#555' }}>Traffikora can now access your Google Business Profile and Search Console.</div>
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
            <span style={{ color:'#888', fontSize:'14px' }}>Status: <strong style={{ color:'#fff' }}>{connected ? 'Connected' : 'Not connected'}</strong></span>
          </div>
          {connected ? (
            <div>
              <div style={{ background:'rgba(34,197,94,0.06)', border:'1px solid rgba(34,197,94,0.2)', borderRadius:'10px', padding:'20px', marginBottom:'20px', textAlign:'center' }}>
                <div style={{ fontSize:'32px', marginBottom:'8px' }}>\u2705</div>
                <p style={{ color:'#22c55e', fontWeight:700, fontSize:'15px', marginBottom:'4px' }}>Google Connected</p>
                <p style={{ color:'#555', fontSize:'13px' }}>Traffikora has access to your Google Business Profile and Search Console.</p>
              </div>
              <button onClick={disconnect} style={{ width:'100%', background:'transparent', color:'#ef4444', border:'1px solid #ef444440', borderRadius:'8px', padding:'12px', fontSize:'13px', fontWeight:700, cursor:'pointer', fontFamily:'DM Sans, sans-serif' }}>
                Disconnect Google
              </button>
            </div>
          ) : (
            <div>
              <div style={{ background:'rgba(66,133,244,0.08)', border:'1px solid rgba(66,133,244,0.2)', borderRadius:'10px', padding:'20px', marginBottom:'20px', textAlign:'center' }}>
                <div style={{ fontSize:'32px', marginBottom:'8px' }}>\ud83d\udd0d</div>
                <p style={{ color:'#4285F4', fontWeight:700, fontSize:'15px', marginBottom:'4px' }}>Connect Your Google Account</p>
                <p style={{ color:'#888', fontSize:'13px' }}>Authorize Traffikora to access Google Business Profile and Search Console.</p>
              </div>
              <button onClick={handleConnect} style={{ width:'100%', background:'linear-gradient(135deg,#4285F4,#1a73e8)', color:'#fff', border:'none', borderRadius:'8px', padding:'14px', fontSize:'15px', fontWeight:700, cursor:'pointer', fontFamily:'DM Sans, sans-serif', boxShadow:'0 4px 20px rgba(66,133,244,0.4)' }}>
                Connect Google Account
              </button>
            </div>
          )}
        </div>
        <div style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:'14px', padding:'24px' }}>
          <p style={{ fontSize:'12px', fontWeight:700, color:'#E8610A', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'16px' }}>What Traffikora will access</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            {[
              { scope:'Google Business Profile', desc:'Manage your business listings, posts and reviews' },
              { scope:'Search Console', desc:'View clicks, impressions, and keyword rankings' },
              { scope:'Profile Info', desc:'Read your Google account name and email' },
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
