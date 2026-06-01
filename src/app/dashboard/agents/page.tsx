// @ts-nocheck
'use client'

export const dynamic = 'force-dynamic'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const AGENTS = [
  { name: 'Content Strategist', description: 'Analyzes trends and creates daily content brief', color: '#f97316' },
  { name: 'Content Creator', description: 'Generates blog posts and social content from brief', color: '#3b82f6' },
  { name: 'Publisher', description: 'Publishes content to WordPress and social queue', color: '#22c55e' },
  { name: 'Performance Monitor', description: 'Weekly analysis of content performance', color: '#a855f7' }
]

function UpgradeModal({ onClose }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '24px' }}>
      <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '16px', padding: '48px 40px', maxWidth: '460px', width: '100%', textAlign: 'center', boxShadow: '0 0 60px rgba(232,97,10,0.15)' }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🚀</div>
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
          Upgrade to Pro
        </h2>
        <p style={{ color: '#888888', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>
          AI Agents are a Pro feature. Upgrade to let Traffikora run 24/7 — generating content, publishing to your blog, and growing your presence automatically.
        </p>
        <div style={{ background: '#111', border: '1px solid #333', borderRadius: '10px', padding: '16px', marginBottom: '24px' }}>
          <div style={{ fontSize: '13px', color: '#888', marginBottom: '4px' }}>Pro Plan</div>
          <div style={{ fontSize: '32px', fontWeight: '800', color: '#E8610A' }}>$97<span style={{ fontSize: '14px', color: '#888', fontWeight: '400' }}>/month</span></div>
          <div style={{ fontSize: '13px', color: '#cccccc', marginTop: '8px' }}>AI Agents • Auto Mode • TikTok/YouTube • AI SEO</div>
        </div>
        <button onClick={() => window.location.href = '/pricing'} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #E8610A, #C84E06)', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '16px', fontWeight: '700', cursor: 'pointer', marginBottom: '12px' }}>
          View Pricing & Upgrade
        </button>
        <button onClick={onClose} style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px solid #333', borderRadius: '8px', color: '#888', fontSize: '14px', cursor: 'pointer' }}>
          Maybe Later
        </button>
      </div>
    </div>
  )
}

export default function AgentDashboard() {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [running, setRunning] = useState(false)
  const [runResult, setRunResult] = useState(null)
  const [userId, setUserId] = useState(null)
  const [userStatus, setUserStatus] = useState(null)
  const [showUpgrade, setShowUpgrade] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }
    setUserId(user.id)
    const { data: profile } = await supabase.from('users').select('status').eq('id', user.id).single()
    setUserStatus(profile?.status || 'free')
    const { data } = await supabase
      .from('agent_logs')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(20)
    setLogs(data || [])
    setLoading(false)
  }

  const isPro = userStatus && userStatus !== 'free'

  async function runAllAgents() {
    if (!isPro) { setShowUpgrade(true); return }
    setRunning(true)
    setRunResult(null)
    try {
      const res = await fetch('/api/agents/run', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user_id: userId }) })
      const data = await res.json()
      setRunResult(data)
      await fetchData()
    } catch (error) {
      setRunResult({ error: error.message })
    }
    setRunning(false)
  }

  async function runPerformanceMonitor() {
    if (!isPro) { setShowUpgrade(true); return }
    setRunning(true)
    setRunResult(null)
    try {
      const res = await fetch('/api/agents/performance-monitor', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ user_id: userId }) })
      const data = await res.json()
      setRunResult(data)
      await fetchData()
    } catch (error) {
      setRunResult({ error: error.message })
    }
    setRunning(false)
  }

  const statusColor = (s) => s === 'completed' ? '#22c55e' : s === 'running' ? '#f97316' : '#ef4444'
  const getAgentColor = (name) => { const agent = AGENTS.find(a => a.name === name); return agent ? agent.color : '#94a3b8' }
  const lastRun = logs[0]?.created_at ? new Date(logs[0].created_at).toLocaleString() : 'Never'
  const completedToday = logs.filter(l => { const today = new Date(); const logDate = new Date(l.created_at); return logDate.toDateString() === today.toDateString() && l.status === 'completed' }).length

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', padding: '40px 32px', fontFamily: 'system-ui, sans-serif' }}>
      {showUpgrade && <UpgradeModal onClose={() => setShowUpgrade(false)} />}
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0' }}>AI Agent Dashboard</h1>
            <p style={{ color: '#94a3b8', margin: 0 }}>Monitor and control your AI marketing agents</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={runPerformanceMonitor} disabled={running} style={{ padding: '12px 20px', borderRadius: '8px', border: '1px solid #a855f7', backgroundColor: 'transparent', color: '#a855f7', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
              {!isPro ? '🔒 ' : ''}Run Performance Monitor
            </button>
            <button onClick={runAllAgents} disabled={running} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', backgroundColor: running ? '#333' : '#f97316', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
              {running ? 'Agents Running...' : (!isPro ? '🔒 ' : '') + 'Run All Agents Now'}
            </button>
          </div>
        </div>

        {!isPro && (
          <div style={{ background: 'linear-gradient(135deg, rgba(232,97,10,0.1), rgba(200,78,6,0.05))', border: '1px solid rgba(232,97,10,0.3)', borderRadius: '12px', padding: '20px 24px', marginBottom: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '600', color: '#E8610A', marginBottom: '4px' }}>🔒 AI Agents require Pro plan</div>
              <div style={{ fontSize: '13px', color: '#888' }}>Upgrade to unlock 24/7 automated content generation and publishing.</div>
            </div>
            <button onClick={() => window.location.href = '/pricing'} style={{ padding: '10px 20px', background: 'linear-gradient(135deg, #E8610A, #C84E06)', border: 'none', borderRadius: '8px', color: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap' }}>
              Upgrade to Pro →
            </button>
          </div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
            <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Last Run</div>
            <div style={{ fontSize: '16px', fontWeight: '600' }}>{lastRun}</div>
          </div>
          <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
            <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Completed Today</div>
            <div style={{ fontSize: '36px', fontWeight: '800', color: '#22c55e' }}>{completedToday}</div>
          </div>
          <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
            <div style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>Auto Mode</div>
            <div style={{ fontSize: '16px', fontWeight: '600', color: isPro ? '#f97316' : '#555' }}>{isPro ? 'Daily at 6:00 AM' : 'Pro Plan Required'}</div>
          </div>
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 16px 0' }}>Agent Status</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {AGENTS.map(agent => {
            const agentLogs = logs.filter(l => l.agent_name === agent.name)
            const lastLog = agentLogs[0]
            return (
              <div key={agent.name} style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px', opacity: isPro ? 1 : 0.6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px', color: agent.color }}>{agent.name}</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>{agent.description}</div>
                  </div>
                  {lastLog && <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: statusColor(lastLog.status) + '22', color: statusColor(lastLog.status), whiteSpace: 'nowrap' }}>{lastLog.status}</span>}
                </div>
                {lastLog ? (
                  <div>
                    <div style={{ fontSize: '13px', color: '#e2e8f0', marginBottom: '4px' }}>{lastLog.message}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{new Date(lastLog.created_at).toLocaleString()}</div>
                  </div>
                ) : (
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>{isPro ? 'No runs yet. Click Run All Agents to start.' : 'Upgrade to Pro to activate this agent.'}</div>
                )}
              </div>
            )
          })}
        </div>

        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 20px 0' }}>Agent Activity Log</h2>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>Loading...</div>
          ) : logs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>{isPro ? 'No agent runs yet. Click Run All Agents to start.' : 'Upgrade to Pro to see agent activity.'}</div>
          ) : logs.map(log => (
            <div key={log.id} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 100px 160px', gap: '12px', padding: '14px 0', borderBottom: '1px solid #1f1f1f', alignItems: 'center' }}>
              <div style={{ fontSize: '13px', fontWeight: '600', color: getAgentColor(log.agent_name) }}>{log.agent_name}</div>
              <div style={{ fontSize: '13px', color: '#e2e8f0' }}>{log.message}</div>
              <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: statusColor(log.status) + '22', color: statusColor(log.status), textAlign: 'center' }}>{log.status}</span>
              <div style={{ fontSize: '12px', color: '#94a3b8' }}>{new Date(log.created_at).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
