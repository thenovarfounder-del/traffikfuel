'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ScrapePage() {
const [url, setUrl] = useState('')
const [loading, setLoading] = useState(false)
const [result, setResult] = useState<Record<string, string> | null>(null)
const [error, setError] = useState('')

async function handleScrape() {
if (!url) return
setLoading(true)
setError('')
setResult(null)

const { data: { user } } = await supabase.auth.getUser()
if (!user) { setError('Not logged in'); setLoading(false); return }

const { data: profile } = await supabase
.from('business_profiles')
.select('id')
.eq('user_id', user.id)
.single()

if (!profile) { setError('No business profile found. Create one first.'); setLoading(false); return }

const res = await fetch('/api/scrape', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ url, businessId: profile.id }),
})

const data = await res.json()
if (data.success) {
setResult(data.brain)
} else {
setError(data.error || 'Something went wrong')
}
setLoading(false)
}

return (
<div className="max-w-2xl mx-auto px-6 py-10">
<h1 className="text-2xl font-bold text-white mb-2">Website Scraper</h1>
<p className="text-gray-400 mb-8">Enter your website URL and we will build your business brain automatically.</p>

<div className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
<div>
<label className="text-sm text-gray-400 mb-1 block">Website URL</label>
<input
type="url"
value={url}
onChange={e => setUrl(e.target.value)}
placeholder="https://yourbusiness.com"
className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
/>
</div>

<button
onClick={handleScrape}
disabled={loading || !url}
className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 text-white font-semibold py-3 rounded-lg"
>
{loading ? 'Analyzing your website...' : 'Build My Business Brain'}
</button>

{error && <p className="text-red-400 text-sm">{error}</p>}
</div>

{result && (
<div className="mt-8 bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4">
<h2 className="text-lg font-semibold text-white mb-4">Your Business Brain</h2>
{Object.entries(result).map(([key, value]) => (
<div key={key}>
<p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{key.replace(/_/g, ' ')}</p>
<p className="text-gray-300">{value}</p>
</div>
))}
<div className="pt-4 border-t border-gray-800">
<p className="text-green-400 text-sm">Business brain saved to your profile successfully!</p>
</div>
</div>
)}
</div>
)
}
