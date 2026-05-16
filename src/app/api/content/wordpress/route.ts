import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { siteUrl, username, appPassword, title, content, status } = await request.json()

    if (!siteUrl || !username || !appPassword || !title || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: siteUrl, username, appPassword, title, content' },
        { status: 400 }
      )
    }

    const cleanSiteUrl = siteUrl.replace(/\/$/, '')
    const endpoint = `${cleanSiteUrl}/wp-json/wp/v2/posts`

    const credentials = Buffer.from(`${username}:${appPassword}`).toString('base64')

    const wpResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        content: content,
        status: status || 'draft',
      }),
    })

    if (!wpResponse.ok) {
      const errorData = await wpResponse.json()
      return NextResponse.json(
        { error: errorData.message || 'WordPress API error', code: errorData.code },
        { status: wpResponse.status }
      )
    }

    const wpPost = await wpResponse.json()

    return NextResponse.json({
      success: true,
      postId: wpPost.id,
      postUrl: wpPost.link,
      editUrl: `${cleanSiteUrl}/wp-admin/post.php?post=${wpPost.id}&action=edit`,
    })
  } catch (error) {
    console.error('WordPress publish error:', error)
    return NextResponse.json(
      { error: 'Failed to publish to WordPress' },
      { status: 500 }
    )
  }
}