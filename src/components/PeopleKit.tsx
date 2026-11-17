// Small image-based people and organisation cards (used on the ANVESAK page).
// If an image file is missing, a clean initials badge is shown instead, so nothing ever looks broken.
import { useState } from 'react';
import { ExternalLink, GraduationCap } from 'lucide-react';

const display = { fontFamily: 'Space Grotesk, sans-serif' };
const initials = (name: string) =>
  name.replace(/\b(Assoc|Asst|Prof|Dr|Er|Mr|Ms)\.?\s*/gi, '').split(/[\s,]+/).filter((w) => /^[A-Za-z]/.test(w)).slice(0, 2).map((n) => n[0]).join('').toUpperCase();

export type Person = { name: string; role: string; image?: string; url?: string; scholar?: string };
export type Org = { name: string; role: string; logo?: string; url?: string };

export function Avatar({ name, image, size = 56 }: { name: string; image?: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  const box = { width: size, height: size };
  if (!image || failed) {
    return (
      <div style={box} className="flex-shrink-0 rounded-full bg-gradient-to-br from-[#ff6b5b]/30 to-[#14b8a6]/30 border border-white shadow-sm flex items-center justify-center gradient-text font-semibold text-sm">
        <span style={display}>{initials(name)}</span>
      </div>
    );
  }
  return <img src={image} alt={name} style={box} loading="lazy" onError={() => setFailed(true)} className="flex-shrink-0 rounded-full object-cover border-2 border-white shadow" />;
}

export function PersonCard({ p }: { p: Person }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl glass-card h-full">
      <Avatar name={p.name} image={p.image} />
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#1a1a2e] leading-snug">
          {p.url ? (
            <a href={p.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#ff6b5b] hover:underline">
              {p.name}<ExternalLink className="inline w-3 h-3 ml-1 -mt-0.5 opacity-60" />
            </a>
          ) : p.name}
        </p>
        <p className="text-xs text-[#64748b] leading-snug mt-0.5">{p.role}</p>
        {p.scholar && (
          <a href={p.scholar} target="_blank" rel="noopener noreferrer" className="mt-1.5 inline-flex items-center gap-1 text-xs font-medium text-[#ff6b5b] hover:underline">
            <GraduationCap className="w-3.5 h-3.5" /> Google Scholar
          </a>
        )}
      </div>
    </div>
  );
}

export function TeamChip({ p }: { p: Person }) {
  return (
    <div className="flex items-center gap-3 p-2.5 pr-4 rounded-xl glass-card">
      <Avatar name={p.name} image={p.image} size={44} />
      <div>
        <p className="text-sm font-medium text-[#1a1a2e] leading-tight">{p.name}</p>
        {p.role && <p className="text-[0.7rem] text-[#64748b]">{p.role}</p>}
      </div>
    </div>
  );
}

export function OrgCard({ o }: { o: Org }) {
  const [failed, setFailed] = useState(false);
  const inner = (
    <div className="flex items-center gap-3 p-3 rounded-xl glass-card h-full">
      <div className="w-14 h-14 flex-shrink-0 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center overflow-hidden p-1.5">
        {o.logo && !failed ? (
          <img src={o.logo} alt={`${o.name} logo`} loading="lazy" onError={() => setFailed(true)} className="max-w-full max-h-full object-contain" />
        ) : (
          <span className="text-xs font-bold gradient-text text-center leading-tight" style={display}>{initials(o.name)}</span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#1a1a2e] leading-snug">{o.name}</p>
        <p className="text-xs text-[#64748b] leading-snug mt-0.5">{o.role}</p>
      </div>
    </div>
  );
  return o.url ? <a href={o.url} target="_blank" rel="noopener noreferrer" className="block h-full hover:-translate-y-0.5 transition-transform">{inner}</a> : inner;
}
