import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Briefcase } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';

export default function BusinessCommercial() {
  const deliverables = [
    'Websites and brand identity',
    'Lead-generation and marketing campaigns',
    'AI and workflow automation',
    'Practical IT and cloud guidance',
    'One point of accountability for all of it'
  ];

  return (
    <ModernLayout
      title="Industries — Business & Commercial"
      description="Brand, web, marketing, and automation for growing businesses — one accountable team instead of five vendors."
    >
      <div className="gt-glow" style={{ top: '20%', left: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '120px 0 80px 0' }}>
        <div className="gt-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(0, 229, 255, 0.08)', border: '1px solid rgba(0, 229, 255, 0.2)', marginBottom: '24px' }}>
                <Briefcase size={14} style={{ color: 'var(--primary-accent)' }} />
                <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>B2B & Commercial Engineering</span>
              </div>
              <h1 style={{ fontSize: '60px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
                Scale on one team, not five vendors.
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 auto 40px auto', maxWidth: '720px' }}>
                Growing businesses lose time and money stitching together separate agencies for brand, web, marketing, and IT. We bring them under one roof, so you move faster without cutting corners — and without managing a crowd of vendors who don't talk to each other.
              </p>
              <Link href="/contact-us" className="gt-btn gt-btn-primary">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="gt-section" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="gt-container">
          <div className="gt-grid-2" style={{ alignItems: 'center' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 24px 0' }}>What We Deliver</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-gray-400)', lineHeight: '1.7', marginBottom: '32px' }}>
                We handle the complete execution cycle across design, marketing and automation engineering under a single contract.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {deliverables.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px' }}>
                    <CheckCircle size={18} style={{ color: 'var(--primary-accent)', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div style={{ padding: '40px', background: 'rgba(13,13,13,0.5)', border: '1px solid var(--border-color)', borderRadius: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 16px 0', color: '#fff' }}>Unified Advantage</h3>
                <ul style={{ paddingLeft: '20px', color: 'var(--text-gray-400)', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0 }}>
                  <li>Accelerated timeline with zero agency handoff delays</li>
                  <li>Unified branding and responsive web interactions</li>
                  <li>Optimized advertising campaigns connected to lead captures</li>
                  <li>Integrated tools that eliminate repetitive administrative overhead</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Commercial CTA */}
      <section className="gt-section" style={{ textAlign: 'center' }}>
        <div className="gt-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 20px 0' }}>Single point of accountability.</h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', margin: '0 auto 32px auto', maxWidth: '600px' }}>
              We orchestrate branding, web engineering, paid campaigns, and integrations to scale your business.
            </p>
            <Link href="/services" className="gt-btn gt-btn-outline">
              Explore Our Service Offerings
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ModernLayout>
  );
}
