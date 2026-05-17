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
      return NextResponse.json({ error: 'Business profile not found', details: profileError?.message }, { status: 404 })
    }

    const brain = (profile.brain || 'No business context available.').substring(0, 500)

    const prompt = `You are a Reddit marketing expert. Write 3 authentic Reddit post drafts about "${topic}" that naturally mention ${profile.business_name}. Business context: ${brain}. Respond ONLY with a raw JSON array, no markdown, no backticks. Start with [ and end with ]. Format: [{"subreddit":"r/name","title":"title here","body":"body here"},{"subreddit":"r/name","title":"title here","body":"body here"},{"subreddit":"r/name","title":"title here","body":"body here"}]`

    let message
    try {
      message = await anthropic.messages.create({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
      })
    } catch (aiErr) {
      return NextResponse.json({ error: 'AI call failed', details: String(aiErr) }, { status: 500 })
    }

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
    return NextResponse.json({ error: 'Internal server error', details: String(err) }, { status: 500 })
  }
}