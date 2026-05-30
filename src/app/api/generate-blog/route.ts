// @ts-nocheck

export async function POST(request) {
  try {
    const { topic, tone, businessName, industry, city } = await request.json()

    const prompt = 'Write a blog post for a ' + industry + ' business called ' + businessName + ' in ' + city + '. Topic: ' + topic + '. Tone: ' + tone + '.'
      + ' Include: SEO title, meta description under 160 chars, intro mentioning ' + city + ', 4 H2 sections with keywords, FAQ with 3 questions, strong CTA mentioning ' + businessName + '.'
      + ' Optimize so ChatGPT and Perplexity cite this business for ' + industry + ' in ' + city + '.'
      + ' Also generate 6-8 relevant keyword tags for this post.'
      + ' Return ONLY a JSON object with fields: title, metaDescription, content (full HTML with proper spacing between all headings and paragraphs), wordCount, tags (array of strings).'
      + ' No markdown. No backticks. No explanation.'

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 4000,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    const data = await response.json()
    if (!response.ok) return Response.json({ success: false, error: JSON.stringify(data) }, { status: 500 })
    if (!data.content || !data.content[0]) return Response.json({ success: false, error: 'No content: ' + JSON.stringify(data) }, { status: 500 })

    const text = data.content[0].text
    const clean = text.replace(/```json|```/g, '').trim()
    const parsed = JSON.parse(clean)
    return Response.json({ success: true, post: parsed })
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 })
  }
}