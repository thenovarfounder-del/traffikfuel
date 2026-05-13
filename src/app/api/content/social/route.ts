import { NextResponse } from 'next/server'

export async function POST(req: Request) {
try {
const { platform, brain, topic } = await req.json()
const businessInfo = typeof brain === 'string' ? brain : JSON.stringify(brain)
const prompt = 'You are a social media marketing expert. Using ONLY the following business information, write a ' + platform + ' post' + (topic ? ' about: ' + topic : '') + '. Business info: ' + businessInfo + '. Write only the post content, make it specific to this exact business, use their services, tone, and target audience.'
const r = await fetch('https://api.anthropic.com/v1/messages', {
method: 'POST',
headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY || '', 'anthropic-version': '2023-06-01' },
body: JSON.stringify({ model: 'claude-sonnet-4-6', max_tokens: 1024, messages: [{ role: 'user', content: prompt }] })
})
const d = await r.json()
if (d.error) return NextResponse.json({ error: d.error.message }, { status: 500 })
return NextResponse.json({ post: d.content[0].text })
} catch(e: any) {
return NextResponse.json({ error: e.message }, { status: 500 })
}
}
