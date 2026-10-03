'use client';
import { useMemo, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CircuitField } from '@/components/CircuitField';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { EventGallery } from '@/components/EventGallery';
import { GoogleCalendar } from '@/components/GoogleCalendar';
import { events } from '@/lib/data';

const tabs = ['All','Workshop','Industry','Project','Talk','Networking'] as const;
type Tab = typeof tabs[number];

export default function EventsPage() {
  const [tab,setTab] = useState<Tab>('All');
  const visible = useMemo(() => tab === 'All' ? events : events.filter(e => e.category === tab), [tab]);
  return (
    <main className="site-shell">
      <Navbar />
      <section className="page-hero event-hero">
        <CircuitField intensity={0.85}/>
        <div className="page-hero-image"><img src="/Cognichip_AI_Hardware_Hackathon.jpeg" alt="AI Hardware Hackathon"/></div>
        <div className="page-hero-shade"/>
        <div className="page-hero-content">
          <p className="hero-kicker">IEEE SJSU · EVENTS & PROJECTS</p>
          <h1>Where ideas become <span>hardware.</span></h1>
          <p>Technical workshops, industry speakers, networking, hardware builds, and community — all in one place.</p>
        </div>
      </section>

      <section className="content-section dark-board featured-events">
        <CircuitField intensity={0.42}/>
        <div className="content-wrap">
          <Reveal><SectionHeading eyebrow="Featured" title="Build, test, iterate." text="A selection of hands-on IEEE SJSU activities from PCB design to ECG testing and AI hardware."/></Reveal>
          <div className="featured-flow">
            {events.slice(0,4).map((e,i) => (
              <Reveal key={e.id} className={`featured-row ${i%2 ? 'reverse':''}`}>
                <div className="featured-index"><span>{String(i+1).padStart(2,'0')}</span><i/></div>
                <div className="featured-copy"><span>{e.category}</span><h3>{e.title}</h3><p>{e.description}</p></div>
                <EventGallery images={e.images} title={e.title}/>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section event-archive">
        <CircuitField intensity={0.22}/>
        <div className="content-wrap">
          <Reveal><SectionHeading eyebrow="Archive" title="Everything we've hosted." text="Browse the event, project, workshop, speaker, and networking photo archive."/></Reveal>
          <div className="filter-tabs" role="tablist" aria-label="Event category filter">
            {tabs.map(t => <button key={t} role="tab" aria-selected={tab===t} className={tab===t?'active':''} onClick={() => setTab(t)}>{t}</button>)}
          </div>
          <div className="event-grid">
            {visible.map(e => (
              <Reveal key={e.id} className="event-card">
                <EventGallery images={e.images} title={e.title}/>
                <div className="event-card-copy"><span>{e.category}</span><h3>{e.title}</h3><p>{e.description}</p><small>{e.images.length} photo{e.images.length===1?'':'s'}</small></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section dark-board calendar-section">
        <CircuitField intensity={0.32}/>
        <div className="content-wrap">
          <Reveal><SectionHeading eyebrow="Upcoming" title="Our Calendar" text="Check the live IEEE SJSU calendar for upcoming meetings, workshops, and events."/></Reveal>
          <Reveal><GoogleCalendar/></Reveal>
        </div>
      </section>

      <section className="content-section stay-connected">
        <CircuitField intensity={0.22}/>
        <div className="content-wrap connect-row">
          <Reveal><SectionHeading eyebrow="Stay Connected" title="Join the community." text="Announcements, reminders, event recaps, and community updates are shared through our channels. Events are held at ENGR 376 unless otherwise noted."/></Reveal>
          <Reveal><a href="https://discord.gg/VwPdYWSVPS" target="_blank" rel="noreferrer" className="electric-button">Join Discord <span>↗</span></a></Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}
