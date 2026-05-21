'use client'
import { useEffect } from 'react'

export default function CrispChat() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any
    w.$crisp = []
    w.CRISP_WEBSITE_ID = '79e3c182-23aa-45c5-9783-8e849682c95c'
    const script = document.createElement('script')
    script.src = 'https://client.crisp.chat/l.js'
    script.async = true
    document.head.appendChild(script)
  }, [])

  return null
}
