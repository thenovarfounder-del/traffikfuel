'use client'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function Verify2FA() {
const [code, setCode] = useState('')
const [error, setError] = useState('')
const [loading, setLoading] = useState(false)
const router = useRouter()
const searchParams = useSearchParams()

const uid = searchParams.get('uid')
const last4 = searchParams.get('last4')
const phone = searchParams.get('phone')

const handleVerify = async () => {
setLoading(true)
setError('')

try {
const res = await fetch('/api/phone/verify-code', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ phone, code })
})

const data = await res.json()

if (data.success) {
router.push('/dashboard')
} else {
setError(data.error || 'Invalid code. Try again.')
}
} catch (err) {
setError('Something went wrong. Try again.')
} finally {
setLoading(false)
}
}

return (
<div className="min-h-screen bg-black flex items-center justify-center px-4">
<div className="w-full max-w-md bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
<h1 className="text-2xl font-bold text-white mb-2">Two-Factor Authentication</h1>
<p className="text-zinc-400 mb-6">
Enter the 6-digit code sent to your phone ending in ***{last4}
</p>

<input
type="text"
maxLength={6}
placeholder="Enter 6-digit code"
value={code}
onChange={(e) => setCode(e.target.value)}
className="w-full bg-zinc-800 text-white border border-zinc-700 rounded-lg px-4 py-3 text-center text-2xl tracking-widest mb-4 focus:outline-none focus:border-orange-500"
/>

{error && <p className="text-red-400 text-sm mb-4">{error}</p>}

<button
onClick={handleVerify}
disabled={loading || code.length !== 6}
className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition"
>
{loading ? 'Verifying...' : 'Verify Code'}
</button>
</div>
</div>
)
}
