import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Quote, HelpCircle, Activity, Briefcase } from 'lucide-react';
import ModernLayout from '../../components/ModernLayout';
import ScrollReveal from '../../components/ScrollReveal';
import { caseStudies } from '../../data/caseStudiesData';

export default function DynamicCaseStudy() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    return (
      <ModernLayout title="Case Study Not Found" description="The requested GlennTech case study could not be located.">
        <section className="gt-section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <div className="gt-container">
            <h2 style={{ fontSize: '32px', margin: '0 0 16px 0' }}>Case Study Not Found</h2>
            <p style={{ color: 'var(--text-gray-400)', marginBottom: '32px' }}>The project you requested is not available.</p>
            <Link href="/case-studies" className="gt-btn gt-btn-primary">Back to Case Studies</Link>
          </div>
        </section>
      </ModernLayout>
    );
  }

  return (
    <ModernLayout
      title={`${project.title} Case Study`}
      description={`How GlennTech delivered software and compliance solutions for ${project.client}.`}
    >
      <div className="gt-glow" style={{ top: '15%', right: '5%' }} />

      {/* Hero Section */}
      <section className="gt-section" style={{ padding: '120px 0 60px 0' }}>
        <div className="gt-container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
              {project.sector} / Success Story
            </span>
            <h1 style={{ fontSize: '56px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
              {project.title}
            </h1>
            <p style={{ fontSize: '19px', color: 'var(--text-gray-400)', fontWeight: '500', maxWidth: '640px', margin: '0 auto' }}>
              <strong>Client:</strong> {project.client}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Content Blocks */}
      <section className="gt-section" style={{ padding: '40px 0 100px 0' }}>
        <div className="gt-container" style={{ maxWidth: '900px' }}>
          
          {/* Challenge Card */}
          <ScrollReveal>
            <div className="gt-card gt-card-glass" style={{ marginBottom: '32px', borderLeft: '4px solid #ff5f56' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HelpCircle size={20} style={{ color: '#ff5f56' }} /> The Challenge
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--text-gray-400)', lineHeight: '1.7', margin: 0 }}>
                {project.challenge}
              </p>
            </div>
          </ScrollReveal>

          {/* What We Did Card */}
          <ScrollReveal delay={100}>
            <div className="gt-card gt-card-glass" style={{ marginBottom: '32px', borderLeft: '4px solid var(--primary-accent)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity size={20} style={{ color: 'var(--primary-accent)' }} /> What We Did
              </h3>
              <p style={{ fontSize: '15.5px', color: 'var(--text-gray-400)', lineHeight: '1.7', margin: 0 }}>
                {project.whatWeDid}
              </p>
            </div>
          </ScrollReveal>

          {/* Results Card */}
          <ScrollReveal delay={150}>
            <div className="gt-card gt-card-glass" style={{ marginBottom: '48px', borderLeft: '4px solid #27c93f' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={20} style={{ color: '#27c93f' }} /> The Result
              </h3>
              <p style={{ fontSize: '16px', color: '#fff', fontWeight: '600', marginBottom: '16px', lineHeight: '1.5' }}>
                {project.result}
              </p>
            </div>
          </ScrollReveal>

          {/* Client Quote Callout */}
          {project.quote && (
            <ScrollReveal delay={200}>
              <div style={{ padding: '40px', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--border-color)', borderRadius: '24px', textAlign: 'center', marginBottom: '56px', position: 'relative' }}>
                <Quote size={40} style={{ color: 'var(--primary-accent)', opacity: 0.15, position: 'absolute', top: '16px', left: '24px' }} />
                <p style={{ fontSize: '18px', color: '#fff', fontStyle: 'italic', lineHeight: '1.7', margin: '0 0 16px 0', position: 'relative', zIndex: 1 }}>
                  "{project.quote}"
                </p>
                <span style={{ fontSize: '14px', color: 'var(--text-gray-400)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>— Client Testimonial</span>
              </div>
            </ScrollReveal>
          )}

          {/* Bottom CTA */}
          <ScrollReveal delay={250}>
            <div style={{ textAlign: 'center' }}>
              <Link href="/contact-us" className="gt-btn gt-btn-primary">
                Start your project <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </ModernLayout>
  );
}
