// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(request) {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
  const { title, content, currentScore, breakdown, userId, businessId, postId } = await request.json()
  try {
    const { data: bp } = await supabase.from('business_profiles').select('business_name, industry, phone, website').eq('id', businessId).single()
    const businessName = bp?.business_name || 'this business'
    const city = bp?.city || bp?.phone || 'your local area'
    const industry = bp?.industry || 'business'
    const website = bp?.website || ''
    const fixes = []
    if (breakdown) {
      if ((breakdown.wordCount || 0) < 16) fixes.push('EXPAND to at least 1200 words with more detail and examples')
      if ((breakdown.headings || 0) < 8) fixes.push('ADD at least 5 H2 subheadings using ## format')
      if ((breakdown.lists || 0) < 5) fixes.push('ADD at least 2 bullet lists using - format with 4+ items each')
      if ((breakdown.statistics || 0) < 7) fixes.push('ADD at least 4 real statistics with percentages')
      if ((breakdown.localSeo || 0) < 7) fixes.push('MENTION the city ' + city + ' at least 5 times')
      if ((breakdown.cta || 0) < 8) fixes.push('ADD a strong CTA like Schedule your free consultation today')
      if ((breakdown.openingHook || 0) < 3) fixes.push('REWRITE opening sentence as a compelling hook under 20 words')
      if ((breakdown.keywords || 0) < 2) fixes.push('USE main title keywords at least 3 times each in the content')
    }
    const fixList = fixes.length > 0 ? fixes.join('\n') : 'Improve overall quality depth and SEO'
    const parts = [
      'You are a world-class SEO content writer. Rewrite this blog post to score 90+ on SEO.',
      '',
      'SPECIFIC FIXES NEEDED:',
      fixList,
      '',
      'RULES - NEVER VIOLATE:',
      '- NEVER add phone numbers',
      '- NEVER add fake offers or dollar values',
      '- NEVER add fake testimonials or reviews',
      '- Only use real general industry statistics',
      '- Keep the same topic and business focus',
      '- Business name: ' + businessName,
      '- City: ' + city,
      '- Industry: ' + industry,
      '- Website: ' + website,
      '',
      'TITLE: ' + title,
      '',
      'CONTENT:',
      content,
      '',
      'Return ONLY valid JSON no markdown: {"title": "improved title", "content": "full improved content"}'
    ]
    const prompt = parts.join('\n')
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 4000,
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