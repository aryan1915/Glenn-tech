import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, HelpCircle, Shield } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';

export default function GovernmentITWebServices() {
  const deliverables = [
    'ADA and Section 508-compliant websites and applications',
    'Accessibility audits and remediation of existing sites',
    'Certified, SAM.gov-registered delivery',
    'Compliance documentation and support',
    'MBE/SBE participation to help meet diversity goals'
  ];

  const steps = [
    { num: '01', title: 'Scope', desc: 'We confirm requirements, standards, and compliance obligations.' },
    { num: '02', title: 'Build', desc: 'We deliver to ADA and Section 508 from day one.' },
    { num: '03', title: 'Document', desc: 'We provide the compliance documentation you need.' },
    { num: '04', title: 'Support', desc: 'We remain accountable after delivery.' }
  ];

  return (
    <ModernLayout
      title="Government IT & Web Services - SAM.gov Registered"
      description="Certified, ADA and Section 508-compliant IT and web services for public-sector clients from a SAM.gov-registered MBE/SBE vendor."
    >
      <div className="gt-glow" style={{ top: '20%', right: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '120px 0 80px 0' }}>
        <div className="gt-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal>
              <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Service Detail</span>
              <h1 style={{ fontSize: '60px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
                Public-sector-ready, from certification to code.
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="gt-section" style={{ padding: '20px 0' }}>
        <div className="gt-container">
          <ScrollReveal>
            <div className="gt-card gt-card-glass" style={{ borderLeft: '4px solid var(--primary-accent)', padding: '40px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }} className="flex-col-mobile">
                <div style={{ background: 'rgba(0, 229, 255, 0.05)', color: 'var(--primary-accent)', padding: '12px', borderRadius: '12px' }}>
                  <HelpCircle size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff' }}>The Problem We Solve</h3>
                  <p style={{ fontSize: '16px', color: 'var(--text-gray-400)', lineHeight: '1.7', margin: 0 }}>
                    Government work has its own rules - for accessibility, procurement, and accountability - and we know them. We deliver technology built to meet public-sector standards from the start, backed by the certifications that make contracting with us straightforward.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="gt-section">
        <div className="gt-container">
          <div className="gt-grid-2" style={{ alignItems: 'center' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 24px 0' }}>What We Deliver</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-gray-400)', lineHeight: '1.7', marginBottom: '32px' }}>
                We provide public-sector agencies and primary contractors with certified, standards-compliant digital assets.
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
              <div style={{ padding: '32px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 16px 0', color: '#fff' }}>Procurement & Registrations</h3>
                <ul style={{ paddingLeft: '20px', color: 'var(--text-gray-400)', fontSize: '14.5px', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0 }}>
                  <li>Active SAM.gov Registered Entity</li>
                  <li>SBE (Small Business Enterprise) Certification</li>
                  <li>MBE (Minority Business Enterprise) Certification</li>
                  <li>VPAT (Voluntary Product Accessibility Template) Support</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="gt-section" style={{ backgroundColor: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gt-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '36px', fontWeight: 800 }}>How We Work</h2>
              <p style={{ color: 'var(--text-gray-400)', fontSize: '16.5px' }}>Our public sector auditing and delivery cycles.</p>
            </ScrollReveal>
          </div>

          <div className="gt-grid-4">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="gt-card" style={{ height: '100%' }}>
                  <span style={{ fontSize: '36px', fontWeight: 800, color: 'var(--primary-accent)', opacity: 0.8, fontFamily: 'var(--font-display)', display: 'block', marginBottom: '16px' }}>{step.num}</span>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, margin: '0 0 8px 0', color: '#fff' }}>{step.title}</h4>
                  <p style={{ fontSize: '14px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: 0 }}>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why GlennTech Section */}
      <section className="gt-section">
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '12px' }}>The GlennTech Advantage</span>
              <h2 style={{ fontSize: '38px', fontWeight: 800, margin: '0 0 20px 0' }}>Why GlennTech for Public Sector IT?</h2>
              <p style={{ fontSize: '17px', color: 'var(--text-gray-400)', lineHeight: '1.7', marginBottom: '40px' }}>
                We're a certified MBE, SBE, and SAM.gov-registered vendor - so we're not just capable, we're easy and safe to procure from while helping you hit small-business and diversity goals.
              </p>
              <Link href="/contact-us" className="gt-btn gt-btn-primary">
                Start a Conversation <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ModernLayout>
  );
}
