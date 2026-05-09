import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
try {
const body = await req.json();
const { businessId, url } = body;

if (!businessId || !url) {
return NextResponse.json({ error: 'Missing businessId or url' }, { status: 400 });
}

const apiKey = process.env.ANTHROPIC_API_KEY;
if (!apiKey) {
return NextResponse.json({ error: 'No API key found' }, { status: 500 });
}

return NextResponse.json({ debug: 'API key found', keyStart: apiKey.slice(0, 10), businessId, url });

} catch (err: unknown) {
const message = err instanceof Error ? err.message : 'Unknown error';
return NextResponse.json({ error: message }, { status: 500 });
}
}