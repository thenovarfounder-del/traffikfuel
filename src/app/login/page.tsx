// @ts-nocheck
'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setError('')
    if (!form.email || !form.password) {
      setError('Please enter your email and password.')
      return
    }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000))
    setLoading(false)
    setError('Login coming soon. Email us at support@traffikora.com for access.')
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'DM Sans', sans-serif; background: #fff; color: #111; }
        .login-wrap { display: grid; grid-template-columns: 1fr 1fr; min-height: 100vh; }
        .login-left { background: #111; padding: 60px; display: flex; flex-direction: column; position: relative; overflow: hidden; }
        .login-left::before { content: ''; position: absolute; top: -100px; right: -100px; width: 400px; height: 400px; border-radius: 50%; background: #E8610A; opacity: 0.06; }
        .login-left::after { content: ''; position: absolute; bottom: -80px; left: -80px; width: 300px; height: 300px; border-radius: 50%; background: #E8610A; opacity: 0.04; }
        .logo { font-family: 'Playfair Display', serif; font-size: 24px; font-weight: 900; color: #fff; text-decoration: none; margin-bottom: auto; }
        .logo span { color: #E8610A; }
        .left-content { flex: 1; display: flex; flex-direction: column; justify-content: center; padding: 60px 0; }
        .login-left h1 { font-family: 'Playfair Display', serif; font-size: clamp(32px, 4vw, 52px); font-weight: 900; color: #fff; line-height: 1.1; margin-bottom: 20px; }
        .login-left h1 em { color: #E8610A; font-style: italic; }
        .login-left p { font-size: 17px; color: #aaa; line-height: 1.7; margin-bottom: 48px; max-width: 400px; }
        .stat-row { display: flex; gap: 40px; }
        .stat { }
        .stat-num { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 900; color: #E8610A; }
        .stat-label { font-size: 13px; color: #666; margin-top: 4px; }
        .left-footer { margin-top: auto; font-size: 13px; color: #555; }
        .left-footer a { color: #E8610A; text-decoration: none; }
        .login-right { padding: 60px; display: flex; flex-direction: column; justify-content: center; width: 100%; }
        .login-right h2 { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 900; margin-bottom: 8px; }
        .sub { font-size: 15px; color: #777; margin-bottom: 40px; }
        .error-box { background: #fff0ed; border: 2px solid #E8610A; padding: 14px 18px; font-size: 14px; color: #c0380a; margin-bottom: 24px; line-height: 1.5; }
        .field { margin-bottom: 20px; }
        .field label { display: block; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #111; margin-bottom: 8px; }
        .field input { width: 100%; padding: 14px 16px; border: 2.5px solid #111; font-family: 'DM Sans', sans-serif; font-size: 15px; color: #111; background: #fff; outline: none; }
        .field input:focus { border-color: #E8610A; }
        .forgot { display: block; text-align: right; font-size: 13px; color: #E8610A; text-decoration: none; margin-top: -12px; margin-bottom: 24px; font-weight: 600; }
        .forgot:hover { text-decoration: underline; }
        .submit-btn { width: 100%; padding: 18px; background: #111; color: #fff; border: 2.5px solid #111; font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 700; cursor: pointer; margin-bottom: 24px; }
        .submit-btn:hover { background: #E8610A; border-color: #E8610A; }
        .submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .divider { display: flex; align-items: center; gap: 16px; margin-bottom: 24px; }
        .divider-line { flex: 1; height: 1px; background: #eee; }
        .divider span { font-size: 13px; color: #aaa; }
        .signup-link { text-align: center; font-size: 15px; color: #555; padding: 20px; background: #fafafa; border: 2px solid #eee; }
        .signup-link a { color: #E8610A; font-weight: 700; text-decoration: none; }
        .signup-link a:hover { text-decoration: underline; }
        @media (max-width: 768px) {
          .login-wrap { grid-template-columns: 1fr; }
          .login-left { padding: 40px 24px; min-height: auto; }
          .left-content { padding: 40px 0; }
          .login-right { padding: 40px 24px; }
          .stat-row { gap: 24px; }
        }
      `}</style>

      <div className="login-wrap">
        <div className="login-left">
          <a href="/" className="logo">Traffik<span>ora</span></a>
          <div className="left-content">
            <h1>Welcome <em>back.</em></h1>
            <p>Your marketing machine has been running while you were away. Log in to see what Traffikora published, where you are ranking, and how your visibility grew.</p>
            <div className="stat-row">
              <div className="stat">
                <div className="stat-num">24/7</div>
                <div className="stat-label">Always working for you</div>
              </div>
              <div className="stat">
                <div className="stat-num">6+</div>
                <div className="stat-label">AI engines optimized</div>
              </div>
              <div className="stat">
                <div className="stat-num">∞</div>
                <div className="stat-label">Content published</div>
              </div>
            </div>
          </div>
          <div className="left-footer">
            No account yet? <a href="/signup">Start your free 7-day trial →</a>
          </div>
        </div>

        <div className="login-right">
          <h2>Log in to Traffikora</h2>
          <p className="sub">Enter your credentials to access your dashboard.</p>

          {error && <div className="error-box">{error}</div>}

          <div className="field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="jane@yourbusiness.com"
              value={form.email}
              onChange={e => setForm({...form, email: e.target.value})}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              value={form.password}
              onChange={e => setForm({...form, password: e.target.value})}
            />
          </div>

          <a href="#" className="forgot">Forgot your password?</a>

          <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Logging in...' : 'Log In →'}
          </button>

          <div className="divider">
            <div className="divider-line"></div>
            <span>New to Traffikora?</span>
            <div className="divider-line"></div>
          </div>

          <div className="signup-link">
            Start your <strong>free 7-day trial</strong> — no credit card required. <a href="/signup">Create Account →</a>
          </div>
        </div>
      </div>
    </>
  )
}