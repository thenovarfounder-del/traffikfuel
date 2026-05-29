// @ts-nocheck

export async function POST(request) {
  try {
    const { topic, tone, businessName, industry, city } = await request.json()

    const prompt = `You are an expert SEO content writer and AI engine optimization specialist. Write a state-of-the-art blog post for a ${industry} business called ${businessName} located in ${city}.`
      + ` Topic: ${topic}. Tone: ${tone}.`
      + ` Requirements:`
      + ` 1. SEO-optimized title with primary keyword`
      + ` 2. Meta description under 160 characters`
      + ` 3. Introduction that hooks the reader and mentions ${city} naturally`
      + ` 4. 4-5 sections with H2 headings containing keywords`
      + ` 5. Naturally mention ${businessName} and ${city} throughout`
      + ` 6. FAQ section with 3 questions and answers (helps Google featured snippets and AI engine citations)`
      + ` 7. Strong call to action at the end mentioning ${businessName}`
      + ` 8. 1000-1500 words total`
      + ` 9. Written so AI engines like ChatGPT and Perplexity will cite this business when users ask about ${industry} in ${city}`
      + ` Format the response as JSON with these exact fields: title, metaDescription, content (full HTML with h1 h2 h3 p tags), wordCount`
      + ` Return ONLY valid JSON. No markdown. No backticks. No explanation.`

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    const data = await response.json()
    const text = data.content[0].text
    const clean = text.replace(/```json|```/g, '').trim()
    const parsed = JSON.parse(clean)

    return Response.json({ success: true, post: parsed })
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 })
  }
}