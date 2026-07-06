import React from 'react';
import { useRouter } from 'next/router';
import PageWrapper from '../../components/PageWrapper';
import { headerHtml, footerHtml } from '../../components/LayoutData';

export default function CaseStudyPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  // Capitalize and format slug (e.g. eagle-financial-services -> Eagle Financial Services)
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
          <span style="color: #00e5ff; font-weight: 700; text-transform: uppercase; font-size: 0.9rem; letter-spacing: 0.1em; display: block; margin-bottom: 16px;">Case Study & Success Story</span>
          <h1 class="title-h1" style="color: #ffffff; font-weight: 300; line-height: 1.1; margin-bottom: 32px; font-size: 3.5rem;">${title}</h1>
          
          <div style="background-color: #111111; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 32px; margin-bottom: 48px;">
            <p style="color: #00e5ff; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em;">The Challenge</p>
            <p style="color: #d1d5db; line-height: 1.6; font-size: 1.05rem; margin: 0 0 24px 0;">
              Our client required a comprehensive technological leap to optimize data flows, scale active users, and integrate custom security features under tight time constraints.
            </p>
            
            <p style="color: #00e5ff; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em;">Our Solution</p>
            <p style="color: #d1d5db; line-height: 1.6; font-size: 1.05rem; margin: 0 0 24px 0;">
              GlennTech assembled a dedicated cross-functional engineering team, designing and implementing a microservices-based cloud platform integrated with advanced data pipelines and cyber protection.
            </p>
            
            <p style="color: #00e5ff; font-weight: 600; margin-bottom: 8px; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 0.05em;">Key Results</p>
            <ul style="list-style: none; padding: 0; margin: 0; color: #d1d5db; line-height: 1.8;">
              <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><span style="color: #00e5ff;">✓</span> 99.99% Platform uptime achieved post-migration</li>
              <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><span style="color: #00e5ff;">✓</span> 40% Increase in data processing speed and efficiency</li>
              <li style="margin-bottom: 8px; display: flex; align-items: center; gap: 8px;"><span style="color: #00e5ff;">✓</span> Complete compliance certification alignment met</li>
            </ul>
          </div>

          <a href="/contact-us" class="btn-n btn-n--white" style="display: inline-flex; align-items: center; text-decoration: none; border-radius: 48px; font-weight: 700; padding: 16px 32px; transition: background-color 0.3s;">
            <span class="btn-n__text">Consult with an GlennTech Specialist</span>
          </a>
        </div>
      </div>
    </main>
    ${footerHtml}
  `;

  return (
    <PageWrapper
      title={`${title} - Case Study - GlennTech`}
      description={`Case study on ${title.toLowerCase()} software engineering and design solutions implemented by GlennTech.`}
      bodyClass="single-case-studies"
      html={bodyHtml}
    />
  );
}
