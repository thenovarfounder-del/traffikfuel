import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
try {
const { topic, platform, brain } = await req.json()

const businessContext = brain
? `Business: ${brain.businessName}. Description: ${brain.description}. Services: ${Array.isArray(brain.services) ? brain.services.join(', ') : brain.services}. Target Audience: ${brain.targetAudience}. Tone: ${brain.tone}. Location: ${brain.location}.`
: 'No business context available.'

const platformGuide: Record<string, string> = {
instagram: 'Write an engaging Instagram post with emojis, a hook, body text, call to action, and 10 relevant hashtags.',
facebook: 'Write a conversational Facebook post with a hook, story-style body, and a call to action. No hashtags.',
linkedin: 'Write a professional LinkedIn post with an insight, value-driven body, and a thought-provoking question at the end.',
}

const message = await client.messages.create({
model: 'claude-haiku-4-5-20251001',
max_tokens: 1000,
messages: [
{
role: 'user',
content: `You are a social media expert. ${platformGuide[platform]} Topic: "${topic}". Business context: ${businessContext}. Write only the post, nothing else.`,
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
