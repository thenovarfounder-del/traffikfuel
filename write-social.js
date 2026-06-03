const fs = require("fs");

const content = `// @ts-nocheck
'use client'

import { useState, useRef, useEffect } from 'react'

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I\u2019m CYRA, your personal Traffikora AI guide \u26A1 Whether you\u2019re a salon owner, HVAC company, law firm, restaurant, or agency \u2014 I\u2019ll help you find the perfect plan and get your marketing running on autopilot. What type of business do you run?" }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (bottomRef.current) bottomRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  async function send() {
    if (!input.trim() || loading) return
    const userMsg = { role: 'user', content: input.trim() }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next })
      })
      const data = await res.json()
      setMessages([...next, { role: 'assistant', content: data.message }])
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    }
    setLoading(false)
  }

  const CyraIcon = ({ size }) => (
    <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
      <defs>
        <radialGradient id={\`bg\${size}\`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a0800"/>
          <stop offset="100%" stopColor="#050200"/>
        </radialGradient>
        <linearGradient id={\`gT\${size}\`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C"/>
          <stop offset="30%" stopColor="#FFD700"/>
          <stop offset="60%" stopColor="#E8610A"/>
          <stop offset="100%" stopColor="#C84E06"/>
        </linearGradient>
        <linearGradient id={\`gShine\${size}\`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#fff" stopOpacity="0"/>
        </linearGradient>
      </defs>

      <circle cx="110" cy="110" r="108" fill="url(#bg\${size})"/>
      <circle cx="110" cy="110" r="106" fill="none" stroke="#E8610A" strokeWidth="3"/>
      <circle cx="110" cy="110" r="98" fill="none" stroke="#E8610A" strokeWidth="1" strokeDasharray="8 5" opacity="0.5"/>
      <circle cx="110" cy="110" r="88" fill="none" stroke="#ff8c42" strokeWidth="0.6" strokeDasharray="3 9" opacity="0.3"/>

      <line x1="110" y1="4" x2="110" y2="20" stroke="#E8610A" strokeWidth="3"/>
      <line x1="110" y1="200" x2="110" y2="216" stroke="#E8610A" strokeWidth="3"/>
      <line x1="4" y1="110" x2="20" y2="110" stroke="#E8610A" strokeWidth="3"/>
      <line x1="200" y1="110" x2="216" y2="110" stroke="#E8610A" strokeWidth="3"/>
      <line x1="34" y1="25" x2="43" y2="38" stroke="#ff8c42" strokeWidth="2" opacity="0.9"/>
      <line x1="186" y1="25" x2="177" y2="38" stroke="#ff8c42" strokeWidth="2" opacity="0.9"/>
      <line x1="34" y1="195" x2="43" y2="182" stroke="#ff8c42" strokeWidth="2" opacity="0.9"/>
      <line x1="186" y1="195" x2="177" y2="182" stroke="#ff8c42" strokeWidth="2" opacity="0.9"/>

      <polygon points="110,30 172,65 172,135 110,170 48,135 48,65" fill="none" stroke="#E8610A" strokeWidth="2.2"/>
      <polygon points="110,23 115,30 110,37 105,30" fill="#E8610A"/>
      <polygon points="172,58 179,65 172,72 165,65" fill="#E8610A"/>
      <polygon points="172,128 179,135 172,142 165,135" fill="#E8610A"/>
      <polygon points="110,163 115,170 110,177 105,170" fill="#E8610A"/>
      <polygon points="48,128 55,135 48,142 41,135" fill="#E8610A"/>
      <polygon points="48,58 55,65 48,72 41,65" fill="#E8610A"/>

      <line x1="110" y1="30" x2="110" y2="20" stroke="#E8610A" strokeWidth="1.5" opacity="0.8"/>
      <line x1="172" y1="65" x2="180" y2="60" stroke="#E8610A" strokeWidth="1.5" opacity="0.8"/>
      <line x1="172" y1="135" x2="180" y2="140" stroke="#E8610A" strokeWidth="1.5" opacity="0.8"/>
      <line x1="110" y1="170" x2="110" y2="180" stroke="#E8610A" strokeWidth="1.5" opacity="0.8"/>
      <line x1="48" y1="135" x2="40" y2="140" stroke="#E8610A" strokeWidth="1.5" opacity="0.8"/>
      <line x1="48" y1="65" x2="40" y2="60" stroke="#E8610A" strokeWidth="1.5" opacity="0.8"/>

      <polygon points="110,50 154,74 154,122 110,146 66,122 66,74" fill="#100600"/>
      <polygon points="110,50 154,74 154,122 110,146 66,122 66,74" fill="none" stroke="#C84E06" strokeWidth="1.5" opacity="0.9"/>
      <polygon points="110,62 144,80 144,116 110,134 76,116 76,80" fill="#180a00" stroke="#E8610A" strokeWidth="0.6" opacity="0.4"/>

      <line x1="70" y1="94" x2="150" y2="94" stroke="#E8610A" strokeWidth="0.5" opacity="0.2"/>
      <line x1="68" y1="104" x2="152" y2="104" stroke="#ff8c42" strokeWidth="0.6" opacity="0.25"/>
      <line x1="70" y1="114" x2="150" y2="114" stroke="#E8610A" strokeWidth="0.5" opacity="0.2"/>

      {/* BIG BOLD T with gold-to-orange gradient */}
      <rect x="70" y="66" width="80" height="16" rx="4" fill="url(#gT\${size})"/>
      <rect x="102" y="66" width="16" height="80" rx="4" fill="url(#gT\${size})"/>

      {/* Gold shine on top of T bar */}
      <rect x="70" y="66" width="80" height="6" rx="4" fill="url(#gShine\${size})"/>
      {/* Gold shine on left of T stem */}
      <rect x="102" y="72" width="6" height="74" rx="2" fill="url(#gShine\${size})"/>

      {/* Gold center highlight line on T bar */}
      <rect x="74" y="70" width="72" height="3" rx="2" fill="#FFE55C" opacity="0.5"/>
      {/* Gold center highlight on stem */}
      <rect x="106" y="74" width="4" height="68" rx="2" fill="#FFE55C" opacity="0.3"/>

      <circle cx="110" cy="46" r="4" fill="#E8610A"/>
      <circle cx="110" cy="46" r="2" fill="#ffb070" opacity="0.8"/>
      <circle cx="154" cy="74" r="3.5" fill="#C84E06"/>
      <circle cx="154" cy="122" r="3.5" fill="#E8610A"/>
      <circle cx="110" cy="148" r="4" fill="#C84E06"/>
      <circle cx="66" cy="122" r="3.5" fill="#E8610A"/>
      <circle cx="66" cy="74" r="3.5" fill="#C84E06"/>

      <text x="110" y="196" fontFamily="Georgia,serif" fontSize="12" fontWeight="700" fill="#E8610A" textAnchor="middle" letterSpacing="8">CYRA</text>
      <line x1="60" y1="200" x2="88" y2="200" stroke="#C84E06" strokeWidth="0.8" opacity="0.7"/>
      <line x1="132" y1="200" x2="160" y2="200" stroke="#C84E06" strokeWidth="0.8" opacity="0.7"/>
    </svg>
  )

  return (
    <>
      {open && (
        <div style={{ position:'fixed', bottom:'90px', right:'24px', width:'380px', height:'520px', background:'#0f0f0f', border:'1px solid #2a2a2a', borderRadius:'20px', display:'flex', flexDirection:'column', zIndex:9999, boxShadow:'0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,97,10,0.15)' }}>
          <div style={{ padding:'16px 18px', borderBottom:'1px solid #1e1e1e', display:'flex', alignItems:'center', justifyContent:'space-between', background:'linear-gradient(135deg,#1a0800,#0a0400)', borderRadius:'20px 20px 0 0' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <div style={{ position:'relative', flexShrink:0 }}>
                <div style={{ width:'48px', height:'48px', borderRadius:'50%', overflow:'hidden', border:'2px solid #E8610A', boxShadow:'0 0 16px rgba(232,97,10,0.5)' }}>
                  <CyraIcon size="48" />
                </div>
                <div style={{ position:'absolute', bottom:'1px', right:'1px', width:'10px', height:'10px', borderRadius:'50%', background:'#22c55e', border:'2px solid #111' }} />
              </div>
              <div>
                <div style={{ color:'#E8610A', fontWeight:'700', fontSize:'15px', fontFamily:'Georgia,serif' }}>CYRA</div>
                <div style={{ color:'#22c55e', fontSize:'11px', fontWeight:'500' }}>\u25CF Online \u2014 Traffikora AI Guide</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background:'none', border:'none', color:'#555', fontSize:'22px', cursor:'pointer', lineHeight:1, padding:'4px' }}>\u00D7</button>
          </div>

          <div style={{ flex:1, overflowY:'auto', padding:'16px', display:'flex', flexDirection:'column', gap:'12px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display:'flex', justifyContent:m.role==='user'?'flex-end':'flex-start', alignItems:'flex-end', gap:'8px' }}>
                {m.role === 'assistant' && (
                  <div style={{ width:'28px', height:'28px', borderRadius:'50%', overflow:'hidden', flexShrink:0, border:'1px solid #E8610A' }}>
                    <CyraIcon size="28" />
                  </div>
                )}
                <div style={{ maxWidth:'78%', padding:'10px 14px', borderRadius:m.role==='user'?'16px 16px 4px 16px':'16px 16px 16px 4px', background:m.role==='user'?'linear-gradient(135deg,#E8610A,#ff8c42)':'#1e1e1e', color:'#fff', fontSize:'13px', lineHeight:1.6, border:m.role==='assistant'?'1px solid #2a2a2a':'none' }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display:'flex', alignItems:'flex-end', gap:'8px' }}>
                <div style={{ width:'28px', height:'28px', borderRadius:'50%', overflow:'hidden', flexShrink:0, border:'1px solid #E8610A' }}>
                  <CyraIcon size="28" />
                </div>
                <div style={{ background:'#1e1e1e', border:'1px solid #2a2a2a', borderRadius:'16px 16px 16px 4px', padding:'10px 16px', display:'flex', gap:'5px', alignItems:'center' }}>
                  {[0,1,2].map(i => <div key={i} style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#E8610A' }} />)}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div style={{ padding:'12px 16px', borderTop:'1px solid #1e1e1e', display:'flex', gap:'8px', background:'#0f0f0f', borderRadius:'0 0 20px 20px' }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key==='Enter' && send()} placeholder="Ask CYRA anything..."
              style={{ flex:1, background:'#1a1a1a', border:'1px solid #2a2a2a', borderRadius:'10px', color:'#fff', padding:'11px 14px', fontSize:'13px', outline:'none', fontFamily:'inherit' }} />
            <button onClick={send} disabled={loading || !input.trim()}
              style={{ background:loading?'#333':'linear-gradient(135deg,#E8610A,#C84E06)', border:'none', borderRadius:'10px', padding:'11px 18px', color:'#fff', fontWeight:'700', cursor:loading?'not-allowed':'pointer', fontSize:'13px' }}>
              Send
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)}
        style={{ position:'fixed', bottom:'24px', right:'24px', width:'64px', height:'64px', borderRadius:'50%', background:'#050200', border:'2px solid #E8610A', cursor:'pointer', zIndex:9999, boxShadow:'0 4px 24px rgba(232,97,10,0.6), 0 0 40px rgba(232,97,10,0.2)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', padding:0 }}>
        {open ? <span style={{ color:'#E8610A', fontSize:'26px', lineHeight:1 }}>\u00D7</span> : <CyraIcon size="64" />}
      </button>
    </>
  )
}
`;

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx", content);
console.log("SUCCESS - CYRA bigger T with gold center!");