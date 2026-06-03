// @ts-nocheck
'use client'
// ============================================================
// TRAFFIKORA PLAN GATE COMPONENT
// Wraps any feature. Shows upgrade overlay if user lacks access.
// Usage:
//   <PlanGate userPlan={plan} feature="llmEngine">
//     <YourFeature />
//   </PlanGate>
// ============================================================
import { canAccess, PLAN_META, PLAN_FEATURES_DISPLAY, FEATURE_GATES } from '@/lib/plans'

export default function PlanGate({ userPlan, feature, children, mode = 'overlay' }) {
  const allowed = canAccess(userPlan, feature)
  if (allowed) return children

  const required = FEATURE_GATES[feature] ?? 'starter'
  const meta = PLAN_META[required]
  const features = PLAN_FEATURES_DISPLAY[required] ?? []

  // mode='overlay' — blurs content and shows lock on top (LLM Engine style)
  // mode='block'   — replaces content entirely with upgrade card (Agents style)
  // mode='banner'  — shows inline banner below the UI (Blog style)

  const UpgradeCard = () => (
    <div style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '16px', padding: '48px 40px', maxWidth: '480px', width: '100%', textAlign: 'center', boxShadow: '0 0 60px rgba(232,97,10,0.12)' }}>
      <div style={{ fontSize: '52px', marginBottom: '16px' }}>🔒</div>
      <div style={{ display: 'inline-block', background: meta.color + '22', border: '1px solid ' + meta.color + '55', borderRadius: '20px', padding: '4px 14px', fontSize: '12px', fontWeight: 700, color: meta.color, marginBottom: '16px', fontFamily: 'DM Sans, sans-serif', letterSpacing: '0.08em' }}>
        {meta.label.toUpperCase()} PLAN REQUIRED
      </div>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>
        {meta.upgradeLabel}
      </h2>
      <p style={{ color: '#888', fontSize: '14px', lineHeight: 1.6, marginBottom: '24px', fontFamily: 'DM Sans, sans-serif' }}>
        Unlock this feature and everything below by upgrading to {meta.label}.
      </p>
      <div style={{ background: '#111', border: '1px solid #2a2a2a', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px', textAlign: 'left' }}>
        {features.map((f, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '6px 0', borderBottom: i < features.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
            <span style={{ color: '#E8610A', fontSize: '14px', flexShrink: 0 }}>✓</span>
            <span style={{ color: '#ccc', fontSize: '13px', fontFamily: 'DM Sans, sans-serif' }}>{f}</span>
          </div>
        ))}
      </div>
      <a href={meta.upgradeHref} style={{ display: 'block', background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 700, fontSize: '15px', textDecoration: 'none', boxShadow: '0 4px 20px rgba(232,97,10,0.35)', fontFamily: 'DM Sans, sans-serif', marginBottom: '12px' }}>
        {meta.upgradeLabel} — {meta.upgradePrice}
      </a>
      <p style={{ color: '#555', fontSize: '12px', margin: 0, fontFamily: 'DM Sans, sans-serif' }}>Cancel anytime. Instant access.</p>
    </div>
  )

  if (mode === 'block') {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px' }}>
        <UpgradeCard />
      </div>
    )
  }

  if (mode === 'banner') {
    return (
      <>
        {children}
        <div style={{ margin: '16px 0', background: 'linear-gradient(135deg, rgba(232,97,10,0.08), rgba(200,78,6,0.04))', border: '1px solid rgba(232,97,10,0.25)', borderRadius: '10px', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#E8610A', marginBottom: '2px', fontFamily: 'DM Sans, sans-serif' }}>🔒 {meta.label} plan required</div>
            <div style={{ fontSize: '12px', color: '#888', fontFamily: 'DM Sans, sans-serif' }}>{meta.upgradeLabel} to unlock this feature.</div>
          </div>
          <a href={meta.upgradeHref} style={{ background: 'linear-gradient(135deg, #E8610A, #C84E06)', color: '#fff', padding: '9px 20px', borderRadius: '6px', fontWeight: 700, fontSize: '13px', textDecoration: 'none', fontFamily: 'DM Sans, sans-serif', whiteSpace: 'nowrap' }}>
            {meta.upgradeLabel} — {meta.upgradePrice}
          </a>
        </div>
      </>
    )
  }

  // mode === 'overlay' (default)
  return (
    <div style={{ position: 'relative' }}>
      <div style={{ filter: 'blur(6px)', pointerEvents: 'none', userSelect: 'none', opacity: 0.4 }}>
        {children}
      </div>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(10,10,10,0.7)', borderRadius: '16px', zIndex: 10, padding: '24px' }}>
        <UpgradeCard />
      </div>
    </div>
  )
}
