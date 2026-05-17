import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { topic, userId } = await req.json()

    if (!topic || !userId) {
      return NextResponse.json({ error: 'Missing topic or userId' }, { status: 400 })
    }

    // Fetch business brain
    const { data: profile, error: profileError } = await supabase
      .from('business_profiles')
      .select('id, business_name, brain')
      .eq('user_id', userId)
      .single()

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Business profile not found' }, { status: 404 })
    }

    const brain = profile.brain || 'No business context available.'

    const prompt = `You are a Reddit marketing expert. Your job is to write authentic, helpful Reddit posts that naturally mention a business without sounding like ads.

Business Context:
${brain}

Topic/Keyword: ${topic}

Write exactly 3 Reddit post drafts. Each draft should:
- Feel like a real Reddit post written by a genuine community member
- Be helpful, informative, or tell a story
- Naturally mention the business name (${profile.business_name}) in context — never forced
- Include a suggested subreddit that fits the topic
- Have a compelling title and a full post body (150-300 words)

Return ONLY a valid JSON array with exactly 3 objects. No markdown, no explanation, just the JSON.

Format:
[
  {
    "subreddit": "r/subredditname",
    "title": "Post title here",
    "body": "Full post body here"
  },
  {
    "subreddit": "r/subredditname",
    "title": "Post title here",
    "body": "Full post body here"
  },
  {
    "subreddit": "r/subredditname",
    "title": "Post title here",
    "body": "Full post body here"
  }
]`

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }],
    })

    const rawText = message.content
      .filter((block) => block.type === 'text')
      .map((block) => (block as { type: 'text'; text: string }).text)
      .join('')

    let drafts: { subreddit: string; title: string; body: string }[]
    try {
      drafts = JSON.parse(rawText)
    } catch {
      return NextResponse.json({ error: 'Failed to parse AI response', raw: rawText }, { status: 500 })
    }

    // Save each draft to Supabase
    const inserts = drafts.map((draft) => ({
      user_id: userId,
      business_id: profile.id,
      topic,
      subreddit: draft.subreddit,
      title: draft.title,
      body: draft.body,
      status: 'draft',
    }))

    const { data: saved, error: insertError } = await supabase
      .from('reddit_drafts')
      .insert(inserts)
      .select()

    if (insertError) {
      return NextResponse.json({ error: 'Failed to save drafts', details: insertError.message }, { status: 500 })
    }

    return NextResponse.json({ drafts: saved })
  } catch (err) {
    console.error('Reddit API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}