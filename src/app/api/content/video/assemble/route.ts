// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const HEYGEN_API_KEY = process.env.HEYGEN_API_KEY
const AVATAR_ID = 'nik_blue_expressive_20240910'
const VOICE_ID = 'b966c31caf124c2a99f19ff1479c964f'

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

    if (script.video_status === 'rendering' || script.video_status === 'done') {
      return NextResponse.json({ error: 'Video already processing or complete' }, { status: 400 })
    }

    const scriptText = script.hook + ' ' + script.body + ' ' + script.cta

    const heygenRes = await fetch('https://api.heygen.com/v2/video/generate', {
      method: 'POST',
      headers: {
        'X-Api-Key': HEYGEN_API_KEY!,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
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
      })
    })

    const heygenData = await heygenRes.json()
    console.log('HeyGen generate response:', JSON.stringify(heygenData))

    const videoId = heygenData?.data?.video_id

    if (!videoId) {
      return NextResponse.json({ error: 'No video ID from HeyGen' }, { status: 500 })
    }

    await supabase
      .from('video_scripts')
      .update({ video_status: 'rendering', status: 'assembling' })
      .eq('id', scriptId)

    return NextResponse.json({ videoId })

  } catch (err: any) {
    console.error('Assemble error:', err)
    return NextResponse.json({ error: err.message || 'Unknown error' }, { status: 500 })
  }
}
