// @ts-nocheck
import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import Anthropic from "@anthropic-ai/sdk"

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  const anthropic = new Anthropic()

  try {
    const { userId, businessId, topic } = await req.json()

    const { data: profile } = await supabase
      .from("business_profiles")
      .select("business_name")
      .eq("user_id", userId)
      .single()

    const businessName = profile?.business_name || "the business"

    const prompt = "You are an SEO blog writer. Write a complete blog post for " + businessName + " about: " + topic + ". Return your response in this exact JSON format with no extra text before or after: {\"title\": \"your title here\", \"content\": \"your full blog post content here\"}. The content should be 600-800 words. Use plain text only, no markdown."

    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 2000,
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

    return NextResponse.json(saved)

  } catch (error) {
    console.error("Blog generation error:", error)
    return NextResponse.json({ error: "Failed to generate blog post" }, { status: 500 })
  }
}
