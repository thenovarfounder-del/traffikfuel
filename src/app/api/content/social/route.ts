import { NextRequest, NextResponse } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const tags: Record<string, string> = {
instagram: '#SecondPassport #CitizenshipByInvestment #GlobalCitizen #GoldenVisa #CaribbeanCBI #PassportFreedom #HighNetWorth #GlobalMobility #PassportStrategy #LegalCitizenship #WealthPlanning #ExpatLife #InternationalBusiness #DominicaCBI #GrenadaCBI',
facebook: '#SecondPassport #CitizenshipByInvestment #GlobalCitizen #GoldenVisa #PassportFreedom',
linkedin: '#GlobalCitizenship #CitizenshipByInvestment #WealthStrategy #InternationalBusiness #SecondPassport',
}

export async function POST(req: NextRequest) {
try {
const { topic, platform, brain } = await req.json()

const biz = brain
? `Business: ${brain.businessName}. Services: ${Array.isArray(brain.services) ? brain.services.join(', ') : brain.services}. Audience: ${brain.targetAudience}. Tone: ${brain.tone}.`
: 'No business context.'

const prompts: Record<string, string> = {
instagram: `Write an Instagram post about "${topic}" for: ${biz}. Use emojis, bold hook, under 150 words, call to action.`,
facebook: `Write a Facebook post about "${topic}" for: ${biz}. Write 2-3 conversational paragraphs, end with a question.`,
linkedin: `Write a LinkedIn post about "${topic}" for: ${biz}. Write 3-4 professional paragraphs, end with a question.`,
}

const message = await client.messages.create({
model: 'claude-haiku-4-5-20251001',
max_tokens: 1000,
messages: [{ role: 'user', content: prompts[platform] || prompts.instagram }],
})

const text = message.content[0].type === 'text' ? message.content[0].text : ''
const content = text + '\n\n' + (tags[platform] || tags.instagram)

return NextResponse.json({ content })
} catch (error) {
return NextResponse.json({ content: 'Error: ' + String(error) }, { status: 500 })
}
}

