'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function DeleteAccountPage() {
const router = useRouter()
const [confirm, setConfirm] = useState('')
const [loading, setLoading] = useState(false)
const [error, setError] = useState('')

const handleDelete = async () => {
if (confirm !== 'DELETE') {
setError('Please type DELETE to confirm')
return
}
setLoading(true)
try {
await supabase.auth.signOut()
router.push('/?deleted=true')
} catch (e: any) {
setError(e.message)
setLoading(false)
}
}

return (
<div style={{background:'#0a0a0a',minHeight:'100vh',color:'white',padding:'40px 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
<div style={{maxWidth:'480px',width:'100%'}}>
<button onClick={()=>router.push('/dashboard')} style={{background:'transparent',border:'none',color:'#888',cursor:'pointer',marginBottom:'24px',fontSize:'14px'}}>← Back to Dashboard</button>
<div style={{background:'#111',border:'1px solid #ff000033',borderRadius:'12px',padding:'32px'}}>
<div style={{fontSize:'32px',marginBottom:'12px'}}>⚠️</div>
<h1 style={{fontSize:'22px',fontWeight:'bold',marginBottom:'8px',color:'#ff4444'}}>Delete My Account</h1>
<p style={{color:'#888',marginBottom:'24px',lineHeight:'1.6'}}>This will permanently delete your account and all data. This cannot be undone.</p>
<div style={{background:'#1a0a0a',border:'1px solid #ff000033',borderRadius:'8px',padding:'16px',marginBottom:'24px'}}>
<p style={{color:'#ff8888',fontSize:'14px',margin:0}}>You will lose access to all your data immediately. There is no recovery option.</p>
</div>
<label style={{display:'block',marginBottom:'8px',fontSize:'14px',color:'#888'}}>Type <strong style={{color:'white'}}>DELETE</strong> to confirm</label>
<input value={confirm} onChange={e=>setConfirm(e.target.value)} placeholder="Type DELETE here"
style={{width:'100%',padding:'12px',background:'#0a0a0a',border:'1px solid #333',borderRadius:'8px',color:'white',fontSize:'16px',marginBottom:'16px',boxSizing:'border-box'}}/>
{error && <p style={{color:'#ff4444',fontSize:'14px',marginBottom:'16px'}}>{error}</p>}
<button onClick={handleDelete} disabled={loading || confirm!=='DELETE'}
style={{width:'100%',padding:'14px',background:confirm==='DELETE'?'#dc2626':'#333',color:'white',border:'none',borderRadius:'8px',fontSize:'16px',fontWeight:'bold',cursor:confirm==='DELETE'?'pointer':'not-allowed'}}>
{loading?'Deleting...':'Permanently Delete My Account'}
</button>
</div>
</div>
</div>
)
}
