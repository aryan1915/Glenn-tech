import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import { headerHtml, footerHtml } from '../../components/LayoutData';

const bodyHtml = `
${headerHtml}

<style>
/* Modern styling custom overrides for the redesigned Product Design page */
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
      <span class="rd-hero-badge">Validation & Strategy</span>
      <h1 class="rd-hero-title">Product & Service Design</h1>
      <p class="rd-hero-desc">
        We help businesses validate their most innovative ideas, create premium visual experiences, and design products that users love-with significantly reduced technological and market risk.
      </p>
      <div class="rd-cta-group">
        <a href="#workshop" class="rd-btn rd-btn-primary">Explore Workshop</a>
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
          <div class="rd-stat-number">40%+</div>
          <div class="rd-stat-label">Increase in Engagement</div>
        </div>
        <div class="rd-stat-card">
          <div class="rd-stat-number">2.5x</div>
          <div class="rd-stat-label">Faster Developer Handover</div>
        </div>
        <div class="rd-stat-card">
          <div class="rd-stat-number">-35%</div>
          <div class="rd-stat-label">Reduced Design Debt</div>
        </div>
        <div class="rd-stat-card">
          <div class="rd-stat-number">98%</div>
          <div class="rd-stat-label">User Satisfaction Rate</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Three Pillars -->
  <section class="rd-section">
    <div class="container-n">
      <h2 class="rd-section-title">Our Three Core Pillars</h2>
      <p class="rd-section-desc">A comprehensive design strategy built to transform your complex software concepts into elegant digital experiences.</p>
      
      <div class="rd-grid-3">
        <!-- Strategy & Research -->
        <div class="rd-card">
          <div class="rd-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          </div>
          <h3 class="rd-card-title">User Strategy & Research</h3>
          <p class="rd-card-desc">
            Align product vision with actual user needs. Through deep market research, competitive analysis, and user mapping, we establish the foundation for product validation.
          </p>
        </div>
        
        <!-- UX Design -->
        <div class="rd-card">
          <div class="rd-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg>
          </div>
          <h3 class="rd-card-title">User Experience (UX)</h3>
          <p class="rd-card-desc">
            Develop intuitive, seamless customer flows. We build structural layouts, wireframes, and interactive click-through prototypes that optimize user journeys and retention.
          </p>
        </div>
        
        <!-- UI & Systems -->
        <div class="rd-card">
          <div class="rd-card-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
          <h3 class="rd-card-title">UI & Visual Systems</h3>
          <p class="rd-card-desc">
            Stunning visual aesthetics meet scalable design systems. We craft clean, modern UI assets, customized typography hierarchies, and complete Component Design Libraries.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Timeline -->
  <section class="rd-section" style="background-color: var(--bg-dark-2);">
    <div class="container-n">
      <h2 class="rd-section-title">The Product Lifecycle Journey</h2>
      <p class="rd-section-desc">Our end-to-end design execution process ensures high precision, transparency, and risk mitigation at every milestone.</p>
      
      <div class="rd-timeline">
        <div class="rd-timeline-item">
          <div class="rd-timeline-dot">01</div>
          <div class="rd-timeline-content">
            <h3 class="rd-timeline-title">Discovery & Contextual Ingestion</h3>
            <p class="rd-timeline-desc">
              We ingest your business goals, target audience insights, and technical boundaries to set unified benchmarks and key performance metrics.
            </p>
          </div>
        </div>
        
        <div class="rd-timeline-item">
          <div class="rd-timeline-dot">02</div>
          <div class="rd-timeline-content">
            <h3 class="rd-timeline-title">Wireframing & Structural Ideation</h3>
            <p class="rd-timeline-desc">
              Creating clean sketches, information architecture, and core screen layouts to validate user journeys before entering visual design phases.
            </p>
          </div>
        </div>
        
        <div class="rd-timeline-item">
          <div class="rd-timeline-dot">03</div>
          <div class="rd-timeline-content">
            <h3 class="rd-timeline-title">High-Fidelity Interface Design</h3>
            <p class="rd-timeline-desc">
              Applying state-of-the-art styling, typography, dark mode options, and clean branding to translate wireframes into beautiful product interfaces.
            </p>
          </div>
        </div>
        
        <div class="rd-timeline-item">
          <div class="rd-timeline-dot">04</div>
          <div class="rd-timeline-content">
            <h3 class="rd-timeline-title">Interactive Validation & Handover</h3>
            <p class="rd-timeline-desc">
              Building high-fidelity interactive prototypes to run user testing and deliver a complete, developer-friendly Figma design token system.
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
            Bring your product concepts to our hands-on Collaborative Design Workshop. In just one day, our design directors and technology architects will help you align user goals, outline visual direction, and sketch high-level architectures.
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
            <div class='gf_browser_unknown gform_wrapper gform_legacy_markup_wrapper gform-theme--no-framework' data-form-theme='legacy' data-form-index='0' id='gform_wrapper_1' >
              <div id='gf_1' class='gform_anchor' tabindex='-1'></div>
              <form method='post' enctype='multipart/form-data' target='gform_ajax_frame_1' id='gform_1' action='/services/product-design/#gf_1' data-formid='1' novalidate>
                <div class='gform-body gform_body'>
                  <ul id='gform_fields_1' class='gform_fields top_label form_sublabel_below description_below validation_below' style='display:none;'>
                    <li id="field_1_1000" class="gfield gfield--type-honeypot gform_validation_container field_sublabel_below gfield--has-description field_description_below field_validation_below gfield_visibility_visible">
                      <label class='gfield_label gform-field-label' for='input_1_1000'>Comments</label>
                      <div class='ginput_container'><input name='input_1000' id='input_1_1000' type='text' value="" autocomplete='new-password'/></div>
                      <div class='gfield_description' id='gfield_description_1_1000'>This field is for validation purposes and should be left unchanged.</div>
                    </li>
                    <li id="field_1_8" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"></li>
                  </ul>
                  
                  <div class="formrowlist">
                    <!-- Name -->
                    <div class="formrow formrow__name">
                      <ul>
                        <li id="field_1_1" class="gfield gfield--type-text gfield--input-type-text fullname gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">
                          <label class='gfield_label gform-field-label' for='input_1_1'>Full name<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                          <div class='ginput_container ginput_container_text'>
                            <input name='input_1' id='input_1_1' type='text' value="" class='medium' maxlength='80' aria-required="true" aria-invalid="false" />
                          </div>
                        </li>
                        <li id="field_1_9" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible" style="display:none;"><div class="form__tooltip">We need your name to know how to address you</div></li>
                      </ul>
                    </div>
                    
                    <!-- Email -->
                    <div class="formrow formrow__email">
                      <ul>
                        <li id="field_1_3" class="gfield gfield--type-email gfield--input-type-email email gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">
                          <label class='gfield_label gform-field-label' for='input_1_3'>Email<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                          <div class='ginput_container ginput_container_email'>
                            <input name='input_3' id='input_1_3' type='email' value="" class='medium' aria-required="true" aria-invalid="false" />
                          </div>
                        </li>
                        <li id="field_1_12" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible" style="display:none;"><div class="form__tooltip">We need your email to respond to your request</div></li>
                      </ul>
                    </div>
                    
                    <!-- Phone -->
                    <div class="formrow formrow__phone">
                      <ul>
                        <li id="field_1_4" class="gfield gfield--type-phone gfield--input-type-phone phonenumber gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">
                          <label class='gfield_label gform-field-label' for='input_1_4'>Phone number<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                          <div class='ginput_container ginput_container_phone'>
                            <input name='input_4' id='input_1_4' type='tel' value="" class='medium' aria-required="true" aria-invalid="false" />
                          </div>
                        </li>
                        <li id="field_1_11" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible" style="display:none;"><div class="form__tooltip">We need your phone number to reach you with response to your request</div></li>
                      </ul>
                    </div>
                    
                    <!-- Country -->
                    <div class="formrow formrow__country">
                      <ul>
                        <li id="field_1_5" class="gfield gfield--type-text gfield--input-type-text country country-auto-fill gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">
                          <label class='gfield_label gform-field-label' for='input_1_5'>Country<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                          <div class='ginput_container ginput_container_text'>
                            <input name='input_5' id='input_1_5' type='text' value="" class='medium' maxlength='80' aria-required="true" aria-invalid="false" />
                          </div>
                        </li>
                        <li id="field_1_13" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible" style="display:none;"><div class="form__tooltip">We need your country of business to know from what office to contact you</div></li>
                      </ul>
                    </div>
                    
                    <!-- Company -->
                    <div class="formrow formrow__company">
                      <ul>
                        <li id="field_1_2" class="gfield gfield--type-text gfield--input-type-text company gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">
                          <label class='gfield_label gform-field-label' for='input_1_2'>Company<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                          <div class='ginput_container ginput_container_text'>
                            <input name='input_2' id='input_1_2' type='text' value="" class='medium' maxlength='80' aria-required="true" aria-invalid="false" />
                          </div>
                        </li>
                        <li id="field_1_10" class="gfield gfield--type-html gfield--input-type-html gfield_html gfield_no_follows_desc field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible" style="display:none;"><div class="form__tooltip">We need your company name to know your background</div></li>
                      </ul>
                    </div>
                    
                    <!-- Message -->
                    <div class="formrow formrow__message">
                      <ul>
                        <li id="field_1_17" class="gfield gfield--type-textarea gfield--input-type-textarea message gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">
                          <label class='gfield_label gform-field-label' for='input_1_17'>Message<span class="gfield_required"><span class="gfield_required gfield_required_asterisk">*</span></span></label>
                          <div class='ginput_container ginput_container_textarea'>
                            <textarea name='input_17' id='input_1_17' class='textarea medium' maxlength='5000' aria-required="true" aria-invalid="false" rows='4' cols='50'></textarea>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <!-- Attach -->
                    <div class="formrow formrow__attach">
                      <div class="atachfile">
                        <ul>
                          <li id="field_1_7" class="gfield gfield--type-fileupload gfield--input-type-fileupload uploadfile field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">
                            <label class='gfield_label gform-field-label' for='input_1_7'>Attach file</label>
                            <div class='ginput_container ginput_container_fileupload'>
                              <input type='hidden' name='MAX_FILE_SIZE' value="10485760" />
                              <input name='input_7' id='input_1_7' type='file' class='medium' aria-describedby="gfield_upload_rules_1_7" onchange='javascript:gformValidateFileSize( this, 10485760 );' />
                              <span class='gfield_description gform_fileupload_rules' id='gfield_upload_rules_1_7' style="display:none;">Accepted file types: jpg, gif, png, pdf, doc, docx, xls, xlsx, ppt, pptx, Max. file size: 10 MB.</span>
                              <div class='gfield_description validation_message gfield_validation_message validation_message--hidden-on-empty' id='live_validation_message_1_7'></div>
                            </div>
                          </li>
                        </ul>
                        <div class="atachfile_cont">
                          <p class="atachfile_link">Add an attachment</p>
                          <span class="atachfile_text" style="color:var(--text-gray-500); font-size:0.8rem;">(jpg, gif, png, pdf, doc, docx, xls, xlsx, ppt, pptx, max 10MB)</span>
                        </div>
                        <p class="atachfile_filename"></p>
                        <span class="atachfile_remove"></span>
                      </div>
                    </div>
                    
                    <!-- Checkbox -->
                    <div class="formrow--checkbox">
                      <ul>
                        <li id="field_1_21" class="gfield gfield--type-checkbox gfield--type-choice gfield--input-type-checkbox field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible">
                          <div class='ginput_container ginput_container_checkbox'>
                            <ul class='gfield_checkbox' id='input_1_21' style='list-style:none; padding:0; margin:0;'>
                              <li class='gchoice gchoice_1_21_1'>
                                <input class='gfield-choice-input' name='input_21.1' type='checkbox' value="I want to receive news and updates once in a while" id='choice_1_21_1' />
                                <label for='choice_1_21_1' id='label_1_21_1' class='gform-field-label gform-field-label--type-inline'>I want to receive news and updates once in a while</label>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="form__info">
                    We will add your info to our CRM for contacting you regarding your request. For more info please consult our <a href="/privacy-policy" style="color:var(--primary-accent); text-decoration:underline;">privacy policy</a>.
                  </div>
                </div>
                
                <div class='gform-footer gform_footer top_label'>
                  <input type='submit' id='gform_submit_button_1' class='gform_button button' onclick='gform.submission.handleButtonClick(this);' data-submission-type='submit' value="Send Message" />
                  <input type='hidden' name='gform_ajax' value="form_id=1&amp;title=&amp;description=&amp;tabindex=0&amp;theme=legacy&amp;hash=036d8bc2de2c65c71131ae920675665d" />
                  <input type='hidden' class='gform_hidden' name='gform_submission_method' data-js='gform_submission_method_1' value="iframe" />
                  <input type='hidden' class='gform_hidden' name='gform_theme' data-js='gform_theme_1' id='gform_theme_1' value="legacy" />
                  <input type='hidden' class='gform_hidden' name='gform_style_settings' data-js='gform_style_settings_1' id='gform_style_settings_1' value="" />
                  <input type='hidden' class='gform_hidden' name='is_submit_1' value="1" />
                  <input type='hidden' class='gform_hidden' name='gform_submit' value="1" />
                  <input type='hidden' class='gform_hidden' name='gform_currency' data-currency='USD' value="l1MrZTghXS0D4hCnMYsalwda5FL4Y5HR94VsIrEMm15GBt4JCYmnQCtVDuxerl5iBuYvGraafSeS4vbNA8t+kZlKMO+znwL7G+l04SnBK73yDqA=" />
                  <input type='hidden' class='gform_hidden' name='gform_unique_id' value="" />
                  <input type='hidden' class='gform_hidden' name='state_1' value="WyJbXSIsIjNlOTlhNWE2YTg1NDNmZTc0MGEzM2VkOThiZmI4OGRjIl0=" />
                  <input type='hidden' autocomplete='off' class='gform_hidden' name='gform_target_page_number_1' id='gform_target_page_number_1' value="0" />
                  <input type='hidden' autocomplete='off' class='gform_hidden' name='gform_source_page_number_1' id='gform_source_page_number_1' value="1" />
                  <input type='hidden' name='gform_field_values' value="" />
                </div>
              </form>
            </div>
            <iframe style='display:none;width:0px;height:0px;' src='about:blank' name='gform_ajax_frame_1' id='gform_ajax_frame_1' title="Ajax Gravity Form Frame"></iframe>
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

${footerHtml}
`;

export default function Page() {
  return (
    <PageWrapper
      title="Product and Service Design | Glenn Tech"
      description="Glenn Tech helps businesses validate their most innovative ideas, to develop products that provide superior user experience – with significantly less risk."
      bodyClass="wp-singular services-template-default single single-services postid-8799 wp-theme-eleks siteorigin-panels siteorigin-panels-before-js"
      html={bodyHtml}
    />
  );
}
