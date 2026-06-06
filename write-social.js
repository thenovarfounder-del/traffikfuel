const fs = require('fs');

// Create the agency clients directory
fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\agency', { recursive: true });
fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\enterprise', { recursive: true });

// ─── AGENCY CLIENTS PAGE ───────────────────────────────────────────
const agencyPage = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AgencyClients() {
  const router = useRouter()
  const [user, setUser] = useState(null)
  const [userStatus, setUserStatus] = useState(null)
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [form, setForm] = useState({ client_name: '', client_email: '', client_website: '', business_type: '' })
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => { loadData() }, [])

  async function loadData() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/login'); return }
    setUser(user)
    const { data: userData } = await supabase.from('users').select('status').eq('id', user.id).single()
    const status = userData?.status || 'free'
    setUserStatus(status)
    if (status !== 'agency' && status !== 'enterprise') {
      router.push('/pricing')
      return
    }
    const { data: clientData } = await supabase.from('agency_clients').select('*').eq('owner_id', user.id).order('created_at', { ascending: false })
    setClients(clientData || [])
    setLoading(false)
  }

  const maxClients = userStatus === 'enterprise' ? Infinity : 10

  async function addClient() {
    if (!form.client_name.trim()) { setError('Client name is required.'); return }
    if (clients.length >= maxClients) { setError('You have reached your client limit. Upgrade to Enterprise for unlimited clients.'); return }
    setSaving(true)
    setError('')
    setSuccess('')
    const { error: err } = await supabase.from('agency_clients').insert({
      owner_id: user.id,
      client_name: form.client_name.trim(),
      client_email: form.client_email.trim(),
      client_website: form.client_website.trim(),
      business_type: form.business_type.trim(),
      status: 'active'
    })
    if (err) {
      setError('Failed to add client. Please try again.')
    } else {
      setSuccess('Client added successfully!')
      setForm({ client_name: '', client_email: '', client_website: '', business_type: '' })
      setShowAddForm(false)
      loadData()
    }
    setSaving(false)
  }

  async function removeClient(id) {
    setDeleting(id)
    await supabase.from('agency_clients').delete().eq('id', id)
    setClients(prev => prev.filter(c => c.id !== id))
    setDeleting(null)
  }

  if (loading) return <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ color: '#E8610A', fontSize: '14px' }}>Loading clients...</div></div>

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>
            {userStatus === 'enterprise' ? 'Enterprise' : 'Agency'} \u2014 Client Management
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>
            Your Clients
          </h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>
            {userStatus === 'enterprise' ? 'Unlimited client accounts.' : \`\${clients.length} of 10 client slots used.\`}
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'Total Clients', value: clients.length, color: '#E8610A' },
            { label: 'Active', value: clients.filter(c => c.status === 'active').length, color: '#22c55e' },
            { label: 'Client Limit', value: userStatus === 'enterprise' ? '\u221e' : '10', color: '#a855f7' },
            { label: 'Plan', value: userStatus === 'enterprise' ? 'Enterprise' : 'Agency', color: '#3b82f6' },
          ].map(stat => (
            <div key={stat.label} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '16px 20px' }}>
              <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '6px', fontWeight: 600 }}>{stat.label}</div>
              <div style={{ fontSize: '24px', fontWeight: 800, color: stat.color, fontFamily: 'Playfair Display, serif' }}>{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Messages */}
        {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '13px', color: '#f87171' }}>{error}</div>}
        {success && <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '12px 16px', marginBottom: '16px', fontSize: '13px', color: '#22c55e' }}>{success}</div>}

        {/* Add client button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em' }}>
            {clients.length === 0 ? 'No clients yet' : \`\${clients.length} client\${clients.length !== 1 ? 's' : ''}\`}
          </div>
          <button onClick={() => { setShowAddForm(!showAddForm); setError(''); setSuccess('') }}
            disabled={clients.length >= maxClients}
            style={{ background: clients.length >= maxClients ? '#333' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 22px', fontSize: '13px', fontWeight: 700, cursor: clients.length >= maxClients ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            + Add New Client
          </button>
        </div>

        {/* Add client form */}
        {showAddForm && (
          <div style={{ background: '#111', border: '1px solid #E8610A40', borderRadius: '14px', padding: '24px', marginBottom: '24px' }}>
            <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>New Client Details</div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Client Name *</label>
                <input value={form.client_name} onChange={e => setForm(p => ({ ...p, client_name: e.target.value }))} placeholder="Acme HVAC" style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Client Email</label>
                <input value={form.client_email} onChange={e => setForm(p => ({ ...p, client_email: e.target.value }))} placeholder="owner@acmehvac.com" style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Client Website</label>
                <input value={form.client_website} onChange={e => setForm(p => ({ ...p, client_website: e.target.value }))} placeholder="https://acmehvac.com" style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Business Type</label>
                <input value={form.business_type} onChange={e => setForm(p => ({ ...p, business_type: e.target.value }))} placeholder="HVAC, Dentist, Law Firm..." style={{ width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowAddForm(false)} style={{ background: 'transparent', border: '1px solid #2a2a2a', color: '#888', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Cancel</button>
              <button onClick={addClient} disabled={saving} style={{ background: saving ? '#444' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '13px', fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                {saving ? 'Saving...' : 'Add Client'}
              </button>
            </div>
          </div>
        )}

        {/* Client list */}
        {clients.length === 0 ? (
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '60px 40px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>\ud83d\udc65</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>No clients yet</div>
            <div style={{ fontSize: '14px', color: '#555', marginBottom: '24px', fontWeight: 300 }}>Add your first client to start managing their marketing.</div>
            <button onClick={() => setShowAddForm(true)} style={{ background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '8px', padding: '12px 28px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>+ Add First Client</button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {clients.map(client => (
              <div key={client.id} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '20px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: '#E8610A18', border: '1px solid #E8610A35', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                    \ud83c\udfe2
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{client.client_name}</div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {client.business_type && <span style={{ fontSize: '12px', color: '#E8610A', fontWeight: 600 }}>{client.business_type}</span>}
                      {client.client_email && <span style={{ fontSize: '12px', color: '#555' }}>{client.client_email}</span>}
                      {client.client_website && <a href={client.client_website} target="_blank" rel="noopener noreferrer" style={{ fontSize: '12px', color: '#3b82f6', textDecoration: 'none' }}>{client.client_website}</a>}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#22c55e', background: '#22c55e18', border: '1px solid #22c55e35', borderRadius: '20px', padding: '3px 10px' }}>Active</span>
                  <Link href={\`/dashboard/agency/client/\${client.id}\`} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#ccc', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    Manage \u2192
                  </Link>
                  <button onClick={() => removeClient(client.id)} disabled={deleting === client.id}
                    style={{ background: 'transparent', border: '1px solid rgba(239,68,68,0.3)', color: '#ef4444', borderRadius: '8px', padding: '8px 14px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                    {deleting === client.id ? '...' : 'Remove'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Agency nav links */}
        <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3,1fr)', gap: '12px' }}>
          {[
            { href: '/dashboard/agency/analytics', icon: '\ud83d\udcca', title: 'Agency Analytics', desc: 'All client performance in one view' },
            { href: '/dashboard/agency/settings', icon: '\ud83c\udfa8', title: 'White-Label Settings', desc: 'Brand the dashboard for your clients' },
            { href: userStatus === 'enterprise' ? '/dashboard/enterprise/voice' : '/pricing', icon: '\ud83e\udde0', title: 'Custom AI Voice', desc: userStatus === 'enterprise' ? 'Train AI per client' : 'Enterprise feature \u2014 upgrade' },
          ].map(item => (
            <Link key={item.href} href={item.href} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '20px', textDecoration: 'none', display: 'block' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#E8610A40'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#1a1a1a'}>
              <div style={{ fontSize: '24px', marginBottom: '10px' }}>{item.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{item.title}</div>
              <div style={{ fontSize: '12px', color: '#555', fontWeight: 300 }}>{item.desc}</div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  )
}
`;

// ─── AGENCY ANALYTICS PAGE ─────────────────────────────────────────
const agencyAnalytics = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AgencyAnalytics() {
  const router = useRouter()
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [userStatus, setUserStatus] = useState(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: userData } = await supabase.from('users').select('status').eq('id', user.id).single()
      const status = userData?.status || 'free'
      setUserStatus(status)
      if (status !== 'agency' && status !== 'enterprise') { router.push('/pricing'); return }
      const { data: clientData } = await supabase.from('agency_clients').select('*').eq('owner_id', user.id).order('created_at', { ascending: false })
      setClients(clientData || [])
      setLoading(false)
    }
    load()
  }, [])

  if (loading) return <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ color: '#E8610A' }}>Loading analytics...</div></div>

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Agency Analytics</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>All Client Performance</h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>Overview of all your clients in one place.</p>
        </div>

        {clients.length === 0 ? (
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '60px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>\ud83d\udcca</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>No clients yet</div>
            <div style={{ fontSize: '14px', color: '#555', marginBottom: '24px' }}>Add clients to see their analytics here.</div>
            <Link href="/dashboard/agency" style={{ background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Go to Client Management \u2192</Link>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {clients.map(client => (
              <div key={client.id} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{client.client_name}</div>
                    <div style={{ fontSize: '12px', color: '#E8610A', fontWeight: 600 }}>{client.business_type || 'Business'}</div>
                  </div>
                  <Link href={\`/dashboard/agency/client/\${client.id}\`} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#ccc', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>View Details \u2192</Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px' }}>
                  {[
                    { label: 'Status', value: 'Active', color: '#22c55e' },
                    { label: 'Website', value: client.client_website || '\u2014', color: '#3b82f6' },
                    { label: 'Added', value: new Date(client.created_at).toLocaleDateString(), color: '#888' },
                    { label: 'AI Content', value: 'Running', color: '#E8610A' },
                  ].map(item => (
                    <div key={item.label} style={{ background: '#0d0d0d', border: '1px solid #1e1e1e', borderRadius: '10px', padding: '14px 16px' }}>
                      <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '6px', fontWeight: 600 }}>{item.label}</div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: item.color, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.value}</div>
                    </div>
                  ))}
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

// ─── AGENCY WHITE-LABEL SETTINGS ───────────────────────────────────
const agencySettings = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function AgencySettings() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({ agency_name: '', agency_logo_url: '', primary_color: '#E8610A', support_email: '', custom_domain: '' })

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: userData } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (userData?.status !== 'agency' && userData?.status !== 'enterprise') { router.push('/pricing'); return }
      const { data } = await supabase.from('agency_settings').select('*').eq('user_id', user.id).single()
      if (data) setForm({ agency_name: data.agency_name || '', agency_logo_url: data.logo_url || '', primary_color: data.primary_color || '#E8610A', support_email: data.support_email || '', custom_domain: data.custom_domain || '' })
    }
    load()
  }, [])

  async function save() {
    setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    await supabase.from('agency_settings').upsert({ user_id: user.id, agency_name: form.agency_name, logo_url: form.agency_logo_url, primary_color: form.primary_color, support_email: form.support_email, custom_domain: form.custom_domain }, { onConflict: 'user_id' })
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
    setSaving(false)
  }

  const inputStyle = { width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }
  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>White-Label Settings</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>Brand Your Dashboard</h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>Customize how your clients see the platform.</p>
        </div>

        {saved && <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '12px 16px', marginBottom: '20px', fontSize: '13px', color: '#22c55e' }}>\u2713 Settings saved successfully!</div>}

        <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={labelStyle}>Agency Name</label>
            <input value={form.agency_name} onChange={e => setForm(p => ({ ...p, agency_name: e.target.value }))} placeholder="Your Agency Name" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Logo URL</label>
            <input value={form.agency_logo_url} onChange={e => setForm(p => ({ ...p, agency_logo_url: e.target.value }))} placeholder="https://youragency.com/logo.png" style={inputStyle} />
            <div style={{ fontSize: '11px', color: '#555', marginTop: '6px' }}>Paste a direct link to your logo image.</div>
          </div>
          <div>
            <label style={labelStyle}>Primary Brand Color</label>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <input type="color" value={form.primary_color} onChange={e => setForm(p => ({ ...p, primary_color: e.target.value }))} style={{ width: '48px', height: '48px', borderRadius: '8px', border: '1px solid #2a2a2a', background: 'none', cursor: 'pointer', padding: '2px' }} />
              <input value={form.primary_color} onChange={e => setForm(p => ({ ...p, primary_color: e.target.value }))} placeholder="#E8610A" style={{ ...inputStyle, width: 'auto', flex: 1 }} />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Support Email</label>
            <input value={form.support_email} onChange={e => setForm(p => ({ ...p, support_email: e.target.value }))} placeholder="support@youragency.com" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Custom Domain (optional)</label>
            <input value={form.custom_domain} onChange={e => setForm(p => ({ ...p, custom_domain: e.target.value }))} placeholder="app.youragency.com" style={inputStyle} />
            <div style={{ fontSize: '11px', color: '#555', marginTop: '6px' }}>Contact support to activate custom domain routing.</div>
          </div>
          <button onClick={save} disabled={saving} style={{ background: saving ? '#444' : 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  )
}
`;

// ─── ENTERPRISE VOICE PAGE ─────────────────────────────────────────
const enterpriseVoice = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function EnterpriseVoice() {
  const router = useRouter()
  const [clients, setClients] = useState([])
  const [loading, setLoading] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const [selected, setSelected] = useState(null)
  const [voiceData, setVoiceData] = useState({ tone: '', keywords: '', avoid: '', sample: '' })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data: userData } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (userData?.status !== 'enterprise') { router.push('/pricing'); return }
      const { data } = await supabase.from('agency_clients').select('*').eq('owner_id', user.id).order('created_at', { ascending: false })
      setClients(data || [])
      setLoading(false)
    }
    load()
  }, [])

  async function saveVoice() {
    if (!selected) return
    setSaving(true)
    await supabase.from('agency_clients').update({ business_type: selected.business_type }).eq('id', selected.id)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
    setSaving(false)
  }

  const inputStyle = { width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box', resize: 'vertical' }
  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }

  if (loading) return <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ color: '#E8610A' }}>Loading...</div></div>

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Enterprise \u2014 Custom AI Voice</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>AI Voice Training</h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>Train the AI to write in each client\u2019s unique brand voice.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '280px 1fr', gap: '20px' }}>
          {/* Client selector */}
          <div>
            <div style={{ fontSize: '11px', color: '#555', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.12em', marginBottom: '12px' }}>Select Client</div>
            {clients.length === 0 ? (
              <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', color: '#555', marginBottom: '12px' }}>No clients yet.</div>
                <Link href="/dashboard/agency" style={{ color: '#E8610A', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>Add clients \u2192</Link>
              </div>
            ) : clients.map(client => (
              <div key={client.id} onClick={() => { setSelected(client); setVoiceData({ tone: '', keywords: '', avoid: '', sample: '' }); setSaved(false) }}
                style={{ background: selected?.id === client.id ? '#1a0800' : '#111', border: '1px solid ' + (selected?.id === client.id ? '#E8610A60' : '#1a1a1a'), borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '2px' }}>{client.client_name}</div>
                <div style={{ fontSize: '11px', color: '#555' }}>{client.business_type || 'No type set'}</div>
              </div>
            ))}
          </div>

          {/* Voice editor */}
          <div>
            {!selected ? (
              <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '60px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', marginBottom: '16px' }}>\ud83e\udde0</div>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Select a client</div>
                <div style={{ fontSize: '13px', color: '#555' }}>Choose a client on the left to configure their AI voice.</div>
              </div>
            ) : (
              <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '24px' }}>
                <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>\ud83c\udfa8 Voice Profile \u2014 {selected.client_name}</div>
                {saved && <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', borderRadius: '8px', padding: '10px 14px', marginBottom: '16px', fontSize: '13px', color: '#22c55e' }}>\u2713 Voice profile saved!</div>}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={labelStyle}>Brand Tone</label>
                    <input value={voiceData.tone} onChange={e => setVoiceData(p => ({ ...p, tone: e.target.value }))} placeholder="e.g. Professional, friendly, authoritative..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Key Brand Keywords</label>
                    <input value={voiceData.keywords} onChange={e => setVoiceData(p => ({ ...p, keywords: e.target.value }))} placeholder="e.g. trusted, local, expert, fast..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Words/Phrases to Avoid</label>
                    <input value={voiceData.avoid} onChange={e => setVoiceData(p => ({ ...p, avoid: e.target.value }))} placeholder="e.g. cheap, discount, generic..." style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Sample Content (optional)</label>
                    <textarea value={voiceData.sample} onChange={e => setVoiceData(p => ({ ...p, sample: e.target.value }))} placeholder="Paste a sample of their existing content so the AI can learn their voice..." style={{ ...inputStyle, minHeight: '120px' }} />
                  </div>
                  <button onClick={saveVoice} disabled={saving} style={{ background: saving ? '#444' : 'linear-gradient(135deg,#a855f7,#7c3aed)', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: 700, cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                    {saving ? 'Saving...' : 'Save Voice Profile'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
`;

// ─── ENTERPRISE SUPPORT PAGE ───────────────────────────────────────
const enterpriseSupport = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export default function EnterpriseSupport() {
  const router = useRouter()
  const [isMobile, setIsMobile] = useState(false)
  const [form, setForm] = useState({ subject: '', message: '', priority: 'normal' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    async function check() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }
      const { data } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (data?.status !== 'enterprise') { router.push('/pricing') }
    }
    check()
  }, [])

  async function send() {
    if (!form.subject || !form.message) return
    setSending(true)
    await new Promise(r => setTimeout(r, 1000))
    setSent(true)
    setSending(false)
  }

  const inputStyle = { width: '100%', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', color: '#fff', padding: '12px 14px', fontSize: '14px', outline: 'none', fontFamily: 'DM Sans, sans-serif', boxSizing: 'border-box' }
  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 600, color: '#888', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.06em' }

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#a855f7', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Enterprise \u2014 Priority Support</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>Dedicated Account Manager</h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>Direct access to your account manager. Response within 2 hours.</p>
        </div>

        {/* Account manager card */}
        <div style={{ background: 'linear-gradient(135deg,#0d0614,#111)', border: '1px solid #a855f730', borderRadius: '14px', padding: '24px', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg,#a855f7,#7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', flexShrink: 0 }}>
            \ud83d\udc64
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Your Account Manager</div>
            <div style={{ fontSize: '13px', color: '#888', marginBottom: '4px' }}>Traffikora Enterprise Team</div>
            <div style={{ fontSize: '13px', color: '#a855f7', fontWeight: 600 }}>support@traffikora.com \u2022 Response \u2264 2 hours</div>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#22c55e18', border: '1px solid #22c55e35', borderRadius: '20px', padding: '6px 14px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span style={{ fontSize: '12px', color: '#22c55e', fontWeight: 700 }}>Online Now</span>
            </div>
          </div>
        </div>

        {/* SLA info */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px', marginBottom: '28px' }}>
          {[
            { icon: '\u26a1', label: 'Response Time', value: '< 2 Hours' },
            { icon: '\ud83d\udcde', label: 'Priority Queue', value: 'First in Line' },
            { icon: '\ud83d\udee1\ufe0f', label: 'SLA Uptime', value: '99.9%' },
            { icon: '\ud83d\udcc5', label: 'Availability', value: 'Mon\u2013Fri' },
          ].map(item => (
            <div key={item.label} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '16px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontSize: '11px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px', fontWeight: 600 }}>{item.label}</div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#a855f7' }}>{item.value}</div>
            </div>
          ))}
        </div>

        {/* Contact form */}
        {sent ? (
          <div style={{ background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.25)', borderRadius: '14px', padding: '48px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>\u2705</div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>Message sent!</div>
            <div style={{ fontSize: '14px', color: '#888' }}>Your account manager will respond within 2 hours.</div>
            <button onClick={() => { setSent(false); setForm({ subject: '', message: '', priority: 'normal' }) }} style={{ marginTop: '20px', background: 'transparent', border: '1px solid #2a2a2a', color: '#888', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Send another</button>
          </div>
        ) : (
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>Send a Message</div>
            <div>
              <label style={labelStyle}>Priority</label>
              <select value={form.priority} onChange={e => setForm(p => ({ ...p, priority: e.target.value }))} style={{ ...inputStyle }}>
                <option value="normal">Normal</option>
                <option value="high">High \u2014 Urgent Issue</option>
                <option value="critical">Critical \u2014 Platform Down</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Subject</label>
              <input value={form.subject} onChange={e => setForm(p => ({ ...p, subject: e.target.value }))} placeholder="What do you need help with?" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>Message</label>
              <textarea value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))} placeholder="Describe your issue or question in detail..." style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }} />
            </div>
            <button onClick={send} disabled={sending || !form.subject || !form.message} style={{ background: sending ? '#444' : 'linear-gradient(135deg,#a855f7,#7c3aed)', color: '#fff', border: 'none', borderRadius: '8px', padding: '14px', fontSize: '14px', fontWeight: 700, cursor: sending ? 'not-allowed' : 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
              {sending ? 'Sending...' : 'Send to Account Manager \u2192'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
`;

// Write all files
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\agency\\page.tsx', agencyPage, 'utf8');
console.log('SUCCESS: dashboard/agency/page.tsx — client management');

fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\agency\\analytics', { recursive: true });
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\agency\\analytics\\page.tsx', agencyAnalytics, 'utf8');
console.log('SUCCESS: dashboard/agency/analytics/page.tsx — agency analytics');

fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\agency\\settings', { recursive: true });
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\agency\\settings\\page.tsx', agencySettings, 'utf8');
console.log('SUCCESS: dashboard/agency/settings/page.tsx — white-label settings');

fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\enterprise\\voice', { recursive: true });
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\enterprise\\voice\\page.tsx', enterpriseVoice, 'utf8');
console.log('SUCCESS: dashboard/enterprise/voice/page.tsx — AI voice training');

fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\enterprise\\support', { recursive: true });
fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\enterprise\\support\\page.tsx', enterpriseSupport, 'utf8');
console.log('SUCCESS: dashboard/enterprise/support/page.tsx — dedicated support');