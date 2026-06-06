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
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>📊</div>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>No clients yet</div>
            <div style={{ fontSize: '14px', color: '#555', marginBottom: '24px' }}>Add clients to see their analytics here.</div>
            <Link href="/dashboard/agency" style={{ background: 'linear-gradient(135deg,#E8610A,#C84E06)', color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none' }}>Go to Client Management →</Link>
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
                  <Link href={`/dashboard/agency/client/${client.id}`} style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', color: '#ccc', borderRadius: '8px', padding: '8px 16px', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>View Details →</Link>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4,1fr)', gap: '12px' }}>
                  {[
                    { label: 'Status', value: 'Active', color: '#22c55e' },
                    { label: 'Website', value: client.client_website || '—', color: '#3b82f6' },
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
