const fs = require('fs');
const content = `'use client'

import { useState, useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'

export default function SocialGenerator() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [auto, setAuto] = useState(false)
  const [edited, setEdited] = useState<{instagram: string, facebook: string, linkedin: string} | null>(null)
  const [approved, setApproved] = useState<{instagram: boolean, facebook: boolean, linkedin: boolean}>({ instagram: false, facebook: false, linkedin: false })
  const [images, setImages] = useState<{instagram: string|null, facebook: string|null, linkedin: string|null}>({ instagram: null, facebook: null, linkedin: null })
  const [brain, setBrain] = useState<any>(null)
  const fileRefs = { instagram: useRef<HTMLInputElement>(null), facebook: useRef<HTMLInputElement>(null), linkedin: useRef<HTMLInputElement>(null) }

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

  const handleImage = (platform: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => setImages(prev => ({ ...prev, [platform]: reader.result as string }))
    reader.readAsDataURL(file)
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert('Copied!')
    } catch {
      const el = document.createElement('textarea')
      el.value = text
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      alert('Copied!')
    }
  }

  const generate = async () => {
    if (!topic.trim()) return
    setLoading(true)
    setEdited(null)
    setApproved({ instagram: false, facebook: false, linkedin: false })
    try {
      const [igRes, fbRes, liRes] = await Promise.all([
        fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'instagram', brain }) }),
        fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'facebook', brain }) }),
        fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'linkedin', brain }) }),
      ])
      const [ig, fb, li] = await Promise.all([igRes.json(), fbRes.json(), liRes.json()])
      const result = { instagram: ig.content, facebook: fb.content, linkedin: li.content }
      setEdited(result)
      if (auto) setApproved({ instagram: true, facebook: true, linkedin: true })
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  const toggleApprove = (platform: string) => {
    setApproved(prev => ({ ...prev, [platform]: !prev[platform as keyof typeof prev] }))
  }

  const approveAll = () => {
    setApproved({ instagram: true, facebook: true, linkedin: true })
  }

  const platforms = [
    { key: 'instagram', label: 'Instagram', color: '#E1306C' },
    { key: 'facebook', label: 'Facebook', color: '#1877F2' },
    { key: 'linkedin', label: 'LinkedIn', color: '#0A66C2' },
  ]

  const allApproved = approved.instagram && approved.facebook && approved.linkedin

  return (
    <div style={{ padding: '40px', maxWidth: '900px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', margin: 0 }}>Social Media Generator</h1>
          <p style={{ color: '#888', marginTop: '8px' }}>One topic — generates Instagram, Facebook, and LinkedIn posts at once</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '10px 16px' }}>
          <span style={{ color: auto ? '#555' : '#f97316', fontSize: '13px', fontWeight: 'bold' }}>Manual</span>
          <div onClick={() => setAuto(!auto)} style={{ width: '44px', height: '24px', borderRadius: '12px', cursor: 'pointer', background: auto ? '#f97316' : '#333', position: 'relative', transition: 'background 0.2s' }}>
            <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '3px', left: auto ? '23px' : '3px', transition: 'left 0.2s' }} />
          </div>
          <span style={{ color: auto ? '#f97316' : '#555', fontSize: '13px', fontWeight: 'bold' }}>Auto</span>
        </div>
      </div>

      {brain && (
        <div style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '13px', color: '#aaa' }}>
          Business Brain loaded: <span style={{ color: '#f97316' }}>{brain.businessName}</span>
        </div>
      )}

      {auto && (
        <div style={{ background: '#1a1a0a', border: '1px solid #f97316', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '13px', color: '#f97316' }}>
          Auto mode ON — posts will be approved automatically when generated
        </div>
      )}

      <div style={{ marginBottom: '24px' }}>
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

      {edited && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {platforms.map(({ key, label, color }) => (
              <div key={key} style={{ background: '#1a1a1a', border: approved[key as keyof typeof approved] ? '2px solid #22c55e' : '1px solid #333', borderRadius: '8px', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ color, fontWeight: 'bold', fontSize: '15px' }}>{label}</span>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      onClick={() => toggleApprove(key)}
                      style={{
                        background: approved[key as keyof typeof approved] ? '#22c55e' : color,
                        color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 14px', cursor: 'pointer', fontSize: '12px'
                      }}
                    >
                      {approved[key as keyof typeof approved] ? 'Approved (click to undo)' : 'Approve & Post'}
                    </button>
                    <button
                      onClick={() => copyToClipboard(edited[key as keyof typeof edited])}
                      style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <input ref={fileRefs[key as keyof typeof fileRefs]} type="file" accept="image/*" onChange={(e) => handleImage(key, e)} style={{ display: 'none' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <button
                    onClick={() => fileRefs[key as keyof typeof fileRefs].current?.click()}
                    style={{ background: '#222', color: '#aaa', border: '1px solid #333', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}
                  >
                    Attach Photo
                  </button>
                  {images[key as keyof typeof images] && (
                    <>
                      <img src={images[key as keyof typeof images]!} alt="preview" style={{ height: '40px', width: '40px', objectFit: 'cover', borderRadius: '4px' }} />
                      <button onClick={() => setImages(prev => ({ ...prev, [key]: null }))} style={{ background: 'transparent', color: '#888', border: 'none', cursor: 'pointer', fontSize: '12px' }}>Remove</button>
                    </>
                  )}
                </div>

                {images[key as keyof typeof images] && (
                  <img src={images[key as keyof typeof images]!} alt="post" style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '6px', marginBottom: '12px' }} />
                )}

                <textarea
                  value={edited[key as keyof typeof edited]}
                  onChange={(e) => setEdited(prev => ({ ...prev!, [key]: e.target.value }))}
                  rows={10}
                  style={{ width: '100%', background: '#111', border: '1px solid #222', borderRadius: '6px', color: '#ddd', fontSize: '14px', lineHeight: '1.7', padding: '12px', resize: 'vertical', fontFamily: 'inherit' }}
                />
              </div>
            ))}
          </div>

          <button
            onClick={approveAll}
            style={{ marginTop: '24px', background: allApproved ? '#22c55e' : '#f97316', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px 32px', fontSize: '15px', cursor: 'pointer', width: '100%' }}
          >
            {allApproved ? 'All 3 Approved — Auto-posting live when accounts connected' : 'Approve & Post All 3'}
          </button>
        </>
      )}
    </div>
  )
}
`;
fs.writeFileSync('src/app/dashboard/content/social/page.tsx', content);
console.log('Done!');