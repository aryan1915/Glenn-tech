import React, { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Animate once
        }
      },
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // If children is not a valid React element, return it as is
  if (!React.isValidElement(children)) {
    return children;
  }

  // Merge class names and transition style delay
  const mergedClassName = `${children.props.className || ''} ${className} reveal-element ${isVisible ? 'revealed' : ''}`.trim();
  const mergedStyle = {
    ...children.props.style,
    transitionDelay: `${delay}ms`
  };

  return React.cloneElement(children, {
    ref,
    className: mergedClassName,
    style: mergedStyle
  });
}
