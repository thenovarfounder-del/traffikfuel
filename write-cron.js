const fs = require('fs');

const content = `import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { supabase } from '@/lib/supabase';

const client = new Anthropic({
apiKey: process.env.ANTHROPIC_API_KEY,
});

// ─────────────────────────────────────────────
// STRATEGY ENGINE — Picks the best angle for the business
// ─────────────────────────────────────────────
async function generateAutoStrategy(businessContext: string, platform: string): Promise<string> {
const message = await client.messages.create({
model: 'claude-haiku-4-5-20251001',
max_tokens: 500,
system: 'You are a senior content strategist and SEO expert. You read a business profile and independently decide the single best content angle for a social media post today. Respond in plain text only — no bullet points, no headers. Just write the strategy as flowing notes.',
messages: [{
role: 'user',
content: \`Analyze this business and create a content strategy brief for a \${platform} post. Decide everything yourself.

BUSINESS CONTEXT:
\${businessContext}

Decide:
- The single most powerful content angle (pain point, transformation, myth-bust, insider insight, results, urgent trend, or common mistake)
- 6-8 specific high-value keyword phrases this audience searches for
- Core emotion to trigger (FOMO, aspiration, frustration, curiosity, urgency, trust)
- One specific topic or insight unique to this business
- Ideal tone and voice for \${platform}
- One powerful hook angle for the opening line\`
}],
});
return message.content[0].type === 'text' ? message.content[0].text : '';
}

// ─────────────────────────────────────────────
// CONTENT ENGINE — Writes the actual post
// ─────────────────────────────────────────────
async function generateContent(businessContext: string, platform: string, strategy: string): Promise<{ post: string; cta: string; hashtags: string }> {
let platformPrompt = '';

if (platform === 'instagram') {
platformPrompt = \`You are an elite Instagram content strategist and SEO copywriter.

BUSINESS CONTEXT:
\${businessContext}

AUTO STRATEGY — follow exactly:
\${strategy}

INSTAGRAM RULES — MANDATORY:
- First line under 125 characters: scroll-stopping hook — bold claim, shocking truth, or direct question
- Short punchy sentences, single line breaks — never blocks longer than 2 lines
- Weave in 3-4 keyword phrases naturally
- 3-5 emojis placed strategically — hook, key points, before CTA
- One micro-story or specific insight — no generic advice
- Total caption: 150-200 words

Respond in EXACTLY this format:

POST:
[Full Instagram caption]

CTA:
[One punchy action line]

HASHTAGS:
[Exactly 9 hashtags — 3 broad high-volume, 4 mid-range niche, 2 local or brand — all starting with #, space separated]\`;

} else if (platform === 'facebook') {
platformPrompt = \`You are an elite Facebook content strategist and SEO copywriter.

BUSINESS CONTEXT:
\${businessContext}

AUTO STRATEGY — follow exactly:
\${strategy}

FACEBOOK RULES — MANDATORY:
- First 2 lines under 130 characters: hook before mobile "See More" cutoff
- Write like a trusted advisor — warm, authoritative, human
- Paragraph breaks every 2-3 sentences
- ONE specific data point or real example for credibility
- Weave in 4-5 keyword phrases naturally
- End with a thought-provoking question inviting comments
- Total post: 40-80 words — punchy and clear
- No external links. 0-2 emojis max.

Respond in EXACTLY this format:

POST:
[Full Facebook post]

CTA:
[One direct action line — no link]

HASHTAGS:
[Exactly 3 hashtags — relevant and searchable — all starting with #, space separated]\`;

} else if (platform === 'linkedin') {
platformPrompt = \`You are an elite LinkedIn content strategist and B2B SEO copywriter.

BUSINESS CONTEXT:
\${businessContext}

AUTO STRATEGY — follow exactly:
\${strategy}

LINKEDIN RULES — MANDATORY:
- First line under 210 characters: single sentence challenging a belief or revealing a counterintuitive truth
- Structure: Bold hook → context (2-3 lines) → core insight or story (4-6 lines) → takeaway (2-3 lines) → engagement question → CTA
- First person — expert voice
- ONE concrete result or data point for credibility
- Weave in 4-6 keyword phrases naturally
- Single-sentence paragraphs with blank lines between
- No external links in post body
- Total: 1,300-1,900 characters
- 0-2 emojis max

Respond in EXACTLY this format:

POST:
[Full LinkedIn post]

CTA:
[One professional action line — no link]

HASHTAGS:
[Exactly 5 hashtags — 2 broad industry, 2 niche professional, 1 topic-specific — all starting with #, space separated]\`;
}

const message = await client.messages.create({
model: 'claude-haiku-4-5-20251001',
max_tokens: 1200,
system: 'You are an elite social media strategist and SEO copywriter. You ALWAYS respond using the exact labeled format: POST:, CTA:, and HASHTAGS:. You NEVER skip a section. You follow word count instructions precisely.',
messages: [{ role: 'user', content: platformPrompt }],
});

const responseText = message.content[0].type === 'text' ? message.content[0].text : '';

const postMatch = responseText.match(/POST:\\s*([\\s\\S]*?)(?=CTA:|$)/i);
const ctaMatch = responseText.match(/CTA:\\s*([\\s\\S]*?)(?=HASHTAGS:|$)/i);
const hashtagsMatch = responseText.match(/HASHTAGS:\\s*([\\s\\S]*?)$/i);

return {
post: postMatch ? postMatch[1].trim() : responseText,
cta: ctaMatch ? ctaMatch[1].trim() : '',
hashtags: hashtagsMatch ? hashtagsMatch[1].trim() : '',
};
}

// ─────────────────────────────────────────────
// MAIN CRON HANDLER
// Runs daily at 6am via Vercel cron
// Loops all businesses with brain loaded
// Generates 3 posts each and saves to Supabase
// ─────────────────────────────────────────────
export async function GET(request: NextRequest) {
// Security: verify this is called by Vercel cron or our secret key
const authHeader = request.headers.get('authorization');
const cronSecret = process.env.CRON_SECRET || 'traffikfuel-cron-2024';

if (authHeader !== \`Bearer \${cronSecret}\`) {
return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

console.log('[CRON] Daily content generation started:', new Date().toISOString());

try {
// Get all business profiles that have a brain loaded
const { data: businesses, error: bizError } = await supabase
.from('business_profiles')
.select('id, user_id, name, brain')
.not('brain', 'is', null);

if (bizError) {
console.error('[CRON] Error fetching businesses:', bizError);
return NextResponse.json({ error: 'Failed to fetch businesses' }, { status: 500 });
}

if (!businesses || businesses.length === 0) {
console.log('[CRON] No businesses with brain loaded found');
return NextResponse.json({ message: 'No businesses to process', count: 0 });
}

console.log(\`[CRON] Processing \${businesses.length} business(es)\`);

const platforms = ['instagram', 'facebook', 'linkedin'] as const;
let totalGenerated = 0;
let totalFailed = 0;
const results = [];

for (const business of businesses) {
const brain = business.brain || {};
const businessContext = \`
Business Name: \${brain.businessName || business.name || 'Unknown'}
Description: \${brain.description || ''}
Services: \${Array.isArray(brain.services) ? brain.services.join(', ') : brain.services || ''}
Target Audience: \${brain.targetAudience || ''}
Tone: \${brain.tone || 'professional'}
Unique Value: \${brain.uniqueValue || ''}
Location: \${brain.location || ''}
\`.trim();

console.log(\`[CRON] Generating content for: \${business.name}\`);

for (const platform of platforms) {
try {
// Step 1: Generate strategy
const strategy = await generateAutoStrategy(businessContext, platform);

// Step 2: Generate content
const { post, cta, hashtags } = await generateContent(businessContext, platform, strategy);

// Step 3: Save to Supabase
const { error: insertError } = await supabase
.from('generated_posts')
.insert({
business_id: business.id,
user_id: business.user_id,
platform,
post,
cta,
hashtags,
strategy,
status: 'pending',
generated_at: new Date().toISOString(),
});

if (insertError) {
console.error(\`[CRON] Failed to save \${platform} post for \${business.name}:\`, insertError);
totalFailed++;
} else {
console.log(\`[CRON] ✓ Saved \${platform} post for \${business.name}\`);
totalGenerated++;
}

// Small delay between API calls to avoid rate limits
await new Promise(resolve => setTimeout(resolve, 500));

} catch (err) {
console.error(\`[CRON] Error generating \${platform} for \${business.name}:\`, err);
totalFailed++;
}
}

results.push({ business: business.name, generated: 3, failed: totalFailed });
}

console.log(\`[CRON] Done. Generated: \${totalGenerated}, Failed: \${totalFailed}\`);

return NextResponse.json({
message: 'Daily content generation complete',
totalBusinesses: businesses.length,
totalGenerated,
totalFailed,
results,
timestamp: new Date().toISOString(),
});

} catch (error) {
console.error('[CRON] Fatal error:', error);
return NextResponse.json({ error: 'Cron job failed' }, { status: 500 });
}
}
`;

fs.mkdirSync('src/app/api/cron', { recursive: true });
fs.writeFileSync('src/app/api/cron/daily-content/route.ts', content);
console.log('Done!');

