// Photo and video slots for the Nepal guide.
//  - While you run `npm run dev`, an empty slot shows a dashed box that tells you the exact file name to add.
//  - On the live site (production build), a slot whose file is missing simply disappears. Nothing looks broken.
import { useState } from 'react';
import { Camera, Film } from 'lucide-react';
import { VideoCard } from './PageKit';

const DEV = import.meta.env.DEV;
const FOLDER = '/blog/nepal/';

export type PhotoSpec = { file: string; alt: string; caption?: string; hint: string };

export function Photo({
  file, alt, caption, hint, ratio = 'aspect-[4/3]', pos, onZoom, className = '',
}: PhotoSpec & { ratio?: string; pos?: string; onZoom?: (src: string) => void; className?: string }) {
  const src = FOLDER + file;
  const [failed, setFailed] = useState(false);
  if (failed && !DEV) return null;

  return (
    <figure className={`glass-card rounded-2xl overflow-hidden ${className}`}>
      <div
        className={`relative ${ratio} overflow-hidden bg-[#eef2f6] ${failed ? '' : 'cursor-zoom-in'}`}
        onClick={() => { if (!failed && onZoom) onZoom(src); }}
      >
        {DEV && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 border-2 border-dashed border-[#ff6b5b]/40 bg-[#fff7f5]">
            <Camera className="w-6 h-6 text-[#ff6b5b] mb-1" />
            <p className="text-xs font-semibold text-[#1a1a2e]">Add photo</p>
            <p className="text-[0.65rem] font-mono text-[#64748b] break-all">public/blog/nepal/{file}</p>
            <p className="text-[0.7rem] text-[#64748b] mt-1 leading-snug max-w-[20rem]">{hint}</p>
          </div>
        )}
        {!failed && (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: pos }}
          />
        )}
      </div>
      {caption && !failed && <figcaption className="px-4 py-2 text-xs text-[#64748b]">{caption}</figcaption>}
    </figure>
  );
}

export type VideoSpec = { id: string; title: string; short?: boolean; hint: string };

export function VideoSlot({ id, title, short = false, hint }: VideoSpec) {
  if (id) return <VideoCard id={id} title={title} vertical={short} />;
  if (!DEV) return null;
  return (
    <div className={`glass-card rounded-2xl overflow-hidden ${short ? 'max-w-[320px] mx-auto w-full' : ''}`}>
      <div className={`flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-[#14b8a6]/50 bg-[#f0fdfa] ${short ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <Film className="w-6 h-6 text-[#14b8a6] mb-1" />
        <p className="text-xs font-semibold text-[#1a1a2e]">Add YouTube video</p>
        <p className="text-[0.65rem] font-mono text-[#64748b]">paste the ID in src/data/nepalGuide.ts</p>
        <p className="text-[0.7rem] text-[#64748b] mt-1 leading-snug max-w-[20rem]">{hint}</p>
      </div>
      <p className="p-3 text-sm font-medium text-[#1a1a2e]">{title}</p>
    </div>
  );
}
