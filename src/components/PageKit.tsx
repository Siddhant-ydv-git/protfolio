// Small building blocks shared by the long-form project pages (e.g. BiogasPage).
import { useEffect, useState } from 'react';
import { Play, X } from 'lucide-react';
import { useReveal, SectionLabel, SectionTitle, Divider } from './Shared';

export const display = { fontFamily: 'Space Grotesk, sans-serif' };

export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

export function Section({ id, label, title, children }: { id?: string; label: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-14 md:py-20 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
          <SectionTitle>{title}</SectionTitle>
          <Divider />
        </Reveal>
        {children}
      </div>
    </section>
  );
}

// Click-to-play YouTube card. `vertical` is for YouTube Shorts (9:16).
export function VideoCard({ id, title, vertical = false }: { id: string; title: string; vertical?: boolean }) {
  const [on, setOn] = useState(false);
  return (
    <div className={`glass-card rounded-2xl overflow-hidden ${vertical ? 'max-w-[320px] mx-auto w-full' : ''}`}>
      <div className={`relative bg-black ${vertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
        {on ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button onClick={() => setOn(true)} className="group absolute inset-0 w-full h-full" aria-label={`Play video: ${title}`}>
            <img src={`https://i.ytimg.com/vi/${id}/${vertical ? 'oar2' : 'hq'}default.jpg`} alt="" className="w-full h-full object-cover" loading="lazy"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`; }} />
            <span className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-[#ff6b5b] ml-1" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="p-4 text-sm font-medium text-[#1a1a2e]">{title}</p>
    </div>
  );
}

export function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [src, onClose]);
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-black/85 flex items-center justify-center p-4 cursor-zoom-out" onClick={onClose}>
      <button className="absolute top-4 right-4 text-white/90 hover:text-white" aria-label="Close"><X className="w-7 h-7" /></button>
      <img src={src} alt="" className="max-w-full max-h-full object-contain rounded-lg" />
    </div>
  );
}
