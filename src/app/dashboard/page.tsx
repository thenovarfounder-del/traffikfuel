'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
 const router = useRouter()
 const [email, setEmail] = useState('')
 const [activeSection, setActiveSection] = useState('home')
 useEffect(() => {
 const checkUser = async () => {
 const { data: { user } } = await supabase.auth.getUser()
 if (!user || !user.email_confirmed_at) { router.push('/login'); return }
 setEmail(user.email || '')
 }
 checkUser()
 }, [router])
 const handleLogout = async () => {
 await supabase.auth.signOut()
 router.push('/login')
 }
 const navItems = [
 {id:'home',label:'Home'},{id:'onboarding',label:'Onboarding'},{id:'publish',label:'Publish'},{id:'content',label:'Content'},{id:'rankings',label:'Rankings'},{id:'audits',label:'Audits'},{id:'backlinks',label:'Backlinks'},{id:'analytics',label:'Analytics'},{id:'monetize',label:'Monetize'},{id:'integrations',label:'Integrations'},{id:'reports',label:'Reports'},{id:'settings',label:'Settings'}
 ]
 return (
 <div style={{display:'flex',minHeight:'100vh',background:'#0a0a0a',color:'white',fontFamily:'sans-serif'}}>
 <div style={{width:'220px',background:'#111',padding:'20px 0',display:'flex',flexDirection:'column'}}>
 <div style={{padding:'0 20px 20px',borderBottom:'1px solid #222'}}><div style={{color:'#ff4500',fontWeight:'bold',fontSize:'20px'}}>TraffikFuel</div></div>
 <nav style={{flex:1,padding:'10px 0'}}>
 {navItems.map(item => (<button key={item.id} onClick={()=>setActiveSection(item.id)} style={{width:'100%',padding:'12px 20px',background:activeSection===item.id?'#1a1a1a':'transparent',color:activeSection===item.id?'#ff4500':'#aaa',border:'none',textAlign:'left',cursor:'pointer',fontSize:'14px',borderLeft:activeSection===item.id?'3px solid #ff4500':'3px solid transparent'}}>{item.label}</button>))}
 </nav>
 <div style={{padding:'20px',borderTop:'1px solid #222'}}>
 <div style={{fontSize:'12px',color:'#666',marginBottom:'8px'}}>{email}</div>
 <button onClick={handleLogout} style={{width:'100%',padding:'8px',background:'#ff4500',color:'white',border:'none',borderRadius:'4px',cursor:'pointer'}}>Log Out</button>
 </div>
 </div>
 <div style={{flex:1,padding:'30px'}}>
 {activeSection==='home' && (<div>
 <h1 style={{fontSize:'28px',marginBottom:'8px'}}>Welcome back!</h1>
 <p style={{color:'#666',marginBottom:'30px'}}>{email}</p>
 <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px',marginBottom:'30px'}}>
 <div style={{background:'#111',padding:'24px',borderRadius:'8px',border:'1px solid #222'}}><div style={{color:'#ff4500',fontSize:'32px',fontWeight:'bold'}}>0</div><div style={{color:'#aaa',fontSize:'14px'}}>Posts Published</div></div>
 <div style={{background:'#111',padding:'24px',borderRadius:'8px',border:'1px solid #222'}}><div style={{color:'#ff4500',fontSize:'32px',fontWeight:'bold'}}>0</div><div style={{color:'#aaa',fontSize:'14px'}}>Total Traffic</div></div>
 <div style={{background:'#111',padding:'24px',borderRadius:'8px',border:'1px solid #222'}}><div style={{color:'#ff4500',fontSize:'32px',fontWeight:'bold'}}></div><div style={{color:'#aaa',fontSize:'14px'}}>Revenue Earned</div></div>
 </div>
 <div style={{background:'#111',padding:'24px',borderRadius:'8px',border:'1px solid #222'}}>
 <h2 style={{fontSize:'18px',marginBottom:'16px'}}>Quick Actions</h2>
 <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px'}}>
 <button onClick={()=>setActiveSection('publish')} style={{padding:'16px',background:'#ff4500',color:'white',border:'none',borderRadius:'6px',cursor:'pointer',fontWeight:'bold'}}>Publish Content</button>
 <button onClick={()=>setActiveSection('onboarding')} style={{padding:'16px',background:'#1a1a1a',color:'white',border:'1px solid #333',borderRadius:'6px',cursor:'pointer'}}>Complete Setup</button>
 <button onClick={()=>setActiveSection('analytics')} style={{padding:'16px',background:'#1a1a1a',color:'white',border:'1px solid #333',borderRadius:'6px',cursor:'pointer'}}>View Analytics</button>
 <button onClick={()=>setActiveSection('monetize')} style={{padding:'16px',background:'#1a1a1a',color:'white',border:'1px solid #333',borderRadius:'6px',cursor:'pointer'}}>Monetize</button>
 </div>
 </div>
 </div>)}
 {activeSection!=='home' && (<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'60vh'}}><div style={{textAlign:'center'}}><div style={{fontSize:'48px',marginBottom:'16px'}}>??</div><h2 style={{fontSize:'24px',marginBottom:'8px'}}>{navItems.find(n=>n.id===activeSection)?.label}</h2><p style={{color:'#666'}}>Coming soon!</p></div></div>)}
 </div>
 </div>
 )
}
