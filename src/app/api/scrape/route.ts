import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const { url, businessId } = await req.json()

  if (!url || !businessId) {
    return NextResponse.json({ error: 'Missing url or businessId' }, { status: 400 })
  }

  let html = ''
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TraffikFuel/1.0)' },
    })
    html = await res.text()
  } catch {
    return NextResponse.json({ error: 'Could not fetch website' }, { status: 400 })
  }

  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .replace(/[^\x00-\x7F]/g, '')
    .trim()
    .slice(0, 8000)

  const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY!,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-opus-4-5',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `Analyze this website content and extract business information. Return ONLY a JSON object with these fields: business_name, description, services, location, target_audience, tone, keywords. Website content: ${text}`,
        },
      ],
    }),
  })

  const claudeData = await claudeRes.json()
  const rawText = claudeData.content?.[0]?.text || ''

  let brain: Record<string, string> = {}
  try {
    const match = rawText.match(/\{[\s\S]*\}/)
    if (match) brain = JSON.parse(match[0])
  } catch {
    return NextResponse.json({ error: 'Could not parse business brain' }, { status: 500 })
  }

  const { error } = await supabase
    .from('business_profiles')
    .update({
      business_name: brain.business_name,
      description: brain.description,
      services: brain.services,
      location: brain.location,
      target_audience: brain.target_audience,
      tone: brain.tone,
      keywords: brain.keywords,
      website_url: url,
      updated_at: new Date().toISOString(),
    })
    .eq('id', businessId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, brain })
}