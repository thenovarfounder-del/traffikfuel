import { NextResponse } from 'next/server'

export async function POST(req: Request) {
try {
const { platform, brain, topic } = await req.json()
const prompt = 'Write a ' + platform + ' social media post for this business: ' + JSON.stringify(brain) + '. ' + (topic ? 'Topic: ' + topic : 'Pick a relevant topic.') + ' Write only the post content.'
const apiKey = process.env.ANTHROPIC_API_KEY || ''
const r = await fetch('https://api.anthropic.com/v1/messages', {
method: 'POST',
headers: { 'Content-Type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
body: JSON.stringify({ model: 'claude-sonnet-4-20250514', max_tokens: 1024, messages: [{ role: 'user', content: prompt }] })
})
const d = await r.json()
if (d.error) return NextResponse.json({ error: d.error.message }, { status: 500 })
return NextResponse.json({ post: d.content[0].text })
} catch(e: any) {
return NextResponse.json({ error: e.message }, { status: 500 })
}
}
