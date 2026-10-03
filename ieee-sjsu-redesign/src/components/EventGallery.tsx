'use client';
import { useEffect, useState } from 'react';

export function EventGallery({ images, title }: { images: string[]; title: string }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (images.length < 2) return;
    const id = window.setInterval(() => setIndex(i => (i + 1) % images.length), 4200);
    return () => window.clearInterval(id);
  }, [images.length]);
  return (
    <div className="event-gallery">
      <div className="photo-circuit-corner" aria-hidden="true" />
      {images.map((src,i) => <img key={src} src={src} alt={`${title} photo ${i+1}`} className={i === index ? 'active' : ''}/>) }
      {images.length > 1 && <div className="gallery-dots">{images.map((_,i) => <button key={i} aria-label={`Show photo ${i+1}`} onClick={() => setIndex(i)} className={i === index ? 'active' : ''}/>)}</div>}
    </div>
  );
}
