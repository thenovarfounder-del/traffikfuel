const fs = require('fs');
const content = `'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SocialGenerator() {
const [topic, setTopic] = useState('')
const [loading, setLoading] = useState(false)
const [results, setResults] = useState<{instagram: string, facebook: string, linkedin: string} | null>(null)
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
setResults(null)
try {
const [igRes, fbRes, liRes] = await Promise.all([
fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'instagram', brain }) }),
fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'facebook', brain }) }),
fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'linkedin', brain }) }),
])
const [ig, fb, li] = await Promise.all([igRes.json(), fbRes.json(), liRes.json()])
setResults({ instagram: ig.content, facebook: fb.content, linkedin: li.content })
} catch (err) {
setResults({ instagram: 'Error generating', facebook: 'Error generating', linkedin: 'Error generating' })
}
setLoading(false)
}

const platforms = [
{ key: 'instagram', label: 'Instagram', color: '#E1306C' },
{ key: 'facebook', label: 'Facebook', color: '#1877F2' },
{ key: 'linkedin', label: 'LinkedIn', color: '#0A66C2' },
]

return (
<div style={{ padding: '40px', maxWidth: '900px' }}>
<h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '8px', color: '#fff' }}>Social Media Generator</h1>
<p style={{ color: '#888', marginBottom: '32px' }}>One topic — generates Instagram, Facebook, and LinkedIn posts all at once</p>

{brain && (
<div style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#aaa' }}>
Business Brain loaded: <span style={{ color: '#f97316' }}>{brain.businessName}</span>
</div>
)}

<div style={{ marginBottom: '16px' }}>
<label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '14px' }}>Topic or Promotion</label>
<input
value={topic}
onChange={(e) => setTopic(e.target.value)}
placeholder="e.g. Caribbean citizenship by investment programs"
style={{ width: '100%', padding: '12px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff', fontSize: '14px' }}
/>
</div>

<button
onClick={generate}
disabled={loading || !topic.trim()}
style={{ background: loading ? '#555' : '#f97316', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 32px', fontSize: '15px', cursor: loading ? 'not-allowed' : 'pointer', marginBottom: '32px' }}
>
{loading ? 'Generating all 3 posts...' : 'Generate All 3 Posts'}
</button>

{results && (
<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
{platforms.map(({ key, label, color }) => (
<div key={key} style={{ background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '24px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
<span style={{ color, fontWeight: 'bold', fontSize: '15px' }}>{label}</span>
<button
onClick={() => navigator.clipboard.writeText(results[key as keyof typeof results])}
style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}
>
Copy
</button>
</div>
<pre style={{ whiteSpace: 'pre-wrap', color: '#ddd', fontSize: '14px', lineHeight: '1.7' }}>{results[key as keyof typeof results]}</pre>
</div>
))}
</div>
)}
</div>
)
}
`;
fs.writeFileSync('src/app/dashboard/content/social/page.tsx', content);
console.log('Done!');
