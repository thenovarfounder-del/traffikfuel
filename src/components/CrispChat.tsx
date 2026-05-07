'use client'

import { useEffect } from 'react'

declare global {
interface Window {
$crisp: any[]
CRISP_WEBSITE_ID: string
}
}

export default function CrispChat() {
useEffect(() => {
window.$crisp = []
window.CRISP_WEBSITE_ID = '79e3c182-23aa-45c5-9783-8e849682c95c'
const script = document.createElement('script')
script.src = 'https://client.crisp.chat/l.js'
script.async = true
document.head.appendChild(script)
}, [])

return null
}