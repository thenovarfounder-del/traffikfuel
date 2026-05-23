// @ts-nocheck
// @ts-nocheck
'use client'

import { useState, useEffect } from 'react'

export default function SignupPage() {
  const [planParam, setPlanParam] = useState('starter')
  const [form, setForm] = useState({ name: '', email: '', password: '', business: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const p = params.get('plan') || 'starter'
    setPlanParam(p)
  }, [])

  const plans = {
    starter: { name: 'Starter', price: '$97/mo' },
    pro: { name: 'Pro', price: '$197/mo' },
    agency: { name: 'Agency', price: '$797/mo' },
    enterprise: { name: 'Enterprise', price: '$1,497/mo' },
  }

  const selected = plans[planParam] || plans.starter

  const handleSubmit = async () => {
    setError('')
    if (!form.name || !form.email || !form.password || !form.business) {
      setError('Please fill out all fields.')
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setError('Account creation coming soon. Email us at support@traffikora.com to get started!')
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; color: #111; }
        .signup-wrap { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; }
        .signup-left { background: #111; padding: 60px; display: flex; flex-direction: column; gap: 48px; }
        .logo { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 900; color: #fff; text-decoration: none; }
        .logo span { color: #E8610A; }
        .left-content { flex: 1; display: flex; flex-direction: column; justify-content: center; }
        .plan-badge { display: inline-block; padding: 8px 16px; background: #E8610A; color: #fff; font-size: 13px; font-weight: 700; letter-spacing: 1px; margin-bottom: 24px; width: fit-content; }
        .signup-left h1 { font-family: 'Playfair Display', serif; font-size: clamp(32px, 4vw, 52px); font-weight: 900; color: #fff; line-height: 1.1; margin-bottom: 20px; }
        .signup-left h1 em { color: #E8610A; font-style: italic; }
        .signup-left p { font-size: 17px; color: #aaa; line-height: 1.7; margin-bottom: 36px; }
        .perks { display: flex; flex-direction: column; gap: 12px; margin-bottom: 40px; }
        .perk { font-size: 15px; color: #ddd; font-weight: 500; }
        .plan-switch { font-size: 13px; color: #666; }
        .plan-switch a { color: #E8610A; text-decoration: none; font-weight: 600; }
        .plan-switch a:hover { text-decoration: underline; }
        .signup-right { padding: 60px; display: flex; flex-direction: column; justify-content: center; width: 100%; }
        .signup-right h2 { font-family: 'Playfair Display', serif; font-size: 32px; font-weight: 900; margin-bottom: 8px; }
        .sub { font-size: 15px; color: #777; margin-bottom: 36px; }
        .error-box { background: #fff0ed; border: 2px solid #E8610A; padding: 14px 18px; font-size: 14px; color: #c0380a; margin-bottom: 24px; }
        .field { margin-bottom: 20px; }
        .field label { display: block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #111; margin-bottom: 8px; }
        .field input { width: 100%; padding: 14px 16px; border: 2.5px solid #111; font-family: 'DM Sans', sans-serif; font-size: 15px; color: #111; background: #fff; outline: none; }
        .field input:focus { border-color: #E8610A; }
        .submit-btn { width: 100%; padding: 18px; background: #E8610A; color: #fff; border: 2.5px solid #E8610A; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; cursor: pointer; margin-top: 8px; margin-bottom: 20px; }
        .submit-btn:hover { background: #111; border-color: #111; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .legal { font-size: 13px; color: #999; line-height: 1.6; margin-bottom: 16px; }
        .legal a { color: #E8610A; text-decoration: none; }
        .login-link { font-size: 14px; color: #555; }
        .login-link a { color: #E8610A; font-weight: 600; text-decoration: none; }
        @media (max-width: 768px) {
          .signup-wrap { grid-template-columns: 1fr; }
          .signup-left { padding: 40px 24px; }
          .signup-right { padding: 40px 24px; }
        }
      `}</style>

      <div className="signup-wrap">
        <div className="signup-left">
          <a href="/" className="logo">Traffik<span>ora</span></a>
          <div className="left-content">
            <div className="plan-badge">{selected.name} Plan — {selected.price}</div>
            <h1>Start your free <em>7-day trial.</em></h1>
            <p>No credit card charged today. Cancel anytime. Full access to every feature on your plan from day one.</p>
            <div className="perks">
              <div className="perk">✓ Full platform access during trial</div>
              <div className="perk">✓ Automated content starts immediately</div>
              <div className="perk">✓ Connect all your accounts in minutes</div>
              <div className="perk">✓ Cancel before day 7 — pay nothing</div>
              <div className="perk">✓ Real human support included</div>
            </div>
            <div className="plan-switch">
              Wrong plan? <a href="/signup?plan=starter">Starter</a> · <a href="/signup?plan=pro">Pro</a> · <a href="/signup?plan=agency">Agency</a> · <a href="/signup?plan=enterprise">Enterprise</a>
            </div>
          </div>
        </div>

        <div className="signup-right">
          <h2>Create your account</h2>
          <p className="sub">Get started in under 2 minutes.</p>

          {error && <div className="error-box">{error}</div>}

          <div className="field">
            <label>Full Name</label>
            <input type="text" placeholder="Jane Smith" value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div className="field">
            <label>Business Name</label>
            <input type="text" placeholder="Your Business LLC" value={form.business} onChange={e => setForm({...form, business: e.target.value})} />
          </div>
          <div className="field">
            <label>Email Address</label>
            <input type="email" placeholder="jane@yourbusiness.com" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="Create a strong password" value={form.password} onChange={e => setForm({...form, password: e.target.value})} />
          </div>

          <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Creating Account...' : `Start Free Trial — ${selected.name}`}
          </button>

          <p className="legal">By creating an account you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>.</p>
          <p className="login-link">Already have an account? <a href="/login">Log in →</a></p>
        </div>
      </div>
    </>
  )
}