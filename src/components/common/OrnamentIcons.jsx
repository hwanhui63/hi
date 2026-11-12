import React from 'react';

export function RedBauble({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      className={`drop-shadow-lg ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="baubleGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ff7b72" />
          <stop offset="35%" stopColor="#cf222e" />
          <stop offset="75%" stopColor="#82071e" />
          <stop offset="100%" stopColor="#410811" />
        </radialGradient>
        <linearGradient id="goldCapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7E7A9" />
          <stop offset="50%" stopColor="#B88B4A" />
          <stop offset="100%" stopColor="#714F20" />
        </linearGradient>
      </defs>
      {/* Hanging Ring */}
      <circle cx="50" cy="12" r="8" stroke="url(#goldCapGrad)" strokeWidth="3" fill="none" />
      {/* Cap */}
      <path d="M40 20 H60 V28 H40 Z" fill="url(#goldCapGrad)" />
      <path d="M38 28 H62 V30 H38 Z" fill="#8D672E" />
      {/* Sphere */}
      <circle cx="50" cy="70" r="45" fill="url(#baubleGrad)" />
      {/* Specular Highlight */}
      <ellipse cx="36" cy="50" rx="12" ry="7" transform="rotate(-30 36 50)" fill="#ffffff" opacity="0.45" />
      {/* Subtle Gold Pattern */}
      <path
        d="M15 70 Q 50 85 85 70"
        stroke="#EBD39A"
        strokeWidth="2"
        strokeDasharray="4 4"
        opacity="0.6"
      />
    </svg>
  );
}

export function GoldenStar({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`drop-shadow-lg ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="starGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF9E0" />
          <stop offset="35%" stopColor="#F3D17A" />
          <stop offset="70%" stopColor="#B88B4A" />
          <stop offset="100%" stopColor="#6C4A1A" />
        </radialGradient>
      </defs>
      <polygon
        points="50,5 61,35 95,35 67,55 78,88 50,68 22,88 33,55 5,35 39,35"
        fill="url(#starGrad)"
        stroke="#FFF2BF"
        strokeWidth="1.5"
      />
      <circle cx="50" cy="50" r="10" fill="#FFFBE6" opacity="0.6" />
    </svg>
  );
}

export function ChristmasBell({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      className={`drop-shadow-lg ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bellGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2BF" />
          <stop offset="45%" stopColor="#E0B15C" />
          <stop offset="85%" stopColor="#A37229" />
          <stop offset="100%" stopColor="#5E3E11" />
        </linearGradient>
      </defs>
      {/* Hanging Ribbon */}
      <path d="M45 10 C40 2 30 2 28 8 C25 15 36 20 50 20 C64 20 75 15 72 8 C70 2 60 2 55 10 Z" fill="#991B1B" />
      <circle cx="50" cy="14" r="5" fill="#DC2626" />
      {/* Clapper */}
      <circle cx="50" cy="100" r="10" fill="#6C4A1A" />
      {/* Bell Body */}
      <path
        d="M50 22 C38 22 30 35 28 65 C26 78 18 88 15 92 H85 C82 88 74 78 72 65 C70 35 62 22 50 22 Z"
        fill="url(#bellGrad)"
      />
      {/* Bell Lip */}
      <ellipse cx="50" cy="92" rx="35" ry="6" fill="#885A1D" />
      <ellipse cx="50" cy="91" rx="34" ry="4" fill="#F8E5A7" />
    </svg>
  );
}

export function Ribbon({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`drop-shadow-lg ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="ribbonGrad" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#EF4444" />
          <stop offset="60%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#5F0E12" />
        </radialGradient>
      </defs>
      {/* Left Loop */}
      <path
        d="M50 45 C35 25 10 25 15 45 C20 60 40 50 50 45 Z"
        fill="url(#ribbonGrad)"
        stroke="#FCA5A5"
        strokeWidth="1"
      />
      {/* Right Loop */}
      <path
        d="M50 45 C65 25 90 25 85 45 C80 60 60 50 50 45 Z"
        fill="url(#ribbonGrad)"
        stroke="#FCA5A5"
        strokeWidth="1"
      />
      {/* Tails */}
      <path d="M46 50 L30 85 L42 80 L48 55 Z" fill="#991B1B" />
      <path d="M54 50 L70 85 L58 80 L52 55 Z" fill="#991B1B" />
      {/* Center Knot */}
      <circle cx="50" cy="46" r="9" fill="#DC2626" stroke="#FEE2E2" strokeWidth="1" />
      <circle cx="48" cy="44" r="3" fill="#FEE2E2" opacity="0.6" />
    </svg>
  );
}

export function GiftBox({ size = 36, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 110"
      className={`drop-shadow-lg ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="boxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A1813" />
          <stop offset="50%" stopColor="#300E0A" />
          <stop offset="100%" stopColor="#1C0806" />
        </linearGradient>
        <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#FFF2BF" />
          <stop offset="100%" stopColor="#B88B4A" />
        </linearGradient>
      </defs>
      {/* Bow */}
      <path d="M50 28 C42 12 28 12 32 24 C36 32 46 28 50 28 Z" fill="url(#goldRibbon)" />
      <path d="M50 28 C58 12 72 12 68 24 C64 32 54 28 50 28 Z" fill="url(#goldRibbon)" />
      <circle cx="50" cy="27" r="4" fill="#FFF2BF" />
      {/* Lid */}
      <rect x="20" y="28" width="60" height="16" rx="2" fill="url(#boxGrad)" stroke="#B88B4A" strokeWidth="1" />
      <rect x="45" y="28" width="10" height="16" fill="url(#goldRibbon)" />
      {/* Box Body */}
      <rect x="25" y="44" width="50" height="52" rx="2" fill="url(#boxGrad)" stroke="#B88B4A" strokeWidth="1" />
      <rect x="45" y="44" width="10" height="52" fill="url(#goldRibbon)" />
    </svg>
  );
}

export function OrnamentIcon({ type, size = 36, className = "" }) {
  switch (type) {
    case 'star':
      return <GoldenStar size={size} className={className} />;
    case 'bell':
      return <ChristmasBell size={size} className={className} />;
    case 'ribbon':
      return <Ribbon size={size} className={className} />;
    case 'gift':
      return <GiftBox size={size} className={className} />;
    case 'bauble':
    default:
      return <RedBauble size={size} className={className} />;
  }
}
