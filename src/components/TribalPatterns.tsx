/**
 * SVG tribal patterns inspired by PNG bilum weaving, tapa cloth, and Sepik River art.
 * Used as decorative elements throughout the site.
 */

export const BilumPattern = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <pattern id="bilum" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        {/* Diamond weave pattern */}
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
    {/* Sepik River inspired spiral motif */}
    <path
      d="M60 10 C90 10 110 30 110 60 C110 90 90 110 60 110 C30 110 10 90 10 60"
      stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2"
    />
    <path
      d="M60 25 C82 25 95 38 95 60 C95 82 82 95 60 95 C38 95 25 82 25 60"
      stroke="currentColor" strokeWidth="2" fill="none" opacity="0.15"
    />
    <path
      d="M60 40 C74 40 80 46 80 60 C80 74 74 80 60 80 C46 80 40 74 40 60"
      stroke="currentColor" strokeWidth="2" fill="none" opacity="0.1"
    />
    <circle cx="60" cy="60" r="4" fill="currentColor" opacity="0.2" />
  </svg>
);

export const TapaStripe = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 800 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <pattern id="tapa-stripe" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
        {/* Tapa cloth zigzag */}
        <path d="M0 20 L10 5 L20 20 L30 5 L40 20" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3" />
        <path d="M0 30 L10 15 L20 30 L30 15 L40 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.15" />
      </pattern>
    </defs>
    <rect width="800" height="40" fill="url(#tapa-stripe)" />
  </svg>
);

export const ShieldMotif = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Traditional PNG war shield shape */}
    <path
      d="M40 5 C55 5 70 15 72 35 C74 55 65 80 40 95 C15 80 6 55 8 35 C10 15 25 5 40 5Z"
      stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15"
    />
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
