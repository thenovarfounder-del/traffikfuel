const fs = require('fs');

let cal = fs.readFileSync('src/app/dashboard/calendar/page.tsx', 'utf8');

// Replace single platform select with multi-select checkboxes
cal = cal.replace(
  `  const [newPlatform, setNewPlatform] = useState('')`,
  `  const [newPlatforms, setNewPlatforms] = useState([])`
);

cal = cal.replace(
  `    const { data } = await supabase
      .from('content_calendar')
      .insert({
        user_id: user.id,
        title: newTitle,
        content_type: newType,
        platform: newPlatform || newType,
        status: newStatus,
        scheduled_at: new Date(newDate).toISOString(),
      })`,
  `    const platformsToSave = newType === 'social' ? newPlatforms.join(',') : newType
    const { data } = await supabase
      .from('content_calendar')
      .insert({
        user_id: user.id,
        title: newTitle,
        content_type: newType,
        platform: platformsToSave,
        status: newStatus,
        scheduled_at: new Date(newDate).toISOString(),
      })`
);

cal = cal.replace(
  `    setNewTitle('')
    setNewType('blog')
    setNewPlatform('')
    setNewStatus('scheduled')
    setNewDate('')`,
  `    setNewTitle('')
    setNewType('blog')
    setNewPlatforms([])
    setNewStatus('scheduled')
    setNewDate('')`
);

// Replace the platform dropdown with checkboxes
cal = cal.replace(
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
              )}`,
  `              {newType === 'social' && (
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '13px', color: '#333' }}>Platforms (select all that apply)</label>
                  {connectedPlatforms.filter(p => p !== 'wordpress' && p !== 'google').length === 0 ? (
                    <p style={{ fontSize: '13px', color: '#dc2626', padding: '10px', background: '#fef2f2', borderRadius: '8px' }}>No social platforms selected. Go to Business Settings to select your platforms.</p>
                  ) : (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {[
                        { id: 'facebook', label: 'Facebook', color: '#1877F2' },
                        { id: 'instagram', label: 'Instagram', color: '#E1306C' },
                        { id: 'tiktok', label: 'TikTok', color: '#010101' },
                        { id: 'twitter', label: 'X / Twitter', color: '#000000' },
                        { id: 'linkedin', label: 'LinkedIn', color: '#0A66C2' },
                      ].filter(p => connectedPlatforms.includes(p.id)).map(p => (
                        <div
                          key={p.id}
                          onClick={() => setNewPlatforms(prev => prev.includes(p.id) ? prev.filter(x => x !== p.id) : [...prev, p.id])}
                          style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 14px', borderRadius: '20px', border: '2px solid ' + (newPlatforms.includes(p.id) ? p.color : '#e5e7eb'), background: newPlatforms.includes(p.id) ? p.color + '15' : '#fff', cursor: 'pointer', transition: 'all 0.15s' }}
                        >
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: p.color }} />
                          <span style={{ fontSize: '13px', fontWeight: '600', color: newPlatforms.includes(p.id) ? p.color : '#555' }}>{p.label}</span>
                          {newPlatforms.includes(p.id) && <span style={{ fontSize: '12px', color: p.color }}>✓</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}`
);

fs.writeFileSync('src/app/dashboard/calendar/page.tsx', cal);
console.log('DONE -- multi-select platform checkboxes added to calendar');