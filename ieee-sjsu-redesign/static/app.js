(() => {
  const paths = [
    'M0 92 H150 L210 152 H390 L445 97 H610 L665 152 H820 L875 97 H1040 L1110 167 H1280',
    'M0 242 H115 L180 177 H330 L392 239 H565 L630 174 H820 L888 242 H1050 L1120 172 H1280',
    'M0 420 H165 L230 355 H405 L470 420 H690 L750 360 H930 L995 425 H1280',
    'M85 0 V96 L145 156 V305 L85 365 V560','M1190 0 V120 L1125 185 V300 L1190 365 V560',
    'M310 0 V74 L365 129 V265 L310 320 V560','M970 0 V82 L910 142 V285 L970 345 V560',
    'M525 0 V62 L585 122 V238 L525 298 V560','M755 0 V70 L700 125 V248 L755 303 V560'
  ];
  const nodes=[[150,92],[210,152],[445,97],[665,152],[875,97],[1110,167],[180,177],[392,239],[630,174],[888,242],[1120,172],[230,355],[470,420],[750,360],[995,425],[145,156],[85,365],[365,129],[310,320],[910,142],[970,345],[585,122],[525,298],[700,125],[755,303]];
  const circuitHTML = () => `<div class="circuit-field"><svg viewBox="0 0 1280 560" preserveAspectRatio="none"><defs><filter id="blueGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter><linearGradient id="traceMetal" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#10233e"/><stop offset=".5" stop-color="#1d4774"/><stop offset="1" stop-color="#10233e"/></linearGradient></defs><g class="circuit-base">${paths.map(d=>`<path d="${d}" pathLength="1"/>`).join('')}</g><g class="circuit-live" filter="url(#blueGlow)">${paths.map((d,i)=>`<path d="${d}" pathLength="1" style="animation-delay:-${(i*1.37).toFixed(2)}s;animation-duration:${6.2+(i%4)*1.15}s"/>`).join('')}</g><g class="circuit-core">${paths.map((d,i)=>`<path d="${d}" pathLength="1" style="animation-delay:-${(i*1.37).toFixed(2)}s;animation-duration:${6.2+(i%4)*1.15}s"/>`).join('')}</g><g class="circuit-nodes">${nodes.map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="3.2" style="animation-delay:-${(i*.43).toFixed(2)}s"/>`).join('')}</g></svg></div>`;
  document.querySelectorAll('.circuit-slot').forEach(el => { el.innerHTML = circuitHTML(); });
  const io = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target);} }), {threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  const nav=document.querySelector('.site-nav'); const onScroll=()=>nav?.classList.toggle('scrolled',scrollY>24); onScroll(); addEventListener('scroll',onScroll,{passive:true});
  const menu=document.querySelector('.menu-button'), mobile=document.querySelector('.mobile-menu'); if(menu&&mobile) menu.addEventListener('click',()=>mobile.classList.toggle('open'));
  document.querySelectorAll('[data-gallery]').forEach(g => {
    const imgs=[...g.querySelectorAll('img')]; if(imgs.length<2)return; let i=0; const dots=g.querySelector('.gallery-dots');
    imgs.forEach((_,n)=>{const b=document.createElement('button'); b.setAttribute('aria-label',`Show photo ${n+1}`); if(!n)b.className='active'; b.addEventListener('click',()=>show(n)); dots?.appendChild(b)});
    const show=n=>{i=n;imgs.forEach((im,j)=>im.classList.toggle('active',j===i));dots?.querySelectorAll('button').forEach((b,j)=>b.classList.toggle('active',j===i));};
    setInterval(()=>show((i+1)%imgs.length),4200);
  });
  document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{const cat=btn.dataset.filter;document.querySelectorAll('[data-filter]').forEach(b=>b.classList.toggle('active',b===btn));document.querySelectorAll('[data-event-card]').forEach(card=>card.style.display=(cat==='All'||card.dataset.cat===cat)?'block':'none');}));
  const packet=document.querySelector('[data-packet]'); if(packet){const pages=JSON.parse(packet.dataset.pages||'[]'),img=packet.querySelector('img'),label=packet.querySelector('[data-packet-label]');let i=0;const render=()=>{img.src=pages[i];label.textContent=`${i+1} / ${pages.length}`;packet.querySelector('[data-prev]').disabled=i===0;packet.querySelector('[data-next]').disabled=i===pages.length-1};packet.querySelector('[data-prev]').onclick=()=>{i=Math.max(0,i-1);render()};packet.querySelector('[data-next]').onclick=()=>{i=Math.min(pages.length-1,i+1);render()};render();}
})();
