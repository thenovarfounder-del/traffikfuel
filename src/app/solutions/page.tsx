// @ts-nocheck
'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function SolutionsPage() {
  const industries = [
    { emoji: '💇', name: 'Salons and Spas', desc: 'Fill your chair every week with automated local SEO and social content.', href: '/solutions/salons' },
    { emoji: '🔧', name: 'HVAC Companies', desc: 'Dominate local searches when homeowners need heating and cooling help.', href: '/solutions/hvac' },
    { emoji: '⚖️', name: 'Law Firms', desc: 'Get found when people search for legal help in your area on Google and AI engines.', href: '/solutions/lawyers' },
    { emoji: '🦷', name: 'Dental Offices', desc: 'Attract new patients automatically with content that ranks and converts.', href: '/solutions/dentists' },
    { emoji: '🍽️', name: 'Restaurants', desc: 'Keep tables full with daily social posts, local SEO, and AI engine visibility.', href: '/solutions/restaurants' },
    { emoji: '🏠', name: 'Real Estate', desc: 'Generate listing leads automatically with content across every platform.', href: '/solutions/real-estate' },
    { emoji: '💪', name: 'Gyms and Fitness', desc: 'Grow your membership with automated content that speaks to local fitness seekers.', href: '/solutions/gyms' },
    { emoji: '🚗', name: 'Auto Repair', desc: 'Be the first shop locals find on Google and ChatGPT when their car breaks down.', href: '/solutions/auto-repair' },
    { emoji: '🏥', name: 'Med Spas', desc: 'Attract high-value clients with premium content automation across all platforms.', href: '/solutions/salons' },
    { emoji: '🔩', name: 'Plumbers', desc: 'Show up first when locals search for emergency plumbing day or night.', href: '/solutions/plumbers' },
    { emoji: '📣', name: 'Agencies', desc: 'Manage all your clients from one dashboard with white-label reporting.', href: '/solutions/marketing-agencies' },
    { emoji: '🧑‍⚕️', name: 'Chiropractors', desc: 'Build a steady stream of new patients with automated health content.', href: '/solutions/chiropractors' },
    { emoji: '🏗️', name: 'Contractors', desc: 'Win more bids by dominating local search before homeowners call anyone else.', href: '/solutions/contractors' },
    { emoji: '🧠', name: 'Therapists', desc: 'Reach people searching for mental health support in your area.', href: '/solutions/therapists' },
    { emoji: '🐾', name: 'Veterinarians', desc: 'Keep your appointment book full with automated pet care content.', href: '/solutions/veterinarians' },
    { emoji: '📊', name: 'Accountants', desc: 'Attract new clients year-round, not just tax season.', href: '/solutions/accountants' },
  ]

  return (
    <>
      <Nav />
      <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: '#E8610A', marginBottom: '16px' }}>Industry Solutions</p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '52px', fontWeight: 700, color: '#fff', lineHeight: 1.05, letterSpacing: '-1.5px', margin: '0 auto 20px', maxWidth: '800px' }}>
            Automated marketing built for <em style={{ color: '#E8610A', fontStyle: 'italic' }}>your industry.</em>
          </h1>
          <p style={{ fontSize: '18px', color: '#ccc', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>
            Traffikora works for every local business. Pick your industry and see exactly how we automate your marketing across Google, AI engines, social media, and more.
          </p>
        </section>

        <section style={{ background: '#f7f7f7', padding: '80px 40px', borderTop: '2.5px solid #111', borderBottom: '2.5px solid #111' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#111', textAlign: 'center', marginBottom: '48px' }}>
              Choose your <em style={{ color: '#E8610A', fontStyle: 'italic' }}>industry</em>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {industries.map((item) => (
                <a key={item.name} href={item.href} style={{ background: '#fff', border: '1.5px solid #111', borderRadius: '12px', padding: '28px 24px', textDecoration: 'none', display: 'block' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.emoji}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: 700, color: '#111', marginBottom: '8px' }}>{item.name}</h3>
                  <p style={{ fontSize: '13px', color: '#555', lineHeight: 1.7, fontWeight: 300 }}>{item.desc}</p>
                  <p style={{ fontSize: '12px', color: '#E8610A', fontWeight: 700, marginTop: '14px' }}>Learn more</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#111', padding: '80px 40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '42px', fontWeight: 700, color: '#fff', marginBottom: '16px' }}>
            Do not see your industry? <em style={{ color: '#E8610A', fontStyle: 'italic' }}>We still work for you.</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#ccc', maxWidth: '520px', margin: '0 auto 32px', lineHeight: 1.8, fontWeight: 300 }}>
            Traffikora works for any local business that wants more customers. Start your free trial and see for yourself.
          </p>
          <button onClick={() => window.location.href='/signup'} style={{ background: 'linear-gradient(135deg,#E8610A,#c94e08)', color: '#fff', border: 'none', padding: '18px 40px', borderRadius: '8px', fontSize: '16px', fontWeight: 800, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            Start Free — No Card Needed
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}
