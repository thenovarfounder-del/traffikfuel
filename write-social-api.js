const fs = require('fs');

const content = `import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { supabase } from '@/lib/supabase';

const client = new Anthropic({
apiKey: process.env.ANTHROPIC_API_KEY,
});

// ─────────────────────────────────────────────
// STEP 1 — AUTO STRATEGY ENGINE
// Runs ONLY in Auto mode. Analyzes business brain
// and self-generates the best content angle,
// target keywords, and emotional hook with zero
// input from the user.
// ─────────────────────────────────────────────
async function generateAutoStrategy(businessContext: string, platform: string): Promise<string> {
const message = await client.messages.create({
model: 'claude-haiku-4-5-20251001',
max_tokens: 500,
system: \`You are a senior content strategist and SEO expert. You read a business profile and independently decide the single best content angle for a social media post today. You think like a $500/hr strategist. You respond in plain text only — no bullet points, no headers, no labels. Just write the brief as flowing strategy notes.\`,
messages: [{
role: 'user',
content: \`Analyze this business and create a complete content strategy brief for a \${platform} post. Do NOT ask for any input — decide everything yourself based on the business data below.

BUSINESS CONTEXT:
\${businessContext}

Decide and write out:
- The single most powerful content angle for this business on \${platform} today (choose from: pain point, transformation story, myth-bust, insider insight, results/social proof, urgent trend, or common mistake)
- 6 to 8 specific high-value keyword phrases this exact audience searches for — be industry-specific, not generic
- The core emotion or desire to trigger (fear of missing out, aspiration, frustration, curiosity, urgency, trust)
- One very specific topic, story, or insight to build the post around — unique to this business, not generic filler
- The ideal tone and voice for this platform and audience
- One powerful hook angle for the opening line

Think like an expert. Be decisive. Be specific.\`
}],
});

return message.content[0].type === 'text' ? message.content[0].text : '';
}

// ─────────────────────────────────────────────
// STEP 2 — CONTENT ENGINE
// Writes platform-optimized content using the
// strategy. Auto mode = fully AI-directed.
// Manual mode = user direction + AI keywords.
// ─────────────────────────────────────────────
async function generateContent(
businessContext: string,
platform: string,
strategy: string,
customPrompt?: string
): Promise<string> {

const directionBlock = customPrompt
? \`USER DIRECTION: \${customPrompt}

USE THIS STRATEGY FOR KEYWORDS AND OPTIMIZATION (follow keyword and tone guidance):
\${strategy}\`
: \`AUTO STRATEGY — follow every part of this exactly:
\${strategy}\`;

let platformPrompt = '';

if (platform === 'instagram') {
platformPrompt = \`You are an elite Instagram content strategist and SEO copywriter.

BUSINESS CONTEXT:
\${businessContext}

\${directionBlock}

INSTAGRAM RULES — MANDATORY:
- First line (under 125 characters): scroll-stopping hook — bold claim, shocking truth, or direct question. This is what shows before "See More" — make it impossible to scroll past.
- Lines 2-4: expand the hook, build tension or curiosity
- Body: short punchy sentences, single line breaks between each — NEVER a block of text longer than 2 lines
- Weave in 3-4 keyword phrases from the strategy naturally — never stuffed
- Use 3-5 emojis strategically: one in the hook, one or two mid-body, one before the CTA
- Tell one micro-story or share one specific insight — no generic advice
- Build emotional momentum toward the CTA
- Total caption length: 150-200 words (this is the data-backed engagement sweet spot)
- End body with one blank line before CTA

You MUST respond in EXACTLY this format with no extra text before or after:

POST:
[Full Instagram caption — 150 to 200 words, short lines, strategic emojis, keywords woven in]

CTA:
[One punchy line — urgency or curiosity driven, never "contact us" or "DM us"]

HASHTAGS:
[Exactly 9 hashtags total — 3 broad niche with high volume, 4 mid-range niche-specific, 2 local or brand-specific — all starting with #, space separated — research shows 5-10 outperforms 20-30]\`;

} else if (platform === 'facebook') {
platformPrompt = \`You are an elite Facebook content strategist and SEO copywriter.

BUSINESS CONTEXT:
\${businessContext}

\${directionBlock}

FACEBOOK RULES — MANDATORY:
- First 2 lines (under 130 characters): hook before the mobile "See More" cutoff — bold statement or direct question targeting the reader's biggest pain or desire
- Write like a trusted advisor talking to a client — warm, authoritative, human — NOT a brand announcement
- Paragraph breaks every 2-3 sentences — create white space for mobile readers
- Include ONE specific data point, result, or real example that builds instant credibility
- Weave in 4-5 keyword phrases from the strategy — integrated naturally into sentences
- Build to a thought-provoking question at the end that invites comments (comments are weighted heavily in the algorithm)
- Total post length: 40-80 words for the core message (data shows this gets 66% higher engagement) — be punchy and clear, not padded
- NO external links in the post body (Facebook penalizes reach by ~60% for external links)
- 0-2 emojis max — professional but human

You MUST respond in EXACTLY this format with no extra text before or after:

POST:
[Full Facebook post — 40 to 80 words, punchy, value-driven, ends with an engagement question]

CTA:
[One direct action line — consultation, call, visit, or resource — no external link]

HASHTAGS:
[Exactly 3 hashtags — relevant and searchable for this industry — all starting with #, space separated]\`;

} else if (platform === 'linkedin') {
platformPrompt = \`You are an elite LinkedIn content strategist and B2B SEO copywriter.

BUSINESS CONTEXT:
\${businessContext}

\${directionBlock}

LINKEDIN RULES — MANDATORY:
- First line (under 210 characters): single sentence that challenges a belief, reveals a counterintuitive truth, or states something a decision-maker cannot scroll past — this is the ONLY thing 60-70% of readers will see
- Structure: Bold hook → 2-3 lines of context → Core insight or story (4-6 lines) → Key takeaway (2-3 lines) → Engagement question → CTA
- Write in first person — position the author as the expert voice in the industry
- Include ONE concrete result, transformation, or data point — specificity = credibility
- Weave in 4-6 keyword phrases from the strategy — into insights and sentences, never listed
- Single-sentence paragraphs with blank lines between — LinkedIn rewards white space and readability
- No external links in the post body (LinkedIn penalizes reach by ~60%)
- Total post length: 1,300-1,900 characters (data-backed sweet spot — under 500 chars is flagged as low-effort by the algorithm)
- Close with a specific question that makes professionals want to share their own view
- 0-2 emojis max — only if they genuinely clarify a point

You MUST respond in EXACTLY this format with no extra text before or after:

POST:
[Full LinkedIn post — 1,300 to 1,900 characters, single-sentence paragraphs, expert voice, no external links]

CTA:
[One professional action line — conversation, consultation, or connection — no link]

HASHTAGS:
[Exactly 3-5 hashtags — 2 broad industry, 2 niche professional, 1 topic-specific — all starting with #, space separated — LinkedIn algorithm now uses topic modeling, not hashtags, for distribution so keep this minimal]\`;
}

const message = await client.messages.create({
model: 'claude-haiku-4-5-20251001',
max_tokens: 1200,
system: 'You are an elite social media strategist and SEO copywriter. You write content that ranks, converts, and builds real authority. You ALWAYS respond using the exact labeled format requested: POST:, CTA:, and HASHTAGS:. You NEVER skip a section. You follow word count and character count instructions precisely. Every word earns its place.',
messages: [{ role: 'user', content: platformPrompt }],
});

return message.content[0].type === 'text' ? message.content[0].text : '';
}

// ─────────────────────────────────────────────
// MAIN ROUTE HANDLER
// ─────────────────────────────────────────────
export async function POST(request: NextRequest) {
try {
const { businessId, platform, mode, customPrompt } = await request.json();

const { data: business, error } = await supabase
.from('business_profiles')
.select('*')
.eq('id', businessId)
.single();

if (error || !business) {
return NextResponse.json({ error: 'Business not found' }, { status: 404 });
}

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

// AUTO MODE: Claude decides everything — no user input used
// MANUAL MODE: User direction is used, but strategy still runs for keyword optimization
const strategy = await generateAutoStrategy(businessContext, platform);
const responseText = await generateContent(
businessContext,
platform,
strategy,
mode === 'manual' ? customPrompt : undefined // Auto = undefined = pure AI direction
);

// Parse the three sections
const postMatch = responseText.match(/POST:\\s*([\\s\\S]*?)(?=CTA:|$)/i);
const ctaMatch = responseText.match(/CTA:\\s*([\\s\\S]*?)(?=HASHTAGS:|$)/i);
const hashtagsMatch = responseText.match(/HASHTAGS:\\s*([\\s\\S]*?)$/i);

const post = postMatch ? postMatch[1].trim() : responseText;
const cta = ctaMatch ? ctaMatch[1].trim() : '';
const hashtags = hashtagsMatch ? hashtagsMatch[1].trim() : '';

return NextResponse.json({ post, cta, hashtags, strategy });

} catch (error) {
console.error('Social API error:', error);
return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
}
}
`;

fs.writeFileSync('src/app/api/content/social/route.ts', content);
console.log('Done!');

