import React from 'react';

export default function PremiumBackdrop() {
  return (
    <div className="gt-backdrop-container">
      {/* Dot Grid Pattern */}
      <div className="gt-backdrop-grid" />

      {/* Floating Ambient Glow Orbs */}
      <div className="gt-backdrop-orb orb-1" />
      <div className="gt-backdrop-orb orb-2" />
      <div className="gt-backdrop-orb orb-3" />

      {/* Unique Floating Outlined Graphic Boxes */}
      <div className="gt-backdrop-shape shape-box-1">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.12 }}>
          <rect x="10" y="10" width="100" height="100" rx="16" stroke="var(--primary-accent)" strokeWidth="1.5" strokeDasharray="4 4" />
          <circle cx="60" cy="60" r="12" stroke="var(--primary-accent)" strokeWidth="1.5" />
        </svg>
      </div>

      <div className="gt-backdrop-shape shape-box-2">
        <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.08 }}>
          <rect x="20" y="20" width="140" height="140" rx="24" stroke="var(--primary-accent)" strokeWidth="1.5" />
          <path d="M20 90H160" stroke="var(--primary-accent)" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M90 20V160" stroke="var(--primary-accent)" strokeWidth="1" strokeDasharray="6 6" />
        </svg>
      </div>

      {/* Inline Styles for Animation Mechanics */}
      <style jsx>{`
        .gt-backdrop-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          background-color: var(--bg-dark-1);
        }

        .gt-backdrop-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(rgba(37, 99, 235, 0.035) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .gt-backdrop-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          mix-blend-mode: multiply;
        }

        .orb-1 {
          top: -10%;
          left: 15%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, transparent 70%);
          animation: floatOrb 28s infinite alternate ease-in-out;
        }

        .orb-2 {
          bottom: -15%;
          right: 10%;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, rgba(0, 102, 204, 0.04) 0%, transparent 70%);
          animation: floatOrb 22s infinite alternate-reverse ease-in-out;
        }

        .orb-3 {
          top: 40%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%);
          animation: floatOrb 30s infinite alternate ease-in-out;
        }

        .gt-backdrop-shape {
          position: absolute;
          pointer-events: none;
        }

        .shape-box-1 {
          top: 25%;
          right: 8%;
          animation: rotateShape 45s infinite linear;
        }

        .shape-box-2 {
          bottom: 20%;
          left: 6%;
          animation: rotateShape 60s infinite linear reverse;
        }

        @keyframes floatOrb {
          0% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, 60px) scale(1.05);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes rotateShape {
          0% {
            transform: rotate(0deg) translateY(0);
          }
          50% {
            transform: rotate(180deg) translateY(15px);
          }
          100% {
            transform: rotate(360deg) translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
