import React from 'react';

const PATHS = [
  'M0 92 H150 L210 152 H390 L445 97 H610 L665 152 H820 L875 97 H1040 L1110 167 H1280',
  'M0 242 H115 L180 177 H330 L392 239 H565 L630 174 H820 L888 242 H1050 L1120 172 H1280',
  'M0 420 H165 L230 355 H405 L470 420 H690 L750 360 H930 L995 425 H1280',
  'M85 0 V96 L145 156 V305 L85 365 V560',
  'M1190 0 V120 L1125 185 V300 L1190 365 V560',
  'M310 0 V74 L365 129 V265 L310 320 V560',
  'M970 0 V82 L910 142 V285 L970 345 V560',
  'M525 0 V62 L585 122 V238 L525 298 V560',
  'M755 0 V70 L700 125 V248 L755 303 V560',
];

const NODES = [
  [150,92],[210,152],[445,97],[665,152],[875,97],[1110,167],
  [180,177],[392,239],[630,174],[888,242],[1120,172],
  [230,355],[470,420],[750,360],[995,425],
  [145,156],[85,365],[365,129],[310,320],[910,142],[970,345],[585,122],[525,298],[700,125],[755,303]
];

export function CircuitField({ className = '', intensity = 1 }: { className?: string; intensity?: number }) {
  return (
    <div className={`circuit-field ${className}`} aria-hidden="true" style={{ opacity: intensity }}>
      <svg viewBox="0 0 1280 560" preserveAspectRatio="none" role="presentation">
        <defs>
          <filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="traceMetal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#10233e"/><stop offset="0.5" stopColor="#1d4774"/><stop offset="1" stopColor="#10233e"/>
          </linearGradient>
        </defs>
        <g className="circuit-base">
          {PATHS.map((d,i) => <path key={`b-${i}`} d={d} pathLength="1" />)}
        </g>
        <g className="circuit-live" filter="url(#blueGlow)">
          {PATHS.map((d,i) => <path key={`l-${i}`} d={d} pathLength="1" style={{ animationDelay: `${-(i*1.37)}s`, animationDuration: `${6.2 + (i%4)*1.15}s` }} />)}
        </g>
        <g className="circuit-core">
          {PATHS.map((d,i) => <path key={`c-${i}`} d={d} pathLength="1" style={{ animationDelay: `${-(i*1.37)}s`, animationDuration: `${6.2 + (i%4)*1.15}s` }} />)}
        </g>
        <g className="circuit-nodes">
          {NODES.map(([cx,cy],i) => <circle key={i} cx={cx} cy={cy} r="3.2" style={{ animationDelay: `${-(i*0.43)}s` }} />)}
        </g>
      </svg>
    </div>
  );
}
