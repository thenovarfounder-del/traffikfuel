// @ts-nocheck
'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Accessibility() {
  const html = `
    <style>
      .ac-hero { background: #111; padding: 120px 24px 80px; text-align: center; border-bottom: 1px solid #222; }
      .ac-hero .eyebrow { font-family: DM Sans, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #E8610A; margin-bottom: 18px; }
      .ac-hero h1 { font-family: Playfair Display, serif; font-size: clamp(36px,6vw,64px); font-weight: 700; color: #fff; line-height: 1.15; max-width: 800px; margin: 0 auto 20px; }
      .ac-hero p { font-family: DM Sans, sans-serif; font-size: 18px; color: rgba(255,255,255,0.6); max-width: 560px; margin: 0 auto; line-height: 1.6; }
      .ac-body { background: #fff; color: #111; padding: 80px 24px 120px; }
      .ac-body .inner { max-width: 780px; margin: 0 auto; }
      .ac-body .updated { font-family: DM Sans, sans-serif; font-size: 13px; color: #888; margin-bottom: 48px; text-transform: uppercase; letter-spacing: 0.08em; }
      .ac-body h2 { font-family: Playfair Display, serif; font-size: 26px; font-weight: 700; color: #111; margin: 48px 0 16px; padding-bottom: 12px; border-bottom: 2px solid #E8610A; }
      .ac-body h3 { font-family: Playfair Display, serif; font-size: 19px; font-weight: 700; color: #111; margin: 32px 0 10px; }
      .ac-body p { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 16px; }
      .ac-body ul { margin: 12px 0 20px 24px; list-style: disc; }
      .ac-body ul li { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 8px; }
      .ac-body a { color: #E8610A; }
      .ac-cta { margin-top: 56px; background: #111; border-radius: 12px; padding: 40px; text-align: center; }
      .ac-cta p { font-family: DM Sans, sans-serif; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
      .ac-cta a { display: inline-block; background: #E8610A; color: #fff; font-family: DM Sans, sans-serif; font-weight: 600; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none; }
    </style>
    <section class='ac-hero'>
      <p class='eyebrow'>Accessibility</p>
      <h1>Accessibility Statement</h1>
      <p>Our commitment to making Traffikora usable by everyone.</p>
    </section>
    <section class='ac-body'>
      <div class='inner'>
        <p class='updated'>Last updated: June 2025</p>
        <h2>Our Commitment</h2>
        <p>Traffikora is committed to ensuring digital accessibility for people of all abilities. We believe that everyone deserves equal access to the tools and information on our platform, and we are continually working to improve the user experience for all visitors.</p>
        <h2>Standards We Target</h2>
        <p>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as defined by the World Wide Web Consortium (W3C). These guidelines explain how to make web content more accessible to people with disabilities, including those who experience visual, auditory, motor, or cognitive impairments.</p>
        <h2>What We Do</h2>
        <h3>Keyboard Navigation</h3>
        <p>Our website is designed to be navigable using a keyboard alone. All interactive elements including buttons, links, form fields, and menus are reachable via the Tab key and operable via keyboard commands.</p>
        <h3>Screen Reader Support</h3>
        <p>We use semantic HTML elements, ARIA labels, and descriptive alt text on images to ensure compatibility with screen readers including NVDA, JAWS, and VoiceOver.</p>
        <h3>Color and Contrast</h3>
        <p>We design with sufficient color contrast ratios between text and background colors. Our brand palette has been reviewed to ensure readability for users with low vision or color vision deficiencies.</p>
        <h3>Responsive Design</h3>
        <p>Traffikora is fully responsive across devices including desktops, tablets, and mobile phones. Content reflows gracefully at different screen sizes and zoom levels up to 400%.</p>
        <h3>Form Accessibility</h3>
        <p>All form inputs include visible labels, descriptive placeholder text, and clear error messages to assist users who rely on assistive technologies.</p>
        <h3>No Time-Based Barriers</h3>
        <p>Where time limits exist such as countdown timers, users are not penalized for needing more time to complete actions within the core product interface.</p>
        <h2>Known Limitations</h2>
        <p>We are aware of the following areas where we are actively working to improve:</p>
        <ul>
          <li>Some third-party embedded widgets including our live chat tool Crisp may not fully conform to WCAG 2.1 AA. We are monitoring updates from these vendors.</li>
          <li>Certain social media preview embeds may have limited screen reader support depending on the originating platform.</li>
          <li>Legacy solution subpages are being updated to improve heading hierarchy and focus management.</li>
        </ul>
        <h2>Ongoing Efforts</h2>
        <p>Accessibility is an ongoing commitment. Our development process includes:</p>
        <ul>
          <li>Accessibility checks during code review for new features</li>
          <li>Regular audits using automated tools such as Lighthouse and axe, plus manual testing</li>
          <li>User feedback as a primary driver of accessibility improvements</li>
        </ul>
        <h2>Report an Issue</h2>
        <p>If you encounter an accessibility barrier on our website or within the Traffikora platform, we want to hear from you. Please contact us and describe the issue as specifically as possible. We aim to acknowledge all accessibility reports within 2 business days and resolve critical issues within 10 business days.</p>
        <h2>Alternative Access</h2>
        <p>If you are unable to access any content or feature due to a disability, contact our support team and we will work to provide the information or functionality through an alternative method.</p>
        <div class='ac-cta'>
          <p>Found an accessibility issue or need assistance?</p>
          <a href='/contact'>Report an Issue</a>
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