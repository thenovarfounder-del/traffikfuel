'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const router = useRouter()

const handleLogin = async () => {
setLoading(true)
setError('')
const { data, error } = await supabase.auth.signInWithPassword({ email, password })
if (error) { setError(error.message); setLoading(false); return }
if (!data.user.email_confirmed_at) {
setError('Please verify your email before logging in.')
setLoading(false)
return
}

// Check if user has a verified phone for 2FA
const { data: security } = await supabase
.from('user_security_settings')
.select('phone_verified, hashed_phone')
.eq('user_id', data.user.id)
.single()

if (security?.phone_verified && security?.hashed_phone) {
// Get the real phone number to send SMS
const { data: profile } = await supabase
.from('user_security_settings')
.select('phone_verified')
.eq('user_id', data.user.id)
.single()

// Send 2FA code - we store phone in session for the verify page
// For now redirect to 2FA page - phone stored server side via Twilio
sessionStorage.setItem('2fa_user_id', data.user.id)
sessionStorage.setItem('2fa_phone', 'verified')
router.push('/login/verify-2fa')
} else {
router.push('/dashboard')
}
}

const handleTikTokLogin = () => {
const clientKey = process.env.NEXT_PUBLIC_TIKTOK_CLIENT_KEY
const redirectUri = 'https://www.traffikfuel.com/auth/callback'
const scope = 'user.info.basic'
const state = Math.random().toString(36).substring(7)
const tiktokAuthUrl = `https://www.tiktok.com/v2/auth/authorize?client_key=${clientKey}&scope=${scope}&response_type=code&redirect_uri=${redirectUri}&state=${state}`
window.location.href = tiktokAuthUrl
}

return (
<div style={{minHeight:'100vh',background:'#0a0a0a',display:'flex',alignItems:'center',justifyContent:'center',padding:'20px',fontFamily:'sans-serif'}}>
<div style={{background:'#111',border:'1px solid #222',borderRadius:'16px',padding:'40px',maxWidth:'420px',width:'100%'}}>
<div style={{textAlign:'center',marginBottom:'32px'}}>
<div style={{color:'#ff4500',fontSize:'28px',fontWeight:'bold',marginBottom:'8px'}}>TraffikFuel</div>
<div style={{color:'#666',fontSize:'14px'}}>Sign in to your account</div>
</div>

<div style={{marginBottom:'16px'}}>
<label style={{color:'#aaa',fontSize:'13px',display:'block',marginBottom:'6px'}}>Email</label>
<input
type="email"
value={email}
onChange={e => setEmail(e.target.value)}
placeholder="you@example.com"
style={{width:'100%',padding:'12px',background:'#1a1a1a',border:'1px solid #333',borderRadius:'8px',color:'white',fontSize:'14px',outline:'none',boxSizing:'border-box'}}
/>
</div>

<div style={{marginBottom:'24px'}}>
<label style={{color:'#aaa',fontSize:'13px',display:'block',marginBottom:'6px'}}>Password</label>
<input
type="password"
value={password}
onChange={e => setPassword(e.target.value)}
placeholder="••••••••"
onKeyDown={e => e.key === 'Enter' && handleLogin()}
style={{width:'100%',padding:'12px',background:'#1a1a1a',border:'1px solid #333',borderRadius:'8px',color:'white',fontSize:'14px',outline:'none',boxSizing:'border-box'}}
/>
</div>

{error && (
<div style={{background:'#2d0000',border:'1px solid #ff4500',borderRadius:'8px',padding:'10px',marginBottom:'16px',color:'#ff6b6b',fontSize:'14px'}}>
{error}
</div>
)}

<button
onClick={handleLogin}
disabled={loading}
style={{width:'100%',padding:'14px',background:'#ff4500',color:'white',border:'none',borderRadius:'8px',fontSize:'16px',fontWeight:'600',cursor:'pointer',marginBottom:'12px'}}
>
{loading ? 'Signing in...' : 'Sign In'}
</button>

<button
onClick={handleTikTokLogin}
style={{width:'100%',padding:'14px',background:'#1a1a1a',color:'white',border:'1px solid #333',borderRadius:'8px',fontSize:'14px',cursor:'pointer',marginBottom:'24px'}}
>
Continue with TikTok
</button>

<div style={{textAlign:'center',fontSize:'13px',color:'#555'}}>
Don't have an account? <a href="/signup" style={{color:'#ff4500',textDecoration:'none'}}>Sign up</a>
</div>
<div style={{textAlign:'center',fontSize:'13px',color:'#555',marginTop:'8px'}}>
<a href="/reset-password" style={{color:'#555',textDecoration:'none'}}>Forgot password?</a>
</div>
</div>
</div>
)
}

