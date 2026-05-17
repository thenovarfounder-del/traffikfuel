import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import Anthropic from '@anthropic-ai/sdk'

export async function POST(req: NextRequest) {
  try {
    const anthropic = new Anthropic()

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { topic, userId } = await req.json()

    if (!topic || !userId) {
      return NextResponse.json({ error: 'Topic and userId required' }, { status: 400 })
    }

    const { data: profile, error: profileError } = await supabase
      .from('business_profiles')
      .select('id, business_name, brain')
      .eq('user_id', userId)
      .single()

    if (profileError || !profile) {
      return NextResponse.json({ error: 'Business profile not found', details: profileError?.message }, { status: 404 })
    }

    const brain = (profile.brain || 'No business info available').substring(0, 500)

    const message = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      messages: [{ role: 'user', content: `You are a Reddit marketing expert. Generate 3 authentic Reddit post drafts about "${topic}" for a business called "${profile.business_name}". Business context: ${brain}. Return ONLY a JSON object like: {"drafts":[{"subreddit":"subreddit_name","title":"post title","body":"post body"}]}` }],
    })

    const rawText = message.content[0].type === 'text' ? message.content[0].text : ''

    let drafts
    try {
      const parsed = JSON.parse(rawText)
      drafts = parsed.drafts
    } catch {
      return NextResponse.json({ error: 'Failed to parse AI response', raw: rawText }, { status: 500 })
    }

    const inserts = drafts.map((draft: any) => ({
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
  } catch (err: any) {
    return NextResponse.json({ error: 'Internal server error', details: err?.message || String(err) }, { status: 500 })
  }
}