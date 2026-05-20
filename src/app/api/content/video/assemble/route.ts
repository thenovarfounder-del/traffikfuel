// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const HEYGEN_API_KEY = process.env.HEYGEN_API_KEY
const AVATAR_ID = 'Tyler-insuit-20220721'
const VOICE_ID = 'c4a8ceb7a2954500bc047fb092bcff3f'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { scriptId } = await req.json()

    const { data: script, error } = await supabase
      .from('video_scripts')
      .select('*')
      .eq('id', scriptId)
      .single()

    if (error || !script) {
      return NextResponse.json({ error: 'Script not found' }, { status: 404 })
    }

    const scriptText = script.hook + ' ' + script.body + ' ' + script.cta

    const heygenPayload = {
      video_inputs: [
        {
          character: {
            type: 'avatar',
            avatar_id: AVATAR_ID,
            avatar_style: 'normal'
          },
          voice: {
            type: 'text',
            input_text: scriptText,
            voice_id: VOICE_ID
          }
        }
      ],
      dimension: { width: 1280, height: 720 }
    }

    console.log('HeyGen payload:', JSON.stringify(heygenPayload, null, 2))

    const heygenRes = await fetch('https://api.heygen.com/v2/video/generate', {
      method: 'POST',
      headers: {
        'X-Api-Key': HEYGEN_API_KEY!,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(heygenPayload)
    })

    const heygenData = await heygenRes.json()

    console.log('HeyGen RAW RESPONSE STATUS:', heygenRes.status)
    console.log('HeyGen RAW RESPONSE BODY:', JSON.stringify(heygenData, null, 2))

    const newVideoId = heygenData?.data?.video_id || heygenData?.video_id || null

    if (!newVideoId) {
      console.error('No video_id found in HeyGen response:', JSON.stringify(heygenData))
      return NextResponse.json({ error: 'No video ID returned from HeyGen. Check Vercel logs.' }, { status: 500 })
    }

    await supabase
      .from('video_scripts')
      .update({ video_url: null, video_status: 'rendering', status: 'assembling' })
      .eq('id', scriptId)

    return NextResponse.json({ status: 'rendering', videoId: newVideoId })

  } catch (err: any) {
    console.error('Video assemble error:', err)
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 })
  }
}

export async function GET(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { searchParams } = new URL(req.url)
    const videoId = searchParams.get('renderId')
    const scriptId = searchParams.get('scriptId')

    if (!videoId || !scriptId) {
      return NextResponse.json({ error: 'Missing videoId or scriptId' }, { status: 400 })
    }

    const statusRes = await fetch('https://api.heygen.com/v1/video_status.get?video_id=' + videoId, {
      headers: { 'X-Api-Key': HEYGEN_API_KEY! }
    })

    const statusData = await statusRes.json()
    console.log('HeyGen status response:', JSON.stringify(statusData, null, 2))

    const videoStatus = statusData?.data?.status
    const videoUrl = statusData?.data?.video_url

    if (videoStatus === 'completed' && videoUrl) {
      await supabase
        .from('video_scripts')
        .update({ video_url: videoUrl, video_status: 'done', status: 'done' })
        .eq('id', scriptId)

      return NextResponse.json({ status: 'done', videoUrl })
    }

    if (videoStatus === 'failed') {
      return NextResponse.json({ status: 'failed' })
    }

    return NextResponse.json({ status: 'rendering' })

  } catch (err: any) {
    console.error('Video status error:', err)
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 })
  }
}
