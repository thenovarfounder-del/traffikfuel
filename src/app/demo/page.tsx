// @ts-nocheck
'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Demo() {
  const html = `
    <style>
      .demo-page { background: #111; min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 120px 24px; }
      .demo-card { max-width: 640px; width: 100%; text-align: center; }
      .demo-icon { width: 80px; height: 80px; background: rgba(232,97,10,0.12); border: 2px solid rgba(232,97,10,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; font-size: 32px; }
      .demo-eyebrow { font-family: DM Sans, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #E8610A; margin-bottom: 20px; }
      .demo-card h1 { font-family: Playfair Display, serif; font-size: clamp(32px,5vw,56px); font-weight: 700; color: #fff; line-height: 1.2; margin-bottom: 20px; }
      .demo-card p { font-family: DM Sans, sans-serif; font-size: 18px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 40px; }
      .demo-form { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; margin-bottom: 32px; }
      .demo-input { font-family: DM Sans, sans-serif; font-size: 15px; padding: 14px 20px; border-radius: 8px; border: 1px solid #333; background: #1a1a1a; color: #fff; width: 280px; outline: none; }
      .demo-input::placeholder { color: #555; }
      .demo-btn { font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 600; padding: 14px 28px; border-radius: 8px; background: #E8610A; color: #fff; border: none; cursor: pointer; }
      .demo-note { font-family: DM Sans, sans-serif; font-size: 13px; color: #555; }
      .demo-note a { color: #E8610A; text-decoration: underline; }
      .demo-divider { margin: 48px auto; width: 60px; height: 2px; background: #222; }
      .demo-alt { font-family: DM Sans, sans-serif; font-size: 15px; color: rgba(255,255,255,0.5); margin-bottom: 20px; }
      .demo-trial { display: inline-block; font-family: DM Sans, sans-serif; font-size: 15px; font-weight: 600; padding: 14px 32px; border-radius: 8px; border: 1.5px solid #E8610A; color: #E8610A; text-decoration: none; }
    </style>
    <section class='demo-page'>
      <div class='demo-card'>
        <div class='demo-icon'>&#9654;</div>
        <p class='demo-eyebrow'>2-Minute Demo</p>
        <h1>See Traffikora in Action</h1>
        <p>Our demo video is being produced right now. Drop your email and we will send it to you the moment it goes live -- plus early access to the platform.</p>
        <div class='demo-form'>
          <input class='demo-input' type='email' placeholder='Enter your email address' />
          <button class='demo-btn' onclick="this.textContent='Got it!';this.style.background='#2E7D32';">Notify Me</button>
        </div>
        <p class='demo-note'>No spam. Just the demo. <a href='/contact'>Questions? Contact us.</a></p>
        <div class='demo-divider'></div>
        <p class='demo-alt'>Ready to get started without the video?</p>
        <a href='/' class='demo-trial'>Start Your Free 7-Day Trial</a>
      </div>
    </section>
  `;
  return (
    <>
      <Nav />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Footer />
    </>
  );
}