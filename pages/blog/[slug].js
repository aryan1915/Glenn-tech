import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';
import { blogPosts } from '../../data/blogData';

// Interactive FAQ Accordion Component
function FaqAccordion({ faq }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--border-color)', padding: '16px 0' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ width: '100%', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', textAlign: 'left', padding: 0 }}
      >
        <span style={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>{faq.q}</span>
        {isOpen ? <ChevronUp size={18} style={{ color: 'var(--primary-accent)' }} /> : <ChevronDown size={18} style={{ color: 'var(--primary-accent)' }} />}
      </button>
      {isOpen && (
        <div style={{ marginTop: '12px', fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6' }}>
          {faq.a}
        </div>
      )}
    </div>
  );
}

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <ModernLayout title="Article Not Found" description="The requested GlennTech article could not be located.">
        <section className="gt-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <div className="gt-container">
            <h2 style={{ fontSize: '32px', margin: '0 0 16px 0' }}>Article Not Found</h2>
            <p style={{ color: 'var(--text-gray-400)', marginBottom: '32px' }}>The article you requested is not available.</p>
            <Link href="/blog" className="gt-btn gt-btn-primary">Back to Insights</Link>
          </div>
        </section>
      </ModernLayout>
    );
  }

  // Schema Structures
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDesc,
    "datePublished": "2026-07-24T00:00:00Z",
    "publisher": {
      "@type": "Organization",
      "name": "GlennTech LLC",
      "logo": {
        "@type": "ImageObject",
        "url": "https://glenntech.com/logo.png"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "GlennTech LLC"
    }
  };

  const faqSchema = post.faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  } : null;

  return (
    <ModernLayout
      title={post.title}
      description={post.metaDesc}
    >
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      </Head>

      <div className="gt-glow" style={{ top: '20%', right: '10%' }} />

      {/* Article Header */}
      <section className="gt-section" style={{ padding: '120px 0 40px 0' }}>
        <div className="gt-container" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary-accent)', textDecoration: 'none', fontSize: '14.5px', marginBottom: '24px', fontWeight: '500' }}>
              <ArrowLeft size={16} /> Back to Insights
            </Link>
            
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '16px', fontSize: '13.5px', color: 'var(--text-gray-500)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {post.date}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> {post.readTime}</span>
            </div>

            <h1 style={{ fontSize: '48px', lineHeight: '1.2', fontWeight: 800, margin: '0 0 24px 0', color: '#fff' }}>
              {post.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingBottom: '24px', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-accent-glow)', border: '1px solid rgba(0, 229, 255, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-accent)', fontWeight: 'bold', fontSize: '14px' }}>
                GT
              </div>
              <div>
                <span style={{ fontSize: '14px', color: '#fff', fontWeight: '600', display: 'block' }}>GlennTech Advisory Council</span>
                <span style={{ fontSize: '12px', color: 'var(--text-gray-500)' }}>Compliance & Engineering Specialists</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Article Content */}
      <section className="gt-section" style={{ padding: '0 0 80px 0' }}>
        <div className="gt-container" style={{ maxWidth: '800px' }}>
          <ScrollReveal delay={100}>
            <div
              className="article-body-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', lineHeight: '1.8' }}
            />
          </ScrollReveal>

          {/* Interactive FAQs Accordion */}
          {post.faqs && (
            <ScrollReveal delay={150}>
              <div style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid var(--border-color)' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '24px' }}>Frequently Asked Questions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {post.faqs.map((faq, idx) => (
                    <FaqAccordion key={idx} faq={faq} />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Global styling overrides for inline HTML elements inside article-body-content */}
      <style jsx global>{`
        .article-body-content h2 {
          font-size: 24px !important;
          font-weight: 700 !important;
          color: #fff !important;
          margin: 40px 0 16px 0 !important;
        }
        .article-body-content p {
          margin: 0 0 24px 0 !important;
        }
        .article-body-content ul {
          margin: 0 0 24px 0 !important;
          padding-left: 24px !important;
        }
        .article-body-content li {
          margin-bottom: 8px !important;
          line-height: 1.7 !important;
        }
      `}</style>
    </ModernLayout>
  );
}
