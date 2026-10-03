const CALENDAR_SRC = 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FLos_Angeles&showPrint=0&title=IEEE%20Club%20Events&src=Y182MGQ0NzFjMTE0NTYyN2U3Njc5OGMzN2M4ZDQzOTkyZGRhZGE1MGM5MGRkNzFkYjRkNTgwZWY1MDM2NmY2YTBhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%232563EB';
export const CALENDAR_URL = 'https://calendar.google.com/calendar/u/0?cid=Y182MGQ0NzFjMTE0NTYyN2U3Njc5OGMzN2M4ZDQzOTkyZGRhZGE1MGM5MGRkNzFkYjRkNTgwZWY1MDM2NmY2YTBhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20';
export function GoogleCalendar() {
  return (
    <div className="calendar-shell">
      <div className="calendar-energy" aria-hidden="true"/>
      <iframe src={CALENDAR_SRC} title="IEEE SJSU Events Calendar" loading="lazy"/>
      <a href={CALENDAR_URL} target="_blank" rel="noreferrer" className="calendar-link">Open full calendar ↗</a>
    </div>
  );
}
