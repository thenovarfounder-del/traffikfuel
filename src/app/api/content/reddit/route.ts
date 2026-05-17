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

    const { data: profile, error: profileError } = await supabase
      .from('business_profiles')
      .select('id, business_name, brain')
      .eq('user_id', userId)
      .single()

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Business profile not found' }, { status: 404 })
    }

    const brain = (profile.brain || 'No business context available.').substring(0, 500)

    const prompt = `You are a Reddit marketing expert. Write 3 authentic Reddit post drafts about "${topic}" that naturally mention ${profile.business_name}.

Business context: ${brain}

Rules:
- Sound like a real Reddit user, not an ad
- Naturally weave in the business name
- Each post 150-300 words

You MUST respond with ONLY a JSON array. No explanation. No markdown. No backticks. Start your response with [ and end with ].

Example format:
[{"subreddit":"r/example","title":"Title here","body":"Body here"},{"subreddit":"r/example2","title":"Title here","body":"Body here"},{"subreddit":"r/example3","title":"Title here","body":"Body here"}]`

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1500,
      messages: [{ role: 'user', content: prompt }],
    })

    const rawText = message.content
      .filter((block) => block.type === 'text')
      .map((block) => (block as { type: 'text'; text: string }).text)
      .join('')
      .trim()

    let drafts: { subreddit: string; title: string; body: string }[]
    try {
      const match = rawText.match(/\[[\s\S]*\]/)
      if (!match) throw new Error('No JSON found')
      drafts = JSON.parse(match[0])
    } catch {
      return NextResponse.json({ error: 'Failed to parse AI response', raw: rawText }, { status: 500 })
    }

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