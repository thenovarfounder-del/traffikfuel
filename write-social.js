const fs = require('fs')

let content = fs.readFileSync('C:/Users/randy/traffikfuel/src/app/dashboard/referral/page.tsx', 'utf8')

const oldButtons = `            <a href={\`https://wa.me/?text=Hey!%20I%20use%20Traffikora%20to%20automate%20all%20my%20marketing%20%E2%80%94%20try%20it%20free%3A%20\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#25D366', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>WhatsApp</a>
            <a href={\`sms:?body=Hey!%20I%20use%20Traffikora%20to%20automate%20my%20marketing%20%E2%80%94%20try%20it%20free%3A%20\${referralLink}\`} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#6366f1', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Text a Friend</a>
            <a href={\`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#1877F2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Facebook</a>
            <a href={\`https://twitter.com/intent/tweet?text=I%20use%20Traffikora%20to%20automate%20my%20marketing%20%E2%80%94%20you%20should%20try%20it%3A&url=\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>X (Twitter)</a>
            <a href={\`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#0A66C2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>LinkedIn</a>
            <a href={\`mailto:?subject=Try%20Traffikora%20for%20free&body=Hey!%20I%20use%20Traffikora%20to%20automate%20all%20my%20marketing.%20Use%20my%20link%20to%20get%2020%25%20off%20your%20first%20month%3A%20\${encodeURIComponent(referralLink)}\`} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600' }}>Email</a>`

const newButtons = `            <a href={\`https://wa.me/?text=Hey!%20I%20use%20Traffikora%20to%20automate%20all%20my%20marketing%20%E2%80%94%20try%20it%20free%3A%20\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#25D366', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href={\`sms:?body=Hey!%20I%20use%20Traffikora%20to%20automate%20my%20marketing%20%E2%80%94%20try%20it%20free%3A%20\${referralLink}\`} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#6366f1', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/></svg>
              Text a Friend
            </a>
            <a href={\`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#1877F2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              Facebook
            </a>
            <a href={\`https://twitter.com/intent/tweet?text=I%20use%20Traffikora%20to%20automate%20my%20marketing%20%E2%80%94%20you%20should%20try%20it%3A&url=\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#000', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="white"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              X (Twitter)
            </a>
            <a href={\`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(referralLink)}\`} target="_blank" style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#0A66C2', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
            <a href={\`mailto:?subject=Try%20Traffikora%20for%20free&body=Hey!%20I%20use%20Traffikora%20to%20automate%20all%20my%20marketing.%20Use%20my%20link%20to%20get%2020%25%20off%20your%20first%20month%3A%20\${encodeURIComponent(referralLink)}\`} style={{ padding: '10px 20px', borderRadius: '8px', backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a', color: '#fff', textDecoration: 'none', fontSize: '13px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Email
            </a>`

content = content.replace(oldButtons, newButtons)
fs.writeFileSync('C:/Users/randy/traffikfuel/src/app/dashboard/referral/page.tsx', content)
console.log('SUCCESS: Share buttons updated with logos')