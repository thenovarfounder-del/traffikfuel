'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SocialGenerator() {
const [topic, setTopic] = useState('')
const [platform, setPlatform] = useState('instagram')
const [loading, setLoading] = useState(false)
const [result, setResult] = useState('')
const [brain, setBrain] = useState<any>(null)

useEffect(() => {
const loadBrain = async () => {
const { data: { session } } = await supabase.auth.getSession()
if (!session) return
const { data } = await supabase
.from('business_profiles')
.select('brain')
.eq('user_id', session.user.id)
.single()
if (data?.brain) setBrain(data.brain)
}
loadBrain()
}, [])

const generate = async () => {
if (!topic.trim()) return
setLoading(true)
setResult('')
try {
const response = await fetch('/api/content/social', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ topic, platform, brain }),
})
const data = await response.json()
setResult(data.content)
} catch (err) {
setResult('Error generating content. Please try again.')
}
setLoading(false)
}

const platforms = ['instagram', 'facebook', 'linkedin']

return (
<div style={{ padding: '40px', maxWidth: '800px' }}>
<h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: '#fff' }}>Social Media Generator</h1>
<p style={{ color: '#888', marginBottom: '32px' }}>Generate platform-optimized social posts using your Business Brain</p>

{brain && (
<div style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#aaa' }}>
Business Brain loaded: <span style={{ color: '#f97316' }}>{brain.businessName}</span>
</div>
)}

<div style={{ marginBottom: '16px' }}>
<label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '14px' }}>Platform</label>
<div style={{ display: 'flex', gap: '8px' }}>
{platforms.map((p) => (
<button
key={p}
onClick={() => setPlatform(p)}
style={{
padding: '8px 20px',
borderRadius: '6px',
border: 'none',
cursor: 'pointer',
fontSize: '13px',
background: platform === p ? '#f97316' : '#1a1a1a',
color: platform === p ? '#fff' : '#aaa',
textTransform: 'capitalize',
}}
>
{p}
</button>
))}
</div>
</div>

<div style={{ marginBottom: '16px' }}>
<label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '14px' }}>Topic or Promotion</label>
<input
value={topic}
onChange={(e) => setTopic(e.target.value)}
placeholder="e.g. Summer sale, new service launch, customer testimonial"
style={{ width: '100%', padding: '12px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff', fontSize: '14px' }}
/>
</div>

<button
onClick={generate}
disabled={loading || !topic.trim()}
style={{ background: loading ? '#555' : '#f97316', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 24px', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', marginBottom: '32px' }}
>
{loading ? 'Generating...' : 'Generate Post'}
</button>

{result && (
<div style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '24px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
<span style={{ color: '#f97316', fontWeight: 'bold', textTransform: 'capitalize' }}>{platform} Post</span>
<button
onClick={() => navigator.clipboard.writeText(result)}
style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}
>
Copy
</button>
</div>
<pre style={{ whiteSpace: 'pre-wrap', color: '#ddd', fontSize: '14px', lineHeight: '1.7' }}>{result}</pre>
</div>
)}
</div>
)
}
