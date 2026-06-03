// @ts-nocheck
'use client'

import { useState, useRef, useEffect } from 'react'

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I’m CYRA, your personal Traffikora AI guide ⚡ Whether you’re a salon owner, HVAC company, law firm, restaurant, or agency — I’ll help you find the perfect plan and get your marketing running on autopilot. What type of business do you run?" }
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
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
      <defs>
        <radialGradient id={`bg${size}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1a0800"/>
          <stop offset="100%" stopColor="#050200"/>
        </radialGradient>
        <linearGradient id={`gT${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE55C"/>
          <stop offset="35%" stopColor="#FFD700"/>
          <stop offset="65%" stopColor="#E8610A"/>
          <stop offset="100%" stopColor="#C84E06"/>
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="16" fill="url(#bg${size})"/>
      <circle cx="16" cy="16" r="15" fill="none" stroke="#E8610A" strokeWidth="1.2"/>
      <circle cx="16" cy="16" r="13" fill="none" stroke="#E8610A" strokeWidth="0.5" strokeDasharray="3 2" opacity="0.4"/>
      <line x1="16" y1="1" x2="16" y2="4" stroke="#E8610A" strokeWidth="1.2"/>
      <line x1="16" y1="28" x2="16" y2="31" stroke="#E8610A" strokeWidth="1.2"/>
      <line x1="1" y1="16" x2="4" y2="16" stroke="#E8610A" strokeWidth="1.2"/>
      <line x1="28" y1="16" x2="31" y2="16" stroke="#E8610A" strokeWidth="1.2"/>
      <rect x="7" y="9" width="18" height="4" rx="1.5" fill="url(#gT${size})"/>
      <rect x="14" y="9" width="4" height="16" rx="1.5" fill="url(#gT${size})"/>
      <rect x="7" y="9" width="18" height="1.5" rx="1" fill="#FFE55C" opacity="0.5"/>
      <rect x="14" y="10.5" width="1.5" height="14.5" rx="1" fill="#FFE55C" opacity="0.3"/>
    </svg>
  )

  return (
    <>
      {open && (
        <div style={{ position:'fixed', bottom:'90px', right:'24px', width:'380px', height:'520px', background:'#0f0f0f', border:'1px solid #2a2a2a', borderRadius:'20px', display:'flex', flexDirection:'column', zIndex:9999, boxShadow:'0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,97,10,0.15)' }}>
          <div style={{ padding:'16px 18px', borderBottom:'1px solid #1e1e1e', display:'flex', alignItems:'center', justifyContent:'space-between', background:'linear-gradient(135deg,#1a0800,#0a0400)', borderRadius:'20px 20px 0 0' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <div style={{ position:'relative', flexShrink:0 }}>
                <div style={{ width:'48px', height:'48px', borderRadius:'50%', overflow:'hidden', border:'2px solid #E8610A', boxShadow:'0 0 16px rgba(232,97,10,0.5)', background:'#050200', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <CyraIcon size="44" />
                </div>
                <div style={{ position:'absolute', bottom:'1px', right:'1px', width:'10px', height:'10px', borderRadius:'50%', background:'#22c55e', border:'2px solid #111' }} />
              </div>
              <div>
                <div style={{ color:'#E8610A', fontWeight:'700', fontSize:'15px', fontFamily:'Georgia,serif' }}>CYRA</div>
                <div style={{ color:'#22c55e', fontSize:'11px', fontWeight:'500' }}>● Online — Traffikora AI Guide</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background:'none', border:'none', color:'#555', fontSize:'22px', cursor:'pointer', lineHeight:1, padding:'4px' }}>×</button>
          </div>

          <div style={{ flex:1, overflowY:'auto', padding:'16px', display:'flex', flexDirection:'column', gap:'12px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display:'flex', justifyContent:m.role==='user'?'flex-end':'flex-start', alignItems:'flex-end', gap:'8px' }}>
                {m.role === 'assistant' && (
                  <div style={{ width:'28px', height:'28px', borderRadius:'50%', overflow:'hidden', flexShrink:0, border:'1px solid #E8610A', background:'#050200', display:'flex', alignItems:'center', justifyContent:'center' }}>
                    <CyraIcon size="26" />
                  </div>
                )}
                <div style={{ maxWidth:'78%', padding:'10px 14px', borderRadius:m.role==='user'?'16px 16px 4px 16px':'16px 16px 16px 4px', background:m.role==='user'?'linear-gradient(135deg,#E8610A,#ff8c42)':'#1e1e1e', color:'#fff', fontSize:'13px', lineHeight:1.6, border:m.role==='assistant'?'1px solid #2a2a2a':'none' }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display:'flex', alignItems:'flex-end', gap:'8px' }}>
                <div style={{ width:'28px', height:'28px', borderRadius:'50%', overflow:'hidden', flexShrink:0, border:'1px solid #E8610A', background:'#050200', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <CyraIcon size="26" />
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
        {open ? <span style={{ color:'#E8610A', fontSize:'26px', lineHeight:1 }}>×</span> : <CyraIcon size="62" />}
      </button>
    </>
  )
}
