'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ResetPasswordPage() {
const [email, setEmail] = useState('')
const [sent, setSent] = useState(false)
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)

const handleReset = async () => {
setError('')
setLoading(true)
const { error } = await supabase.auth.resetPasswordForEmail(email, {
redirectTo: 'https://www.traffikfuel.com/update-password'
})
if (error) { setError(error.message); setLoading(false); return }
setSent(true)
setLoading(false)
}

return (
<main style={{ padding: '40px', maxWidth: '400px', margin: '0 auto' }}>
<h1>Reset Password</h1>
{sent ? (
<p style={{ color: 'green' }}>Check your email for a password reset link!</p>
) : (
<>
<input type="email" placeholder="Your email address" value={email}
onChange={e => setEmail(e.target.value)}
style={{ display: 'block', width: '100%', marginBottom: '12px', padding: '8px' }} />
{error && <p style={{ color: 'red', marginBottom: '12px' }}>{error}</p>}
<button onClick={handleReset} disabled={loading}
style={{ padding: '10px 20px', background: '#0070f3', color: 'white',
border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
{loading ? 'Sending...' : 'Send Reset Link'}
</button>
</>
)}
<p style={{ marginTop: '16px' }}><a href="/login">Back to login</a></p>
</main>
)
}