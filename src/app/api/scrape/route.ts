import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
try {
const body = await req.json();
const { businessId, url } = body;

console.log('SCRAPE START - businessId:', businessId, 'url:', url);

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
.replace(/\s+/g, ' ')
.trim()
.slice(0, 4000);
console.log('FETCH OK - text length:', rawText.length);
} catch (fetchErr) {
console.log('FETCH ERROR:', String(fetchErr));
return NextResponse.json({ error: 'Could not fetch website: ' + String(fetchErr) }, { status: 400 });
}

if (!rawText) {
return NextResponse.json({ error: 'No readable content found.' }, { status: 400 });
}

// Check env vars
const anthropicKey = process.env.ANTHROPIC_API_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('ENV CHECK - anthropic:', !!anthropicKey, 'supabase url:', !!supabaseUrl, 'supabase key:', !!supabaseKey);

if (!anthropicKey || !supabaseUrl || !supabaseKey) {
return NextResponse.json({ error: 'Missing env vars', detail: { anthropic: !!anthropicKey, supabaseUrl: !!supabaseUrl, supabaseKey: !!supabaseKey } }, { status: 500 });
}

// Call Claude
console.log('Calling Claude...');
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
messages: [
{
role: 'user',
content: `You are a marketing AI. Extract business info from this website text and return ONLY valid JSON with these exact keys: businessName, description, services, targetAudience, tone, uniqueValue, location. Website text: ${rawText}`,
},
],
}),
});

const claudeData = await claudeRes.json();
console.log('CLAUDE STATUS:', claudeRes.status);
console.log('CLAUDE RESPONSE:', JSON.stringify(claudeData).slice(0, 300));

const rawContent = claudeData?.content?.[0]?.text || '';

let brain;
try {
const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
brain = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw: rawContent };
} catch {
brain = { raw: rawContent };
}

// Save to Supabase
console.log('Saving to Supabase...');
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

console.log('SUPABASE SAVE STATUS:', dbRes.status);

if (!dbRes.ok) {
const err = await dbRes.text();
console.log('SUPABASE ERROR:', err);
return NextResponse.json({ error: 'DB save failed', detail: err }, { status: 500 });
}

return NextResponse.json({ success: true, brain });

} catch (err) {
console.error('TOP LEVEL ERROR:', String(err));
return NextResponse.json({ error: 'Unexpected server error', detail: String(err) }, { status: 500 });
}
}

