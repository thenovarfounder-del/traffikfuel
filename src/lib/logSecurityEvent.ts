import { supabase } from "@/lib/supabase"

export async function logSecurityEvent({ user_id, event_type, ip_address, user_agent, metadata }: { user_id: string; event_type: string; ip_address?: string; user_agent?: string; metadata?: Record<string, unknown> }): Promise<void> {
  try {
    await supabase.from("security_events").insert({ user_id, event_type, ip_address: ip_address ?? null, user_agent: user_agent ?? null, metadata: metadata ?? null, created_at: new Date().toISOString() })
  } catch (err) {
    console.error("[logSecurityEvent] Failed to log:", err)
  }
}
