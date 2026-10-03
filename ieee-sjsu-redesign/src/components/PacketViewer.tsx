'use client';
import { useState } from 'react';
export function PacketViewer({ pages }: { pages: string[] }) {
  const [index,setIndex] = useState(0);
  return (
    <div className="packet-viewer">
      <div className="packet-frame"><img src={pages[index]} alt={`Sponsorship packet page ${index+1}`}/></div>
      <div className="packet-controls">
        <button onClick={() => setIndex(i => Math.max(0,i-1))} disabled={index===0}>←</button>
        <span>{index+1} / {pages.length}</span>
        <button onClick={() => setIndex(i => Math.min(pages.length-1,i+1))} disabled={index===pages.length-1}>→</button>
      </div>
    </div>
  );
}
