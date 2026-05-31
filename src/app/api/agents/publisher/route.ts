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
          const wpResponse = await fetch(`${wp.site_url}/wp-json/wp/v2/posts`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + Buffer.from(`${wp.username}:${wp.app_password}`).toString('base64')
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
        message: `Published ${published} items successfully`,
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
