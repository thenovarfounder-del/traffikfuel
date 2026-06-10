// @ts-nocheck
'use client'
import Link from 'next/link'

const categoryColors = {
  'Platform': '#E8610A',
  'AI Search': '#111',
  'AI Marketing': '#E8610A',
  'Small Business': '#2563eb',
  'Local SEO': '#16a34a',
  'Google': '#dc2626',
  'Reviews': '#7c3aed',
  'Industry': '#0891b2',
  'Comparison': '#111',
  'Pain Point': '#dc2626',
}

export default function BlogCard({ post }) {
  return (
    <Link href={'/blog/' + post.slug} style={{ textDecoration: 'none', display: 'block', border: '2.5px solid #111', padding: '36px', background: '#fff', transition: 'box-shadow 0.2s' }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = '6px 6px 0px #111'}
      onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
    >
      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#fff', background: categoryColors[post.category] || '#111', padding: '4px 10px', display: 'inline-block', marginBottom: '16px' }}>{post.category}</span>
      <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#111', lineHeight: 1.3, marginBottom: '14px' }}>{post.title}</h2>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '15px', color: '#555', lineHeight: 1.7, marginBottom: '20px' }}>{post.excerpt}</p>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '13px', color: '#888' }}>{post.read || post.read_time || '6 min read'} · Traffikora Team</p>
    </Link>
  )
}