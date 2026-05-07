'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

const checklistItems = [
{ id: 1, label: 'Create your account' },
{ id: 2, label: 'Verify your email' },
{ id: 3, label: 'Set up 2FA security' },
{ id: 4, label: 'Complete your business profile' },
{ id: 5, label: 'Upload your business logo' },
{ id: 6, label: 'Connect your first social account' },
{ id: 7, label: 'Run your first SEO audit' },
{ id: 8, label: 'Set up your publishing schedule' },
{ id: 9, label: 'Explore the AI content engine' },
{ id: 10, label: 'Review your analytics dashboard' },
{ id: 11, label: 'Set up backlink tracking' },
{ id: 12, label: 'Configure your ranking tracker' },
{ id: 13, label: 'Set up monetization' },
{ id: 14, label: 'Invite a team member' },
{ id: 15, label: 'Launch your first campaign' },
]

export default function OnboardingPage() {
const router = useRouter()
const [completed, setCompleted] = useState<number[]>([1, 2])
const [loading, setLoading] = useState(true)

useEffect(() => {
supabase.auth.getSession().then(({ data: { session } }) => {
if (!session) router.push('/login')
else setLoading(false)
})
}, [router])

const toggle = (id: number) => {
setCompleted(prev =>
prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
)
}

const percent = Math.round((completed.length / checklistItems.length) * 100)

const circumference = 2 * Math.PI * 45

if (loading) return <div style={{background:'#0a0a0a',height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',color:'white'}}>Loading...</div>

return (
<div style={{background:'#0a0a0a',minHeight:'100vh',color:'white',padding:'40px 20px'}}>
<div style={{maxWidth:'700px',margin:'0 auto'}}>
<button onClick={()=>router.push('/dashboard')} style={{background:'transparent',border:'none',color:'#888',cursor:'pointer',marginBottom:'20px',fontSize:'14px'}}>← Back to Dashboard</button>
<h1 style={{fontSize:'28px',fontWeight:'bold',marginBottom:'8px'}}>Get Started with TraffikFuel</h1>
<p style={{color:'#888',marginBottom:'40px'}}>Complete these steps to unlock the full power of your marketing machine.</p>

<div style={{display:'flex',alignItems:'center',gap:'40px',marginBottom:'40px'}}>
<svg width="120" height="120" viewBox="0 0 100 100">
<circle cx="50" cy="50" r="45" fill="none" stroke="#222" strokeWidth="10"/>
<circle cx="50" cy="50" r="45" fill="none" stroke="#ff4d00" strokeWidth="10"
strokeDasharray={circumference}
strokeDashoffset={circumference - (percent / 100) * circumference}
strokeLinecap="round"
transform="rotate(-90 50 50)"/>
<text x="50" y="55" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">{percent}%</text>
</svg>
<div>
<div style={{fontSize:'24px',fontWeight:'bold'}}>{completed.length} of {checklistItems.length} complete</div>
<div style={{color:'#888',marginTop:'4px'}}>Keep going — you are almost there!</div>
{percent === 100 && (
<button onClick={()=>router.push('/dashboard')}
style={{marginTop:'16px',padding:'12px 24px',background:'#ff4d00',color:'white',border:'none',borderRadius:'8px',cursor:'pointer',fontWeight:'bold'}}>
Go to Dashboard →
</button>
)}
</div>
</div>

<div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
{checklistItems.map(item => (
<div key={item.id} onClick={()=>toggle(item.id)}
style={{display:'flex',alignItems:'center',gap:'16px',padding:'16px 20px',
background:completed.includes(item.id)?'#0f1a0f':'#111',
border:completed.includes(item.id)?'1px solid #2d5a2d':'1px solid #222',
borderRadius:'10px',cursor:'pointer',transition:'all 0.2s'}}>
<div style={{width:'24px',height:'24px',borderRadius:'50%',
background:completed.includes(item.id)?'#22c55e':'transparent',
border:completed.includes(item.id)?'none':'2px solid #444',
display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
{completed.includes(item.id) && <span style={{color:'white',fontSize:'14px'}}>✓</span>}
</div>
<span style={{color:completed.includes(item.id)?'#86efac':'white',
textDecoration:completed.includes(item.id)?'line-through':'none'}}>
{item.label}
</span>
</div>
))}
</div>
</div>
</div>
)
}
