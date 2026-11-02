import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Pause, Play, RotateCcw } from 'lucide-react';
import { Tag } from '../components/Shared';
import { Reveal, Section, Lightbox, display } from '../components/PageKit';
import { Photo, VideoSlot, type PhotoSpec } from '../components/MediaKit';
import { guide as G } from '../data/nepalGuide';

/* ═════════════ hero art ═════════════ */

function HeroRidges() {
  return (
    <div className="absolute inset-x-0 bottom-0 h-40 sm:h-52 pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1200 220" preserveAspectRatio="none" className="w-full h-full">
        <defs>
          <linearGradient id="ng-sun" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff6b5b" stopOpacity="0.35" />
            <stop offset="1" stopColor="#fbbf24" stopOpacity="0.25" />
          </linearGradient>
        </defs>
        <circle cx="880" cy="70" r="46" fill="url(#ng-sun)" />
        <g className="ng-cloud"><ellipse cx="260" cy="60" rx="90" ry="14" fill="#fff" opacity="0.7" /><ellipse cx="320" cy="50" rx="60" ry="12" fill="#fff" opacity="0.7" /></g>
        <g className="ng-cloud ng-cloud-b"><ellipse cx="760" cy="40" rx="70" ry="11" fill="#fff" opacity="0.6" /></g>
        <path d="M0,170 L120,110 L200,140 L330,60 L430,130 L520,90 L640,150 L760,70 L880,140 L1000,100 L1100,150 L1200,120 L1200,220 L0,220 Z" fill="#14b8a6" opacity="0.14" />
        <path d="M0,190 L150,140 L260,170 L380,110 L500,175 L620,125 L740,180 L880,130 L1000,180 L1120,145 L1200,170 L1200,220 L0,220 Z" fill="#14b8a6" opacity="0.22" />
        <path d="M0,210 L180,170 L320,200 L470,160 L640,205 L800,170 L960,208 L1100,180 L1200,200 L1200,220 L0,220 Z" fill="#ff6b5b" opacity="0.16" />
      </svg>
    </div>
  );
}

/* ═════════════ tectonic scene ═════════════ */
// Schematic only. Timing follows published estimates: India leaves Gondwana ~130 Mya,
// drifts slowly, speeds up to ~15 cm/yr between ~80 and ~50 Mya, collides ~50 Mya, then keeps pushing ~5 cm/yr.

const START = 130, GAP0 = 120, INDENT = 14, BOUND = 190;
const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

function travelled(mya: number) {
  if (mya >= START) return 0;
  if (mya > 80) return ((START - mya) / 50) * (1 / 3);
  if (mya > 50) return 1 / 3 + ((80 - mya) / 30) * (2 / 3);
  return 1;
}
const gapAt = (mya: number) => (mya >= 50 ? GAP0 * (1 - travelled(mya)) : -INDENT * (1 - mya / 50));

function stageFor(mya: number): { title: string; text: string; speed: string } {
  if (mya > 120) return { title: '~130 million years ago', text: 'India, then part of the southern supercontinent Gondwana, breaks away and sets off north.', speed: '≈ 5 cm/yr' };
  if (mya > 80) return { title: 'Drifting north', text: 'A long, slow crossing of the Tethys Ocean.', speed: '≈ 5 cm/yr' };
  if (mya > 52) return { title: 'Racing north', text: 'India speeds up to roughly 15 cm a year, about as fast as a continent has ever moved.', speed: '≈ 15 cm/yr' };
  if (mya > 45) return { title: '~50 million years ago: contact', text: 'India meets Eurasia. The seafloor between them is squeezed shut.', speed: '≈ 5 cm/yr' };
  if (mya > 5) return { title: 'The crumpling begins', text: 'Neither plate sinks easily, so the crust folds and piles upward. The Himalaya rise.', speed: '≈ 5 cm/yr' };
  return { title: 'Today', text: 'India still pushes north, and the range keeps growing by a few millimetres a year.', speed: '≈ 5 cm/yr' };
}

const PEAKS = [0.45, 0.6, 0.55, 0.8, 0.75, 1, 0.9, 0.7, 0.55, 0.5, 0.4].map((h, i) => ({ x: 150 + i * 50, h }));

function TectonicScene() {
  const [s, setS] = useState(START); // 0 → START as time runs forward; starts at "today"
  const [playing, setPlaying] = useState(false);
  const touched = useRef(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !touched.current) { touched.current = true; setS(0); setPlaying(true); }
    }, { threshold: 0.5 });
    if (wrap.current) io.observe(wrap.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    let raf = 0, last = performance.now();
    const tick = (now: number) => {
      const dt = now - last; last = now;
      setS((v) => {
        const nv = v + dt / 105;
        if (nv >= START) { setPlaying(false); return START; }
        return nv;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  const mya = START - s;
  const gap = gapAt(mya);
  const indiaY = BOUND + gap;
  const hm = mya < 50 ? (() => { const t = (50 - mya) / 50; return t * t * (3 - 2 * t); })() : 0;
  const st = stageFor(mya);
  const timeLabel = mya < 1 ? 'Today' : `${Math.round(mya)} million years ago`;

  const toggle = () => {
    touched.current = true;
    if (s >= START) { setS(0); setPlaying(true); } else setPlaying((p) => !p);
  };

  return (
    <div ref={wrap} className="rounded-2xl overflow-hidden glass-card">
      <div className="relative">
        <div className="flex gap-2 p-3 pb-0 sm:p-0 sm:absolute sm:left-4 sm:top-4 sm:z-10 text-[#1a1a2e]">
          <div className="rounded-lg bg-white/85 backdrop-blur px-3 py-1.5 shadow-sm">
            <div className="text-[0.6rem] uppercase tracking-wider text-[#64748b]">Time</div>
            <span className="text-sm sm:text-base font-semibold" style={display}>{timeLabel}</span>
          </div>
          <div className="rounded-lg bg-white/85 backdrop-blur px-3 py-1.5 shadow-sm">
            <div className="text-[0.6rem] uppercase tracking-wider text-[#64748b]">India’s speed</div>
            <span className="text-sm sm:text-base font-semibold" style={display}>{st.speed}</span>
          </div>
        </div>
        <p className="absolute right-3 top-3 text-[0.6rem] text-[#0f172a]/50 z-10">Schematic, not to scale</p>

        <svg viewBox="0 0 800 450" className="w-full h-auto block" role="img" aria-label="Animated map: the Indian plate drifts north and collides with the Eurasian plate, raising the Himalaya">
          <rect width="800" height="450" fill="#dbeafe" />
          {gap < 70 && <text className="tc-label" x="400" y="436" textAnchor="middle" fill="#1d4ed8" opacity="0.5">Indian Ocean</text>}
          {/* Eurasia */}
          <path d={`M0,0 H800 V180 L680,186 L540,192 L400,${BOUND} L260,192 L120,186 L0,180 Z`} fill="#e9e1cf" />
          <text className="tc-label" x="400" y="36" textAnchor="middle" fill="#6b5f43">Eurasian plate (carries Tibet)</text>

          {/* Tethys label fades as the sea closes */}
          {gap > 40 && (
            <text className="tc-label" x="400" y={BOUND + gap / 2 + 4} textAnchor="middle" fill="#1d4ed8" opacity={clamp(gap / GAP0, 0, 1) * 0.8}>Tethys Ocean</text>
          )}

          {/* India */}
          <g transform={`translate(400 ${indiaY})`}>
            <polygon points="-130,0 130,0 140,30 70,92 0,140 -70,92 -140,30" fill="#f6c453" stroke="#c28a12" strokeWidth="2" />
            <text className="tc-label" x="0" y="108" textAnchor="middle" fill="#6a4b06">India</text>
            {mya > 50 && (
              <g opacity="0.8">
                <line x1="0" y1="56" x2="0" y2="36" stroke="#6a4b06" strokeWidth="3" />
                <polygon points="-7,38 7,38 0,24" fill="#6a4b06" />
              </g>
            )}
          </g>

          {/* Himalaya */}
          {hm > 0.02 && (
            <g>
              {PEAKS.map((pk, i) => {
                const h = 78 * pk.h * hm;
                const base = BOUND + 4;
                const w = 34;
                return (
                  <g key={i}>
                    <polygon points={`${pk.x - w},${base} ${pk.x},${base - h} ${pk.x + w},${base}`} fill="#8b7d6b" />
                    <polygon points={`${pk.x - w * 0.34},${base - h * 0.66} ${pk.x},${base - h} ${pk.x + w * 0.34},${base - h * 0.66}`} fill="#fff" />
                  </g>
                );
              })}
              {hm > 0.35 && (
                <>
                  <text className="tc-label" x="400" y={BOUND - 78 * hm - 10} textAnchor="middle" fill="#1a1a2e" fontWeight="700">Everest</text>
                  <text className="tc-label" x="150" y={BOUND - 56} fill="#1a1a2e" opacity="0.7">Himalaya</text>
                </>
              )}
              {hm > 0.6 && (
                <>
                  <line x1="414" y1={BOUND - 78 * hm + 10} x2="620" y2={BOUND - 108} stroke="#1a1a2e" strokeWidth="1.2" opacity="0.6" />
                  <text className="tc-label" x="780" y={BOUND - 112} textAnchor="end" fill="#1a1a2e">Summit rock = old seafloor</text>
                </>
              )}
              {hm > 0.3 && (
                <g opacity={clamp(hm * 1.5, 0, 1)}>
                  <line x1="300" y1={BOUND + 34} x2="500" y2={BOUND + 34} stroke="#1a1a2e" strokeWidth="2" />
                  <line x1="300" y1={BOUND + 28} x2="300" y2={BOUND + 40} stroke="#1a1a2e" strokeWidth="2" />
                  <line x1="500" y1={BOUND + 28} x2="500" y2={BOUND + 40} stroke="#1a1a2e" strokeWidth="2" />
                  <text className="tc-label" x="400" y={BOUND + 60} textAnchor="middle" fill="#1a1a2e" fontWeight="700">NEPAL</text>
                </g>
              )}
            </g>
          )}
        </svg>
      </div>

      <div className="px-4 py-3 border-t border-[#e2e8f0]">
        <p className="text-sm font-semibold text-[#1a1a2e]" style={display}>{st.title}</p>
        <p className="text-sm text-[#64748b] leading-relaxed mb-3 min-h-[2.75rem]">{st.text}</p>
        <div className="flex items-center gap-3">
          <button onClick={toggle} className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-[#ff6b5b] to-[#14b8a6] text-white flex items-center justify-center shadow" aria-label={playing ? 'Pause' : s >= START ? 'Replay' : 'Play'}>
            {playing ? <Pause className="w-4 h-4" /> : s >= START ? <RotateCcw className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" fill="currentColor" />}
          </button>
          <span className="text-[0.7rem] text-[#64748b] w-14 text-right flex-shrink-0">130 Mya</span>
          <input
            type="range" min={0} max={START} step={0.5} value={s}
            onChange={(e) => { touched.current = true; setPlaying(false); setS(Number(e.target.value)); }}
            className="flex-1 accent-[#ff6b5b]" aria-label="Time slider: million years ago"
          />
          <span className="text-[0.7rem] text-[#64748b] w-10 flex-shrink-0">Today</span>
        </div>
      </div>
    </div>
  );
}

/* ═════════════ south → north elevation sketch ═════════════ */

const PTS: [number, number][] = [[0, 130], [10, 150], [24, 260], [36, 900], [46, 620], [58, 200], [68, 420], [80, 1400], [90, 2300], [98, 822], [105, 1150], [112, 1400], [120, 2100], [132, 3000], [145, 3600], [156, 4250], [163, 4800], [170, 5364], [177, 6700], [182, 7900], [186, 8849], [191, 7600], [198, 6000], [210, 5000], [225, 4800]];
const PW = { L: 50, R: 770, T: 24, B: 250, KM: 225, M: 9000 };
const px = (km: number) => PW.L + (km / PW.KM) * (PW.R - PW.L);
const py = (m: number) => PW.B - (m / PW.M) * (PW.B - PW.T);

function profilePath() {
  const p = PTS.map(([km, m]) => [px(km), py(m)]);
  let d = `M${p[0][0]},${p[0][1]}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2] ?? p[i + 1];
    const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = clamp(p1[1] + (p2[1] - p0[1]) / 6, PW.T, PW.B);
    const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = clamp(p2[1] - (p3[1] - p1[1]) / 6, PW.T, PW.B);
    d += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}
const PROFILE_D = profilePath();
const PROFILE_FILL = `${PROFILE_D} L${px(PW.KM)},${PW.B} L${px(0)},${PW.B} Z`;

function ElevationProfile() {
  const ms = G.profile.markers;
  return (
    <Reveal>
      <div className="glass-card rounded-2xl p-3 sm:p-5">
        <svg viewBox="0 0 800 300" className="w-full h-auto block" role="img" aria-label="Sketch of Nepal’s elevation from the southern plains in the left to the Himalaya on the right, with the places in this guide marked">
          <defs>
            <linearGradient id="ep-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#14b8a6" stopOpacity="0.45" />
              <stop offset="1" stopColor="#14b8a6" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          {[0, 2000, 4000, 6000, 8000].map((m) => (
            <g key={m}>
              <line x1={PW.L} x2={PW.R} y1={py(m)} y2={py(m)} stroke="#cbd5e1" strokeDasharray="3 5" opacity="0.7" />
              <text className="ep-axis" x={PW.L - 6} y={py(m) + 4} textAnchor="end" fill="#94a3b8">{m === 0 ? '0' : `${m / 1000}k`}</text>
            </g>
          ))}
          <text className="ep-axis" x={PW.L} y="14" fill="#94a3b8">metres above sea level</text>
          <path className="ep-area" d={PROFILE_FILL} fill="url(#ep-fill)" />
          <path className="ep-line" d={PROFILE_D} pathLength={1} fill="none" stroke="#0f766e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
          {ms.map((m, i) => (
            <g key={m.n} className="ep-dot" style={{ ['--i' as string]: i }}>
              <circle cx={px(m.x)} cy={py(m.elev)} r="11" fill="#ff6b5b" stroke="#fff" strokeWidth="2.5" />
              <text x={px(m.x)} y={py(m.elev) + 4.5} textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">{m.n}</text>
            </g>
          ))}
          <g className="hidden sm:inline" fill="#94a3b8" fontSize="11">
            <text x={px(18)} y={PW.B + 22} textAnchor="middle">Terai plains</text>
            <text x={px(100)} y={PW.B + 22} textAnchor="middle">Hills and valleys</text>
            <text x={px(175)} y={PW.B + 22} textAnchor="middle">High Himalaya</text>
          </g>
          <text className="ep-axis" x={PW.L} y="290" fill="#64748b">South (jungle)</text>
          <text className="ep-axis" x={PW.R} y="290" textAnchor="end" fill="#64748b">North (Tibet)</text>
        </svg>
        <ol className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-2 mt-3 px-1">
          {ms.map((m) => (
            <li key={m.n} className="flex items-center gap-2 text-sm">
              <span className="w-5 h-5 rounded-full bg-[#ff6b5b] text-white text-[0.65rem] font-bold flex items-center justify-center flex-shrink-0">{m.n}</span>
              <span className="text-[#1a1a2e]">{m.name}</span>
              <span className="text-xs text-[#94a3b8]">{m.elev.toLocaleString('en-US')} m</span>
            </li>
          ))}
        </ol>
        <p className="text-[0.7rem] text-[#94a3b8] mt-3 px-1">A schematic cross-section, not a real line on the map. Heights are the real elevations of each place.</p>
      </div>
    </Reveal>
  );
}

/* ═════════════ small building blocks ═════════════ */

function FactChips({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {items.map((f) => <span key={f} className="text-[0.7rem] font-medium px-2.5 py-1 rounded-full bg-[#14b8a6]/10 text-[#0f766e]">{f}</span>)}
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="space-y-4 text-[#475569] leading-relaxed text-[0.98rem] md:text-[1.04rem] max-w-3xl">{children}</div>;
}

function MiniCard({ name, facts, text, photo, onZoom }: { name: string; facts: string[]; text: string; photo: PhotoSpec; onZoom: (s: string) => void }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full">
      <Photo {...photo} ratio="aspect-[16/10]" onZoom={onZoom} className="!rounded-none !shadow-none !border-0" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-[#1a1a2e] mb-2" style={display}>{name}</h3>
        <FactChips items={facts} />
        <p className="text-sm text-[#64748b] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

type Dest = (typeof G.classics.places)[number];

function Destination({ d, flip, onZoom }: { d: Dest; flip: boolean; onZoom: (s: string) => void }) {
  const note = (d as { note?: { text: string; to: string; label: string } }).note;
  return (
    <Reveal>
      <div className="grid lg:grid-cols-5 gap-6 items-start">
        <div className={`lg:col-span-2 grid gap-3 ${flip ? 'lg:order-last' : ''}`}>
          {d.photos.map((ph, i) => <Photo key={ph.file} {...ph} ratio={i === 0 ? 'aspect-[4/3]' : 'aspect-[16/9]'} onZoom={onZoom} />)}
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e]" style={display}>{d.name}</h3>
          <p className="gradient-text font-medium mb-4">{d.tagline}</p>
          <dl className="grid sm:grid-cols-3 gap-2 mb-5">
            {d.facts.map(([k, v]) => (
              <div key={k} className="glass-card rounded-xl p-3">
                <dt className="text-[0.65rem] uppercase tracking-wider text-[#94a3b8]">{k}</dt>
                <dd className="text-sm text-[#1a1a2e] leading-snug mt-0.5">{v}</dd>
              </div>
            ))}
          </dl>
          <Body>{d.text.map((t) => <p key={t}>{t}</p>)}</Body>
          {note && (
            <p className="mt-4 text-sm text-[#64748b] border-l-4 border-[#ff6b5b] pl-3">
              {note.text}{' '}
              <Link to={note.to} className="text-[#ff6b5b] font-medium hover:underline inline-flex items-center gap-0.5">{note.label} <ArrowUpRight className="w-3.5 h-3.5" /></Link>
            </p>
          )}
        </div>
      </div>
    </Reveal>
  );
}

/* ═════════════ page ═════════════ */

export default function NepalGuidePage() {
  const [zoom, setZoom] = useState<string | null>(null);
  const z = (s: string) => setZoom(s);
  const k = G.kathmandu;

  return (
    <div>
      <style>{`
        .tc-label { font-size: 14px; font-family: Inter, sans-serif; }
        @media (max-width: 640px) { .tc-label { font-size: 22px; } .ep-axis { font-size: 17px; } }
        .ep-axis { font-size: 11px; font-family: Inter, sans-serif; }
        .ep-line { stroke-dasharray: 1; stroke-dashoffset: 1; }
        .ep-area { opacity: 0; }
        .ep-dot { opacity: 0; transform-box: fill-box; transform-origin: center; }
        .reveal.visible .ep-line { animation: ep-draw 2.6s cubic-bezier(.4,0,.2,1) forwards; }
        .reveal.visible .ep-area { animation: ep-fade 1.6s ease 0.9s forwards; }
        .reveal.visible .ep-dot { animation: ep-pop .5s cubic-bezier(.34,1.56,.64,1) forwards; animation-delay: calc(0.9s + var(--i) * 0.28s); }
        @keyframes ep-draw { to { stroke-dashoffset: 0; } }
        @keyframes ep-fade { to { opacity: 1; } }
        @keyframes ep-pop { from { opacity: 0; transform: scale(0.2); } to { opacity: 1; transform: scale(1); } }
        .ng-cloud { animation: ng-drift 38s linear infinite alternate; }
        .ng-cloud-b { animation-duration: 52s; }
        @keyframes ng-drift { from { transform: translateX(-60px); } to { transform: translateX(120px); } }
        @media (prefers-reduced-motion: reduce) {
          .ng-cloud { animation: none; }
          .ep-line { stroke-dashoffset: 0; } .ep-area, .ep-dot { opacity: 1; }
          .reveal.visible .ep-line, .reveal.visible .ep-area, .reveal.visible .ep-dot { animation: none; }
        }
      `}</style>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-24 md:pt-28 pb-24 sm:pb-32 px-6">
        <HeroRidges />
        <div className="max-w-6xl mx-auto relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#ff6b5b] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-4">{G.tags.slice(0, 4).map((t) => <Tag key={t}>{t}</Tag>)}</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a2e] mb-4 max-w-4xl" style={display}>
              <span className="gradient-text">{G.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#64748b] max-w-2xl leading-relaxed mb-5">{G.subtitle}</p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[#64748b]">
              <span>By Siddhant Yadav</span>
              <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{G.date}</span>
              <span className="inline-flex items-center gap-1"><Clock className="w-4 h-4" />{G.readTime}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Intro + hero photo + contents ── */}
      <section className="px-6 -mt-10 sm:-mt-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <Photo {...G.hero} ratio="aspect-[21/9]" onZoom={z} />
          <Reveal>
            <Body>
              <div className="pt-8 space-y-4">{G.intro.map((t, i) => <p key={t} className={i === 0 ? 'text-lg md:text-xl text-[#1a1a2e] leading-relaxed' : ''}>{t}</p>)}</div>
            </Body>
            <nav className="flex gap-2 overflow-x-auto py-6 -mx-1 px-1" aria-label="On this page">
              {G.toc.map(([id, label]) => (
                <a key={id} href={`#${id}`} className="whitespace-nowrap text-sm px-4 py-2 rounded-full glass-card text-[#64748b] hover:text-[#ff6b5b] transition-colors">{label}</a>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      {/* ── Geology ── */}
      <Section id="why-nepal" label={G.geology.label} title={G.geology.title}>
        <Reveal><Body>{G.geology.text.map((t) => <p key={t}>{t}</p>)}</Body></Reveal>
        <div className="mt-8"><Reveal><TectonicScene /></Reveal></div>
        <Reveal>
          <div className="mt-6 grid lg:grid-cols-5 gap-4">
            <div className="lg:col-span-2 glass-card rounded-2xl p-5 border-l-4 border-[#14b8a6]">
              <p className="text-xs font-mono uppercase tracking-wider gradient-text mb-1" style={display}>Fossils on the summit</p>
              <p className="text-sm text-[#475569] leading-relaxed">{G.geology.fossil}</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 gap-3">
              {G.geology.facts.map(([v, l]) => (
                <div key={v} className="glass-card rounded-xl p-4">
                  <div className="text-xl md:text-2xl font-bold gradient-text" style={display}>{v}</div>
                  <div className="text-xs text-[#64748b] mt-1 leading-snug">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mt-10"><Reveal><Body><p>{G.geology.profileIntro}</p></Body></Reveal></div>
        <div className="mt-5"><ElevationProfile /></div>
      </Section>

      {/* ── Kathmandu ── */}
      <Section id="kathmandu" label={k.label} title={k.title}>
        <Reveal><Body>{k.text.map((t) => <p key={t}>{t}</p>)}</Body></Reveal>
        <Reveal>
          <div className="mt-6 grid lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
              {k.zones.map(([n, t]) => (
                <div key={n} className="glass-card rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-[#1a1a2e]" style={display}>{n}</h3>
                  <p className="text-xs text-[#64748b] leading-relaxed mt-1">{t}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2"><Photo {...k.zonePhoto} onZoom={z} /></div>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-5 gap-6 items-start">
          <Reveal className="lg:col-span-3">
            <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-3" style={display}>{k.dharahara.title}</h3>
            <Body>{k.dharahara.text.map((t) => <p key={t}>{t}</p>)}</Body>
          </Reveal>
          <Reveal className="lg:col-span-2 grid grid-cols-2 gap-3">
            {k.dharahara.photos.map((ph) => <Photo key={ph.file} {...ph} ratio="aspect-[3/4]" onZoom={z} />)}
          </Reveal>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6 items-center">
          <Reveal className="lg:col-span-3">
            <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-3" style={display}>{k.taudaha.title}</h3>
            <Body><p>{k.taudaha.text}</p></Body>
          </Reveal>
          <Reveal className="lg:col-span-2"><VideoSlot {...k.taudaha.video} /></Reveal>
        </div>
      </Section>

      {/* ── Around the valley ── */}
      <Section id="around" label={G.around.label} title={G.around.title}>
        <Reveal><Body><p>{G.around.intro}</p></Body></Reveal>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {G.around.places.map((pl) => <Reveal key={pl.name}><MiniCard {...pl} onZoom={z} /></Reveal>)}
        </div>
      </Section>

      {/* ── Classics ── */}
      <Section id="classics" label={G.classics.label} title={G.classics.title}>
        <Reveal><Body><p>{G.classics.intro}</p></Body></Reveal>
        <div className="mt-10 space-y-16">
          {G.classics.places.map((d, i) => <Destination key={d.id} d={d} flip={i % 2 === 1} onZoom={z} />)}
        </div>
      </Section>

      {/* ── Story ── */}
      <section id="story" className="py-14 md:py-20 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="rounded-3xl overflow-hidden border border-[#14b8a6]/25 bg-gradient-to-br from-[#f0fdfa] via-white to-[#fff7f5] p-5 md:p-8 grid lg:grid-cols-2 gap-8 items-center">
              <Photo {...G.story.photo} ratio="aspect-[4/5]" onZoom={z} />
              <div>
                <p className="font-mono text-xs tracking-[0.15em] uppercase mb-2 gradient-text" style={display}>{G.story.label}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4" style={display}>{G.story.title}</h2>
                <FactChips items={G.story.chips} />
                <Body>{G.story.text.map((t) => <p key={t}>{t}</p>)}</Body>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Rafting ── */}
      <Section label={G.rafting.label} title={G.rafting.title}>
        <Reveal>
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-3">
              <Body>{G.rafting.text.map((t) => <p key={t}>{t}</p>)}</Body>
              <Link to={G.rafting.link.to} className="mt-4 inline-flex items-center gap-1 text-sm text-[#ff6b5b] font-medium hover:underline">{G.rafting.link.label} <ArrowUpRight className="w-4 h-4" /></Link>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {G.rafting.photos.map((ph) => <Photo key={ph.file} {...ph} ratio="aspect-[4/3]" onZoom={z} />)}
              </div>
            </div>
            <div className="lg:col-span-2 grid gap-4">
              {G.rafting.videos.map((v, i) => <VideoSlot key={v.id || i} {...v} />)}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── More ── */}
      <Section id="more" label={G.more.label} title={G.more.title}>
        <div className="grid md:grid-cols-2 gap-5">
          {G.more.places.map((pl) => <Reveal key={pl.name}><MiniCard {...pl} onZoom={z} /></Reveal>)}
        </div>
      </Section>

      {/* ── Treks ── */}
      <Section id="treks" label={G.treks.label} title={G.treks.title}>
        <Reveal><Body><p>{G.treks.intro}</p></Body></Reveal>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {G.treks.cards.map((c) => <Reveal key={c.name}><MiniCard {...c} onZoom={z} /></Reveal>)}
        </div>

        <Reveal>
          <div className="mt-8 glass-card rounded-2xl p-5 md:p-6 grid md:grid-cols-5 gap-6 items-center border-l-4 border-[#ff6b5b]">
            <p className="md:col-span-3 text-[#475569] leading-relaxed">
              {G.treks.ebcStory.before}
              <a href={G.treks.ebcStory.url} target="_blank" rel="noopener noreferrer" className="text-[#ff6b5b] font-medium hover:underline">{G.treks.ebcStory.name}</a>
              {G.treks.ebcStory.after}
            </p>
            <div className="md:col-span-2"><Photo {...G.treks.ebcStory.photo} ratio="aspect-[4/3]" onZoom={z} /></div>
          </div>
        </Reveal>

        <div className="mt-12">
          <Reveal><h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] mb-4" style={display}>{G.treks.offbeat.title}</h3></Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {G.treks.offbeat.places.map((pl) => <Reveal key={pl.name}><MiniCard {...pl} onZoom={z} /></Reveal>)}
          </div>
        </div>
      </Section>

      {/* ── Plan it ── */}
      <Section id="plan" label={G.plan.label} title={G.plan.title}>
        <Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {G.plan.info.map((i) => (
              <div key={i.title} className="glass-card rounded-2xl p-5">
                <h3 className="font-semibold text-[#1a1a2e] mb-2" style={display}>{i.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{i.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {G.plan.itineraries.map((it) => (
              <div key={it.title} className="glass-card rounded-2xl p-5">
                <h3 className="font-semibold text-[#1a1a2e] mb-3" style={display}>{it.title}</h3>
                <ol className="space-y-2.5">
                  {it.days.map(([d, t]) => (
                    <li key={d} className="flex gap-3 text-sm">
                      <span className="w-24 flex-shrink-0 font-medium gradient-text">{d}</span>
                      <span className="text-[#64748b] leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#ff6b5b]/10 to-[#14b8a6]/10 p-6 md:p-8">
            <p className="text-[#1a1a2e] text-lg leading-relaxed max-w-3xl">{G.plan.closing}</p>
            <Link to="/contact" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white">Get in touch</Link>
          </div>
        </Reveal>
      </Section>

      {/* ── Sources ── */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <details className="glass-card rounded-xl p-4">
            <summary className="cursor-pointer text-sm font-medium text-[#1a1a2e]">Sources and further reading</summary>
            <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {G.sources.map(([label, url]) => (
                <li key={url}><a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-[#64748b] hover:text-[#ff6b5b] hover:underline">{label}</a></li>
              ))}
            </ul>
            <p className="text-xs text-[#94a3b8] mt-3">Distances, prices and rules change, so double-check before you travel.</p>
          </details>
          <div className="mt-6">
            <Link to="/blog" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass-card text-[#1a1a2e] hover:border-[#ff6b5b] transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </section>

      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </div>
  );
}
