// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Only Randy can access this page
const ADMIN_ID = '03ef19e5-528c-470d-bc7b-509438104d03'

export default function AdminAffiliates() {
  const router = useRouter()
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [filter, setFilter] = useState('pending')

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user || user.id !== ADMIN_ID) {
        router.push('/dashboard')
        return
      }
      loadApplications()
    }
    load()
  }, [])

  async function loadApplications() {
    setLoading(true)
    const { data } = await supabase
      .from('affiliate_applications')
      .select('*')
      .order('created_at', { ascending: false })
    setApplications(data || [])
    setLoading(false)
  }

  async function approve(app) {
    setProcessing(app.id)
    try {
      // Update application status
      await supabase.from('affiliate_applications').update({ status: 'approved' }).eq('id', app.id)

      // Send approval email via API
      await fetch('/api/affiliates/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId: app.id, email: app.email, name: app.name, action: 'approve' })
      })

      await loadApplications()
    } catch (e) {
      console.error(e)
    }
    setProcessing(null)
  }

  async function reject(app) {
    setProcessing(app.id)
    try {
      await supabase.from('affiliate_applications').update({ status: 'rejected' }).eq('id', app.id)
      await fetch('/api/affiliates/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId: app.id, email: app.email, name: app.name, action: 'reject' })
      })
      await loadApplications()
    } catch (e) {
      console.error(e)
    }
    setProcessing(null)
  }

  const filtered = applications.filter(a => filter === 'all' ? true : a.status === filter)
  const counts = {
    pending: applications.filter(a => a.status === 'pending').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  }

  if (loading) return <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8610A', fontFamily: 'DM Sans, sans-serif' }}>Loading applications...</div>

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
      `}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Admin Panel</div>
          <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: isMobile ? '22px' : '32px', fontWeight: 900, color: '#fff', letterSpacing: '1px', marginBottom: '4px' }}>
            AFFILIATE <span style={{ color: '#E8610A' }}>APPLICATIONS</span>
          </h1>
          <p style={{ fontSize: '14px', color: '#555', fontWeight: 300 }}>Review, approve or reject affiliate applications. Approval emails fire automatically.</p>
        </div>

        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '24px' }}>
          {[
            { label: 'Pending', value: counts.pending, color: '#E8610A' },
            { label: 'Approved', value: counts.approved, color: '#22c55e' },
            { label: 'Rejected', value: counts.rejected, color: '#ef4444' },
          ].map(s => (
            <div key={s.label} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '32px', fontWeight: 900, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* FILTER TABS */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {['pending', 'approved', 'rejected', 'all'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding: '8px 18px', borderRadius: '20px', border: '1px solid ' + (filter === f ? '#E8610A' : '#2a2a2a'), background: filter === f ? 'rgba(232,97,10,0.1)' : 'transparent', color: filter === f ? '#E8610A' : '#555', fontSize: '12px', fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '.06em', fontFamily: 'DM Sans, sans-serif' }}>
              {f}
            </button>
          ))}
        </div>

        {/* APPLICATIONS LIST */}
        {filtered.length === 0 ? (
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '60px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📥</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>No {filter} applications</div>
            <div style={{ fontSize: '13px', color: '#555' }}>Check back when new applications come in.</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filtered.map(app => (
              <div key={app.id} style={{ background: '#111', border: '1px solid ' + (app.status === 'approved' ? '#22c55e30' : app.status === 'rejected' ? '#ef444430' : '#1a1a1a'), borderRadius: '14px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{app.name}</div>
                    <div style={{ fontSize: '13px', color: '#E8610A', marginBottom: '4px' }}>{app.email}</div>
                    <div style={{ fontSize: '12px', color: '#555' }}>{new Date(app.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', background: app.status === 'approved' ? '#22c55e18' : app.status === 'rejected' ? '#ef444418' : '#E8610A18', color: app.status === 'approved' ? '#22c55e' : app.status === 'rejected' ? '#ef4444' : '#E8610A', border: '1px solid ' + (app.status === 'approved' ? '#22c55e40' : app.status === 'rejected' ? '#ef444440' : '#E8610A40'), textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      {app.status}
                    </span>
                    {app.status === 'pending' && (
                      <>
                        <button onClick={() => approve(app)} disabled={processing === app.id}
                          style={{ background: '#22c55e', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 20px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                          {processing === app.id ? '...' : '✓ Approve'}
                        </button>
                        <button onClick={() => reject(app)} disabled={processing === app.id}
                          style={{ background: 'transparent', color: '#ef4444', border: '1px solid #ef444440', borderRadius: '8px', padding: '8px 20px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                          {processing === app.id ? '...' : '✗ Reject'}
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)', gap: '12px' }}>
                  {app.website && (
                    <div style={{ background: '#0d0d0d', borderRadius: '8px', padding: '12px 16px' }}>
                      <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px' }}>Website</div>
                      <a href={app.website} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#3b82f6', textDecoration: 'none' }}>{app.website}</a>
                    </div>
                  )}
                  {app.social_links && (
                    <div style={{ background: '#0d0d0d', borderRadius: '8px', padding: '12px 16px' }}>
                      <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px' }}>Social Links</div>
                      <div style={{ fontSize: '13px', color: '#ccc' }}>{app.social_links}</div>
                    </div>
                  )}
                  {app.audience_size && (
                    <div style={{ background: '#0d0d0d', borderRadius: '8px', padding: '12px 16px' }}>
                      <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px' }}>Audience Size</div>
                      <div style={{ fontSize: '13px', color: '#ccc' }}>{app.audience_size}</div>
                    </div>
                  )}
                  <div style={{ background: '#0d0d0d', borderRadius: '8px', padding: '12px 16px', gridColumn: app.website || app.social_links || app.audience_size ? 'auto' : '1/-1' }}>
                    <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px' }}>How They Plan to Promote</div>
                    <div style={{ fontSize: '13px', color: '#ccc', lineHeight: 1.6 }}>{app.how_promote}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
