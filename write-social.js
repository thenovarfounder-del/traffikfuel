const fs = require('fs')
const path = require('path')

// ─── 1. BILLING PAGE — fix plan column + add status read ─────
const billingPath = path.join('src', 'app', 'dashboard', 'billing', 'page.tsx')
let billing = fs.readFileSync(billingPath, 'utf8')
billing = billing.replace(
  `const { data } = await supabase.from('users').select('plan').eq('id', user.id).single()
      if (data?.plan) setUserPlan(data.plan)`,
  `const { data } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (data?.status) setUserPlan(data.status)`
)
fs.writeFileSync(billingPath, billing)
console.log('SUCCESS: billing/page.tsx — fixed status column read')

// ─── 2. SOCIAL PAGE — gate for starter+ ──────────────────────
const socialPath = path.join('src', 'app', 'dashboard', 'social', 'page.tsx')
let social = fs.readFileSync(socialPath, 'utf8')
social = social.replace(
  `import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'`,
  `import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import PlanGate from '@/components/PlanGate'`
)
social = social.replace(
  `  const isPaid = userStatus && userStatus !== 'free'`,
  `  const isPaid = userStatus && userStatus !== 'free'
  const plan = userStatus || 'free'`
)
// Wrap the return content with PlanGate
social = social.replace(
  `  return (
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>`,
  `  return (
    <PlanGate userPlan={plan} feature="socialGenerator" mode="overlay">
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>`
)
social = social.replace(
  `}
`,
  `    </PlanGate>
  )
}
`
)
// Fix the duplicate closing
social = social.replace(`    </PlanGate>
  )
}

`, `    </PlanGate>
  )
}
`)
fs.writeFileSync(socialPath, social)
console.log('SUCCESS: social/page.tsx — PlanGate added for starter+')

// ─── 3. LLM ENGINE — gate for pro+ ───────────────────────────
const llmPath = path.join('src', 'app', 'dashboard', 'llm-engine', 'page.tsx')
let llm = fs.readFileSync(llmPath, 'utf8')
llm = llm.replace(
  `import { useEffect, useState, useRef } from "react"
import { createClient } from "@supabase/supabase-js"`,
  `import { useEffect, useState, useRef } from "react"
import { createClient } from "@supabase/supabase-js"
import PlanGate from "@/components/PlanGate"`
)
// Replace the existing manual overlay with PlanGate
llm = llm.replace(
  `      {!isPro && (
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "rgba(17,17,17,0.75)", borderRadius: 16, zIndex: 10 }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>🔒</div>
            <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 700, margin: "0 0 12px", fontFamily: "Playfair Display, serif", textAlign: "center" }}>Your Business Deserves Its Own AI</h2>
            <p style={{ color: "#aaa", fontSize: 16, marginBottom: 32, textAlign: "center", maxWidth: 480, lineHeight: 1.6 }}>The LLM Engine trains a custom AI model on your business data. Every blog, every post, every reply — sounds exactly like you. No other tool does this.</p>
            <a href="/pricing" style={{ background: "linear-gradient(135deg, #E8610A, #C84E06)", color: "#fff", padding: "16px 40px", borderRadius: 10, fontWeight: 700, fontSize: 16, textDecoration: "none", boxShadow: "0 4px 24px rgba(232,97,10,0.4)" }}>Upgrade to Pro — $97/month</a>
            <p style={{ color: "#555", fontSize: 13, marginTop: 16 }}>Cancel anytime. Instant access.</p>
          </div>
        )}`,
  `      <PlanGate userPlan={status} feature="llmEngine" mode="overlay">
          <span style={{display:"none"}} />
        </PlanGate>`
)
fs.writeFileSync(llmPath, llm)
console.log('SUCCESS: llm-engine/page.tsx — PlanGate added for pro+')

// ─── 4. AI AGENTS — gate for pro+ ────────────────────────────
const agentsPath = path.join('src', 'app', 'dashboard', 'agents', 'page.tsx')
let agents = fs.readFileSync(agentsPath, 'utf8')
agents = agents.replace(
  `import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'`,
  `import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import PlanGate from '@/components/PlanGate'`
)
agents = agents.replace(
  `  const isPro = userStatus && userStatus !== 'free'`,
  `  const isPro = userStatus && userStatus !== 'free' && userStatus !== 'starter'`
)
fs.writeFileSync(agentsPath, agents)
console.log('SUCCESS: agents/page.tsx — isPro tightened to pro+ only')

// ─── 5. CONNECT TIKTOK — gate for pro+ ───────────────────────
const tiktokPath = path.join('src', 'app', 'dashboard', 'connect', 'tiktok', 'page.tsx')
let tiktok = fs.readFileSync(tiktokPath, 'utf8')
tiktok = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import PlanGate from '@/components/PlanGate'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function ConnectTiktok() {
  const [plan, setPlan] = useState('free')

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) return
      const { data } = await supabase.from('users').select('status').eq('id', user.id).single()
      if (data?.status) setPlan(data.status)
    }
    load()
  }, [])

  return (
    <PlanGate userPlan={plan} feature="connectTiktok" mode="overlay">
    <div style={{ minHeight:"100vh", background:"#0a0a0a", color:"#fff", fontFamily:"DM Sans, sans-serif" }}>
      <div style={{ background:"linear-gradient(135deg,#111 0%,#1a0e00 100%)", borderBottom:"1px solid #1e1e1e", padding:"32px 40px", marginBottom:"40px", textAlign:"center" }}>
        <p style={{ fontSize:"12px", fontWeight:700, color:"#E8610A", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"12px" }}>CONNECTIONS</p>
        <div style={{ fontSize:"48px", marginBottom:"16px" }}>🎵</div>
        <h1 style={{ fontFamily:"Playfair Display, serif", fontSize:"36px", fontWeight:900, color:"#fff", margin:"0 0 12px" }}>Connect TikTok</h1>
        <p style={{ color:"#888", fontSize:"16px", maxWidth:"500px", margin:"0 auto" }}>Publish videos and track TikTok performance automatically</p>
      </div>
      <div style={{ maxWidth:"600px", margin:"0 auto", padding:"0 40px 60px" }}>
        <div style={{ background:"#111", border:"1px solid #1e1e1e", borderRadius:"14px", padding:"28px", marginBottom:"20px" }}>
          <div style={{ background:"rgba(232,97,10,0.08)", border:"1px solid rgba(232,97,10,0.2)", borderRadius:"10px", padding:"20px", marginBottom:"20px", textAlign:"center" }}>
            <div style={{ fontSize:32, marginBottom:12 }}>⏳</div>
            <p style={{ color:"#E8610A", fontWeight:700, fontSize:15, marginBottom:8 }}>Coming Soon</p>
            <p style={{ color:"#888", fontSize:13 }}>TikTok API application is pending approval. You will be notified when available.</p>
          </div>
          <button disabled style={{ width:"100%", background:"#2a2a2a", color:"#555", border:"none", borderRadius:"8px", padding:"14px", fontSize:"14px", fontWeight:700, cursor:"not-allowed", fontFamily:"DM Sans, sans-serif" }}>Connect TikTok — Coming Soon</button>
        </div>
      </div>
    </div>
    </PlanGate>
  )
}
`
fs.writeFileSync(tiktokPath, tiktok)
console.log('SUCCESS: connect/tiktok/page.tsx — PlanGate added for pro+')

console.log('\nAll 5 files updated. Run: npx next build')