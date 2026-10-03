import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CircuitField } from '@/components/CircuitField';
import { GlowingLogo } from '@/components/GlowingLogo';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { GoogleCalendar } from '@/components/GoogleCalendar';
import { PacketViewer } from '@/components/PacketViewer';
import { chapterStats, partners, sponsorshipPages, sponsorshipTiers } from '@/lib/data';

const opportunities = ['Tech Talks','Live Demos','Lunch & Learns','Technical Workshops','Conferences','Hackathons','Networking Events','Capstone Projects'];

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="hero-section">
        <CircuitField className="hero-circuits" intensity={0.95}/>
        <div className="hero-chip" aria-hidden="true">
          <span className="chip-pin pin-a"/><span className="chip-pin pin-b"/><span className="chip-pin pin-c"/><span className="chip-pin pin-d"/>
        </div>
        <div className="hero-vignette" aria-hidden="true"/>
        <div className="hero-content">
          <p className="hero-kicker">INSTITUTE OF ELECTRICAL AND ELECTRONICS ENGINEERS</p>
          <GlowingLogo />
          <h1>IEEE <span>AT SJSU</span></h1>
          <p className="hero-subtitle">People <b>×</b> Ideas <b>×</b> Technology <b>×</b> Impact</p>
          <div className="hero-actions">
            <Link href="/events" className="electric-button">Explore Events <span>↗</span></Link>
            <Link href="/membership" className="line-button">Become a Member</Link>
          </div>
          <a href="#about" className="scroll-cue"><span/>Scroll to explore</a>
        </div>
      </section>

      <section id="about" className="content-section dark-board about-section">
        <CircuitField intensity={0.52}/>
        <div className="content-wrap two-column">
          <Reveal>
            <SectionHeading eyebrow="IEEE SJSU" title="Engineering happens here." />
            <div className="rich-copy">
              <p>The IEEE Student Branch at San José State University brings together some of Silicon Valley’s most promising emerging engineers, technologists, and innovators from across the region.</p>
              <p>Through technical projects, professional development, and industry engagement, IEEE empowers students to develop the skills and experiences needed to succeed in a rapidly evolving technology landscape. Our members represent the next generation of talent driving Silicon Valley and beyond.</p>
              <p>We run hands-on workshops covering PCB design, embedded systems, and digital logic, host speaker sessions and networking nights, and build real hardware projects. Membership is open to SJSU students across majors.</p>
            </div>
            <div className="stat-row">
              {chapterStats.map(([n,l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
            </div>
          </Reveal>
          <Reveal className="photo-stack-wrap">
            <div className="photo-stack">
              <img src="/Innovation Garage Event 3.jpeg" alt="IEEE SJSU students collaborating in the Innovation Garage" className="photo-main"/>
              <img src="/ECG Workshop Testing.jpg" alt="IEEE SJSU ECG workshop testing" className="photo-float"/>
              <div className="photo-trace" aria-hidden="true"><i/><i/><i/></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="content-section transition-board">
        <CircuitField intensity={0.38}/>
        <div className="content-wrap">
          <Reveal><SectionHeading eyebrow="What We Do" title="Build. Learn. Connect." text="Our programming spans hands-on engineering, industry engagement, professional development, and community." align="center"/></Reveal>
          <div className="opportunity-grid">
            {opportunities.map((item,i) => <Reveal key={item} className="opportunity-card"><span className="op-num">{String(i+1).padStart(2,'0')}</span><h3>{item}</h3><span className="op-line"/></Reveal>)}
          </div>
          <div className="gateway-grid">
            <Link href="/events" className="gateway-card events-gateway">
              <img src="/Altium PCB Design Workshop.jpeg" alt="Altium PCB design workshop"/>
              <div><span>Explore our</span><h3>Events & Projects</h3><b>See everything ↗</b></div>
            </Link>
            <Link href="/membership" className="gateway-card member-gateway">
              <img src="/Renesas Selfie.jpeg" alt="IEEE SJSU community"/>
              <div><span>Become a</span><h3>Member</h3><b>Join IEEE ↗</b></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="content-section dark-board calendar-section">
        <CircuitField intensity={0.34}/>
        <div className="content-wrap">
          <Reveal><SectionHeading eyebrow="Upcoming" title="Our Calendar" text="Plan ahead, see upcoming club activity, and open the full calendar whenever you need it."/></Reveal>
          <Reveal><GoogleCalendar /></Reveal>
        </div>
      </section>

      <section className="content-section sponsor-section">
        <CircuitField intensity={0.3}/>
        <div className="content-wrap">
          <div className="two-column sponsor-intro">
            <Reveal>
              <SectionHeading eyebrow="Industry Partnership" title="Sponsor IEEE SJSU" text="Support SJSU engineering students while connecting your organization directly with emerging technical talent."/>
              <div className="sponsor-actions">
                <a href="mailto:ieee@sjsu.edu" className="electric-button">Contact IEEE <span>↗</span></a>
                <a href="/sponsorship-packet.pdf" className="line-button" target="_blank" rel="noreferrer">Open Sponsorship Packet</a>
              </div>
              <p className="foundation-note">Donations supporting IEEE SJSU are tax-deductible when designated through The Tower Foundation of San José State University, a registered 501(c)(3) nonprofit organization.</p>
            </Reveal>
            <Reveal><PacketViewer pages={sponsorshipPages}/></Reveal>
          </div>

          <Reveal><SectionHeading eyebrow="Sponsorship Packages" title="Choose how you engage." /></Reveal>
          <div className="tier-grid">
            {sponsorshipTiers.map(tier => <Reveal key={tier.name} className={`tier-card tier-${tier.name.toLowerCase()}`}><span className="tier-name">{tier.name}</span><strong>{tier.price}</strong><ul>{tier.benefits.map(b => <li key={b}>✓ {b}</li>)}</ul></Reveal>)}
          </div>

          <Reveal>
            <div className="partner-heading"><span>Past partners</span><h3>Connected to industry.</h3></div>
            <div className="partner-grid">{partners.map(p => <div key={p}>{p}</div>)}</div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
