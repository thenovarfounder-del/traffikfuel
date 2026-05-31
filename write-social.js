// @ts-nocheck
const fs = require('fs');
const path = require('path');

// ============================================
// AGENT 1: CONTENT STRATEGIST
// ============================================
const agent1Path = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\agents\\content-strategist\\route.ts');
const agent1Dir = path.dirname(agent1Path);
if (!fs.existsSync(agent1Dir)) fs.mkdirSync(agent1Dir, { recursive: true });

const agent1Content = `// @ts-nocheck
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
          content: \`You are a content strategist for a small business. Generate a content brief for today.

Business: \${profile.business_name}
Industry: \${profile.industry}
City: \${profile.city || profile.phone}
Website: \${profile.website}

Return ONLY a JSON object with these fields:
{
  "topic": "the main topic to write about today",
  "angle": "unique angle or hook",
  "keywords": ["keyword1", "keyword2", "keyword3"],
  "blog_title": "SEO optimized blog post title",
  "social_hook": "attention grabbing first line for social media",
  "platforms": ["facebook", "instagram", "linkedin"]
}\`
        }]
      })
    })

    const aiData = await response.json()
    const briefText = aiData.content[0].text.replace(/\`\`\`json|\`\`\`/g, '').trim()
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
`;

// ============================================
// AGENT 2: CONTENT CREATOR
// ============================================
const agent2Path = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\agents\\content-creator\\route.ts');
const agent2Dir = path.dirname(agent2Path);
if (!fs.existsSync(agent2Dir)) fs.mkdirSync(agent2Dir, { recursive: true });

const agent2Content = `// @ts-nocheck
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
          content: \`Write a full SEO blog post for this brief:
Title: \${brief.blog_title}
Topic: \${brief.topic}
Angle: \${brief.angle}
Keywords: \${brief.keywords.join(', ')}
Business: \${profile.business_name} in \${profile.city || ''}
Industry: \${profile.industry}

Write a complete HTML blog post with proper h1, h2, p tags. Minimum 800 words. Include the keywords naturally.\`
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
          content: \`Create social media posts for this topic:
Topic: \${brief.topic}
Hook: \${brief.social_hook}
Business: \${profile.business_name}

Return ONLY JSON:
{
  "facebook": "150 word facebook post with 3 hashtags",
  "instagram": "150 word instagram post with 5 hashtags",
  "linkedin": "200 word professional linkedin post with 3 hashtags"
}\`
        }]
      })
    })

    const socialData = await socialResponse.json()
    const socialText = socialData.content[0].text.replace(/\`\`\`json|\`\`\`/g, '').trim()
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
        title: \`\${brief.topic} -- \${platform}\`,
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
        message: \`Created blog post and \${Object.keys(socialPosts).length} social posts\`,
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
`;

// ============================================
// AGENT 3: PUBLISHER
// ============================================
const agent3Path = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\agents\\publisher\\route.ts');
const agent3Dir = path.dirname(agent3Path);
if (!fs.existsSync(agent3Dir)) fs.mkdirSync(agent3Dir, { recursive: true });

const agent3Content = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  try {
    const { user_id } = await req.json()

    const { data: log } = await supabase
      .from('agent_logs')
      .insert({
        user_id,
        agent_name: 'Publisher',
        status: 'running',
        message: 'Checking content queue for pending posts...'
      })
      .select()
      .single()

    // Get pending content
    const { data: pending } = await supabase
      .from('content_queue')
      .select('*')
      .eq('user_id', user_id)
      .eq('status', 'pending')
      .lte('scheduled_at', new Date().toISOString())

    if (!pending || pending.length === 0) {
      await supabase
        .from('agent_logs')
        .update({ status: 'completed', message: 'No content ready to publish', completed_at: new Date().toISOString() })
        .eq('id', log.id)
      return NextResponse.json({ success: true, message: 'No content to publish' })
    }

    // Get WordPress connection
    const { data: wp } = await supabase
      .from('wordpress_connections')
      .select('*')
      .eq('user_id', user_id)
      .eq('connected', true)
      .single()

    let published = 0
    const results = []

    for (const item of pending) {
      try {
        if (item.platform === 'blog' && wp) {
          // Publish to WordPress
          const wpResponse = await fetch(\`\${wp.site_url}/wp-json/wp/v2/posts\`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + Buffer.from(\`\${wp.username}:\${wp.app_password}\`).toString('base64')
            },
            body: JSON.stringify({
              title: item.title,
              content: item.content,
              status: 'publish'
            })
          })
          const wpData = await wpResponse.json()
          await supabase
            .from('content_queue')
            .update({ status: 'published', published_at: new Date().toISOString(), post_url: wpData.link })
            .eq('id', item.id)
          results.push({ platform: 'blog', title: item.title, url: wpData.link })
        } else {
          // Save social posts to content_calendar
          await supabase.from('content_calendar').insert({
            user_id,
            title: item.title,
            content: item.content,
            content_type: 'social',
            platform: item.platform,
            status: 'scheduled',
            scheduled_at: item.scheduled_at
          })
          await supabase
            .from('content_queue')
            .update({ status: 'published', published_at: new Date().toISOString() })
            .eq('id', item.id)
          results.push({ platform: item.platform, title: item.title })
        }
        published++
      } catch (itemError) {
        console.error('Error publishing item:', itemError)
      }
    }

    await supabase
      .from('agent_logs')
      .update({
        status: 'completed',
        message: \`Published \${published} items successfully\`,
        result: { published, results },
        completed_at: new Date().toISOString()
      })
      .eq('id', log.id)

    return NextResponse.json({ success: true, published, results })

  } catch (error) {
    console.error('Publisher error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
`;

// ============================================
// AGENT 4: PERFORMANCE MONITOR
// ============================================
const agent4Path = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\agents\\performance-monitor\\route.ts');
const agent4Dir = path.dirname(agent4Path);
if (!fs.existsSync(agent4Dir)) fs.mkdirSync(agent4Dir, { recursive: true });

const agent4Content = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  try {
    const { user_id } = await req.json()

    const { data: log } = await supabase
      .from('agent_logs')
      .insert({
        user_id,
        agent_name: 'Performance Monitor',
        status: 'running',
        message: 'Analyzing content performance...'
      })
      .select()
      .single()

    // Get last 7 days of content
    const sevenDaysAgo = new Date()
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)

    const { data: recentContent } = await supabase
      .from('content_calendar')
      .select('*')
      .eq('user_id', user_id)
      .gte('created_at', sevenDaysAgo.toISOString())

    const { data: queueContent } = await supabase
      .from('content_queue')
      .select('*')
      .eq('user_id', user_id)
      .gte('created_at', sevenDaysAgo.toISOString())

    const totalPublished = (recentContent || []).filter(p => p.status === 'published').length
    const totalScheduled = (recentContent || []).filter(p => p.status === 'scheduled').length
    const platformBreakdown = {}

    ;(recentContent || []).forEach(p => {
      if (!platformBreakdown[p.platform]) platformBreakdown[p.platform] = 0
      platformBreakdown[p.platform]++
    })

    // Generate insights with AI
    const insightResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 500,
        messages: [{
          role: 'user',
          content: \`Analyze this weekly content performance and give 3 actionable insights:
Total published this week: \${totalPublished}
Total scheduled: \${totalScheduled}
Platform breakdown: \${JSON.stringify(platformBreakdown)}

Return ONLY JSON:
{
  "insights": ["insight 1", "insight 2", "insight 3"],
  "recommendation": "top recommendation for next week",
  "score": 75
}\`
        }]
      })
    })

    const insightData = await insightResponse.json()
    const insightText = insightData.content[0].text.replace(/\`\`\`json|\`\`\`/g, '').trim()
    const insights = JSON.parse(insightText)

    const result = {
      week_summary: {
        total_published: totalPublished,
        total_scheduled: totalScheduled,
        platform_breakdown: platformBreakdown
      },
      insights: insights.insights,
      recommendation: insights.recommendation,
      performance_score: insights.score
    }

    await supabase
      .from('agent_logs')
      .update({
        status: 'completed',
        message: \`Performance score: \${insights.score}/100\`,
        result,
        completed_at: new Date().toISOString()
      })
      .eq('id', log.id)

    return NextResponse.json({ success: true, ...result })

  } catch (error) {
    console.error('Performance Monitor error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
`;

// ============================================
// ORCHESTRATOR - Runs all agents in sequence
// ============================================
const orchPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\agents\\run\\route.ts');
const orchDir = path.dirname(orchPath);
if (!fs.existsSync(orchDir)) fs.mkdirSync(orchDir, { recursive: true });

const orchContent = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.traffikora.com'

export async function POST(req) {
  try {
    const { user_id } = await req.json()

    const results = {}

    // Step 1: Content Strategist
    const strategistRes = await fetch(\`\${BASE_URL}/api/agents/content-strategist\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id })
    })
    const strategistData = await strategistRes.json()
    results.strategist = strategistData
    if (!strategistData.success) return NextResponse.json({ error: 'Strategist failed', details: strategistData }, { status: 500 })

    // Step 2: Content Creator
    const creatorRes = await fetch(\`\${BASE_URL}/api/agents/content-creator\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id, brief: strategistData.brief })
    })
    const creatorData = await creatorRes.json()
    results.creator = creatorData
    if (!creatorData.success) return NextResponse.json({ error: 'Creator failed', details: creatorData }, { status: 500 })

    // Step 3: Publisher
    const publisherRes = await fetch(\`\${BASE_URL}/api/agents/publisher\`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id })
    })
    const publisherData = await publisherRes.json()
    results.publisher = publisherData

    return NextResponse.json({ success: true, results })

  } catch (error) {
    console.error('Orchestrator error:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
`;

// ============================================
// CRON JOB - Vercel Cron
// ============================================
const cronPath = path.join('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\cron\\daily\\route.ts');
const cronDir = path.dirname(cronPath);
if (!fs.existsSync(cronDir)) fs.mkdirSync(cronDir, { recursive: true });

const cronContent = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.traffikora.com'

export async function GET(req) {
  try {
    const authHeader = req.headers.get('authorization')
    if (authHeader !== \`Bearer \${process.env.CRON_SECRET}\`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get all users with auto_mode enabled
    const { data: profiles } = await supabase
      .from('business_profiles')
      .select('user_id')
      .eq('auto_mode', true)

    if (!profiles || profiles.length === 0) {
      return NextResponse.json({ message: 'No users with auto mode enabled' })
    }

    const results = []
    for (const profile of profiles) {
      const res = await fetch(\`\${BASE_URL}/api/agents/run\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: profile.user_id })
      })
      const data = await res.json()
      results.push({ user_id: profile.user_id, ...data })
    }

    return NextResponse.json({ success: true, ran_for: profiles.length, results })

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
`;

// Write all files
fs.writeFileSync(agent1Path, agent1Content, 'utf8');
fs.writeFileSync(agent2Path, agent2Content, 'utf8');
fs.writeFileSync(agent3Path, agent3Content, 'utf8');
fs.writeFileSync(agent4Path, agent4Content, 'utf8');
fs.writeFileSync(orchPath, orchContent, 'utf8');
fs.writeFileSync(cronPath, cronContent, 'utf8');

console.log('DONE - All 4 agents + orchestrator + cron job created');