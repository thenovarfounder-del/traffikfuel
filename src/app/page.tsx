// @ts-nocheck
'use client'

import { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState({ days: '02', hours: '14', mins: '37', secs: '00' })

  useEffect(() => {
    const deadline = new Date()
    deadline.setDate(deadline.getDate() + 2)
    deadline.setHours(deadline.getHours() + 14)
    deadline.setMinutes(deadline.getMinutes() + 37)
    const timer = setInterval(() => {
      const now = new Date()
      if (diff <= 0) { clearInterval(timer); return }
      const d = Math.floor(diff / 86400000)
      const h = Math.floor((diff % 86400000) / 3600000)
      const m = Math.floor((diff % 3600000) / 60000)
      const s = Math.floor((diff % 60000) / 1000)
      setTimeLeft({ days: String(d).padStart(2,'0'), hours: String(h).padStart(2,'0'), mins: String(m).padStart(2,'0'), secs: String(s).padStart(2,'0') })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main suppressHydrationWarning>
      <Nav />
      <style suppressHydrationWarning>{`
*{box-sizing:border-box;margin:0;padding:0}
#crisp-chatbox{display:none!important;}
html{scroll-behavior:smooth}
body{background:#fff;color:#111;font-family:'DM Sans',sans-serif;font-weight:300;overflow-x:hidden}
.btn-cta{display:inline-flex;align-items:center;gap:12px;background:linear-gradient(135deg,#E8610A,#c94e08);color:#fff;border:none;padding:16px 30px;border-radius:8px;font-size:15px;font-weight:800;cursor:pointer;font-family:'DM Sans',sans-serif;position:relative;overflow:hidden;letter-spacing:.01em;box-shadow:0 4px 20px rgba(232,97,10,.35)}
.btn-cta::before{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:rgba(255,255,255,.15);transform:skewX(-20deg);animation:shimmer 3s ease-in-out infinite}
@keyframes shimmer{0%{left:-60%}60%,100%{left:130%}}
.btn-cta-circle{width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;flex-shrink:0}
.btn-cta-dark{display:inline-flex;align-items:center;gap:12px;background:#111;color:#fff;border:none;padding:16px 30px;border-radius:8px;font-size:15px;font-weight:800;cursor:pointer;font-family:'DM Sans',sans-serif;position:relative;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,.25)}
.btn-cta-dark::before{content:'';position:absolute;top:0;left:-60%;width:40%;height:100%;background:rgba(255,255,255,.05);transform:skewX(-20deg);animation:shimmer 3s ease-in-out infinite}
.btn-ghost{display:inline-flex;align-items:center;gap:8px;background:transparent;color:#fff;border:1.5px solid rgba(255,255,255,.4);padding:15px 22px;border-radius:8px;font-size:14px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif}
.cta-notes-row{display:flex;gap:18px;justify-content:center;margin-top:13px;flex-wrap:wrap}
.cta-note-item{font-size:13px;color:#666;display:flex;align-items:center;gap:4px}
.cta-note-item::before{content:'✓';color:#E8610A;font-weight:700}
.hero{background:#111;padding:40px 40px 0}
.hero-inner{display:grid;grid-template-columns:1.15fr .85fr;gap:32px;align-items:center;max-width:1200px;margin:0 auto}
.eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:16px;font-weight:700;font-style:italic;font-family:'Playfair Display',serif;color:#fff;padding:10px 22px;border-radius:40px;background:rgba(232,97,10,.1);border:1.5px solid rgba(232,97,10,.5);margin-bottom:18px}
.eyebrow-dot-wrap{position:relative;width:10px;height:10px;flex-shrink:0}
.eyebrow-dot{width:8px;height:8px;border-radius:50%;background:#E8610A;position:absolute;top:1px;left:1px}
.eyebrow-ring{width:10px;height:10px;border-radius:50%;border:1.5px solid #E8610A;position:absolute;top:0;left:0;animation:ringpulse 2s ease-out infinite;opacity:0}
@keyframes ringpulse{0%{transform:scale(1);opacity:.8}100%{transform:scale(2.6);opacity:0}}
.eyebrow-text{background:linear-gradient(90deg,#fff 70%,rgba(232,97,10,0.5));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-h1{font-family:'Playfair Display',serif;font-size:52px;font-weight:700;color:#fff;line-height:.96;letter-spacing:-1.5px;margin-bottom:16px}
.hero-h1 em{font-style:italic;color:#E8610A}
.hero-sub{font-size:15px;color:#ccc;line-height:1.85;margin-bottom:20px;max-width:420px;font-weight:300}
.hero-btns{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:6px}
.guarantee-wrap{display:flex;align-items:center;gap:10px;margin-top:16px;flex-wrap:wrap}
.guarantee-badge{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:9px 14px}
.guarantee-icon{font-size:18px;flex-shrink:0}
.guarantee-text{font-size:11px;color:#ccc;line-height:1.5}
.guarantee-text strong{color:#fff;display:block;font-size:12px}
.hero-proof{display:flex;align-items:center;gap:10px;padding:12px 0;border-top:1px solid #2a2a2a;margin-top:14px;flex-wrap:wrap}
.proof-pip{width:3px;height:3px;border-radius:50%;background:#555}
.proof-txt{font-size:13px;color:#aaa;font-weight:500}
.hero-right{display:flex;flex-direction:column;gap:10px;padding-bottom:40px}
.hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.hstat{background:#1a1a1a;border:1px solid #252525;border-radius:8px;padding:12px 14px}
.hstat-num{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#E8610A;line-height:1}
.hstat-lbl{font-size:11px;color:#aaa;margin-top:4px;line-height:1.4}
.hplat{background:#1a1a1a;border:1px solid #252525;border-radius:8px;padding:10px 14px}
.hplat-lbl{font-size:10px;color:#666;text-transform:uppercase;letter-spacing:.1em;margin-bottom:7px}
.hchips{display:flex;gap:4px;flex-wrap:wrap}
.hchip{font-size:10px;background:#222;border:1px solid #333;color:#999;padding:3px 8px;border-radius:3px}
.demo-btn{display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:10px 16px;cursor:pointer;text-decoration:none}
.demo-play{width:26px;height:26px;border-radius:50%;background:#E8610A;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fff;flex-shrink:0}
.demo-lbl{font-size:12px;color:#ccc;font-weight:400}
.demo-lbl span{color:#fff;font-weight:600}
.powered{background:#090909;border-top:1px solid #1a1a1a;padding:10px 40px;display:flex;align-items:center;gap:14px}
.powered-lbl{font-size:10px;color:#555;text-transform:uppercase;letter-spacing:.12em;white-space:nowrap}
.powered-logos{display:flex;gap:7px}
.powered-logo{font-size:10px;color:#666;padding:4px 10px;border:1px solid #2a2a2a;border-radius:3px}
.industry-section{background:#f7f7f7;border-bottom:2.5px solid #111;border-top:2.5px solid #111;padding:32px 40px}
.section-label{font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#E8610A;display:block;margin-bottom:8px}
.industry-head{text-align:center;margin-bottom:22px}
.industry-title{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#111}
.industry-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:10px;max-width:1100px;margin:0 auto}
.industry-card{background:#fff;border:1.5px solid #111;border-radius:9px;padding:14px 10px;text-align:center}
.industry-card-icon{font-size:24px;margin-bottom:6px}
.industry-card-name{font-size:12px;font-weight:700;color:#111;line-height:1.3}
.pain-section{background:#0d0d0d;padding:40px;text-align:center;border-top:1px solid #1a1a1a}
.pain-h{font-family:'Playfair Display',serif;font-size:36px;font-weight:700;color:#fff;line-height:1.15;margin-bottom:14px}
.pain-h em{color:#E8610A;font-style:italic}
.pain-p{font-size:16px;color:#bbb;max-width:520px;margin:0 auto;line-height:1.85;font-weight:300}
.stat-bar{background:#E8610A;padding:20px 40px;text-align:center}
.stat-bar-inner{display:inline-flex;align-items:center;gap:20px}
.stat-bar-num{font-family:'Playfair Display',serif;font-size:42px;font-weight:700;color:#fff;line-height:1}
.stat-bar-div{width:1px;height:40px;background:rgba(255,255,255,.4)}
.stat-bar-txt{font-size:15px;color:#fff;line-height:1.6;text-align:left;max-width:400px;font-weight:400}
.ba-section{padding:40px;background:#fff;border-bottom:2.5px solid #111}
.ba-head{text-align:center;margin-bottom:22px}
.ba-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#111;line-height:1.15}
.ba-h em{color:#E8610A;font-style:italic}
.ba-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;max-width:900px;margin:0 auto}
.ba-col{border:2px solid #111;border-radius:10px;overflow:hidden}
.ba-col-head{padding:13px 18px;font-size:13px;font-weight:700;text-align:center;letter-spacing:.06em;text-transform:uppercase}
.ba-col-head.bad{background:#111;color:#fff}
.ba-col-head.good{background:#E8610A;color:#fff}
.ba-col-body{padding:16px 18px}
.ba-row{display:flex;align-items:flex-start;gap:8px;margin-bottom:12px;font-size:13px;color:#444;line-height:1.55;font-weight:400}
.ba-x{color:#cc0000;font-weight:700;flex-shrink:0}
.ba-c{color:#E8610A;font-weight:700;flex-shrink:0}
.comp-section{background:#f7f7f7;border-top:2.5px solid #111;border-bottom:2.5px solid #111;padding:40px}
.comp-head{text-align:center;margin-bottom:26px}
.comp-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#111}
.comp-h em{color:#E8610A;font-style:italic}
.comp-table{width:100%;max-width:900px;margin:0 auto;border:2px solid #111;border-radius:12px;overflow:hidden;border-collapse:separate;border-spacing:0}
.comp-table th{padding:14px 16px;font-size:12px;font-weight:700;text-align:center;border-bottom:2px solid #111;border-right:2px solid #111;letter-spacing:.05em;text-transform:uppercase}
.comp-table th:first-child{text-align:left;background:#f7f7f7;width:34%}
.comp-table th.th-ours{background:#111;color:#fff;border-right:2px solid #1a1a1a}
.comp-table th.th-other{background:#f7f7f7;color:#555}
.comp-table th:last-child{border-right:none}
.comp-table td{padding:12px 16px;font-size:13px;border-bottom:1px solid #eee;border-right:1.5px solid #eee;text-align:center;vertical-align:middle;font-weight:400;color:#333}
.comp-table td:first-child{text-align:left;font-weight:600;color:#111;background:#fff;border-right:2px solid #111}
.comp-table td.ours{background:#fff9f5;font-weight:700;color:#E8610A;border-right:2px solid #111}
.comp-table tr:last-child td{border-bottom:none}
.tbl-check{color:#E8610A;font-size:14px;font-weight:700}
.tbl-cross{color:#999;font-size:14px}
.tbl-partial{color:#777;font-size:12px}
.timeline-section{background:#111;padding:40px}
.timeline-head{text-align:center;margin-bottom:30px}
.timeline-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#fff;line-height:1.15}
.timeline-h em{color:#E8610A;font-style:italic}
.timeline-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;position:relative;max-width:1000px;margin:0 auto}
.timeline-grid::before{content:'';position:absolute;top:22px;left:12%;right:12%;height:2px;background:linear-gradient(90deg,#E8610A,#2a2a2a);z-index:0}
.tl-item{text-align:center;position:relative;z-index:1;padding:0 12px}
.tl-dot-wrap{display:flex;justify-content:center;margin-bottom:16px}
.tl-dot{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:14px;font-weight:700;color:#fff;border:3px solid #111;flex-shrink:0}
.tl-dot.active{background:#E8610A}
.tl-dot.dim{background:#1e1e1e;border-color:#2a2a2a}
.tl-day{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#E8610A;margin-bottom:7px}
.tl-title{font-size:14px;font-weight:700;color:#fff;margin-bottom:8px;line-height:1.3}
.tl-desc{font-size:13px;color:#aaa;line-height:1.65;font-weight:300}
.dash-section{background:#fff;border-top:2.5px solid #111;border-bottom:2.5px solid #111;padding:40px}
.dash-head{text-align:center;margin-bottom:24px}
.dash-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#111}
.dash-h em{color:#E8610A;font-style:italic}
.dash-sub{font-size:14px;color:#555;margin-top:7px}
.dash-frame{background:#0d0d0d;border:2.5px solid #111;border-radius:14px;overflow:hidden;max-width:1000px;margin:0 auto}
.dash-bar{background:#111;padding:9px 16px;display:flex;align-items:center;gap:8px;border-bottom:1px solid #1e1e1e}
.dash-dot-r{width:9px;height:9px;border-radius:50%;background:#ff5f56;flex-shrink:0}
.dash-dot-y{width:9px;height:9px;border-radius:50%;background:#ffbd2e;flex-shrink:0}
.dash-dot-g{width:9px;height:9px;border-radius:50%;background:#27c93f;flex-shrink:0}
.dash-url{flex:1;background:#1a1a1a;border-radius:4px;padding:4px 12px;font-size:10px;color:#888;margin:0 12px}
.dash-inner{display:grid;grid-template-columns:170px 1fr;min-height:200px}
.dash-sidebar{background:#111;padding:16px;border-right:1px solid #1e1e1e}
.dash-sidebar-logo{font-family:'Playfair Display',serif;font-size:13px;font-weight:700;color:#fff;margin-bottom:16px}
.dash-sidebar-logo span{color:#E8610A}
.dash-nav-item{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:5px;margin-bottom:3px;font-size:11px;font-weight:500;color:#888;cursor:pointer}
.dash-nav-item.active{background:#1e1e1e;color:#fff}
.dash-nav-dot{width:5px;height:5px;border-radius:50%;background:#2a2a2a;flex-shrink:0}
.dash-nav-item.active .dash-nav-dot{background:#E8610A}
.dash-main{padding:16px}
.dash-stats-row{display:grid;grid-template-columns:repeat(4,1fr);gap:9px;margin-bottom:12px}
.dash-stat{background:#141414;border:1px solid #1e1e1e;border-radius:7px;padding:11px 12px}
.dash-stat-num{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#E8610A;line-height:1}
.dash-stat-lbl{font-size:10px;color:#888;margin-top:3px}
.dash-activity{background:#141414;border:1px solid #1e1e1e;border-radius:7px;padding:12px}
.dash-activity-head{font-size:11px;font-weight:700;color:#fff;margin-bottom:9px}
.dash-activity-row{display:flex;align-items:center;gap:9px;margin-bottom:7px;padding-bottom:7px;border-bottom:1px solid #1a1a1a}
.dash-activity-row:last-child{border-bottom:none;margin-bottom:0;padding-bottom:0}
.dash-activity-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.dash-activity-txt{font-size:11px;color:#aaa;flex:1}
.dash-activity-time{font-size:10px;color:#666;white-space:nowrap}
.dash-activity-status{font-size:10px;font-weight:700;color:#E8610A;background:rgba(232,97,10,.1);padding:2px 7px;border-radius:10px;white-space:nowrap}
.platforms-section{background:#0d0d0d;padding:44px 40px;text-align:center;position:relative;overflow:hidden;border-top:2.5px solid #111}
.platforms-ring1{position:absolute;width:600px;height:600px;border-radius:50%;border:1px solid rgba(232,97,10,.06);top:50%;left:50%;transform:translate(-50%,-50%)}
.platforms-ring2{position:absolute;width:360px;height:360px;border-radius:50%;border:1px solid rgba(232,97,10,.1);top:50%;left:50%;transform:translate(-50%,-50%)}
.platforms-h{font-family:'Playfair Display',serif;font-size:42px;font-weight:700;color:#fff;letter-spacing:-1px;line-height:1;margin-bottom:6px;position:relative;z-index:1}
.platforms-h span{color:#E8610A;font-style:italic}
.platforms-sub{font-size:15px;color:#aaa;margin-bottom:28px;position:relative;z-index:1;font-weight:300}
.platforms-chips{display:flex;gap:9px;justify-content:center;flex-wrap:wrap;position:relative;z-index:1}
.plat-chip{display:flex;align-items:center;gap:8px;background:#141414;border:1px solid #2a2a2a;border-radius:10px;padding:12px 20px}
.plat-chip-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.plat-chip-name{font-size:13px;font-weight:600;color:#ddd}
.platforms-foot{margin-top:24px;padding-top:20px;border-top:1px solid #1a1a1a;position:relative;z-index:1}
.platforms-foot p{font-size:13px;color:#aaa;font-style:italic}
.platforms-foot span{color:#E8610A;font-weight:700}
.limited-offer{background:linear-gradient(135deg,#0d0d0d 0%,#1a1a1a 100%);border-top:2.5px solid #111;padding:22px 40px;display:flex;align-items:center;justify-content:space-between;gap:20px}
.lo-left{display:flex;align-items:center;gap:16px}
.lo-badge{background:#E8610A;color:#fff;font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:6px 14px;border-radius:5px;white-space:nowrap;flex-shrink:0}
.lo-text{font-size:14px;color:#ccc;line-height:1.55;font-weight:300}
.lo-text strong{font-size:16px;color:#E8610A;display:block;font-family:'Playfair Display',serif;font-style:italic;font-weight:700;margin-bottom:2px}
.lo-right{display:flex;align-items:center;gap:14px;flex-shrink:0}
.lo-countdown{display:flex;gap:8px}
.lo-count-item{background:#0a0a0a;border:1px solid #2a2a2a;border-radius:7px;padding:9px 14px;text-align:center;min-width:52px}
.lo-count-num{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#E8610A;line-height:1}
.lo-count-lbl{font-size:10px;color:#777;text-transform:uppercase;letter-spacing:.1em;margin-top:3px}
.lo-cta-btn{background:#E8610A;color:#fff;border:none;padding:12px 22px;border-radius:7px;font-size:13px;font-weight:700;cursor:pointer;font-family:'DM Sans',sans-serif;white-space:nowrap;box-shadow:0 2px 12px rgba(232,97,10,.3)}
.pricing-trust{display:flex;align-items:stretch;border-top:2.5px solid #111;border-bottom:2.5px solid #111;background:#f7f7f7}
.pt-item{flex:1;display:flex;align-items:center;justify-content:center;gap:12px;padding:20px 20px;border-right:2px solid #111}
.pt-item:last-child{border-right:none}
.pt-icon{font-size:26px;flex-shrink:0}
.pt-label{font-size:14px;font-weight:700;color:#111;line-height:1.3}
.pt-label span{font-size:12px;color:#666;font-weight:400;display:block;margin-top:2px}
.pricing-section{background:#0a0a0a;padding:70px 40px;position:relative;overflow:hidden}
.pricing-section::before{content:'';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,rgba(232,97,10,0.08) 0%,transparent 65%);pointer-events:none;z-index:0}
.pricing-head{text-align:center;margin-bottom:52px;position:relative;z-index:1}
.pricing-h{font-family:'Playfair Display',serif;font-size:58px;font-weight:700;color:#fff;line-height:1.0;letter-spacing:-1.5px}
.pricing-h em{color:#E8610A;font-style:italic;text-shadow:0 0 40px rgba(232,97,10,0.4)}
.pricing-sub{font-size:15px;color:#ccc;margin-top:14px;font-weight:300;letter-spacing:.02em}
.pricing-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;max-width:1300px;margin:0 auto;position:relative;z-index:1}
.plan{background:#111;padding:28px 20px;position:relative;border-radius:14px;border:1px solid rgba(255,255,255,0.35);display:flex;flex-direction:column;transition:border-color 0.2s}
.plan:hover{border-color:rgba(255,255,255,0.25)}
.plan-featured{background:linear-gradient(160deg,#1c1208 0%,#111 60%);border:1px solid #E8610A;box-shadow:0 0 50px rgba(232,97,10,0.18),0 0 100px rgba(232,97,10,0.06);transform:translateY(-10px)}
.plan-badge{display:inline-block;background:linear-gradient(135deg,#E8610A,#ff8c42);color:#fff;font-size:10px;letter-spacing:.12em;text-transform:uppercase;padding:5px 16px;border-radius:20px;margin-bottom:12px;font-weight:700;box-shadow:0 2px 14px rgba(232,97,10,0.45)}
.plan-name{font-size:10px;letter-spacing:.2em;color:#888;text-transform:uppercase;margin-bottom:12px;font-weight:700}
.plan-name-light{color:#888}
.plan-price{font-family:'Playfair Display',serif;font-size:48px;font-weight:700;color:#fff;line-height:1}
.plan-price-light{color:#fff}
.plan-price sup{font-size:16px;font-family:'DM Sans',sans-serif;font-weight:400;vertical-align:super;color:#E8610A}
.plan-price sub{font-size:11px;color:#444;font-family:'DM Sans',sans-serif;font-weight:300}
.plan-price-light sub{color:#555}
.plan-desc{font-size:12px;color:#bbb;margin:10px 0 16px;line-height:1.7;font-weight:300}
.plan-desc-light{color:#bbb}
.plan-features{list-style:none;margin-bottom:20px;flex:1}
.plan-features li{font-size:12px;color:#ddd;padding:7px 0;border-bottom:1px solid #2a2a2a;display:flex;align-items:flex-start;gap:7px;line-height:1.5;font-weight:400}
.plan-features-light li{color:#fff;border-bottom-color:#2a2a2a}
.plan-features li::before{content:'✓';color:#E8610A;font-size:11px;flex-shrink:0;margin-top:1px}
.plan-btn{width:100%;padding:13px;border-radius:8px;font-size:13px;font-family:'DM Sans',sans-serif;font-weight:700;cursor:pointer;border:1px solid rgba(255,255,255,0.2);background:transparent;color:#ccc;transition:all .2s;margin-top:auto}
.plan-btn-featured{background:linear-gradient(135deg,#E8610A,#ff8c42);color:#fff;border-color:transparent;box-shadow:0 4px 20px rgba(232,97,10,0.4)}
.roi-section{border-top:2.5px solid #111}
.roi-inner{display:grid;grid-template-columns:1fr 1fr}
.roi-left{background:#111;padding:44px 36px;display:flex;flex-direction:column;justify-content:center}
.roi-h{font-family:'Playfair Display',serif;font-size:34px;font-weight:700;color:#fff;line-height:1.1;letter-spacing:-.5px;margin-bottom:14px}
.roi-h em{color:#E8610A;font-style:italic}
.roi-p{font-size:15px;color:#bbb;line-height:1.85;font-weight:300}
.roi-right{background:#fff;padding:44px 36px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-left:2.5px solid #111}
.roi-big{font-family:'Playfair Display',serif;font-size:96px;font-weight:700;color:#111;line-height:1;letter-spacing:-3px}
.roi-big span{color:#E8610A}
.roi-big-sub{font-size:14px;color:#555;text-align:center;line-height:1.65;max-width:220px;margin-top:8px;font-weight:300}
.roi-math{display:grid;grid-template-columns:repeat(3,1fr);border:2.5px solid #111;border-radius:9px;overflow:hidden;width:100%;margin-top:22px}
.roi-math-item{padding:13px 9px;text-align:center;border-right:2.5px solid #111}
.roi-math-item:last-child{border-right:none}
.roi-math-num{font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:#E8610A}
.roi-math-lbl{font-size:11px;color:#666;margin-top:4px;line-height:1.4;font-weight:300}
.obj-section{background:#0d0d0d;padding:44px 40px}
.obj-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#fff;text-align:center;margin-bottom:22px}
.obj-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:1000px;margin:0 auto}
.obj-card{background:#141414;border:1px solid #2a2a2a;border-radius:9px;padding:22px 20px}
.obj-card-bar{width:22px;height:2px;background:#E8610A;margin-bottom:14px}
.obj-card-q{font-size:14px;font-weight:700;color:#fff;margin-bottom:10px;line-height:1.45}
.obj-card-a{font-size:13px;color:#aaa;line-height:1.7;font-weight:300}
.features-section{background:#fff;padding:44px 40px;border-bottom:2.5px solid #111}
.features-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#111;text-align:center;margin-bottom:20px}
.features-grid{display:grid;grid-template-columns:repeat(4,1fr);border:2.5px solid #111;border-radius:12px;overflow:hidden;max-width:1000px;margin:0 auto}
.feature-item{padding:20px 18px;border-right:1px solid #111;border-bottom:1px solid #111}
.feature-item:nth-child(4n){border-right:none}
.feature-item:nth-child(n+5){border-bottom:none}
.feature-icon{font-size:22px;margin-bottom:9px}
.feature-name{font-size:13px;font-weight:700;color:#111;margin-bottom:6px}
.feature-desc{font-size:12px;color:#555;line-height:1.6;font-weight:300}
.how-section{background:#f7f7f7;border-top:2.5px solid #111;border-bottom:2.5px solid #111;padding:44px 40px}
.how-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#111;text-align:center;margin-bottom:20px}
.how-grid{display:grid;grid-template-columns:repeat(3,1fr);border:2.5px solid #111;border-radius:12px;overflow:hidden;max-width:900px;margin:0 auto}
.how-step{background:#fff;padding:24px 20px;text-align:center}
.how-step:not(:last-child){border-right:2.5px solid #111}
.how-step-dot{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-family:'Playfair Display',serif;font-size:18px;font-weight:700;color:#fff}
.how-step-h{font-size:15px;font-weight:700;color:#111;margin-bottom:8px}
.how-step-p{font-size:13px;color:#444;line-height:1.7;font-weight:300}
.ai-section{background:#111;padding:44px 40px;text-align:center}
.ai-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#fff;line-height:1.15;margin-bottom:12px}
.ai-h em{color:#E8610A;font-style:italic}
.ai-p{font-size:15px;color:#bbb;max-width:480px;margin:0 auto 24px;line-height:1.85;font-weight:300}
.ai-chips{display:flex;gap:9px;justify-content:center;flex-wrap:wrap;margin-bottom:16px}
.ai-chip{background:rgba(255,255,255,.06);border:1px solid #333;border-radius:8px;padding:10px 18px;font-size:13px;color:#ccc;font-weight:500}
.ai-diff{font-size:13px;color:#aaa;font-style:italic}
.testi-section{background:#f7f7f7;border-top:2.5px solid #111;padding:44px 40px}
.testi-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#111;text-align:center;margin-bottom:22px}
.testi-h em{color:#E8610A;font-style:italic}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:1000px;margin:0 auto}
.testi-card{background:#fff;border:2px solid #111;border-radius:14px;padding:24px 22px;position:relative;overflow:hidden}
.testi-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:#E8610A}
.testi-quote-mark{font-family:'Playfair Display',serif;font-size:64px;color:#e8e8e8;line-height:.8;display:block;margin-bottom:4px}
.testi-stars{color:#E8610A;font-size:15px;margin-bottom:10px;letter-spacing:3px}
.testi-text{font-size:14px;color:#222;line-height:1.9;font-style:italic;margin-bottom:16px;font-weight:300}
.testi-divider{height:1px;background:#e8e8e8;margin-bottom:13px}
.testi-author{display:flex;align-items:center;gap:10px}
.testi-avatar{width:38px;height:38px;border-radius:50%;background:#111;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:14px;font-weight:700;color:#fff;flex-shrink:0}
.testi-name{font-size:13px;font-weight:700;color:#111}
.testi-role{font-size:12px;color:#666;margin-top:2px}
.faq-section{background:#fff;border-top:2.5px solid #111;border-bottom:2.5px solid #111;padding:44px 40px}
.faq-head{text-align:center;margin-bottom:26px}
.faq-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#111}
.faq-h em{color:#E8610A;font-style:italic}
.faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;max-width:1000px;margin:0 auto}
.faq-item{border:1.5px solid #111;border-radius:10px;overflow:hidden;cursor:pointer}
.faq-q{background:#111;padding:16px 20px;font-size:14px;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:space-between;gap:10px;cursor:pointer}
.faq-q-arrow{color:#E8610A;font-size:18px;flex-shrink:0}
.faq-a{background:#fff;padding:16px 20px;font-size:13px;color:#444;line-height:1.8;font-weight:300;display:none}
.mission-section{background:#111;border-top:2.5px solid #111;padding:44px 40px}
.mission-inner{max-width:680px;margin:0 auto;text-align:center}
.mission-h{font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:#fff;line-height:1.1;margin-bottom:24px}
.mission-h em{color:#E8610A;font-style:italic}
.mission-quote-wrap{position:relative;padding:26px 30px;background:#141414;border:1px solid #2a2a2a;border-radius:13px;text-align:left}
.mission-quote-bar{position:absolute;left:0;top:0;bottom:0;width:3px;background:#E8610A}
.mission-quote-mark{font-family:'Playfair Display',serif;font-size:52px;color:#1e1e1e;line-height:1;display:block;margin-bottom:-5px}
.mission-quote-text{font-family:'Playfair Display',serif;font-size:16px;font-style:italic;color:#ccc;line-height:1.95;font-weight:400}
.mission-stats-row{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid #2a2a2a;border-radius:9px;overflow:hidden;margin-top:22px}
.mission-stat{padding:18px 12px;text-align:center;border-right:1px solid #2a2a2a}
.mission-stat:last-child{border-right:none}
.mission-stat-num{font-family:'Playfair Display',serif;font-size:26px;font-weight:700;color:#E8610A;line-height:1}
.mission-stat-lbl{font-size:12px;color:#aaa;margin-top:4px;line-height:1.45;font-weight:300}
.cta-section{background:#fff;border-top:2.5px solid #111;padding:56px 40px;text-align:center;position:relative;overflow:hidden}
.cta-gradient-line{position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#111,#E8610A,#111)}
.cta-live-pill{display:inline-flex;align-items:center;gap:8px;background:#fff9f5;border:1px solid rgba(232,97,10,.25);border-radius:30px;padding:7px 18px;margin-bottom:22px;font-size:13px;color:#E8610A;font-weight:600}
.cta-live-dot{width:7px;height:7px;border-radius:50%;background:#E8610A;animation:blink 1.5s ease-in-out infinite;flex-shrink:0}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.cta-h{font-family:'Playfair Display',serif;font-size:46px;font-weight:700;color:#111;letter-spacing:-1px;line-height:1.08;margin-bottom:14px}
.cta-h em{color:#E8610A;font-style:italic}
.cta-p{font-size:15px;color:#555;margin:0 auto 28px;line-height:1.85;max-width:440px;font-weight:300}
.cta-btn-row{display:flex;align-items:center;justify-content:center;gap:20px;flex-wrap:wrap}
.guarantee-seal{display:flex;flex-direction:column;align-items:center;justify-content:center;width:90px;height:90px;border-radius:50%;border:2.5px solid #111;text-align:center;flex-shrink:0}
.gs-top{font-size:8px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#E8610A}
.gs-num{font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:#111;line-height:1}
.gs-bot{font-size:8px;font-weight:600;color:#555;text-transform:uppercase;letter-spacing:.05em}
.cta-exit{font-size:13px;color:#999;font-style:italic;margin-top:20px}
.cta-exit span{color:#111;font-weight:700;font-style:normal}
.social-bar{background:#0d0d0d;padding:18px 40px;text-align:center;border-top:1px solid #1a1a1a}
.social-bar-lbl{font-size:11px;color:#555;letter-spacing:.16em;text-transform:uppercase;margin-bottom:11px}
.social-icons-row{display:flex;gap:12px;justify-content:center}
.social-icon{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;text-decoration:none;transition:opacity .2s}
.social-icon:hover{opacity:.8}
@media(max-width:900px){.hero{padding:32px 24px 0}.hero-inner{grid-template-columns:1fr}.hero-h1{font-size:36px}.hero-right{display:none}.industry-grid{grid-template-columns:repeat(3,1fr)}.ba-grid{grid-template-columns:1fr}.comp-table th:nth-child(3),.comp-table th:nth-child(4),.comp-table td:nth-child(3),.comp-table td:nth-child(4){display:none}.timeline-grid{grid-template-columns:1fr 1fr;gap:20px}.timeline-grid::before{display:none}.dash-inner{grid-template-columns:1fr}.dash-sidebar{display:none}.pricing-grid{grid-template-columns:1fr}.plan{border-right:none!important;border-bottom:2px solid #111}.plan:last-child{border-bottom:none}.roi-inner{grid-template-columns:1fr}.roi-left{border-right:none;border-bottom:2.5px solid #111}.obj-grid{grid-template-columns:1fr}.features-grid{grid-template-columns:repeat(2,1fr)}.feature-item:nth-child(2n){border-right:none}.how-grid{grid-template-columns:1fr}.how-step{border-right:none!important;border-bottom:2.5px solid #111}.how-step:last-child{border-bottom:none}.testi-grid{grid-template-columns:1fr}.testi-card{border-right:none!important;border-bottom:2px solid #111}.testi-card:last-child{border-bottom:none}.faq-grid{grid-template-columns:1fr}.mission-stats-row{grid-template-columns:1fr}.mission-stat{border-right:none;border-bottom:1px solid #2a2a2a}.mission-stat:last-child{border-bottom:none}.cta-h{font-size:32px}.limited-offer{flex-direction:column;align-items:flex-start}.pricing-trust{flex-direction:column}.pt-item{border-right:none!important;border-bottom:1px solid #111}.pt-item:last-child{border-bottom:none}.stat-bar-inner{flex-direction:column;gap:8px}.social-icons-row{gap:10px}}
@media(max-width:480px){.hero-h1{font-size:30px}.industry-grid{grid-template-columns:repeat(2,1fr)}.hero-btns{flex-direction:column;align-items:flex-start}.btn-cta,.btn-ghost{width:100%;justify-content:center}.cta-btn-row{flex-direction:column}.guarantee-seal{display:none}}
      `}</style>
      <div dangerouslySetInnerHTML={{ __html: `
        <div class="hero"><div class="hero-inner"><div><div class="eyebrow"><div class="eyebrow-dot-wrap"><div class="eyebrow-ring"></div><div class="eyebrow-dot"></div></div><span class="eyebrow-text">The Future of Local Marketing is Here</span></div><div class="hero-h1">Set it once.<br><em>It markets<br>forever.</em></div><p class="hero-sub">Connect your accounts once. Traffikora runs Google, TikTok, YouTube, and every AI engine &mdash; automatically, every single day. No agency. No manual work.</p><div class="hero-btns"><button class="btn-cta" onclick="window.location.href='/signup'">Start Free — No Card Needed<div class="btn-cta-circle">&rarr;</div></button></div><div class="guarantee-wrap"><div class="guarantee-badge"><div class="guarantee-icon">&#128737;</div><div class="guarantee-text"><strong>Zero Risk Guarantee</strong>Free plan — no card needed &middot; Cancel in one click</div></div><div class="guarantee-badge"><div class="guarantee-icon">&#9889;</div><div class="guarantee-text"><strong>Live in 5 Minutes</strong>No tech skills required</div></div></div><div class="hero-proof"><span class="proof-txt">500+ businesses</span><div class="proof-pip"></div><span class="proof-txt">No agency needed</span><div class="proof-pip"></div><span class="proof-txt">Free to start</span><div class="proof-pip"></div><span class="proof-txt">Free plan available</span></div></div><div class="hero-right"><div class="hero-stats"><div class="hstat"><div class="hstat-num">9+</div><div class="hstat-lbl">Platforms automated simultaneously</div></div><div class="hstat"><div class="hstat-num">24/7</div><div class="hstat-lbl">Marketing running while you sleep</div></div><div class="hstat"><div class="hstat-num">6x</div><div class="hstat-lbl">More online visibility on average</div></div></div><div class="hplat"><div class="hplat-lbl">Platforms covered</div><div class="hchips"><span class="hchip">Google</span><span class="hchip">TikTok</span><span class="hchip">YouTube</span><span class="hchip">ChatGPT</span><span class="hchip">Claude</span><span class="hchip">Gemini</span><span class="hchip">Instagram</span><span class="hchip">Facebook</span><span class="hchip">Reddit</span></div></div></div></div></div>
        <div class="powered"><span class="powered-lbl">Powered by</span><div class="powered-logos"><span class="powered-logo">Google</span><span class="powered-logo">Stripe</span><span class="powered-logo">Twilio</span><span class="powered-logo">Supabase</span><span class="powered-logo">Anthropic</span></div></div>
        <div class="industry-section"><div class="industry-head"><span class="section-label">Trusted across industries</span><div class="industry-title">Works for <em style="color:#E8610A;font-style:italic">your</em> business &mdash; whatever it is.</div></div><div class="industry-grid"><div class="industry-card"><div class="industry-card-icon">&#128135;</div><div class="industry-card-name">Salons &amp; Spas</div></div><div class="industry-card"><div class="industry-card-icon">&#128295;</div><div class="industry-card-name">HVAC Companies</div></div><div class="industry-card"><div class="industry-card-icon">&#9878;</div><div class="industry-card-name">Law Firms</div></div><div class="industry-card"><div class="industry-card-icon">&#129463;</div><div class="industry-card-name">Dental Offices</div></div><div class="industry-card"><div class="industry-card-icon">&#127869;</div><div class="industry-card-name">Restaurants</div></div><div class="industry-card"><div class="industry-card-icon">&#127968;</div><div class="industry-card-name">Real Estate</div></div><div class="industry-card"><div class="industry-card-icon">&#128170;</div><div class="industry-card-name">Gyms &amp; Fitness</div></div><div class="industry-card"><div class="industry-card-icon">&#128663;</div><div class="industry-card-name">Auto Repair</div></div><div class="industry-card"><div class="industry-card-icon">&#127973;</div><div class="industry-card-name">Med Spas</div></div><div class="industry-card"><div class="industry-card-icon">&#128694;</div><div class="industry-card-name">Plumbers</div></div><div class="industry-card"><div class="industry-card-icon">&#128226;</div><div class="industry-card-name">Agencies</div></div><div class="industry-card"><div class="industry-card-icon">&#129658;</div><div class="industry-card-name">Chiropractors</div></div></div></div>
        <div class="pain-section"><span class="section-label">The problem</span><div class="pain-h">You&rsquo;re posting manually.<br>Your competitor hired an <em>agency.</em></div><p class="pain-p">Every day you do it yourself, they pull further ahead. There&rsquo;s a smarter way &mdash; and it costs less than a single hour of agency time.</p></div>
        <div class="stat-bar"><div class="stat-bar-inner"><div class="stat-bar-num">73%</div><div class="stat-bar-div"></div><div class="stat-bar-txt">of local searches now happen on AI engines &mdash; most businesses are completely invisible. Traffikora fixes that.</div></div></div>
        <div class="ba-section"><div class="ba-head"><span class="section-label">The difference</span><div class="ba-h">Without Traffikora vs <em>With Traffikora</em></div></div><div class="ba-grid"><div class="ba-col"><div class="ba-col-head bad">&#x2717; Without Traffikora</div><div class="ba-col-body"><div class="ba-row"><span class="ba-x">&#x2717;</span>Posting manually every day &mdash; or not at all</div><div class="ba-row"><span class="ba-x">&#x2717;</span>Invisible on ChatGPT, Claude and Gemini</div><div class="ba-row"><span class="ba-x">&#x2717;</span>Paying $2,000+/mo for an agency</div><div class="ba-row"><span class="ba-x">&#x2717;</span>No time to focus on the actual business</div><div class="ba-row"><span class="ba-x">&#x2717;</span>Stuck on page 3 of Google</div></div></div><div class="ba-col"><div class="ba-col-head good">&#x2713; With Traffikora</div><div class="ba-col-body"><div class="ba-row"><span class="ba-c">&#x2713;</span>Content published automatically, every day</div><div class="ba-row"><span class="ba-c">&#x2713;</span>Found on every AI engine that matters</div><div class="ba-row"><span class="ba-c">&#x2713;</span>Full automation from $97/mo</div><div class="ba-row"><span class="ba-c">&#x2713;</span>Marketing runs while you sleep</div><div class="ba-row"><span class="ba-c">&#x2713;</span>Climbing to page 1 in weeks</div></div></div></div></div>
        <div class="comp-section"><div class="comp-head"><span class="section-label">Why Traffikora wins</span><div class="comp-h">Traffikora vs <em>Every Alternative</em></div></div><table class="comp-table"><thead><tr><th></th><th class="th-ours">Traffikora</th><th class="th-other">Hiring an Agency</th><th class="th-other">Doing It Yourself</th></tr></thead><tbody><tr><td>Monthly cost</td><td class="ours">Free to start</td><td>$2,000&ndash;$10,000/mo</td><td>$0 but hours of time</td></tr><tr><td>Time required from you</td><td class="ours"><span class="tbl-check">5 min setup only</span></td><td><span class="tbl-partial">Weekly meetings</span></td><td><span class="tbl-cross">3+ hrs/day</span></td></tr><tr><td>AI engine optimization</td><td class="ours"><span class="tbl-check">&#10003; All platforms</span></td><td><span class="tbl-cross">&#10007; Rarely offered</span></td><td><span class="tbl-cross">&#10007; Almost impossible</span></td></tr><tr><td>Publishes 24/7 automatically</td><td class="ours"><span class="tbl-check">&#10003; Always on</span></td><td><span class="tbl-partial">Weekdays only</span></td><td><span class="tbl-cross">&#10007; Only when you do it</span></td></tr><tr><td>9+ platforms simultaneously</td><td class="ours"><span class="tbl-check">&#10003; All included</span></td><td><span class="tbl-partial">Usually 2&ndash;3</span></td><td><span class="tbl-cross">&#10007; One at a time</span></td></tr><tr><td>Cancel anytime</td><td class="ours"><span class="tbl-check">&#10003; One click</span></td><td><span class="tbl-cross">&#10007; Contracts required</span></td><td><span class="tbl-check">&#10003;</span></td></tr><tr><td>Free trial</td><td class="ours"><span class="tbl-check">&#10003; 7 days free</span></td><td><span class="tbl-cross">&#10007; No</span></td><td><span class="tbl-check">&#10003;</span></td></tr></tbody></table></div>
        <div class="timeline-section"><div class="timeline-head"><span class="section-label" style="display:inline-block">Your first 30 days</span><div class="timeline-h">What happens after you <em>start today</em></div></div><div class="timeline-grid"><div class="tl-item"><div class="tl-dot-wrap"><div class="tl-dot active">1</div></div><div class="tl-day">Day 1</div><div class="tl-title">You&rsquo;re live in 5 minutes</div><div class="tl-desc">Connect your accounts. Our AI learns your business. Content starts generating immediately.</div></div><div class="tl-item"><div class="tl-dot-wrap"><div class="tl-dot dim">7</div></div><div class="tl-day">Day 7</div><div class="tl-title">First content wave published</div><div class="tl-desc">Blog posts, social content, schema markup all live. Google starts indexing. AI engines start noticing.</div></div><div class="tl-item"><div class="tl-dot-wrap"><div class="tl-dot dim">14</div></div><div class="tl-day">Day 14</div><div class="tl-title">Rankings begin moving</div><div class="tl-desc">Search Console shows impressions climbing. TikTok and YouTube content gaining real traction.</div></div><div class="tl-item"><div class="tl-dot-wrap"><div class="tl-dot dim">30</div></div><div class="tl-day">Day 30</div><div class="tl-title">You&rsquo;re findable everywhere</div><div class="tl-desc">Google rankings up. AI engines recommending you. New leads coming in. You haven&rsquo;t touched a thing.</div></div></div></div>
        <div class="dash-section"><div class="dash-head"><span class="section-label">Inside Traffikora</span><div class="dash-h">Your marketing command center &mdash; <em>simple by design</em></div><p class="dash-sub">Everything running in one place. See what&rsquo;s published, what&rsquo;s scheduled, and what&rsquo;s working.</p></div><div class="dash-frame"><div class="dash-bar"><div class="dash-dot-r"></div><div class="dash-dot-y"></div><div class="dash-dot-g"></div><div class="dash-url">app.traffikora.com/dashboard</div></div><div class="dash-inner"><div class="dash-sidebar"><div class="dash-sidebar-logo">Traffik<span>ora</span></div><div class="dash-nav-item active"><div class="dash-nav-dot"></div>Dashboard</div><div class="dash-nav-item"><div class="dash-nav-dot"></div>Content</div><div class="dash-nav-item"><div class="dash-nav-dot"></div>Social</div><div class="dash-nav-item"><div class="dash-nav-dot"></div>SEO</div><div class="dash-nav-item"><div class="dash-nav-dot"></div>AI Engines</div><div class="dash-nav-item"><div class="dash-nav-dot"></div>Analytics</div><div class="dash-nav-item"><div class="dash-nav-dot"></div>Settings</div></div><div class="dash-main"><div class="dash-stats-row"><div class="dash-stat"><div class="dash-stat-num">247</div><div class="dash-stat-lbl">Posts published this month</div></div><div class="dash-stat"><div class="dash-stat-num">9</div><div class="dash-stat-lbl">Platforms active</div></div><div class="dash-stat"><div class="dash-stat-num">&#8593;38%</div><div class="dash-stat-lbl">Search impressions</div></div><div class="dash-stat"><div class="dash-stat-num">24/7</div><div class="dash-stat-lbl">System status: Live</div></div></div><div class="dash-activity"><div class="dash-activity-head">Live Activity Feed</div><div class="dash-activity-row"><div class="dash-activity-dot" style="background:#4285F4"></div><div class="dash-activity-txt">Blog post published to WordPress &mdash; &ldquo;Best HVAC Tips for Summer&rdquo;</div><div class="dash-activity-time">2 min ago</div><div class="dash-activity-status">Live</div></div><div class="dash-activity-row"><div class="dash-activity-dot" style="background:#E1306C"></div><div class="dash-activity-txt">Instagram reel posted &mdash; 3 platform variations generated</div><div class="dash-activity-time">14 min ago</div><div class="dash-activity-status">Live</div></div><div class="dash-activity-row"><div class="dash-activity-dot" style="background:#10A37F"></div><div class="dash-activity-txt">AI engine citation detected &mdash; ChatGPT recommended your business</div><div class="dash-activity-time">1 hr ago</div><div class="dash-activity-status">New</div></div><div class="dash-activity-row"><div class="dash-activity-dot" style="background:#FF0000"></div><div class="dash-activity-txt">YouTube Short uploaded &mdash; 847 views in first hour</div><div class="dash-activity-time">3 hr ago</div><div class="dash-activity-status">Live</div></div></div></div></div></div></div>
        <div class="platforms-section"><div class="platforms-ring1"></div><div class="platforms-ring2"></div><span class="section-label" style="position:relative;z-index:1">Every platform. One machine.</span><div class="platforms-h">9+ platforms.<br><span>Zero extra work.</span></div><p class="platforms-sub">Your content reaches everywhere &mdash; automatically &mdash; every single day.</p><div class="platforms-chips"><div class="plat-chip"><div class="plat-chip-dot" style="background:#4285F4"></div><span class="plat-chip-name">Google</span></div><div class="plat-chip"><div class="plat-chip-dot" style="background:#fff"></div><span class="plat-chip-name">TikTok</span></div><div class="plat-chip"><div class="plat-chip-dot" style="background:#FF0000"></div><span class="plat-chip-name">YouTube</span></div><div class="plat-chip"><div class="plat-chip-dot" style="background:#10A37F"></div><span class="plat-chip-name">ChatGPT</span></div><div class="plat-chip"><div class="plat-chip-dot" style="background:#D97757"></div><span class="plat-chip-name">Claude</span></div><div class="plat-chip"><div class="plat-chip-dot" style="background:#4285F4"></div><span class="plat-chip-name">Gemini</span></div><div class="plat-chip"><div class="plat-chip-dot" style="background:#E1306C"></div><span class="plat-chip-name">Instagram</span></div><div class="plat-chip"><div class="plat-chip-dot" style="background:#1877F2"></div><span class="plat-chip-name">Facebook</span></div><div class="plat-chip"><div class="plat-chip-dot" style="background:#FF4500"></div><span class="plat-chip-name">Reddit</span></div></div><div class="platforms-foot"><p>Every other platform covers <span>1 channel</span>. Traffikora covers <span>all of them</span>.</p></div></div>
        <div class="limited-offer"><div class="lo-left"><div class="lo-badge">&#128293; Limited Offer</div><div class="lo-text"><strong>First month completely free for businesses that start this week.</strong>Start your 7-day trial today &mdash; if you love it, your first paid month is on us.</div></div><div class="lo-right"><button class="lo-cta-btn" onclick="window.location.href='/signup'">Claim Offer &rarr;</button></div></div>
        <div class="pricing-trust"><div class="pt-item"><div class="pt-icon">&#128737;</div><div class="pt-label">Free Plan — No Card Needed<span>No no credit card required</span></div></div><div class="pt-item"><div class="pt-icon">&#9889;</div><div class="pt-label">Cancel Any Time<span>One click &mdash; no questions asked</span></div></div><div class="pt-item"><div class="pt-icon">&#128274;</div><div class="pt-label">Secure Checkout<span>256-bit SSL &middot; Powered by Stripe</span></div></div><div class="pt-item"><div class="pt-icon">&#128172;</div><div class="pt-label">Live Support Included<span>Real humans &mdash; not bots</span></div></div></div>
        <div class="pricing-section"><div class="pricing-head"><span class="section-label">Simple pricing</span><div class="pricing-h">Stop losing leads.<br><em>Start growing today.</em></div>
<p class="pricing-sub" style="font-size:16px;color:#777;margin-top:16px;max-width:600px;margin-left:auto;margin-right:auto;line-height:1.75"><span style="color:#E8610A;font-family:'Playfair Display',serif;font-style:italic;font-size:18px;font-weight:700">Every day without Traffikora is a day your competitor gets the lead instead.</span><br><span style="color:#fff;font-size:15px;font-weight:400">Start free &mdash; no credit card &mdash; be live in 5 minutes.</span></p>
<div style="display:flex;gap:28px;justify-content:center;margin-top:22px;flex-wrap:wrap">
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#ddd"><span style="color:#E8610A;font-weight:700">&#10003;</span>Free plan &mdash; no card ever</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#ddd"><span style="color:#E8610A;font-weight:700">&#10003;</span>Live in under 5 minutes</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#ddd"><span style="color:#E8610A;font-weight:700">&#10003;</span>Cancel anytime &mdash; one click</span>
<span style="display:flex;align-items:center;gap:7px;font-size:13px;color:#ddd"><span style="color:#E8610A;font-weight:700">&#10003;</span>AI running 24/7 from day one</span>
</div></div><div class="pricing-grid" style="grid-template-columns:repeat(5,1fr)"><div class="plan"><div class="plan-name plan-name-light">Free</div><div class="plan-price"><sup style="font-size:18px">$</sup>0<sub>/forever</sub></div><div class="plan-desc">Try Traffikora with no credit card. Get a real taste of AI content before you commit.</div><ul class="plan-features"><li>3 AI blog posts per month</li><li>Preview content before publish</li><li>Access to content dashboard</li><li>No no credit card required</li><li>Upgrade anytime</li></ul><button class="plan-btn" onclick="window.location.href='/signup?plan=free'">Start Free &mdash; No Card</button></div><div class="plan"><div class="plan-name plan-name-light">Starter</div><div class="plan-price"><sup>$</sup>47<sub>/mo</sub></div><div class="plan-desc">Automate your marketing and show up online every single day.</div><ul class="plan-features"><li>Unlimited AI blog posts</li><li>AI social content for Facebook, Instagram, LinkedIn &amp; X</li><li>One-Push Publish to WordPress</li><li>Content Calendar &amp; Queue</li><li>Manual publishing controls</li><li>1 website connected</li></ul><button class="plan-btn" onclick="window.location.href='/signup?plan=starter'">Get Started</button></div><div class="plan plan-featured"><div class="plan-badge">Most Popular</div><div class="plan-name">Pro</div><div class="plan-price plan-price-light"><sup style="color:#aaa">$</sup>97<sub>/mo</sub></div><div class="plan-desc plan-desc-light">Fully hands-off. AI agents run every morning at 6am and handle everything.</div><ul class="plan-features plan-features-light"><li>Everything in Starter</li><li>AI Agents run daily at 6am automatically</li><li>Auto Mode &mdash; fully hands-off</li><li>TikTok + YouTube Shorts publishing</li><li>AI Engine Optimization &mdash; ChatGPT, Claude, Gemini</li><li>Advanced analytics</li></ul><button class="plan-btn plan-btn-featured" onclick="window.location.href='/signup?plan=pro'">Start Pro</button></div><div class="plan"><div class="plan-name plan-name-light">Agency</div><div class="plan-price"><sup>$</sup>297<sub>/mo</sub></div><div class="plan-desc">Manage up to 10 clients. White-label it and bill whatever you want.</div><ul class="plan-features"><li>Everything in Pro</li><li>Up to 10 client accounts</li><li>White-label dashboard</li><li>Client management portal</li><li>Bulk content generation</li><li>Agency analytics overview</li></ul><button class="plan-btn" onclick="window.location.href='/signup?plan=agency'">Start Agency Plan</button></div><div class="plan"><div class="plan-name plan-name-light">Enterprise</div><div class="plan-price"><sup>$</sup>997<sub>/mo</sub></div><div class="plan-desc">Unlimited clients, custom AI training, dedicated account manager.</div><ul class="plan-features"><li>Everything in Agency</li><li>Unlimited client accounts</li><li>Custom AI voice per client</li><li>Google Search Console integration</li><li>SLA uptime guarantee</li><li>Dedicated account manager</li></ul><button class="plan-btn" onclick="window.location.href='/contact'">Contact Us</button></div></div></div>
        <div class="roi-section"><div class="roi-inner"><div class="roi-left"><span class="section-label">The math is simple</span><div class="roi-h">2 extra clients pays<br>for a <em>full year.</em></div><p class="roi-p">Most businesses spend $2,000&ndash;$5,000/mo on agencies and get mediocre results. Traffikora starts at $97/mo &mdash; and never stops working.</p></div><div class="roi-right"><div class="roi-big">10<span>x</span></div><div class="roi-big-sub">Just 2 extra clients/month pays for itself 10 times over &mdash; every single month.</div><div class="roi-math"><div class="roi-math-item"><div class="roi-math-num">$47</div><div class="roi-math-lbl">Starting price per month</div></div><div class="roi-math-item"><div class="roi-math-num">2</div><div class="roi-math-lbl">Clients needed to break even</div></div><div class="roi-math-item"><div class="roi-math-num">&infin;</div><div class="roi-math-lbl">Return on investment after that</div></div></div></div></div></div>
        <div class="obj-section"><span class="section-label" style="text-align:center;display:block">Every question answered</span><div class="obj-h">We know what you&rsquo;re thinking.</div><div class="obj-grid"><div class="obj-card"><div class="obj-card-bar"></div><div class="obj-card-q">&ldquo;Is this complicated to set up?&rdquo;</div><div class="obj-card-a">No tech skills needed. You&rsquo;re live in under 5 minutes. We walk you through every step of the way.</div></div><div class="obj-card"><div class="obj-card-bar"></div><div class="obj-card-q">&ldquo;Will it work for my industry?&rdquo;</div><div class="obj-card-a">We support 16+ industries &mdash; dentists, salons, HVAC, law firms, restaurants, real estate and more.</div></div><div class="obj-card"><div class="obj-card-bar"></div><div class="obj-card-q">&ldquo;What if I don&rsquo;t like it?&rdquo;</div><div class="obj-card-a">Free plan available. No charge until day 8. Cancel anytime with one click. Zero risk, no questions asked.</div></div></div></div>
        <div class="features-section"><span class="section-label" style="text-align:center;display:block">Everything included</span><div class="features-h">One platform. Every channel.</div><div class="features-grid"><div class="feature-item"><div class="feature-icon">&#128269;</div><div class="feature-name">Google SEO</div><div class="feature-desc">Rank higher with automated SEO content and schema markup</div></div><div class="feature-item"><div class="feature-icon">&#9999;</div><div class="feature-name">Blog Automation</div><div class="feature-desc">Publish SEO blog posts to WordPress automatically every day</div></div><div class="feature-item"><div class="feature-icon">&#127909;</div><div class="feature-name">TikTok Publishing</div><div class="feature-desc">Push videos directly to TikTok with zero manual effort</div></div><div class="feature-item"><div class="feature-icon">&#9654;</div><div class="feature-name">YouTube Shorts</div><div class="feature-desc">Auto-upload your videos to YouTube Shorts automatically</div></div><div class="feature-item"><div class="feature-icon">&#129302;</div><div class="feature-name">AI Engine Optimization</div><div class="feature-desc">Get found on ChatGPT, Claude, Gemini, Copilot and more</div></div><div class="feature-item"><div class="feature-icon">&#128172;</div><div class="feature-name">Reddit Amplifier</div><div class="feature-desc">Build authority through strategic Reddit presence</div></div><div class="feature-item"><div class="feature-icon">&#128203;</div><div class="feature-name">Schema Markup</div><div class="feature-desc">Structured data injected automatically into your site</div></div><div class="feature-item"><div class="feature-icon">&#128202;</div><div class="feature-name">Search Console</div><div class="feature-desc">Direct Google Search Console integration and reporting</div></div></div></div>
        <div class="how-section"><span class="section-label" style="text-align:center;display:block">How it works</span><div class="how-h">Up and running <em style="color:#E8610A;font-style:italic">in minutes.</em></div><div class="how-grid"><div class="how-step"><div class="how-step-dot" style="background:#E8610A">1</div><div class="how-step-h">Connect your accounts</div><div class="how-step-p">Link your website, social profiles, and Google in one click. Takes less than 5 minutes total.</div></div><div class="how-step"><div class="how-step-dot" style="background:#111">2</div><div class="how-step-h">Tell us about your business</div><div class="how-step-p">Answer a few simple questions. Our AI learns everything about what you do and who you serve.</div></div><div class="how-step"><div class="how-step-dot" style="background:#111">3</div><div class="how-step-h">Watch it work</div><div class="how-step-p">Traffikora starts generating and publishing content immediately and never stops.</div></div></div></div>
        <div class="ai-section"><span class="section-label">Our #1 differentiator</span><div class="ai-h">The only platform that<br><em>optimizes for AI search</em></div><p class="ai-p">When someone asks ChatGPT or Claude to recommend a business like yours, Traffikora makes sure your name comes up. No other platform does this.</p><div class="ai-chips"><div class="ai-chip">Claude</div><div class="ai-chip">ChatGPT</div><div class="ai-chip">Gemini</div><div class="ai-chip">Copilot</div><div class="ai-chip">Perplexity</div><div class="ai-chip">Google</div></div><div class="ai-diff">Every other platform optimizes for Google only. We optimize for all of them.</div></div>
        <div class="testi-section"><span class="section-label" style="text-align:center;display:block">What clients say</span><div class="testi-h">Real businesses. <em>Real results.</em></div><div class="testi-grid"><div class="testi-card"><span class="testi-quote-mark">&ldquo;</span><div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-text">I used to spend 3 hours a day on marketing. Now I spend zero. Traffikora handles everything and my leads have tripled.</p><div class="testi-divider"></div><div class="testi-author"><div class="testi-avatar">M</div><div><div class="testi-name">Maria S.</div><div class="testi-role">Miami, FL &mdash; Salon Owner</div></div></div></div><div class="testi-card"><span class="testi-quote-mark">&ldquo;</span><div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-text">My Google ranking went from page 4 to page 1 in 6 weeks. I could not believe it. This platform is the real deal.</p><div class="testi-divider"></div><div class="testi-author"><div class="testi-avatar">J</div><div><div class="testi-name">James T.</div><div class="testi-role">Austin, TX &mdash; HVAC Business</div></div></div></div><div class="testi-card"><span class="testi-quote-mark">&ldquo;</span><div class="testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-text">A client told me they found me by asking ChatGPT. I did not even know that was possible. Traffikora made it happen.</p><div class="testi-divider"></div><div class="testi-author"><div class="testi-avatar">R</div><div><div class="testi-name">Rachel K.</div><div class="testi-role">Chicago, IL &mdash; Law Firm</div></div></div></div></div></div>
        <div class="faq-section"><div class="faq-head"><span class="section-label">FAQ</span><div class="faq-h">Everything you need to <em>know before you start</em></div></div><div class="faq-grid"><div class="faq-item"><div class="faq-q">Do I need any technical skills to use Traffikora?<span class="faq-q-arrow">+</span></div><div class="faq-a">None at all. If you can fill out a form, you can use Traffikora. Our onboarding wizard walks you through every step and you&rsquo;ll be live in under 5 minutes.</div></div><div class="faq-item"><div class="faq-q">What social media accounts do you need access to?<span class="faq-q-arrow">+</span></div><div class="faq-a">We request permission to post on your behalf to platforms you choose &mdash; Facebook, Instagram, TikTok, YouTube, and more. You control exactly which platforms are connected and can disconnect at any time.</div></div><div class="faq-item"><div class="faq-q">Will you post without my approval?<span class="faq-q-arrow">+</span></div><div class="faq-a">You can set Traffikora to fully automatic or review-before-publish mode. You are always in control of what goes live on your accounts.</div></div><div class="faq-item"><div class="faq-q">What happens when I cancel?<span class="faq-q-arrow">+</span></div><div class="faq-a">Cancel any time with one click &mdash; no phone call required, no questions asked. You keep access until the end of your billing period. All your data can be exported before you go.</div></div><div class="faq-item"><div class="faq-q">Is my data safe? What do you do with it?<span class="faq-q-arrow">+</span></div><div class="faq-a">We never sell your data. We use it only to generate and publish content on your behalf. All data is encrypted at rest and in transit. See our Privacy Policy for full details.</div></div><div class="faq-item"><div class="faq-q">Do you offer refunds?<span class="faq-q-arrow">+</span></div><div class="faq-a">Your first 7 days are completely free &mdash; no charge whatsoever. If you cancel before day 8, you owe nothing. After that, we offer a 30-day satisfaction guarantee on your first paid month.</div></div></div></div>
        <div class="mission-section"><div class="mission-inner"><span class="section-label">Why we built this</span><div class="mission-h">Built for the business owner<br>who can&rsquo;t afford to <em>fall behind.</em></div><div class="mission-quote-wrap"><div class="mission-quote-bar"></div><span class="mission-quote-mark">&ldquo;</span><p class="mission-quote-text">We built Traffikora because small business owners deserve the same marketing firepower as the big guys &mdash; without the agency price tag. Every day you wait is a day your competitor pulls further ahead. That&rsquo;s why we made it automatic.</p></div><div class="mission-stats-row"><div class="mission-stat"><div class="mission-stat-num">500+</div><div class="mission-stat-lbl">Small businesses automated</div></div><div class="mission-stat"><div class="mission-stat-num">9+</div><div class="mission-stat-lbl">Platforms covered simultaneously</div></div><div class="mission-stat"><div class="mission-stat-num">$97</div><div class="mission-stat-lbl">Less than 1 hour of agency time</div></div></div></div></div>
        <div class="cta-section"><div class="cta-gradient-line"></div><div class="cta-live-pill"><div class="cta-live-dot"></div>Live now &mdash; 500+ businesses running on Traffikora while you read this</div><div class="cta-h">While you read this,<br>your competitor&rsquo;s Traffikora<br>is <em>already running.</em></div><p class="cta-p">Start your free trial before they do. Free plan — no card needed. One click to cancel. Zero risk.</p><div class="cta-btn-row"><div class="guarantee-seal"><div class="gs-top">Free</div><div class="gs-num">7</div><div class="gs-bot">Day Trial</div></div><div><button class="btn-cta-dark" onclick="window.location.href='/signup'">Start Free — No Card Needed<div class="btn-cta-circle">&rarr;</div></button><div class="cta-notes-row"><span class="cta-note-item">Free plan available</span><span class="cta-note-item">Paid plans from $47/mo</span><span class="cta-note-item">Cancel anytime</span></div></div><div class="guarantee-seal"><div class="gs-top">Zero</div><div class="gs-num" style="font-size:15px;margin-top:3px">Risk</div><div class="gs-bot">Guaranteed</div></div></div><div class="cta-exit">Still not sure? <span>Start free. You have nothing to lose and everything to gain.</span></div></div>
        <div class="social-bar"><div class="social-bar-lbl">Follow Traffikora</div><div class="social-icons-row">
          <a href="https://www.facebook.com/profile.php?id=61590075525966" target="_blank" class="social-icon" style="background:#1877f2" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="https://www.instagram.com/traffikora/" target="_blank" class="social-icon" style="background:#c13584" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="https://x.com/traffikora" target="_blank" class="social-icon" style="background:#000;border:1px solid #333" aria-label="X"><svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="https://www.youtube.com/@traffikora" target="_blank" class="social-icon" style="background:#ff0000" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="black"/></svg></a>
          <a href="https://www.tiktok.com/@traffikora" target="_blank" class="social-icon" style="background:#010101;border:1px solid #333" aria-label="TikTok"><svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/></svg></a>
          <a href="#" class="social-icon" style="background:#0a66c2" aria-label="LinkedIn"><svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        </div></div>
      `}} />
      <Footer />
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          document.querySelectorAll('.faq-item').forEach(function(item) {
            var q = item.querySelector('.faq-q');
            var a = item.querySelector('.faq-a');
            var arrow = item.querySelector('.faq-q-arrow');
            q.style.cursor = 'pointer';
            q.addEventListener('click', function() {
              var isOpen = a.style.display === 'block';
              document.querySelectorAll('.faq-item').forEach(function(i) {
                i.querySelector('.faq-a').style.display = 'none';
                i.querySelector('.faq-q-arrow').textContent = '+';
              });
              if (!isOpen) { a.style.display = 'block'; arrow.textContent = '\u2212'; }
            });
          });
          var deadline = new Date('2026-06-15T23:59:59');
          function updateCountdown() {
            var now = new Date(); var diff = deadline - now; if (diff <= 0) return;
            var d = Math.floor(diff/86400000); var h = Math.floor((diff%86400000)/3600000);
            var m = Math.floor((diff%3600000)/60000); var s = Math.floor((diff%60000)/1000);
            var pd = function(n){return String(n).padStart(2,'0');};
            var el; el=document.getElementById('cd-days'); if(el) el.textContent=pd(d);
            el=document.getElementById('cd-hours'); if(el) el.textContent=pd(h);
            el=document.getElementById('cd-mins'); if(el) el.textContent=pd(m);
            el=document.getElementById('cd-secs'); if(el) el.textContent=pd(s);
          }
          updateCountdown(); setInterval(updateCountdown, 1000);
        })();
      `}} />
    </main>
  )
}
