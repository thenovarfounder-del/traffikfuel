// @ts-nocheck
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
            {userStatus === 'enterprise' ? 'Enterprise' : 'Agency'} — Client Management
          </div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: isMobile ? '28px' : '36px', fontWeight: 700, margin: '0 0 8px', color: '#fff' }}>
            Your Clients
          </h1>
          <p style={{ fontSize: '14px', color: '#666', margin: 0, fontWeight: 300 }}>
            {userStatus === 'enterprise' ? 'Unlimited client accounts.' : `${clients.length} of 10 client slots used.`}
          </p>
        </div>

        {/* Stats bar */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px', marginBottom: '28px' }}>
          {[
            { label: 'Total Clients', value: clients.length, color: '#E8610A' },
            { label: 'Active', value: clients.filter(c => c.status === 'active').length, color: '#22c55e' },
            { label: 'Client Limit', value: userStatus === 'enterprise' ? '∞' : '10', color: '#a855f7' },
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
            {clients.length === 0 ? 'No clients yet' : `${clients.length} client${clients.length !== 1 ? 's' : ''}`}
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
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>👥</div>
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
                    🏢
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
                  <Link href={`/dashboard/agency/client/${client.id}`} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#ccc', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
                    Manage →
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
            { href: '/dashboard/agency/analytics', icon: '📊', title: 'Agency Analytics', desc: 'All client performance in one view' },
            { href: '/dashboard/agency/settings', icon: '🎨', title: 'White-Label Settings', desc: 'Brand the dashboard for your clients' },
            { href: userStatus === 'enterprise' ? '/dashboard/enterprise/voice' : '/pricing', icon: '🧠', title: 'Custom AI Voice', desc: userStatus === 'enterprise' ? 'Train AI per client' : 'Enterprise feature — upgrade' },
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
