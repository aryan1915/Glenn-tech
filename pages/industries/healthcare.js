import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Activity } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';

export default function HealthcareIndustry() {
  const deliverables = [
    'HIPAA-compliant websites and patient portals',
    'Secure patient communication and forms',
    'Compliant automation and workflows',
    'Accessible design for every patient',
    'Security aligned to patient-data protection'
  ];

  return (
    <ModernLayout
      title="Industries — Healthcare Technology"
      description="HIPAA-compliant websites, portals, and automation for healthcare providers — secure, accessible, and patient-friendly."
    >
      <div className="gt-glow" style={{ top: '20%', right: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '120px 0 80px 0' }}>
        <div className="gt-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'rgba(0, 229, 255, 0.08)', border: '1px solid rgba(0, 229, 255, 0.2)', marginBottom: '24px' }}>
                <Activity size={14} style={{ color: 'var(--primary-accent)' }} />
                <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>HIPAA-Compliant Audited Delivery</span>
              </div>
              <h1 style={{ fontSize: '60px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
                Protect patients. Pass audits. Keep it usable.
              </h1>
              <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 auto 40px auto', maxWidth: '720px' }}>
                In healthcare, technology has to protect patient data without getting in the way of care. We build HIPAA-compliant websites, portals, forms, and automations that keep data secure and your organization compliant — while staying easy for patients to use.
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
                We provide medical practices, clinics, and health systems with robust and secure patient-data solutions.
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
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 16px 0', color: '#fff' }}>Security Standard Alignment</h3>
                <ul style={{ paddingLeft: '20px', color: 'var(--text-gray-400)', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0 }}>
                  <li>Strict end-to-end data encryption parameters</li>
                  <li>Secure database connections with automated logs</li>
                  <li>User action logging for compliance audits</li>
                  <li>Interface designs that support WCAG 2.1 screen accessibility</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Safety Banner */}
      <section className="gt-section" style={{ textAlign: 'center' }}>
        <div className="gt-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 20px 0' }}>Compliance is built in by default.</h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', margin: '0 auto 32px auto', maxWidth: '600px' }}>
              We review and verify HIPAA data boundaries across all form endpoints and workflow triggers.
            </p>
            <Link href="/contact-us" className="gt-btn gt-btn-outline">
              Review Healthcare Project Scope &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ModernLayout>
  );
}
