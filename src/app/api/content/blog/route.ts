// @ts-nocheck
import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import Anthropic from "@anthropic-ai/sdk"
export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
  const anthropic = new Anthropic()
  try {
    const { userId, businessId, topic } = await req.json()
    const { data: profile } = await supabase
      .from("business_profiles")
      .select("business_name, brain")
      .eq("user_id", userId)
      .single()
    const businessName = profile?.business_name || "the business"
    const brain = profile?.brain || {}
    const industry = brain.industry || brain.businessType || ""
    const city = brain.city || brain.location || ""
    const website = brain.website || brain.websiteUrl || ""
    const services = brain.services ? (Array.isArray(brain.services) ? brain.services.join(", ") : brain.services) : ""
    const tone = brain.tone || brain.brandVoice || "professional"
    const targetAudience = brain.targetAudience || brain.audience || "local customers"
    const brainContext = Object.keys(brain).length > 0
      ? `Business context from brain: Industry: ${industry}. Location: ${city}. Services: ${services}. Target audience: ${targetAudience}. Brand tone: ${tone}. Website: ${website}.`
      : ""
    const prompt = "You are an SEO blog writer. Write a complete blog post for " + businessName + " about: " + topic + ". " + brainContext + " Return your response in this exact JSON format with no extra text before or after: {\"title\": \"your title here\", \"content\": \"your full blog post content here\"}. The content should be 800-1000 words. Mention the business name and location naturally. Include local SEO keywords. Use plain text only, no markdown."
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 2500,
      messages: [{ role: "user", content: prompt }]
    })
    const rawText = response.content[0].type === "text" ? response.content[0].text : ""
    let parsed
    try {
      const jsonMatch = rawText.match(/\{[\s\S]*\}/)
      if (!jsonMatch) throw new Error("No JSON found")
      parsed = JSON.parse(jsonMatch[0])
    } catch (e) {
      return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 })
    }
    const { data: saved, error: saveError } = await supabase
      .from("blog_posts")
      .insert({
        user_id: userId,
        business_id: businessId,
        title: parsed.title,
        content: parsed.content,
        status: "draft"
      })
      .select()
      .single()
    if (saveError) {
      return NextResponse.json({ error: "Failed to save post" }, { status: 500 })
    }

    // Track blog generation for free tier limit
    await supabase.from("blog_generations").insert({ user_id: userId })

    return NextResponse.json(saved)
  } catch (error) {
    console.error("Blog generation error:", error)
    return NextResponse.json({ error: "Failed to generate blog post" }, { status: 500 })
  }
}
