// @ts-nocheck
'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Permissions() {
  const html = `
    <style>
      .pm-hero { background: #111; padding: 120px 24px 80px; text-align: center; border-bottom: 1px solid #222; }
      .pm-hero .eyebrow { font-family: DM Sans, sans-serif; font-size: 13px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: #E8610A; margin-bottom: 18px; }
      .pm-hero h1 { font-family: Playfair Display, serif; font-size: clamp(36px,6vw,64px); font-weight: 700; color: #fff; line-height: 1.15; max-width: 800px; margin: 0 auto 20px; }
      .pm-hero p { font-family: DM Sans, sans-serif; font-size: 18px; color: rgba(255,255,255,0.6); max-width: 560px; margin: 0 auto; line-height: 1.6; }
      .pm-body { background: #fff; color: #111; padding: 80px 24px 120px; }
      .pm-body .inner { max-width: 780px; margin: 0 auto; }
      .pm-body .updated { font-family: DM Sans, sans-serif; font-size: 13px; color: #888; margin-bottom: 48px; text-transform: uppercase; letter-spacing: 0.08em; }
      .pm-body h2 { font-family: Playfair Display, serif; font-size: 26px; font-weight: 700; color: #111; margin: 48px 0 16px; padding-bottom: 12px; border-bottom: 2px solid #E8610A; }
      .pm-body h3 { font-family: Playfair Display, serif; font-size: 19px; font-weight: 700; color: #111; margin: 32px 0 10px; }
      .pm-body p { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 16px; }
      .pm-body ul { margin: 12px 0 20px 24px; list-style: disc; }
      .pm-body ul li { font-family: DM Sans, sans-serif; font-size: 16px; line-height: 1.8; color: #333; margin-bottom: 8px; }
      .pm-body a { color: #E8610A; }
      .pm-cta { margin-top: 56px; background: #111; border-radius: 12px; padding: 40px; text-align: center; }
      .pm-cta p { font-family: DM Sans, sans-serif; color: rgba(255,255,255,0.7); margin-bottom: 20px; }
      .pm-cta a { display: inline-block; background: #E8610A; color: #fff; font-family: DM Sans, sans-serif; font-weight: 600; font-size: 15px; padding: 14px 32px; border-radius: 8px; text-decoration: none; }
    </style>
    <section class='pm-hero'>
      <p class='eyebrow'>Transparency</p>
      <h1>Platform Permissions</h1>
      <p>Exactly what access Traffikora requests from your social accounts and why.</p>
    </section>
    <section class='pm-body'>
      <div class='inner'>
        <p class='updated'>Last updated: June 2025</p>
        <h2>Overview</h2>
        <p>To deliver its core features, Traffikora requests certain permissions from the social media platforms you connect. This page explains exactly what permissions we request, why we need them, and what we never do with them.</p>
        <h2>Facebook and Instagram</h2>
        <h3>Permissions Requested</h3>
        <ul>
          <li><strong>pages_manage_posts</strong> - Publish, edit, and delete posts on your connected Facebook Pages</li>
          <li><strong>pages_read_engagement</strong> - Read engagement data such as likes, comments, and shares on your Pages</li>
          <li><strong>instagram_basic</strong> - Access your Instagram professional account profile and media</li>
          <li><strong>instagram_content_publish</strong> - Publish photos and videos to your Instagram professional account</li>
          <li><strong>instagram_manage_insights</strong> - Access your Instagram account insights and analytics</li>
          <li><strong>pages_show_list</strong> - Show the list of Pages you manage so you can select which to connect</li>
        </ul>
        <h3>Why We Need These</h3>
        <p>These permissions allow Traffikora to schedule and publish content on your behalf, retrieve performance analytics, and display your content calendar accurately.</p>
        <h2>Google and YouTube</h2>
        <h3>Permissions Requested</h3>
        <ul>
          <li><strong>youtube.upload</strong> - Upload videos to your YouTube channel</li>
          <li><strong>youtube.readonly</strong> - Read your channel data and video analytics</li>
          <li><strong>youtube.force-ssl</strong> - Required by Google for secure API access</li>
        </ul>
        <h3>Why We Need These</h3>
        <p>These permissions allow Traffikora to schedule and publish YouTube videos and retrieve channel performance data for your analytics dashboard.</p>
        <h2>TikTok</h2>
        <h3>Permissions Requested</h3>
        <ul>
          <li><strong>video.publish</strong> - Post videos directly to your TikTok account</li>
          <li><strong>video.list</strong> - View your TikTok videos and their metadata</li>
          <li><strong>user.info.basic</strong> - Access your TikTok username and profile photo</li>
        </ul>
        <h3>Why We Need These</h3>
        <p>These permissions allow Traffikora to schedule TikTok posts, display your content calendar, and retrieve basic performance data.</p>
        <h2>LinkedIn</h2>
        <ul>
          <li><strong>w_member_social</strong> - Post on your behalf to LinkedIn</li>
          <li><strong>r_organization_social</strong> - Read posts and analytics for LinkedIn Pages you manage</li>
          <li><strong>rw_organization_admin</strong> - Manage and publish to LinkedIn Pages</li>
        </ul>
        <h2>X (Twitter)</h2>
        <ul>
          <li><strong>tweet.read</strong> - Read your tweets and account information</li>
          <li><strong>tweet.write</strong> - Post tweets and threads on your behalf</li>
          <li><strong>users.read</strong> - Access your account profile for display purposes</li>
        </ul>
        <h2>What We Never Do</h2>
        <ul>
          <li>We never post to your accounts without explicit scheduling or approval by you</li>
          <li>We never access your private messages or direct message history</li>
          <li>We never sell your social media access tokens to third parties</li>
          <li>We never use your connected accounts to advertise or promote our own brand</li>
          <li>We store access tokens encrypted and refresh them only as required by each platform</li>
        </ul>
        <h2>Revoking Permissions</h2>
        <p>You can disconnect any connected platform at any time from your Traffikora account settings. You can also revoke access directly from each platform's app settings. Revoking access will stop Traffikora from publishing to that platform but will not delete your existing account data.</p>
        <div class='pm-cta'>
          <p>Questions about platform permissions?</p>
          <a href='/contact'>Contact Us</a>
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