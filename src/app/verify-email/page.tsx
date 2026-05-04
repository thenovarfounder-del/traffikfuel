'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function VerifyEmailPage() {
const [resent, setResent] = useState(false)
const [cooldown, setCooldown] = useState(false)

const handleResend = async () => {
if (cooldown) return
const email = localStorage.getItem('signup_email') || ''
await supabase.auth.resend({ type: 'signup', email })
setResent(true)
setCooldown(true)
setTimeout(() => setCooldown(false), 60000)
}

return (
<main style={{ padding: '40px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
<h1>Check your email</h1>
<p style={{ marginBottom: '24px' }}>
We sent a verification link to your email address.
Click the link to activate your account.
</p>
{resent && <p style={{ color: 'green', marginBottom: '12px' }}>Email resent!</p>}
<button onClick={handleResend} disabled={cooldown}
style={{ padding: '10px 20px', background: cooldown ? '#ccc' : '#0070f3',
color: 'white', border: 'none', borderRadius: '4px', cursor: cooldown ? 'not-allowed' : 'pointer' }}>
{cooldown ? 'Resend available in 60s' : 'Resend Email'}
</button>
</main>
)
}
