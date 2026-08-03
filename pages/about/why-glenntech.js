import React from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Award, Users, Grid } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';

export default function WhyGlennTech() {
  const points = [
    {
      num: '01',
      title: 'Certified where it counts',
      desc: "MBE, SBE, and SAM.gov registration make us easy to procure from and help you meet diversity-spend and small-business goals.",
      icon: <Award size={28} style={{ color: 'var(--primary-accent)' }} />
    },
    {
      num: '02',
      title: 'Compliance is our default',
      desc: "ADA, HIPAA, and Section 508 aren't upsells - they're how we build.",
      icon: <Shield size={28} style={{ color: 'var(--primary-accent)' }} />
    },
    {
      num: '03',
      title: 'Senior attention',
      desc: "You work with people who make decisions, not a queue of ticket numbers.",
      icon: <Users size={28} style={{ color: 'var(--primary-accent)' }} />
    },
    {
      num: '04',
      title: 'Range without the runaround',
      desc: "Brand, web, marketing, automation, IT - handled by one team that owns the whole outcome.",
      icon: <Grid size={28} style={{ color: 'var(--primary-accent)' }} />
    }
  ];

  return (
    <ModernLayout
      title="Why GlennTech - Certified, Compliant, Accountable"
      description="Why organizations choose GlennTech: certification that eases procurement, compliance built in, one accountable team, and senior attention."
    >
      <div className="gt-glow" style={{ top: '30%', right: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '100px 0 60px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '14px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Our Advantages</span>
            <h1 style={{ fontSize: '56px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
              The certified partner you don't have to manage.
            </h1>
            <p style={{ fontSize: '18px', color: 'var(--text-gray-400)', lineHeight: '1.6', maxWidth: '720px', margin: '0 auto' }}>
              You have enough to worry about. Your technology partner shouldn't be one of them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Points Grid Section */}
      <section className="gt-section" style={{ padding: '40px 0 100px 0' }}>
        <div className="gt-container">
          <div className="gt-grid-2">
            {points.map((pt, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="gt-card gt-card-glass gt-card-hover" style={{ padding: '40px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {pt.icon}
                    </div>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 800, color: 'rgba(255, 255, 255, 0.05)' }}>{pt.num}</span>
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff' }}>{pt.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-gray-400)', lineHeight: '1.7', margin: 0 }}>{pt.desc}</p>
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
            <h2 style={{ fontSize: '38px', fontWeight: 800, margin: '0 0 16px 0' }}>Work with a certified, responsive partner.</h2>
            <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', margin: '0 0 32px 0', maxWidth: '600px', margin: '0 auto 32px auto' }}>
              Let's speak about how we can support your supplier diversity goals or compliance demands.
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
