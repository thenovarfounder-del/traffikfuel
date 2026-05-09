import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function toAscii(str: string): string {
return Buffer.from(str, 'ascii').toString('ascii');
}

function stripHtml(html: string): string {
return html
.replace(/<script[\s\S]*?<\/script>/gi, '')
.replace(/<style[\s\S]*?<\/style>/gi, '')
.replace(/<[^>]+>/g, ' ')
.replace(/\s+/g, ' ')
.trim()
.slice(0, 5000);
}

export async function POST(req: NextRequest) {
try {
const body = await req.json();
const businessId = String(body.businessId || '').replace(/[^\x00-\x7F]/g, '');
const url = String(body.url || '').replace(/[^\x00-\x7F]/g, '');

if (!businessId || !url) {
return NextResponse.json({ error: 'Missing businessId or url' }, { status: 400 });
}

const res = await fetch(url, {
headers: { 'User-Agent': 'Mozilla/5.0' },
});

const raw = await res.text();
const stripped = stripHtml(raw).replace(/[^\x00-\x7F]/g, '');
const text = toAscii(stripped);

const promptText = `You are a marketing analyst. Extract a business brain from this website as JSON with fields: business_name, industry, tagline, services (array), target_audience, tone, unique_value_proposition, location, keywords (array of 10). Respond ONLY with valid JSON.\n\nWebsite:\n${text}`;
const safePrompt = toAscii(promptText);

const message = await client.messages.create({
model: 'claude-haiku-4-5-20251001',
max_tokens: 1024,
messages: [{ role: 'user', content: safePrompt }],
});

const rawJson = message.content[0].type === 'text' ? message.content[0].text : '';
let brain;
try {
brain = JSON.parse(rawJson);
} catch {
brain = { raw_summary: rawJson };
}

const { error } = await supabase
.from('business_profiles')
.update({ brain, brain_updated_at: new Date().toISOString() })
.eq('id', businessId);

if (error) {
return NextResponse.json({ error: error.message }, { status: 500 });
}

return NextResponse.json({ brain });
} catch (err: unknown) {
const message = err instanceof Error ? err.message : 'Unknown error';
return NextResponse.json({ error: message }, { status: 500 });
}
}
