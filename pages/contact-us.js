import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Send, Shield } from 'lucide-react';
import ModernLayout from '../components/ModernLayout';
import ScrollReveal from '../components/ScrollReveal';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', hipaaConfirm: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.hipaaConfirm) {
      alert("Please confirm the HIPAA data disclosure before submitting.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <ModernLayout
      title="Contact Us - Start a Conversation"
      description="Connect with GlennTech LLC to discuss your custom web development, brand strategy, AI automation, or compliance IT projects."
    >
      <div className="gt-glow" style={{ top: '20%', left: '10%' }} />

      <section className="gt-section" style={{ padding: '120px 0 80px 0' }}>
        <div className="gt-container">
          <div className="gt-grid-2" style={{ alignItems: 'flex-start' }}>
            
            {/* Info Column */}
            <ScrollReveal>
              <span style={{ fontSize: '13px', color: 'var(--primary-accent)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Get In Touch</span>
              <h1 style={{ fontSize: '56px', margin: '16px 0 24px 0', fontWeight: 800 }} className="gt-text-gradient">
                Let's talk about your project.
              </h1>
              <p style={{ fontSize: '17px', color: 'var(--text-gray-400)', lineHeight: '1.6', marginBottom: '40px', maxWidth: '520px' }}>
                Have an upcoming procurement cycle, compliance audit, or custom software integration? Contact our senior staff to request scopes, VPAT reports, or estimates.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.05)', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', color: 'var(--primary-accent)', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-gray-500)', letterSpacing: '0.05em' }}>Email Us</h4>
                    <a href="mailto:info@glenntech.com" style={{ fontSize: '16.5px', color: 'var(--primary-accent)', textDecoration: 'none', fontWeight: '600' }}>info@glenntech.com</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.05)', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', color: 'var(--primary-accent)', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-gray-500)', letterSpacing: '0.05em' }}>Call Advisory</h4>
                    <span style={{ fontSize: '16.5px', color: 'var(--text-white)', fontWeight: '600' }}>+1 (800) 555-0199</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0, 229, 255, 0.05)', display: 'flex', alignItems: 'center', justifyCenter: 'center', justifyContent: 'center', color: 'var(--primary-accent)', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', textTransform: 'uppercase', color: 'var(--text-gray-500)', letterSpacing: '0.05em' }}>Headquarters</h4>
                    <span style={{ fontSize: '16.5px', color: 'var(--text-white)', fontWeight: '600' }}>New Jersey, USA</span>
                  </div>
                </div>
              </div>

              {/* Secure Notice */}
              <div style={{ display: 'flex', gap: '16px', padding: '24px', border: '1px solid var(--border-color)', background: 'rgba(0,229,255,0.02)', borderRadius: '12px', maxWidth: '480px' }}>
                <Shield size={24} style={{ color: 'var(--primary-accent)', flexShrink: 0 }} />
                <p style={{ fontSize: '13.5px', color: 'var(--text-gray-400)', margin: 0, lineHeight: '1.5' }}>
                  <strong>Secure Intake:</strong> For medical practitioners, do not submit Patient Health Information (PHI) via this general intake form. Request a BAA-secured portal link during initial review.
                </p>
              </div>
            </ScrollReveal>

            {/* Form Column */}
            <ScrollReveal delay={150}>
              <div className="gt-card gt-card-glass">
                <h3 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 24px 0', color: 'var(--text-white)' }}>Start your project</h3>
                
                {submitted ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', justifyCenter: 'center', width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0,229,255,0.08)', color: 'var(--primary-accent)', marginBottom: '20px', justifyContent: 'center' }}>
                      <CheckCircle size={28} />
                    </div>
                    <h4 style={{ fontSize: '20px', color: 'var(--text-white)', margin: '0 0 8px 0' }}>Message Sent Successfully</h4>
                    <p style={{ fontSize: '14.5px', color: 'var(--text-gray-400)', margin: 0 }}>Thank you for reaching out. A GlennTech director will contact you within one business day.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="gt-form-group">
                      <label className="gt-label">Your Name</label>
                      <input type="text" required className="gt-input" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Full Name" />
                    </div>
                    <div className="gt-form-group">
                      <label className="gt-label">Email Address</label>
                      <input type="email" required className="gt-input" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="email@company.com" />
                    </div>
                    <div className="gt-form-group">
                      <label className="gt-label">Company Name</label>
                      <input type="text" required className="gt-input" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Organization Name" />
                    </div>
                    <div className="gt-form-group">
                      <label className="gt-label">Inquiry Details</label>
                      <textarea required className="gt-textarea" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Describe your software scope, timelines, or certification goals..." />
                    </div>

                    <div className="gt-checkbox-group">
                      <input type="checkbox" id="hipaaConfirm" className="gt-checkbox" checked={formData.hipaaConfirm} onChange={(e) => setFormData({ ...formData, hipaaConfirm: e.target.checked })} />
                      <label htmlFor="hipaaConfirm" className="gt-checkbox-label">
                        I confirm that this message does not submit HIPAA Protected Health Information (PHI).
                      </label>
                    </div>
                    
                    <button type="submit" className="gt-btn gt-btn-primary" style={{ width: '100%', marginTop: '24px' }}>
                      Send Message <Send size={14} />
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
