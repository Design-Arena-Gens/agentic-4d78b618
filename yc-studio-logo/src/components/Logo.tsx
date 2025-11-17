"use client";

import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={cn("drop-shadow-[0_14px_60px_rgba(56,189,248,0.35)]", className)}
      viewBox="0 0 512 512"
      role="img"
      aria-labelledby="yc-logo-title yc-logo-desc"
    >
      <title id="yc-logo-title">YC Studio logo</title>
      <desc id="yc-logo-desc">
        Futuristic neon badge combining circuit lines with a camera lens for YC Studio.
      </desc>
      <defs>
        <radialGradient id="lensGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#0fffc2" />
          <stop offset="45%" stopColor="#00b5ff" />
          <stop offset="100%" stopColor="#111827" />
        </radialGradient>
        <linearGradient id="ringGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="45%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
        <linearGradient id="ycStroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0fffc2" />
          <stop offset="60%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>

      <g fill="none">
        <path
          d="M256 36c121.6 0 220 98.4 220 220s-98.4 220-220 220S36 377.6 36 256 134.4 36 256 36z"
          stroke="url(#ringGlow)"
          strokeWidth="26"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.92"
        />

        <circle
          cx="256"
          cy="256"
          r="148"
          fill="url(#lensGlow)"
          stroke="#0ea5e9"
          strokeWidth="6"
          opacity="0.94"
        />
        <circle
          cx="256"
          cy="256"
          r="86"
          fill="rgba(10,16,35,0.85)"
          stroke="#38bdf8"
          strokeWidth="4"
          opacity="0.85"
        />

        <g stroke="url(#ycStroke)" strokeLinecap="round" strokeWidth="18">
          <path
            d="M174 152c31 45 46.5 67.5 46.5 67.5l-0.5 0.5c0 0-2 2-2 5v103"
            strokeLinejoin="round"
          />
          <path d="M311 171c-45-2-92 38-92 84 0 49 42 90 94 90 34 0 58-13 76-33" />
        </g>

        <g stroke="#0ea5e9" strokeWidth="10" opacity="0.65">
          <path d="M96 256h58" />
          <path d="M358 256h58" />
          <path d="M256 96v58" />
          <path d="M256 358v58" />
        </g>

        <g stroke="#22d3ee" strokeWidth="8" strokeLinecap="round" opacity="0.6">
          <path d="M128 164l32 18" />
          <path d="M384 348l-32-18" />
          <path d="M348 164l-32 18" />
          <path d="M164 348l32-18" />
        </g>

        <circle cx="256" cy="256" r="36" fill="#0ea5e9" opacity="0.35" />
        <circle cx="280" cy="230" r="18" fill="#cffafe" opacity="0.65" />
      </g>
    </svg>
  );
}
