import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar, Clock } from 'lucide-react';
import ModernLayout from '../components/ModernLayout';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../data/blogData';

export default function Blog() {
  return (
    <ModernLayout
      title="Insights - Guides on IT, Compliance & Growth"
      description="Practical guides on web accessibility, compliance, certification, and technology for business, healthcare, and government."
    >
      <div className="gt-glow" style={{ top: '15%', left: '10%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '100px 0 60px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '14px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Insights & Guides</span>
            <h1 style={{ fontSize: '56px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
              Plain-language guidance.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', maxWidth: '720px', margin: '0 auto' }}>
              No jargon, no fluff - practical answers on technology, compliance, and organizational growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="gt-section" style={{ padding: '40px 0 100px 0' }}>
        <div className="gt-container">
          <div className="gt-grid-3">
            {blogPosts.map((post, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="gt-card gt-card-glass gt-card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px', fontSize: '13px', color: 'var(--text-gray-500)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {post.date}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {post.readTime}</span>
                  </div>
                  
                  <h3 style={{ fontSize: '19px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff', lineHeight: '1.4' }}>{post.title}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 0 24px 0', flexGrow: 1 }}>{post.summary}</p>
                  
                  <Link href={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-accent)', textDecoration: 'none', fontSize: '14.5px', fontWeight: '600' }}>
                    Read Guide <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA Section */}
      <section className="gt-section" style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="gt-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px 0' }}>Need compliance answers?</h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', margin: '0 auto 32px auto', maxWidth: '600px' }}>
              Connect with our team to discuss specific accessibility requirements or HIPAA standards in detail.
            </p>
            <Link href="/contact-us" className="gt-btn gt-btn-primary">
              Start a Conversation <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ModernLayout>
  );
}
