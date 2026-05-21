// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(req: NextRequest) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const user_id = formData.get('user_id') as string
    const business_id = formData.get('business_id') as string
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const platform = formData.get('platform') as string

    if (!file || !user_id) {
      return NextResponse.json({ error: 'Missing file or user_id' }, { status: 400 })
    }

    const fileExt = file.name.split('.').pop()
    const fileName = user_id + '/' + Date.now() + '.' + fileExt
    const arrayBuffer = await file.arrayBuffer()
    const buffer = new Uint8Array(arrayBuffer)

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from('client-videos')
      .upload(fileName, buffer, {
        contentType: file.type,
        upsert: false
      })

    if (uploadError) {
      return NextResponse.json({ error: uploadError.message }, { status: 500 })
    }

    const { data: urlData } = supabase.storage
      .from('client-videos')
      .getPublicUrl(fileName)

    const { data: record, error: dbError } = await supabase
      .from('client_videos')
      .insert({
        user_id,
        business_id: business_id || null,
        title,
        description,
        platform,
        video_url: urlData.publicUrl,
        enabled: true
      })
      .select()
      .single()

    if (dbError) {
      return NextResponse.json({ error: dbError.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, video: record })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
