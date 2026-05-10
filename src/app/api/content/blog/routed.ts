import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

export async function POST(req: NextRequest) {
try {
const { topic, brain } = await req.json()

const businessContext = brain
? `Business: ${brain.businessName}. Description: ${brain.description}. Services: ${Array.isArray(brain.services) ? brain.services.join(', ') : brain.services}. Target Audience: ${brain.targetAudience}. Tone: ${brain.tone}. Location: ${brain.location}.`
: 'No business context available.'

const message = await client.messages.create({
model: 'claude-haiku-4-5-20251001',
max_tokens: 1000,
messages: [
{
role: 'user',
content: `You are a professional SEO blog writer. Write a complete blog post about: "${topic}". Business context: ${businessContext}. Write a full blog post with a title, introduction, 3 sections with headers, and a conclusion. Make it SEO-optimized and around 600 words.`,
},
],
})

const content = message.content[0].type === 'text' ? message.content[0].text : ''
return NextResponse.json({ content })
} catch (error) {
console.error('Blog generation error:', error)
return NextResponse.json({ content: 'Error generating content. Please try again.' }, { status: 500 })
}
}
