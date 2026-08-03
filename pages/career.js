import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Briefcase, Smile, Award, Zap, Send } from 'lucide-react';
import ModernLayout from '../components/ModernLayout';
import ScrollReveal from '../components/ScrollReveal';

export default function Careers() {
  const [formData, setFormData] = useState({ name: '', email: '', role: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate application submission
    setSubmitted(true);
  };

  const benefits = [
    {
      title: 'Real ownership',
      desc: 'Your work ships and matters, not buried in a backlog. You own projects end to end.'
    },
    {
      title: 'Range of opportunities',
      desc: 'Touch brand, web, automation, and compliance, not one narrow, repetitive lane.'
    },
    {
      title: 'Standards worth having',
      desc: 'We build things properly, without shortcuts. Building correctly makes you a better engineer.'
    },
    {
      title: 'Growing firm',
      desc: 'A certified, rapidly expanding technology partner with active cross-border reach.'
    }
  ];

  return (
    <ModernLayout
      title="Careers - Join Our Compliance-First Team"
      description="Join a certified, compliance-first technology firm serving business, healthcare, and government. See open roles at GlennTech LLC."
    >
      <div className="gt-glow" style={{ top: '15%', left: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '120px 0 80px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Join Our Team</span>
            <h1 style={{ fontSize: '56px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
              Do work that has to be good - and gets to be.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', maxWidth: '720px', margin: '0 auto' }}>
              We build technology for clients who can't afford shortcuts. If you take pride in work that's both excellent and accountable, you'll fit here.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="gt-section" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', backgroundColor: 'rgba(255,255,255,0.01)' }}>
        <div className="gt-container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <ScrollReveal>
              <h2 style={{ fontSize: '36px', fontWeight: 800 }}>Why Work Here</h2>
              <p style={{ color: 'var(--text-gray-400)', fontSize: '16.5px' }}>What makes engineering and designing at GlennTech different.</p>
            </ScrollReveal>
          </div>

          <div className="gt-grid-2">
            {benefits.map((benefit, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div style={{ display: 'flex', gap: '20px', padding: '28px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-color)', borderRadius: '16px' }} className="gt-card-hover">
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(0, 229, 255, 0.05)', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', color: 'var(--primary-accent)', flexShrink: 0 }}>
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '19px', fontWeight: 700, color: '#fff', margin: '0 0 8px 0' }}>{benefit.title}</h3>
                    <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: 0 }}>{benefit.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles & Form */}
      <section className="gt-section">
        <div className="gt-container">
          <div className="gt-grid-2" style={{ alignItems: 'flex-start' }}>
            {/* Open Roles */}
            <ScrollReveal>
              <h2 style={{ fontSize: '36px', fontWeight: 800, margin: '0 0 24px 0' }}>Open Roles</h2>
              <p style={{ fontSize: '16px', color: 'var(--text-gray-400)', lineHeight: '1.7', marginBottom: '32px' }}>
                We are actively looking for professionals who align with our compliance-first standard.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0 }}>Senior Accessibility Engineer</h4>
                    <span style={{ fontSize: '12px', color: 'var(--primary-accent)', background: 'rgba(0,229,255,0.08)', padding: '4px 10px', borderRadius: '9999px' }}>Full-Time</span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-gray-400)', margin: 0 }}>Specialist in WCAG testing, ADA compliance structures, and Section 508 automation scripts.</p>
                </div>

                <div style={{ padding: '24px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', margin: 0 }}>React / Next.js Developer</h4>
                    <span style={{ fontSize: '12px', color: 'var(--primary-accent)', background: 'rgba(0,229,255,0.08)', padding: '4px 10px', borderRadius: '9999px' }}>Full-Time</span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--text-gray-400)', margin: 0 }}>Engineering fast, semantic page shells, custom CSS components, and HIPAA form bindings.</p>
                </div>
              </div>

              <div style={{ background: 'rgba(0,229,255,0.02)', border: '1px solid rgba(0,229,255,0.1)', padding: '24px', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', margin: '0 0 8px 0' }}>Don't see your role?</h4>
                <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', margin: 0 }}>
                  Tell us what you do and why GlennTech - we're always glad to meet people who do great work.
                </p>
              </div>
            </ScrollReveal>

            {/* General Interest Application Form */}
            <ScrollReveal delay={150}>
              <div className="gt-card gt-card-glass">
                <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 24px 0', color: '#fff' }}>Send us your details</h3>
                
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyCenter: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0,229,255,0.08)', color: 'var(--primary-accent)', marginBottom: '20px', justifyContent: 'center' }}>
                      <CheckCircle size={28} />
                    </div>
                    <h4 style={{ fontSize: '20px', color: '#fff', margin: '0 0 8px 0' }}>Application Received</h4>
                    <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', margin: 0 }}>Thank you for expressing interest in GlennTech. We will review your profile shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="gt-form-group">
                      <label className="gt-label">Your Name</label>
                      <input type="text" required className="gt-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full Name" />
                    </div>
                    <div className="gt-form-group">
                      <label className="gt-label">Email Address</label>
                      <input type="email" required className="gt-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@example.com" />
                    </div>
                    <div className="gt-form-group">
                      <label className="gt-label">Target Role / Specialty</label>
                      <input type="text" required className="gt-input" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} placeholder="e.g. Frontend Engineer, Designer" />
                    </div>
                    <div className="gt-form-group">
                      <label className="gt-label">Tell us why GlennTech</label>
                      <textarea required className="gt-textarea" rows={4} value={formData.details} onChange={(e) => setFormData({ ...formData, details: e.target.value })} placeholder="Brief background, achievements, and why you take pride in accountable work..." />
                    </div>
                    
                    <button type="submit" className="gt-btn gt-btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                      Submit Details <Send size={14} />
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </ModernLayout>
  );
}
