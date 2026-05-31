// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  try {
    const { user_id } = await req.json()

    // Get business profile
    const { data: profile } = await supabase
      .from('business_profiles')
      .select('*')
      .eq('user_id', user_id)
      .single()

    if (!profile) return NextResponse.json({ error: 'No business profile found' }, { status: 404 })

    // Log agent start
    const { data: log } = await supabase
      .from('agent_logs')
      .insert({
        user_id,
        agent_name: 'Content Strategist',
        status: 'running',
        message: 'Generating content brief...'
      })
      .select()
      .single()

    // Generate content brief using Anthropic
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `You are a content strategist for a small business. Generate a content brief for today.

Business: ${profile.business_name}
Industry: ${profile.industry}
City: ${profile.city || profile.phone}
Website: ${profile.website}

Return ONLY a JSON object with these fields:
{
  "topic": "the main topic to write about today",
  "angle": "unique angle or hook",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "blog_title": "SEO optimized blog post title",
  "social_hook": "attention grabbing first line for social media",
  "platforms": ["facebook", "instagram", "linkedin"]
}`
        }]
      })
    })

    const aiData = await response.json()
    const briefText = aiData.content[0].text.replace(/```json|```/g, '').trim()
    const brief = JSON.parse(briefText)

    // Update log with success
    await supabase
      .from('agent_logs')
      .update({
        status: 'completed',
        message: 'Content brief generated successfully',
        result: brief,
        completed_at: new Date().toISOString()
      })
      .eq('id', log.id)

    return NextResponse.json({ success: true, brief, log_id: log.id })

  } catch (error) {
    console.error('Content Strategist error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
