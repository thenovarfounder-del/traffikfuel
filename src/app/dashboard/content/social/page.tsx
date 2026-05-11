'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'

export default function SocialGenerator() {
const [topic, setTopic] = useState('')
const [loading, setLoading] = useState(false)
const [auto, setAuto] = useState(false)
const [edited, setEdited] = useState<any>(null)
const [approved, setApproved] = useState({ instagram: false, facebook: false, linkedin: false })
const [images, setImages] = useState<any>({ instagram: null, facebook: null, linkedin: null })
const [brain, setBrain] = useState<any>(null)
const igRef = useRef<HTMLInputElement>(null)
const fbRef = useRef<HTMLInputElement>(null)
const liRef = useRef<HTMLInputElement>(null)
const refs: any = { instagram: igRef, facebook: fbRef, linkedin: liRef }

useEffect(() => {
supabase.auth.getSession().then(({ data: { session } }) => {
if (!session) return
supabase.from('business_profiles').select('brain').eq('user_id', session.user.id).single().then(({ data }) => {
if (data?.brain) setBrain(data.brain)
})
})
}, [])

const handleImage = (platform: string, e: React.ChangeEvent<HTMLInputElement>) => {
const file = e.target.files?.[0]
if (!file) return
const reader = new FileReader()
reader.onload = () => setImages((prev: any) => ({ ...prev, [platform]: reader.result }))
reader.readAsDataURL(file)
}

const copy = (text: string) => {
const el = document.createElement('textarea')
el.value = text
document.body.appendChild(el)
el.select()
document.execCommand('copy')
document.body.removeChild(el)
alert('Copied!')
}

const generate = async () => {
if (!topic.trim()) return
setLoading(true)
setEdited(null)
setApproved({ instagram: false, facebook: false, linkedin: false })
try {
const [ig, fb, li] = await Promise.all([
fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'instagram', brain }) }).then(r => r.json()),
fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'facebook', brain }) }).then(r => r.json()),
fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'linkedin', brain }) }).then(r => r.json()),
])
const result = { instagram: ig.content, facebook: fb.content, linkedin: li.content }
setEdited(result)
if (auto) setApproved({ instagram: true, facebook: true, linkedin: true })
} catch (e) { console.error(e) }
setLoading(false)
}

const platforms = [
{ key: 'instagram', label: 'Instagram', color: '#E1306C' },
{ key: 'facebook', label: 'Facebook', color: '#1877F2' },
{ key: 'linkedin', label: 'LinkedIn', color: '#0A66C2' },
]

return (
<div style={{ padding: '40px', maxWidth: '900px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
<div>
<h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', margin: 0 }}>Social Media Generator</h1>
<p style={{ color: '#888', marginTop: '8px' }}>One topic — generates Instagram, Facebook, and LinkedIn posts at once</p>
</div>
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '10px 16px' }}>
<span style={{ color: auto ? '#555' : '#f97316', fontSize: '13px', fontWeight: 'bold' }}>Manual</span>
<div onClick={() => setAuto(!auto)} style={{ width: '44px', height: '24px', borderRadius: '12px', cursor: 'pointer', background: auto ? '#f97316' : '#333', position: 'relative' }}>
<div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '3px', left: auto ? '23px' : '3px', transition: 'left 0.2s' }} />
</div>
<span style={{ color: auto ? '#f97316' : '#555', fontSize: '13px', fontWeight: 'bold' }}>Auto</span>
</div>
</div>

{brain && <div style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '13px', color: '#aaa' }}>Brain loaded: <span style={{ color: '#f97316' }}>{brain.businessName}</span></div>}
{auto && <div style={{ background: '#1a1a0a', border: '1px solid #f97316', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '13px', color: '#f97316' }}>Auto mode ON — posts approved automatically</div>}

<div style={{ marginBottom: '24px' }}>
<label style={{ display: 'block', color: '#ccc', marginBottom: '8px', fontSize: '14px' }}>Topic or Promotion</label>
<input value={topic} onChange={e => setTopic(e.target.value)} placeholder="e.g. Caribbean citizenship by investment" style={{ width: '100%', padding: '12px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', color: '#fff', fontSize: '14px' }} />
</div>

<button onClick={generate} disabled={loading || !topic.trim()} style={{ background: loading ? '#555' : '#f97316', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 32px', fontSize: '15px', cursor: 'pointer', marginBottom: '32px' }}>
{loading ? 'Generating all 3 posts...' : 'Generate All 3 Posts'}
</button>

{edited && (
<div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
{platforms.map(({ key, label, color }) => (
<div key={key} style={{ background: '#1a1a1a', border: approved[key as keyof typeof approved] ? '2px solid #22c55e' : '1px solid #333', borderRadius: '8px', padding: '24px' }}>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
<span style={{ color, fontWeight: 'bold', fontSize: '15px' }}>{label}</span>
<div style={{ display: 'flex', gap: '8px' }}>
<button onClick={() => setApproved(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }))}
style={{ background: approved[key as keyof typeof approved] ? '#22c55e' : color, color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 14px', cursor: 'pointer', fontSize: '12px' }}>
{approved[key as keyof typeof approved] ? 'Approved — click to undo' : 'Approve & Post'}
</button>
<button onClick={() => copy(edited[key])} style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}>Copy</button>
</div>
</div>
<div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
<input ref={refs[key]} type="file" accept="image/*" onChange={e => handleImage(key, e)} style={{ display: 'none' }} />
<button onClick={() => refs[key].current?.click()} style={{ background: '#222', color: '#aaa', border: '1px solid #333', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}>Attach Photo</button>
{images[key] && <img src={images[key]} alt="" style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '4px' }} />}
{images[key] && <button onClick={() => setImages((p: any) => ({ ...p, [key]: null }))} style={{ background: 'transparent', color: '#888', border: 'none', cursor: 'pointer', fontSize: '12px' }}>Remove</button>}
</div>
{images[key] && <img src={images[key]} alt="" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '6px', marginBottom: '12px' }} />}
<textarea value={edited[key]} onChange={e => setEdited((p: any) => ({ ...p, [key]: e.target.value }))} rows={10}
style={{ width: '100%', background: '#111', border: '1px solid #222', borderRadius: '6px', color: '#ddd', fontSize: '14px', lineHeight: '1.7', padding: '12px', resize: 'vertical', fontFamily: 'inherit' }} />
</div>
))}
<button onClick={() => setApproved({ instagram: true, facebook: true, linkedin: true })}
style={{ background: '#f97316', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px 32px', fontSize: '15px', cursor: 'pointer', width: '100%' }}>
Approve & Post All 3
</button>
</div>
)}
</div>
)
}
