'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SocialMediaPage() {
const [business, setBusiness] = useState(null)
const [topic, setTopic] = useState('')
const [isAuto, setIsAuto] = useState(true)
const [loading, setLoading] = useState(false)
const [posts, setPosts] = useState({ instagram: null, facebook: null, linkedin: null })
const [error, setError] = useState('')

useEffect(() => { loadBusiness() }, [])

async function loadBusiness() {
const { data } = await supabase
.from('business_profiles')
.select('id, name, brain')
.eq('user_id', 'a809d033-5ae8-4da7-912a-281c5d39f033')
.single()
// @ts-ignore
 if (data) setBusiness(data)
}

async function generate() {
if (!business) { setError('No business profile found.'); return }
if (!isAuto && !topic.trim()) { setError('Please enter a topic.'); return }
setError('')
setLoading(true)
try {
const brain = typeof business.brain === 'string' ? JSON.parse(business.brain) : business.brain
const results = await Promise.all(
['instagram', 'facebook', 'linkedin'].map(platform =>
fetch('/api/content/social', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ platform, brain, topic: isAuto ? '' : topic })
}).then(r => r.json())
)
)
setPosts({ instagram: results[0].content, facebook: results[1].content, linkedin: results[2].content })
} catch (e) {
setError('Generation failed.')
} finally {
setLoading(false)
}
}

const hasBrain = !!(business && business.brain)

return (
<div className="p-8">
<h1 className="text-3xl font-bold text-white mb-2">Social Media Generator</h1>
<p className="text-gray-400 mb-6">Generates optimized posts for Instagram, Facebook, and LinkedIn</p>
<div className="bg-[#1a1f35] rounded-xl p-6 max-w-2xl">
{hasBrain ? <p className="text-green-400 mb-4">Brain loaded</p> : <p className="text-red-400 mb-4">Brain not loaded - run Business Brain first</p>}
<div className="flex items-center gap-4 mb-4">
<span className="text-white">Manual</span>
<button onClick={() => setIsAuto(!isAuto)} className={"w-12 h-6 rounded-full " + (isAuto ? 'bg-orange-500' : 'bg-gray-600')}></button>
<span className="text-white">Auto</span>
</div>
{!isAuto && <input value={topic} onChange={e => setTopic(e.target.value)} placeholder="Enter topic..." className="w-full bg-[#0f1225] text-white rounded-lg p-3 mb-4 border border-gray-700" />}
{error && <p className="text-red-400 mb-4">{error}</p>}
<button onClick={generate} disabled={loading} className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 text-white font-bold py-3 rounded-xl">
{loading ? 'Generating...' : isAuto ? 'Generate All 3 Posts Automatically' : 'Generate All 3 Posts'}
</button>
{posts.instagram && (
<div className="mt-6 space-y-4">
{['instagram', 'facebook', 'linkedin'].map(p => (
<div key={p} className="bg-[#0f1225] rounded-lg p-4">
<h3 className="text-orange-400 font-bold capitalize mb-2">{p}</h3>
<p className="text-white text-sm whitespace-pre-wrap">{posts[p]}</p>
</div>
))}
</div>
)}
</div>
</div>
)
}