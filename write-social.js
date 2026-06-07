const fs = require('fs');
const path = 'src/components/ConversionBooster.tsx';
let content = fs.readFileSync(path, 'utf8');

// Add isMobile state
content = content.replace(
  "const [countdown, setCountdown] = useState({ hours: 23, minutes: 47, seconds: 33 })",
  "const [countdown, setCountdown] = useState({ hours: 23, minutes: 47, seconds: 33 })\n  const [isMobile, setIsMobile] = useState(false)"
);

// Add mobile detection in useEffect
content = content.replace(
  "// Random visitor count between 18-47",
  "// Mobile detection\n    const checkMobile = () => setIsMobile(window.innerWidth < 768)\n    checkMobile()\n    window.addEventListener('resize', checkMobile)\n\n    // Random visitor count between 18-47"
);

// Add cleanup for resize listener
content = content.replace(
  "clearInterval(countdownInterval)",
  "clearInterval(countdownInterval)\n      window.removeEventListener('resize', checkMobile)"
);

// Hide scroll banner on mobile
content = content.replace(
  "{showScrollBanner && !scrollBannerDismissed && (",
  "{showScrollBanner && !scrollBannerDismissed && !isMobile && ("
);

fs.writeFileSync(path, content);
console.log('SUCCESS - scroll banner hidden on mobile');