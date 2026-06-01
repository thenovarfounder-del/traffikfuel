// @ts-nocheck
'use client'

import { useState, useRef, useEffect } from 'react'

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I am Tora, your Traffikora assistant. Ask me anything about our plans, features, or how it all works!' }
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
        <div style={{ position: 'fixed', bottom: '90px', right: '24px', width: '360px', height: '480px', background: '#1a1a1a', border: '1px solid #333', borderRadius: '16px', display: 'flex', flexDirection: 'column', zIndex: 9999, boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #E8610A, #ff8c42)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>T</div>
              <div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>Tora</div>
                <div style={{ color: '#22c55e', fontSize: '11px' }}>● Online</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#888', fontSize: '20px', cursor: 'pointer', lineHeight: 1 }}>x</button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ maxWidth: '80%', padding: '10px 14px', borderRadius: m.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px', background: m.role === 'user' ? 'linear-gradient(135deg, #E8610A, #ff8c42)' : '#2a2a2a', color: '#fff', fontSize: '13px', lineHeight: 1.5 }}>
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ background: '#2a2a2a', borderRadius: '16px 16px 16px 4px', padding: '10px 16px', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#888', display: 'inline-block', animation: 'pulse 1s infinite' }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#888', display: 'inline-block', animation: 'pulse 1s 0.2s infinite' }} />
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#888', display: 'inline-block', animation: 'pulse 1s 0.4s infinite' }} />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div style={{ padding: '12px 16px', borderTop: '1px solid #333', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && send()}
              placeholder="Ask me anything..."
              style={{ flex: 1, background: '#2a2a2a', border: '1px solid #444', borderRadius: '8px', color: '#fff', padding: '10px 14px', fontSize: '13px', outline: 'none' }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              style={{ background: loading ? '#444' : 'linear-gradient(135deg, #E8610A, #ff8c42)', border: 'none', borderRadius: '8px', padding: '10px 16px', color: '#fff', fontWeight: 700, cursor: loading ? 'not-allowed' : 'pointer', fontSize: '13px' }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        style={{ position: 'fixed', bottom: '24px', right: '24px', width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(135deg, #E8610A, #ff8c42)', border: 'none', cursor: 'pointer', zIndex: 9999, boxShadow: '0 4px 16px rgba(232,97,10,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px' }}
      >
        {open ? '×' : '💬'}
      </button>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3 }
          50% { opacity: 1 }
        }
      `}</style>
    </>
  )
}
