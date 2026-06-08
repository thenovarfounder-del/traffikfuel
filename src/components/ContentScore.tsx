// @ts-nocheck

export function calculateContentScore(content, title, platform) {
  if (!content || !title) return { score: 0, breakdown: {} }
  platform = platform || 'blog'
  var words = content.split(/\s+/).filter(Boolean)
  var wordCount = words.length
  var sentences = content.split(/[.!?]+/).filter(function(s) { return s.trim().length > 10 })
  var paragraphs = content.split(/\n\n+/).filter(function(p) { return p.trim().length > 20 })
  var lines = content.split('\n')
  var breakdown = {}

  if (platform === 'blog') {
    if (wordCount >= 1500) breakdown.wordCount = 20
    else if (wordCount >= 1200) breakdown.wordCount = 16
    else if (wordCount >= 900) breakdown.wordCount = 11
    else if (wordCount >= 600) breakdown.wordCount = 6
    else if (wordCount >= 300) breakdown.wordCount = 2
    else breakdown.wordCount = 0

    var ts = 0
    if (title.length >= 40 && title.length <= 65) ts += 5
    else if (title.length >= 25) ts += 2
    if (/\b\d+\b/.test(title)) ts += 4
    if (/\b(ultimate|complete|proven|best|top|essential|powerful|expert|advanced|master|definitive|comprehensive)\b/i.test(title)) ts += 4
    else if (/\b(how|why|guide|tips|ways|steps|secrets|boost|improve|grow)\b/i.test(title)) ts += 2
    if (/[?!]$/.test(title.trim())) ts += 2
    breakdown.titleQuality = Math.min(15, ts)

    var headings = lines.filter(function(l) { return /^#{1,3}\s.{5,}/.test(l.trim()) || /^\*\*[A-Z].{5,}\*\*/.test(l.trim()) })
    breakdown.headings = headings.length >= 5 ? 12 : headings.length >= 3 ? 8 : headings.length >= 1 ? 4 : 0

    var listItems = lines.filter(function(l) { return /^[-*]\s.{5,}/.test(l.trim()) || /^\d+\.\s.{5,}/.test(l.trim()) })
    breakdown.lists = listItems.length >= 6 ? 8 : listItems.length >= 3 ? 5 : listItems.length >= 1 ? 2 : 0

    var geoMatches = (content.match(/\b(local|nearby|community|neighborhood|residents|area|city|town)\b/gi) || [])
    breakdown.localSeo = geoMatches.length >= 5 ? 10 : geoMatches.length >= 3 ? 7 : geoMatches.length >= 1 ? 3 : 0

    var stats = (content.match(/\b\d+(\.\d+)?\s*(%|percent|million|billion|thousand)/gi) || [])
    var citations = (content.match(/\b(according to|research shows|studies show|data shows|survey|report)\b/gi) || [])
    var totalStats = stats.length + citations.length
    breakdown.statistics = totalStats >= 5 ? 10 : totalStats >= 3 ? 7 : totalStats >= 1 ? 3 : 0

    var strongCta = /\b(schedule|book a|get your free|start today|claim|contact us today|get started today|free consultation)\b/i.test(content)
    var weakCta = /\b(contact|learn more|click|sign up|try|discover|reach out)\b/i.test(content)
    breakdown.cta = strongCta ? 8 : weakCta ? 4 : 0

    breakdown.paragraphs = paragraphs.length >= 10 ? 8 : paragraphs.length >= 7 ? 6 : paragraphs.length >= 4 ? 3 : 1

    var firstSentence = sentences[0] || ''
    var firstWordCount = firstSentence.trim().split(/\s+/).length
    if (firstWordCount <= 20 && firstWordCount >= 8 && /\b(did you know|are you|imagine|every|most|the truth|stop|what if|in today|for many)\b/i.test(firstSentence)) breakdown.openingHook = 5
    else if (firstWordCount <= 25) breakdown.openingHook = 2
    else breakdown.openingHook = 0

    var titleWords = title.toLowerCase().split(/\s+/).filter(function(w) { return w.length > 4 })
    var contentLower = content.toLowerCase()
    var matchingKw = titleWords.filter(function(w) { return (contentLower.match(new RegExp(w, 'g')) || []).length >= 3 })
    breakdown.keywords = matchingKw.length >= 3 ? 4 : matchingKw.length >= 1 ? 2 : 0

  } else {
    breakdown.length = (wordCount >= 40 && wordCount <= 150) ? 20 : wordCount >= 20 ? 12 : 4
    breakdown.cta = /\b(comment|share|follow|click|dm|tag|save|like|check out)\b/i.test(content) ? 15 : 0
    breakdown.hook = sentences.length > 0 && sentences[0].split(/\s+/).length <= 12 ? 15 : 7
    breakdown.local = /\b(local|community|city|area|neighborhood)\b/i.test(content) ? 10 : 0
    breakdown.stats = /\b\d+%/i.test(content) ? 10 : 0
    breakdown.question = /\?/.test(content) ? 5 : 0
    breakdown.lineBreaks = (content.match(/\n/g) || []).length >= 2 ? 10 : 0
  }

  var total = Object.values(breakdown).reduce(function(a, b) { return a + b }, 0)
  return { score: Math.min(100, total), breakdown: breakdown }
}

export function getScoreFromResult(result) {
  if (typeof result === 'number') return result
  return (result && result.score) || 0
}

export function getScoreLabel(score) {
  if (score >= 90) return { label: 'Excellent', color: '#22c55e', bg: 'rgba(34,197,94,0.1)', border: '#22c55e' }
  if (score >= 75) return { label: 'Good', color: '#eab308', bg: 'rgba(234,179,8,0.1)', border: '#eab308' }
  if (score >= 55) return { label: 'Fair', color: '#f97316', bg: 'rgba(249,115,22,0.1)', border: '#f97316' }
  return { label: 'Needs Work', color: '#ef4444', bg: 'rgba(239,68,68,0.1)', border: '#ef4444' }
}

export function ContentScoreBadge({ score, showLabel, size }) {
  showLabel = showLabel !== false
  size = size || 'md'
  var numScore = typeof score === 'object' ? score.score : score
  var meta = getScoreLabel(numScore)
  var isLg = size === 'lg'
  var dim = isLg ? 56 : 48
  var circ = 2 * Math.PI * 15
  var offset = circ * (1 - numScore / 100)
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:'10px', background:meta.bg, border:'2px solid '+meta.border, borderRadius:'10px', padding:isLg?'12px 18px':'8px 14px', boxShadow:'0 2px 12px '+meta.color+'40' }}>
      <div style={{ position:'relative', width:dim+'px', height:dim+'px', flexShrink:0 }}>
        <svg viewBox='0 0 36 36' style={{ width:'100%', height:'100%', transform:'rotate(-90deg)' }}>
          <circle cx='18' cy='18' r='15' fill='none' stroke='#1a1a1a' strokeWidth='3' />
          <circle cx='18' cy='18' r='15' fill='none' stroke={meta.color} strokeWidth='3'
            strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap='round' />
        </svg>
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', fontSize:isLg?'15px':'13px', fontWeight:900, color:meta.color, fontFamily:'DM Sans, sans-serif' }}>
          {numScore}
        </div>
      </div>
      {showLabel && (
        <div>
          <div style={{ fontSize:isLg?'15px':'14px', fontWeight:900, color:meta.color, fontFamily:'DM Sans, sans-serif' }}>{meta.label}</div>
          <div style={{ fontSize:isLg?'12px':'11px', color:'#888', fontFamily:'DM Sans, sans-serif', fontWeight:600 }}>Content Score</div>
        </div>
      )}
    </div>
  )
}