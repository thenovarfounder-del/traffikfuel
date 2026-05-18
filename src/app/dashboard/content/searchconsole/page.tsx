// @ts-nocheck
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function SearchConsolePage() {
  const [userId, setUserId] = useState('')
  const [connected, setConnected] = useState(false)
  const [siteUrl, setSiteUrl] = useState('')
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [dateRange, setDateRange] = useState({ startDate: '', endDate: '' })

  useEffect(() => {
    const init = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const { data: profile } = await supabase
        .from('business_profiles')
        .select('google_access_token')
        .eq('user_id', user.id)
        .single()
      if (profile?.google_access_token) setConnected(true)
    }
    init()
    const params = new URLSearchParams(window.location.search)
    if (params.get('connected') === 'true') setConnected(true)
  }, [])

  const handleConnect = () => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
    const redirectUri = encodeURIComponent('https://www.traffikfuel.com/api/auth/google/callback')
    const scope = encodeURIComponent('https://www.googleapis.com/auth/webmasters.readonly')
    const url = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=' + clientId + '&redirect_uri=' + redirectUri + '&response_type=code&scope=' + scope + '&access_type=offline&prompt=consent&state=' + userId
    window.location.href = url
  }

  const handleFetch = async () => {
    if (!siteUrl) { setError('Enter your site URL'); return }
    setLoading(true)
    setError('')
    const res = await fetch('/api/searchconsole?userId=' + userId + '&siteUrl=' + encodeURIComponent(siteUrl))
    const data = await res.json()
    if (data.error) { setError(data.error); setLoading(false); return }
    setRows(data.rows || [])
    setDateRange({ startDate: data.startDate, endDate: data.endDate })
    setLoading(false)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Google Search Console</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>See how your site performs in Google Search.</p>

      {!connected ? (
        <div style={{ background: '#f9f9f9', border: '1px solid #ddd', borderRadius: '8px', padding: '2rem', textAlign: 'center' }}>
          <p style={{ marginBottom: '1rem', fontSize: '1rem' }}>Connect your Google Search Console to see clicks, impressions, and top keywords.</p>
          <button onClick={handleConnect} style={{ background: '#4285F4', color: 'white', border: 'none', borderRadius: '6px', padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}>
            Connect Google Search Console
          </button>
        </div>
      ) : (
        <div>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <input
              type='text'
              placeholder='https://www.yoursite.com'
              value={siteUrl}
              onChange={e => setSiteUrl(e.target.value)}
              style={{ flex: 1, padding: '0.75rem', border: '1px solid #ddd', borderRadius: '6px', fontSize: '1rem' }}
            />
            <button onClick={handleFetch} style={{ background: '#10b981', color: 'white', border: 'none', borderRadius: '6px', padding: '0.75rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}>
              {loading ? 'Loading...' : 'Fetch Data'}
            </button>
          </div>

          {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

          {rows.length > 0 && (
            <div>
              <p style={{ color: '#666', marginBottom: '1rem' }}>Showing data from {dateRange.startDate} to {dateRange.endDate}</p>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f3f4f6' }}>
                    <th style={{ padding: '0.75rem', textAlign: 'left', borderBottom: '1px solid #ddd' }}>Keyword</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #ddd' }}>Clicks</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #ddd' }}>Impressions</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #ddd' }}>CTR</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right', borderBottom: '1px solid #ddd' }}>Avg Position</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '0.75rem' }}>{row.keys[0]}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right' }}>{row.clicks}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right' }}>{row.impressions}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right' }}>{(row.ctr * 100).toFixed(1)}%</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right' }}>{row.position.toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
