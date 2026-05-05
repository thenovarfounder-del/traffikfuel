'use client'

import { Suspense } from 'react'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function CallbackHandler() {
 const router = useRouter()
 const searchParams = useSearchParams()
 const [status, setStatus] = useState('Connecting your TikTok account...')

 useEffect(() => {
 const code = searchParams.get('code')
 const error = searchParams.get('error')
 if (error) { router.push('/login?error=tiktok_denied'); return }
 if (!code) { router.push('/login?error=tiktok_no_code'); return }
 const handleCallback = async () => {
 try {
 setStatus('Verifying your TikTok account...')
 const response = await fetch('/api/tiktok/callback?code=' + code)
 const data = await response.json()
 if (data.error) { router.push('/login?error=' + data.error); return }
 setStatus('Success! Redirecting...')
 router.push('/dashboard')
 } catch { router.push('/login?error=tiktok_failed') }
 }
 handleCallback()
 }, [searchParams, router])

 return (
 <div style={{minHeight:'100vh',background:'black',display:'flex',alignItems:'center',justifyContent:'center'}}>
 <div style={{textAlign:'center'}}>
 <p style={{color:'white',fontSize:'18px'}}>{status}</p>
 </div>
 </div>
 )
}

export default function TikTokCallbackPage() {
 return (
 <Suspense fallback={<div style={{minHeight:'100vh',background:'black'}}></div>}>
 <CallbackHandler />
 </Suspense>
 )
}
