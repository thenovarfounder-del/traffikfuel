// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const HEYGEN_API_KEY = process.env.HEYGEN_API_KEY

export async function GET(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { searchParams } = new URL(req.url)
    const videoId = searchParams.get('videoId')
    const scriptId = searchParams.get('scriptId')

    if (!videoId || !scriptId) {
      return NextResponse.json({ error: 'Missing videoId or scriptId' }, { status: 400 })
    }

    const statusRes = await fetch('https://api.heygen.com/v1/video_status.get?video_id=' + videoId, {
      headers: { 'X-Api-Key': HEYGEN_API_KEY! }
    })

    const statusData = await statusRes.json()
    console.log('HeyGen status response:', JSON.stringify(statusData))

    const status = statusData?.data?.status
    const videoUrl = statusData?.data?.video_url

    if (status === 'completed' && videoUrl) {
      await supabase
        .from('video_scripts')
        .update({ video_url: videoUrl, video_status: 'done', status: 'done' })
        .eq('id', scriptId)

      return NextResponse.json({ status: 'done', videoUrl })
    }

    if (status === 'failed') {
      await supabase
        .from('video_scripts')
        .update({ video_status: 'failed', status: 'failed' })
        .eq('id', scriptId)

      return NextResponse.json({ status: 'failed' })
    }

    return NextResponse.json({ status: 'rendering' })

  } catch (err: any) {
    console.error('Status check error:', err)
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 })
  }
}
