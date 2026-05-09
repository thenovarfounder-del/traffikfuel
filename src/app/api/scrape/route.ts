import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

function stripHtml(html: string): string {
return html
.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
.replace(/<[^>]+>/g, ' ')
.replace(/[^\x00-\x7F]/g, '')
.replace(/\s+/g, ' ')
.trim()
.slice(0, 8000);
}

export async function POST(req: NextRequest) {
try {
const { businessId, url } = await req.json();

if (!businessId || !url) {
return NextResponse.json({ error: 'Missing businessId or url' }, { status: 400 });
}

const cleanUrl = url.split('').filter((c: string) => c.charCodeAt(0) <= 127).join('').trim();

const res = await fetch(cleanUrl, {
headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TraffikFuel/1.0)' },
});
const raw = await res.text();
const text = stripHtml(raw);

const message = await client.messages.create({
model: 'claude-haiku-4-5-20251001',
max_tokens: 1024,
messages: [
{
role: 'user',
content: `You are a marketing analyst. Read this website text and extract a business brain summary in JSON format with these fields:
- business_name
- industry
- tagline
- services (array of strings)
- target_audience
- tone
- unique_value_proposition
- location
- keywords (array of 10 SEO keywords)

Website text:
${text}

Respond ONLY with valid JSON. No markdown, no explanation.`,
},
],
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

