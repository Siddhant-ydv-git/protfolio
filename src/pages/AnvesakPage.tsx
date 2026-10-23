import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Play, X } from 'lucide-react';
import { VideoCard } from '../components/PageKit';
import { useReveal, SectionLabel, SectionTitle, Divider, Tag } from '../components/Shared';
import { anvesak as A } from '../data/anvesak';

const display = { fontFamily: 'Space Grotesk, sans-serif' };

/* ───────────── small helpers ───────────── */

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}

function Section({ id, label, title, children }: { id?: string; label: string; title: string; children: React.ReactNode }) {
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

/* ───────────── animated USV scene ───────────── */

// Seabed profile (illustrative). Rises to the banks at both ends.
function bedY(x: number) {
  const base = 252 + 26 * Math.sin(x / 95) + 15 * Math.sin(x / 41 + 1.3);
  const edge = Math.min(1, Math.min(x, 800 - x) / 90);
  return 148 + (base - 148) * edge;
}
const STEP = 8;
const pts: [number, number][] = [];
for (let x = 0; x <= 800; x += STEP) pts.push([x, Math.round(bedY(x) * 10) / 10]);
const bedPath = 'M' + pts.map(([x, y]) => `${x},${y}`).join(' L');
const waterPoly = 'M0,140 L800,140 ' + [...pts].reverse().map(([x, y]) => `L${x},${y}`).join(' ') + ' Z';

function UsvScene() {
  const sonar = useRef<SVGGElement>(null);
  const hull = useRef<SVGGElement>(null);
  const mapClip = useRef<SVGRectElement>(null);
  const depthEl = useRef<HTMLSpanElement>(null);
  const pointsEl = useRef<HTMLSpanElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = (p: number, sec: number) => {
      const x = 60 + p * 680;
      const bob = Math.sin(sec * 2.6) * 1.6;
      const tilt = Math.sin(sec * 1.7) * 1.2;
      const tf = `translate(${x} ${140 + bob}) rotate(${tilt})`;
      sonar.current?.setAttribute('transform', tf);
      hull.current?.setAttribute('transform', tf);
      mapClip.current?.setAttribute('width', String(x));
      if (depthEl.current) depthEl.current.textContent = ((bedY(x) - 140) / 9).toFixed(1) + ' m';
      if (pointsEl.current) pointsEl.current.textContent = Math.round(p * 12330).toLocaleString();
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      render(0.62, 0);
      return;
    }

    const RUN = 13000, HOLD = 1800;
    let raf = 0;
    let t0 = performance.now();
    let running = false;
    const frame = (now: number) => {
      const t = (now - t0) % (RUN + HOLD);
      render(Math.min(1, t / RUN), now / 1000);
      raf = requestAnimationFrame(frame);
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) { running = true; t0 = performance.now(); raf = requestAnimationFrame(frame); }
      if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
    });
    if (wrap.current) io.observe(wrap.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div ref={wrap} className="relative rounded-2xl overflow-hidden glass-card">
      <div className="flex gap-2 p-3 pb-0 sm:p-0 sm:absolute sm:left-4 sm:top-4 sm:z-10 text-[#1a1a2e]">
        <div className="rounded-lg bg-white/80 backdrop-blur px-3 py-1.5 shadow-sm">
          <div className="text-[0.6rem] uppercase tracking-wider text-[#64748b]">Depth</div>
          <span ref={depthEl} className="text-sm sm:text-base font-semibold" style={display}>0.0 m</span>
        </div>
        <div className="rounded-lg bg-white/80 backdrop-blur px-3 py-1.5 shadow-sm">
          <div className="text-[0.6rem] uppercase tracking-wider text-[#64748b]">Points logged</div>
          <span ref={pointsEl} className="text-sm sm:text-base font-semibold" style={display}>0</span>
        </div>
      </div>
      <svg viewBox="0 0 800 360" className="w-full h-auto block" role="img" aria-label="Animation of the ANVESAK vessel scanning the riverbed with sonar and the banks with LiDAR">
        <defs>
          <linearGradient id="av-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7dd3fc" stopOpacity="0.55" />
            <stop offset="1" stopColor="#0e7490" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="av-cone" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#14b8a6" stopOpacity="0.55" />
            <stop offset="1" stopColor="#14b8a6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="av-land" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#86efac" stopOpacity="0.8" />
            <stop offset="1" stopColor="#4ade80" stopOpacity="0.5" />
          </linearGradient>
          <clipPath id="av-water-clip"><path d={waterPoly} /></clipPath>
          <clipPath id="av-map-clip"><rect ref={mapClip} x="0" y="0" width="0" height="360" /></clipPath>
        </defs>

        {/* banks */}
        <path d="M0,142 L0,86 Q30,66 62,92 T118,142 Z" fill="url(#av-land)" />
        <path d="M800,142 L800,80 Q770,58 738,88 T684,142 Z" fill="url(#av-land)" />

        {/* water + seabed */}
        <path d={waterPoly} fill="url(#av-water)" />
        <path d={bedPath} fill="none" stroke="#0f172a" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="4 6" />
        <path d={bedPath} fill="none" stroke="#ff6b5b" strokeWidth="3.5" strokeLinecap="round" clipPath="url(#av-map-clip)" />

        {/* waves */}
        <g className="av-wave">
          <path d="M-100,140 q25,-7 50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0 t50,0" fill="none" stroke="#fff" strokeOpacity="0.85" strokeWidth="2" />
        </g>

        {/* sonar (clipped to water, follows the boat) */}
        <g clipPath="url(#av-water-clip)">
          <g ref={sonar}>
            <polygon points="0,16 -46,230 46,230" fill="url(#av-cone)" />
            {[0, 0.8, 1.6].map((d) => (
              <circle key={d} cx="0" cy="16" r="150" className="av-ring" style={{ animationDelay: `${d}s` }} />
            ))}
          </g>
        </g>

        {/* the boat itself (separate group so it is not clipped) */}
        <g ref={hull} transform="translate(60 140)"><BoatBody /></g>
      </svg>

      <p className="absolute right-3 bottom-2 text-[0.6rem] text-[#0f172a]/50">Illustrative animation</p>
    </div>
  );
}

// Side view of the vessel, drawn around the waterline origin (0,0).
function BoatBody() {
  const rays: { x: number; y: number }[] = [];
  [-26, -12, 2, 16].forEach((a) => {
    [-1, 1].forEach((dir) => {
      rays.push({ x: dir * Math.cos((a * Math.PI) / 180) * 120, y: -54 + Math.sin((a * Math.PI) / 180) * 120 });
    });
  });
  return (
    <>
      {/* LiDAR rays */}
      {rays.map((r, i) => (
        <line key={i} x1="0" y1="-54" x2={r.x} y2={r.y} className="av-lidar" style={{ animationDelay: `${(i % 4) * 0.12}s` }} />
      ))}
      {/* hull: yellow pontoon, red nose and tail */}
      <rect x="-54" y="-9" width="100" height="18" rx="9" fill="#facc15" stroke="#a16207" strokeWidth="1" />
      <path d="M40,-9 Q74,-3 74,1 Q74,6 40,9 Z" fill="#dc2626" />
      <rect x="-60" y="-9" width="14" height="18" rx="7" fill="#dc2626" />
      {/* frame + electronics box */}
      <line x1="-22" y1="-9" x2="-22" y2="-28" stroke="#1a1a2e" strokeWidth="3" />
      <line x1="22" y1="-9" x2="22" y2="-28" stroke="#1a1a2e" strokeWidth="3" />
      <line x1="-30" y1="-28" x2="30" y2="-28" stroke="#1a1a2e" strokeWidth="3" strokeLinecap="round" />
      <rect x="-15" y="-42" width="30" height="14" rx="3" fill="#f8fafc" stroke="#94a3b8" />
      {/* LiDAR head + flag */}
      <line x1="0" y1="-42" x2="0" y2="-48" stroke="#1a1a2e" strokeWidth="3" />
      <rect x="-6" y="-60" width="12" height="13" rx="3" fill="#1a1a2e" />
      <line x1="-46" y1="-9" x2="-46" y2="-52" stroke="#64748b" strokeWidth="2" />
      <path d="M-46,-52 L-28,-42 L-38,-42 L-26,-30 L-46,-30 Z" fill="#dc143c" stroke="#1e3a8a" strokeWidth="1.5" />
      {/* sonar transducer */}
      <rect x="-5" y="9" width="10" height="7" rx="2" fill="#1a1a2e" />
    </>
  );
}

/* ───────────── lightbox ───────────── */

function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
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

/* ───────────── page ───────────── */

export default function AnvesakPage() {
  const [site, setSite] = useState(A.sites[0].id);
  const [zoom, setZoom] = useState<string | null>(null);
  const current = A.sites.find((s) => s.id === site) ?? A.sites[0];

  return (
    <div>
      <style>{`
        .av-wave { animation: av-wave 5s linear infinite; }
        @keyframes av-wave { from { transform: translateX(0); } to { transform: translateX(100px); } }
        .av-ring { fill: none; stroke: #14b8a6; stroke-width: 2; vector-effect: non-scaling-stroke;
          transform-box: fill-box; transform-origin: center; animation: av-ring 2.4s ease-out infinite; opacity: 0; }
        @keyframes av-ring { 0% { transform: scale(0.03); opacity: 0.9; } 100% { transform: scale(1); opacity: 0; } }
        .av-lidar { stroke: #ff6b5b; stroke-width: 1.5; stroke-dasharray: 5 6; opacity: 0.7; animation: av-lidar 1.1s linear infinite; }
        @keyframes av-lidar { to { stroke-dashoffset: -22; } }
        @media (prefers-reduced-motion: reduce) { .av-wave, .av-ring, .av-lidar { animation: none; } .av-ring { opacity: 0.4; transform: scale(0.5); } }
      `}</style>

      {/* ── Hero ── */}
      <section className="pt-24 md:pt-28 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#ff6b5b] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-4">
              {['USV / Robotics', 'SONAR', 'LiDAR', 'Bathymetry', 'Final Year Project'].map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a2e] mb-4" style={display}>
              <span className="gradient-text">{A.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#64748b] max-w-3xl leading-relaxed mb-6">{A.tagline}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {A.videos.length > 0 && (
                <a href="#videos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white hover:shadow-[0_8px_24px_rgba(255,107,91,0.25)] transition-all">
                  <Play className="w-4 h-4" fill="currentColor" /> Watch the videos
                </a>
              )}
              <a href="#results" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass-card text-[#1a1a2e] hover:text-[#ff6b5b] transition-colors">See field results</a>
              {A.microsite && (
                <a href={A.microsite} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass-card text-[#1a1a2e] hover:text-[#ff6b5b] transition-colors">
                  Read the full journey <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </Reveal>
          <UsvScene />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-6 pb-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {A.stats.map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text" style={display}>{s.value}</div>
                  <div className="text-xs text-[#64748b] mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Problem ── */}
      <Section label="Why it matters" title={A.problem.heading}>
        <Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {A.problem.points.map((p, i) => (
              <div key={i} className="glass-card rounded-xl p-5">
                <div className="text-sm font-semibold gradient-text mb-2" style={display}>0{i + 1}</div>
                <p className="text-[#64748b] leading-relaxed text-sm">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── How it works ── */}
      <Section label="How it works" title="From mission plan to map in four steps">
        <Reveal>
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {A.steps.map((s, i) => (
                <div key={s.title} className="glass-card rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b5b] to-[#14b8a6] text-white text-sm font-semibold flex items-center justify-center mb-3">{i + 1}</div>
                  <h3 className="font-semibold text-[#1a1a2e] mb-1" style={display}>{s.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 glass-card rounded-xl p-5">
              <h3 className="font-semibold text-[#1a1a2e] mb-3" style={display}>At a glance</h3>
              <dl className="divide-y divide-[#e2e8f0]">
                {A.specs.map(([k, v]) => (
                  <div key={k} className="py-2 flex gap-3 text-sm">
                    <dt className="w-28 flex-shrink-0 text-[#64748b]">{k}</dt>
                    <dd className="text-[#1a1a2e]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Journey ── */}
      <Section label="The build" title="How ANVESAK came together">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {A.journey.map((j) => (
            <Reveal key={j.title}>
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                <button onClick={() => setZoom(j.image)} className="block aspect-[4/3] overflow-hidden bg-[#f1f5f9] cursor-zoom-in">
                  <img src={j.image} alt={j.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <div className="p-5">
                  <p className="text-[0.7rem] font-mono uppercase tracking-wider gradient-text mb-1" style={display}>{j.phase}</p>
                  <h3 className="font-semibold text-[#1a1a2e] mb-1" style={display}>{j.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{j.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <VideoCard id={A.journeyVideo.id} title={A.journeyVideo.title} vertical />
        </Reveal>
      </Section>

      {/* ── Results ── */}
      <Section id="results" label="Field results" title="Tested on rivers, lakes and a reservoir">
        <Reveal>
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-1 px-1">
            {A.sites.map((s) => (
              <button
                key={s.id}
                onClick={() => setSite(s.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  s.id === site ? 'bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white shadow-md' : 'glass-card text-[#64748b] hover:text-[#ff6b5b]'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          <div key={current.id} className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-[#1a1a2e]" style={display}>{current.name}</h3>
              <p className="text-sm text-[#64748b] mb-4">{[current.place, current.date].filter(Boolean).join(' · ')}</p>
              <div className="grid grid-cols-2 gap-3 mb-4">
                {current.stats.map(([k, v]) => (
                  <div key={k} className="glass-card rounded-xl p-3">
                    <div className="text-lg font-bold gradient-text leading-tight" style={display}>{v}</div>
                    <div className="text-xs text-[#64748b] mt-0.5">{k}</div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[#64748b] leading-relaxed">{current.note}</p>
            </div>
            <div className="lg:col-span-3 grid gap-3">
              {current.images.map((im) => (
                <figure key={im.src} className="glass-card rounded-xl overflow-hidden">
                  <button onClick={() => setZoom(im.src)} className="block w-full cursor-zoom-in bg-white">
                    <img src={im.src} alt={im.caption} loading="lazy" className="w-full h-auto max-h-[440px] object-contain" />
                  </button>
                  <figcaption className="px-4 py-2 text-xs text-[#64748b]">{im.caption}. Click to enlarge.</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="glass-card rounded-2xl p-6 md:p-8 border-l-4 border-[#14b8a6]">
            <h3 className="font-semibold text-[#1a1a2e] mb-2" style={display}>Checked against a real survey</h3>
            <p className="text-sm md:text-base text-[#64748b] leading-relaxed max-w-3xl">
              At Kulekhani, cross-sections built from ANVESAK’s data were compared with the Nepal Electricity Authority’s 2025 bathymetric survey, both at benchmark points BM 22–23 and near the dam intake. The profiles lined up closely, and the vessel’s actual track followed the waypoints sent from Mission Planner.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── Videos ── */}
      {A.videos.length > 0 && (
        <Section id="videos" label="Watch" title="ANVESAK in action">
          <div className="grid md:grid-cols-2 gap-5">
            {A.videos.map((v) => <Reveal key={v.id}><VideoCard id={v.id} title={v.title} /></Reveal>)}
          </div>
        </Section>
      )}

      {/* ── Media ── */}
      {A.media.length > 0 && (
        <Section label="In the media" title="Featured in national media">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {A.media.map((m) => (
              <Reveal key={m.url}>
                <a href={m.url} target="_blank" rel="noreferrer" className="glass-card glass-hover rounded-2xl overflow-hidden flex flex-col h-full group">
                  {m.image && <img src={m.image} alt="" loading="lazy" className="w-full aspect-[16/9] object-cover" />}
                  <div className="p-5 flex-1">
                    <p className="text-xs font-mono uppercase tracking-wider gradient-text mb-1" style={display}>{m.outlet} · {m.date}</p>
                    <h3 className="font-semibold text-[#1a1a2e] leading-snug group-hover:text-[#ff6b5b] transition-colors" style={display}>
                      {m.title} <ArrowUpRight className="inline w-4 h-4" />
                    </h3>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ── Recognition ── */}
      <Section label="Shared with the community" title="Presentations and recognition">
        <div className="grid sm:grid-cols-2 gap-5">
          {A.recognition.map((r) => (
            <Reveal key={r.title}>
              <figure className="glass-card rounded-2xl overflow-hidden">
                <button onClick={() => setZoom(r.image)} className="block w-full aspect-[4/3] overflow-hidden cursor-zoom-in">
                  <img src={r.image} alt={r.title} loading="lazy" className="w-full h-full object-cover" />
                </button>
                <figcaption className="p-4 text-sm font-medium text-[#1a1a2e]">{r.title}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Limits + next ── */}
      <Section label="Honest look" title="Limitations and what comes next">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-[#1a1a2e] mb-3" style={display}>What we learned the hard way</h3>
              <ul className="space-y-2.5">
                {A.limitations.map((l) => (
                  <li key={l} className="flex gap-3 text-sm text-[#64748b] leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff6b5b] flex-shrink-0" />{l}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-[#1a1a2e] mb-3" style={display}>Next versions</h3>
              <ul className="space-y-2.5">
                {A.next.map((l) => (
                  <li key={l} className="flex gap-3 text-sm text-[#64748b] leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#14b8a6] flex-shrink-0" />{l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Team + partners ── */}
      <Section label="People" title="Team and supporters">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-3" style={display}>Project team</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {A.team.map((m) => (
                  <div key={m} className="flex items-center gap-3 p-3 rounded-xl glass-card">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center gradient-text text-xs font-semibold">
                      {m.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-[#1a1a2e]">{m}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-2" style={display}>Supervisors</h3>
              <ul className="text-sm text-[#64748b] space-y-1">
                {A.supervisors.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-3" style={display}>With thanks to</h3>
              <ul className="space-y-3">
                {A.partners.map((p) => (
                  <li key={p.name} className="text-sm">
                    <span className="font-medium text-[#1a1a2e]">{p.name}</span>
                    <span className="text-[#64748b]"> — {p.role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-3">
          <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass-card text-[#1a1a2e] hover:border-[#ff6b5b] transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white">
            Get in touch about ANVESAK
          </Link>
        </div>
      </section>

      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </div>
  );
}
