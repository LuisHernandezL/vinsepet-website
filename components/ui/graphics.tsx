/**
 * Decorative CSS/SVG imagery standing in for photography (none available).
 * Kept purely presentational (aria-hidden) so real photos can later replace
 * these by dropping files into public/images and wiring an `image` field
 * already present on the `Service`/`Project` content types.
 */

export function TopoPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="currentColor" strokeOpacity="0.18" strokeWidth="1">
        <path d="M-20 60 C 80 20, 180 100, 280 40 S 460 60, 500 20" />
        <path d="M-20 120 C 80 80, 180 160, 280 100 S 460 120, 500 80" />
        <path d="M-20 180 C 80 140, 180 220, 280 160 S 460 180, 500 140" />
        <path d="M-20 240 C 80 200, 180 280, 280 220 S 460 240, 500 200" />
        <path d="M-20 300 C 80 260, 180 340, 280 280 S 460 300, 500 260" />
        <path d="M-20 360 C 80 320, 180 400, 280 340 S 460 360, 500 320" />
      </g>
    </svg>
  );
}

export function WaveDivider({
  className = "",
  fill = "currentColor",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        d="M0 64 C 240 120 480 0 720 32 C 960 64 1200 128 1440 64 L1440 120 L0 120 Z"
      />
    </svg>
  );
}

export function AnimatedWave({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`animate-wave ${className}`}
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="url(#wave-gradient)"
        d="M0 96 C 180 160 360 32 540 64 C 720 96 900 176 1080 128 C 1260 80 1350 96 1440 112 L1440 200 L0 200 Z"
      />
      <defs>
        <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#007991" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#439a86" stopOpacity="0.5" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ShipSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 240 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 100 L30 120 H210 L220 100 Z"
        fill="currentColor"
        opacity="0.9"
      />
      <rect x="60" y="60" width="60" height="42" fill="currentColor" opacity="0.85" />
      <rect x="72" y="30" width="26" height="32" fill="currentColor" opacity="0.85" />
      <rect x="130" y="70" width="16" height="32" fill="currentColor" opacity="0.7" />
      <rect x="150" y="78" width="16" height="24" fill="currentColor" opacity="0.7" />
      <line x1="85" y1="30" x2="85" y2="10" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function HeroBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(0,121,145,0.55),transparent_55%),radial-gradient(circle_at_85%_10%,rgba(67,154,134,0.4),transparent_50%),radial-gradient(circle_at_50%_100%,rgba(188,216,193,0.15),transparent_60%)]" />
      <TopoPattern className="absolute inset-0 h-full w-full text-mint" />
      <ShipSilhouette className="absolute bottom-6 right-[-2rem] h-28 w-56 text-navy-900/70 sm:right-8 sm:h-36 sm:w-72" />
      <AnimatedWave className="absolute inset-x-0 bottom-0 h-24 w-full sm:h-32" />
    </div>
  );
}
