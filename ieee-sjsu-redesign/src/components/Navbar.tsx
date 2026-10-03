'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GlowingLogo } from './GlowingLogo';

const links = [
  ['/', 'Home'],
  ['/events', 'Events & Projects'],
  ['/membership', 'Membership'],
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn(); window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-trace" aria-hidden="true" />
      <div className="nav-inner">
        <Link href="/" className="nav-brand"><GlowingLogo compact /></Link>
        <nav className="nav-links" aria-label="Main navigation">
          {links.map(([href,label]) => {
            const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return <Link key={href} href={href} className={active ? 'active' : ''}>{label}</Link>
          })}
        </nav>
        <Link href="/membership" className="nav-cta">Join IEEE <span>↗</span></Link>
        <button className="menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(v => !v)}>
          <span/><span/><span/>
        </button>
      </div>
      {open && (
        <div className="mobile-menu">
          {links.map(([href,label]) => <Link key={href} href={href}>{label}</Link>)}
          <Link href="/membership" className="mobile-join">Join IEEE ↗</Link>
        </div>
      )}
    </header>
  );
}
