export type EventItem = {
  id: string;
  title: string;
  category: 'Workshop' | 'Industry' | 'Project' | 'Talk' | 'Networking';
  description: string;
  images: string[];
};

export const events: EventItem[] = [
  {
    id: 'altium-pcb',
    title: 'Altium PCB Design Workshop',
    category: 'Workshop',
    description: 'Hands-on PCB design activity with students working through board design workflows.',
    images: ['/Altium PCB Design Workshop.jpeg', '/Altium Design Workshop.jpg', '/Altium Desgin Workshop 2.jpg'],
  },
  {
    id: 'ecg-workshop',
    title: 'ECG Workshop',
    category: 'Project',
    description: 'A build-focused workshop sequence covering lecture, soldering, testing, and presentation.',
    images: ['/ECG Workshop Lecture.jpeg', '/ECG Workshop Soldering.jpeg', '/ECG Workshop Testing.jpg', '/ECG Presentation Event.jpeg', '/ECG Presentation Event(1).jpeg'],
  },
  {
    id: 'nuvoton',
    title: 'Nuvoton Workshop',
    category: 'Workshop',
    description: 'Technical workshop and hands-on engineering session with Nuvoton.',
    images: ['/Nuvoton Workshop.jpeg', '/Nuvoton Workshop 2.jpeg'],
  },
  {
    id: 'cognichip',
    title: 'Cognichip AI Hardware Hackathon',
    category: 'Project',
    description: 'AI hardware hackathon activity and award ceremony moments from the IEEE SJSU community.',
    images: ['/Cognichip_AI_Hardware_Hackathon.jpeg', '/Cognichip Award Ceremony.jpeg', '/Congichip Ceremony.jpeg', '/Congichip Ceremony(1).jpeg'],
  },
  {
    id: 'apple',
    title: 'Apple Speaker Event',
    category: 'Industry',
    description: 'Industry speaker event hosted for IEEE SJSU students.',
    images: ['/Apple Speaker Event.jpeg', '/Apple Speaker Event 2.jpeg'],
  },
  {
    id: 'tesla',
    title: 'Tesla Networking Event',
    category: 'Networking',
    description: 'Presentation, networking, and breakout discussion with students.',
    images: ['/Tesla Networking Event.jpg', '/Tesla Networking Event Presentation.jpg', '/Tesla Networking Breakout Event.jpg'],
  },
  {
    id: 'lockheed',
    title: 'Lockheed Martin Speaker & Insight Event',
    category: 'Industry',
    description: 'Industry insight and speaker programming for the IEEE SJSU community.',
    images: ['/Lockheed Martin Speaker.jpg', '/Lockheed Insight Event.jpg'],
  },
  {
    id: 'renesas',
    title: 'Renesas Event',
    category: 'Industry',
    description: 'Presentation and speaker session featuring Renesas, including student networking and a group photo.',
    images: ['/Renesas Presentation.jpeg', '/Renesas Presentation(1).jpeg', '/Renesas Speakers.jpeg', '/Renesas Selfie.jpeg'],
  },
  {
    id: 'quantum',
    title: 'Quantum Computing Session',
    category: 'Talk',
    description: 'IEEE SJSU information session and lecture focused on quantum computing and engineering.',
    images: ['/Quantum Computing Info Sesh.jpeg', '/Quantum Computing Lecture.jpeg', '/Quantum Computing Lecture(1).jpeg'],
  },
  {
    id: 'qspice',
    title: 'QSpice Introduction Presentation',
    category: 'Talk',
    description: 'Technical presentation introducing QSpice.',
    images: ['/QSpice Intro Presentation.jpg'],
  },
  {
    id: 'garage-talk',
    title: 'Garage Talk',
    category: 'Talk',
    description: 'Garage Talk event featuring industry speakers and professional conversation.',
    images: ['/Garage Talk.png'],
  },
  {
    id: 'astera',
    title: 'Astera Labs Networking Event',
    category: 'Industry',
    description: 'IEEE SJSU industry engagement with Astera Labs.',
    images: ['/astera_lab.jpg'],
  },
  {
    id: 'innovation-garage',
    title: 'Innovation Garage Community Events',
    category: 'Workshop',
    description: 'A collection of IEEE SJSU community, workshop, and project activity in the Innovation Garage.',
    images: ['/Innovation Garage Event.jpeg', '/Innovation Garage Event 2.jpeg', '/Innovation Garage Event 3.jpeg', '/Innovation Garage Event 3(1).jpeg'],
  },
];

export const chapterStats = [
  ['150+', 'Students'],
  ['350+', 'Discord'],
  ['850+', 'Instagram'],
  ['250+', 'LinkedIn'],
] as const;

export const majorDistribution = [
  ['Electrical Engineering', 108],
  ['Computer Engineering', 17],
  ['Computer Science', 8],
  ['Data Analysis', 6],
  ['Software Engineering', 5],
] as const;

export const classStanding = [
  ['Graduate (M.S.)', 52],
  ['4th Year (B.S.)', 45],
  ['3rd Year (B.S.)', 30],
  ['2nd Year (B.S.)', 14],
] as const;

export const partners = [
  'NVIDIA', 'Tesla', 'Texas Instruments', 'Amazon', 'City of San José', 'Apple',
  'STMicroelectronics', 'Lockheed Martin', 'Altium', 'Nuvoton', 'Cognichip',
  'Renesas', 'Cadence', 'Astera Labs', 'Microchip', 'Infineon', 'Bio-Rad',
  'Teradyne', 'Vishay', 'Qorvo',
];

export const sponsorshipTiers = [
  {
    name: 'Bronze',
    price: '$1,000',
    benefits: ['Logo Featured on Event Materials', 'Social Media Spotlight', 'Logo placement on IEEE Communications', 'Website Recognition', 'Inclusion in IEEE Student Newsletter', 'Networking Event'],
  },
  {
    name: 'Silver',
    price: '$2,000',
    benefits: ['Everything in Bronze', 'Host a Technical Event', 'Resume Book Access'],
  },
  {
    name: 'Gold',
    price: '$3,000',
    benefits: ['Everything in Silver', 'Host a Flagship Event'],
  },
];

export const sponsorshipPages = ['/1.jpeg', '/2.jpeg', '/3.png', '/4.jpeg', '/5.png'];
