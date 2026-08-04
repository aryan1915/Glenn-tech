import React from 'react';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import ModernLayout from '../components/ModernLayout';
import ScrollReveal from '../components/ScrollReveal';
import { caseStudies } from '../data/caseStudiesData';

export default function CaseStudies() {
  return (
    <ModernLayout
      title="Case Studies - Client Uptime & Compliance Outcomes"
      description="Read results GlennTech has delivered for business, healthcare, and government clients. Real projects, certified metrics."
    >
      <div className="gt-glow" style={{ top: '20%', left: '10%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '100px 0 60px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '14px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Success Stories</span>
            <h1 style={{ fontSize: '56px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
              Results, not promises.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', maxWidth: '720px', margin: '0 auto' }}>
              The clearest proof of what we do is what we've done. Here's a look at the work.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="gt-section" style={{ padding: '40px 0 100px 0' }}>
        <div className="gt-container">
          <div className="gt-grid-3">
            {caseStudies.map((project, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="gt-card gt-card-glass gt-card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
                    <Briefcase size={16} style={{ color: 'var(--primary-accent)' }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-gray-400)', fontWeight: '500' }}>{project.sector}</span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff' }}>{project.title}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 0 24px 0', flexGrow: 1 }}>{project.challenge}</p>
                  
                  <Link href={`/case-studies/${project.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-accent)', textDecoration: 'none', fontSize: '14.5px', fontWeight: '600' }}>
                    Read Full Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gt-section" style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)', background: 'rgba(255,255,255,0.01)' }}>
        <div className="gt-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 16px 0' }}>Ready to start your project?</h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', margin: '0 auto 32px auto', maxWidth: '600px' }}>
              Bring our compliance engineering and automation capabilities to your next business initiative.
            </p>
            <Link href="/contact-us" className="gt-btn gt-btn-primary">
              Start your project <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </ModernLayout>
  );
}
