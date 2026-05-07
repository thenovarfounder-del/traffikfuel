'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
const [userName, setUserName] = useState('')
const [loading, setLoading] = useState(true)

useEffect(() => {
const getUser = async () => {
const { data: { user } } = await supabase.auth.getUser()
if (user?.email) {
setUserName(user.email.split('@')[0])
}
setLoading(false)
}
getUser()
}, [])

const stats = [
{ label: 'Posts Published', value: '0', icon: '📝' },
{ label: 'Total Followers', value: '0', icon: '👥' },
{ label: 'Monthly Traffic', value: '0', icon: '📈' },
{ label: 'SEO Score', value: '—', icon: '🎯' },
]

const quickActions = [
{ label: 'Create Post', href: '/dashboard/publish', icon: '✍️' },
{ label: 'View Analytics', href: '/dashboard/analytics', icon: '📊' },
{ label: 'Run Audit', href: '/dashboard/audits', icon: '🔍' },
{ label: 'Check Rankings', href: '/dashboard/rankings', icon: '🏆' },
]

return (
<div style={{padding: '40px', overflowY: 'auto'}}>
<div style={{background: 'linear-gradient(135deg, #ff4400 0%, #cc3300 100%)', borderRadius: '16px', padding: '32px', marginBottom: '32px'}}>
<div style={{fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '8px'}}>Welcome back 👋</div>
<div style={{fontSize: '32px', fontWeight: '700', color: 'white', marginBottom: '8px'}}>
{loading ? 'Loading...' : `Hey, ${userName}!`}
</div>
<div style={{fontSize: '16px', color: 'rgba(255,255,255,0.85)'}}>
Your marketing machine is ready. Let's grow your business today.
</div>
</div>

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px'}}>
{stats.map((stat) => (
<div key={stat.label} style={{background: '#1a1a1a', border: '1px solid #333', borderRadius: '12px', padding: '24px'}}>
<div style={{fontSize: '28px', marginBottom: '8px'}}>{stat.icon}</div>
<div style={{fontSize: '28px', fontWeight: '700', color: 'white', marginBottom: '4px'}}>{stat.value}</div>
<div style={{fontSize: '13px', color: '#888'}}>{stat.label}</div>
</div>
))}
</div>

<div style={{background: '#1a1a1a', border: '1px solid #333', borderRadius: '12px', padding: '24px'}}>
<div style={{fontSize: '16px', fontWeight: '600', color: 'white', marginBottom: '16px'}}>Quick Actions</div>
<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px'}}>
{quickActions.map((action) => (
<a key={action.label} href={action.href} style={{background: '#252525', border: '1px solid #444', borderRadius: '10px', padding: '16px', textAlign: 'center', textDecoration: 'none', display: 'block'}}>
<div style={{fontSize: '24px', marginBottom: '8px'}}>{action.icon}</div>
<div style={{fontSize: '13px', color: '#ccc'}}>{action.label}</div>
</a>
))}
</div>
</div>
</div>
)
}
