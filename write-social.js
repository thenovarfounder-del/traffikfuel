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

  return (
    <>
      {open && (
        <div style={{ position: 'fixed', bottom: '90px', right: '24px', width: '380px', height: '520px', background: '#0f0f0f', border: '1px solid #2a2a2a', borderRadius: '20px', display: 'flex', flexDirection: 'column', zIndex: 9999, boxShadow: '0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,97,10,0.1)' }}>

          {/* Header */}
          <div style={{ padding: '16px 18px', borderBottom: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg,#1a0e00,#111)', borderRadius: '20px 20px 0 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #E8610A', boxShadow: '0 0 12px rgba(232,97,10,0.4)' }}>
                  <img src="/cyra.webp" alt="CYRA" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <div style={{ position: 'absolute', bottom: '1px', right: '1px', width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', border: '2px solid #111' }} />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px' }}>CYRA</div>
                <div style={{ color: '#22c55e', fontSize: '11px', fontWeight: '500' }}>\u25CF Online \u2014 Traffikora AI Guide</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#555', fontSize: '22px', cursor: 'pointer', lineHeight: 1, padding: '4px' }}>\u00D7</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', alignItems: 'flex-end', gap: '8px' }}>
                {m.role === 'assistant' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid #E8610A' }}>
                    <img src="/cyra.webp" alt="CYRA" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                  </div>
                )}
                <div style={{ maxWidth: '78%', padding: '10px 14px', borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', background: m.role === 'user' ? 'linear-gradient(135deg,#E8610A,#ff8c42)' : '#1e1e1e', color: '#fff', fontSize: '13px', lineHeight: 1.6, border: m.role === 'assistant' ? '1px solid #2a2a2a' : 'none' }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid #E8610A' }}>
                  <img src="/cyra.webp" alt="CYRA" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                </div>
                <div style={{ background: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '16px 16px 16px 4px', padding: '10px 16px', display: 'flex', gap: '5px', alignItems: 'center' }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E8610A' }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '12px 16px', borderTop: '1px solid #1e1e1e', display: 'flex', gap: '8px', background: '#0f0f0f', borderRadius: '0 0 20px 20px' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask CYRA anything..."
              style={{ flex: 1, background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '10px', color: '#fff', padding: '11px 14px', fontSize: '13px', outline: 'none', fontFamily: 'inherit' }}
            />
            <button onClick={send} disabled={loading || !input.trim()} style={{ background: loading ? '#333' : 'linear-gradient(135deg,#E8610A,#ff8c42)', border: 'none', borderRadius: '10px', padding: '11px 18px', color: '#fff', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '13px' }}>
              Send
            </button>
          </div>
        </div>
      )}

      {/* Bubble button */}
      <button onClick={() => setOpen(!open)} style={{ position: 'fixed', bottom: '24px', right: '24px', width: '62px', height: '62px', borderRadius: '50%', border: '2px solid #E8610A', cursor: 'pointer', zIndex: 9999, boxShadow: '0 4px 20px rgba(232,97,10,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 0, background: '#0a0a0a' }}>
        {open ? (
          <span style={{ color: '#E8610A', fontSize: '26px', lineHeight: 1 }}>\u00D7</span>
        ) : (
          <img src="/cyra.webp" alt="CYRA" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        )}
      </button>
    </>
  )
}
`;

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx", content);
console.log("SUCCESS - CYRA real photo installed!");