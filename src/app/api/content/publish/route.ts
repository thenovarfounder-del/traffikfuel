// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const body = await req.json()
    const { user_id, business_id } = body

    if (!user_id || !business_id) {
      return NextResponse.json({ error: 'Missing user_id or business_id' }, { status: 400 })
    }

    const results: Record<string, any> = {}

    // WordPress
    const { data: wpProfile } = await supabase
      .from('business_profiles')
      .select('wp_site_url, wp_username, wp_app_password')
      .eq('id', business_id)
      .single()

    const hasWP = wpProfile?.wp_site_url && wpProfile?.wp_username && wpProfile?.wp_app_password

    if (!hasWP) {
      results.wordpress = { status: 'skipped', message: 'WordPress not configured' }
    } else {
      const { data: blogPosts } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('user_id', user_id)
        .eq('status', 'draft')
        .limit(1)

      if (!blogPosts || blogPosts.length === 0) {
        results.wordpress = { status: 'skipped', message: 'No draft blog posts to publish' }
      } else {
        const post = blogPosts[0]
        try {
          const wpRes = await fetch(`${wpProfile.wp_site_url}/wp-json/wp/v2/posts`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Basic ' + Buffer.from(`${wpProfile.wp_username}:${wpProfile.wp_app_password}`).toString('base64')
            },
            body: JSON.stringify({ title: post.title, content: post.content, status: 'publish' })
          })
          if (wpRes.ok) {
            await supabase.from('blog_posts').update({ status: 'published' }).eq('id', post.id)
            results.wordpress = { status: 'success', message: 'Blog post published to WordPress' }
          } else {
            results.wordpress = { status: 'error', message: 'WordPress rejected the post' }
          }
        } catch (e) {
          results.wordpress = { status: 'error', message: 'Could not reach WordPress' }
        }
      }
    }

    // Social posts
    const { data: socialPosts } = await supabase
      .from('social_posts')
      .select('*')
      .eq('user_id', user_id)
      .eq('status', 'draft')
      .limit(5)

    if (socialPosts && socialPosts.length > 0) {
      await supabase.from('social_posts').update({ status: 'queued' }).in('id', socialPosts.map((p: any) => p.id))
      results.social = { status: 'success', message: `${socialPosts.length} social posts queued` }
    } else {
      results.social = { status: 'skipped', message: 'No draft social posts' }
    }

    // Email drafts
    const { data: emailDrafts } = await supabase
      .from('email_drafts')
      .select('*')
      .eq('user_id', user_id)
      .eq('status', 'draft')
      .limit(5)

    if (emailDrafts && emailDrafts.length > 0) {
      await supabase.from('email_drafts').update({ status: 'queued' }).in('id', emailDrafts.map((e: any) => e.id))
      results.email = { status: 'success', message: `${emailDrafts.length} emails queued` }
    } else {
      results.email = { status: 'skipped', message: 'No draft emails' }
    }

    // Ad drafts
    const { data: adDrafts } = await supabase
      .from('ad_drafts')
      .select('*')
      .eq('user_id', user_id)
      .eq('status', 'draft')
      .limit(5)

    if (adDrafts && adDrafts.length > 0) {
      await supabase.from('ad_drafts').update({ status: 'queued' }).in('id', adDrafts.map((a: any) => a.id))
      results.ads = { status: 'success', message: `${adDrafts.length} ads queued` }
    } else {
      results.ads = { status: 'skipped', message: 'No draft ads' }
    }

    // Reddit drafts
    const { data: redditDrafts } = await supabase
      .from('reddit_drafts')
      .select('*')
      .eq('user_id', user_id)
      .eq('status', 'draft')
      .limit(3)

    if (redditDrafts && redditDrafts.length > 0) {
      await supabase.from('reddit_drafts').update({ status: 'queued' }).in('id', redditDrafts.map((r: any) => r.id))
      results.reddit = { status: 'success', message: `${redditDrafts.length} Reddit posts queued` }
    } else {
      results.reddit = { status: 'skipped', message: 'No draft Reddit posts' }
    }

    // Video scripts
    const { data: videoScripts } = await supabase
      .from('video_scripts')
      .select('*')
      .eq('user_id', user_id)
      .eq('status', 'draft')
      .limit(3)

    if (videoScripts && videoScripts.length > 0) {
      await supabase.from('video_scripts').update({ status: 'queued' }).in('id', videoScripts.map((v: any) => v.id))
      results.video = { status: 'success', message: `${videoScripts.length} video scripts queued` }
    } else {
      results.video = { status: 'skipped', message: 'No draft video scripts' }
    }

    results.schema = { status: 'skipped', message: 'Schema queued via content generator' }
    results.faq = { status: 'skipped', message: 'FAQ queued via content generator' }
    results.authority = { status: 'skipped', message: 'Authority content queued via content generator' }

    return NextResponse.json({ success: true, results })

  } catch (error: any) {
    console.error('Publish engine error:', error)
    return NextResponse.json({ error: error.message || 'Publish failed' }, { status: 500 })
  }
}
