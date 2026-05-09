export const maxDuration = 60

import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const { businessId, brain } = await req.json()

  if (!businessId || !brain) {
    return NextResponse.json({ error: 'Missing data' }, { status: 400 })
  }

  const { error } = await supabase
    .from('business_profiles')
    .update({
      business_name: brain.business_name,
      description: brain.description,
      services: brain.services,
      location: brain.location,
      target_audience: brain.target_audience,
      tone: brain.tone,
      keywords: brain.keywords,
      updated_at: new Date().toISOString(),
    })
    .eq('id', businessId)

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}