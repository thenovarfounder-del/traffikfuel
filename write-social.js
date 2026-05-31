// @ts-nocheck
const fs = require('fs');
const path = require('path');

const filePath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\dashboard\\agents\\page.tsx');
const dir = path.dirname(filePath);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const content = `// @ts-nocheck
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

export default function AgentDashboard() {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [running, setRunning] = useState(false)
  const [runResult, setRunResult] = useState(null)
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setLoading(false); return }
    setUserId(user.id)
    const { data } = await supabase
      .from('agent_logs')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
      .limit(20)
    setLogs(data || [])
    setLoading(false)
  }

  async function runAllAgents() {
    setRunning(true)
    setRunResult(null)
    try {
      const res = await fetch('/api/agents/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId })
      })
      const data = await res.json()
      setRunResult(data)
      await fetchData()
    } catch (error) {
      setRunResult({ error: error.message })
    }
    setRunning(false)
  }

  async function runPerformanceMonitor() {
    setRunning(true)
    setRunResult(null)
    try {
      const res = await fetch('/api/agents/performance-monitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId })
      })
      const data = await res.json()
      setRunResult(data)
      await fetchData()
    } catch (error) {
      setRunResult({ error: error.message })
    }
    setRunning(false)
  }

  const statusColor = (s) => s === 'completed' ? '#22c55e' : s === 'running' ? '#f97316' : '#ef4444'

  const getAgentColor = (name) => {
    const agent = AGENTS.find(a => a.name === name)
    return agent ? agent.color : '#94a3b8'
  }

  const lastRun = logs[0]?.created_at ? new Date(logs[0].created_at).toLocaleString() : 'Never'
  const completedToday = logs.filter(l => {
    const today = new Date()
    const logDate = new Date(l.created_at)
    return logDate.toDateString() === today.toDateString() && l.status === 'completed'
  }).length

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#fff', padding: '40px 32px', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h1 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0' }}>AI Agent Dashboard</h1>
            <p style={{ color: '#94a3b8', margin: 0 }}>Monitor and control your AI marketing agents</p>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={runPerformanceMonitor} disabled={running || !userId} style={{ padding: '12px 20px', borderRadius: '8px', border: '1px solid #a855f7', backgroundColor: 'transparent', color: '#a855f7', cursor: running ? 'not-allowed' : 'pointer', fontSize: '14px', fontWeight: '600', opacity: running ? 0.6 : 1 }}>
              Run Performance Monitor
            </button>
            <button onClick={runAllAgents} disabled={running || !userId} style={{ padding: '12px 24px', borderRadius: '8px', border: 'none', backgroundColor: running ? '#333' : '#f97316', color: '#fff', cursor: running ? 'not-allowed' : 'pointer', fontSize: '14px', fontWeight: '600' }}>
              {running ? 'Agents Running...' : 'Run All Agents Now'}
            </button>
          </div>
        </div>

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
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#f97316' }}>Daily at 6:00 AM</div>
          </div>
        </div>

        <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 16px 0' }}>Agent Status</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
          {AGENTS.map(agent => {
            const agentLogs = logs.filter(l => l.agent_name === agent.name)
            const lastLog = agentLogs[0]
            return (
              <div key={agent.name} style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px', color: agent.color }}>{agent.name}</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>{agent.description}</div>
                  </div>
                  {lastLog && (
                    <span style={{ padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600', backgroundColor: statusColor(lastLog.status) + '22', color: statusColor(lastLog.status), whiteSpace: 'nowrap' }}>
                      {lastLog.status}
                    </span>
                  )}
                </div>
                {lastLog ? (
                  <div>
                    <div style={{ fontSize: '13px', color: '#e2e8f0', marginBottom: '4px' }}>{lastLog.message}</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>{new Date(lastLog.created_at).toLocaleString()}</div>
                  </div>
                ) : (
                  <div style={{ fontSize: '13px', color: '#94a3b8' }}>No runs yet</div>
                )}
              </div>
            )
          })}
        </div>

        {runResult && (
          <div style={{ backgroundColor: runResult.error ? '#ef444411' : '#22c55e11', borderRadius: '12px', border: '1px solid ' + (runResult.error ? '#ef4444' : '#22c55e'), padding: '20px', marginBottom: '32px' }}>
            <div style={{ fontSize: '15px', fontWeight: '600', marginBottom: '8px', color: runResult.error ? '#ef4444' : '#22c55e' }}>
              {runResult.error ? 'Agent Run Failed' : 'Agents Completed Successfully'}
            </div>
            {runResult.error ? (
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>{runResult.error}</div>
            ) : runResult.insights ? (
              <div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '8px' }}>Performance Score: <span style={{ color: '#a855f7', fontWeight: '700' }}>{runResult.performance_score}/100</span></div>
                <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '4px' }}>Recommendation: {runResult.recommendation}</div>
                {runResult.insights.map((insight, i) => (
                  <div key={i} style={{ fontSize: '13px', color: '#e2e8f0', padding: '6px 0', borderTop: '1px solid #1f1f1f' }}>{i + 1}. {insight}</div>
                ))}
              </div>
            ) : (
              <div style={{ fontSize: '13px', color: '#94a3b8' }}>Content generated and saved to queue successfully.</div>
            )}
          </div>
        )}

        <div style={{ backgroundColor: '#111', borderRadius: '12px', border: '1px solid #1f1f1f', padding: '24px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 20px 0' }}>Agent Activity Log</h2>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>Loading logs...</div>
          ) : logs.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#94a3b8' }}>No agent runs yet. Click Run All Agents to start.</div>
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
`;

fs.writeFileSync(filePath, content, 'utf8');
console.log('DONE - Agent Dashboard created at /dashboard/agents');