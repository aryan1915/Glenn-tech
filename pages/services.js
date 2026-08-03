import React from 'react';
import Link from 'next/link';
import { ArrowRight, Globe, Award, Zap, MessageSquare, Workflow, Shield, Activity, Server } from 'lucide-react';
import ModernLayout from '../components/ModernLayout';
import ScrollReveal from '../components/ScrollReveal';

export default function ServicesOverview() {
  const servicesList = [
    {
      icon: <Globe size={24} />,
      title: 'Web Design & Development',
      desc: 'Custom, accessible, conversion-focused websites that load fast, look sharp, work on every device, and pass Section 508 review.',
      path: '/services/web-design-development'
    },
    {
      icon: <Award size={24} />,
      title: 'Brand Strategy & Identity',
      desc: 'Clarity-driven brand positioning, visual identity systems, logos, tone of voice, and corporate collateral that win trust.',
      path: '/services/brand-strategy-identity'
    },
    {
      icon: <Zap size={24} />,
      title: 'Digital Marketing & Lead Generation',
      desc: 'Performance marketing measured on pipeline and closed leads, not vanity metrics. Paid search, social, and transparent reports.',
      path: '/services/digital-marketing-lead-generation'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'AI Voice & Chat Automation',
      desc: '24/7 AI agents and web chatbots that answer calls instantly, qualify leads, and book appointments directly into your CRM.',
      path: '/services/ai-voice-chat-automation'
    },
    {
      icon: <Workflow size={24} />,
      title: 'Workflow & Process Automation',
      desc: 'Automating repetitive work and syncing your apps (integrations, reporting, alerting) so your team does judgment work.',
      path: '/services/workflow-process-automation'
    },
    {
      icon: <Shield size={24} />,
      title: 'Government IT & Web Services',
      desc: 'Certified SAM.gov-registered IT delivery and Section 508 accessibility remediation built to pass state and federal audits.',
      path: '/services/government-it-web-services'
    },
    {
      icon: <Activity size={24} />,
      title: 'Healthcare & HIPAA Technology',
      desc: 'Secure patient portals, forms, and compliant automated workflows designed to protect patient data and pass privacy audits.',
      path: '/services/healthcare-hipaa-technology'
    },
    {
      icon: <Server size={24} />,
      title: 'Cloud & IT Consulting',
      desc: 'Practical, vendor-neutral infrastructure roadmap, cloud migration strategy, and advisory right-sized to your budget.',
      path: '/services/cloud-it-consulting'
    }
  ];

  return (
    <ModernLayout
      title="Our Services - Custom Software, Automation & IT Consulting"
      description="View custom technology services from GlennTech LLC, a certified MBE/SBE firm: web development, brand strategy, workflow automation, and compliant IT."
    >
      <div className="gt-glow" style={{ top: '15%', left: '10%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '100px 0 60px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '14px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Capabilities</span>
            <h1 className="gt-page-title gt-text-gradient">
              Technology built for results.
            </h1>
            <p className="gt-section-desc" style={{ maxWidth: '720px' }}>
              We build custom software, digital brands, marketing campaigns, and automations with a strong focus on compliance and security.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="gt-section" style={{ padding: '40px 0 100px 0' }}>
        <div className="gt-container">
          <div className="gt-grid-3">
            {servicesList.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="gt-card gt-card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="gt-card-icon" style={{ color: 'var(--primary-accent)' }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff' }}>{service.title}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 0 24px 0', flexGrow: 1 }}>{service.desc}</p>
                  <Link href={service.path} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-accent)', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }} className="service-link">
                    View Service Details <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust CTA Section */}
      <section className="gt-section" style={{ textAlign: 'center', borderTop: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="gt-container">
          <ScrollReveal>
            <h2 className="gt-section-title">Need a custom implementation?</h2>
            <p className="gt-section-desc" style={{ maxWidth: '600px', marginBottom: '32px' }}>
              We build custom software around your actual rules and tools. Tell us what you're trying to solve.
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
