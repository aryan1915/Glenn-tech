import React from 'react';
import Link from 'next/link';
import { Shield, Award, CheckCircle, ArrowRight, Check } from 'lucide-react';
import ModernLayout from '../components/ModernLayout';
import ScrollReveal from '../components/ScrollReveal';

export default function Certifications() {
  const certifications = [
    {
      title: 'SAM.gov Registered Entity',
      desc: 'Registered and fully active in the System for Award Management (SAM.gov) database, authorizing GlennTech for state, local, and federal contracts.',
      status: 'Active'
    },
    {
      title: 'MBE (Minority Business Enterprise)',
      desc: 'Certified Minority Business Enterprise helping corporations and agencies meet supplier diversity requirements and compliance budgets.',
      status: 'Certified'
    },
    {
      title: 'SBE (Small Business Enterprise)',
      desc: 'Certified Small Business Enterprise assisting state and municipal agencies in fulfilling small business program targets.',
      status: 'Certified'
    },
    {
      title: 'Section 508 Accessibility Ready',
      desc: 'All custom software, web platforms, and remediation services are developed in accordance with Section 508 of the Rehabilitation Act.',
      status: 'Compliant'
    },
    {
      title: 'HIPAA Data Safeguards',
      desc: 'Clinical websites, form integrations, patient portals, and automated communication scripts engineered to satisfy HIPAA privacy and audit rules.',
      status: 'Compliant'
    },
    {
      title: 'ADA Title III Compliance Default',
      desc: 'Website products are checked and certified for WCAG 2.1 level AA standards to protect commercial clients from accessibility liabilities.',
      status: 'Verified'
    }
  ];

  return (
    <ModernLayout
      title="Certifications & Capabilities — SAM.gov, SBE, MBE"
      description="Verify GlennTech LLC's credentials and compliance capabilities: SAM.gov registered, MBE/SBE certified, and Section 508, HIPAA, and ADA ready."
    >
      <div className="gt-glow" style={{ top: '25%', left: '10%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '100px 0 60px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '14px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Accredited Vendor</span>
            <h1 style={{ fontSize: '56px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
              Certifications & Capabilities.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', maxWidth: '720px', margin: '0 auto' }}>
              We hold active registrations and compliance standards to make procurement straightforward, diversity targets achievable, and digital products safe.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="gt-section" style={{ padding: '40px 0 100px 0' }}>
        <div className="gt-container">
          <div className="gt-grid-3">
            {certifications.map((cert, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className="gt-card gt-card-glass gt-card-hover" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.05)', border: '1px solid rgba(0, 229, 255, 0.1)', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', color: 'var(--primary-accent)' }}>
                      <Shield size={20} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--primary-accent)', background: 'rgba(0,229,255,0.08)', padding: '4px 10px', borderRadius: '9999px', border: '1px solid rgba(0,229,255,0.15)' }}>{cert.status}</span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff' }}>{cert.title}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: 0, flexGrow: 1 }}>{cert.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Statement Section */}
      <section className="gt-section" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="gt-container">
          <div className="gt-grid-2" style={{ alignItems: 'center' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 20px 0' }}>Core Capabilities</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-gray-400)', lineHeight: '1.7', marginBottom: '28px' }}>
                GlennTech engineering and design teams maintain strict guidelines on WCAG accessibility testing, data auditing and encryption pathways.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15.5px' }}>
                  <Check size={18} style={{ color: 'var(--primary-accent)', flexShrink: 0 }} />
                  <span>Manual and automated WCAG 2.1 Level AA testing</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15.5px' }}>
                  <Check size={18} style={{ color: 'var(--primary-accent)', flexShrink: 0 }} />
                  <span>HIPAA-aligned PHI/PI data boundary logging</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15.5px' }}>
                  <Check size={18} style={{ color: 'var(--primary-accent)', flexShrink: 0 }} />
                  <span>Secure database connectivity and API integrations</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div style={{ padding: '40px', background: 'rgba(13,13,13,0.5)', border: '1px solid var(--border-color)', borderRadius: '24px' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 16px 0', color: '#fff' }}>Contracting Vehicles</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', marginBottom: '24px' }}>
                  As an SBE/MBE vendor, we help prime contractors hit diversity-spend requirements under government tenders.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '6px 14px', borderRadius: '6px', color: '#fff' }}>Entity ID: SAM.gov Active</span>
                  <span style={{ fontSize: '13px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', padding: '6px 14px', borderRadius: '6px', color: '#fff' }}>Structure: LLC (MBE / SBE)</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gt-section" style={{ textAlign: 'center' }}>
        <div className="gt-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '38px', fontWeight: 800, margin: '0 0 16px 0' }}>Need compliance verification?</h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', margin: '0 auto 32px auto', maxWidth: '600px' }}>
              We supply active compliance documentation and credential reports for all active procurement cycles.
            </p>
            <Link href="/contact-us" className="gt-btn gt-btn-primary">
              Request Credential Package <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ModernLayout>
  );
}
