// @ts-nocheck
'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function VeterinariansPage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />
      <Nav />

      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>For Veterinarians</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '54px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>Automated Marketing for Veterinarians.</h1>
        <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>Grow your practice and keep your appointment book full. Traffikora handles your marketing so you can focus on the animals in your care.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Free Today</Link>
      </section>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px', textAlign: 'center' }}>The Problem Every Vet Practice Faces</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>Pet owners have more choices than ever. Without a strong online presence, even the best vets lose new clients to practices that simply show up better online.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'New Patients Hard to Find', body: 'When a family moves to town and searches for a vet, your practice needs to be the first result they see.' },
              { title: 'Reviews Left Uncollected', body: 'Happy pet owners rarely think to leave reviews. Meanwhile practices with more reviews rank and convert better.' },
              { title: 'Missing from AI Search', body: 'When someone asks ChatGPT for the best vet nearby, you need your practice to be the recommended answer.' },
            ].map((card) => (
              <div key={card.title} style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>{card.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '16px', color: '#555', lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f7f7f7', padding: '80px 32px' }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#111', marginBottom: '16px', textAlign: 'center' }}>What Traffikora Does for Veterinarians</h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '18px', color: '#444', maxWidth: '640px', margin: '0 auto 56px', textAlign: 'center' }}>Connect your accounts once. Everything below runs automatically, every day.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Google Business Profile', body: 'Automated posts, pet care tips, and practice updates keep your profile active and ranking in local search.' },
              { title: 'Review Generation', body: 'Automated review requests go out after appointments. More 5-star reviews mean more new pet owners trust your practice.' },
              { title: 'Google SEO + AI Engine Optimization', body: 'Your practice gets optimized to appear when pet owners ask ChatGPT, Gemini, or Perplexity for vet recommendations nearby.' },
              { title: 'Social Media Content', body: 'Pet care tips, seasonal reminders, and staff highlights posted to Facebook and Instagram automatically.' },
              { title: 'Local SEO', body: 'Ongoing optimization so you rank when people search for veterinarians, animal hospitals, or pet clinics in your area.' },
              { title: 'Reputation Monitoring', body: 'Every review tracked across Google and Facebook. Stay informed and respond fast to protect your practice’s reputation.' },
            ].map((item) => (
              <div key={item.title} style={{ border: '2.5px solid #111', padding: '32px', background: '#fff' }}>
                <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '20px', fontWeight: 700, marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#111', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>A Thriving Practice Starts With Being Found</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#ccc', maxWidth: '580px', margin: '0 auto 40px' }}>Set it once. Traffikora markets your veterinary practice every day while you focus on your patients.</p>
        <Link href="/signup" style={{ background: '#E8610A', color: '#fff', padding: '16px 40px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, border: '2.5px solid #E8610A', display: 'inline-block' }}>Start Free Free Today</Link>
      </section>

      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your next patient is searching right now.</h2>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '19px', color: '#fff', opacity: 0.9, maxWidth: '540px', margin: '0 auto 40px' }}>Free 7-day trial. No no credit card required. Cancel anytime.</p>
        <Link href="/signup" style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, border: '2.5px solid #fff', display: 'inline-block' }}>Start Free Today</Link>
      </section>

      <Footer />
    </>
  )
}
