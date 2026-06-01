const fs = require('fs');

let chat = fs.readFileSync('src/components/ChatBubble.tsx', 'utf8');

// Replace all avatar SVGs with a beautiful illustrated avatar using a real photo-style approach
const uglyAvatar44 = `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                    <rect width="44" height="44" fill="#1a0e00"/>
                    <ellipse cx="22" cy="10" rx="13" ry="10" fill="#c8a020"/>
                    <ellipse cx="22" cy="7" rx="13" ry="6" fill="#d4aa22"/>
                    <rect x="9" y="9" width="4" height="20" rx="3" fill="#c8a020"/>
                    <rect x="31" y="9" width="4" height="20" rx="3" fill="#c8a020"/>
                    <ellipse cx="22" cy="22" rx="10" ry="12" fill="#f5c5a0"/>
                    <ellipse cx="18" cy="20" rx="2" ry="2.2" fill="#3a2000"/>
                    <ellipse cx="26" cy="20" rx="2" ry="2.2" fill="#3a2000"/>
                    <ellipse cx="18.7" cy="19.3" rx="0.7" ry="0.7" fill="#fff"/>
                    <ellipse cx="26.7" cy="19.3" rx="0.7" ry="0.7" fill="#fff"/>
                    <path d="M15.5 17 Q18 15.8 20.5 17" stroke="#8B6914" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
                    <path d="M23.5 17 Q26 15.8 28.5 17" stroke="#8B6914" strokeWidth="1.1" fill="none" strokeLinecap="round"/>
                    <ellipse cx="22" cy="23.5" rx="1.2" ry="0.8" fill="#e0a882"/>
                    <path d="M18.5 26.5 Q22 29.5 25.5 26.5" stroke="#c0826a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
                    <ellipse cx="22" cy="27.2" rx="3.2" ry="1.3" fill="#e07060"/>
                    <rect x="19" y="33" width="6" height="5" rx="2" fill="#f5c5a0"/>
                    <ellipse cx="22" cy="42" rx="14" ry="5" fill="#E8610A"/>
                  </svg>`;

const niceAvatar44 = `<svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
  <defs>
    <radialGradient id="bg44" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#2d1b4e"/>
      <stop offset="100%" stopColor="#1a0e2e"/>
    </radialGradient>
    <radialGradient id="skin44" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#fce0c8"/>
      <stop offset="100%" stopColor="#f0b898"/>
    </radialGradient>
    <radialGradient id="hair44" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stopColor="#8B4513"/>
      <stop offset="100%" stopColor="#5C2D0A"/>
    </radialGradient>
  </defs>
  <rect width="44" height="44" fill="url(#bg44)"/>
  <ellipse cx="22" cy="44" rx="18" ry="10" fill="#E8610A" opacity="0.9"/>
  <rect x="17" y="34" width="10" height="8" rx="3" fill="url(#skin44)"/>
  <ellipse cx="22" cy="22" rx="11" ry="13" fill="url(#skin44)"/>
  <ellipse cx="22" cy="13" rx="12" ry="10" fill="url(#hair44)"/>
  <ellipse cx="22" cy="10" rx="12" ry="7" fill="#6B3410"/>
  <rect x="10" y="11" width="4" height="16" rx="3" fill="url(#hair44)"/>
  <rect x="30" y="11" width="4" height="16" rx="3" fill="url(#hair44)"/>
  <ellipse cx="17.5" cy="20.5" rx="2.5" ry="2.8" fill="#fff"/>
  <ellipse cx="26.5" cy="20.5" rx="2.5" ry="2.8" fill="#fff"/>
  <ellipse cx="17.5" cy="20.8" rx="1.6" ry="1.8" fill="#3B2060"/>
  <ellipse cx="26.5" cy="20.8" rx="1.6" ry="1.8" fill="#3B2060"/>
  <ellipse cx="18.1" cy="20.1" rx="0.6" ry="0.6" fill="#fff"/>
  <ellipse cx="27.1" cy="20.1" rx="0.6" ry="0.6" fill="#fff"/>
  <path d="M14.5 17.5 Q17.5 15.5 20.5 17" stroke="#4a2800" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
  <path d="M23.5 17 Q26.5 15.5 29.5 17.5" stroke="#4a2800" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
  <ellipse cx="15.5" cy="23" rx="1.5" ry="1" fill="#f0a0a0" opacity="0.5"/>
  <ellipse cx="28.5" cy="23" rx="1.5" ry="1" fill="#f0a0a0" opacity="0.5"/>
  <ellipse cx="22" cy="24" rx="1.3" ry="0.9" fill="#e8a888"/>
  <path d="M18.5 27.5 Q22 30.5 25.5 27.5" stroke="#d06050" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
  <ellipse cx="22" cy="28.2" rx="3.5" ry="1.5" fill="#e8706a"/>
  <ellipse cx="22" cy="27.5" rx="3.5" ry="1" fill="#f08880"/>
</svg>`;

const uglyAvatar28 = `<svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                      <rect width="28" height="28" fill="#1a0e00"/>
                      <ellipse cx="14" cy="8" rx="8" ry="7" fill="#d4aa22"/>
                      <ellipse cx="14" cy="14" rx="6.5" ry="8" fill="#f5c5a0"/>
                      <ellipse cx="11.5" cy="13" rx="1.3" ry="1.4" fill="#3a2000"/>
                      <ellipse cx="16.5" cy="13" rx="1.3" ry="1.4" fill="#3a2000"/>
                      <path d="M11.5 17 Q14 19.5 16.5 17" stroke="#c0826a" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
                      <ellipse cx="14" cy="26" rx="9" ry="4" fill="#E8610A"/>
                    </svg>`;

const niceAvatar28 = `<svg viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
  <defs>
    <radialGradient id="bg28" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#2d1b4e"/>
      <stop offset="100%" stopColor="#1a0e2e"/>
    </radialGradient>
  </defs>
  <rect width="28" height="28" fill="url(#bg28)"/>
  <ellipse cx="14" cy="28" rx="11" ry="6" fill="#E8610A" opacity="0.9"/>
  <rect x="11" y="21" width="6" height="5" rx="2" fill="#fce0c8"/>
  <ellipse cx="14" cy="14" rx="7" ry="8.5" fill="#fce0c8"/>
  <ellipse cx="14" cy="8" rx="7.5" ry="6" fill="#6B3410"/>
  <rect x="6.5" y="7" width="2.5" height="10" rx="2" fill="#6B3410"/>
  <rect x="19" y="7" width="2.5" height="10" rx="2" fill="#6B3410"/>
  <ellipse cx="11" cy="13" rx="1.6" ry="1.8" fill="#fff"/>
  <ellipse cx="17" cy="13" rx="1.6" ry="1.8" fill="#fff"/>
  <ellipse cx="11" cy="13.2" rx="1" ry="1.1" fill="#3B2060"/>
  <ellipse cx="17" cy="13.2" rx="1" ry="1.1" fill="#3B2060"/>
  <ellipse cx="11.4" cy="12.7" rx="0.4" ry="0.4" fill="#fff"/>
  <ellipse cx="17.4" cy="12.7" rx="0.4" ry="0.4" fill="#fff"/>
  <path d="M9 10.5 Q11 9.5 13 10.5" stroke="#4a2800" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
  <path d="M15 10.5 Q17 9.5 19 10.5" stroke="#4a2800" strokeWidth="0.9" fill="none" strokeLinecap="round"/>
  <path d="M11.5 17.5 Q14 19.5 16.5 17.5" stroke="#d06050" strokeWidth="1" fill="none" strokeLinecap="round"/>
  <ellipse cx="14" cy="18" rx="2.2" ry="1" fill="#e8706a"/>
</svg>`;

const uglyAvatar62 = `<svg viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg" style={{ width: '62px', height: '62px' }}>
            <rect width="62" height="62" fill="transparent"/>
            <ellipse cx="31" cy="18" rx="14" ry="12" fill="#d4aa22"/>
            <ellipse cx="31" cy="28" rx="11" ry="13" fill="#f5c5a0"/>
            <ellipse cx="26.5" cy="26" rx="2.2" ry="2.4" fill="#3a2000"/>
            <ellipse cx="35.5" cy="26" rx="2.2" ry="2.4" fill="#3a2000"/>
            <path d="M27 32 Q31 35 35 32" stroke="#c0826a" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
            <ellipse cx="31" cy="52" rx="18" ry="8" fill="#E8610A" opacity="0.9"/>
            <rect x="27" y="39" width="8" height="8" rx="3" fill="#f5c5a0"/>
          </svg>`;

const niceAvatar62 = `<svg viewBox="0 0 62 62" xmlns="http://www.w3.org/2000/svg" style={{ width: '62px', height: '62px' }}>
  <defs>
    <radialGradient id="bg62" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#3d2060"/>
      <stop offset="100%" stopColor="#1a0e2e"/>
    </radialGradient>
    <radialGradient id="skin62" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stopColor="#fce0c8"/>
      <stop offset="100%" stopColor="#f0b898"/>
    </radialGradient>
  </defs>
  <rect width="62" height="62" fill="url(#bg62)" rx="31"/>
  <ellipse cx="31" cy="62" rx="24" ry="12" fill="#E8610A" opacity="0.95"/>
  <rect x="25" y="46" width="12" height="10" rx="4" fill="url(#skin62)"/>
  <ellipse cx="31" cy="30" rx="14" ry="17" fill="url(#skin62)"/>
  <ellipse cx="31" cy="17" rx="15" ry="13" fill="#7B3F10"/>
  <ellipse cx="31" cy="13" rx="15" ry="9" fill="#8B4513"/>
  <rect x="16" y="15" width="5" height="22" rx="4" fill="#7B3F10"/>
  <rect x="41" y="15" width="5" height="22" rx="4" fill="#7B3F10"/>
  <ellipse cx="24" cy="28" rx="3.5" ry="4" fill="#fff"/>
  <ellipse cx="38" cy="28" rx="3.5" ry="4" fill="#fff"/>
  <ellipse cx="24" cy="28.5" rx="2.2" ry="2.5" fill="#3B2060"/>
  <ellipse cx="38" cy="28.5" rx="2.2" ry="2.5" fill="#3B2060"/>
  <ellipse cx="24.8" cy="27.5" rx="0.8" ry="0.8" fill="#fff"/>
  <ellipse cx="38.8" cy="27.5" rx="0.8" ry="0.8" fill="#fff"/>
  <path d="M20 23 Q24 20.5 28 23" stroke="#5a3000" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  <path d="M34 23 Q38 20.5 42 23" stroke="#5a3000" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  <ellipse cx="21" cy="32" rx="2" ry="1.3" fill="#f0a0a0" opacity="0.5"/>
  <ellipse cx="41" cy="32" rx="2" ry="1.3" fill="#f0a0a0" opacity="0.5"/>
  <ellipse cx="31" cy="33" rx="1.8" ry="1.2" fill="#e8a888"/>
  <path d="M26 38 Q31 42 36 38" stroke="#d06050" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
  <ellipse cx="31" cy="39" rx="5" ry="2" fill="#e8706a"/>
  <ellipse cx="31" cy="38" rx="5" ry="1.5" fill="#f08880"/>
</svg>`;

chat = chat.split(uglyAvatar44).join(niceAvatar44);
chat = chat.split(uglyAvatar28).join(niceAvatar28);
chat = chat.split(uglyAvatar62).join(niceAvatar62);

fs.writeFileSync('src/components/ChatBubble.tsx', chat);
console.log('Done - avatar upgraded');