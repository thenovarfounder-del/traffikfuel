const fs = require('fs');

let page = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', 'utf8');

// 1. Replace the weak hero badge with powerful futuristic version
page = page.replace(
  `<div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', fontSize: '16px', fontWeight: 700, fontStyle: 'italic', fontFamily: 'Playfair Display, serif', color: '#fff', padding: '10px 22px', borderRadius: '40px', background: 'rgba(232,97,10,.1)', border: '1.5px solid rgba(232,97,10,.5)', marginBottom: '18px' }}>
              <span style={{ position: 'relative', width: '10px', height: '10px', flexShrink: 0 }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#E8610A', position: 'absolute', top: '1px', left: '1px', display: 'block' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', border: '1.5px solid #E8610A', position: 'absolute', top: '0', left: '0', animation: 'ringpulse 2s ease-out infinite', opacity: 0, display: 'block' }} />
              </span>
              <span style={{ background: 'linear-gradient(90deg,#fff 70%,rgba(232,97,10,0.5))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>The Future of Local Marketing is Here</span>
            </div>`,
  `<div style={{ marginBottom: '24px' }}>
              {/* FUTURISTIC AI BADGE */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0', background: 'linear-gradient(135deg, #0a0a0a, #1a0800)', border: '1px solid rgba(232,97,10,0.6)', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 0 30px rgba(232,97,10,0.15), inset 0 0 30px rgba(232,97,10,0.03)', marginBottom: '12px' }}>
                {/* Left accent block */}
                <div style={{ background: '#E8610A', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                  <span style={{ position: 'relative', width: '8px', height: '8px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fff', position: 'absolute', top: '1px', left: '1px', display: 'block' }} />
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid #fff', position: 'absolute', top: 0, left: 0, animation: 'ringpulse 1.5s ease-out infinite', opacity: 0, display: 'block' }} />
                  </span>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', fontWeight: 900, color: '#fff', letterSpacing: '.2em', textTransform: 'uppercase' }}>LIVE</span>
                </div>
                {/* Center text */}
                <div style={{ padding: '10px 18px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '11px', fontWeight: 700, color: '#E8610A', letterSpacing: '.15em', textTransform: 'uppercase' }}>AI MARKETING</span>
                  <span style={{ width: '1px', height: '14px', background: 'rgba(232,97,10,0.3)', display: 'inline-block' }} />
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '12px', fontWeight: 600, color: '#aaa', letterSpacing: '.05em' }}>The Future of Local Business is Here</span>
                </div>
                {/* Right corner accent */}
                <div style={{ padding: '10px 14px', borderLeft: '1px solid rgba(232,97,10,0.3)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '9px', color: '#555', letterSpacing: '.1em' }}>v2.0</span>
                </div>
              </div>

              {/* STATS ROW */}
              <div style={{ display: 'flex', gap: '0', marginTop: '8px' }}>
                {[
                  { num: '9+', label: 'Platforms' },
                  { num: '24/7', label: 'Automated' },
                  { num: '$0', label: 'To Start' },
                ].map((s, i) => (
                  <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                    <div style={{ padding: '6px 16px', textAlign: 'center', borderLeft: i > 0 ? '1px solid rgba(232,97,10,0.2)' : 'none' }}>
                      <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '16px', fontWeight: 900, color: '#E8610A', lineHeight: 1 }}>{s.num}</div>
                      <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '9px', color: '#555', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '2px' }}>{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>`
);

// 2. Add Orbitron font import to styles
page = page.replace(
  '@keyframes shimmer{0%{left:-60%}60%,100%{left:130%}}',
  '@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&display=swap");@keyframes shimmer{0%{left:-60%}60%,100%{left:130%}}'
);

// 3. Add scrolling cities ticker right after the Powered By bar
page = page.replace(
  `{/* INDUSTRIES */}`,
  `{/* CITIES TICKER */}
      <div style={{ background: '#0a0a0a', borderTop: '1px solid #1a1a1a', padding: '12px 0', overflow: 'hidden', position: 'relative' }}>
        <style>{\`
          @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .ticker-inner { display:flex; animation:ticker 25s linear infinite; width:max-content; }
          .ticker-inner:hover { animation-play-state:paused; }
        \`}</style>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(90deg,#0a0a0a,transparent)', zIndex: 1 }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(270deg,#0a0a0a,transparent)', zIndex: 1 }} />
        <div className="ticker-inner">
          {['Tampa, FL','Atlanta, GA','Dallas, TX','Miami, FL','Chicago, IL','Houston, TX','Los Angeles, CA','New York, NY','Phoenix, AZ','Denver, CO','Seattle, WA','Boston, MA','Nashville, TN','Orlando, FL','Austin, TX','Tampa, FL','Atlanta, GA','Dallas, TX','Miami, FL','Chicago, IL','Houston, TX','Los Angeles, CA','New York, NY','Phoenix, AZ','Denver, CO','Seattle, WA','Boston, MA','Nashville, TN','Orlando, FL','Austin, TX'].map((city, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 24px', fontSize: '11px', color: '#555', fontWeight: 500, whiteSpace: 'nowrap', fontFamily: 'DM Sans, sans-serif' }}>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#E8610A', display: 'inline-block', flexShrink: 0 }} />
              {city}
            </span>
          ))}
        </div>
      </div>

      {/* INDUSTRIES */}`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\page.tsx', page, 'utf8');
console.log('SUCCESS: Hero badge redesigned — futuristic AI terminal style + stats row + cities ticker');