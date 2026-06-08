// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import { calculateContentScore, ContentScoreBadge } from '@/components/ContentScore'

export default function BlogPage() {
  const [userId, setUserId] = useState('')
  const [businessId, setBusinessId] = useState('')
  const [topic, setTopic] = useState('')
  const [generating, setGenerating] = useState(false)
  const [boosting, setBoosting] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [post, setPost] = useState(null)
  const [message, setMessage] = useState('')
  const [wpMessage, setWpMessage] = useState('')
  const [businessName, setBusinessName] = useState('')
  const [charCount, setCharCount] = useState(0)
  const [userStatus, setUserStatus] = useState('free')
  const [blogsUsed, setBlogsUsed] = useState(0)
  const [boostMessage, setBoostMessage] = useState('')

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      setUserId(user.id)
      const { data: bp } = await supabase.from('business_profiles').select('id, business_name').eq('user_id', user.id).single()
      if (bp) { setBusinessId(bp.id); setBusinessName(bp.business_name || '') }
      const { data: userData } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (userData?.status) setUserStatus(userData.status)
      try {
        const now = new Date()
        const firstOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
        const { count } = await supabase.from('blog_generations').select('*', { count: 'exact', head: true }).eq('user_id', user.id).gte('created_at', firstOfMonth)
        setBlogsUsed(count || 0)
      } catch (e) { setBlogsUsed(0) }
    }
    load()
  }, [])

  const isPaid = userStatus && userStatus !== 'free'
  const freeLimit = 3
  const freeExceeded = !isPaid && blogsUsed >= freeLimit
  const currentScore = post ? calculateContentScore(post.content, post.title, 'blog') : 0

  const generate = async () => {
    if (!topic.trim()) return
    if (freeExceeded) { setMessage('You’ve used all 3 free blogs this month. Upgrade to Starter for unlimited blogs.'); return }
    setGenerating(true); setMessage(''); setPost(null); setWpMessage(''); setBoostMessage('')
    try {
      const res = await fetch('/api/content/blog', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, businessId, topic }) })
      const data = await res.json()
      if (data.error) { setMessage(data.error) }
      else { setPost(data); if (!isPaid) setBlogsUsed(prev => prev + 1) }
    } catch (e) { setMessage('Something went wrong. Try again.') }
    setGenerating(false)
  }

  const boostScore = async () => {
    if (!post || !isPaid) return
    setBoosting(true); setBoostMessage('')
    try {
      const res = await fetch('/api/content/boost', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: post.title, content: post.content, currentScore, userId, businessId, postId: post.id }) })
      const data = await res.json()
      if (data.error) { setBoostMessage('Boost failed: ' + data.error) }
      else {
        setPost(prev => ({ ...prev, content: data.content, title: data.title || prev.title }))
        const newScore = calculateContentScore(data.content, data.title || post.title, 'blog')
        setBoostMessage('⬆️ Score boosted to ' + newScore + '! Content enhanced for SEO.')
      }
    } catch (e) { setBoostMessage('Something went wrong. Try again.') }
    setBoosting(false)
  }

  const publishToWordPress = async () => {
    if (!post) return
    setPublishing(true); setWpMessage('')
    try {
      const res = await fetch('/api/content/wordpress', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ postId: post.id, userId }) })
      const data = await res.json()
      if (data.error) { setWpMessage('Error: ' + data.error) }
      else { setWpMessage('Published! View post: ' + data.wpPostUrl) }
    } catch (e) { setWpMessage('Something went wrong. Try again.') }
    setPublishing(false)
  }

  const handleTopicChange = (e) => { setTopic(e.target.value); setCharCount(e.target.value.length) }

  const inp = { width:'100%', background:'#0a0a0a', border:'1px solid #2a2a2a', borderRadius:'10px', padding:'14px 16px', fontSize:'15px', color:'#fff', resize:'vertical', boxSizing:'border-box', fontFamily:'DM Sans, sans-serif', outline:'none', lineHeight:1.6 }

  return (
    <div style={{ minHeight:'100vh', background:'#0a0a0a' }}>
      <div style={{ background:'linear-gradient(135deg,#111 0%,#1a0e00 100%)', borderBottom:'1px solid #1e1e1e', padding:'32px 40px' }}>
        <div style={{ maxWidth:'860px', margin:'0 auto' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'8px' }}>
            <div style={{ width:'36px', height:'36px', background:'linear-gradient(135deg,#E8610A,#ff8c42)', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'18px' }}>✏️</div>
            <div>
              <h1 style={{ fontFamily:'Playfair Display, serif', fontSize:'26px', fontWeight:900, color:'#fff', margin:0 }}>Blog Generator</h1>
              <p style={{ color:'#666', fontSize:'13px', margin:0, fontFamily:'DM Sans, sans-serif' }}>Powered by your Business Brain — AI that knows your business</p>
            </div>
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginTop:12, flexWrap:'wrap' }}>
            {businessName && <div style={{ display:'inline-flex', alignItems:'center', gap:'6px', background:'rgba(232,97,10,0.1)', border:'1px solid rgba(232,97,10,0.3)', borderRadius:'20px', padding:'4px 14px' }}><div style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#E8610A' }} /><span style={{ fontSize:'12px', color:'#E8610A', fontFamily:'DM Sans, sans-serif', fontWeight:600 }}>{businessName}</span></div>}
            {!isPaid && <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(232,97,10,0.08)', border:'1px solid rgba(232,97,10,0.2)', borderRadius:'20px', padding:'4px 14px' }}><span style={{ fontSize:'12px', color: freeExceeded ? '#ef4444' : '#E8610A', fontFamily:'DM Sans, sans-serif', fontWeight:600 }}>{blogsUsed}/{freeLimit} free blogs used</span>{freeExceeded && <a href='/pricing' style={{ background:'#E8610A', color:'#fff', padding:'2px 10px', borderRadius:4, fontSize:11, fontWeight:700, textDecoration:'none' }}>Upgrade</a>}</div>}
          </div>
        </div>
      </div>

      <div style={{ maxWidth:'860px', margin:'0 auto', padding:'32px 40px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'12px', marginBottom:'28px' }}>
          {[{ label:'SEO Optimized', value:'100%', icon:'📈' },{ label:'Avg Word Count', value:'900+', icon:'📝' },{ label:'AI Platforms', value:'6+', icon:'🤖' }].map(stat => (
            <div key={stat.label} style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:'10px', padding:'16px 20px', display:'flex', alignItems:'center', gap:'12px' }}>
              <span style={{ fontSize:'20px' }}>{stat.icon}</span>
              <div><div style={{ fontFamily:'Playfair Display, serif', fontSize:'20px', fontWeight:700, color:'#E8610A', lineHeight:1 }}>{stat.value}</div><div style={{ fontSize:'11px', color:'#555', fontFamily:'DM Sans, sans-serif', marginTop:'2px' }}>{stat.label}</div></div>
            </div>
          ))}
        </div>

        <div style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:'14px', padding:'28px', marginBottom:'24px' }}>
          <label style={{ display:'block', fontSize:'13px', fontWeight:700, color:'#aaa', marginBottom:'10px', fontFamily:'DM Sans, sans-serif', letterSpacing:'0.08em', textTransform:'uppercase' }}>Blog Topic</label>
          <div style={{ position:'relative' }}>
            <textarea rows={3} placeholder='e.g. 5 reasons local businesses need AI marketing in 2026...' value={topic} onChange={handleTopicChange} style={inp} onFocus={e => e.target.style.borderColor='#E8610A'} onBlur={e => e.target.style.borderColor='#2a2a2a'} />
            <div style={{ position:'absolute', bottom:'10px', right:'14px', fontSize:'11px', color:'#444' }}>{charCount} chars</div>
          </div>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:'16px', flexWrap:'wrap', gap:'12px' }}>
            <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
              {['AI Marketing Tips','Local SEO Guide','Why Choose Us','Customer Success'].map(s => (
                <button key={s} onClick={() => { setTopic(s); setCharCount(s.length) }} style={{ background:'#1a1a1a', border:'1px solid #2a2a2a', borderRadius:'20px', padding:'5px 12px', fontSize:'11px', color:'#888', cursor:'pointer', fontFamily:'DM Sans, sans-serif' }} onMouseEnter={e => { e.target.style.borderColor='#E8610A'; e.target.style.color='#E8610A' }} onMouseLeave={e => { e.target.style.borderColor='#2a2a2a'; e.target.style.color='#888' }}>{s}</button>
              ))}
            </div>
            <button onClick={generate} disabled={generating || !topic.trim() || freeExceeded} style={{ background:(generating||freeExceeded)?'#2a2a2a':'linear-gradient(135deg,#E8610A,#ff8c42)', color:(generating||freeExceeded)?'#666':'#fff', padding:'12px 28px', borderRadius:'8px', fontSize:'14px', fontWeight:700, border:'none', cursor:(generating||freeExceeded)?'not-allowed':'pointer', fontFamily:'DM Sans, sans-serif', display:'flex', alignItems:'center', gap:'8px', boxShadow:(generating||freeExceeded)?'none':'0 4px 20px rgba(232,97,10,0.35)' }}>
              {freeExceeded ? '🔒 Limit Reached' : generating ? '⏳ Generating...' : '⚡ Generate Blog Post'}
            </button>
          </div>
          {freeExceeded && <div style={{ marginTop:14, background:'rgba(232,97,10,0.08)', border:'1px solid rgba(232,97,10,0.2)', borderRadius:8, padding:'12px 16px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:8 }}><span style={{ fontFamily:'DM Sans, sans-serif', fontSize:13, color:'#E8610A' }}>You’ve used all 3 free blogs this month.</span><a href='/pricing' style={{ background:'linear-gradient(135deg,#E8610A,#C84E06)', color:'#fff', padding:'8px 20px', borderRadius:6, fontSize:13, fontWeight:700, textDecoration:'none' }}>Upgrade to Starter — $47/mo</a></div>}
          {message && <div style={{ marginTop:'14px', background:'rgba(239,68,68,0.08)', border:'1px solid rgba(239,68,68,0.2)', borderRadius:'8px', padding:'10px 14px', fontSize:'13px', color:'#f87171', fontFamily:'DM Sans, sans-serif' }}>{message}</div>}
        </div>

        {generating && (
          <div style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:'14px', padding:'40px', textAlign:'center', marginBottom:'24px' }}>
            <div style={{ fontSize:'36px', marginBottom:'16px' }}>✏️</div>
            <p style={{ fontFamily:'Playfair Display, serif', fontSize:'20px', color:'#fff', marginBottom:'8px' }}>Writing your blog post...</p>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'13px', color:'#555' }}>Your Business Brain is crafting SEO-optimized content tailored to your business.</p>
          </div>
        )}

        {boosting && (
          <div style={{ background:'#111', border:'1px solid rgba(34,197,94,0.3)', borderRadius:'14px', padding:'28px', textAlign:'center', marginBottom:'24px' }}>
            <div style={{ fontSize:'32px', marginBottom:'12px' }}>⚡</div>
            <p style={{ fontFamily:'Playfair Display, serif', fontSize:'18px', color:'#22c55e', marginBottom:'6px' }}>Boosting your content score...</p>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'13px', color:'#555' }}>AI is enhancing SEO, structure, and engagement signals.</p>
          </div>
        )}

        {post && !boosting && (
          <div style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:'14px', overflow:'hidden', marginBottom:'24px' }}>
            <div style={{ background:'linear-gradient(135deg,#1a0e00,#111)', borderBottom:'1px solid #1e1e1e', padding:'20px 28px', display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'12px' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'12px', flexWrap:'wrap' }}>
                <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#22c55e' }} />
                <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'13px', color:'#22c55e', fontWeight:600 }}>Blog post ready</span>
                <ContentScoreBadge score={currentScore} size='md' />
              </div>
              <div style={{ display:'flex', gap:'10px', flexWrap:'wrap' }}>
                {isPaid && currentScore < 90 && (
                  <button onClick={boostScore} style={{ background:'linear-gradient(135deg,#22c55e,#16a34a)', color:'#fff', padding:'9px 18px', borderRadius:'7px', fontSize:'13px', fontWeight:700, border:'none', cursor:'pointer', fontFamily:'DM Sans, sans-serif', boxShadow:'0 4px 16px rgba(34,197,94,0.4)' }}>
                    ⚡ Boost Score
                  </button>
                )}
                {!isPaid && currentScore < 90 && (
                  <a href='/pricing' style={{ background:'#1a1a1a', color:'#22c55e', border:'1px solid rgba(34,197,94,0.3)', padding:'9px 18px', borderRadius:'7px', fontSize:'13px', fontWeight:700, textDecoration:'none', fontFamily:'DM Sans, sans-serif' }}>
                    🔒 Boost Score — Upgrade
                  </a>
                )}
                {isPaid && (
                  <button onClick={publishToWordPress} disabled={publishing} style={{ background:publishing?'#1a1a1a':'linear-gradient(135deg,#16a34a,#15803d)', color:publishing?'#555':'#fff', padding:'9px 20px', borderRadius:'7px', fontSize:'13px', fontWeight:700, border:'none', cursor:publishing?'not-allowed':'pointer', fontFamily:'DM Sans, sans-serif' }}>
                    {publishing ? '⏳ Publishing...' : '🌐 Publish to WordPress'}
                  </button>
                )}
              </div>
            </div>
            {boostMessage && (
              <div style={{ margin:'16px 28px 0', background:boostMessage.includes('boosted')?'rgba(34,197,94,0.08)':'rgba(239,68,68,0.08)', border:'1px solid '+(boostMessage.includes('boosted')?'rgba(34,197,94,0.3)':'rgba(239,68,68,0.3)'), borderRadius:'8px', padding:'10px 14px', fontSize:'13px', color:boostMessage.includes('boosted')?'#4ade80':'#f87171', fontFamily:'DM Sans, sans-serif', fontWeight:600 }}>
                {boostMessage}
              </div>
            )}
            <div style={{ padding:'24px 28px 0' }}>
              <h2 style={{ fontFamily:'Playfair Display, serif', fontSize:'22px', fontWeight:900, color:'#fff', margin:'0 0 16px', lineHeight:1.3 }}>{post.title}</h2>
              <div style={{ height:'1px', background:'linear-gradient(90deg,#E8610A,transparent)', marginBottom:'20px' }} />
            </div>
            <div style={{ padding:'0 28px 28px', position:'relative' }}>
              <div style={{ background:'#0a0a0a', border:'1px solid #1e1e1e', borderRadius:'10px', padding:'20px', maxHeight:isPaid?'400px':'200px', overflowY:isPaid?'auto':'hidden', filter:isPaid?'none':'blur(4px)', pointerEvents:isPaid?'auto':'none', userSelect:isPaid?'auto':'none' }}>
                <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'14px', color:'#ccc', lineHeight:1.85, whiteSpace:'pre-wrap', margin:0 }}>{post.content}</p>
              </div>
              {!isPaid && (
                <div style={{ position:'absolute', bottom:28, left:28, right:28, background:'linear-gradient(transparent,#111 60%)', paddingTop:60, paddingBottom:28, display:'flex', flexDirection:'column', alignItems:'center', gap:12, borderRadius:'0 0 10px 10px' }}>
                  <div style={{ fontSize:36 }}>🔒</div>
                  <p style={{ fontFamily:'Playfair Display, serif', fontSize:20, fontWeight:700, color:'#fff', margin:0, textAlign:'center' }}>Your blog post is ready</p>
                  <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:13, color:'#888', margin:0, textAlign:'center' }}>Upgrade to copy, publish to WordPress, and get unlimited blogs</p>
                  <a href='/pricing' style={{ background:'linear-gradient(135deg,#E8610A,#C84E06)', color:'#fff', padding:'12px 32px', borderRadius:8, fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'0 4px 20px rgba(232,97,10,0.35)', fontFamily:'DM Sans, sans-serif' }}>Upgrade to Starter — $47/month</a>
                  <p style={{ color:'#555', fontSize:11, margin:0, fontFamily:'DM Sans, sans-serif' }}>Unlimited blogs • Social content • Manual publish</p>
                </div>
              )}
            </div>
            {wpMessage && <div style={{ margin:'0 28px 24px', background:wpMessage.startsWith('Error')?'rgba(239,68,68,0.08)':'rgba(34,197,94,0.08)', border:'1px solid '+(wpMessage.startsWith('Error')?'rgba(239,68,68,0.2)':'rgba(34,197,94,0.2)'), borderRadius:'8px', padding:'12px 16px', fontSize:'13px', color:wpMessage.startsWith('Error')?'#f87171':'#4ade80', fontFamily:'DM Sans, sans-serif' }}>{wpMessage}</div>}
          </div>
        )}

        {!post && !generating && (
          <div style={{ background:'#111', border:'1px solid #1e1e1e', borderRadius:'14px', padding:'24px 28px' }}>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'12px', fontWeight:700, color:'#444', letterSpacing:'0.1em', textTransform:'uppercase', marginBottom:'16px' }}>Pro Tips</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px' }}>
              {[{ icon:'🎯', tip:'Be specific with your topic for better SEO targeting' },{ icon:'📈', tip:'Include your city or region for local SEO boost' },{ icon:'🤖', tip:'Your Brain auto-injects your business context' },{ icon:'🌐', tip:'Publish directly to WordPress with one click' }].map(({ icon, tip }) => (
                <div key={tip} style={{ display:'flex', gap:'10px', alignItems:'flex-start' }}>
                  <span style={{ fontSize:'16px', flexShrink:0 }}>{icon}</span>
                  <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'13px', color:'#555', margin:0, lineHeight:1.6 }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}