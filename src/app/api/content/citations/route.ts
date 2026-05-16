import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { supabase } from '@/lib/supabase'

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

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
          max_tokens: 1000,
          messages: [
            {
              role: 'user',
              content: `${engine.persona} Answer this question as ${engine.name} would, based on your training data. Be specific and name real companies and experts when relevant.\n\nQuestion: ${query}`,
            },
          ],
        })

        const response = message.content[0].type === 'text' ? message.content[0].text : ''
        const mentioned = response.toLowerCase().includes(businessName.toLowerCase())

        return {
          engine: engine.name,
          response,
          mentioned,
        }
      })
    )

    const mentionCount = results.filter((r) => r.mentioned).length
    const score = Math.round((mentionCount / results.length) * 100)

    if (userId) {
      await supabase.from('citation_checks').insert({
        user_id: userId,
        query,
        business_name: businessName,
        score,
        mention_count: mentionCount,
        total_engines: results.length,
        results,
      })
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