import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Tag } from '../components/Shared';
import { Reveal, Section, VideoCard, Lightbox, display } from '../components/PageKit';
import { biogas as B } from '../data/biogas';

/* ───────────── animated digester scene ───────────── */
// Waste goes in, bubbles rise, the gas bag inflates, the flame lights.
// Illustrative only: the counters are a simple demo of 0 → 5 m³ over 40 days.

const DOME = 'M190,290 L190,205 Q190,135 290,135 Q390,135 390,205 L390,290 Z';

function DigesterScene() {
  const bag = useRef<SVGGElement>(null);
  const flame = useRef<SVGGElement>(null);
  const dayEl = useRef<HTMLSpanElement>(null);
  const gasEl = useRef<HTMLSpanElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = (p: number) => {
      const sy = 0.3 + 0.7 * p;
      const sx = 0.82 + 0.18 * p;
      bag.current?.setAttribute('transform', `translate(545 290) scale(${sx.toFixed(3)} ${sy.toFixed(3)})`);
      flame.current?.setAttribute('opacity', p > 0.4 ? '1' : '0');
      if (dayEl.current) dayEl.current.textContent = String(Math.round(p * 40));
      if (gasEl.current) gasEl.current.textContent = (p * 5).toFixed(1);
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { render(0.85); return; }

    const RUN = 12000, HOLD = 2500;
    let raf = 0, t0 = performance.now(), running = false;
    const frame = (now: number) => {
      const t = (now - t0) % (RUN + HOLD);
      const x = Math.min(1, t / RUN);
      render(x * x * (3 - 2 * x)); // ease in-out
      raf = requestAnimationFrame(frame);
    };
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !running) { running = true; t0 = performance.now(); raf = requestAnimationFrame(frame); }
      if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
    });
    if (wrap.current) io.observe(wrap.current);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  const bubbles = [
    { x: 230, d: 0 }, { x: 262, d: 0.9 }, { x: 295, d: 1.7 }, { x: 328, d: 0.4 }, { x: 355, d: 1.3 }, { x: 245, d: 2.1 }, { x: 315, d: 2.4 },
  ];

  return (
    <div ref={wrap} className="relative rounded-2xl overflow-hidden glass-card">
      <div className="flex gap-2 p-3 pb-0 sm:p-0 sm:absolute sm:left-4 sm:top-4 sm:z-10 text-[#1a1a2e]">
        <div className="rounded-lg bg-white/85 backdrop-blur px-3 py-1.5 shadow-sm">
          <div className="text-[0.6rem] uppercase tracking-wider text-[#64748b]">Day</div>
          <span ref={dayEl} className="text-sm sm:text-base font-semibold" style={display}>0</span>
        </div>
        <div className="rounded-lg bg-white/85 backdrop-blur px-3 py-1.5 shadow-sm">
          <div className="text-[0.6rem] uppercase tracking-wider text-[#64748b]">Biogas (m³)</div>
          <span ref={gasEl} className="text-sm sm:text-base font-semibold" style={display}>0.0</span>
        </div>
      </div>
      <svg viewBox="0 0 800 340" className="w-full h-auto block" role="img" aria-label="Animation: kitchen waste enters a digester, biogas rises into a storage bag and fuels a stove">
        <defs>
          <linearGradient id="bg-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e0f2fe" stopOpacity="0.8" />
            <stop offset="1" stopColor="#fef3c7" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="bg-dome" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d9805a" />
            <stop offset="1" stopColor="#a8532f" />
          </linearGradient>
          <linearGradient id="bg-bag" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#7dd3fc" />
            <stop offset="1" stopColor="#0ea5e9" />
          </linearGradient>
          <clipPath id="bg-dome-clip"><path d={DOME} /></clipPath>
        </defs>

        <rect width="800" height="340" fill="url(#bg-sky)" />
        <rect y="290" width="800" height="50" fill="#86c27a" opacity="0.55" />

        {/* inlet funnel + falling waste */}
        <rect x="215" y="134" width="16" height="40" fill="#94a3b8" stroke="#64748b" />
        <path d="M200,98 L246,98 L234,136 L212,136 Z" fill="#94a3b8" stroke="#64748b" />
        <ellipse cx="223" cy="98" rx="23" ry="4" fill="#cbd5e1" stroke="#64748b" />
        <g>
          <circle className="bg-drop" cx="214" cy="20" r="6" fill="#65a30d" />
          <circle className="bg-drop" cx="232" cy="14" r="5" fill="#f97316" style={{ animationDelay: '0.7s' }} />
          <circle className="bg-drop" cx="222" cy="10" r="6" fill="#dc2626" style={{ animationDelay: '1.4s' }} />
        </g>

        {/* digester */}
        <path d={DOME} fill="url(#bg-dome)" stroke="#8a3f1f" strokeWidth="2" />
        <g clipPath="url(#bg-dome-clip)">
          <rect x="190" y="205" width="200" height="90" fill="#5b3220" opacity="0.5" />
          <g className="bg-slosh"><path d="M130,205 q15,-6 30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 V230 H130 Z" fill="#5b3220" opacity="0.5" /></g>
          {bubbles.map((b) => (
            <circle key={b.x} className="bg-bubble" cx={b.x} cy="270" r="5" fill="#fff" opacity="0.8" style={{ animationDelay: `${b.d}s` }} />
          ))}
        </g>
        <path d="M205,165 Q250,140 300,150" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="6" strokeLinecap="round" />

        {/* gas line */}
        <path d="M290,135 V92 H545 V262" fill="none" stroke="#475569" strokeWidth="5" strokeLinejoin="round" />
        <path d="M290,135 V92 H545 V190" fill="none" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="4 8" className="bg-flow" />

        {/* storage bag */}
        <g ref={bag} transform="translate(545 290) scale(0.82 0.3)">
          <path d="M-78,0 Q-84,-70 -42,-88 Q0,-104 42,-88 Q84,-70 78,0 Z" fill="url(#bg-bag)" stroke="#0369a1" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
          <path d="M-52,-60 Q-30,-84 -4,-88" fill="none" stroke="#fff" strokeOpacity="0.55" strokeWidth="6" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </g>

        {/* line to stove */}
        <path d="M623,284 H664" fill="none" stroke="#475569" strokeWidth="5" strokeLinecap="round" />

        {/* stove, flame, pot, steam */}
        <rect x="662" y="278" width="96" height="12" rx="3" fill="#334155" />
        <g ref={flame} opacity="0" style={{ transition: 'opacity .6s' }}>
          <path className="bg-flame" d="M710,277 C700,265 706,255 710,246 C714,255 722,264 710,277 Z" fill="#fb923c" />
          <path className="bg-flame" d="M710,277 C705,270 708,265 710,260 C712,265 716,270 710,277 Z" fill="#fde047" style={{ animationDelay: '0.12s' }} />
          {[0, 1, 2].map((i) => (
            <path key={i} className="bg-steam" d={`M${694 + i * 16},198 q-5,-8 0,-16 t0,-16`} fill="none" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" style={{ animationDelay: `${i * 0.7}s` }} />
          ))}
        </g>
        <rect x="668" y="203" width="84" height="42" rx="6" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
        <rect x="660" y="216" width="10" height="6" rx="2" fill="#64748b" />
        <rect x="750" y="216" width="10" height="6" rx="2" fill="#64748b" />

        {/* labels */}
        <g className="bg-label" fill="#475569" fontFamily="Inter, sans-serif" textAnchor="middle">
          <text x="223" y="60">Kitchen waste + cow dung</text>
          <text x="290" y="312">Digester</text>
          <text x="545" y="312">Gas bag</text>
          <text x="710" y="312">Stove</text>
        </g>
      </svg>

      <p className="absolute right-3 top-3 text-[0.6rem] text-[#0f172a]/50 z-10">Illustrative animation</p>
    </div>
  );
}

/* ───────────── pH scale visual ───────────── */

function PhScale() {
  const pct = (v: number) => `${(v / 14) * 100}%`;
  return (
    <div className="aspect-[16/9] flex flex-col justify-center px-6 bg-gradient-to-br from-[#f0fdfa] to-[#fff7f5]">
      <div className="text-center mb-4">
        <div className="text-4xl font-bold gradient-text" style={display}>6.5 – 7</div>
        <div className="text-xs text-[#64748b]">measured slurry pH, close to neutral</div>
      </div>
      <div className="relative h-3 rounded-full" style={{ background: 'linear-gradient(90deg,#ef4444,#f59e0b,#84cc16,#22c55e,#14b8a6,#3b82f6,#7c3aed)' }}>
        <div className="absolute -top-1.5 h-6 rounded-md border-2 border-[#1a1a2e] bg-white/30" style={{ left: pct(6.5), width: `calc(${pct(7)} - ${pct(6.5)})`, minWidth: 10 }} />
      </div>
      <div className="flex justify-between text-[0.65rem] text-[#94a3b8] mt-2"><span>0 acidic</span><span>7 neutral</span><span>14 alkaline</span></div>
    </div>
  );
}

/* ───────────── stirrer showcase ───────────── */

function StirrerShowcase({ onZoom }: { onZoom: (s: string) => void }) {
  const S = B.stirrer;
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const hasVideos = S.videos.length > 0;

  useEffect(() => {
    if (!auto || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % S.parts.length), 3500);
    return () => clearInterval(id);
  }, [auto, S.parts.length]);

  const pick = (i: number) => { setAuto(false); setActive(i); };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-[#ff6b5b]/25 bg-gradient-to-br from-[#fff7f5] via-white to-[#f0fdfa] p-5 md:p-8">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-[0.7rem] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#ff6b5b] text-white">{S.label}</span>
        {S.chips.map((c) => <Tag key={c}>{c}</Tag>)}
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2" style={display}>{S.title}</h3>
      <p className="text-[#64748b] leading-relaxed max-w-3xl mb-6">{S.intro}</p>

      <div className={`grid gap-6 ${hasVideos ? 'lg:grid-cols-12' : ''}`}>
        <div className={hasVideos ? 'lg:col-span-8' : ''}>
          {/* model with hotspots */}
          <div className="relative rounded-2xl overflow-hidden bg-[#e5e7eb] cursor-zoom-in" onClick={() => onZoom(S.image)}>
            <img src={S.image} alt="SolidWorks model of the 3D-printed stirrer and inlet cover" width={2168} height={1252} className="w-full h-auto block" />
            {S.parts.map((p, i) => (
              <button
                key={p.name}
                onClick={(e) => { e.stopPropagation(); pick(i); }}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                aria-label={p.name}
              >
                {i === active && <span className="absolute inset-0 rounded-full bg-[#ff6b5b]/50 animate-ping" />}
                <span className={`relative flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-full text-[0.6rem] sm:text-xs font-bold border-2 transition-all ${
                  i === active ? 'bg-[#ff6b5b] border-white text-white scale-110 shadow-lg' : 'bg-white/90 border-[#ff6b5b] text-[#ff6b5b]'
                }`}>{i + 1}</span>
              </button>
            ))}
          </div>

          {/* part list */}
          <div className="grid sm:grid-cols-2 gap-2 mt-4">
            {S.parts.map((p, i) => (
              <button key={p.name} onClick={() => pick(i)}
                className={`text-left rounded-xl p-3 border transition-all ${i === active ? 'bg-white border-[#ff6b5b] shadow-md' : 'bg-white/60 border-transparent hover:border-[#ff6b5b]/40'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-5 h-5 rounded-full text-[0.65rem] font-bold flex items-center justify-center ${i === active ? 'bg-[#ff6b5b] text-white' : 'bg-[#ff6b5b]/15 text-[#ff6b5b]'}`}>{i + 1}</span>
                  <span className="font-semibold text-sm text-[#1a1a2e]" style={display}>{p.name}</span>
                </div>
                <p className={`text-xs leading-relaxed ${i === active ? 'text-[#475569]' : 'text-[#94a3b8] hidden sm:block line-clamp-1'}`}>{p.text}</p>
              </button>
            ))}
          </div>
        </div>

        {hasVideos && (
          <div className="lg:col-span-4">
            <div className="grid gap-6">
              {S.videos.map((video) => (
                <VideoCard key={video.id} id={video.id} title={video.title} vertical />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ───────────── page ───────────── */

export default function BiogasPage() {
  const [zoom, setZoom] = useState<string | null>(null);

  return (
    <div>
      <style>{`
        .bg-label { font-size: 12px; }
        @media (max-width: 640px) { .bg-label { font-size: 21px; } }
        .bg-drop { animation: bg-drop 2.4s ease-in infinite; transform-box: fill-box; }
        @keyframes bg-drop { 0% { transform: translateY(0); opacity: 1; } 85% { transform: translateY(78px); opacity: 1; } 100% { transform: translateY(84px); opacity: 0; } }
        .bg-bubble { animation: bg-bubble 3s ease-in infinite; opacity: 0; }
        @keyframes bg-bubble { 0% { transform: translateY(0); opacity: 0; } 15% { opacity: 0.85; } 100% { transform: translateY(-105px); opacity: 0; } }
        .bg-slosh { animation: bg-slosh 4s ease-in-out infinite alternate; }
        @keyframes bg-slosh { from { transform: translateX(0); } to { transform: translateX(30px); } }
        .bg-flow { animation: bg-flow 1.2s linear infinite; }
        @keyframes bg-flow { to { stroke-dashoffset: -24; } }
        .bg-flame { transform-box: fill-box; transform-origin: 50% 100%; animation: bg-flame .35s ease-in-out infinite alternate; }
        @keyframes bg-flame { from { transform: scale(1, 0.82); } to { transform: scale(1.1, 1.12); } }
        .bg-steam { animation: bg-steam 2.4s ease-out infinite; opacity: 0; }
        @keyframes bg-steam { 0% { transform: translateY(8px); opacity: 0; } 30% { opacity: 0.8; } 100% { transform: translateY(-22px); opacity: 0; } }
        @media (prefers-reduced-motion: reduce) { .bg-drop, .bg-bubble, .bg-slosh, .bg-flow, .bg-flame, .bg-steam { animation: none; } .bg-bubble { opacity: 0.6; } }
      `}</style>

      {/* ── Hero ── */}
      <section className="pt-24 md:pt-28 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#ff6b5b] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Renewable Energy', 'Biogas', 'Waste-to-Energy', 'Field Research'].map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a2e] mb-4" style={display}>
              <span className="gradient-text">{B.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#64748b] max-w-3xl leading-relaxed mb-2">{B.tagline}</p>
            <p className="text-sm text-[#64748b] mb-6">{B.org} · {B.period}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#stirrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white hover:shadow-[0_8px_24px_rgba(255,107,91,0.25)] transition-all">
                See the 3D-printed stirrer
              </a>
              <a href="#results" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass-card text-[#1a1a2e] hover:text-[#ff6b5b] transition-colors">See the results</a>
            </div>
          </Reveal>
          <DigesterScene />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-6 pb-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {B.stats.map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-xl md:text-2xl font-bold gradient-text" style={display}>{s.value}</div>
                  <div className="text-xs text-[#64748b] mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Problem ── */}
      <Section label="The question" title={B.problem.heading}>
        <Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {B.problem.points.map((p, i) => (
              <div key={i} className="glass-card rounded-xl p-5">
                <div className="text-sm font-semibold gradient-text mb-2" style={display}>0{i + 1}</div>
                <p className="text-[#64748b] leading-relaxed text-sm">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── Setup ── */}
      <Section label="The setup" title="A real digester, in a real place">
        <Reveal>
          <div className="grid lg:grid-cols-5 gap-6 mb-6">
            <p className="lg:col-span-3 text-[#64748b] leading-relaxed">{B.setup.intro}</p>
            <div className="lg:col-span-2 glass-card rounded-xl p-5">
              <h3 className="font-semibold text-[#1a1a2e] mb-3 text-sm" style={display}>Why beside the café?</h3>
              <ul className="space-y-2">
                {B.setup.reasons.map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-[#64748b]"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#14b8a6] flex-shrink-0" />{r}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4">
          {B.setup.photos.map((p) => (
            <Reveal key={p.src}>
              <figure className="glass-card rounded-2xl overflow-hidden h-full">
                <button onClick={() => setZoom(p.src)} className="block w-full aspect-[4/3] overflow-hidden cursor-zoom-in">
                  <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </button>
                <figcaption className="p-3 text-xs text-[#64748b]">{p.caption}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Feeding ── */}
      <Section label="Feeding" title="From cow dung to kitchen waste">
        <div className="grid lg:grid-cols-2 gap-5">
          {B.feeding.map((f) => (
            <Reveal key={f.title}>
              <div className="glass-card rounded-2xl overflow-hidden h-full sm:grid sm:grid-cols-5">
                <button onClick={() => setZoom(f.image)} className="sm:col-span-2 relative block w-full aspect-[4/3] sm:aspect-auto sm:min-h-[260px] overflow-hidden cursor-zoom-in">
                  <img src={f.image} alt={f.caption} loading="lazy" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: f.pos }} />
                </button>
                <div className="sm:col-span-3 p-5">
                  <p className="text-[0.7rem] font-mono uppercase tracking-wider gradient-text mb-1" style={display}>{f.phase}</p>
                  <h3 className="font-semibold text-[#1a1a2e] mb-3" style={display}>{f.title}</h3>
                  <ul className="space-y-2">
                    {f.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm text-[#64748b] leading-relaxed"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff6b5b] flex-shrink-0" />{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Monitoring ── */}
      <Section label="Measuring" title="Everything was logged">
        <div className="grid sm:grid-cols-2 gap-5">
          {B.monitoring.map((m) => (
            <Reveal key={m.title}>
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                {m.image && (
                  <button onClick={() => setZoom(m.image!)} className={`block w-full aspect-[16/9] overflow-hidden cursor-zoom-in ${m.fit === 'contain' ? 'bg-white' : ''}`}>
                    <img src={m.image} alt={m.title} loading="lazy" className={`w-full h-full ${m.fit === 'contain' ? 'object-contain' : 'object-cover'}`} style={{ objectPosition: m.pos }} />
                  </button>
                )}
                {m.visual === 'ph' && <PhScale />}
                <div className="p-5">
                  <h3 className="font-semibold text-[#1a1a2e] mb-1.5" style={display}>{m.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{m.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Stirrer highlight ── */}
      <section id="stirrer" className="py-10 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal><StirrerShowcase onZoom={setZoom} /></Reveal>
        </div>
      </section>

      {/* ── Results ── */}
      <Section id="results" label="Results" title="Does the gas actually burn? Yes, with caveats.">
        <Reveal>
          <p className="text-[#64748b] mb-6 max-w-3xl">{B.results.intro}</p>
          <div className="grid lg:grid-cols-5 gap-6">
            <figure className="lg:col-span-2 glass-card rounded-2xl overflow-hidden self-start">
              <button onClick={() => setZoom(B.results.boilImage)} className="block w-full cursor-zoom-in">
                <img src={B.results.boilImage} alt={B.results.boilCaption} loading="lazy" className="w-full h-auto" />
              </button>
              <figcaption className="px-4 py-2 text-xs text-[#64748b]">{B.results.boilCaption}</figcaption>
            </figure>
            <div className="lg:col-span-3 space-y-6">
              <div className="glass-card rounded-2xl p-5">
                <h3 className="font-semibold text-[#1a1a2e] mb-1 text-sm" style={display}>Final temperature of 1 L of water</h3>
                <p className="text-xs text-[#64748b] mb-4">Heated with the biogas, outdoors versus a controlled indoor setting</p>
                <div className="space-y-4">
                  {B.results.bars.map((b) => (
                    <div key={b.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[#1a1a2e] font-medium">{b.label}</span>
                        <span className="text-[#64748b]">{b.note}</span>
                      </div>
                      <div className="relative h-3 rounded-full bg-[#e2e8f0] overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6]" style={{ width: `${b.value}%` }} />
                      </div>
                    </div>
                  ))}
                  <div className="text-[0.7rem] text-[#94a3b8] text-right">Scale: 0 to 100 °C (boiling)</div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {B.results.notes.map((n) => (
                  <li key={n} className="flex gap-3 text-sm text-[#64748b] leading-relaxed"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#14b8a6] flex-shrink-0" />{n}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Lessons + next ── */}
      <Section label="Honest look" title="What went wrong, and what comes next">
        <Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {B.challenges.map((c) => (
              <div key={c.title} className="glass-card rounded-xl p-5 border-t-2 border-[#ff6b5b]">
                <h3 className="font-semibold text-[#1a1a2e] mb-1 text-sm" style={display}>{c.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="glass-card rounded-2xl p-6">
            <h3 className="font-semibold text-[#1a1a2e] mb-3" style={display}>Next steps</h3>
            <ul className="space-y-2.5">
              {B.next.map((n) => (
                <li key={n} className="flex gap-3 text-sm text-[#64748b] leading-relaxed"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#14b8a6] flex-shrink-0" />{n}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* ── People ── */}
      <Section label="People" title="Team and supporters">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-3" style={display}>Project team</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {B.team.map((m) => (
                  <div key={m} className="flex items-center gap-3 p-3 rounded-xl glass-card">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center gradient-text text-xs font-semibold">
                      {m.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-[#1a1a2e]">{m}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-2" style={display}>Supervisors at NAST</h3>
              <ul className="text-sm text-[#64748b] space-y-1">{B.supervisors.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-3" style={display}>With thanks to</h3>
              <ul className="space-y-3">
                {B.thanks.map((p) => (
                  <li key={p.name} className="text-sm"><span className="font-medium text-[#1a1a2e]">{p.name}</span><span className="text-[#64748b]"> — {p.role}</span></li>
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
            Get in touch
          </Link>
        </div>
      </section>

      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </div>
  );
}
