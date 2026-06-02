// @ts-nocheck
'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function RefundPolicy() {
  const html = `
    <style>
      .rp-hero { background: #111; padding: 120px 24px 80px; text-align: center; border-bottom: 1px solid #222; }
      .rp-hero .eyebrow { font-family: DM Sans, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #E8610A; margin-bottom: 18px; }
      .rp-hero h1 { font-family: Playfair Display, serif; font-size: clamp(36px,6vw,64px); font-weight: 700; color: #fff; line-height: 1.15; max-width: 800px; margin: 0 auto 20px; }
      .rp-hero p { font-family: DM Sans, sans-serif; font-size: 18px; color: rgba(255,255,255,0.6); max-width: 560px; margin: 0 auto; line-height: 1.6; }
      .rp-body { background: #fff; color: #111; padding: 80px 24px 120px; }
      .rp-body .inner { max-width: 780px; margin: 0 auto; }
      .rp-body .updated { font-family: DM Sans, sans-serif; font-size: 13px; color: #888; margin-bottom: 48px; text-transform: uppercase; letter-spacing: 0.08em; }
      .rp-body h2 { font-family: Playfair Display, serif; font-size: 26px; font-weight: 700; color: #111; margin: 48px 0 16px; padding-bottom: 12px; border-bottom: 2px solid #E8610A; }
      .rp-body h3 { font-family: Playfair Display, serif; font-size: 19px; font-weight: 700; color: #111; margin: 32px 0 10px; }
      .rp-body p { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 16px; }
      .rp-body ul { margin: 12px 0 20px 24px; list-style: disc; }
      .rp-body ul li { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 8px; }
      .rp-body a { color: #E8610A; }
      .rp-cta { margin-top: 56px; background: #111; border-radius: 12px; padding: 40px; text-align: center; }
      .rp-cta p { font-family: DM Sans, sans-serif; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
      .rp-cta a { display: inline-block; background: #E8610A; color: #fff; font-family: DM Sans, sans-serif; font-weight: 600; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none; }
    </style>
    <section class='rp-hero'>
      <p class='eyebrow'>Billing</p>
      <h1>Refund Policy</h1>
      <p>Our Free plan available and 30-day satisfaction guarantee, explained clearly.</p>
    </section>
    <section class='rp-body'>
      <div class='inner'>
        <p class='updated'>Last updated: June 2026</p>
        <h2>Our Commitment</h2>
        <p>We stand behind Traffikora with a clear, customer-friendly refund policy. We want you to feel confident trying our platform, and we make it easy to get your money back if it is not the right fit.</p>
        <h2>Free Trial</h2>
        <p>All paid Traffikora plans include a Free plan available. You will not be charged during the trial period. You may cancel at any time before the trial ends with no charge.</p>
        <ul>
          <li>No credit card required to start a trial on select plans</li>
          <li>Trial access includes the full feature set of your selected plan</li>
          <li>Trial ends automatically and converts to a paid subscription unless cancelled</li>
        </ul>
        <h2>30-Day Satisfaction Guarantee</h2>
        <p>If you are not satisfied with Traffikora within the first 30 days of your first paid billing cycle, contact us and we will issue a full refund. No questions asked.</p>
        <ul>
          <li>Applies to first-time subscribers only</li>
          <li>Applies to both monthly and annual plans</li>
          <li>Refund issued to the original payment method within 5-10 business days</li>
          <li>Your account will be downgraded to the free tier upon refund</li>
        </ul>
        <h2>After 30 Days</h2>
        <p>After the 30-day window, we do not offer refunds for the current billing period. You may cancel your subscription at any time and retain access to your plan features until the end of the billing period.</p>
        <h2>Annual Plans</h2>
        <p>Annual subscriptions are eligible for the 30-day money-back guarantee. After 30 days, annual subscriptions are non-refundable. We recommend starting with a monthly plan if you are unsure whether Traffikora is right for you.</p>
        <h2>Cancellations</h2>
        <p>You may cancel your subscription at any time from your account settings under Billing. Cancellation takes effect at the end of your current billing period. You will not be charged again after cancellation.</p>
        <h2>Exceptions</h2>
        <p>Refunds will not be issued for:</p>
        <ul>
          <li>Accounts that have violated our Terms of Service</li>
          <li>Requests made after 30 days of the first paid charge</li>
          <li>Add-ons or one-time purchases</li>
        </ul>
        <h2>How to Request a Refund</h2>
        <p>Email us at <a href='mailto:support@traffikora.com'>support@traffikora.com</a> or use the live chat on our site. Include your account email and the reason for your request. Refunds are processed within 5-10 business days.</p>
        <div class='rp-cta'>
          <p>Need help with a refund or cancellation?</p>
          <a href='/contact'>Contact Support</a>
        </div>
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