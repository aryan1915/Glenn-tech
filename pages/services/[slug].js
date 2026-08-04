import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  // Capitalize and format slug
  const title = slug
    .split('-')
    .map(word => {
      if (word.toLowerCase() === 'ai') return 'AI';
      if (word.toLowerCase() === 'poc') return 'PoC';
      if (word.toLowerCase() === 'mlops') return 'MLOps';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  return (
    <ModernLayout
      title={`${title} Solutions`}
      description={`Full-cycle ${title.toLowerCase()} development and consulting services by GlennTech.`}
    >
      <div className="gt-glow" style={{ top: '15%', right: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '120px 0 60px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              Service Offering
            </span>
            <h1 style={{ fontSize: '56px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
              {title}
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', maxWidth: '720px', margin: '0 auto' }}>
              Empowering your business with state-of-the-art {title.toLowerCase()} solutions. We deliver tailored software engineering, expert technology consulting, and production-grade architectures designed to scale.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid Content */}
      <section className="gt-section" style={{ padding: '40px 0 100px 0' }}>
        <div className="gt-container" style={{ maxWidth: '900px' }}>
          <div className="gt-grid-2" style={{ marginBottom: '48px' }}>
            <ScrollReveal>
              <div className="gt-card gt-card-glass">
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-white)', marginBottom: '16px' }}>Key Capabilities</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-gray-400)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--primary-accent)', flexShrink: 0 }} /> Custom Strategy & Ideation
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-gray-400)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--primary-accent)', flexShrink: 0 }} /> Prototyping & Architecture Design
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14.5px', color: 'var(--text-gray-400)' }}>
                    <CheckCircle size={16} style={{ color: 'var(--primary-accent)', flexShrink: 0 }} /> Seamless Integration & Deployment
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="gt-card gt-card-glass">
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-white)', marginBottom: '16px' }}>Business Value</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.7', margin: 0 }}>
                  Accelerate time-to-market, mitigate technological risks, and optimize your engineering operations. Our teams integrate directly with your workflows to deliver compound value.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <div style={{ textAlign: 'center' }}>
              <Link href="/contact-us" className="gt-btn gt-btn-primary">
                Consult with an Expert <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ModernLayout>
  );
}
