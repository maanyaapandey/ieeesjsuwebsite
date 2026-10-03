import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CircuitField } from '@/components/CircuitField';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { chapterStats, classStanding, majorDistribution } from '@/lib/data';

const SIGNUP_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScWnWYaIF0Hpwuz_6_ZdB69o8bjAmCd9Y_l5xrclvjXCpgm8g/viewform';
const benefits = [
  'Full access to events, workshops, tech talks, and live demos',
  'Lunch & learns, hackathons, and networking events with industry partners',
  'Opportunities to work on capstone and technical projects',
  'Lab access at ENGR 376',
  'Snack Bar access at ENGR 376',
  'Professional development resources',
];

export default function MembershipPage() {
  const maxMajor = Math.max(...majorDistribution.map(([,count]) => count));
  return (
    <main className="site-shell">
      <Navbar />
      <section className="page-hero member-hero">
        <CircuitField intensity={0.78}/>
        <div className="page-hero-image"><img src="/Renesas Selfie.jpeg" alt="IEEE SJSU community"/></div>
        <div className="page-hero-shade"/>
        <div className="page-hero-content">
          <p className="hero-kicker">IEEE SJSU · MEMBERSHIP</p>
          <h1>Find your place in the <span>circuit.</span></h1>
          <p>Join a community that builds, learns, networks, and grows together.</p>
          <a href={SIGNUP_FORM_URL} target="_blank" rel="noreferrer" className="electric-button">Sign Up Now <span>↗</span></a>
        </div>
      </section>

      <section className="content-section dark-board membership-intro">
        <CircuitField intensity={0.35}/>
        <div className="content-wrap">
          <Reveal><SectionHeading eyebrow="How to Join" title="Become an official member." text="Membership gives you direct access to IEEE SJSU programming, technical community, and professional development opportunities." align="center"/></Reveal>
          <div className="tier-grid membership-tiers">
            <Reveal className="tier-card membership-tier"><span className="tier-name">Paid Membership</span><strong>$20 / Semester</strong><em>or $30 / Year</em><ul><li>✓ Priority access to all workshops/events</li><li>✓ Exclusive resources and discounts</li></ul></Reveal>
            <Reveal className="tier-card membership-tier"><span className="tier-name">General Membership</span><strong>$5 / Workshop</strong><em>Pay-as-you-go</em><ul><li>✓ Subject to availability</li><li>✓ Flexible participation</li></ul></Reveal>
          </div>
        </div>
      </section>

      <section className="content-section membership-stats">
        <CircuitField intensity={0.2}/>
        <div className="content-wrap">
          <Reveal><SectionHeading eyebrow="Our Chapter" title="150+ members and growing." text="A multidisciplinary student community with strong electrical and computer engineering representation."/></Reveal>
          <div className="stat-row big-stats">{chapterStats.map(([n,l]) => <Reveal key={l}><div><strong>{n}</strong><span>{l}</span></div></Reveal>)}</div>
          <div className="membership-data-grid">
            <Reveal className="data-panel">
              <h3>Major Distribution</h3>
              <div className="bar-chart">
                {majorDistribution.map(([name,count]) => <div className="bar-row" key={name}><span>{name}</span><div><i style={{width:`${(count/maxMajor)*100}%`}}/></div><b>{count}</b></div>)}
              </div>
            </Reveal>
            <Reveal className="data-panel">
              <h3>Class Standing</h3>
              <div className="standing-list">{classStanding.map(([name,count]) => <div key={name}><span>{name}</span><b>{count}</b></div>)}</div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="content-section dark-board benefits-section">
        <CircuitField intensity={0.42}/>
        <div className="content-wrap two-column">
          <Reveal>
            <SectionHeading eyebrow="Member Benefits" title="More access. More opportunities."/>
            <ul className="benefit-list">{benefits.map((b,i)=><li key={b}><span>{String(i+1).padStart(2,'0')}</span>{b}</li>)}</ul>
          </Reveal>
          <Reveal className="lab-panel">
            <img src="/Innovation Garage Event 2.jpeg" alt="Students working in the IEEE SJSU Innovation Garage"/>
            <div className="lab-copy"><span>ENGR 376</span><h3>Lab Access Hours</h3><dl><div><dt>Monday – Friday</dt><dd>7:00 AM – 10:30 PM</dd></div><div><dt>Saturday</dt><dd>8:00 AM – 7:00 PM</dd></div><div><dt>Sunday</dt><dd>Closed</dd></div></dl></div>
          </Reveal>
        </div>
      </section>

      <section className="content-section membership-cta">
        <CircuitField intensity={0.25}/>
        <div className="content-wrap cta-center">
          <Reveal><SectionHeading eyebrow="Ready?" title="Power up your IEEE experience." text="Join IEEE SJSU, connect with the community, and start building with us." align="center"/>
          <div className="hero-actions"><a href={SIGNUP_FORM_URL} target="_blank" rel="noreferrer" className="electric-button">Join IEEE <span>↗</span></a><a href="mailto:ieee@sjsu.edu" className="line-button">Email ieee@sjsu.edu</a><a href="https://discord.gg/VwPdYWSVPS" target="_blank" rel="noreferrer" className="line-button">Join Discord</a></div></Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
