const fs = require('fs');

// ─── ADMIN AFFILIATES PAGE ─────────────────────────────────────────
const adminPage = `// @ts-nocheck
'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

// Only Randy can access this page
const ADMIN_ID = '03ef19e5-528c-470d-bc7b-509438104d03'

export default function AdminAffiliates() {
  const router = useRouter()
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const [filter, setFilter] = useState('pending')

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user || user.id !== ADMIN_ID) {
        router.push('/dashboard')
        return
      }
      loadApplications()
    }
    load()
  }, [])

  async function loadApplications() {
    setLoading(true)
    const { data } = await supabase
      .from('affiliate_applications')
      .select('*')
      .order('created_at', { ascending: false })
    setApplications(data || [])
    setLoading(false)
  }

  async function approve(app) {
    setProcessing(app.id)
    try {
      // Update application status
      await supabase.from('affiliate_applications').update({ status: 'approved' }).eq('id', app.id)

      // Send approval email via API
      await fetch('/api/affiliates/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId: app.id, email: app.email, name: app.name, action: 'approve' })
      })

      await loadApplications()
    } catch (e) {
      console.error(e)
    }
    setProcessing(null)
  }

  async function reject(app) {
    setProcessing(app.id)
    try {
      await supabase.from('affiliate_applications').update({ status: 'rejected' }).eq('id', app.id)
      await fetch('/api/affiliates/approve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ applicationId: app.id, email: app.email, name: app.name, action: 'reject' })
      })
      await loadApplications()
    } catch (e) {
      console.error(e)
    }
    setProcessing(null)
  }

  const filtered = applications.filter(a => filter === 'all' ? true : a.status === filter)
  const counts = {
    pending: applications.filter(a => a.status === 'pending').length,
    approved: applications.filter(a => a.status === 'approved').length,
    rejected: applications.filter(a => a.status === 'rejected').length,
  }

  if (loading) return <div style={{ minHeight: '100vh', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8610A', fontFamily: 'DM Sans, sans-serif' }}>Loading applications...</div>

  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fff', fontFamily: 'DM Sans, sans-serif', padding: isMobile ? '24px 16px' : '40px 32px' }}>
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=DM+Sans:wght@300;400;500;600;700;800&display=swap');
      \`}</style>

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* HEADER */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ fontSize: '11px', color: '#E8610A', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.15em', marginBottom: '8px' }}>Admin Panel</div>
          <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: isMobile ? '22px' : '32px', fontWeight: 900, color: '#fff', letterSpacing: '1px', marginBottom: '4px' }}>
            AFFILIATE <span style={{ color: '#E8610A' }}>APPLICATIONS</span>
          </h1>
          <p style={{ fontSize: '14px', color: '#555', fontWeight: 300 }}>Review, approve or reject affiliate applications. Approval emails fire automatically.</p>
        </div>

        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px', marginBottom: '24px' }}>
          {[
            { label: 'Pending', value: counts.pending, color: '#E8610A' },
            { label: 'Approved', value: counts.approved, color: '#22c55e' },
            { label: 'Rejected', value: counts.rejected, color: '#ef4444' },
          ].map(s => (
            <div key={s.label} style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '32px', fontWeight: 900, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: '12px', color: '#555', textTransform: 'uppercase', letterSpacing: '.1em', marginTop: '4px' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* FILTER TABS */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {['pending', 'approved', 'rejected', 'all'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding: '8px 18px', borderRadius: '20px', border: '1px solid ' + (filter === f ? '#E8610A' : '#2a2a2a'), background: filter === f ? 'rgba(232,97,10,0.1)' : 'transparent', color: filter === f ? '#E8610A' : '#555', fontSize: '12px', fontWeight: 700, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '.06em', fontFamily: 'DM Sans, sans-serif' }}>
              {f}
            </button>
          ))}
        </div>

        {/* APPLICATIONS LIST */}
        {filtered.length === 0 ? (
          <div style={{ background: '#111', border: '1px solid #1a1a1a', borderRadius: '14px', padding: '60px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>\ud83d\udce5</div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '8px' }}>No {filter} applications</div>
            <div style={{ fontSize: '13px', color: '#555' }}>Check back when new applications come in.</div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filtered.map(app => (
              <div key={app.id} style={{ background: '#111', border: '1px solid ' + (app.status === 'approved' ? '#22c55e30' : app.status === 'rejected' ? '#ef444430' : '#1a1a1a'), borderRadius: '14px', padding: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{app.name}</div>
                    <div style={{ fontSize: '13px', color: '#E8610A', marginBottom: '4px' }}>{app.email}</div>
                    <div style={{ fontSize: '12px', color: '#555' }}>{new Date(app.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, padding: '4px 12px', borderRadius: '20px', background: app.status === 'approved' ? '#22c55e18' : app.status === 'rejected' ? '#ef444418' : '#E8610A18', color: app.status === 'approved' ? '#22c55e' : app.status === 'rejected' ? '#ef4444' : '#E8610A', border: '1px solid ' + (app.status === 'approved' ? '#22c55e40' : app.status === 'rejected' ? '#ef444440' : '#E8610A40'), textTransform: 'uppercase', letterSpacing: '.06em' }}>
                      {app.status}
                    </span>
                    {app.status === 'pending' && (
                      <>
                        <button onClick={() => approve(app)} disabled={processing === app.id}
                          style={{ background: '#22c55e', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 20px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                          {processing === app.id ? '...' : '\u2713 Approve'}
                        </button>
                        <button onClick={() => reject(app)} disabled={processing === app.id}
                          style={{ background: 'transparent', color: '#ef4444', border: '1px solid #ef444440', borderRadius: '8px', padding: '8px 20px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: 'DM Sans, sans-serif' }}>
                          {processing === app.id ? '...' : '\u2717 Reject'}
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2,1fr)', gap: '12px' }}>
                  {app.website && (
                    <div style={{ background: '#0d0d0d', borderRadius: '8px', padding: '12px 16px' }}>
                      <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px' }}>Website</div>
                      <a href={app.website} target="_blank" rel="noopener noreferrer" style={{ fontSize: '13px', color: '#3b82f6', textDecoration: 'none' }}>{app.website}</a>
                    </div>
                  )}
                  {app.social_links && (
                    <div style={{ background: '#0d0d0d', borderRadius: '8px', padding: '12px 16px' }}>
                      <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px' }}>Social Links</div>
                      <div style={{ fontSize: '13px', color: '#ccc' }}>{app.social_links}</div>
                    </div>
                  )}
                  {app.audience_size && (
                    <div style={{ background: '#0d0d0d', borderRadius: '8px', padding: '12px 16px' }}>
                      <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px' }}>Audience Size</div>
                      <div style={{ fontSize: '13px', color: '#ccc' }}>{app.audience_size}</div>
                    </div>
                  )}
                  <div style={{ background: '#0d0d0d', borderRadius: '8px', padding: '12px 16px', gridColumn: app.website || app.social_links || app.audience_size ? 'auto' : '1/-1' }}>
                    <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px' }}>How They Plan to Promote</div>
                    <div style={{ fontSize: '13px', color: '#ccc', lineHeight: 1.6 }}>{app.how_promote}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
`;

// ─── APPROVE/REJECT EMAIL API ──────────────────────────────────────
const approveRoute = `// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { applicationId, email, name, action } = await request.json()
  const firstName = name ? name.split(' ')[0] : 'there'

  if (action === 'approve') {
    // Find or create their Traffikora account referral code with 30% rate
    const { data: userRows } = await supabase.auth.admin.listUsers()
    const matchedUser = userRows?.users?.find(u => u.email === email)

    let referralLink = 'https://www.traffikora.com/signup?ref=YOUR_CODE'
    if (matchedUser) {
      const { data: refCode } = await supabase.from('referral_codes').select('*').eq('user_id', matchedUser.id).single()
      if (refCode) {
        // Upgrade to affiliate tier with 30% commission
        await supabase.from('referral_codes').update({
          tier: 'affiliate',
          commission_rate: 0.30,
          status: 'active'
        }).eq('user_id', matchedUser.id)
        referralLink = \`https://www.traffikora.com/signup?ref=\${refCode.code}\`
      }
    }

    await resend.emails.send({
      from: 'Randy at Traffikora <eva@traffikora.com>',
      to: email,
      subject: \`\ud83c\udf89 Welcome to the Traffikora Affiliate Program, \${firstName}!\`,
      html: \`<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;">
      <tr><td style="background:#111;padding:36px 40px;text-align:center;">
        <p style="margin:0;font-family:Georgia,serif;font-size:30px;font-weight:700;color:#fff;">Traffik<span style="color:#E8610A;">ora</span></p>
        <p style="margin:8px 0 0;font-size:12px;color:#888;letter-spacing:2px;text-transform:uppercase;">Affiliate Program</p>
      </td></tr>
      <tr><td style="padding:48px 40px 32px;text-align:center;">
        <p style="margin:0 0 16px;font-size:48px;">\\ud83c\\udf89</p>
        <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:32px;font-weight:700;color:#111;">You\\u2019re approved, \${firstName}!</h1>
        <p style="margin:0 auto;font-size:15px;color:#555;line-height:1.8;max-width:460px;">Welcome to the Traffikora Affiliate Program. You now earn <strong style="color:#E8610A;">30% recurring commission</strong> every month for every business you refer.</p>
      </td></tr>
      <tr><td style="padding:0 40px 32px;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#111;border-radius:12px;padding:28px;">
          <tr><td>
            <p style="margin:0 0 8px;font-size:11px;color:#E8610A;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Your Affiliate Link</p>
            <p style="margin:0 0 16px;font-size:15px;color:#fff;font-family:monospace;background:#0a0a0a;padding:12px 16px;border-radius:8px;word-break:break-all;">\${referralLink}</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="text-align:center;padding:12px;background:#1a1a1a;border-radius:8px;">
                  <p style="margin:0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Commission Rate</p>
                  <p style="margin:4px 0 0;font-family:Georgia,serif;font-size:28px;font-weight:700;color:#E8610A;">30%</p>
                  <p style="margin:4px 0 0;font-size:11px;color:#555;">recurring monthly</p>
                </td>
              </tr>
            </table>
          </td></tr>
        </table>
      </td></tr>
      <tr><td style="padding:0 40px 32px;">
        <p style="margin:0 0 16px;font-size:16px;font-weight:700;color:#111;font-family:Georgia,serif;">What you earn per referral:</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:8px;overflow:hidden;">
          <tr style="background:#f9f9f9;">
            <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#111;">Starter $47/mo</td>
            <td style="padding:10px 16px;font-size:13px;font-weight:700;color:#E8610A;text-align:right;">$14.10/mo</td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#111;">Pro $97/mo</td>
            <td style="padding:10px 16px;font-size:13px;font-weight:700;color:#E8610A;text-align:right;">$29.10/mo</td>
          </tr>
          <tr style="background:#f9f9f9;">
            <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#111;">Agency $297/mo</td>
            <td style="padding:10px 16px;font-size:13px;font-weight:700;color:#E8610A;text-align:right;">$89.10/mo</td>
          </tr>
          <tr>
            <td style="padding:10px 16px;font-size:12px;font-weight:700;color:#111;">Enterprise $997/mo</td>
            <td style="padding:10px 16px;font-size:13px;font-weight:700;color:#E8610A;text-align:right;">$299.10/mo</td>
          </tr>
        </table>
      </td></tr>
      <tr><td style="padding:0 40px 40px;text-align:center;">
        <a href="\${referralLink}" style="display:inline-block;background:linear-gradient(135deg,#E8610A,#C84E06);color:#fff;padding:16px 40px;border-radius:8px;font-size:15px;font-weight:700;text-decoration:none;">Start Sharing Your Link \\u2192</a>
        <p style="margin:16px 0 0;font-size:13px;color:#999;">Questions? Reply to this email anytime.</p>
      </td></tr>
      <tr><td style="background:#f9f9f9;padding:24px 40px;border-top:1px solid #eee;">
        <p style="margin:0;font-size:12px;color:#999;text-align:center;">Traffikora \\u2014 Set it once. It markets forever. &nbsp;&middot;&nbsp; support@traffikora.com</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>\`
    })

    return NextResponse.json({ success: true, action: 'approved' })
  }

  if (action === 'reject') {
    await resend.emails.send({
      from: 'Randy at Traffikora <eva@traffikora.com>',
      to: email,
      subject: \`Traffikora Affiliate Application Update\`,
      html: \`<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Arial,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 20px;">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e0e0e0;">
      <tr><td style="background:#111;padding:36px 40px;text-align:center;">
        <p style="margin:0;font-family:Georgia,serif;font-size:30px;font-weight:700;color:#fff;">Traffik<span style="color:#E8610A;">ora</span></p>
      </td></tr>
      <tr><td style="padding:48px 40px;">
        <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:26px;font-weight:700;color:#111;">Hi \${firstName},</h1>
        <p style="font-size:15px;color:#555;line-height:1.8;">Thank you for applying to the Traffikora Affiliate Program. After reviewing your application we\\u2019re unable to move forward at this time.</p>
        <p style="font-size:15px;color:#555;line-height:1.8;">This doesn\\u2019t mean you can\\u2019t earn with Traffikora. You can still share your referral link as a standard user and earn <strong>20% recurring commission</strong> for every paying customer you refer.</p>
        <p style="font-size:15px;color:#555;line-height:1.8;">You\\u2019re welcome to reapply in the future as your platform grows.</p>
        <a href="https://www.traffikora.com/dashboard/referral" style="display:inline-block;background:#111;color:#fff;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:700;text-decoration:none;margin-top:8px;">View Your Referral Dashboard \\u2192</a>
      </td></tr>
      <tr><td style="background:#f9f9f9;padding:24px 40px;border-top:1px solid #eee;">
        <p style="margin:0;font-size:12px;color:#999;text-align:center;">Traffikora \\u2014 support@traffikora.com</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>\`
    })

    return NextResponse.json({ success: true, action: 'rejected' })
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
}
`;

fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\admin', { recursive: true });
fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\admin\\affiliates', { recursive: true });
fs.mkdirSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\affiliates\\approve', { recursive: true });

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\admin\\affiliates\\page.tsx', adminPage, 'utf8');
console.log('SUCCESS: admin/affiliates/page.tsx — approve/reject panel');

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\app\\api\\affiliates\\approve\\route.ts', approveRoute, 'utf8');
console.log('SUCCESS: api/affiliates/approve/route.ts — approval and rejection emails');