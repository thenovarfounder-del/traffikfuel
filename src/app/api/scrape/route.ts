import { NextRequest, NextResponse } from 'next/server';

function cleanString(str: string): string {
return str.replace(/[^\x20-\x7E]/g, '').trim();
}

export async function POST(req: NextRequest) {
try {
const body = await req.json();
const rawBusinessId = body.businessId ?? '';
const rawUrl = body.url ?? '';

const businessId = cleanString(rawBusinessId);
const url = cleanString(rawUrl);

console.log('businessId length:', businessId.length, 'url length:', url.length);

if (!businessId || !url) {
return NextResponse.json({ error: 'Missing businessId or url' }, { status: 400 });
}

// Fetch website HTML server-side
let rawText = '';
try {
const res = await fetch(url, {
headers: { 'User-Agent': 'Mozilla/5.0 (compatible; TraffikFuel/1.0)' },
signal: AbortSignal.timeout(7000),
});
const html = await res.text();
rawText = html
.replace(/<script[\s\S]*?<\/script>/gi, '')
.replace(/<style[\s\S]*?<\/style>/gi, '')
.replace(/<[^>]+>/g, ' ')
.replace(/[^\x20-\x7E]/g, ' ')
.replace(/\s+/g, ' ')
.trim()
.slice(0, 4000);
console.log('Fetched text length:', rawText.length);
} catch (fetchErr) {
return NextResponse.json({ error: 'Could not fetch website: ' + String(fetchErr) }, { status: 400 });
}

if (!rawText) {
return NextResponse.json({ error: 'No readable content found.' }, { status: 400 });
}

const anthropicKey = process.env.ANTHROPIC_API_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!anthropicKey || !supabaseUrl || !supabaseKey) {
return NextResponse.json({ error: 'Missing env vars' }, { status: 500 });
}

// Call Claude
const prompt = `You are a marketing AI. Extract business info from this website text and return ONLY valid JSON with these exact keys: businessName, description, services, targetAudience, tone, uniqueValue, location. Website text: ${rawText}`;
const cleanPrompt = prompt.replace(/[^\x20-\x7E\n]/g, ' ');

const claudeRes = await fetch('https://api.anthropic.com/v1/messages', {
method: 'POST',
headers: {
'x-api-key': anthropicKey,
'anthropic-version': '2023-06-01',
'content-type': 'application/json',
},
body: JSON.stringify({
model: 'claude-haiku-4-5-20251001',
max_tokens: 1000,
messages: [{ role: 'user', content: cleanPrompt }],
}),
});

const claudeData = await claudeRes.json();
console.log('Claude status:', claudeRes.status);

const rawContent = claudeData?.content?.[0]?.text || '';

let brain;
try {
const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
brain = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw: rawContent };
} catch {
brain = { raw: rawContent };
}

// Save to Supabase
const dbRes = await fetch(
`${supabaseUrl}/rest/v1/business_profiles?id=eq.${businessId}`,
{
method: 'PATCH',
headers: {
apikey: supabaseKey,
Authorization: `Bearer ${supabaseKey}`,
'Content-Type': 'application/json',
Prefer: 'return=minimal',
},
body: JSON.stringify({
brain: brain,
brain_updated_at: new Date().toISOString(),
}),
}
);

console.log('Supabase save status:', dbRes.status);

if (!dbRes.ok) {
const err = await dbRes.text();
return NextResponse.json({ error: 'DB save failed', detail: err }, { status: 500 });
}

return NextResponse.json({ success: true, brain });

} catch (err) {
console.error('TOP LEVEL ERROR:', String(err));
return NextResponse.json({ error: String(err) }, { status: 500 });
}
}
