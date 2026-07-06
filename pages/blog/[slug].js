import React from 'react';
import { useRouter } from 'next/router';
import PageWrapper from '../../components/PageWrapper';
import { headerHtml, footerHtml } from '../../components/LayoutData';

export default function BlogPostPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return null;

  // Capitalize and format slug (e.g. ai-in-space-exploration-artemis2 -> AI in Space Exploration Artemis2)
  const title = slug
    .split('-')
    .map(word => {
      if (word.toLowerCase() === 'ai') return 'AI';
      if (word.toLowerCase() === 'it') return 'IT';
      if (word.toLowerCase() === 'poc') return 'PoC';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

  const bodyHtml = `
    ${headerHtml}
    <main class="page-main placeholder-page" style="background-color: #050505; color: #ffffff; padding: 160px 0 100px 0; min-height: 60vh; font-family: 'Proxima Nova', Arial, sans-serif;">
      <div class="container-n">
        <div class="pl-big" style="max-width: 900px; margin: 0 auto;">
          <div style="display: flex; gap: 12px; margin-bottom: 24px; align-items: center;">
            <span style="color: #00e5ff; font-weight: 700; text-transform: uppercase; font-size: 0.85rem; letter-spacing: 0.1em;">Expert Insights</span>
            <span style="color: rgba(255,255,255,0.4); font-size: 0.85rem;">•</span>
            <span style="color: rgba(255,255,255,0.5); font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em;">Article & Audio</span>
          </div>
          
          <h1 class="title-h1" style="color: #ffffff; font-weight: 300; line-height: 1.15; margin-bottom: 32px; font-size: 3.5rem;">${title}</h1>
          
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 24px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; overflow: hidden; border: 1px solid rgba(255,255,255,0.15);">
              <img src="https://eleks.com/wp-content/uploads/volodymyr-getmanskyi-1-150x150.jpg" style="width: 100%; height: 100%; object-fit: cover;" alt="GlennTech Specialist" />
            </div>
            <div>
              <div style="color: #ffffff; font-weight: 600; font-size: 0.95rem;">GlennTech Executive Advisory</div>
              <div style="color: #9ca3af; font-size: 0.8rem;">Published by GlennTech Technology Council</div>
            </div>
          </div>

          <div style="color: #d1d5db; font-size: 1.15rem; line-height: 1.7; margin-bottom: 48px;">
            <p style="margin-bottom: 24px;">
              Digital transformation and modern technological shifts require comprehensive strategic foresight. As organizations navigate the complexities of AI integration, legacy system modernization, and secure cloud infrastructures, establishing robust development paradigms becomes paramount.
            </p>
            <p style="margin-bottom: 24px; font-style: italic; border-left: 3px solid #00e5ff; padding-left: 20px; color: #ffffff;">
              "Building high-performing intelligent architectures isn't just about selecting the right algorithm or deploying to a cloud framework. It is about creating consistent, secure pipelines that align perfectly with enterprise compliance standards."
            </p>
            <p style="margin-bottom: 24px;">
              Moving forward, successful tech leaders must focus on rapid prototyping, rigorous feasibility research, and deep domain collaboration. Our engineering teams at GlennTech partner with global enterprises to drive these capabilities from ideation straight to production deployment.
            </p>
          </div>

          <a href="/blog" class="btn-n btn-n--white" style="display: inline-flex; align-items: center; text-decoration: none; border-radius: 48px; font-weight: 700; padding: 16px 32px; transition: background-color 0.3s;">
            <span class="btn-n__text">Back to Insights</span>
          </a>
        </div>
      </div>
    </main>
    ${footerHtml}
  `;

  return (
    <PageWrapper
      title={`${title} - GlennTech Insights`}
      description={`Read ${title.toLowerCase()} and key technology takeaways by GlennTech specialists.`}
      bodyClass="single-post"
      html={bodyHtml}
    />
  );
}
