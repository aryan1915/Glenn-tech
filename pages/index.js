import React from 'react';
import Link from 'next/link';
import { Shield, Award, CheckCircle, ArrowRight, Server, Globe, Users, Briefcase, Zap, Cpu, Activity, MessageSquare, Workflow } from 'lucide-react';
import ModernLayout from '../components/ModernLayout';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Home() {
  const stats = [
    { value: '100', suffix: '%', label: 'ADA & HIPAA Compliance' },
    { value: '30', suffix: '+', label: 'Senior Engineers & Specialists' },
    { value: '50', suffix: '+', label: 'Enterprise Systems Delivered' },
    { value: '99', suffix: '%', label: 'Client Retention Rate' }
  ];

  const services = [
    {
      icon: <Globe size={24} />,
      title: 'Web Design & Development',
      desc: 'Sleek, fast, responsive web systems built to pass Section 508 and ADA review from the first line of code.',
      path: '/services/web-design-development'
    },
    {
      icon: <Award size={24} />,
      title: 'Brand Strategy & Identity',
      desc: 'Clarity-driven brand positioning, logos, guidelines, and collateral that build trust in your target markets.',
      path: '/services/brand-strategy-identity'
    },
    {
      icon: <Zap size={24} />,
      title: 'Digital Marketing & Lead Gen',
      desc: 'Paid campaigns and high-converting landing pages engineered to drive solid sales pipeline, not vanity metrics.',
      path: '/services/digital-marketing-lead-generation'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'AI Voice & Chat Automation',
      desc: 'Responsible 24/7 AI agents that answer calls, qualify prospects, and book appointments directly to your CRM.',
      path: '/services/ai-voice-chat-automation'
    },
    {
      icon: <Workflow size={24} />,
      title: 'Workflow & Process Automation',
      desc: 'Integrate apps and eliminate repetitive tasks, saving time and human errors across your organization.',
      path: '/services/workflow-process-automation'
    },
    {
      icon: <Shield size={24} />,
      title: 'Government IT & Web Services',
      desc: 'SAM.gov registered, MBE/SBE vendor offering Section 508 compliance and secure public sector IT delivery.',
      path: '/services/government-it-web-services'
    },
    {
      icon: <Activity size={24} />,
      title: 'Healthcare & HIPAA Technology',
      desc: 'Secure, accessible websites, portals, forms, and tools with privacy and compliance engineered in.',
      path: '/services/healthcare-hipaa-technology'
    },
    {
      icon: <Server size={24} />,
      title: 'Cloud & IT Consulting',
      desc: 'Practical, vendor-neutral advisory on cloud migration, security, infrastructure, and tool integration.',
      path: '/services/cloud-it-consulting'
    }
  ];

  const industries = [
    {
      title: 'Government & Public Sector',
      desc: 'Certified MBE/SBE and SAM.gov-registered vendor delivering ADA/508 accessible government portals and applications.',
      icon: <Shield size={36} className="text-accent" style={{ color: 'var(--primary-accent)' }} />,
      path: '/industries/government-public-sector'
    },
    {
      title: 'Healthcare & HIPAA Compliance',
      desc: 'Building patient-friendly portals, secure forms, and custom workflows aligned to patient-data protection and audits.',
      icon: <Activity size={36} className="text-accent" style={{ color: 'var(--primary-accent)' }} />,
      path: '/industries/healthcare'
    },
    {
      title: 'Business & Commercial',
      desc: 'Accelerating growth for mid-market commercial firms with one single point of accountability for brand, web, and automation.',
      icon: <Briefcase size={36} className="text-accent" style={{ color: 'var(--primary-accent)' }} />,
      path: '/industries/business-commercial'
    }
  ];

  const features = [
    {
      num: '01',
      title: 'Compliance First, Not Last',
      desc: 'We design for ADA, HIPAA, and Section 508 requirements from the very start, so compliance is a default, not a post-audit patch.'
    },
    {
      num: '02',
      title: 'One Accountable Team',
      desc: 'Strategy, design, development, and delivery under one roof. No outsourcing finger-pointing or coordinate delays.'
    },
    {
      num: '03',
      title: 'Honest Scoping',
      desc: 'We map exact requirements, flag unnecessary bloat, and bill transparently. No hidden charges or padded estimates.'
    },
    {
      num: '04',
      title: 'Built to be Maintained',
      desc: 'We deliver clean, readable code with comprehensive documentation. Your site belongs to you, not to a proprietary reseller.'
    }
  ];

  return (
    <ModernLayout
      title="Glenn Tech | Certified, HIPAA & ADA Compliant Software & Web Development"
      description="GlennTech LLC is a SAM.gov registered MBE/SBE firm specializing in compliance-first custom software development, web systems, process automation, and IT consulting."
    >
      {/* Glow Effects */}
      <div className="gt-glow" style={{ top: '10%', left: '10%' }} />
      <div className="gt-glow" style={{ top: '60%', right: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '140px 0 100px 0', minHeight: '85vh', display: 'flex', alignItems: 'center' }}>
        <div className="gt-container">
          <div className="gt-grid-2" style={{ alignItems: 'center' }}>
            <ScrollReveal>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '9999px', background: 'var(--primary-accent-glow)', border: '1px solid rgba(37, 99, 235, 0.15)', marginBottom: '24px' }}>
                  <Shield size={14} style={{ color: 'var(--primary-accent)' }} />
                  <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>SAM.gov Registered MBE / SBE</span>
                </div>
                <h1 className="gt-hero-title gt-text-gradient">
                  Technology built to perform - and pass review.
                </h1>
                <p style={{ fontSize: '19px', lineHeight: '1.6', color: 'var(--text-gray-400)', margin: '0 0 40px 0', maxWidth: '580px' }}>
                  We build fast, accessible, secure digital products with accessibility and compliance (ADA, HIPAA, Section 508) baked in from the first line of code.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <Link href="/contact-us" className="gt-btn gt-btn-primary">
                    Start a Conversation <ArrowRight size={16} />
                  </Link>
                  <Link href="/services" className="gt-btn gt-btn-secondary">
                    Explore Services
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
                {/* Visual Glass Box Mockup */}
                <div style={{ width: '100%', maxWidth: '480px', height: '360px', background: 'rgba(255, 255, 255, 0.85)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '40px', boxSizing: 'border-box', backdropFilter: 'blur(20px)', boxShadow: '0 30px 60px rgba(0,0,0,0.05), 0 10px 20px rgba(0,0,0,0.02)', position: 'relative', zIndex: 1 }} className="gt-card-glass">
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '32px' }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                  </div>
                  <h3 style={{ fontSize: '24px', color: 'var(--text-white)', margin: '0 0 16px 0' }}>Compliance Dashboard</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                      <span style={{ color: 'var(--text-gray-400)', fontSize: '14.5px' }}>Section 508 Accessibility</span>
                      <span style={{ color: 'var(--primary-accent)', fontWeight: '600', fontSize: '14.5px', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={16} /> Compliant</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px' }}>
                      <span style={{ color: 'var(--text-gray-400)', fontSize: '14.5px' }}>HIPAA Data Privacy</span>
                      <span style={{ color: 'var(--primary-accent)', fontWeight: '600', fontSize: '14.5px', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={16} /> Secured</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '12px' }}>
                      <span style={{ color: 'var(--text-gray-400)', fontSize: '14.5px' }}>WCAG 2.1 Level AA</span>
                      <span style={{ color: 'var(--primary-accent)', fontWeight: '600', fontSize: '14.5px', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={16} /> Verified</span>
                    </div>
                  </div>
                </div>
                {/* Accent Background Glow */}
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '380px', height: '380px', background: 'radial-gradient(circle, var(--primary-accent-glow) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Badge Banner */}
      <section className="gt-section-sm" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', background: 'rgba(255, 255, 255, 0.01)' }}>
        <div className="gt-container">
          <ScrollReveal>
            <div className="gt-badge-container">
              <div className="gt-badge-item"><div className="gt-badge-dot" /> SAM.gov Registered</div>
              <div className="gt-badge-item"><div className="gt-badge-dot" /> SBE Certified (Small Business)</div>
              <div className="gt-badge-item"><div className="gt-badge-dot" /> MBE Certified (Minority Owned)</div>
              <div className="gt-badge-item"><div className="gt-badge-dot" /> Section 508 Ready</div>
              <div className="gt-badge-item"><div className="gt-badge-dot" /> HIPAA Compliant Architecture</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="gt-section">
        <div className="gt-container">
          <div className="gt-grid-4">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="gt-card gt-stat-card gt-card-glass">
                  <div className="gt-stat-number">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="gt-stat-label">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="gt-section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gt-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <ScrollReveal>
              <div>
                <h2 className="gt-section-title">Our Services</h2>
                <p className="gt-section-desc">
                  High-quality, modular services tailored to fulfill the strict compliance requirements of government and healthcare buyers, while driving scaling commercial growth.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="gt-grid-3">
            {services.map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 50}>
                <div className="gt-card gt-card-hover" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div className="gt-card-icon" style={{ color: 'var(--primary-accent)' }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '0 0 12px 0', color: '#fff' }}>{service.title}</h3>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 0 24px 0', flexGrow: 1 }}>{service.desc}</p>
                  <Link href={service.path} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--primary-accent)', textDecoration: 'none', fontSize: '14px', fontWeight: '600' }} className="service-link">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="gt-section">
        <div className="gt-container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <ScrollReveal>
              <div>
                <h2 className="gt-section-title">Industries We Serve</h2>
                <p className="gt-section-desc">
                  We understand the specific regulatory frameworks, contracting pathways, and audience expectations unique to your sector.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="gt-grid-3">
            {industries.map((ind, idx) => (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="gt-card gt-card-glass gt-card-hover" style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                    {ind.icon}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 700, margin: '0 0 12px 0' }}>{ind.title}</h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 0 24px 0', flexGrow: 1 }}>{ind.desc}</p>
                  <Link href={ind.path} className="gt-btn gt-btn-outline gt-btn-sm" style={{ width: '100%', boxSizing: 'border-box' }}>
                    View Industry Details
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section (GlennTech Advantage) */}
      <section className="gt-section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="gt-container">
          <div className="gt-grid-2" style={{ alignItems: 'center' }}>
            <ScrollReveal>
              <div>
                <h2 className="gt-section-title gt-text-gradient">
                  The certified partner you don't have to manage.
                </h2>
                <p style={{ fontSize: '16.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', margin: '0 0 32px 0', maxWidth: '540px' }}>
                  Growing businesses, healthcare organizations, and government agencies choose GlennTech because we eliminate the friction, security risks, and administrative gaps typical of generic software vendors.
                </p>
                <Link href="/about-glenntech" className="gt-btn gt-btn-secondary">
                  Learn About Our Approach
                </Link>
              </div>
            </ScrollReveal>

            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {features.map((feat, idx) => (
                  <ScrollReveal key={idx} delay={idx * 100}>
                    <div style={{ display: 'flex', gap: '20px', padding: '24px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
                      <span style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-accent)', fontFamily: 'var(--font-display)', lineHeight: '1' }}>{feat.num}</span>
                      <div>
                        <h4 style={{ fontSize: '18px', fontWeight: 700, color: '#fff', margin: '0 0 8px 0' }}>{feat.title}</h4>
                        <p style={{ fontSize: '14px', color: 'var(--text-gray-400)', margin: 0, lineHeight: '1.6' }}>{feat.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gt-section" style={{ textAlign: 'center' }}>
        <div className="gt-container">
          <ScrollReveal>
            <div style={{ maxWidth: '720px', margin: '0 auto', padding: '60px 40px', background: 'radial-gradient(circle at top, rgba(0, 229, 255, 0.08) 0%, transparent 60%)', border: '1px solid var(--border-color)', borderRadius: '24px' }} className="gt-card-glass">
              <h2 className="gt-section-title gt-text-gradient">Ready to start your project?</h2>
              <p className="gt-section-desc">
                Get in touch with our senior leadership to map out your software requirements, security parameters, and compliance needs.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact-us" className="gt-btn gt-btn-primary">
                  Start a Conversation <ArrowRight size={16} />
                </Link>
                <Link href="/awards-partners" className="gt-btn gt-btn-secondary">
                  View Our Certifications
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ModernLayout>
  );
}
