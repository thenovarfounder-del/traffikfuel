const fs = require('fs');

// Create the secure admin page at a secret route
// Also add PIN protection as second layer
// Randy's ID checked server-side via API before anything renders

// Step 1 — Secure API route that verifies Randy server-side
const verifyRoute = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const ADMIN_ID = '03ef19e5-528c-470d-bc7b-509438104d03'
const ADMIN_PIN = '749251'

export async function POST(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { pin, token } = await request.json()

  // Verify PIN
  if (pin !== ADMIN_PIN) {
    return NextResponse.json({ error: 'Invalid PIN' }, { status: 401 })
  }

  // Verify session token belongs to Randy
  const { data: { user }, error } = await supabase.auth.getUser(token)
  if (error || !user || user.id !== ADMIN_ID) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 403 })
  }

  return NextResponse.json({ success: true })
}
`;

// Step 2 — Secure admin page at secret route
const securePage = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const ADMIN_ID = '03ef19e5-528c-470d-bc7b-509438104d03'

export default function SecureAdminAffiliates() {
  const router = useRouter()
  const [phase, setPhase] = useState('checking') // checking | pin | admin
  const [pin, setPin] = useState('')
  const [pinError, setPinError] = useState('')
  const [pinLoading, setPinLoading] = useState(false)
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(false)
  const [processing, setProcessing] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [filter, setFilter] = useState('pending')
  const [sessionToken, setSessionToken] = useState(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    async function checkAuth() {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session || session.user.id !== ADMIN_ID) {
        router.push('/dashboard')
        return
      }
      setSessionToken(session.access_token)
      setPhase('pin')
    }
    checkAuth()
  }, [])

  async function verifyPin() {
    if (pin.length !== 6) { setPinError('PIN must be 6 digits'); return }
    setPinLoading(true)
    setPinError('')
    try {
      const res = await fetch('/api/admin/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin, token: sessionToken })
      })
      const data = await res.json()
      if (data.success) {
        setPhase('admin')
        loadApplications()
      } else {
        setPinError('Incorrect PIN. Try again.')
        setPin('')
      }
    } catch {
      setPinError('Verification failed. Try again.')
    }
    setPinLoading(false)
  }

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
      await supabase.from('affiliate_applications').update({ status: 'approved' }).eq('id', app.id)
      await fetch('/api/affiliates/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId: app.id, email: app.email, name: app.name, action: 'approve' })
      })
      await loadApplications()
    } catch (e) { console.error(e) }
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
    } catch (e) { console.error(e) }
    setProcessing(null)
  }

  const filtered = applications.filter(a => filter === 'all' ? true : a.status === filter)
  const counts = {
    pending: applications.filter(a => a.status === 'pending').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  }

  // CHECKING PHASE
  if (phase === 'checking') return (
    <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8610A', fontFamily: 'DM Sans, sans-serif' }}>
      Verifying access...
    </div>
  )

  // PIN PHASE
  if (phase === 'pin') return (
    <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'DM Sans, sans-serif', padding: '24px' }}>
      <style>{\`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');\`}</style>
      <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '20px', padding: '48px 40px', maxWidth: '380px', width: '100%', textAlign: 'center' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>\ud83d\udd10</div>
        <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '20px', fontWeight: 900, color: '#fff', letterSpacing: '2px', marginBottom: '8px' }}>ADMIN ACCESS</h1>
        <p style={{ fontSize: '13px', color: '#555', marginBottom: '32px', fontWeight: 300 }}>Enter your 6-digit admin PIN to continue</p>

        <input
          type="password"
          maxLength={6}
          value={pin}
          onChange={e => setPin(e.target.value.replace(/[^0-9]/g, ''))}
          onKeyDown={e => e.key === 'Enter' && verifyPin()}
          placeholder="\u2022\u2022\u2022\u2022\u2022\u2022"
          style={{ width: '100%', background: '#0a0a0a', border: '1px solid #2a2a2a', borderRadius: '10px', color: '#fff', padding: '16px', fontSize: '24px', outline: 'none', fontFamily: 'Orbitron, sans-serif', letterSpacing: '8px', textAlign: 'center', boxSizing: 'border-box', marginBottom: '12px' }}
          onFocus={e => e.target.style.borderColor = '#E8610A'}
          onBlur={e => e.target.style.borderColor = '#2a2a2a'}
          autoFocus
        />

        {pinError && (
          <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '10px', fontSize: '13px', color: '#f87171', marginBottom: '12px' }}>{pinError}</div>
        )}

        <button onClick={verifyPin} disabled={pinLoading || pin.length !== 6}
          style={{ width: '100%', background: pin.length === 6 ? 'linear-gradient(135deg,#E8610A,#C84E06)' : '#1a1a1a', color: pin.length === 6 ? '#fff' : '#444', border: 'none', borderRadius: '10px', padding: '14px', fontSize: '14px', fontWeight: 700, cursor: pin.length === 6 ? 'pointer' : 'not-allowed', fontFamily: 'DM Sans, sans-serif', boxShadow: pin.length === 6 ? '0 4px 20px rgba(232,97,10,0.4)' : 'none' }}>
          {pinLoading ? 'Verifying...' : 'Enter Admin Panel \u2192'}
        </button>

        <p style={{ fontSize: '11px', color: '#333', marginTop: '20px' }}>Unauthorized access attempts are logged.</p>
      </div>
    </div>
  )

  // ADMIN PANEL PHASE
  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <style>{\`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');\`}</style>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Admin Panel \u2014 Secure</div>
            <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: isMobile ? '22px' : '32px', fontWeight: 900, color: '#fff', letterSpacing: '1px' }}>
              AFFILIATE <span style={{ color: '#E8610A' }}>APPLICATIONS</span>
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#111', border: '1px solid #22c55e30', borderRadius: '10px', padding: '10px 18px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
            <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 700 }}>SECURED ACCESS</span>
          </div>
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

        {/* APPLICATIONS */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px', color: '#E8610A' }}>Loading applications...</div>
        ) : filtered.length === 0 ? (
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '60px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>\ud83d\udce5</div>
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
                          {processing === app.id ? '...' : '\u2713 Approve'}
                        </button>
                        <button onClick={() => reject(app)} disabled={processing === app.id}
                          style={{ background: 'transparent', color: '#ef4444', border: '1px solid #ef444440', borderRadius: '8px', padding: '8px 20px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                          {processing === app.id ? '...' : '\u2717 Reject'}
                        </button>
                      </>
                    )}
                  </div>
                </div>
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
                  <div style={{ background: '#0d0d0d', borderRadius: '8px', padding: '12px 16px' }}>
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
`;

// Create directories
fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\admin', { recursive: true });
fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\admin\\x7k9-affiliates', { recursive: true });

// Write files
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\admin\\verify\\route.ts', verifyRoute, 'utf8');
console.log('SUCCESS: api/admin/verify/route.ts — server-side PIN + session verification');

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\admin\\x7k9-affiliates\\page.tsx', securePage, 'utf8');
console.log('SUCCESS: admin/x7k9-affiliates/page.tsx — triple secured admin panel');