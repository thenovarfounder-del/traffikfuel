import { NextRequest, NextResponse } from 'next/server'
export async function POST(req: NextRequest) {
  try {
    const { platform, brain, topic } = await req.json()
    const prompt = 'Write a ' + platform + ' social media post for this business: ' + JSON.stringify(brain) + '. ' + (topic ? 'Topic: ' + topic : 'Pick a relevant topic.') + ' Write only the post content.'
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY!, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: 'claude-opus-4-20250514', max_tokens: 1024, messages: [{ role: 'user', content: prompt }] })
    })
    const d = await r.json()
    return NextResponse.json({ post: d.content[0].text })
  } catch(e) {
    return NextResponse.json({ error: 'Failed' }, { status: 500 })
  }
}
