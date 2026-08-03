import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, HelpCircle, MessageSquare } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';

export default function AIVoiceChatAutomation() {
  const deliverables = [
    'AI voice agents for inbound and outbound calls',
    'Website and messaging chatbots',
    'Automated appointment booking and lead qualification',
    'Integration with your CRM and calendars',
    'Human handoff for anything the AI shouldn\'t handle'
  ];

  const steps = [
    { num: '01', title: 'Map', desc: 'We map the calls and questions eating your team\'s time.' },
    { num: '02', title: 'Build', desc: 'We configure the AI agents and flows.' },
    { num: '03', title: 'Integrate', desc: 'We connect them to your CRM, calendar, and tools.' },
    { num: '04', title: 'Monitor', desc: 'We tune the system as real conversations come in.' }
  ];

  return (
    <ModernLayout
      title="AI Voice & Chat Automation Services"
      description="AI voice agents and chatbots that answer instantly, qualify leads, and book appointments around the clock - integrated with your systems."
    >
      <div className="gt-glow" style={{ top: '20%', right: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '120px 0 80px 0' }}>
        <div className="gt-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal>
              <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Service Detail</span>
              <h1 style={{ fontSize: '60px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
                Never miss another lead - day or night.
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
                    Every unanswered call and ignored message is money walking out the door. Our AI voice and chat solutions respond instantly, answer routine questions, qualify prospects, and book appointments - 24/7, without adding headcount.
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
                We engineer responsible conversational agents that integrate with your actual database, schedules, and operations.
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
                <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 16px 0', color: '#fff' }}>Secure & Compliant AI</h3>
                <ul style={{ paddingLeft: '20px', color: 'var(--text-gray-400)', fontSize: '14.5px', display: 'flex', flexDirection: 'column', gap: '12px', margin: 0 }}>
                  <li>Automated filters to prevent PI/PHI leaks</li>
                  <li>Seamless handoffs to customer support representatives</li>
                  <li>Real-time chat logging and session analytics</li>
                  <li>Secure CRM sync utilizing enterprise-level APIs</li>
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
              <p style={{ color: 'var(--text-gray-400)', fontSize: '16.5px' }}>Our phased integration lifecycle.</p>
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
              <h2 style={{ fontSize: '38px', fontWeight: 800, margin: '0 0 20px 0' }}>Why GlennTech for Conversational AI?</h2>
              <p style={{ fontSize: '17px', color: 'var(--text-gray-400)', lineHeight: '1.7', marginBottom: '40px' }}>
                We deploy automation responsibly - with clear human handoffs and, for regulated clients, attention to privacy. Convenience should never come at the cost of compliance.
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
