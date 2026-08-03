import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';

export default function GovernmentPublicSector() {
  const deliverables = [
    'ADA and Section 508-compliant websites and applications',
    'Accessibility remediation for existing government sites',
    'Compliance documentation and support',
    'Certified, procurement-ready delivery',
    'MBE/SBE participation toward your goals'
  ];

  return (
    <ModernLayout
      title="Industries — Government & Public Sector"
      description="Certified, ADA and Section 508-compliant technology for government agencies from a SAM.gov-registered MBE/SBE vendor."
    >
      <div className="gt-glow" style={{ top: '20%', left: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '120px 0 80px 0' }}>
        <div className="gt-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(0, 229, 255, 0.08)', border: '1px solid rgba(0, 229, 255, 0.2)', marginBottom: '24px' }}>
                <Shield size={14} style={{ color: 'var(--primary-accent)' }} />
                <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SAM.gov Registered Entity</span>
              </div>
              <h1 style={{ fontSize: '60px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
                Certified, compliant, and easy to contract with.
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 auto 40px auto', maxWidth: '720px' }}>
                Public agencies can't afford a vendor who treats accessibility or procurement rules as an afterthought. We deliver technology that meets ADA and Section 508 from the start, and our SAM.gov registration and MBE/SBE certifications help move contracts forward while meeting diversity and small-business goals.
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
                We work directly with municipalities, government agencies, and prime contractors to supply procurement-ready compliance engineering.
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
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 16px 0', color: '#fff' }}>Compliance Standard Metrics</h3>
                <ul style={{ paddingLeft: '20px', color: 'var(--text-gray-400)', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0 }}>
                  <li>Section 508 & ADA Level AA Accessibility defaults</li>
                  <li>SAM.gov entity verification checks</li>
                  <li>MBE/SBE diversity spending allocation logs</li>
                  <li>Certified audit reports & documentation</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Accreditations CTA */}
      <section className="gt-section" style={{ textAlign: 'center' }}>
        <div className="gt-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 20px 0' }}>Verify our registrations.</h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', margin: '0 auto 32px auto', maxWidth: '600px' }}>
              We provide transparent documentation of our small business and minority-owned enterprise statuses.
            </p>
            <Link href="/awards-partners" className="gt-btn gt-btn-secondary">
              View Our Certifications
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ModernLayout>
  );
}
