const fs = require('fs')

const content = `// @ts-nocheck
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
      .insert({ user_id, agent_name: 'Content Creator', status: 'running', message: 'Creating blog and social content...' })
      .select()
      .single()

    const userPlatforms = brief.platforms || ['facebook', 'instagram', 'linkedin']
    const platformList = userPlatforms.join(', ')

    const blogResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 2000,
        messages: [{ role: 'user', content: 'Write a full SEO blog post. Title: ' + brief.blog_title + '. Topic: ' + brief.topic + '. Business: ' + profile.business_name + '. Industry: ' + profile.industry + '. Minimum 800 words. Use h1, h2, p HTML tags.' }]
      })
    })
    const blogData = await blogResponse.json()
    const blogContent = blogData.content[0].text

    const platformInstructions = userPlatforms.map(p => {
      if (p === 'facebook') return '"facebook": "150 word facebook post with 3 hashtags"'
      if (p === 'instagram') return '"instagram": "150 word instagram post with 5 hashtags"'
      if (p === 'tiktok') return '"tiktok": "100 word tiktok caption with 5 hashtags"'
      if (p === 'twitter') return '"twitter": "280 character tweet with 2 hashtags"'
      if (p === 'linkedin') return '"linkedin": "200 word linkedin post with 3 hashtags"'
      return null
    }).filter(Boolean).join(', ')

    const socialResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 1500,
        messages: [{ role: 'user', content: 'Create social posts for: ' + platformList + '. Topic: ' + brief.topic + '. Business: ' + profile.business_name + '. Return ONLY valid JSON with keys: {' + platformInstructions + '}' }]
      })
    })
    const socialData = await socialResponse.json()
    const socialText = socialData.content[0].text.replace(/\`\`\`json|\`\`\`/g, '').trim()
    const socialPosts = JSON.parse(socialText)

    const todayStart = new Date()
    todayStart.setHours(0, 0, 0, 0)
    const { data: existing } = await supabase.from('content_queue').select('id').eq('user_id', user_id).gte('created_at', todayStart.toISOString())

    if (existing && existing.length > 0) {
      await supabase.from('agent_logs').update({ status: 'completed', message: 'Already generated today', completed_at: new Date().toISOString() }).eq('id', log.id)
      return NextResponse.json({ success: true, message: 'Already generated today' })
    }

    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(9, 0, 0, 0)

    const queueItems = [
      { user_id, title: brief.blog_title, content: blogContent, content_type: 'blog', platform: 'blog', status: 'pending', scheduled_at: tomorrow.toISOString() },
      ...Object.entries(socialPosts).map(([platform, postContent]) => ({
        user_id, title: brief.topic + ' -- ' + platform, content: postContent, content_type: 'social', platform, status: 'pending', scheduled_at: tomorrow.toISOString()
      }))
    ]

    await supabase.from('content_queue').insert(queueItems)
    await supabase.from('agent_logs').update({
      status: 'completed',
      message: 'Created blog and ' + Object.keys(socialPosts).length + ' social posts for: ' + platformList,
      result: { blog_title: brief.blog_title, platforms: Object.keys(socialPosts) },
      completed_at: new Date().toISOString()
    }).eq('id', log.id)

    return NextResponse.json({ success: true, blog: blogContent, social: socialPosts })

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
`

fs.writeFileSync('C:\\\\Users\\\\randy\\\\traffikfuel\\\\src\\\\app\\\\api\\\\agents\\\\content-creator\\\\route.ts', content, 'utf8')
console.log('SUCCESS: content-creator fixed')