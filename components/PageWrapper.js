import React, { useEffect, useRef } from 'react';
import Head from 'next/head';

const processBranding = (text) => {
  if (!text || typeof text !== 'string') return text;
  let content = text;

  // 1. Replace social accounts, links, handles, emails
  content = content.replace(/facebook\.com\/ELEKS\.Software/g, 'facebook.com/GlennTech');
  content = content.replace(/@ELEKSSoftware/g, '@GlennTech');
  content = content.replace(/twitter\.com\/ELEKSSoftware/g, 'twitter.com/GlennTech');
  content = content.replace(/x\.com\/ELEKSSoftware/g, 'x.com/GlennTech');
  content = content.replace(/instagram\.com\/elekssoftware/g, 'instagram.com/glenntech');
  content = content.replace(/linkedin\.com\/company\/eleks/g, 'linkedin.com/company/glenntech');
  content = content.replace(/info@eleks\.com/g, 'info@glenntech.com');
  content = content.replace(/wikipedia\.org\/wiki\/Eleks/g, 'wikipedia.org/wiki/GlennTech');

  // 2. Replace URL redirects from about-glanntech to about-glenntech (in links)
  content = content.replace(/\/about-glanntech/g, '/about-glenntech');

  // 3. Replace text branding mentions safely
  // Replace Glann -> Glenn
  content = content.replace(/\bGlann Tech\b/g, 'Glenn Tech');
  content = content.replace(/\bGlannTech\b/g, 'GlennTech');
  content = content.replace(/\bGlann\b/g, 'Glenn');
  content = content.replace(/\bglann\b/g, 'glenn');

  // Replace ELEKS/Eleks/eleks safely
  // Ignore eleks.com/wp-content, eleks.com/wp-includes, eleks.com/wp-admin, eleks.com/favicon, eleks.com/logo
  content = content.replace(/(https?:\/\/)?(www\.)?eleks\.com(?!(\/wp-content|\/wp-includes|\/wp-admin|\/favicon|\/uploads))/gi, (match, p1, p2) => {
    return (p1 || '') + (p2 || '') + 'glenntech.com';
  });

  content = content.replace(/\bELEKS\b/g, 'GlennTech');
  content = content.replace(/\bEleks\b/g, 'GlennTech');
  content = content.replace(/\bELEKS Ltd\b/g, 'GlennTech Ltd');
  content = content.replace(/ELEKS logo/g, 'GlennTech logo');
  content = content.replace(/ELEKS: Enterprise Software/g, 'GlennTech: Enterprise Software');

  return content;
};

export default function PageWrapper({ html, title, description, bodyClass }) {
  const containerRef = useRef(null);
  
  const processedHtml = processBranding(html);
  const processedTitle = processBranding(title);
  const processedDescription = processBranding(description);

  useEffect(() => {
    if (bodyClass) {
      document.body.className = bodyClass;
    }
    return () => {
      document.body.className = '';
    };
  }, [bodyClass]);

  // Mobile & Tablet Header Drawer Controller
  useEffect(() => {
    const handleMenuClick = (e) => {
      const toggleBtn = e.target.closest('.hide-show-menu, .hide_show_menu_btn');
      if (toggleBtn) {
        e.preventDefault();
        e.stopPropagation();
        const header = document.querySelector('.header--new');
        const info = document.querySelector('.header--new__info');
        
        if (header) {
          header.classList.toggle('active');
          header.classList.toggle('opened');
        }
        if (info) {
          info.classList.toggle('active');
          info.classList.toggle('opened');
        }
        toggleBtn.classList.toggle('active');
        toggleBtn.classList.toggle('opened');
        return;
      }

      const opener = e.target.closest('.dropdown-menu-opener');
      const itemHeader = e.target.closest('.header__menu--new > li > .nav-link, .header__menu--new > li > a');
      if (opener || itemHeader) {
        const parentLi = (opener || itemHeader).closest('li');
        if (parentLi) {
          const wrapper = parentLi.querySelector('.dropdown-menu__wrapper');
          if (wrapper) {
            e.preventDefault();
            e.stopPropagation();
            parentLi.classList.toggle('active');
            parentLi.classList.toggle('opened');
            wrapper.classList.toggle('active');
            wrapper.classList.toggle('opened');
          }
        }
      }
    };

    document.addEventListener('click', handleMenuClick);
    return () => {
      document.removeEventListener('click', handleMenuClick);
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    // Safely promote lazy-loaded image attributes in client DOM
    const lazyImages = containerRef.current.querySelectorAll('img[data-lazy-src]');
    lazyImages.forEach((img) => {
      const lazySrc = img.getAttribute('data-lazy-src');
      if (lazySrc) {
        img.setAttribute('src', lazySrc);
      }
      const lazySrcset = img.getAttribute('data-lazy-srcset');
      if (lazySrcset) {
        img.setAttribute('srcset', lazySrcset);
      }
      const lazySizes = img.getAttribute('data-lazy-sizes');
      if (lazySizes) {
        img.setAttribute('sizes', lazySizes);
      }
    });

    // Safely clean up any existing slick carousel instances left by strict-mode double-run
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn && window.jQuery.fn.slick) {
      try {
        window.jQuery('.slick-initialized').slick('unslick');
      } catch (e) {
        // Fallback: manually strip initialization classes if unslick fails
        const slickElements = containerRef.current.querySelectorAll('.slick-initialized');
        slickElements.forEach(el => el.classList.remove('slick-initialized'));
      }
    }

    let isMounted = true;
    const appendedScripts = [];

    const runScripts = async () => {
      const scripts = Array.from(containerRef.current.querySelectorAll('script'));
      
      if (typeof window !== 'undefined') {
        window.__loadedLibraries = window.__loadedLibraries || new Set();
      }

      const isLibrary = (src) => {
        if (!src) return false;
        const libraryKeywords = [
          'jquery/jquery.min.js',
          'cookies-js.min.js',
          'scrollreveal.min.js',
          'slick.min.js',
          'ua-parser.min.js',
          'sticky-kit.min.js'
        ];
        return libraryKeywords.some(keyword => src.includes(keyword));
      };

      for (const script of scripts) {
        if (!isMounted) break;

        // Skip WP Rocket lazy load script entirely to avoid jQuery redefinition and page hijacking errors
        if (script.innerHTML && script.innerHTML.includes('RocketLazyLoadScripts')) {
          script.remove();
          continue;
        }

        let src = script.getAttribute('data-rocket-src') || script.getAttribute('src');
        let type = script.getAttribute('type');
        if (type === 'text/rocketlazyloadscript') {
          type = 'text/javascript';
        }

        if (src && isLibrary(src) && window.__loadedLibraries.has(src)) {
          script.remove();
          continue;
        }

        await new Promise((resolve) => {
          const newScript = document.createElement('script');
          
          Array.from(script.attributes).forEach((attr) => {
            let name = attr.name;
            let value = attr.value;
            if (name === 'type' && value === 'text/rocketlazyloadscript') {
              value = 'text/javascript';
            }
            if (name === 'data-rocket-src') {
              name = 'src';
            }
            newScript.setAttribute(name, value);
          });

          if (script.innerHTML) {
            newScript.innerHTML = script.innerHTML;
          }

          if (src) {
            newScript.onload = () => {
              if (isLibrary(src)) {
                window.__loadedLibraries.add(src);
              }
              resolve();
            };
            newScript.onerror = () => resolve();
            document.body.appendChild(newScript);
            appendedScripts.push(newScript);
            script.remove();
          } else {
            document.body.appendChild(newScript);
            appendedScripts.push(newScript);
            script.remove();
            resolve();
          }
        });
      }
    };

    const timer = setTimeout(() => {
      if (isMounted) runScripts();
    }, 100);

    return () => {
      isMounted = false;
      clearTimeout(timer);
      appendedScripts.forEach((script) => {
        try {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        } catch (e) {
          // ignore
        }
      });
    };
  }, [html]);

  return (
    <>
      <Head>
        <title>{processedTitle}</title>
        {processedDescription && <meta name="description" content={processedDescription} />}
      </Head>
      <div 
        ref={containerRef} 
        dangerouslySetInnerHTML={{ __html: processedHtml }} 
        suppressHydrationWarning={true}
      />
    </>
  );
}
