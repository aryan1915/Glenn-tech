import React from 'react';
import { useRouter } from 'next/router';
import PageWrapper from '../../components/PageWrapper';
import { headerHtml, footerHtml } from '../../components/LayoutData';

export default function IndustryPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  // Capitalize and format slug (e.g. fintech-solutions -> Fintech Solutions)
  const title = slug
    .split('-')
    .map(word => {
      if (word.toLowerCase() === 'ai') return 'AI';
      if (word.toLowerCase() === 'it') return 'IT';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  const bodyHtml = `
    ${headerHtml}
    <main class="page-main placeholder-page" style="background-color: #050505; color: #ffffff; padding: 160px 0 100px 0; min-height: 60vh; font-family: 'Proxima Nova', Arial, sans-serif;">
      <div class="container-n">
        <div class="pl-big" style="max-width: 900px; margin: 0 auto;">
          <span style="color: #00e5ff; font-weight: 700; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 0.1em; display: block; margin-bottom: 16px;">Industry Solutions</span>
          <h1 class="title-h1" style="color: #ffffff; font-weight: 300; line-height: 1.1; margin-bottom: 32px; font-size: 3.5rem;">${title}</h1>
          <p class="description-n" style="color: #9ca3af; font-size: 1.2rem; line-height: 1.6; margin-bottom: 48px;">
            Transforming the ${title.toLowerCase()} sector with game-changing digital software products and technology modernization. We help industry leaders optimize business operations, build secure compliance frameworks, and stay ahead of the curve.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; margin-bottom: 64px;">
            <div style="background-color: #111111; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 32px; transition: border-color 0.3s ease;">
              <h3 class="title-h4" style="color: #ffffff; font-weight: 600; margin-bottom: 16px; font-size: 1.25rem;">Key Capabilities</h3>
              <ul style="list-style: none; padding: 0; margin: 0; color: #d1d5db; line-height: 1.8;">
                <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><span style="color: #00e5ff;">✓</span> Domain-Specific Compliance & Security</li>
                <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><span style="color: #00e5ff;">✓</span> Legacy System Modernization & Cloud Migrations</li>
                <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><span style="color: #00e5ff;">✓</span> Intelligent Automation & Predictive Analytics</li>
              </ul>
            </div>
            
            <div style="background-color: #111111; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 32px; transition: border-color 0.3s ease;">
              <h3 class="title-h4" style="color: #ffffff; font-weight: 600; margin-bottom: 16px; font-size: 1.25rem;">Strategic Impact</h3>
              <p style="color: #9ca3af; line-height: 1.6; font-size: 0.95rem; margin: 0;">
                Our bespoke software development solutions align with critical compliance requirements and sector standards. We enable rapid scalability while securing infrastructure integrity.
              </p>
            </div>
          </div>

          <a href="/contact-us" class="btn-n btn-n--white" style="display: inline-flex; align-items: center; text-decoration: none; border-radius: 48px; font-weight: 700; padding: 16px 32px; transition: background-color 0.3s;">
            <span class="btn-n__text">Request Industry Consultation</span>
          </a>
        </div>
      </div>
    </main>
    ${footerHtml}
  `;

  return (
    <PageWrapper
      title={`${title} - GlennTech`}
      description={`Enterprise ${title.toLowerCase()} consulting and custom software development solutions by GlennTech.`}
      bodyClass="single-industries"
      html={bodyHtml}
    />
  );
}
