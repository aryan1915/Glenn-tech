import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Award, Users, FileText } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';

export default function OurApproach() {
  const steps = [
    {
      num: '01',
      title: 'Compliance first, not last',
      desc: "We build to ADA, HIPAA, and Section 508 from the start, so standards are met by design instead of patched after an audit.",
      icon: <Shield size={24} style={{ color: 'var(--primary-accent)' }} />
    },
    {
      num: '02',
      title: 'One accountable team',
      desc: "Strategy, design, development, and delivery under one roof — no finger-pointing between vendors when something breaks.",
      icon: <Users size={24} style={{ color: 'var(--primary-accent)' }} />
    },
    {
      num: '03',
      title: 'Honest scoping',
      desc: "We tell you what a project really takes, flag what you don't need, and don't pad the bill with services that won't move your goals.",
      icon: <FileText size={24} style={{ color: 'var(--primary-accent)' }} />
    },
    {
      num: '04',
      title: 'Built to be maintained',
      desc: "We hand over work your team can actually run, with documentation and clean handoffs — not a black box only we understand.",
      icon: <Award size={24} style={{ color: 'var(--primary-accent)' }} />
    }
  ];

  return (
    <ModernLayout
      title="Our Approach — How GlennTech Works"
      description="How GlennTech delivers: compliance-first, one accountable team, honest scoping, and work built to pass review."
    >
      <div className="gt-glow" style={{ top: '25%', left: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '100px 0 60px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '14px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Methodology</span>
            <h1 style={{ fontSize: '56px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
              How we work — and why it's different.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', maxWidth: '720px', margin: '0 auto' }}>
              Good outcomes aren't luck. They come from a way of working. Here's ours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps Section */}
      <section className="gt-section" style={{ padding: '40px 0 100px 0' }}>
        <div className="gt-container">
          <div className="gt-timeline">
            {steps.map((step, idx) => (
              <ScrollReveal key={idx} delay={idx * 150}>
                <div className="gt-timeline-item">
                  <div className="gt-timeline-dot" />
                  <div className="gt-timeline-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="gt-timeline-number">{step.num} / Methodology Step</span>
                      <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {step.icon}
                      </div>
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff' }}>{step.title}</h3>
                    <p style={{ fontSize: '15px', color: 'var(--text-gray-400)', lineHeight: '1.7', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gt-section" style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="gt-container">
          <ScrollReveal>
            <h2 style={{ fontSize: '38px', fontWeight: 800, margin: '0 0 16px 0' }}>Partner with an accountable team.</h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', margin: '0 0 32px 0', maxWidth: '600px', margin: '0 auto 32px auto' }}>
              Have questions about our process or want to map out your upcoming compliance-related technology requirements?
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
