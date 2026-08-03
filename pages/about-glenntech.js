import React from 'react';
import Link from 'next/link';
import { Shield, Award, CheckCircle, ArrowRight, Target, Eye, Users } from 'lucide-react';
import ModernLayout from '../components/ModernLayout';
import ScrollReveal from '../components/ScrollReveal';

export default function AboutOverview() {
  const values = [
    {
      icon: <Shield size={24} style={{ color: 'var(--primary-accent)' }} />,
      title: 'Compliance is Our Standard',
      desc: 'We do not view accessibility, HIPAA, or Section 508 as optional features or secondary addons. They are integrated directly into our core development process.'
    },
    {
      icon: <Award size={24} style={{ color: 'var(--primary-accent)' }} />,
      title: 'Accredited Capabilities',
      desc: 'Our SAM.gov registration, along with SBE and MBE certifications, allows government agencies and large corporations to easily contract with us while hitting diversity procurement goals.'
    },
    {
      icon: <Users size={24} style={{ color: 'var(--primary-accent)' }} />,
      title: 'Direct Senior Attention',
      desc: 'Every client project is overseen by senior leaders and engineering directors who make decisions, rather than keeping you in a ticket queue.'
    }
  ];

  return (
    <ModernLayout
      title="About GlennTech | Certified, Compliance-First Software Engineering"
      description="Learn about GlennTech LLC, a SAM.gov registered, SBE/MBE certified custom software development and technology consulting partner."
    >
      <div className="gt-glow" style={{ top: '20%', right: '10%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '100px 0 60px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '14px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>About Our Firm</span>
            <h1 className="gt-page-title gt-text-gradient">
              A technology partner you can trust.
            </h1>
            <p className="gt-section-desc" style={{ maxWidth: '720px' }}>
              GlennTech LLC delivers world-class software engineering and web consulting. We specialize in building secure, accessible systems for sectors where compliance is a legal necessity, not a choice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="gt-section" style={{ padding: '40px 0' }}>
        <div className="gt-container">
          <div className="gt-grid-2">
            <ScrollReveal>
              <div className="gt-card gt-card-glass">
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.05)', border: '1px solid rgba(0, 229, 255, 0.1)', marginBottom: '20px', color: 'var(--primary-accent)' }}>
                  <Target size={20} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0' }}>Our Mission</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-gray-400)', lineHeight: '1.7', margin: 0 }}>
                  To bridge the gap between complex regulatory requirements and modern, engaging digital user experiences. We construct software systems that protect patient data, meet public sector accessibility standards, and drive operational scaling.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="gt-card gt-card-glass">
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.05)', border: '1px solid rgba(0, 229, 255, 0.1)', marginBottom: '20px', color: 'var(--primary-accent)' }}>
                  <Eye size={20} />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0' }}>Our Vision</h3>
                <p style={{ fontSize: '15px', color: 'var(--text-gray-400)', lineHeight: '1.7', margin: 0 }}>
                  To become the primary authority for compliance-driven technology implementation across government, healthcare, and commercial markets, demonstrating that compliance is an accelerator of user trust and operational safety.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="gt-section">
        <div className="gt-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <ScrollReveal>
              <h2 className="gt-section-title">Our Core Beliefs</h2>
              <p className="gt-section-desc">The guiding rules behind how we recruit, how we build, and how we deliver.</p>
            </ScrollReveal>
          </div>

          <div className="gt-grid-3">
            {values.map((val, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="gt-card">
                  <div className="gt-card-icon">{val.icon}</div>
                  <h3 style={{ fontSize: '19px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff' }}>{val.title}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: 0 }}>{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Shortcuts to Deep Pages */}
      <section className="gt-section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gt-container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '36px', fontWeight: 800 }}>Explore How We Work</h2>
              <p style={{ color: 'var(--text-gray-400)', fontSize: '16.5px' }}>Learn more about our development methodology and organizational advantages.</p>
            </ScrollReveal>
          </div>

          <div className="gt-grid-2">
            <ScrollReveal>
              <div className="gt-card gt-card-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0' }}>Our Approach</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 0 24px 0', flexGrow: 1 }}>
                  Discover our strict, compliance-first coding practices, honest scoping, single-team accountability structure, and standard handoffs.
                </p>
                <Link href="/about/our-approach" className="gt-btn gt-btn-outline gt-btn-sm" style={{ alignSelf: 'flex-start' }}>
                  Read Our Approach &rarr;
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={150}>
              <div className="gt-card gt-card-hover" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0' }}>Why GlennTech</h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 0 24px 0', flexGrow: 1 }}>
                  Learn why commercial, medical, and governmental procurement officers prefer contracting with us to meet goals and compliance thresholds.
                </p>
                <Link href="/about/why-glenntech" className="gt-btn gt-btn-outline gt-btn-sm" style={{ alignSelf: 'flex-start' }}>
                  See Why GlennTech &rarr;
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gt-section" style={{ textAlign: 'center' }}>
        <div className="gt-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '38px', fontWeight: 800, margin: '0 0 16px 0' }}>Let's build something compliant and performant.</h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', margin: '0 0 32px 0', maxWidth: '600px', margin: '0 auto 32px auto' }}>
              Connect directly with our engineering team today to review your project scope or diversity procurement needs.
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
