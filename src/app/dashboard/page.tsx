'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [activeSection, setActiveSection] = useState('home')
  const [phoneVerified, setPhoneVerified] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user || !user.email_confirmed_at) { router.push('/login'); return }
      setEmail(user.email || '')

      const { data: security } = await supabase
        .from('user_security_settings')
        .select('phone_verified')
        .eq('user_id', user.id)
        .single()

      if (security) setPhoneVerified(security.phone_verified ?? false)
    }
    checkUser()
  }, [router])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const navItems = [
    {id:'home',label:'Home'},{id:'onboarding',label:'Onboarding'},{id:'publish',label:'Publish'},{id:'content',label:'Content'},{id:'rankings',label:'Rankings'},{id:'audits',label:'Audits'},{id:'backlinks',label:'Backlinks'},{id:'analytics',label:'Analytics'},{id:'monetize',label:'Monetize'},{id:'integrations',label:'Integrations'},{id:'reports',label:'Reports'}
  ]

  return (
    <div style={{display:'flex',minHeight:'100vh',background:'#0a0a0a',color:'white',fontFamily:'sans-serif'}}>
      <div style={{width:'220px',background:'#111',padding:'20px 0',display:'flex',flexDirection:'column'}}>
        <div style={{padding:'0 20px 20px',borderBottom:'1px solid #222'}}><div style={{color:'#ff4500',fontWeight:'bold',fontSize:'20px'}}>TraffikFuel</div></div>
        <nav style={{flex:1,padding:'10px 0'}}>
          {navItems.map(item => <button key={item.id} onClick={()=>setActiveSection(item.id)} style={{width:'100%',padding:'12px 20px',background:activeSection===item.id?'#222':'transparent',color:activeSection===item.id?'white':'#888',border:'none',textAlign:'left',cursor:'pointer',fontSize:'14px'}}>{item.label}</button>)}
        </nav>
        <div style={{padding:'20px'}}>
          <div style={{fontSize:'12px',color:'#666',marginBottom:'8px'}}>{email}</div>
          <button onClick={handleLogout} style={{width:'100%',padding:'8px',background:'#ff4500',color:'white',border:'none',borderRadius:'4px',cursor:'pointer'}}>Logout</button>
        </div>
      </div>

      <div style={{flex:1,display:'flex',flexDirection:'column'}}>

        {/* Phone Verification Banner */}
        {!phoneVerified && (
          <div style={{background:'#7c2d00',borderBottom:'1px solid #ff4500',padding:'12px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <span style={{fontSize:'18px'}}>⚠️</span>
              <span style={{color:'#ffcba4',fontSize:'14px',fontWeight:'500'}}>Your phone number is not verified. Secure your account to unlock all features.</span>
            </div>
            <a href="/dashboard/phone-verify" style={{background:'#ff4500',color:'white',padding:'6px 16px',borderRadius:'6px',textDecoration:'none',fontSize:'13px',fontWeight:'600',whiteSpace:'nowrap'}}>Verify Now →</a>
          </div>
        )}

        <div style={{padding:'24px',borderRadius:'8px',border:'1px solid #222',margin:'24px'}}>
          <div style={{fontSize:'16px',marginBottom:'16px'}}>Quick Actions</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px'}}>
            <button onClick={()=>setActiveSection('publish')} style={{padding:'16px',background:'#ff4500',color:'white',border:'none',borderRadius:'8px'}}>Publish Content</button>
            <button onClick={()=>setActiveSection('onboarding')} style={{padding:'16px',background:'#1a1a1a',color:'white',border:'1px solid #333',borderRadius:'8px'}}>Onboarding</button>
            <button onClick={()=>setActiveSection('analytics')} style={{padding:'16px',background:'#1a1a1a',color:'white',border:'1px solid #333',borderRadius:'8px'}}>Analytics</button>
            <button onClick={()=>setActiveSection('monetize')} style={{padding:'16px',background:'#1a1a1a',color:'white',border:'1px solid #333',borderRadius:'8px'}}>Monetize</button>
          </div>
        </div>

        {activeSection!=='home' && (<div style={{display:'flex',alignItems:'center',justifyContent:'center',height:'60vh'}}><div style={{textAlign:'center',color:'#444'}}>🚧 {activeSection.charAt(0).toUpperCase()+activeSection.slice(1)} — Coming Soon</div></div>)}
      </div>
    </div>
  )
}