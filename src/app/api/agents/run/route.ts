// @ts-nocheck
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
    const strategistRes = await fetch(`${BASE_URL}/api/agents/content-strategist`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id })
    })
    const strategistData = await strategistRes.json()
    results.strategist = strategistData
    if (!strategistData.success) return NextResponse.json({ error: 'Strategist failed', details: strategistData }, { status: 500 })

    // Step 2: Content Creator
    const creatorRes = await fetch(`${BASE_URL}/api/agents/content-creator`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id, brief: strategistData.brief })
    })
    const creatorData = await creatorRes.json()
    results.creator = creatorData
    if (!creatorData.success) return NextResponse.json({ error: 'Creator failed', details: creatorData }, { status: 500 })

    // Step 3: Publisher
    const publisherRes = await fetch(`${BASE_URL}/api/agents/publisher`, {
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
