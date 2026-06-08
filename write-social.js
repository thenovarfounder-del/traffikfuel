const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ContentScore.tsx', 'utf8');

// Fix the badge to be much more visible
content = content.replace(
  `export function ContentScoreBadge({ score, showLabel = true, size = 'md' }) {
  const { label, color, bg, border } = getScoreLabel(score)
  const isLg = size === 'lg'
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: bg, border: '1px solid ' + border, borderRadius: '8px', padding: isLg ? '10px 16px' : '5px 10px' }}>
      <div style={{ position: 'relative', width: isLg ? '44px' : '32px', height: isLg ? '44px' : '32px', flexShrink: 0 }}>
        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
          <circle cx="18" cy="18" r="15" fill="none" stroke="#1a1a1a" strokeWidth="3" />
          <circle cx="18" cy="18" r="15" fill="none" stroke={color} strokeWidth="3"
            strokeDasharray={2 * Math.PI * 15}
            strokeDashoffset={2 * Math.PI * 15 * (1 - score / 100)}
            strokeLinecap="round" />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isLg ? '11px' : '8px', fontWeight: 900, color, fontFamily: 'DM Sans, sans-serif' }}>
          {score}
        </div>
      </div>
      {showLabel && (
        <div>
          <div style={{ fontSize: isLg ? '13px' : '11px', fontWeight: 700, color, fontFamily: 'DM Sans, sans-serif' }}>{label}</div>
          <div style={{ fontSize: isLg ? '11px' : '9px', color: '#555', fontFamily: 'DM Sans, sans-serif' }}>Content Score</div>
        </div>
      )}
    </div>
  )
}`,
  `export function ContentScoreBadge({ score, showLabel = true, size = 'md' }) {
  const { label, color, bg, border } = getScoreLabel(score)
  const isLg = size === 'lg'
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: bg, border: '2px solid ' + color, borderRadius: '10px', padding: isLg ? '12px 18px' : '8px 14px', boxShadow: '0 2px 12px ' + color + '40' }}>
      <div style={{ position: 'relative', width: isLg ? '52px' : '44px', height: isLg ? '52px' : '44px', flexShrink: 0 }}>
        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
          <circle cx="18" cy="18" r="15" fill="none" stroke="#1a1a1a" strokeWidth="3" />
          <circle cx="18" cy="18" r="15" fill="none" stroke={color} strokeWidth="3"
            strokeDasharray={2 * Math.PI * 15}
            strokeDashoffset={2 * Math.PI * 15 * (1 - score / 100)}
            strokeLinecap="round" />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: isLg ? '14px' : '13px', fontWeight: 900, color, fontFamily: 'DM Sans, sans-serif' }}>
          {score}
        </div>
      </div>
      {showLabel && (
        <div>
          <div style={{ fontSize: isLg ? '15px' : '13px', fontWeight: 900, color, fontFamily: 'DM Sans, sans-serif' }}>{label}</div>
          <div style={{ fontSize: isLg ? '12px' : '11px', color: '#888', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>Content Score</div>
        </div>
      )}
    </div>
  )
}`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ContentScore.tsx', content, 'utf8');
console.log('SUCCESS: ContentScore badge — bigger, bolder, colored border');

// Fix blog page — red boost button, hide after use
let blog = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\blog\\page.tsx', 'utf8');

// Add boosted state
blog = blog.replace(
  `  const [boostMessage, setBoostMessage] = useState('')`,
  `  const [boostMessage, setBoostMessage] = useState('')
  const [boosted, setBoosted] = useState(false)`
);

// Set boosted to true after successful boost
blog = blog.replace(
  `        setBoostMessage('\u2b06\ufe0f Score boosted to ' + newScore + '! Content enhanced for SEO.')`,
  `        setBoostMessage('\u2b06\ufe0f Score boosted to ' + newScore + '! Content enhanced for SEO.')
        setBoosted(true)`
);

// Reset boosted when new post generated
blog = blog.replace(
  `    setGenerating(true); setMessage(''); setPost(null); setWpMessage(''); setBoostMessage('')`,
  `    setGenerating(true); setMessage(''); setPost(null); setWpMessage(''); setBoostMessage(''); setBoosted(false)`
);

// Change boost button to fire red and hide after boosted
blog = blog.replace(
  `                {isPaid && currentScore < 90 && (
                  <button onClick={boostScore} style={{ background:'linear-gradient(135deg,#22c55e,#16a34a)', color:'#fff', padding:'9px 18px', borderRadius:'7px', fontSize:'13px', fontWeight:700, border:'none', cursor:'pointer', fontFamily:'DM Sans, sans-serif', boxShadow:'0 4px 16px rgba(34,197,94,0.4)' }}>
                    \u26a1 Boost Score
                  </button>
                )}`,
  `                {isPaid && currentScore < 90 && !boosted && (
                  <button onClick={boostScore} style={{ background:'linear-gradient(135deg,#dc2626,#b91c1c)', color:'#fff', padding:'9px 18px', borderRadius:'7px', fontSize:'13px', fontWeight:700, border:'none', cursor:'pointer', fontFamily:'DM Sans, sans-serif', boxShadow:'0 4px 16px rgba(220,38,38,0.5)', display:'flex', alignItems:'center', gap:'6px' }}>
                    \ud83d\udd25 Boost Score
                  </button>
                )}`
);

// Also hide free user boost prompt after boosted
blog = blog.replace(
  `                {!isPaid && currentScore < 90 && (
                  <a href='/pricing' style={{ background:'#1a1a1a', color:'#22c55e', border:'1px solid rgba(34,197,94,0.3)', padding:'9px 18px', borderRadius:'7px', fontSize:'13px', fontWeight:700, textDecoration:'none', fontFamily:'DM Sans, sans-serif' }}>
                    \ud83d\udd12 Boost Score \u2014 Upgrade
                  </a>
                )}`,
  `                {!isPaid && currentScore < 90 && !boosted && (
                  <a href='/pricing' style={{ background:'#1a1a1a', color:'#ef4444', border:'1px solid rgba(239,68,68,0.3)', padding:'9px 18px', borderRadius:'7px', fontSize:'13px', fontWeight:700, textDecoration:'none', fontFamily:'DM Sans, sans-serif' }}>
                    \ud83d\udd25 Boost Score \u2014 Upgrade
                  </a>
                )}`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\content\\blog\\page.tsx', blog, 'utf8');
console.log('SUCCESS: Blog page — fire red boost button, hidden after use, bigger score badge');