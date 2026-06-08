// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const { title, content, currentScore, userId, businessId, postId } = await request.json()
  try {
    const { data: bp } = await supabase.from('business_profiles').select('business_name, industry, phone, website').eq('id', businessId).single()
    const businessName = bp?.business_name || 'this business'
    const city = bp?.phone || 'local area'
    const industry = bp?.industry || 'business'
    const prompt = `You are an expert SEO content optimizer. Improve this blog post to score higher:\n- More numbers and statistics\n- Stronger power words in title (best, ultimate, proven, top)\n- Local SEO with city mentions: ${city}\n- Clear call-to-action at end\n- Better paragraph structure\n- Include business name "${businessName}" naturally\n- Industry: ${industry}\n\nCurrent score: ${currentScore}/100. Target: 90+\n\nTITLE: ${title}\n\nCONTENT:\n${content}\n\nReturn ONLY valid JSON with no markdown: {"title": "...", "content": "..."}`
    const message = await anthropic.messages.create({
      model: 'claude-opus-4-5-20251101',
      max_tokens: 3000,
      messages: [{ role: 'user', content: prompt }]
    })
    const responseText = message.content[0].text.trim()
    const clean = responseText.replace(/```json|```/g, '').trim()
    const parsed = JSON.parse(clean)
    if (postId) {
      await supabase.from('content_calendar').update({ title: parsed.title, content: parsed.content }).eq('id', postId)
    }
    return NextResponse.json({ title: parsed.title, content: parsed.content })
  } catch (e) {
    console.error('Boost error:', e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}