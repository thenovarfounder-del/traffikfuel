// @ts-nocheck
import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const revalidate = 86400

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function generateMetadata({ params }) {
  const { data } = await supabase.from('blog_posts_public').select('title, excerpt').eq('slug', params.slug).single()
  if (!data) return { title: 'Blog | Traffikora' }
  return {
    title: data.title + ' | Traffikora',
    description: data.excerpt || data.title,
    openGraph: { title: data.title, description: data.excerpt || data.title, url: 'https://www.traffikora.com/blog/' + params.slug },
  }
}

export default async function BlogPost({ params }) {
  const { data: post } = await supabase.from('blog_posts_public').select('*').eq('slug', params.slug).single()
  if (!post) notFound()

  const paragraphs = (post.content || '').split('\n\n').filter(p => p.trim().length > 0)

  return (
    <>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      <link href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap' rel='stylesheet' />
      <Nav />
      <section style={{ background: '#111', color: '#fff', textAlign: 'center', padding: '90px 32px' }}>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', fontWeight: 600, letterSpacing: '2px', color: '#E8610A', textTransform: 'uppercase', marginBottom: '16px' }}>{post.category || 'Traffikora Blog'}</p>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '48px', fontWeight: 900, lineHeight: 1.1, maxWidth: '820px', margin: '0 auto 24px' }}>{post.title}</h1>
        {post.excerpt && <p style={{ fontSize: '19px', color: '#ccc', maxWidth: '620px', margin: '0 auto 40px' }}>{post.excerpt}</p>}
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '14px', color: '#888' }}>{post.read_time || '7 min read'} · Traffikora Team</p>
      </section>
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: '740px', margin: '0 auto', fontFamily: 'DM Sans, sans-serif', fontSize: '18px', lineHeight: 1.85, color: '#222' }}>
          {paragraphs.map((para, i) => {
            if (para.startsWith('## ')) return <h2 key={i} style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#111', margin: '52px 0 18px' }}>{para.replace('## ', '')}</h2>
            if (para.startsWith('# ')) return <h1 key={i} style={{ fontFamily: 'Playfair Display, serif', fontSize: '38px', fontWeight: 900, color: '#111', margin: '52px 0 18px' }}>{para.replace('# ', '')}</h1>
            if (para.startsWith('### ')) return <h3 key={i} style={{ fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#E8610A', margin: '36px 0 12px' }}>{para.replace('### ', '')}</h3>
            if (para.match(/^(-|\*) /m)) {
              const items = para.split('\n').filter(l => l.match(/^(-|\*) /)).map(l => l.replace(/^(-|\*) /, ''))
              return <ul key={i} style={{ margin: '24px 0', paddingLeft: '28px', lineHeight: 2.2 }}>{items.map((item, j) => <li key={j} style={{ marginBottom: '6px' }}>{item}</li>)}</ul>
            }
            if (para.match(/^\d+\. /m)) {
              const items = para.split('\n').filter(l => l.match(/^\d+\. /)).map(l => l.replace(/^\d+\. /, ''))
              return <ol key={i} style={{ margin: '24px 0', paddingLeft: '28px', lineHeight: 2.2 }}>{items.map((item, j) => <li key={j} style={{ marginBottom: '6px' }}>{item}</li>)}</ol>
            }
            return <p key={i} style={{ marginTop: i === 0 ? 0 : '24px' }}>{para}</p>
          })}
          <div style={{ marginTop: '60px', padding: '44px', background: '#f9f9f9', border: '2.5px solid #111', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: '#111', marginBottom: '16px' }}>Ready to put your marketing on autopilot?</p>
            <p style={{ fontSize: '16px', color: '#555', marginBottom: '24px' }}>Start free today. No credit card required. Set it once and let Traffikora handle everything.</p>
            <Link href='/signup' style={{ background: '#E8610A', color: '#fff', padding: '16px 44px', textDecoration: 'none', fontSize: '17px', fontWeight: 700, display: 'inline-block', borderRadius: '8px' }}>Start Free — No Card Needed</Link>
          </div>
        </div>
      </section>
      <section style={{ background: '#E8610A', padding: '80px 32px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '44px', fontWeight: 900, color: '#fff', marginBottom: '20px' }}>Your marketing should work while you sleep.</h2>
        <Link href='/signup' style={{ background: '#fff', color: '#111', padding: '18px 48px', textDecoration: 'none', fontSize: '18px', fontWeight: 700, display: 'inline-block', marginTop: '16px' }}>Start Free Today</Link>
      </section>
      <Footer />
    </>
  )
}