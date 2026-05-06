'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function LoginPage() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)

const handleLogin = async () => {
setLoading(true)
setError('')

try {
const { data, error: signInError } = await supabase.auth.signInWithPassword({
email,
password
})

if (signInError) {
setError(signInError.message)
setLoading(false)
return
}

const userId = data.user.id

// Check if 2FA is enabled
const check2fa = await fetch('/api/auth/check-2fa', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ userId })
})

const result = await check2fa.json()

if (result.has2fa && result.phone) {
// Send SMS code
await fetch('/api/phone/send-code', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ phone: result.phone })
})

const last4 = result.phone.slice(-4)
window.location.href = `/login/verify-2fa?uid=${userId}&last4=${last4}&phone=${result.phone}`
} else {
window.location.href = '/dashboard'
}

} catch (err) {
setError('Something went wrong. Try again.')
setLoading(false)
}
}

return (
<div style={{ minHeight: '100vh', background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
<div style={{ width: '100%', maxWidth: '400px', background: '#111', borderRadius: '16px', padding: '32px', border: '1px solid #222' }}>

<div style={{ textAlign: 'center', marginBottom: '32px' }}>
<h1 style={{ color: '#ff4500', fontSize: '28px', fontWeight: 'bold', margin: '0 0 8px 0' }}>TraffikFuel</h1>
<p style={{ color: '#aaa', fontSize: '14px', margin: 0 }}>Sign in to your account</p>
</div>

<input
type="email"
placeholder="Email address"
value={email}
onChange={(e) => setEmail(e.target.value)}
style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '12px', color: 'white', fontSize: '16px', marginBottom: '12px', boxSizing: 'border-box' }}
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e) => setPassword(e.target.value)}
style={{ width: '100%', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '12px', color: 'white', fontSize: '16px', marginBottom: '16px', boxSizing: 'border-box' }}
/>

{error && (
<div style={{ background: '#2d0000', border: '1px solid #ff4500', borderRadius: '8px', padding: '10px', marginBottom: '16px', color: '#ff6b6b', fontSize: '14px' }}>
{error}
</div>
)}

<button
onClick={handleLogin}
disabled={loading}
style={{ width: '100%', padding: '14px', background: '#ff4500', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
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
