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

if (error) {
setError(error.message)
setLoading(false)
return
}

if (!data.user.email_confirmed_at) {
setError('Please verify your email before logging in.')
setLoading(false)
return
}

const { data: security } = await supabase
.from('user_security_settings')
.select('phone_verified, hashed_phone, phone')
.eq('user_id', data.user.id)
.single()

if (security?.phone_verified && (security?.phone || security?.hashed_phone)) {
sessionStorage.setItem('2fa_user_id', data.user.id)
sessionStorage.setItem('2fa_last4', (security.phone || security.hashed_phone).slice(-4))
await fetch('/api/phone/send-code', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ phone: security.phone || security.hashed_phone })
})
router.push('/login/verify-2fa')
} else {
router.push('/dashboard')
}
}

return (
<div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
<div style={{ width: '100%', maxWidth: '400px', padding: '40px', background: '#111', borderRadius: '12px', border: '1px solid #222' }}>
<h1 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>TraffikFuel</h1>
<p style={{ color: '#aaa', fontSize: '14px', marginBottom: '32px' }}>Sign in to your account</p>

<div style={{ marginBottom: '16px' }}>
<label style={{ color: '#aaa', fontSize: '13px', display: 'block', marginBottom: '6px' }}>Email</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
placeholder="you@example.com"
style={{ width: '100%', padding: '12px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }}
/>
</div>

<div style={{ marginBottom: '24px' }}>
<label style={{ color: '#aaa', fontSize: '13px', display: 'block', marginBottom: '6px' }}>Password</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
placeholder="••••••••"
style={{ width: '100%', padding: '12px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: 'white', fontSize: '14px', boxSizing: 'border-box' }}
/>
</div>

{error && (
<div style={{ background: '#2d0000', border: '1px solid #ff4500', borderRadius: '8px', padding: '10px', marginBottom: '16px', color: '#ff6b6b', fontSize: '14px' }}>
{error}
</div>
)}

<button
onClick={handleLogin}
disabled={loading}
style={{ width: '100%', padding: '14px', background: '#ff4500', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
>
{loading ? 'Signing in...' : 'Sign In'}
</button>

<p style={{ color: '#aaa', fontSize: '14px', textAlign: 'center', marginTop: '24px' }}>
Don&apos;t have an account? <a href="/signup" style={{ color: '#ff4500' }}>Sign up</a>
</p>
<p style={{ color: '#aaa', fontSize: '14px', textAlign: 'center', marginTop: '8px' }}>
<a href="/reset-password" style={{ color: '#ff4500' }}>Forgot password?</a>
</p>
</div>
</div>
)
}