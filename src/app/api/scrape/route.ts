import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const businessId = (body.businessId ?? '').replace(/[^\x20-\x7E]/g, '').trim();
    const url = (body.url ?? '').replace(/[^\x20-\x7E]/g, '').trim();

    if (!businessId || !url) {
      return NextResponse.json({ error: 'Missing businessId or url' }, { status: 400 });
    }

    let rawText = '';
    try {
      const res = await fetch(url, {
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1)' },
        signal: AbortSignal.timeout(7000),
      });
      const html = await res.text();
      rawText = html
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 3000);
    } catch (e) {
      return NextResponse.json({ error: 'Could not fetch website: ' + String(e) }, { status: 400 });
    }

    if (!rawText || rawText.length < 50) {
      return NextResponse.json({ error: 'Not enough content found on that page.' }, { status: 400 });
    }

    const anthropicKey = process.env.ANTHROPIC_API_KEY!;
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

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
            content: 'You are a marketing AI. Extract business info from this website text and return ONLY a valid JSON object with these exact keys: businessName, description, services, targetAudience, tone, uniqueValue, location. No explanation, no markdown, just the JSON object.\n\n' + rawText,
          },
        ],
      }),
    });

    const claudeData = await claudeRes.json();
    const rawContent = claudeData?.content?.[0]?.text ?? '';

    let brain;
    try {
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      brain = jsonMatch ? JSON.parse(jsonMatch[0]) : { raw: rawContent };
    } catch {
      brain = { raw: rawContent };
    }

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
          brain,
          brain_updated_at: new Date().toISOString(),
        }),
      }
    );

    if (!dbRes.ok) {
      const err = await dbRes.text();
      return NextResponse.json({ error: 'DB save failed', detail: err }, { status: 500 });
    }

    return NextResponse.json({ success: true, brain });

  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}