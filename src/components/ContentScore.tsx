// @ts-nocheck
export function calculateContentScore(content, title, platform = 'blog') {
  if (!content || !title) return 0
  let score = 0
  const text = content + ' ' + title
  const wordCount = content.split(/\s+/).filter(Boolean).length

  // Word count scoring
  if (platform === 'blog') {
    if (wordCount >= 900) score += 25
    else if (wordCount >= 600) score += 15
    else if (wordCount >= 300) score += 8
  } else {
    if (wordCount >= 50 && wordCount <= 280) score += 25
    else if (wordCount >= 20) score += 15
  }

  // Has a strong title
  if (title && title.length >= 30 && title.length <= 70) score += 15
  else if (title && title.length > 0) score += 8

  // Has numbers (listicles rank better)
  if (/\d+/.test(title)) score += 10

  // Has question or power words
  if (/how|why|what|best|top|guide|tips|secrets|proven|ultimate/i.test(title)) score += 10

  // Has paragraphs / structure
  const paragraphs = content.split('\n\n').filter(p => p.trim().length > 0)
  if (paragraphs.length >= 4) score += 10
  else if (paragraphs.length >= 2) score += 5

  // Has CTA or action words
  if (/call|contact|click|learn|discover|start|get|book|schedule/i.test(text)) score += 10

  // Has local/geo signals
  if (/city|local|near|area|community|neighborhood/i.test(text)) score += 10

  // Emoji presence for social
  if (platform !== 'blog' && /[\u{1F300}-\u{1F9FF}]/u.test(content)) score += 10

  return Math.min(100, score)
}

export function getScoreLabel(score) {
  if (score >= 80) return { label: 'Excellent', color: '#22c55e', bg: 'rgba(34,197,94,0.1)', border: 'rgba(34,197,94,0.3)' }
  if (score >= 60) return { label: 'Good', color: '#eab308', bg: 'rgba(234,179,8,0.1)', border: 'rgba(234,179,8,0.3)' }
  if (score >= 40) return { label: 'Fair', color: '#f97316', bg: 'rgba(249,115,22,0.1)', border: 'rgba(249,115,22,0.3)' }
  return { label: 'Needs Work', color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)' }
}

export function ContentScoreBadge({ score, showLabel = true, size = 'md' }) {
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
}
