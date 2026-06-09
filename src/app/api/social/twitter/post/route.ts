// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    )
    const { content, user_id } = await req.json()
    if (!content) return NextResponse.json({ error: 'No content provided' }, { status: 400 })

    const tweetRes = await fetch('https://api.twitter.com/2/tweets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.TWITTER_BEARER_TOKEN
      },
      body: JSON.stringify({ text: content.slice(0, 280) })
    })

    const tweetData = await tweetRes.json()
    if (tweetData.errors || !tweetData.data) {
      return NextResponse.json({ error: tweetData.errors?.[0]?.message || 'Tweet failed' }, { status: 500 })
    }

    if (user_id) {
      await supabase.from('social_posts').insert({
        user_id,
        platform: 'twitter',
        content,
        status: 'published',
        published_at: new Date().toISOString(),
        post_id: tweetData.data.id
      })
    }

    return NextResponse.json({ success: true, tweet_id: tweetData.data.id })
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}