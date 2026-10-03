export function GlowingLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`glowing-logo ${compact ? 'compact' : ''}`} aria-label="IEEE SJSU">
      <div className="logo-aura" aria-hidden="true" />
      <img src="/ieee-mb.png" alt="IEEE" className="logo-base" />
      <div className="logo-energy" aria-hidden="true" />
      {!compact && (
        <div className="logo-sjsu-copy">
          <span>SAN JOSÉ STATE UNIVERSITY</span>
          <strong>STUDENT BRANCH</strong>
        </div>
      )}
    </div>
  );
}
