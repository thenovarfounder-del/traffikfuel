// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function ConnectTwitter() {
  const [user, setUser] = useState(null)
  const [connected, setConnected] = useState(false)
  const [profileName, setProfileName] = useState('')
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    async function load() {
      const params = new URLSearchParams(window.location.search)
      if (params.get('success') === 'true') setStatus('success')
      if (params.get('error')) setStatus('error')
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUser(user)
      const { data } = await supabase.from('social_connections').select('*').eq('user_id', user.id).eq('platform', 'twitter').single()
      if (data?.connected) { setConnected(true); setProfileName(data.profile_name || 'X / Twitter Account') }
      setLoading(false)
    }
    load()
  }, [])

  function connectTwitter() {
    if (!user) return
    const clientId = process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID || 'n0xPJir2TtJ5vCiiy6MEcouMS'
    const redirectUri = encodeURIComponent('https://www.traffikora.com/api/auth/twitter/callback')
    const scope = encodeURIComponent('tweet.read tweet.write users.read offline.access')
    const state = user.id
    const url = [
      'https://twitter.com/i/oauth2/authorize',
      '?response_type=code',
      '&client_id=' + clientId,
      '&redirect_uri=' + redirectUri,
      '&scope=' + scope,
      '&state=' + state,
      '&code_challenge=challenge',
      '&code_challenge_method=plain'
    ].join('')
    window.location.href = url
  }

  async function disconnect() {
    if (!user) return
    await supabase.from('social_connections').update({ connected: false }).eq('user_id', user.id).eq('platform', 'twitter')
    setConnected(false); setProfileName(''); setStatus(null)
  }

  if (loading) return <div style={{ minHeight:'100vh', background:'#0a0a0a', display:'flex', alignItems:'center', justifyContent:'center', color:'#E8610A' }}>Loading...</div>

  return (
    <div style={{ minHeight:'100vh', background:'#0a0a0a', color:'#fff', fontFamily:'DM Sans, sans-serif' }}>
      <div style={{ background:'linear-gradient(135deg,#111 0%,#0a0e1a 100%)', borderBottom:'1px solid #1e1e1e', padding:'32px 40px', marginBottom:'40px', textAlign:'center' }}>
        <div style={{ fontSize:'48px', marginBottom:'16px' }}>&#120143;</div>
        <h1 style={{ fontFamily:'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight:900, color:'#fff', margin:'0 0 12px' }}>Connect X / Twitter</h1>
        <p style={{ color:'#888', fontSize:'16px', maxWidth:'500px', margin:'0 auto' }}>Publish content to your X profile automatically</p>
      </div>
      <div style={{ maxWidth:'600px', margin:'0 auto', padding: isMobile ? '0 20px 60px' : '0 40px 60px' }}>
        {status === 'success' && (
          <div style={{ background:'rgba(34,197,94,0.08)', border:'1px solid rgba(34,197,94,0.25)', borderRadius:'12px', padding:'16px 20px', marginBottom:'20px', display:'flex', alignItems:'center', gap:'12px' }}>
            <span style={{ fontSize:'20px' }}>&#10003;</span>
            <div>
              <div style={{ fontSize:'14px', fontWeight:700, color:'#22c55e' }}>X / Twitter connected successfully!</div>
              <div style={{ fontSize:'12px', color:'#555' }}>Traffikora will now publish to your X profile automatically.</div>
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
                <div style={{ fontSize:'32px', marginBottom:'8px' }}>&#10003;</div>
                <p style={{ color:'#22c55e', fontWeight:700, fontSize:'15px', marginBottom:'4px' }}>X / Twitter Connected</p>
                <p style={{ color:'#555', fontSize:'13px' }}>Traffikora is publishing to your X profile automatically.</p>
              </div>
              <button onClick={disconnect} style={{ width:'100%', background:'transparent', color:'#ef4444', border:'1px solid #ef444440', borderRadius:'8px', padding:'12px', fontSize:'13px', fontWeight:700, cursor:'pointer', fontFamily:'DM Sans, sans-serif' }}>
                Disconnect X / Twitter
              </button>
            </div>
          ) : (
            <div>
              <div style={{ background:'rgba(29,161,242,0.08)', border:'1px solid rgba(29,161,242,0.2)', borderRadius:'10px', padding:'20px', marginBottom:'20px', textAlign:'center' }}>
                <div style={{ fontSize:'32px', marginBottom:'8px' }}>&#120143;</div>
                <p style={{ color:'#1DA1F2', fontWeight:700, fontSize:'15px', marginBottom:'4px' }}>Connect Your X / Twitter</p>
                <p style={{ color:'#888', fontSize:'13px' }}>Click below to authorize Traffikora to post on your behalf.</p>
              </div>
              <button onClick={connectTwitter} style={{ width:'100%', background:'linear-gradient(135deg,#1DA1F2,#0d8bd9)', color:'#fff', border:'none', borderRadius:'8px', padding:'14px', fontSize:'15px', fontWeight:700, cursor:'pointer', fontFamily:'DM Sans, sans-serif', boxShadow:'0 4px 20px rgba(29,161,242,0.4)' }}>
                Connect X / Twitter Account
              </button>
            </div>
          )}
        </div>
        <div style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:'14px', padding:'24px' }}>
          <p style={{ fontSize:'12px', fontWeight:700, color:'#E8610A', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'16px' }}>What Traffikora will access</p>
          <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
            {[
              { scope:'tweet.read', desc:'Read your posts and timeline' },
              { scope:'tweet.write', desc:'Post content to X on your behalf' },
              { scope:'users.read', desc:'Read your X profile information' },
              { scope:'offline.access', desc:'Stay connected without re-authorizing' },
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
