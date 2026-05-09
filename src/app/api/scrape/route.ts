import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const { url, businessId } = await req.json()

  if (!url || !businessId) {
    return NextResponse.json({ error: 'Missing url or businessId' }, { status: 400 })
  }

  // Fetch the website HTML
  let html = ''
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TraffikFuel/1.0)' },
    })
    html = await res.text()
  } catch {
    return NextResponse.json({ error: 'Could not fetch website' }, { status: 400 })
  }

  // Strip HTML tags to get plain text
  const text = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 8000)

  // Send to Claude for analysis
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
          content: `Analyze this website content and extract business information. Return ONLY a JSON object with these fields:
- business_name: string
- description: string (2-3 sentences about what they do)
- services: string (comma separated list of main services)
- location: string (city, state if found)
- target_audience: string (who they serve)
- tone: string (professional, friendly, casual, luxury, etc)
- keywords: string (comma separated SEO keywords)

Website content:
${text}`,
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

  // Save to Supabase business_profiles
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