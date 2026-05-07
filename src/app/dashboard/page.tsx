'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function DashboardPage() {
const router = useRouter()
const [activeSection, setActiveSection] = useState('home')
const sections = [
{id:'home',label:'Home'},{id:'publish',label:'Publish'},
{id:'content',label:'Content'},{id:'rankings',label:'Rankings'},
{id:'audits',label:'Audits'},{id:'backlinks',label:'Backlinks'},
{id:'analytics',label:'Analytics'},{id:'monetize',label:'Monetize'},
{id:'integrations',label:'Integrations'},{id:'reports',label:'Reports'}
]

useEffect(() => {
supabase.auth.getSession().then(({ data: { session } }) => {
if (!session) router.push('/login')
})
}, [router])

return (
<div style={{display:'flex',height:'100vh',background:'#0a0a0a',color:'white'}}>
<div style={{width:'220px',background:'#111',borderRight:'1px solid #222',padding:'20px 0',display:'flex',flexDirection:'column'}}>
<div style={{padding:'0 20px 20px',borderBottom:'1px solid #222',marginBottom:'10px'}}>
<span style={{fontWeight:'bold',fontSize:'18px',color:'#ff4d00'}}>TraffikFuel</span>
</div>
<button onClick={()=>router.push('/dashboard/onboarding')}
style={{padding:'12px 20px',background:'#1a1200',color:'#fbbf24',border:'none',
textAlign:'left',cursor:'pointer',fontSize:'14px',borderLeft:'3px solid #fbbf24',marginBottom:'4px'}}>
🚀 Get Started
</button>
{sections.map(s => (
<button key={s.id} onClick={()=>setActiveSection(s.id)}
style={{padding:'12px 20px',background:activeSection===s.id?'#1a1a1a':'transparent',
color:activeSection===s.id?'white':'#888',border:'none',textAlign:'left',
cursor:'pointer',fontSize:'14px',borderLeft:activeSection===s.id?'3px solid #ff4d00':'3px solid transparent'}}>
{s.label}
</button>
))}
<button onClick={()=>router.push('/dashboard/business')}
style={{padding:'12px 20px',background:'transparent',color:'#888',border:'none',
textAlign:'left',cursor:'pointer',fontSize:'14px',borderLeft:'3px solid transparent',marginTop:'4px'}}>
Business
</button>
<button onClick={()=>router.push('/dashboard/settings/security')}
style={{padding:'12px 20px',background:'transparent',color:'#888',border:'none',
textAlign:'left',cursor:'pointer',fontSize:'14px',borderLeft:'3px solid transparent',marginTop:'auto'}}>
Settings
</button>
</div>
<div style={{flex:1,padding:'40px',overflowY:'auto'}}>
<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'60vh'}}>
<div style={{textAlign:'center',color:'#444'}}>
{activeSection.charAt(0).toUpperCase()+activeSection.slice(1)} — Coming Soon
</div>
</div>
</div>
</div>
)
}
