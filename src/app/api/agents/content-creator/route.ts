// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  try {
    const { user_id, brief } = await req.json()

    const { data: profile } = await supabase
      .from('business_profiles')
      .select('*')
      .eq('user_id', user_id)
      .single()

    const { data: log } = await supabase
      .from('agent_logs')
      .insert({
        user_id,
        agent_name: 'Content Creator',
        status: 'running',
        message: 'Creating blog and social content...'
      })
      .select()
      .single()

    // Generate blog post
    const blogResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 2000,
        messages: [{
          role: 'user',
          content: `Write a full SEO blog post for this brief:
Title: ${brief.blog_title}
Topic: ${brief.topic}
Angle: ${brief.angle}
Keywords: ${brief.keywords.join(', ')}
Business: ${profile.business_name} in ${profile.city || ''}
Industry: ${profile.industry}

Write a complete HTML blog post with proper h1, h2, p tags. Minimum 800 words. Include the keywords naturally.`
        }]
      })
    })

    const blogData = await blogResponse.json()
    const blogContent = blogData.content[0].text

    // Generate social posts
    const socialResponse = await fetch('https://api.anthropic.com/v1/messages', {
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
          content: `Create social media posts for this topic:
Topic: ${brief.topic}
Hook: ${brief.social_hook}
Business: ${profile.business_name}

Return ONLY JSON:
{
  "facebook": "150 word facebook post with 3 hashtags",
  "instagram": "150 word instagram post with 5 hashtags",
  "linkedin": "200 word professional linkedin post with 3 hashtags"
}`
        }]
      })
    })

    const socialData = await socialResponse.json()
    const socialText = socialData.content[0].text.replace(/```json|```/g, '').trim()
    const socialPosts = JSON.parse(socialText)

    // Save to content_queue
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(9, 0, 0, 0)

    const queueItems = [
      {
        user_id,
        title: brief.blog_title,
        content: blogContent,
        content_type: 'blog',
        platform: 'blog',
        status: 'pending',
        scheduled_at: tomorrow.toISOString(),
        brief
      },
      ...Object.entries(socialPosts).map(([platform, content]) => ({
        user_id,
        title: `${brief.topic} -- ${platform}`,
        content,
        content_type: 'social',
        platform,
        status: 'pending',
        scheduled_at: tomorrow.toISOString(),
        brief
      }))
    ]

    await supabase.from('content_queue').insert(queueItems)

    await supabase
      .from('agent_logs')
      .update({
        status: 'completed',
        message: `Created blog post and ${Object.keys(socialPosts).length} social posts`,
        result: { blog_title: brief.blog_title, platforms: Object.keys(socialPosts) },
        completed_at: new Date().toISOString()
      })
      .eq('id', log.id)

    return NextResponse.json({ success: true, blog: blogContent, social: socialPosts })

  } catch (error) {
    console.error('Content Creator error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
