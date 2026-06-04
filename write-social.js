const fs = require('fs')
const path = require('path')

const content = `// @ts-nocheck
'use client'

import { useState, useRef, useEffect } from 'react'

const BUSINESS_TYPES = [
  { label: 'Salon / Spa', value: 'salon' },
  { label: 'HVAC / Plumber', value: 'hvac' },
  { label: 'Law Firm', value: 'law' },
  { label: 'Dental Office', value: 'dental' },
  { label: 'Restaurant', value: 'restaurant' },
  { label: 'Real Estate', value: 'realestate' },
  { label: 'Gym / Fitness', value: 'gym' },
  { label: 'Med Spa', value: 'medspa' },
  { label: 'Marketing Agency', value: 'agency' },
  { label: 'Chiropractor', value: 'chiro' },
  { label: 'Auto Repair', value: 'auto' },
  { label: 'Other', value: 'other' },
]

const BUSINESS_LABELS = new Set(BUSINESS_TYPES.map(b => b.label.toLowerCase()))

function extractEmail(text) {
  const match = text.match(/[a-zA-Z0-9._%+\\-]+@[a-zA-Z0-9.\\-]+\\.[a-zA-Z]{2,}/)
  return match ? match[0] : null
}

function extractNameFromMessages(msgs) {
  for (let i = 1; i < msgs.length; i++) {
    const m = msgs[i]
    const prev = msgs[i - 1]
    if (m.role !== 'user' || prev.role !== 'assistant') continue
    const prevLower = (prev.content || '').toLowerCase()
    if (!prevLower.includes('first name') && !prevLower.includes('your name')) continue
    const t = m.content.trim()
    if (
      t.length < 30 &&
      t.split(' ').length <= 3 &&
      /^[A-Za-z]/.test(t) &&
      !t.includes('@') &&
      !BUSINESS_LABELS.has(t.toLowerCase())
    ) {
      return t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
    }
  }
  return null
}

function renderMarkdown(text) {
  return text
    .replace(/https?:\\/\\/[^\\s<>"]+/g, url => {
      const display = url.replace(/^https?:\\/\\//, '')
      return \`<a href="\${url}" target="_blank" rel="noopener noreferrer" style="color:#E8610A;text-decoration:underline;font-weight:600;">\${display}</a>\`
    })
    .replace(/\\*\\*(.+?)\\*\\*/g, '<strong>$1</strong>')
    .replace(/\\*(.+?)\\*/g, '<em>$1</em>')
    .replace(/^### (.+)$/gm, '<div style="color:#E8610A;font-weight:700;font-size:13px;margin:10px 0 4px;">$1</div>')
    .replace(/^## (.+)$/gm, '<div style="color:#E8610A;font-weight:700;font-size:14px;margin:10px 0 4px;">$1</div>')
    .replace(/^# (.+)$/gm, '<div style="color:#E8610A;font-weight:700;font-size:15px;margin:10px 0 4px;">$1</div>')
    .replace(/^[\\-\\*] (.+)$/gm, '<div style="display:flex;gap:6px;margin:3px 0;"><span style="color:#E8610A;flex-shrink:0;">\\u2022</span><span>$1</span></div>')
    .replace(/^\\d+\\. (.+)$/gm, '<div style="margin:3px 0;">$1</div>')
    .replace(/\\n\\n/g, '<br/><br/>')
    .replace(/\\n/g, '<br/>')
}

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [leadCaptured, setLeadCaptured] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hi! I\\u2019m Eva, your Traffikora AI guide \\u26a1 I\\u2019ll help you find the perfect plan and get your marketing running on autopilot. First\\u2014what type of business do you run?", showButtons: true }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const scrollRef = useRef(null)
  const lastAssistantRef = useRef(null)
  const visitorNameRef = useRef(null)
  const businessTypeRef = useRef(null)
  const leadCapturedRef = useRef(false)

  // Scroll to TOP of latest assistant message
  useEffect(() => {
    if (lastAssistantRef.current) {
      lastAssistantRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [messages])

  async function fireLead(email, biz, name) {
    try {
      const res = await fetch('/api/chat/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ visitorEmail: email, businessType: biz, visitorName: name })
      })
      const data = await res.json()
      console.log('Lead fire result:', JSON.stringify(data))
    } catch (e) {
      console.error('Lead fire failed:', e)
    }
  }

  function checkForEmailInMessages(msgs) {
    if (leadCapturedRef.current) return
    const userMessages = msgs.filter(m => m.role === 'user')
    const userText = userMessages.map(m => m.content).join(' ')
    const email = extractEmail(userText)
    if (email) {
      leadCapturedRef.current = true
      setLeadCaptured(true)
      const name = visitorNameRef.current || extractNameFromMessages(msgs)
      console.log('Firing lead with name:', name, 'email:', email, 'biz:', businessTypeRef.current)
      fireLead(email, businessTypeRef.current, name)
    }
  }

  function selectBusiness(biz) {
    businessTypeRef.current = biz.value
    const userMsg = { role: 'user', content: biz.label }
    const next = [...messages.map(m => ({ ...m, showButtons: false })), userMsg]
    setMessages(next)
    sendToAPI(next, biz.value)
  }

  async function send() {
    if (!input.trim() || loading) return
    const trimmed = input.trim()
    const userMsg = { role: 'user', content: trimmed }
    const next = [...messages.map(m => ({ ...m, showButtons: false })), userMsg]

    if (!visitorNameRef.current) {
      const name = extractNameFromMessages(next)
      if (name) {
        visitorNameRef.current = name
        console.log('Name captured:', name)
      }
    }

    setMessages(next)
    setInput('')
    sendToAPI(next, businessTypeRef.current)
  }

  async function sendToAPI(next, biz) {
    setLoading(true)
    try {
      const apiMessages = next.map(({ role, content }) => ({ role, content }))
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages, businessType: biz })
      })
      const data = await res.json()
      const reply = data.message
      const updatedMessages = [...next, { role: 'assistant', content: reply }]

      if (!visitorNameRef.current) {
        const name = extractNameFromMessages(updatedMessages)
        if (name) {
          visitorNameRef.current = name
          console.log('Name captured from context:', name)
        }
      }

      setMessages(updatedMessages)
      checkForEmailInMessages(updatedMessages)
    } catch {
      setMessages([...next, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    }
    setLoading(false)
  }

  const EvaIcon = ({ size }) => (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ width: size, height: size }}>
      <rect width="32" height="32" rx="6" fill="#111111"/>
      <text x="16" y="24" fontFamily="Georgia, serif" fontSize="24" fontWeight="900" fill="#E8610A" textAnchor="middle">T</text>
    </svg>
  )

  const assistantCount = messages.filter(m => m.role === 'assistant').length
  let assistantIndex = 0

  return (
    <>
      {open && (
        <div style={{ position:'fixed', bottom:'88px', right:'24px', width:'360px', height:'500px', background:'#0f0f0f', border:'1px solid #2a2a2a', borderRadius:'20px', display:'flex', flexDirection:'column', zIndex:9999, boxShadow:'0 12px 48px rgba(0,0,0,0.7), 0 0 0 1px rgba(232,97,10,0.15)' }}>
          <div style={{ padding:'16px 18px', borderBottom:'1px solid #1e1e1e', display:'flex', alignItems:'center', justifyContent:'space-between', background:'linear-gradient(135deg,#1a0800,#0a0400)', borderRadius:'20px 20px 0 0' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
              <div style={{ position:'relative', flexShrink:0 }}>
                <div style={{ width:'48px', height:'48px', borderRadius:'50%', overflow:'hidden', border:'2px solid #E8610A', boxShadow:'0 0 16px rgba(232,97,10,0.5)', background:'#050200', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <EvaIcon size="44" />
                </div>
                <div style={{ position:'absolute', bottom:'1px', right:'1px', width:'10px', height:'10px', borderRadius:'50%', background:'#22c55e', border:'2px solid #111' }} />
              </div>
              <div>
                <div style={{ color:'#E8610A', fontWeight:'700', fontSize:'15px', fontFamily:'Georgia,serif' }}>Eva</div>
                <div style={{ color:'#22c55e', fontSize:'11px', fontWeight:'500' }}>&bull; Online &mdash; Traffikora AI Guide</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background:'none', border:'none', color:'#888', fontSize:'24px', cursor:'pointer', lineHeight:1, padding:'4px 8px', display:'flex', alignItems:'center', justifyContent:'center' }}>&times;</button>
          </div>

          <div ref={scrollRef} style={{ flex:1, overflowY:'auto', padding:'16px', display:'flex', flexDirection:'column', gap:'12px' }}>
            {messages.map((m, i) => {
              const isLastAssistant = m.role === 'assistant' && (() => { assistantIndex++; return assistantIndex === assistantCount })()
              return (
                <div key={i} ref={isLastAssistant ? lastAssistantRef : null}>
                  <div style={{ display:'flex', justifyContent:m.role==='user'?'flex-end':'flex-start', alignItems:'flex-end', gap:'8px' }}>
                    {m.role === 'assistant' && (
                      <div style={{ width:'28px', height:'28px', borderRadius:'50%', overflow:'hidden', flexShrink:0, border:'1px solid #E8610A', background:'#050200', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <EvaIcon size="26" />
                      </div>
                    )}
                    <div style={{ maxWidth:'78%', padding:'10px 14px', borderRadius:m.role==='user'?'16px 16px 4px 16px':'16px 16px 16px 4px', background:m.role==='user'?'linear-gradient(135deg,#E8610A,#ff8c42)':'#1e1e1e', color:'#fff', fontSize:'13px', lineHeight:1.6, border:m.role==='assistant'?'1px solid #2a2a2a':'none' }}
                      dangerouslySetInnerHTML={{ __html: m.role === 'assistant' ? renderMarkdown(m.content) : m.content }}
                    />
                  </div>
                  {m.showButtons && (
                    <div style={{ marginTop:'10px', marginLeft:'36px', display:'flex', flexWrap:'wrap', gap:'6px' }}>
                      {BUSINESS_TYPES.map(biz => (
                        <button key={biz.value} onClick={() => selectBusiness(biz)}
                          style={{ background:'#1a1a1a', border:'1px solid #333', borderRadius:'20px', color:'#ccc', padding:'5px 12px', fontSize:'12px', cursor:'pointer', fontFamily:'inherit' }}
                          onMouseEnter={e => { e.target.style.borderColor='#E8610A'; e.target.style.color='#E8610A' }}
                          onMouseLeave={e => { e.target.style.borderColor='#333'; e.target.style.color='#ccc' }}>
                          {biz.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
            {loading && (
              <div style={{ display:'flex', alignItems:'flex-end', gap:'8px' }}>
                <div style={{ width:'28px', height:'28px', borderRadius:'50%', overflow:'hidden', flexShrink:0, border:'1px solid #E8610A', background:'#050200', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <EvaIcon size="26" />
                </div>
                <div style={{ background:'#1e1e1e', border:'1px solid #2a2a2a', borderRadius:'16px 16px 16px 4px', padding:'10px 16px', display:'flex', gap:'5px', alignItems:'center' }}>
                  {[0,1,2].map(i => <div key={i} style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#E8610A', animation:'cyraPulse 1.2s ease-in-out infinite', animationDelay: i * 0.2 + 's' }} />)}
                </div>
              </div>
            )}
          </div>

          <div style={{ padding:'12px 16px', borderTop:'1px solid #1e1e1e', display:'flex', gap:'8px', background:'#0f0f0f', borderRadius:'0 0 20px 20px' }}>
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key==='Enter' && send()} placeholder="Ask Eva anything..."
              style={{ flex:1, background:'#1a1a1a', border:'1px solid #2a2a2a', borderRadius:'10px', color:'#fff', padding:'11px 14px', fontSize:'13px', outline:'none', fontFamily:'inherit' }} />
            <button onClick={send} disabled={loading || !input.trim()}
              style={{ background:loading||!input.trim()?'#333':'linear-gradient(135deg,#E8610A,#C84E06)', border:'none', borderRadius:'10px', padding:'11px 18px', color:'#fff', fontWeight:'700', cursor:loading||!input.trim()?'not-allowed':'pointer', fontSize:'13px' }}>
              Send
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setOpen(!open)}
        style={{ position:'fixed', bottom:'24px', right:'24px', width:'52px', height:'52px', borderRadius:'50%', background:'#050200', border:'2px solid #E8610A', cursor:'pointer', zIndex:9999, boxShadow:'0 4px 24px rgba(232,97,10,0.6), 0 0 40px rgba(232,97,10,0.2)', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', padding:0 }}>
        {open ? <span style={{ color:'#E8610A', fontSize:'26px', lineHeight:1 }}>&times;</span> : <EvaIcon size="62" />}
      </button>

      <style>{\`
        @keyframes cyraPulse {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1); }
        }
      \`}</style>
    </>
  )
}
`

const filePath = path.join('C:\\\\', 'Users', 'randy', 'traffikfuel', 'src', 'components', 'ChatBubble.tsx')
fs.writeFileSync(filePath, content, 'utf8')
console.log('SUCCESS: ChatBubble.tsx written')