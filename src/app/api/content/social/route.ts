import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
  try {
    const { topic, platform, brain } = await req.json()

    const businessContext = brain
      ? `Business: ${brain.businessName}. Description: ${brain.description}. Services: ${Array.isArray(brain.services) ? brain.services.join(', ') : brain.services}. Target Audience: ${brain.targetAudience}. Tone: ${brain.tone}. Location: ${brain.location}.`
      : 'No business context available.'

    const prompts: Record<string, string> = {
      instagram: `Write an Instagram post about "${topic}" for this business: ${businessContext}

Rules:
- Start with a bold attention-grabbing first line
- Use emojis throughout (5-8 emojis)
- Keep it under 150 words
- End with a clear call to action
- Add 10-15 niche hashtags on a new line at the bottom
- Tone: energetic, visual, lifestyle-focused`,

      facebook: `Write a Facebook post about "${topic}" for this business: ${businessContext}

Rules:
- Start with a question or bold statement to stop the scroll
- Write 2-3 short paragraphs in a warm conversational tone
- Tell a mini story or share a relatable situation
- End by asking followers a question to drive comments
- NO hashtags
- Tone: friendly, community-focused, personal`,

      linkedin: `Write a LinkedIn post about "${topic}" for this business: ${businessContext}

Rules:
- Start with a bold one-liner insight or surprising fact
- Write 3-4 short paragraphs with line breaks between each
- Share a professional perspective or lesson learned
- Include a specific data point or result if possible
- End with a thought-provoking question for professionals
- NO emojis except possibly one at the start
- Tone: authoritative, professional, value-driven`,
    }

    const message = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: prompts[platform] || prompts.instagram,
        },
      ],
    })

    const content = message.content[0].type === 'text' ? message.content[0].text : ''
    return NextResponse.json({ content })
  } catch (error) {
    console.error('Social generation error:', error)
    return NextResponse.json({ content: 'Error: ' + String(error) }, { status: 500 })
  }
}
