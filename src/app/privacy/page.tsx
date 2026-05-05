export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px', fontFamily: 'sans-serif', color: '#111', lineHeight: '1.7' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '8px' }}>Privacy Policy</h1>
      <p style={{ color: '#555', marginBottom: '40px' }}>Effective Date: May 5, 2025 | Last Updated: May 5, 2025</p>

      <p>TraffikFuel ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform and services at <strong>https://www.traffikfuel.com</strong>. Please read this policy carefully. By using TraffikFuel, you consent to the practices described in this policy.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>1. Information We Collect</h2>
      <p><strong>Information you provide directly:</strong></p>
      <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
        <li>Account registration data: name, email address, password</li>
        <li>Billing information: credit card details (processed securely by Stripe — we do not store card numbers)</li>
        <li>Profile information: business name, website URL, social media handles</li>
        <li>Communications: support tickets, emails, and feedback you send us</li>
        <li>Phone number (if you enable SMS or two-factor authentication)</li>
      </ul>
      <p><strong>Information collected automatically:</strong></p>
      <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
        <li>Log data: IP address, browser type, operating system, pages visited, time and date of visits</li>
        <li>Device information: hardware model, unique device identifiers</li>
        <li>Usage data: features used, content published, actions taken within the platform</li>
        <li>Cookies and similar tracking technologies (see Section 7)</li>
      </ul>
      <p><strong>Information from third-party integrations:</strong></p>
      <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
        <li>When you connect social media accounts (TikTok, Instagram, Facebook, YouTube, etc.), we receive profile data, access tokens, and permission to act on your behalf as authorized by you</li>
        <li>Analytics data from connected platforms</li>
        <li>OAuth tokens are encrypted using AES-256 encryption</li>
      </ul>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
        <li>Create and manage your account</li>
        <li>Provide, operate, and improve the TraffikFuel platform and services</li>
        <li>Process payments and manage subscriptions</li>
        <li>Publish content on your behalf to connected social and web platforms</li>
        <li>Send transactional emails (account verification, password reset, billing receipts)</li>
        <li>Send service updates, security alerts, and support messages</li>
        <li>Send marketing communications (you may opt out at any time)</li>
        <li>Detect and prevent fraud, abuse, and security incidents</li>
        <li>Comply with legal obligations</li>
        <li>Analyze usage trends to improve our platform</li>
      </ul>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>3. How We Share Your Information</h2>
      <p>We do not sell your personal information. We may share your information in the following circumstances:</p>
      <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
        <li><strong>Service providers:</strong> We share data with trusted third-party vendors who help us operate the platform, including Supabase (database), Stripe (payments), Resend (email), Twilio (SMS), Vercel (hosting), and Anthropic (AI features). These providers are contractually bound to protect your data.</li>
        <li><strong>Third-party platforms:</strong> When you connect social accounts, we share necessary data with those platforms (TikTok, Google, Meta, etc.) to fulfill your publishing requests.</li>
        <li><strong>Legal requirements:</strong> We may disclose your information if required by law, subpoena, or to protect the rights, property, or safety of TraffikFuel, our users, or others.</li>
        <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.</li>
        <li><strong>With your consent:</strong> We may share information with third parties when you give us explicit permission to do so.</li>
      </ul>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>4. TikTok Integration</h2>
      <p>When you connect your TikTok account to TraffikFuel, we access your TikTok profile information and content permissions as authorized through TikTok's Login Kit. Specifically, we may access:</p>
      <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
        <li>Your TikTok username, display name, and profile picture</li>
        <li>Your TikTok user ID (to identify your account)</li>
        <li>Permissions to publish content on your behalf (if granted)</li>
      </ul>
      <p>We use this data only to provide the TraffikFuel service to you. We do not share your TikTok data with third parties except as necessary to operate the Service. Your TikTok access tokens are encrypted and stored securely. You may disconnect your TikTok account at any time from your TraffikFuel account settings, which will revoke our access to your TikTok data.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>5. Data Retention</h2>
      <p>We retain your personal information for as long as your account is active or as needed to provide services. If you close your account, we will delete or anonymize your personal data within 90 days, except where we are required to retain it for legal, regulatory, or legitimate business purposes (such as fraud prevention or tax records). Aggregated, anonymized data may be retained indefinitely.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>6. Data Security</h2>
      <p>We implement industry-standard security measures to protect your information, including:</p>
      <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
        <li>AES-256 encryption for sensitive data at rest (including OAuth tokens)</li>
        <li>TLS/HTTPS encryption for all data in transit</li>
        <li>Email verification and optional two-factor authentication (SMS and TOTP)</li>
        <li>Brute-force protection and rate limiting on login endpoints</li>
        <li>Regular security audits and monitoring</li>
      </ul>
      <p>Despite these measures, no system is completely secure. We cannot guarantee absolute security and encourage you to use a strong, unique password and enable two-factor authentication.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>7. Cookies and Tracking</h2>
      <p>TraffikFuel uses cookies and similar technologies to operate and improve the Service. Types of cookies we use:</p>
      <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
        <li><strong>Essential cookies:</strong> Required for authentication and core platform functionality</li>
        <li><strong>Analytics cookies:</strong> Help us understand how users interact with the platform (e.g., page views, feature usage)</li>
        <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
      </ul>
      <p>You can control cookies through your browser settings. Disabling essential cookies may prevent you from using certain features of the Service.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>8. Your Rights and Choices</h2>
      <p>Depending on your location, you may have the following rights regarding your personal data:</p>
      <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
        <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
        <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal obligations)</li>
        <li><strong>Portability:</strong> Request your data in a portable format</li>
        <li><strong>Opt-out of marketing:</strong> Unsubscribe from marketing emails at any time using the link in any email</li>
        <li><strong>Withdraw consent:</strong> Where processing is based on consent, you may withdraw it at any time</li>
      </ul>
      <p>To exercise any of these rights, contact us at <a href="mailto:privacy@traffikfuel.com" style={{ color: '#0070f3' }}>privacy@traffikfuel.com</a>.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>9. California Privacy Rights (CCPA)</h2>
      <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and how it is used, the right to delete your personal information, and the right to opt out of the sale of personal information. We do not sell personal information. To submit a CCPA request, contact us at <a href="mailto:privacy@traffikfuel.com" style={{ color: '#0070f3' }}>privacy@traffikfuel.com</a>.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>10. GDPR (European Users)</h2>
      <p>If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, you have rights under the General Data Protection Regulation (GDPR) including the right of access, rectification, erasure, restriction of processing, data portability, and the right to object. Our legal basis for processing your data is typically contract performance, legitimate interests, or your consent. To submit a GDPR request or lodge a complaint, contact us at <a href="mailto:privacy@traffikfuel.com" style={{ color: '#0070f3' }}>privacy@traffikfuel.com</a>.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>11. Children's Privacy</h2>
      <p>TraffikFuel is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that a child under 18 has provided us with personal information, we will delete it promptly. If you believe a child has provided us with their information, please contact us at <a href="mailto:support@traffikfuel.com" style={{ color: '#0070f3' }}>support@traffikfuel.com</a>.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>12. Third-Party Links</h2>
      <p>Our Service may contain links to third-party websites or services. We are not responsible for the privacy practices of those third parties. We encourage you to review the privacy policies of any third-party sites you visit.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>13. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email or by posting a prominent notice on our website prior to the changes taking effect. Your continued use of TraffikFuel after the effective date constitutes your acceptance of the updated policy.</p>

      <h2 style={{ fontSize: '20px', fontWeight: '600', marginTop: '40px', marginBottom: '12px' }}>14. Contact Us</h2>
      <p>If you have questions, concerns, or requests regarding this Privacy Policy, please contact us:</p>
      <p><strong>TraffikFuel — Privacy Team</strong><br />
      Email: <a href="mailto:privacy@traffikfuel.com" style={{ color: '#0070f3' }}>privacy@traffikfuel.com</a><br />
      Support: <a href="mailto:support@traffikfuel.com" style={{ color: '#0070f3' }}>support@traffikfuel.com</a><br />
      Website: <a href="https://www.traffikfuel.com" style={{ color: '#0070f3' }}>https://www.traffikfuel.com</a></p>

      <p style={{ marginTop: '60px', paddingTop: '24px', borderTop: '1px solid #eee', color: '#888', fontSize: '14px' }}>© 2025 TraffikFuel. All rights reserved. | <a href="/terms" style={{ color: '#0070f3' }}>Terms of Service</a></p>
    </main>
  )
}