// @ts-nocheck
export async function POST(request) {
  try {
    const { messages, systemPrompt } = await request.json()
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1000,
        system: systemPrompt,
        messages: messages
      })
    })
    const data = await response.json()
    if (!response.ok) return Response.json({ success: false, error: JSON.stringify(data) }, { status: 500 })
    const reply = data.content?.[0]?.text || "No response generated."
    return Response.json({ success: true, reply })
  } catch (e) {
    return Response.json({ success: false, error: e.message }, { status: 500 })
  }
}
