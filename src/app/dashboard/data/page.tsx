'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function DownloadDataPage() {
const router = useRouter()
const [loading, setLoading] = useState(false)
const [done, setDone] = useState(false)

const handleDownload = async () => {
setLoading(true)
try {
const { data: { session } } = await supabase.auth.getSession()
if (!session) { router.push('/login'); return }

const user = session.user
const { data: profile } = await supabase
.from('business_profiles')
.select('*')
.eq('user_id', user.id)
.single()

const exportData = {
account: {
id: user.id,
email: user.email,
created_at: user.created_at,
},
business_profile: profile || null,
exported_at: new Date().toISOString(),
}

const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' })
const url = URL.createObjectURL(blob)
const a = document.createElement('a')
a.href = url
a.download = 'traffikfuel-my-data.json'
a.click()
URL.revokeObjectURL(url)
setDone(true)
} catch (e) {
console.error(e)
}
setLoading(false)
}

return (
<div style={{background:'#0a0a0a',minHeight:'100vh',color:'white',padding:'40px 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
<div style={{maxWidth:'480px',width:'100%'}}>
<button onClick={()=>router.push('/dashboard')} style={{background:'transparent',border:'none',color:'#888',cursor:'pointer',marginBottom:'24px',fontSize:'14px'}}>← Back to Dashboard</button>
<div style={{background:'#111',border:'1px solid #222',borderRadius:'12px',padding:'32px'}}>
<div style={{fontSize:'32px',marginBottom:'12px'}}>📦</div>
<h1 style={{fontSize:'22px',fontWeight:'bold',marginBottom:'8px'}}>Download My Data</h1>
<p style={{color:'#888',marginBottom:'24px',lineHeight:'1.6'}}>
Download a copy of all your TraffikFuel data including your account info and business profile. Your data will be provided as a JSON file.
</p>
<div style={{background:'#0a0f0a',border:'1px solid #1a3a1a',borderRadius:'8px',padding:'16px',marginBottom:'24px'}}>
<p style={{color:'#86efac',fontSize:'14px',margin:0}}>✓ Your data belongs to you. We provide it in full upon request as required by GDPR.</p>
</div>
{done && (
<div style={{background:'#0a1a0a',border:'1px solid #22c55e',borderRadius:'8px',padding:'16px',marginBottom:'16px'}}>
<p style={{color:'#22c55e',margin:0}}>✓ Your data has been downloaded!</p>
</div>
)}
<button onClick={handleDownload} disabled={loading}
style={{width:'100%',padding:'14px',background:'#ff4d00',color:'white',border:'none',borderRadius:'8px',fontSize:'16px',fontWeight:'bold',cursor:'pointer'}}>
{loading ? 'Preparing your data...' : '⬇️ Download My Data'}
</button>
</div>
</div>
</div>
)
}
