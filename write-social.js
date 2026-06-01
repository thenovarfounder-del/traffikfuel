const fs = require('fs');

const filePath = 'C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\analytics\\page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  `<p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 20px 0' }}>Google Search Console, social platform insights, and AI engine tracking coming in Phase 3.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {['Google Search Console', 'Social Platform Insights', 'AI Engine Tracking'].map(item => (
              <div key={item} style={{ backgroundColor: '#0a0a0a', borderRadius: '8px', border: '1px solid #1f1f1f', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px' }}>{item}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Coming in Phase 3</div>
              </div>
            ))}
          </div>`,
  `<p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 20px 0' }}>View your live traffic, rankings, and performance data.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <a href="https://analytics.google.com/analytics/web/#/p453626481/reports" target="_blank" style={{ backgroundColor: '#0a0a0a', borderRadius: '8px', border: '1px solid #4285F4', padding: '20px', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>\u{1F4CA}</div>
              <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', color: '#4285F4' }}>Google Analytics 4</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Open GA4 Dashboard \u2192</div>
            </a>
            <a href="https://search.google.com/search-console" target="_blank" style={{ backgroundColor: '#0a0a0a', borderRadius: '8px', border: '1px solid #34A853', padding: '20px', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>\u{1F50D}</div>
              <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', color: '#34A853' }}>Search Console</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>View Rankings \u2192</div>
            </a>
            <div style={{ backgroundColor: '#0a0a0a', borderRadius: '8px', border: '1px solid #1f1f1f', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>\u{1F916}</div>
              <div style={{ fontSize: '13px', fontWeight: '600', marginBottom: '4px', color: '#fff' }}>AI Engine Tracking</div>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Coming Soon</div>
            </div>
          </div>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: analytics updated with GA4 and Search Console links');