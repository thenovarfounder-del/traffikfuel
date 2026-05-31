const fs = require('fs');

let cal = fs.readFileSync('src/app/dashboard/calendar/page.tsx', 'utf8');

// Replace the loadEvents function to also load connected platforms
cal = cal.replace(
  `  useEffect(() => {
    loadEvents()
  }, [currentMonth, currentYear])

  async function loadEvents() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }`,
  `  const [connectedPlatforms, setConnectedPlatforms] = useState([])

  useEffect(() => {
    loadConnectedPlatforms()
  }, [])

  useEffect(() => {
    loadEvents()
  }, [currentMonth, currentYear])

  async function loadConnectedPlatforms() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    const { data } = await supabase
      .from('social_accounts')
      .select('platform')
      .eq('user_id', user.id)
    const platforms = data ? data.map(d => d.platform.toLowerCase()) : []
    const { data: wp } = await supabase
      .from('wordpress_connections')
      .select('id')
      .eq('user_id', user.id)
      .single()
    if (wp) platforms.push('wordpress')
    setConnectedPlatforms(platforms)
  }

  async function loadEvents() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }`
);

// Replace the platform dropdown in the modal to filter by connected platforms
cal = cal.replace(
  `              {newType === 'social' && (
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', fontSize: '13px', color: '#333' }}>Platform</label>
                  <select value={newPlatform} onChange={e => setNewPlatform(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', background: '#fff' }}>
                    <option value=''>All Platforms</option>
                    <option value='facebook'>Facebook</option>
                    <option value='instagram'>Instagram</option>
                    <option value='tiktok'>TikTok</option>
                    <option value='twitter'>X / Twitter</option>
                    <option value='linkedin'>LinkedIn</option>
                  </select>
                </div>
              )}`,
  `              {newType === 'social' && (
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '6px', fontSize: '13px', color: '#333' }}>Platform</label>
                  {connectedPlatforms.filter(p => p !== 'wordpress').length === 0 ? (
                    <p style={{ fontSize: '13px', color: '#dc2626', padding: '10px', background: '#fef2f2', borderRadius: '8px' }}>No social platforms connected. Go to Connections to connect your accounts.</p>
                  ) : (
                    <select value={newPlatform} onChange={e => setNewPlatform(e.target.value)} style={{ width: '100%', padding: '10px 14px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '14px', boxSizing: 'border-box', fontFamily: 'DM Sans, sans-serif', background: '#fff' }}>
                      <option value=''>All Connected Platforms</option>
                      {connectedPlatforms.includes('facebook') && <option value='facebook'>Facebook</option>}
                      {connectedPlatforms.includes('instagram') && <option value='instagram'>Instagram</option>}
                      {connectedPlatforms.includes('tiktok') && <option value='tiktok'>TikTok</option>}
                      {connectedPlatforms.includes('twitter') && <option value='twitter'>X / Twitter</option>}
                      {connectedPlatforms.includes('linkedin') && <option value='linkedin'>LinkedIn</option>}
                    </select>
                  )}
                </div>
              )}`
);

// Also filter the legend to only show connected platforms + blog + google
cal = cal.replace(
  `        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {Object.entries(COLORS).map(([type, color]) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fff', padding: '5px 12px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#444', textTransform: 'capitalize' }}>{type}</span>
            </div>
          ))}
        </div>`,
  `        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {Object.entries(COLORS).filter(([type]) => type === 'blog' || type === 'google' || type === 'social' || connectedPlatforms.includes(type)).map(([type, color]) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#fff', padding: '5px 12px', borderRadius: '20px', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
              <span style={{ fontSize: '11px', fontWeight: '600', color: '#444', textTransform: 'capitalize' }}>{type}</span>
            </div>
          ))}
        </div>`
);

fs.writeFileSync('src/app/dashboard/calendar/page.tsx', cal);
console.log('DONE -- Calendar updated to show only connected platforms');