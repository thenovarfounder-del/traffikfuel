const fs = require('fs');

let cal = fs.readFileSync('src/app/dashboard/calendar/page.tsx', 'utf8');

// Add viewContent state
cal = cal.replace(
  `  const [connectedPlatforms, setConnectedPlatforms] = useState([])`,
  `  const [connectedPlatforms, setConnectedPlatforms] = useState([])
  const [viewingContent, setViewingContent] = useState(null)`
);

// Add View button and content modal to each event
cal = cal.replace(
  `                      <button onClick={() => deleteEvent(ev.id)} style={{ background: '#fef2f2', color: '#dc2626', border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Delete</button>`,
  `                      {ev.content && <button onClick={() => setViewingContent(ev)} style={{ background: '#f0f4ff', color: '#3730a3', border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>View</button>}
                      <button onClick={() => deleteEvent(ev.id)} style={{ background: '#fef2f2', color: '#dc2626', border: 'none', borderRadius: '6px', padding: '4px 10px', fontSize: '11px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Delete</button>`
);

// Add content viewer modal before closing div
cal = cal.replace(
  `      </div>
    </div>
  )
}`,
  `      </div>

        {viewingContent && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px' }}>
            <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', width: '100%', maxWidth: '640px', maxHeight: '80vh', overflowY: 'auto', boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <p style={{ fontSize: '11px', fontWeight: '700', color: '#888', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{viewingContent.content_type} {viewingContent.platform ? '-- ' + viewingContent.platform : ''}</p>
                  <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111', margin: 0 }}>{viewingContent.title}</h3>
                </div>
                <button onClick={() => setViewingContent(null)} style={{ background: '#f5f5f5', border: 'none', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer', fontSize: '14px', fontWeight: '600', color: '#555', fontFamily: 'DM Sans, sans-serif', flexShrink: 0, marginLeft: '16px' }}>Close</button>
              </div>
              <div style={{ borderTop: '1px solid #eee', paddingTop: '20px' }}>
                {viewingContent.content_type === 'blog' ? (
                  <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.8, color: '#333' }} dangerouslySetInnerHTML={{ __html: viewingContent.content }} />
                ) : (
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', lineHeight: 1.8, color: '#333', whiteSpace: 'pre-wrap' }}>{viewingContent.content}</p>
                )}
              </div>
              <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
                <button onClick={() => { navigator.clipboard.writeText(viewingContent.content); }} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Copy Content</button>
                <button onClick={() => setViewingContent(null)} style={{ background: '#f5f5f5', color: '#333', border: 'none', borderRadius: '8px', padding: '10px 20px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>Close</button>
              </div>
            </div>
          </div>
        )}

    </div>
  )
}` 
);

fs.writeFileSync('src/app/dashboard/calendar/page.tsx', cal);
console.log('DONE -- content viewer added to calendar');