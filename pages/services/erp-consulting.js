import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import { headerHtml, footerHtml } from '../../components/LayoutData';

const bodyHtml = `
\${headerHtml}

<style>
/* Modern styling custom overrides for the redesigned page */
.rd-body {
  font-family: var(--font-sans);
  background-color: var(--bg-dark-1);
  color: var(--text-gray-200);
}

.rd-hero {
  position: relative;
  overflow: hidden;
  padding: 160px 0 100px;
  background: radial-gradient(circle at 10% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 40%),
              radial-gradient(circle at 90% 80%, rgba(0, 229, 255, 0.06) 0%, transparent 50%);
}

.rd-hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 24px;
}

.rd-hero-badge {
  color: var(--primary-accent);
  background: var(--primary-accent-glow);
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 24px;
  border: 1px solid rgba(0, 229, 255, 0.25);
  display: inline-block;
}

.rd-hero-title {
  font-size: 4rem;
  line-height: 1.1;
  font-weight: 800;
  margin-bottom: 24px;
  font-family: var(--font-display);
  background: linear-gradient(135deg, #ffffff 40%, rgba(255,255,255,0.7) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.03em;
}

@media (max-width: 768px) {
  .rd-hero-title {
    font-size: 2.75rem;
  }
}

.rd-hero-desc {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--text-gray-400);
  margin-bottom: 40px;
  max-width: 780px;
}

.rd-cta-group {
  display: flex;
  gap: 20px;
  justify-content: center;
}

@media (max-width: 480px) {
  .rd-cta-group {
    flex-direction: column;
    width: 100%;
  }
}

.rd-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-decoration: none;
  cursor: pointer;
  border: none;
}

.rd-btn-primary {
  background-color: var(--text-white);
  color: var(--bg-dark-1);
}

.rd-btn-primary:hover {
  background-color: var(--primary-accent);
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
  transform: translateY(-2px);
}

.rd-btn-secondary {
  background-color: transparent;
  color: var(--text-white);
  border: 1px solid var(--border-color);
}

.rd-btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.05);
  border-color: var(--text-white);
  transform: translateY(-2px);
}

/* Card grids & Glassmorphism */
.rd-section {
  padding: 100px 0;
  border-top: 1px solid var(--border-color);
}

.rd-section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
  letter-spacing: -0.02em;
  font-family: var(--font-display);
}

.rd-section-desc {
  font-size: 1.1rem;
  color: var(--text-gray-500);
  text-align: center;
  max-width: 650px;
  margin: 0 auto 60px;
}

.rd-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

@media (max-width: 1024px) {
  .rd-grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .rd-grid-3 {
    grid-template-columns: 1fr;
  }
}

.rd-card {
  background: var(--card-bg-1);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.rd-card:hover {
  border-color: rgba(0, 229, 255, 0.3);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.rd-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-accent), #8b5cf6);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.rd-card:hover::before {
  opacity: 1;
}

.rd-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 28px;
  color: var(--primary-accent);
  border: 1px solid var(--border-color);
}

.rd-card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--text-white);
  font-family: var(--font-display);
}

.rd-card-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--text-gray-400);
}

/* Timeline/Process styles */
.rd-timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.rd-timeline::before {
  content: '';
  position: absolute;
  left: 31px;
  top: 10px;
  bottom: 10px;
  width: 2px;
  background: var(--border-color);
}

.rd-timeline-item {
  display: flex;
  margin-bottom: 48px;
  position: relative;
}

.rd-timeline-item:last-child {
  margin-bottom: 0;
}

.rd-timeline-dot {
  flex: 0 0 64px;
  height: 64px;
  border-radius: 50px;
  background: var(--card-bg-2);
  border: 2px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--primary-accent);
  z-index: 2;
  transition: all 0.3s ease;
  font-family: var(--font-display);
  font-size: 1.25rem;
}

.rd-timeline-item:hover .rd-timeline-dot {
  border-color: var(--primary-accent);
  box-shadow: 0 0 15px var(--primary-accent-glow);
}

.rd-timeline-content {
  padding-left: 32px;
  padding-top: 12px;
}

.rd-timeline-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--text-white);
  font-family: var(--font-display);
}

.rd-timeline-desc {
  font-size: 0.95rem;
  color: var(--text-gray-400);
  line-height: 1.6;
}

/* Featured panel / Lead banner */
.rd-panel {
  background: linear-gradient(135deg, rgba(17,17,17,0.9) 0%, rgba(9,9,9,0.9) 100%);
  border: 1px solid var(--border-color);
  border-radius: 24px;
  padding: 60px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .rd-panel {
    padding: 32px;
  }
}

.rd-panel::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -20%;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 229, 255, 0.08) 0%, transparent 70%);
  z-index: 1;
  pointer-events: none;
}

.rd-panel-content {
  position: relative;
  z-index: 2;
  max-width: 750px;
}

.rd-panel-badge {
  color: #a78bfa;
  background: rgba(167, 139, 250, 0.1);
  padding: 4px 12px;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 20px;
  display: inline-block;
  border: 1px solid rgba(167, 139, 250, 0.2);
}

.rd-panel-title {
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 20px;
  color: var(--text-white);
  font-family: var(--font-display);
}

.rd-panel-desc {
  font-size: 1.05rem;
  color: var(--text-gray-400);
  margin-bottom: 32px;
  line-height: 1.6;
}

/* Metric Stats Grid */
.rd-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 20px;
}

@media (max-width: 960px) {
  .rd-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .rd-stats-grid {
    grid-template-columns: 1fr;
  }
}

.rd-stat-card {
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid var(--border-color);
  border-radius: 16px;
  padding: 24px;
  text-align: center;
}

.rd-stat-number {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--primary-accent);
  margin-bottom: 8px;
  font-family: var(--font-display);
}

.rd-stat-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-gray-500);
}

/* Gravity Forms Overrides for Redesign Theme */
.form-container-wrapper {
  background: rgba(255, 255, 255, 0.01);
  border: 1px solid var(--border-color);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
}

@media (max-width: 640px) {
  .form-container-wrapper {
    padding: 24px;
  }
}

.form input:not([type=radio]):not([type=checkbox]):not([type=submit]):not([type=button]):not([type=image]):not([type=file]),
.form textarea {
  background: rgba(255, 255, 255, 0.02) !important;
  border: 1px solid var(--border-color) !important;
  border-radius: 8px !important;
  color: var(--text-white) !important;
  padding: 16px 20px !important;
  font-size: 0.95rem !important;
  margin-bottom: 12px !important;
  transition: all 0.3s ease !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

.form input:focus, .form textarea:focus {
  border-color: var(--primary-accent) !important;
  background: rgba(0, 229, 255, 0.01) !important;
  outline: none !important;
  box-shadow: 0 0 12px rgba(0, 229, 255, 0.15) !important;
}

.form .gfield_label {
  color: var(--text-gray-200) !important;
  font-size: 0.95rem !important;
  font-weight: 600 !important;
  margin-bottom: 8px !important;
  position: static !important;
  display: block !important;
  transform: none !important;
  opacity: 1 !important;
}

.formrowlist {
  display: grid !important;
  grid-template-columns: 1fr 1fr !important;
  gap: 24px !important;
}

@media (max-width: 640px) {
  .formrowlist {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }
}

.formrow__company, .formrow__message, .formrow__attach, .formrow--checkbox {
  grid-column: span 2 !important;
}

@media (max-width: 640px) {
  .formrow__company, .formrow__message, .formrow__attach, .formrow--checkbox {
    grid-column: span 1 !important;
  }
}

.form .gform_wrapper .gform_footer input[type=submit] {
  background-color: var(--text-white) !important;
  color: var(--bg-dark-1) !important;
  border-radius: 30px !important;
  padding: 16px 40px !important;
  font-weight: 700 !important;
  border: none !important;
  cursor: pointer !important;
  font-size: 0.95rem !important;
  transition: all 0.3s ease !important;
  background-image: none !important;
  line-height: 1 !important;
}

.form .gform_wrapper .gform_footer input[type=submit]:hover {
  background-color: var(--primary-accent) !important;
  box-shadow: 0 0 20px rgba(0, 229, 255, 0.4) !important;
  color: var(--bg-dark-1) !important;
}

.formrow--checkbox .gfield_checkbox label {
  color: var(--text-gray-400) !important;
  font-size: 0.85rem !important;
}
</style>

<div class="rd-body">
  <!-- Hero Section -->
  <section class="rd-hero">
    <div class="rd-hero-container">
      <span class="rd-hero-badge">ERP Customization</span>
      <h1 class="rd-hero-title">ERP Consulting Services</h1>
      <p class="rd-hero-desc">
        Optimize your supply chain, financials, and inventory tracking by customizing and automating Microsoft Dynamics, SAP, or Odoo ERP platforms.
      </p>
      <div class="rd-cta-group">
        <a href="#workshop" class="rd-btn rd-btn-primary">Explore Workflow</a>
        <a href="#contact" class="rd-btn rd-btn-secondary">Get in Touch</a>
      </div>
    </div>
  </section>

  <!-- Metrics / Business Outcomes -->
  <section class="rd-section" style="background-color: var(--bg-dark-2);">
    <div class="container-n">
      <h2 class="rd-section-title">Design that Drives Growth</h2>
      <p class="rd-section-desc">Measurable business values created through expert research, visual excellence, and user-centric architecture.</p>
      
      <div class="rd-stats-grid">
        
        <div class="rd-stat-card">
          <div class="rd-stat-number">30%+</div>
          <div class="rd-stat-label">Inventory Cost Saved</div>
        </div>
        
        <div class="rd-stat-card">
          <div class="rd-stat-number">100%</div>
          <div class="rd-stat-label">Tax/Audit Alignment</div>
        </div>
        
        <div class="rd-stat-card">
          <div class="rd-stat-number">-50%</div>
          <div class="rd-stat-label">Closing Ledger Time</div>
        </div>
        
        <div class="rd-stat-card">
          <div class="rd-stat-number">3x</div>
          <div class="rd-stat-label">Report Generation Speed</div>
        </div>
        
      </div>
    </div>
  </section>

  <!-- Three Pillars -->
  <section class="rd-section">
    <div class="container-n">
      <h2 class="rd-section-title">Our Three Core Pillars</h2>
      <p class="rd-section-desc">A comprehensive strategy built to transform your complex software concepts into elegant digital experiences.</p>
      
      <div class="rd-grid-3">
        
        <div class="rd-card">
          <div class="rd-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
          </div>
          <h3 class="rd-card-title">ERP Custom Module Coding</h3>
          <p class="rd-card-desc">
            Build customized dashboard plugins, invoice templates, data triggers, and specialized calculators inside your ERP.
          </p>
        </div>
        
        <div class="rd-card">
          <div class="rd-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
          </div>
          <h3 class="rd-card-title">ETL & Clean Data Migration</h3>
          <p class="rd-card-desc">
            Deduplicate, map, and import decades of enterprise vendor records, invoices, and product data safely.
          </p>
        </div>
        
        <div class="rd-card">
          <div class="rd-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
          </div>
          <h3 class="rd-card-title">Unified BI Analytics</h3>
          <p class="rd-card-desc">
            Establish executive visibility dashboards, margins tracking, dynamic demand forecasts, and operational analytics.
          </p>
        </div>
        
      </div>
    </div>
  </section>

  <!-- Process Timeline -->
  <section class="rd-section" style="background-color: var(--bg-dark-2);">
    <div class="container-n">
      <h2 class="rd-section-title">Our Delivery Journey</h2>
      <p class="rd-section-desc">Our end-to-end design and execution process ensures high precision, transparency, and risk mitigation at every milestone.</p>
      
      <div class="rd-timeline">
        
        <div class="rd-timeline-item">
          <div class="rd-timeline-dot">01</div>
          <div class="rd-timeline-content">
            <h3 class="rd-timeline-title">Operational Mapping</h3>
            <p class="rd-timeline-desc">
              Catalogue financial ledger entries, material SKUs, and inventory flows.
            </p>
          </div>
        </div>
        
        <div class="rd-timeline-item">
          <div class="rd-timeline-dot">02</div>
          <div class="rd-timeline-content">
            <h3 class="rd-timeline-title">ERP Configuration</h3>
            <p class="rd-timeline-desc">
              Set user permissions, custom fields, and ledger rules in Microsoft/SAP.
            </p>
          </div>
        </div>
        
        <div class="rd-timeline-item">
          <div class="rd-timeline-dot">03</div>
          <div class="rd-timeline-content">
            <h3 class="rd-timeline-title">Legacy Data Migration</h3>
            <p class="rd-timeline-desc">
              Run ETL scripts to transfer files, clean invoices, and map schemas.
            </p>
          </div>
        </div>
        
        <div class="rd-timeline-item">
          <div class="rd-timeline-dot">04</div>
          <div class="rd-timeline-content">
            <h3 class="rd-timeline-title">Staff Onboarding</h3>
            <p class="rd-timeline-desc">
              Run team walkthrough workshops and deliver dynamic reference documentation.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </section>

  <!-- Signature Workshop Banner -->
  <section class="rd-section" id="workshop">
    <div class="container-n">
      <div class="rd-panel">
        <div class="rd-panel-content">
          <span class="rd-panel-badge">High-Value Workshop</span>
          <h2 class="rd-panel-title">Define Your Vision in a Single Day</h2>
          <p class="rd-panel-desc">
            Bring your product concepts to our hands-on Collaborative Workshop. In just one day, our directors and technology architects will help you align user goals, outline visual direction, and sketch high-level architectures.
          </p>
          <a href="#contact" class="rd-btn rd-btn-primary">Book Your Session</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials & Contact Form -->
  <section class="rd-section" id="contact" style="background-color: var(--bg-dark-3); border-top: 1px solid var(--border-color);">
    <div class="container-n">
      <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 60px; align-items: start;">
        
        <!-- Contact Form Wrapper -->
        <div>
          <h2 class="rd-panel-title" style="margin-bottom: 16px;">Redesign Your Digital Experience</h2>
          <p style="color: var(--text-gray-400); margin-bottom: 40px;">
            Let's build something exceptional. Share your goal and get expert feedback within 24 hours.
          </p>
          
          <div class="form-container-wrapper">
            
          </div>
        </div>

        <!-- Sidebar Testimonials -->
        <div style="background-color: var(--card-bg-1); border: 1px solid var(--border-color); border-radius: 20px; padding: 40px; box-shadow: 0 10px 30px rgba(0,0,0,0.35);">
          <span style="color: var(--primary-accent); font-weight: 700; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 24px;">What Our Clients Say</span>
          
          <div style="margin-bottom: 32px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 32px;">
            <p style="font-style: italic; color: var(--text-gray-200); font-size: 1rem; line-height: 1.6; margin-bottom: 20px;">
              "Working with the team in Glenn Tech has given us a leading edge in bringing our new products to the market. Their team's technical knowledge, support and customer service is outstanding."
            </p>
            <div>
              <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">Maranda Walsh</div>
              <div style="font-size: 0.85rem; color: var(--text-gray-500);">Director of Engineering, Wellair</div>
            </div>
          </div>

          <div>
            <p style="font-style: italic; color: var(--text-gray-200); font-size: 1rem; line-height: 1.6; margin-bottom: 20px;">
              "Right from the start, we liked Glenn Tech' commitment and engagement. They came to us with their best people to try to understand our context, our business idea, and developed the first prototype with us."
            </p>
            <div>
              <div style="font-weight: 700; color: var(--text-white); font-size: 0.95rem;">Caroline Aumeran</div>
              <div style="font-size: 0.85rem; color: var(--text-gray-500);">Head of Product Development, appygas</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</div>

\${footerHtml}
`;

export default function Page() {
  return (
    <PageWrapper
      title="Search for:"
      description="With ERP consulting and implementation services from Glenn Tech, you can drive efficiency and better integration throughout your enterprise."
      bodyClass="wp-singular services-template-default single single-services postid-55355 wp-theme-eleks siteorigin-panels siteorigin-panels-before-js"
      html={bodyHtml}
    />
  );
}
