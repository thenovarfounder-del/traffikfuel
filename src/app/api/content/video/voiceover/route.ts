// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
  try {
    const { scriptId, scriptText } = await req.json()
    if (!scriptId || !scriptText) {
      return NextResponse.json({ error: 'Missing scriptId or scriptText' }, { status: 400 })
    }
    await supabase.from('video_scripts').update({ audio_status: 'generating' }).eq('id', scriptId)
    const voiceId = '21m00Tcm4TlvDq8ikWAM'
    const elevenLabsResponse = await fetch(
      'https://api.elevenlabs.io/v1/text-to-speech/' + voiceId,
      {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': process.env.ELEVENLABS_API_KEY!
        },
        body: JSON.stringify({
          text: scriptText,
          model_id: 'eleven_monolingual_v1',
          voice_settings: { stability: 0.5, similarity_boost: 0.5 }
        })
      }
    )
    if (!elevenLabsResponse.ok) {
      const errText = await elevenLabsResponse.text()
      throw new Error('ElevenLabs error: ' + errText)
    }
    const audioBuffer = await elevenLabsResponse.arrayBuffer()
    const audioBase64 = Buffer.from(audioBuffer).toString('base64')
    const fileName = 'voiceover-' + scriptId + '-' + Date.now() + '.mp3'
    const { error: uploadError } = await supabase.storage
      .from('video-audio')
      .upload(fileName, Buffer.from(audioBuffer), { contentType: 'audio/mpeg', upsert: true })
    if (uploadError) throw new Error('Upload error: ' + uploadError.message)
    const { data: urlData } = supabase.storage.from('video-audio').getPublicUrl(fileName)
    const audioUrl = urlData.publicUrl
    await supabase.from('video_scripts').update({ audio_url: audioUrl, audio_status: 'done' }).eq('id', scriptId)
    return NextResponse.json({ audioUrl })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
