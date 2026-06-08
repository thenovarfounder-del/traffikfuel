const fs = require('fs');

let content = fs.readFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ConversionBooster.tsx', 'utf8');

// Add menuOpen state that watches for nav-open class
content = content.replace(
  `const [scrollBannerDismissed, setScrollBannerDismissed] = useState(false)
  const [exitPopupShown, setExitPopupShown] = useState(false)
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 47, seconds: 33 })`,
  `const [scrollBannerDismissed, setScrollBannerDismissed] = useState(false)
  const [exitPopupShown, setExitPopupShown] = useState(false)
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 47, seconds: 33 })
  const [menuOpen, setMenuOpen] = useState(false)`
);

// Watch for nav-open class on body
content = content.replace(
  `    // Countdown timer`,
  `    // Watch for mobile menu open
    const observer = new MutationObserver(() => {
      setMenuOpen(document.body.classList.contains('nav-open'))
    })
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })

    // Countdown timer`
);

// Add observer cleanup
content = content.replace(
  `    return () => {
      clearInterval(visitorInterval)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(evaTimer)
      clearInterval(countdownInterval)
    }`,
  `    return () => {
      clearInterval(visitorInterval)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(evaTimer)
      clearInterval(countdownInterval)
      observer.disconnect()
    }`
);

// Hide visitor count when menu open
content = content.replace(
  `<div style={{ position: 'fixed', bottom: '90px', left: '16px', zIndex: 9990,`,
  `<div style={{ position: 'fixed', bottom: '90px', left: '16px', zIndex: 9990, display: menuOpen ? 'none' : 'flex',`
);

// Fix visitor count — remove display flex from style since we added it above
content = content.replace(
  `display: menuOpen ? 'none' : 'flex', display: 'flex', alignItems: 'center'`,
  `display: menuOpen ? 'none' : 'flex', alignItems: 'center'`
);

// Hide scroll banner when menu open
content = content.replace(
  `{showScrollBanner && !scrollBannerDismissed && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9995,`,
  `{showScrollBanner && !scrollBannerDismissed && !menuOpen && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9995,`
);

// Hide exit popup when menu open
content = content.replace(
  `{showExitPopup && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000,`,
  `{showExitPopup && !menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000,`
);

fs.writeFileSync('C:\\Users\\randy\\traffikfuel\\src\\components\\ConversionBooster.tsx', content, 'utf8');
console.log('SUCCESS: ConversionBooster — all fixed elements hidden when mobile menu is open');