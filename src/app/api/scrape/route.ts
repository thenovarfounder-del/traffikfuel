import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
try {
const { businessId, text } = await req.json();

if (!businessId || !text) {
return NextResponse.json({ error: 'Missing businessId or text' }, { status: 400 });
}

const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'x-api-key': process.env.ANTHROPIC_API_KEY!,
'anthropic-version': '2023-06-01',
},
body: JSON.stringify({
model: 'claude-haiku-4-5-20251001',
max_tokens: 1024,
messages: [{
role: 'user',
content: `Extract a business brain from this website text as JSON with these exact fields: business_name, industry, tagline, services (array), target_audience, tone, unique_value_proposition, location. Return only valid JSON, no markdown, no explanation.\n\n${text}`
}],
}),
});

const claudeData = await claudeRes.json();

if (!claudeRes.ok) {
return NextResponse.json({ error: claudeData.error?.message || 'Claude error' }, { status: 500 });
}
