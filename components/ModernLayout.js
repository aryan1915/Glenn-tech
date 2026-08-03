import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, ChevronDown, ArrowRight, Shield, Award, Cpu, Workflow, CheckCircle, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import PremiumBackdrop from './PremiumBackdrop';

export default function ModernLayout({ children, title, description }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Monitor scroll for navbar styles
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on path changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const services = [
    { name: 'Web Design & Development', path: '/services/web-design-development' },
    { name: 'Brand Strategy & Identity', path: '/services/brand-strategy-identity' },
    { name: 'Digital Marketing & Lead Gen', path: '/services/digital-marketing-lead-generation' },
    { name: 'AI Voice & Chat Automation', path: '/services/ai-voice-chat-automation' },
    { name: 'Workflow & Process Automation', path: '/services/workflow-process-automation' },
    { name: 'Government IT & Web Services', path: '/services/government-it-web-services' },
    { name: 'Healthcare & HIPAA Technology', path: '/services/healthcare-hipaa-technology' },
    { name: 'Cloud & IT Consulting', path: '/services/cloud-it-consulting' },
  ];

  const industries = [
    { name: 'Government & Public Sector', path: '/industries/government-public-sector' },
    { name: 'Healthcare & Medicine', path: '/industries/healthcare' },
    { name: 'Business & Commercial', path: '/industries/business-commercial' },
  ];

  const aboutLinks = [
    { name: 'Our Approach', path: '/about/our-approach' },
    { name: 'Why GlennTech', path: '/about/why-glenntech' },
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-dark-1)', color: 'var(--text-gray-200)', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PremiumBackdrop />
      <Head>
        <title>{title ? `${title} | GlennTech LLC` : 'GlennTech LLC | Certified, HIPAA & ADA Compliant Tech'}</title>
        <meta name="description" content={description || 'Enterprise-grade technology, custom software development, workflow automation, and compliant digital products.'} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Header */}
      <header className={`gt-nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
        <div className="gt-container">
          <nav className="gt-navbar">
            <Link href="/" className="gt-nav-logo">
              <img src="/logo.png" alt="GlennTech Logo" className="gt-logo-img" />
            </Link>

            {/* Desktop Navigation Links */}
            <ul className="gt-nav-links">
              <li className="gt-nav-item">
                <span className={`gt-nav-link ${router.pathname.startsWith('/about') ? 'active' : ''}`}>
                  About <ChevronDown size={14} />
                </span>
                <div className="gt-nav-dropdown">
                  <Link href="/about-glenntech" className="gt-dropdown-link">Company Overview</Link>
                  {aboutLinks.map((link) => (
                    <Link key={link.path} href={link.path} className="gt-dropdown-link">{link.name}</Link>
                  ))}
                </div>
              </li>

              <li className="gt-nav-item">
                <Link href="/services" className={`gt-nav-link ${router.pathname.startsWith('/services') ? 'active' : ''}`}>
                  Services <ChevronDown size={14} />
                </Link>
                <div className="gt-nav-dropdown gt-nav-dropdown-wide">
                  {services.map((link) => (
                    <Link key={link.path} href={link.path} className="gt-dropdown-link">{link.name}</Link>
                  ))}
                </div>
              </li>

              <li className="gt-nav-item">
                <span className={`gt-nav-link ${router.pathname.startsWith('/industries') ? 'active' : ''}`}>
                  Industries <ChevronDown size={14} />
                </span>
                <div className="gt-nav-dropdown">
                  {industries.map((link) => (
                    <Link key={link.path} href={link.path} className="gt-dropdown-link">{link.name}</Link>
                  ))}
                </div>
              </li>

              <li className="gt-nav-item">
                <Link href="/awards-partners" className={`gt-nav-link ${router.pathname === '/awards-partners' ? 'active' : ''}`}>
                  Certifications
                </Link>
              </li>

              <li className="gt-nav-item">
                <Link href="/case-studies" className={`gt-nav-link ${router.pathname.startsWith('/case-studies') ? 'active' : ''}`}>
                  Case Studies
                </Link>
              </li>

              <li className="gt-nav-item">
                <Link href="/blog" className={`gt-nav-link ${router.pathname.startsWith('/blog') ? 'active' : ''}`}>
                  Insights
                </Link>
              </li>

              <li className="gt-nav-item">
                <Link href="/career" className={`gt-nav-link ${router.pathname === '/career' ? 'active' : ''}`}>
                  Careers
                </Link>
              </li>
            </ul>

            {/* CTA Button */}
            <Link href="/contact-us" className="gt-btn gt-btn-primary gt-btn-sm">
              Start a Conversation <ArrowRight size={14} />
            </Link>

            {/* Mobile Menu Button */}
            <button className="gt-mobile-toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={`gt-mobile-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu} />
      <div className={`gt-mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <Link href="/" className="gt-nav-logo">
            <img src="/logo.png" alt="GlennTech Logo" className="gt-logo-img" />
          </Link>
          <button style={{ background: 'none', border: 'none', color: 'var(--text-white)', cursor: 'pointer' }} onClick={toggleMobileMenu}>
            <X size={24} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
          <div>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary-accent)' }}>About</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '12px' }}>
              <Link href="/about-glenntech" className="gt-dropdown-link" style={{ padding: '4px 0' }}>Overview</Link>
              {aboutLinks.map((link) => (
                <Link key={link.path} href={link.path} className="gt-dropdown-link" style={{ padding: '4px 0' }}>{link.name}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary-accent)' }}>Services</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '12px' }}>
              <Link href="/services" className="gt-dropdown-link" style={{ padding: '4px 0', fontWeight: 'bold' }}>All Services</Link>
              {services.map((link) => (
                <Link key={link.path} href={link.path} className="gt-dropdown-link" style={{ padding: '4px 0' }}>{link.name}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ margin: '0 0 10px 0', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--primary-accent)' }}>Industries</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '12px' }}>
              {industries.map((link) => (
                <Link key={link.path} href={link.path} className="gt-dropdown-link" style={{ padding: '4px 0' }}>{link.name}</Link>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', paddingTop: '10px', borderTop: '1px solid var(--border-color)' }}>
            <Link href="/awards-partners" className="gt-dropdown-link" style={{ padding: '4px 0', fontWeight: '500' }}>Certifications</Link>
            <Link href="/case-studies" className="gt-dropdown-link" style={{ padding: '4px 0', fontWeight: '500' }}>Case Studies</Link>
            <Link href="/blog" className="gt-dropdown-link" style={{ padding: '4px 0', fontWeight: '500' }}>Insights</Link>
            <Link href="/career" className="gt-dropdown-link" style={{ padding: '4px 0', fontWeight: '500' }}>Careers</Link>
          </div>
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '20px' }}>
          <Link href="/contact-us" className="gt-btn gt-btn-primary" style={{ width: '100%', boxSizing: 'border-box' }}>
            Start a Conversation <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <main style={{ flexGrow: 1, paddingTop: '80px', position: 'relative', zIndex: 1 }}>
        {children}
      </main>

      {/* Enterprise Footer */}
      <footer style={{ backgroundColor: 'var(--bg-dark-3)', borderTop: '1px solid var(--border-color)', padding: '80px 0 40px 0', position: 'relative', zIndex: 1 }}>
        <div className="gt-container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.5fr 1.5fr 1fr', gap: '48px', marginBottom: '64px' }} className="footer-grid">

            {/* Branding Column */}
            <div>
              <Link href="/" style={{ textDecoration: 'none', display: 'block', marginBottom: '24px' }}>
                <img src="/logo.png" alt="GlennTech Logo" className="gt-footer-logo-img" />
              </Link>
              <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', lineHeight: '1.6', marginBottom: '24px', maxWidth: '300px' }}>
                SAM.gov Registered SBE/MBE firm delivering ADA, Section 508, and HIPAA compliant digital solutions and automation systems.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-gray-400)' }}>
                  <Shield size={16} className="text-accent" style={{ color: 'var(--primary-accent)' }} />
                  <span>Compliance-First Architecture</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13.5px', color: 'var(--text-gray-400)' }}>
                  <Award size={16} className="text-accent" style={{ color: 'var(--primary-accent)' }} />
                  <span>Certified MBE / SBE Vendor</span>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-white)', marginBottom: '24px' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {services.slice(0, 6).map((service) => (
                  <li key={service.path}>
                    <Link href={service.path} style={{ textDecoration: 'none', color: 'var(--text-gray-400)', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-gray-400)'}>
                      {service.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" style={{ textDecoration: 'none', color: 'var(--primary-accent)', fontSize: '14px', fontWeight: '600' }}>
                    View All Services &rarr;
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries & About Column */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#fff', marginBottom: '24px' }}>Industries</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {industries.map((ind) => (
                  <li key={ind.path}>
                    <Link href={ind.path} style={{ textDecoration: 'none', color: 'var(--text-gray-400)', fontSize: '14px', transition: 'color 0.2s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary-accent)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-gray-400)'}>
                      {ind.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-white)', marginBottom: '16px' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>
                  <Link href="/about-glenntech" style={{ textDecoration: 'none', color: 'var(--text-gray-400)', fontSize: '14px' }}>
                    About Overview
                  </Link>
                </li>
                {aboutLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} style={{ textDecoration: 'none', color: 'var(--text-gray-400)', fontSize: '14px' }}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Resources Column */}
            <div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-white)', marginBottom: '24px' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <li>
                  <Link href="/awards-partners" style={{ textDecoration: 'none', color: 'var(--text-gray-400)', fontSize: '14px' }}>
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" style={{ textDecoration: 'none', color: 'var(--text-gray-400)', fontSize: '14px' }}>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/blog" style={{ textDecoration: 'none', color: 'var(--text-gray-400)', fontSize: '14px' }}>
                    Insights Blog
                  </Link>
                </li>
                <li>
                  <Link href="/career" style={{ textDecoration: 'none', color: 'var(--text-gray-400)', fontSize: '14px' }}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" style={{ textDecoration: 'none', color: 'var(--text-gray-400)', fontSize: '14px' }}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Sub-footer */}
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }} className="sub-footer">
            <span style={{ fontSize: '13px', color: 'var(--text-gray-500)' }}>
              &copy; {new Date().getFullYear()} GlennTech LLC. All rights reserved. Registered SBE / MBE firm.
            </span>
            <div style={{ display: 'flex', gap: '24px' }}>
              <Link href="/privacy-policy" style={{ textDecoration: 'none', color: 'var(--text-gray-500)', fontSize: '13px' }}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" style={{ textDecoration: 'none', color: 'var(--text-gray-500)', fontSize: '13px' }}>
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Global responsiveness inline style script override helper */}
        <style jsx global>{`
          @media (max-width: 768px) {
            .footer-grid {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
            .sub-footer {
              flex-direction: column !important;
              text-align: center !important;
            }
          }
        `}</style>
      </footer>
    </div>
  );
}
