/**
 * SVG tribal patterns inspired by PNG bilum weaving, tapa cloth, and Sepik River art.
 * Used as decorative elements throughout the site.
 */

export const BilumPattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <pattern id="bilum" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M20 0 L40 20 L20 40 L0 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M20 5 L35 20 L20 35 L5 20 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.2" />
        <circle cx="20" cy="20" r="2" fill="currentColor" opacity="0.25" />
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#bilum)" />
  </svg>
);

export const SepikSpiral = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M60 10 C90 10 110 30 110 60 C110 90 90 110 60 110 C30 110 10 90 10 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" />
    <path d="M60 25 C82 25 95 38 95 60 C95 82 82 95 60 95 C38 95 25 82 25 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.15" />
    <path d="M60 40 C74 40 80 46 80 60 C80 74 74 80 60 80 C46 80 40 74 40 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.1" />
    <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.2" />
  </svg>
);

export const TapaStripe = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 800 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <pattern id="tapa-stripe" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M0 20 L10 5 L20 20 L30 5 L40 20" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M0 30 L10 15 L20 30 L30 15 L40 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" />
      </pattern>
    </defs>
    <rect width="800" height="40" fill="url(#tapa-stripe)" />
  </svg>
);

export const ShieldMotif = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M40 5 C55 5 70 15 72 35 C74 55 65 80 40 95 C15 80 6 55 8 35 C10 15 25 5 40 5Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15" />
    <path d="M40 20 L50 40 L40 60 L30 40 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.12" />
    <line x1="40" y1="20" x2="40" y2="85" stroke="currentColor" strokeWidth="1" opacity="0.08" />
    <line x1="20" y1="45" x2="60" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.08" />
  </svg>
);

export const TribalDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`}>
    <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-primary/30" />
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2 L22 12 L12 22 L2 12 Z" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-primary" />
      <path d="M12 6 L18 12 L12 18 L6 12 Z" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary/50" />
      <circle cx="12" cy="12" r="2" className="fill-primary/40" />
    </svg>
    <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-primary/30" />
  </div>
);

/** Full-width tribal band with animated SVG patterns */
export const TribalBand = ({ className = "" }: { className?: string }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <svg className="w-full h-16" viewBox="0 0 1200 64" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <pattern id="tribal-band" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
          {/* Central diamond */}
          <path d="M32 4 L60 32 L32 60 L4 32 Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.25" />
          <path d="M32 14 L50 32 L32 50 L14 32 Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" />
          {/* Corner triangles */}
          <path d="M0 0 L12 0 L0 12 Z" fill="currentColor" opacity="0.08" />
          <path d="M52 0 L64 0 L64 12 Z" fill="currentColor" opacity="0.08" />
          <path d="M0 52 L0 64 L12 64 Z" fill="currentColor" opacity="0.08" />
          <path d="M64 52 L64 64 L52 64 Z" fill="currentColor" opacity="0.08" />
          {/* Dot accents */}
          <circle cx="32" cy="32" r="2.5" fill="currentColor" opacity="0.2" />
          <circle cx="0" cy="0" r="1.5" fill="currentColor" opacity="0.12" />
          <circle cx="64" cy="0" r="1.5" fill="currentColor" opacity="0.12" />
          <circle cx="0" cy="64" r="1.5" fill="currentColor" opacity="0.12" />
          <circle cx="64" cy="64" r="1.5" fill="currentColor" opacity="0.12" />
        </pattern>
      </defs>
      <rect width="1200" height="64" fill="url(#tribal-band)" className="text-primary" />
      {/* Gold top/bottom lines */}
      <line x1="0" y1="0" x2="1200" y2="0" stroke="currentColor" strokeWidth="2" className="text-primary" opacity="0.4" />
      <line x1="0" y1="63" x2="1200" y2="63" stroke="currentColor" strokeWidth="2" className="text-primary" opacity="0.4" />
    </svg>
  </div>
);

/** Animated kundu drum pattern */
export const KunduPattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Kundu drum silhouette */}
    <ellipse cx="40" cy="15" rx="20" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.2" />
    <path d="M20 15 C20 15 15 50 18 80 C20 100 30 110 40 115 C50 110 60 100 62 80 C65 50 60 15 60 15" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15" />
    {/* Decorative bands */}
    <ellipse cx="40" cy="40" rx="18" ry="5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.1" />
    <ellipse cx="40" cy="65" rx="16" ry="4" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.1" />
    <ellipse cx="40" cy="90" rx="17" ry="5" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.1" />
    {/* Cross-hatch texture */}
    <line x1="28" y1="45" x2="52" y2="45" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
    <line x1="26" y1="55" x2="54" y2="55" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
    <line x1="30" y1="75" x2="50" y2="75" stroke="currentColor" strokeWidth="0.5" opacity="0.08" />
  </svg>
);
