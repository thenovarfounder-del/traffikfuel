import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { createClient } from '@supabase/supabase-js'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { query, businessName, userId } = await request.json()

    if (!query || !businessName) {
      return NextResponse.json(
        { error: 'Missing query or businessName' },
        { status: 400 }
      )
    }

    const engines = [
      { name: 'ChatGPT', persona: 'You are ChatGPT, made by OpenAI.' },
      { name: 'Gemini', persona: 'You are Gemini, made by Google.' },
      { name: 'Perplexity', persona: 'You are Perplexity AI, an AI search engine.' },
      { name: 'Claude', persona: 'You are Claude, made by Anthropic.' },
    ]

    const results = await Promise.all(
      engines.map(async (engine) => {
        const message = await anthropic.messages.create({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 1024,
          system: engine.persona,
          messages: [
            {
              role: 'user',
              content: query,
            },
          ],
        })

        const responseText =
          message.content[0].type === 'text' ? message.content[0].text : ''

        const mentioned =
          responseText.toLowerCase().includes(businessName.toLowerCase())

        return {
          engine: engine.name,
          mentioned,
          response: responseText,
        }
      })
    )

    const mentionCount = results.filter((r) => r.mentioned).length
    const score = Math.round((mentionCount / results.length) * 100)

    // Get userId from auth if not provided by frontend
    let resolvedUserId = userId || null

    if (!resolvedUserId) {
      const authHeader = request.headers.get('authorization')
      if (authHeader) {
        const token = authHeader.replace('Bearer ', '')
        const { data: { user } } = await supabase.auth.getUser(token)
        resolvedUserId = user?.id || null
      }
    }

    console.log('Citation check — resolvedUserId:', resolvedUserId)
    console.log('Citation check — businessName:', businessName)
    console.log('Citation check — score:', score)

    if (resolvedUserId) {
      const { data, error: insertError } = await supabase
        .from('citation_checks')
        .insert({
          user_id: resolvedUserId,
          query,
          business_name: businessName,
          score,
          mention_count: mentionCount,
          total_engines: results.length,
          results,
        })

      if (insertError) {
        console.error('Supabase insert error:', insertError)
      } else {
        console.log('Citation check saved successfully:', data)
      }
    } else {
      console.warn('No userId found — citation check NOT saved to Supabase')
    }

    return NextResponse.json({
      query,
      businessName,
      results,
      mentionCount,
      score,
    })
  } catch (error) {
    console.error('Citation check error:', error)
    return NextResponse.json(
      { error: 'Failed to run citation check' },
      { status: 500 }
    )
  }
}