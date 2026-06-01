// @ts-nocheck
'use client'

import { useState, useRef, useEffect } from 'react'

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I'm Arianna, your personal Traffikora guide ✨ Whether you're a salon owner, HVAC company, law firm, restaurant, or agency — I'll help you find the perfect plan and get your marketing running on autopilot. What type of business do you run?" }
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
                  <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <rect width="44" height="44" fill="#1a0e00"/>
                    <ellipse cx="22" cy="10" rx="13" ry="10" fill="#c8a020"/>
                    <ellipse cx="22" cy="7" rx="13" ry="6" fill="#d4aa22"/>
                    <rect x="9" y="9" width="4" height="20" rx="3" fill="#c8a020"/>
                    <rect x="31" y="9" width="4" height="20" rx="3" fill="#c8a020"/>
                    <ellipse cx="22" cy="22" rx="10" ry="12" fill="#f5c5a0"/>
                    <ellipse cx="18" cy="20" rx="2" ry="2.2" fill="#3a2000"/>
                    <ellipse cx="26" cy="20" rx="2" ry="2.2" fill="#3a2000"/>
                    <ellipse cx="18.7" cy="19.3" rx="0.7" ry="0.7" fill="#fff"/>
                    <ellipse cx="26.7" cy="19.3" rx="0.7" ry="0.7" fill="#fff"/>
                    <path d="M15.5 17 Q18 15.8 20.5 17" stroke="#8B6914" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
                    <path d="M23.5 17 Q26 15.8 28.5 17" stroke="#8B6914" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
                    <ellipse cx="22" cy="23.5" rx="1.2" ry="0.8" fill="#e0a882"/>
                    <path d="M18.5 26.5 Q22 29.5 25.5 26.5" stroke="#c0826a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                    <ellipse cx="22" cy="27.2" rx="3.2" ry="1.3" fill="#e07060"/>
                    <rect x="19" y="33" width="6" height="5" rx="2" fill="#f5c5a0"/>
                    <ellipse cx="22" cy="42" rx="14" ry="5" fill="#E8610A"/>
                  </svg>
                </div>
                <div style={{ position: 'absolute', bottom: '1px', right: '1px', width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', border: '2px solid #111' }} />
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: '700', fontSize: '15px' }}>Arianna</div>
                <div style={{ color: '#22c55e', fontSize: '11px', fontWeight: '500' }}>● Online — Traffikora Guide</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#555', fontSize: '22px', cursor: 'pointer', lineHeight: 1, padding: '4px' }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', alignItems: 'flex-end', gap: '8px' }}>
                {m.role === 'assistant' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '1px solid #E8610A' }}>
                    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                      <rect width="28" height="28" fill="#1a0e00"/>
                      <ellipse cx="14" cy="8" rx="8" ry="7" fill="#d4aa22"/>
                      <ellipse cx="14" cy="14" rx="6.5" ry="8" fill="#f5c5a0"/>
                      <ellipse cx="11.5" cy="13" rx="1.3" ry="1.4" fill="#3a2000"/>
                      <ellipse cx="16.5" cy="13" rx="1.3" ry="1.4" fill="#3a2000"/>
                      <path d="M11.5 17 Q14 19.5 16.5 17" stroke="#c0826a" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
                      <ellipse cx="14" cy="26" rx="9" ry="4" fill="#E8610A"/>
                    </svg>
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
                  <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <rect width="28" height="28" fill="#1a0e00"/>
                    <ellipse cx="14" cy="8" rx="8" ry="7" fill="#d4aa22"/>
                    <ellipse cx="14" cy="14" rx="6.5" ry="8" fill="#f5c5a0"/>
                    <ellipse cx="11.5" cy="13" rx="1.3" ry="1.4" fill="#3a2000"/>
                    <ellipse cx="16.5" cy="13" rx="1.3" ry="1.4" fill="#3a2000"/>
                    <path d="M11.5 17 Q14 19.5 16.5 17" stroke="#c0826a" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
                    <ellipse cx="14" cy="26" rx="9" ry="4" fill="#E8610A"/>
                  </svg>
                </div>
                <div style={{ background: '#1e1e1e', border: '1px solid #2a2a2a', borderRadius: '16px 16px 16px 4px', padding: '10px 16px', display: 'flex', gap: '5px', alignItems: 'center' }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#E8610A', animationDelay: i * 0.2 + 's' }} />
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
              placeholder="Ask Arianna anything..."
              style={{ flex: 1, background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '10px', color: '#fff', padding: '11px 14px', fontSize: '13px', outline: 'none', fontFamily: 'inherit' }}
            />
            <button onClick={send} disabled={loading || !input.trim()} style={{ background: loading ? '#333' : 'linear-gradient(135deg,#E8610A,#ff8c42)', border: 'none', borderRadius: '10px', padding: '11px 18px', color: '#fff', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '13px' }}>
              Send
            </button>
          </div>
        </div>
      )}

      {/* Bubble button */}
      <button onClick={() => setOpen(!open)} style={{ position: 'fixed', bottom: '24px', right: '24px', width: '62px', height: '62px', borderRadius: '50%', background: 'linear-gradient(135deg,#E8610A,#ff8c42)', border: 'none', cursor: 'pointer', zIndex: 9999, boxShadow: '0 4px 20px rgba(232,97,10,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {open ? (
          <span style={{ color: '#fff', fontSize: '26px', lineHeight: 1 }}>×</span>
        ) : (
          <svg viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg" style={{ width: '62px', height: '62px' }}>
            <rect width="62" height="62" fill="transparent"/>
            <ellipse cx="31" cy="18" rx="14" ry="12" fill="#d4aa22"/>
            <ellipse cx="31" cy="28" rx="11" ry="13" fill="#f5c5a0"/>
            <ellipse cx="26.5" cy="26" rx="2.2" ry="2.4" fill="#3a2000"/>
            <ellipse cx="35.5" cy="26" rx="2.2" ry="2.4" fill="#3a2000"/>
            <path d="M27 32 Q31 35 35 32" stroke="#c0826a" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <ellipse cx="31" cy="52" rx="18" ry="8" fill="#E8610A" opacity="0.9"/>
            <rect x="27" y="39" width="8" height="8" rx="3" fill="#f5c5a0"/>
          </svg>
        )}
      </button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </>
  )
}
