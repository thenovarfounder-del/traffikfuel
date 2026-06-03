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

  const CyraAvatar44 = () => (
    <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="44" height="44" fill="#0a0a0a"/>
      <circle cx="22" cy="22" r="21" fill="none" stroke="#E8610A" strokeWidth="0.8" strokeDasharray="4 3"/>
      <ellipse cx="22" cy="30" rx="10" ry="6" fill="#1a1a1a"/>
      <rect cx="18" cy="28" width="8" height="6" rx="2" fill="#1f1208"/>
      <ellipse cx="22" cy="22" rx="10" ry="12" fill="#1f1208"/>
      <ellipse cx="22" cy="14" rx="11" ry="8" fill="#0d0d0d"/>
      <rect x="11" y="13" width="3" height="12" rx="2" fill="#0d0d0d"/>
      <rect x="30" y="13" width="3" height="12" rx="2" fill="#0d0d0d"/>
      <ellipse cx="17.5" cy="21" rx="2.8" ry="3" fill="#0d2535"/>
      <ellipse cx="26.5" cy="21" rx="2.8" ry="3" fill="#0d2535"/>
      <circle cx="17.5" cy="21" r="2.6" fill="none" stroke="#E8610A" strokeWidth="0.6" opacity="0.8"/>
      <circle cx="26.5" cy="21" r="2.6" fill="none" stroke="#E8610A" strokeWidth="0.6" opacity="0.8"/>
      <ellipse cx="17.5" cy="21" rx="1.6" ry="1.7" fill="#050d12"/>
      <ellipse cx="26.5" cy="21" rx="1.6" ry="1.7" fill="#050d12"/>
      <ellipse cx="16.8" cy="20.3" rx="0.6" ry="0.6" fill="#fff" opacity="0.9"/>
      <ellipse cx="25.8" cy="20.3" rx="0.6" ry="0.6" fill="#fff" opacity="0.9"/>
      <path d="M14.5 18 Q17.5 16.5 20.5 18" stroke="#1a0a00" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M23.5 18 Q26.5 16.5 29.5 18" stroke="#1a0a00" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M18.5 27 Q22 29.5 25.5 27" stroke="#8B2500" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <ellipse cx="22" cy="27.8" rx="3.2" ry="1.3" fill="#A03010"/>
      <circle cx="12" cy="23" r="1.5" fill="#1a1a1a"/>
      <circle cx="12" cy="23" r="0.8" fill="#E8610A" opacity="0.7"/>
      <circle cx="32" cy="23" r="1.5" fill="#1a1a1a"/>
      <circle cx="32" cy="23" r="0.8" fill="#E8610A" opacity="0.7"/>
      <ellipse cx="22" cy="40" rx="14" ry="6" fill="#111"/>
    </svg>
  )

  const CyraAvatar28 = () => (
    <svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="28" height="28" fill="#0a0a0a"/>
      <circle cx="14" cy="14" r="13" fill="none" stroke="#E8610A" strokeWidth="0.7" strokeDasharray="3 2"/>
      <ellipse cx="14" cy="14" rx="7" ry="8.5" fill="#1f1208"/>
      <ellipse cx="14" cy="8" rx="7.5" ry="6" fill="#0d0d0d"/>
      <rect x="6.5" y="7" width="2" height="8" rx="1.5" fill="#0d0d0d"/>
      <rect x="19.5" y="7" width="2" height="8" rx="1.5" fill="#0d0d0d"/>
      <ellipse cx="11" cy="13" rx="1.8" ry="1.9" fill="#0d2535"/>
      <ellipse cx="17" cy="13" rx="1.8" ry="1.9" fill="#0d2535"/>
      <circle cx="11" cy="13" r="1.7" fill="none" stroke="#E8610A" strokeWidth="0.5" opacity="0.8"/>
      <circle cx="17" cy="13" r="1.7" fill="none" stroke="#E8610A" strokeWidth="0.5" opacity="0.8"/>
      <ellipse cx="11" cy="13" rx="1" ry="1.1" fill="#050d12"/>
      <ellipse cx="17" cy="13" rx="1" ry="1.1" fill="#050d12"/>
      <ellipse cx="10.5" cy="12.5" rx="0.4" ry="0.4" fill="#fff" opacity="0.9"/>
      <ellipse cx="16.5" cy="12.5" rx="0.4" ry="0.4" fill="#fff" opacity="0.9"/>
      <path d="M9 10.5 Q11 9.5 13 10.5" stroke="#1a0a00" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      <path d="M15 10.5 Q17 9.5 19 10.5" stroke="#1a0a00" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
      <path d="M11.5 17.5 Q14 19.5 16.5 17.5" stroke="#8B2500" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <ellipse cx="14" cy="18" rx="2.2" ry="1" fill="#A03010"/>
      <ellipse cx="14" cy="25" rx="9" ry="4" fill="#111"/>
    </svg>
  )

  const CyraAvatar62 = () => (
    <svg viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg" style={{ width: '62px', height: '62px' }}>
      <rect width="62" height="62" fill="#0a0a0a" rx="31"/>
      <circle cx="31" cy="31" r="29" fill="none" stroke="#E8610A" strokeWidth="1" strokeDasharray="6 4"/>
      <ellipse cx="31" cy="62" rx="22" ry="10" fill="#111"/>
      <rect x="25" y="46" width="12" height="10" rx="3" fill="#1f1208"/>
      <ellipse cx="31" cy="30" rx="14" ry="17" fill="#1f1208"/>
      <ellipse cx="31" cy="17" rx="15" ry="12" fill="#0d0d0d"/>
      <rect x="15" y="15" width="4" height="20" rx="3" fill="#0d0d0d"/>
      <rect x="43" y="15" width="4" height="20" rx="3" fill="#0d0d0d"/>
      <ellipse cx="24" cy="29" rx="4" ry="4.5" fill="#0d2535"/>
      <ellipse cx="38" cy="29" rx="4" ry="4.5" fill="#0d2535"/>
      <circle cx="24" cy="29" r="3.8" fill="none" stroke="#E8610A" strokeWidth="1" opacity="0.9"/>
      <circle cx="38" cy="29" r="3.8" fill="none" stroke="#E8610A" strokeWidth="1" opacity="0.9"/>
      <ellipse cx="24" cy="29" rx="2.4" ry="2.6" fill="#050d12"/>
      <ellipse cx="38" cy="29" rx="2.4" ry="2.6" fill="#050d12"/>
      <ellipse cx="22.8" cy="27.8" rx="0.9" ry="0.9" fill="#fff" opacity="0.9"/>
      <ellipse cx="36.8" cy="27.8" rx="0.9" ry="0.9" fill="#fff" opacity="0.9"/>
      <path d="M19 23 Q24 20.5 29 23" stroke="#1a0a00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M33 23 Q38 20.5 43 23" stroke="#1a0a00" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M25 38 Q31 42.5 37 38" stroke="#8B2500" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      <ellipse cx="31" cy="39.5" rx="5.5" ry="2.2" fill="#A03010"/>
      <ellipse cx="31" cy="38.5" rx="5.5" ry="1.5" fill="#c04020" opacity="0.6"/>
      <circle cx="16" cy="32" r="2.5" fill="#1a1a1a"/>
      <circle cx="16" cy="32" r="1.2" fill="#E8610A" opacity="0.8"/>
      <circle cx="46" cy="32" r="2.5" fill="#1a1a1a"/>
      <circle cx="46" cy="32" r="1.2" fill="#E8610A" opacity="0.8"/>
      <line x1="4" y1="31" x2="12" y2="31" stroke="#E8610A" strokeWidth="0.6" opacity="0.4"/>
      <line x1="50" y1="31" x2="58" y2="31" stroke="#E8610A" strokeWidth="0.6" opacity="0.4"/>
    </svg>
  )

  return (
    <>
      {open && (
        <div style={{ position: 'fixed', bottom: '90px', right: '24px', width: '380px', height: '520px', background: '#0f0f0f', border: '1px solid #2a2a2a', borderRadius: '20px', display: 'flex', flexDirection: 'column', zIndex: 9999, boxShadow: '0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,97,10,0.1)' }}>

          {/* Header */}
          <div style={{ padding: '16px 18px', borderBottom: '1px solid #1e1e1e', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'linear-gradient(135deg,#1a0e00,#111)', borderRadius: '20px 20px 0 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #E8610A', boxShadow: '0 0 12px rgba(232,97,10,0.4)' }}>
                  <CyraAvatar44 />
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
                    <CyraAvatar28 />
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
                  <CyraAvatar28 />
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
      <button onClick={() => setOpen(!open)} style={{ position: 'fixed', bottom: '24px', right: '24px', width: '62px', height: '62px', borderRadius: '50%', background: '#0a0a0a', border: '2px solid #E8610A', cursor: 'pointer', zIndex: 9999, boxShadow: '0 4px 20px rgba(232,97,10,0.55)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        {open ? (
          <span style={{ color: '#E8610A', fontSize: '26px', lineHeight: 1 }}>\u00D7</span>
        ) : (
          <CyraAvatar62 />
        )}
      </button>

      <style>{\`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(0.85); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      \`}</style>
    </>
  )
}
`;

fs.writeFileSync("C:\\Users\\randy\\traffikfuel\\src\\components\\ChatBubble.tsx", content);
console.log("SUCCESS - CYRA avatar installed in ChatBubble!");