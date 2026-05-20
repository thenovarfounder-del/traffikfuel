// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const HEYGEN_AVATAR_ID = 'Angela-inblackskirt-20220820'
const HEYGEN_VOICE_ID = '2d5b0e6cf36f460aa7fc47e3eee4ba54'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const { scriptId, videoId } = await req.json()

    // POLL MODE
    if (videoId) {
      const statusRes = await fetch('https://api.heygen.com/v1/video_status.get?video_id=' + videoId, {
        headers: {
          'X-Api-Key': process.env.HEYGEN_API_KEY!,
          'Accept': 'application/json'
        }
      })

      if (!statusRes.ok) {
        return NextResponse.json({ error: 'Failed to check HeyGen status' }, { status: 500 })
      }

      const statusData = await statusRes.json()
      const video = statusData.data

      if (video.status === 'completed') {
        const videoUrl = video.video_url
        if (scriptId) {
          await supabase
            .from('video_scripts')
            .update({ video_url: videoUrl, video_status: 'done' })
            .eq('id', scriptId)
        }
        return NextResponse.json({ success: true, videoUrl, status: 'succeeded' })
      }

      if (video.status === 'failed') {
        return NextResponse.json({ error: 'HeyGen render failed: ' + (video.error || 'unknown'), status: 'failed' }, { status: 500 })
      }

      return NextResponse.json({ status: video.status, videoId })
    }

    // START MODE
    if (!scriptId) {
      return NextResponse.json({ error: 'scriptId is required' }, { status: 400 })
    }

    const { data: script, error: scriptError } = await supabase
      .from('video_scripts')
      .select('*')
      .eq('id', scriptId)
      .single()

    if (scriptError || !script) {
      return NextResponse.json({ error: 'Script not found' }, { status: 404 })
    }

    const scriptText = (script.hook || '') + ' ' + (script.body || '') + ' ' + (script.cta || '')

    const heygenRes = await fetch('https://api.heygen.com/v2/video/generate', {
      method: 'POST',
      headers: {
        'X-Api-Key': process.env.HEYGEN_API_KEY!,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        video_inputs: [
          {
            character: {
              type: 'avatar',
              avatar_id: HEYGEN_AVATAR_ID,
              avatar_style: 'normal'
            },
            voice: {
              type: 'text',
              input_text: scriptText,
              voice_id: HEYGEN_VOICE_ID,
              speed: 1.0
            },
            background: {
              type: 'color',
              value: '#f0f4ff'
            }
          }
        ],
        dimension: {
          width: 1280,
          height: 720
        },
        aspect_ratio: '16:9',
        caption: false
      })
    })

    if (!heygenRes.ok) {
      const errText = await heygenRes.text()
      return NextResponse.json({ error: 'HeyGen API error: ' + errText }, { status: 500 })
    }

    const heygenData = await heygenRes.json()
    const newVideoId = heygenData.data?.video_id

    if (!newVideoId) {
      return NextResponse.json({ error: 'No video_id returned from HeyGen: ' + JSON.stringify(heygenData) }, { status: 500 })
    }

    return NextResponse.json({ status: 'rendering', videoId: newVideoId })

  } catch (err: any) {
    console.error('Video assemble error:', err)
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 })
  }
}
