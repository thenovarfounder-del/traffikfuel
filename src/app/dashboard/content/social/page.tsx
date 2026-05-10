'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function SocialGenerator() {
  const [topic, setTopic] = useState('')
  const [loading, setLoading] = useState(false)
  const [cruiseControl, setCruiseControl] = useState(false)
  const [posts, setPosts] = useState<{instagram: string, facebook: string, linkedin: string} | null>(null)
  const [edited, setEdited] = useState<{instagram: string, facebook: string, linkedin: string} | null>(null)
  const [submitted, setSubmitted] = useState<{instagram: boolean, facebook: boolean, linkedin: boolean}>({ instagram: false, facebook: false, linkedin: false })
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
    setPosts(null)
    setEdited(null)
    setSubmitted({ instagram: false, facebook: false, linkedin: false })
    try {
      const [igRes, fbRes, liRes] = await Promise.all([
        fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'instagram', brain }) }),
        fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'facebook', brain }) }),
        fetch('/api/content/social', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ topic, platform: 'linkedin', brain }) }),
      ])
      const [ig, fb, li] = await Promise.all([igRes.json(), fbRes.json(), liRes.json()])
      const result = { instagram: ig.content, facebook: fb.content, linkedin: li.content }
      setPosts(result)
      setEdited(result)
      if (cruiseControl) {
        setSubmitted({ instagram: true, facebook: true, linkedin: true })
      }
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  }

  const handleSubmit = (platform: string) => {
    setSubmitted(prev => ({ ...prev, [platform]: true }))
  }

  const handleSubmitAll = () => {
    setSubmitted({ instagram: true, facebook: true, linkedin: true })
  }

  const platforms = [
    { key: 'instagram', label: 'Instagram', color: '#E1306C' },
    { key: 'facebook', label: 'Facebook', color: '#1877F2' },
    { key: 'linkedin', label: 'LinkedIn', color: '#0A66C2' },
  ]

  return (
    <div style={{ padding: '40px', maxWidth: '900px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <div>
          <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#fff', margin: 0 }}>Social Media Generator</h1>
          <p style={{ color: '#888', marginTop: '8px' }}>One topic — generates Instagram, Facebook, and LinkedIn posts at once</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '8px', padding: '12px 16px' }}>
          <span style={{ color: '#ccc', fontSize: '13px' }}>Cruise Control</span>
          <div
            onClick={() => setCruiseControl(!cruiseControl)}
            style={{
              width: '44px', height: '24px', borderRadius: '12px', cursor: 'pointer',
              background: cruiseControl ? '#f97316' : '#333',
              position: 'relative', transition: 'background 0.2s'
            }}
          >
            <div style={{
              width: '18px', height: '18px', borderRadius: '50%', background: '#fff',
              position: 'absolute', top: '3px',
              left: cruiseControl ? '23px' : '3px', transition: 'left 0.2s'
            }} />
          </div>
          <span style={{ color: cruiseControl ? '#f97316' : '#555', fontSize: '12px', fontWeight: 'bold' }}>
            {cruiseControl ? 'AUTO' : 'MANUAL'}
          </span>
        </div>
      </div>

      {brain && (
        <div style={{ background: '#1a1a1a', border: '1px solid #222', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#aaa' }}>
          Business Brain loaded: <span style={{ color: '#f97316' }}>{brain.businessName}</span>
        </div>
      )}

      {cruiseControl && (
        <div style={{ background: '#1a1a0a', border: '1px solid #f97316', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px', fontSize: '13px', color: '#f97316' }}>
          Cruise Control is ON — posts will be marked as approved automatically
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

      {edited && (
        <>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {platforms.map(({ key, label, color }) => (
              <div key={key} style={{ background: '#1a1a1a', border: submitted[key as keyof typeof submitted] ? '1px solid #22c55e' : '1px solid #333', borderRadius: '8px', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span style={{ color, fontWeight: 'bold', fontSize: '15px' }}>{label}</span>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    {submitted[key as keyof typeof submitted] ? (
                      <span style={{ color: '#22c55e', fontSize: '13px', fontWeight: 'bold' }}>Approved</span>
                    ) : (
                      <button
                        onClick={() => handleSubmit(key)}
                        style={{ background: color, color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 14px', cursor: 'pointer', fontSize: '12px' }}
                      >
                        Approve & Post
                      </button>
                    )}
                    <button
                      onClick={() => navigator.clipboard.writeText(edited[key as keyof typeof edited])}
                      style={{ background: '#333', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 12px', cursor: 'pointer', fontSize: '12px' }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
                <textarea
                  value={edited[key as keyof typeof edited]}
                  onChange={(e) => setEdited(prev => ({ ...prev!, [key]: e.target.value }))}
                  rows={10}
                  style={{ width: '100%', background: '#111', border: '1px solid #222', borderRadius: '6px', color: '#ddd', fontSize: '14px', lineHeight: '1.7', padding: '12px', resize: 'vertical', fontFamily: 'inherit' }}
                />
              </div>
            ))}
          </div>

          {!submitted.instagram || !submitted.facebook || !submitted.linkedin ? (
            <button
              onClick={handleSubmitAll}
              style={{ marginTop: '24px', background: '#f97316', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px 32px', fontSize: '15px', cursor: 'pointer', width: '100%' }}
            >
              Approve & Post All 3
            </button>
          ) : (
            <div style={{ marginTop: '24px', background: '#0a1a0a', border: '1px solid #22c55e', borderRadius: '8px', padding: '16px', textAlign: 'center', color: '#22c55e', fontSize: '15px' }}>
              All 3 posts approved! Auto-posting coming soon when social accounts are connected.
            </div>
          )}
        </>
      )}
    </div>
  )
}
