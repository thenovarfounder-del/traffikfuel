'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function TikTokCallbackPage() {
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
        setStatus('Success! Redirecting to dashboard...')
        router.push('/dashboard')
      } catch { router.push('/login?error=tiktok_failed') }
    }
    handleCallback()
  }, [searchParams, router])

  return (
    <div className='min-h-screen bg-black flex items-center justify-center'>
      <div className='text-center'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4'></div>
        <p className='text-white text-lg'>{status}</p>
      </div>
    </div>
  )
}
