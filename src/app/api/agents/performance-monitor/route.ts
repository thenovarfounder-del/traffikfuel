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
          content: `Analyze this weekly content performance and give 3 actionable insights:
Total published this week: ${totalPublished}
Total scheduled: ${totalScheduled}
Platform breakdown: ${JSON.stringify(platformBreakdown)}

Return ONLY JSON:
{
  "insights": ["insight 1", "insight 2", "insight 3"],
  "recommendation": "top recommendation for next week",
  "score": 75
}`
        }]
      })
    })

    const insightData = await insightResponse.json()
    const insightText = insightData.content[0].text.replace(/```json|```/g, '').trim()
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
        message: `Performance score: ${insights.score}/100`,
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
