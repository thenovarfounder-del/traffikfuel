const fs = require('fs')
const path = require('path')

// FILE 1: Weekly email sender
const weeklyDir = 'C:\\Users\\randy\\traffikfuel\\src\\app\\api\\cron\\weekly'
if (!fs.existsSync(weeklyDir)) fs.mkdirSync(weeklyDir, { recursive: true })

const weeklyRoute = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)
const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(req) {
  try {
    const authHeader = req.headers.get('authorization')
    if (authHeader !== \`Bearer \${process.env.CRON_SECRET}\`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get all users with a business profile and email
    const { data: profiles, error } = await supabase
      .from('business_profiles')
      .select('user_id, business_name, plan')

    if (error || !profiles || profiles.length === 0) {
      return NextResponse.json({ message: 'No profiles found' })
    }

    const results = []

    for (const profile of profiles) {
      try {
        // Get user email from auth
        const { data: userData } = await supabase.auth.admin.getUserById(profile.user_id)
        const email = userData?.user?.email
        if (!email) continue

        // Get content published in last 7 days
        const sevenDaysAgo = new Date()
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
        const since = sevenDaysAgo.toISOString()

        const { count: blogCount } = await supabase
          .from('blog_posts')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', profile.user_id)
          .gte('created_at', since)

        const { count: socialCount } = await supabase
          .from('social_posts')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', profile.user_id)
          .gte('created_at', since)

        const { count: reviewCount } = await supabase
          .from('review_requests')
          .select('*', { count: 'exact', head: true })
          .eq('user_id', profile.user_id)
          .gte('created_at', since)

        const blogs = blogCount || 0
        const social = socialCount || 0
        const reviews = reviewCount || 0
        const total = blogs + social + reviews
        const businessName = profile.business_name || 'Your Business'
        const plan = profile.plan || 'free'

        const html = \`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Your Weekly Marketing Report</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;">

      <!-- Header -->
      <tr>
        <td style="background:#111111;padding:32px 40px;text-align:center;">
          <p style="margin:0;font-family:Georgia,serif;font-size:28px;font-weight:700;color:#ffffff;">
            Traffik<span style="color:#E8610A;">ora</span>
          </p>
          <p style="margin:8px 0 0;font-size:13px;color:#888888;letter-spacing:2px;text-transform:uppercase;">Weekly Performance Report</p>
        </td>
      </tr>

      <!-- Greeting -->
      <tr>
        <td style="padding:36px 40px 24px;">
          <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#111111;font-family:Georgia,serif;">
            Good morning! Here\u2019s your week.
          </p>
          <p style="margin:0;font-size:15px;color:#555555;line-height:1.7;">
            While you were running <strong>\${businessName}</strong>, Traffikora was working behind the scenes. Here\u2019s everything your marketing automation did for you this week.
          </p>
        </td>
      </tr>

      <!-- Stats Row -->
      <tr>
        <td style="padding:0 40px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="33%" style="text-align:center;padding:20px 10px;background:#f9f9f9;border-radius:8px;border:1px solid #eeeeee;">
                <p style="margin:0;font-size:36px;font-weight:700;color:#E8610A;font-family:Georgia,serif;">\${blogs}</p>
                <p style="margin:6px 0 0;font-size:12px;color:#777777;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Blog Posts</p>
              </td>
              <td width="4%"></td>
              <td width="33%" style="text-align:center;padding:20px 10px;background:#f9f9f9;border-radius:8px;border:1px solid #eeeeee;">
                <p style="margin:0;font-size:36px;font-weight:700;color:#E8610A;font-family:Georgia,serif;">\${social}</p>
                <p style="margin:6px 0 0;font-size:12px;color:#777777;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Social Posts</p>
              </td>
              <td width="4%"></td>
              <td width="33%" style="text-align:center;padding:20px 10px;background:#f9f9f9;border-radius:8px;border:1px solid #eeeeee;">
                <p style="margin:0;font-size:36px;font-weight:700;color:#E8610A;font-family:Georgia,serif;">\${reviews}</p>
                <p style="margin:6px 0 0;font-size:12px;color:#777777;font-weight:600;text-transform:uppercase;letter-spacing:1px;">Review Requests</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Total Banner -->
      <tr>
        <td style="padding:0 40px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background:#111111;border-radius:8px;padding:20px 24px;">
                <p style="margin:0;font-size:15px;color:#ffffff;line-height:1.6;">
                  \u2728 <strong style="color:#E8610A;">\${total} marketing actions</strong> were taken automatically on your behalf this week \u2014 without you lifting a finger.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- What This Means -->
      <tr>
        <td style="padding:0 40px 32px;">
          <p style="margin:0 0 16px;font-size:17px;font-weight:700;color:#111111;font-family:Georgia,serif;">What this means for \${businessName}</p>
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                <p style="margin:0;font-size:14px;color:#333333;line-height:1.6;">
                  <span style="color:#E8610A;font-weight:700;">\u2713</span>&nbsp;&nbsp;Google is indexing fresh content and your rankings are building
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                <p style="margin:0;font-size:14px;color:#333333;line-height:1.6;">
                  <span style="color:#E8610A;font-weight:700;">\u2713</span>&nbsp;&nbsp;AI engines like ChatGPT and Gemini are seeing more of your content
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                <p style="margin:0;font-size:14px;color:#333333;line-height:1.6;">
                  <span style="color:#E8610A;font-weight:700;">\u2713</span>&nbsp;&nbsp;Your social presence is growing without any manual effort
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:12px 0;">
                <p style="margin:0;font-size:14px;color:#333333;line-height:1.6;">
                  <span style="color:#E8610A;font-weight:700;">\u2713</span>&nbsp;&nbsp;Every week that passes, your competitors fall further behind
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      \${plan === 'free' ? \`
      <!-- Upgrade CTA for free users -->
      <tr>
        <td style="padding:0 40px 32px;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="background:#fff9f5;border:2px solid #E8610A;border-radius:8px;padding:24px;">
                <p style="margin:0 0 8px;font-size:16px;font-weight:700;color:#111111;font-family:Georgia,serif;">Unlock the full power of Traffikora</p>
                <p style="margin:0 0 16px;font-size:14px;color:#555555;line-height:1.6;">You\u2019re on the free plan. Upgrade to Starter for unlimited blog posts, social content, and full automation starting at $47/mo.</p>
                <a href="https://www.traffikora.com/pricing" style="display:inline-block;background:#E8610A;color:#ffffff;padding:12px 28px;border-radius:6px;font-size:14px;font-weight:700;text-decoration:none;">Upgrade Now \u2192</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>\` : \`
      <!-- Dashboard CTA for paid users -->
      <tr>
        <td style="padding:0 40px 32px;text-align:center;">
          <a href="https://www.traffikora.com/dashboard" style="display:inline-block;background:#111111;color:#ffffff;padding:14px 36px;border-radius:8px;font-size:15px;font-weight:700;text-decoration:none;">View Full Dashboard \u2192</a>
        </td>
      </tr>\`}

      <!-- Footer -->
      <tr>
        <td style="background:#f9f9f9;padding:24px 40px;border-top:1px solid #eeeeee;">
          <p style="margin:0 0 4px;font-size:12px;color:#999999;text-align:center;">
            Traffikora \u2014 Set it once. It markets forever.
          </p>
          <p style="margin:0;font-size:12px;color:#bbbbbb;text-align:center;">
            <a href="https://www.traffikora.com/dashboard/settings" style="color:#bbbbbb;">Unsubscribe</a> &nbsp;&middot;&nbsp; support@traffikora.com
          </p>
        </td>
      </tr>

    </table>
  </td></tr>
</table>
</body>
</html>\`

        await resend.emails.send({
          from: 'Traffikora <support@traffikora.com>',
          to: email,
          subject: \`\u{1F4CA} Your weekly marketing report \u2014 \${total} actions taken for \${businessName}\`,
          html
        })

        results.push({ user_id: profile.user_id, email, sent: true, total })
      } catch (err) {
        results.push({ user_id: profile.user_id, error: err.message })
      }
    }

    return NextResponse.json({ success: true, sent: results.filter(r => r.sent).length, results })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
`

fs.writeFileSync(path.join(weeklyDir, 'route.ts'), weeklyRoute)
console.log('SUCCESS - Created: src/app/api/cron/weekly/route.ts')