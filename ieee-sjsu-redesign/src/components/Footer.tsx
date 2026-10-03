import Link from 'next/link';
import { CircuitField } from './CircuitField';
import { GlowingLogo } from './GlowingLogo';

export function Footer() {
  return (
    <footer className="site-footer">
      <CircuitField intensity={0.34}/>
      <div className="footer-content">
        <div className="footer-brand">
          <GlowingLogo compact />
          <p>IEEE Student Branch<br/>San José State University</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <Link href="/">Home</Link><Link href="/events">Events & Projects</Link><Link href="/membership">Membership</Link>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <a href="mailto:ieee@sjsu.edu">ieee@sjsu.edu</a>
          <a href="https://discord.gg/VwPdYWSVPS" target="_blank" rel="noreferrer">Discord</a>
          <a href="https://instagram.com/ieee_sjsu" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://facebook.com/ieee.sjsu" target="_blank" rel="noreferrer">Facebook</a>
        </div>
        <div className="footer-column">
          <h3>Find Us</h3>
          <p>ENGR 376<br/>One Washington Square<br/>San José, CA 95192</p>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} IEEE SJSU Student Branch — All Rights Reserved</div>
    </footer>
  );
}
