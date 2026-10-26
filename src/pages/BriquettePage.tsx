import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play } from 'lucide-react';
import { Tag } from '../components/Shared';
import { Reveal, Section, VideoCard, Lightbox, display } from '../components/PageKit';
import { briquettes as Q } from '../data/briquettes';

/* ───────────── animated press scene ───────────── */
// Loose biomass drops into the hopper, the screw turns, the coil glows and briquettes
// come out and stack up. Illustrative only: the counters are a simple demo.

const STACK = [
  { x: 598, y: 268 }, { x: 656, y: 268 }, { x: 714, y: 268 },
  { x: 627, y: 244 }, { x: 685, y: 244 },
  { x: 656, y: 220 },
];
const grains = [
  { x: 196, d: 0, c: '#d6b36a' }, { x: 214, d: 0.5, c: '#1f2937' }, { x: 232, d: 1.0, c: '#b98a56' },
  { x: 205, d: 1.5, c: '#1f2937' }, { x: 224, d: 2.0, c: '#d6b36a' }, { x: 240, d: 0.25, c: '#b98a56' },
  { x: 190, d: 1.25, c: '#b98a56' }, { x: 220, d: 1.75, c: '#d6b36a' },
];

function PressScene() {
  const stack = useRef<SVGGElement>(null);
  const countEl = useRef<HTMLSpanElement>(null);
  const energyEl = useRef<HTMLSpanElement>(null);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const render = (p: number) => {
      const n = Math.min(STACK.length, Math.floor(p * (STACK.length + 0.4)));
      Array.from(stack.current?.children ?? []).forEach((c, i) => c.setAttribute('opacity', i < n ? '1' : '0'));
      if (countEl.current) countEl.current.textContent = String(n);
      if (energyEl.current) energyEl.current.textContent = (15.4 + 6.4 * p).toFixed(1);
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { render(1); return; }

    const RUN = 14000, HOLD = 2500;
    let raf = 0, t0 = performance.now(), running = false;
    const frame = (now: number) => {
      const t = (now - t0) % (RUN + HOLD);
      render(Math.min(1, t / RUN));
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
        <div className="rounded-lg bg-white/85 backdrop-blur px-3 py-1.5 shadow-sm">
          <div className="text-[0.6rem] uppercase tracking-wider text-[#64748b]">Briquettes</div>
          <span ref={countEl} className="text-sm sm:text-base font-semibold" style={display}>0</span>
        </div>
        <div className="rounded-lg bg-white/85 backdrop-blur px-3 py-1.5 shadow-sm">
          <div className="text-[0.6rem] uppercase tracking-wider text-[#64748b]">Energy (MJ/kg)</div>
          <span ref={energyEl} className="text-sm sm:text-base font-semibold" style={display}>15.4</span>
        </div>
      </div>
      <p className="absolute right-3 top-3 text-[0.6rem] text-[#0f172a]/50 z-10">Illustrative animation</p>

      <svg viewBox="0 0 800 340" className="w-full h-auto block" role="img" aria-label="Animation: biomass drops into a hopper, a screw presses it through a heated barrel, and briquettes stack up">
        <defs>
          <linearGradient id="bq-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fef3c7" stopOpacity="0.7" />
            <stop offset="1" stopColor="#ffedd5" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="bq-steel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#e2e8f0" />
            <stop offset="1" stopColor="#94a3b8" />
          </linearGradient>
          <clipPath id="bq-barrel-clip"><rect x="138" y="168" width="312" height="48" rx="6" /></clipPath>
        </defs>

        <rect width="800" height="340" fill="url(#bq-sky)" />
        <rect y="292" width="800" height="48" fill="#d9c9a8" opacity="0.7" />

        {/* frame and legs */}
        <rect x="120" y="228" width="400" height="12" rx="3" fill="#475569" />
        <rect x="140" y="240" width="14" height="52" fill="#64748b" />
        <rect x="486" y="240" width="14" height="52" fill="#64748b" />

        {/* motor + belt */}
        <rect x="52" y="168" width="64" height="58" rx="8" fill="#0d9488" />
        {[0, 1, 2, 3].map((i) => <line key={i} x1="62" y1={178 + i * 11} x2="106" y2={178 + i * 11} stroke="#0f766e" strokeWidth="3" strokeLinecap="round" />)}
        <circle cx="124" cy="197" r="13" fill="#334155" />
        <circle cx="124" cy="197" r="5" fill="#94a3b8" />

        {/* hopper */}
        <path d="M172,108 L268,108 L240,164 L200,164 Z" fill="url(#bq-steel)" stroke="#64748b" strokeWidth="2" />
        <rect x="168" y="103" width="104" height="7" rx="3" fill="#cbd5e1" stroke="#64748b" />
        {grains.map((g, i) => (
          <circle key={i} className="bq-grain" cx={g.x} cy="26" r="5" fill={g.c} style={{ animationDelay: `${g.d}s` }} />
        ))}

        {/* barrel with turning screw */}
        <rect x="130" y="160" width="328" height="64" rx="10" fill="url(#bq-steel)" stroke="#64748b" strokeWidth="2" />
        <g clipPath="url(#bq-barrel-clip)">
          <rect x="130" y="160" width="328" height="64" fill="#8a97a8" />
          <g className="bq-screw">
            {Array.from({ length: 17 }).map((_, i) => (
              <line key={i} x1={96 + i * 24} y1="216" x2={112 + i * 24} y2="168" stroke="#3b4658" strokeWidth="7" strokeLinecap="round" />
            ))}
          </g>
        </g>

        {/* heating coil */}
        <rect className="bq-coil" x="396" y="156" width="54" height="72" rx="6" fill="#f97316" opacity="0.55" />
        {[0, 1, 2, 3, 4].map((i) => <line key={i} x1={404 + i * 10} y1="158" x2={404 + i * 10} y2="226" stroke="#c2410c" strokeWidth="3" />)}

        {/* die and extruding briquette */}
        <rect x="458" y="170" width="34" height="44" rx="4" fill="#475569" stroke="#334155" strokeWidth="1.5" />
        <rect className="bq-extrude" x="492" y="178" width="92" height="28" rx="6" fill="#2a211b" stroke="#0f0b09" />

        {/* finished stack */}
        <g ref={stack}>
          {STACK.map((s, i) => (
            <g key={i} opacity="0" style={{ transition: 'opacity .5s' }}>
              <rect x={s.x} y={s.y} width="54" height="24" rx="6" fill="#2a211b" stroke="#0f0b09" />
              <rect x={s.x + 6} y={s.y + 4} width="30" height="4" rx="2" fill="#fff" opacity="0.15" />
            </g>
          ))}
        </g>

        {/* labels */}
        <g className="bq-label" fill="#475569" fontFamily="Inter, sans-serif" textAnchor="middle">
          <text x="340" y="112">Feed hopper</text>
          <text x="300" y="256">Screw + barrel</text>
          <text x="423" y="256">Heater</text>
          <text x="684" y="318">Briquettes</text>
        </g>
      </svg>
    </div>
  );
}

/* ───────────── page ───────────── */

export default function BriquettePage() {
  const [zoom, setZoom] = useState<string | null>(null);
  const hasVideos = Q.videos.length > 0;
  const maxV = Q.results.max;

  return (
    <div>
      <style>{`
        .bq-label { font-size: 12px; }
        @media (max-width: 640px) { .bq-label { font-size: 21px; } }
        .bq-grain { animation: bq-grain 2.6s ease-in infinite; opacity: 0; }
        @keyframes bq-grain { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 1; } 80% { transform: translateY(112px); opacity: 1; } 100% { transform: translateY(124px); opacity: 0; } }
        .bq-screw { animation: bq-screw .9s linear infinite; }
        @keyframes bq-screw { from { transform: translateX(0); } to { transform: translateX(24px); } }
        .bq-coil { animation: bq-coil 1.8s ease-in-out infinite alternate; }
        @keyframes bq-coil { from { opacity: 0.3; } to { opacity: 0.75; } }
        .bq-extrude { transform-box: fill-box; transform-origin: 0 50%; animation: bq-extrude 3.2s ease-out infinite; }
        @keyframes bq-extrude {
          0% { transform: scaleX(0.02); opacity: 1; }
          70% { transform: scaleX(0.62) translateY(0); opacity: 1; }
          82% { transform: scaleX(0.62) translateY(0); opacity: 1; }
          100% { transform: scaleX(0.62) translateY(70px) rotate(10deg); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) { .bq-grain, .bq-screw, .bq-coil, .bq-extrude { animation: none; } .bq-grain { opacity: 0.8; } .bq-extrude { transform: scaleX(0.6); } }
      `}</style>

      {/* ── Hero ── */}
      <section className="pt-24 md:pt-28 pb-10 px-6">
        <div className="max-w-6xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#ff6b5b] transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
          <Reveal>
            <div className="flex flex-wrap gap-2 mb-4">
              {['Renewable Energy', 'Biomass', 'Biochar', 'Lab Research'].map((t) => <Tag key={t}>{t}</Tag>)}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a1a2e] mb-4" style={display}>
              <span className="gradient-text">{Q.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-[#64748b] max-w-3xl leading-relaxed mb-2">{Q.tagline}</p>
            <p className="text-sm text-[#64748b] mb-6">{Q.org} · {Q.period}</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {hasVideos && (
                <a href="#videos" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white hover:shadow-[0_8px_24px_rgba(255,107,91,0.25)] transition-all">
                  <Play className="w-4 h-4" fill="currentColor" /> Watch the timelapse
                </a>
              )}
              <a href="#restore" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${hasVideos ? 'glass-card text-[#1a1a2e] hover:text-[#ff6b5b]' : 'bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white hover:shadow-[0_8px_24px_rgba(255,107,91,0.25)]'}`}>
                See the machine revival
              </a>
              <a href="#results" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass-card text-[#1a1a2e] hover:text-[#ff6b5b] transition-colors">See the results</a>
            </div>
          </Reveal>
          <PressScene />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-6 pb-6">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {Q.stats.map((s) => (
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
      <Section label="The question" title={Q.problem.heading}>
        <Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {Q.problem.points.map((p, i) => (
              <div key={i} className="glass-card rounded-xl p-5">
                <div className="text-sm font-semibold gradient-text mb-2" style={display}>0{i + 1}</div>
                <p className="text-[#64748b] leading-relaxed text-sm">{p}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── How it's made ── */}
      <Section label="How it works" title="From loose biomass to a solid fuel block">
        <Reveal>
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {Q.steps.map((s, i) => (
                <div key={s.title} className="glass-card rounded-xl p-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff6b5b] to-[#14b8a6] text-white text-sm font-semibold flex items-center justify-center mb-3">{i + 1}</div>
                  <h3 className="font-semibold text-[#1a1a2e] mb-1" style={display}>{s.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 glass-card rounded-xl p-5">
              <h3 className="font-semibold text-[#1a1a2e] mb-3" style={display}>Inside the screw-extruder machine</h3>
              <dl className="divide-y divide-[#e2e8f0]">
                {Q.machineParts.map(([k, v]) => (
                  <div key={k} className="py-2 flex gap-3 text-sm">
                    <dt className="w-32 flex-shrink-0 text-[#1a1a2e] font-medium">{k}</dt>
                    <dd className="text-[#64748b]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Restoration highlight ── */}
      <section id="restore" className="py-10 px-6 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden border border-[#ff6b5b]/25 bg-gradient-to-br from-[#fff7f5] via-white to-[#f0fdfa] p-5 md:p-8">
              <span className="inline-block text-[0.7rem] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#ff6b5b] text-white mb-3">{Q.restore.label}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-2" style={display}>{Q.restore.title}</h3>
              <p className="text-[#64748b] leading-relaxed max-w-3xl mb-6">{Q.restore.intro}</p>
              <div className="grid md:grid-cols-3 gap-4">
                {Q.restore.stages.map((s, i) => (
                  <div key={s.title} className="bg-white/80 rounded-2xl overflow-hidden border border-white shadow-sm flex flex-col">
                    <button onClick={() => setZoom(s.image)} className="relative block aspect-[4/3] overflow-hidden cursor-zoom-in">
                      <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      <span className="absolute left-3 top-3 w-7 h-7 rounded-full bg-[#ff6b5b] text-white text-xs font-bold flex items-center justify-center shadow">{i + 1}</span>
                    </button>
                    <div className="p-4">
                      <p className="text-[0.7rem] font-mono uppercase tracking-wider gradient-text mb-1" style={display}>{s.phase}</p>
                      <h4 className="font-semibold text-[#1a1a2e] mb-1" style={display}>{s.title}</h4>
                      <p className="text-sm text-[#64748b] leading-relaxed">{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Videos ── */}
      {hasVideos && (
        <Section id="videos" label="Watch" title="The work, sped up">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {Q.videos.map((v) => (
              <Reveal key={v.id} className={v.short ? '' : 'col-span-2 lg:col-span-1'}>
                <VideoCard id={v.id} title={v.title} vertical={!!v.short} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ── Feedstock ── */}
      <Section label="The ingredients" title="Three raw materials, three different fates">
        <Reveal>
          <div className="grid lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 space-y-3">
              {Q.feedstock.map((f) => (
                <div key={f.name} className="glass-card rounded-xl p-5 flex gap-4">
                  <span className="self-start w-[5.5rem] flex-shrink-0 text-center text-[0.65rem] font-mono uppercase tracking-wider px-2 py-1 rounded-full bg-[#14b8a6]/15 text-[#0f766e]">{f.role}</span>
                  <div>
                    <h3 className="font-semibold text-[#1a1a2e] mb-1" style={display}>{f.name}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{f.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 grid gap-3 content-start">
              {Q.feedPhotos.map((p) => (
                <figure key={p.src} className="glass-card rounded-xl overflow-hidden">
                  <button onClick={() => setZoom(p.src)} className="block w-full cursor-zoom-in">
                    <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-auto max-h-[240px] object-cover" />
                  </button>
                  <figcaption className="px-4 py-2 text-xs text-[#64748b]">{p.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Testing ── */}
      <Section label="Measuring" title="How we tested the energy content">
        <Reveal>
          <p className="text-[#64748b] leading-relaxed max-w-3xl mb-6">{Q.testing.intro}</p>
          <ul className="space-y-3 max-w-3xl mb-6">
            {Q.testing.points.map((t) => (
              <li key={t} className="flex gap-3 text-sm text-[#64748b] leading-relaxed"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff6b5b] flex-shrink-0" />{t}</li>
            ))}
          </ul>
          <div className="grid sm:grid-cols-2 gap-4">
            {Q.testing.photos.map((p) => (
              <figure key={p.src} className="glass-card rounded-xl overflow-hidden">
                <button onClick={() => setZoom(p.src)} className="block w-full aspect-[16/9] overflow-hidden cursor-zoom-in">
                  <img src={p.src} alt={p.caption} loading="lazy" className="w-full h-full object-cover" />
                </button>
                <figcaption className="px-4 py-2 text-xs text-[#64748b]">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* ── Results ── */}
      <Section id="results" label="Results" title="The best blends hold about 40% more energy">
        <Reveal>
          <p className="text-[#64748b] mb-6 max-w-3xl">{Q.results.intro}</p>
          <div className="glass-card rounded-2xl p-5 md:p-6">
            <div className="flex items-baseline justify-between mb-4">
              <h3 className="font-semibold text-[#1a1a2e] text-sm" style={display}>Energy content by recipe (MJ/kg)</h3>
              <span className="text-[0.7rem] text-[#94a3b8]">higher is better</span>
            </div>
            <div className="space-y-4">
              {Q.results.bars.map((b) => (
                <div key={b.label}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-0.5 mb-1">
                    <span className={`text-sm ${b.best ? 'font-semibold text-[#1a1a2e]' : 'text-[#475569]'}`}>
                      {b.label} {b.best && <span className="ml-1 text-[0.65rem] font-mono uppercase tracking-wider text-[#14b8a6]">best blend</span>}
                    </span>
                    <span className="text-xs text-[#64748b] whitespace-nowrap">{b.note}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1 h-3 rounded-full bg-[#e2e8f0] overflow-hidden">
                      <div className={`h-full rounded-full ${b.best ? 'bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6]' : 'bg-[#cbd5e1]'}`} style={{ width: `${(b.value / maxV) * 100}%` }} />
                    </div>
                    <span className={`w-10 text-right text-sm tabular-nums ${b.best ? 'font-bold text-[#1a1a2e]' : 'text-[#64748b]'}`}>{b.value.toFixed(1)}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[0.7rem] text-[#94a3b8] mt-4">Best reading per recipe. The lab reports J/g; 1 J/g = 1 kJ/kg, so 21,800 J/g = 21.8 MJ/kg.</p>
          </div>
          <ul className="mt-5 space-y-2.5">
            {Q.results.notes.map((n) => (
              <li key={n} className="flex gap-3 text-sm text-[#64748b] leading-relaxed"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#14b8a6] flex-shrink-0" />{n}</li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* ── Challenges ── */}
      <Section label="Honest look" title="What went wrong, and what we learned">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {Q.challenges.map((c) => (
              <div key={c.title} className="glass-card rounded-xl overflow-hidden border-t-2 border-[#ff6b5b] flex flex-col sm:flex-row">
                {c.image && (
                  <button onClick={() => setZoom(c.image!)} className="relative sm:w-2/5 aspect-[16/9] sm:aspect-auto sm:min-h-[150px] overflow-hidden cursor-zoom-in flex-shrink-0">
                    <img src={c.image} alt={c.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  </button>
                )}
                <div className="p-5">
                  <h3 className="font-semibold text-[#1a1a2e] mb-1 text-sm" style={display}>{c.title}</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-[#1a1a2e] mb-3" style={display}>Safety lessons</h3>
              <ul className="space-y-2.5">
                {Q.lessons.map((l) => (
                  <li key={l} className="flex gap-3 text-sm text-[#64748b] leading-relaxed"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#ff6b5b] flex-shrink-0" />{l}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="font-semibold text-[#1a1a2e] mb-3" style={display}>Next steps</h3>
              <ul className="space-y-2.5">
                {Q.next.map((n) => (
                  <li key={n} className="flex gap-3 text-sm text-[#64748b] leading-relaxed"><span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#14b8a6] flex-shrink-0" />{n}</li>
                ))}
              </ul>
            </div>
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
                {Q.team.map((m) => (
                  <div key={m} className="flex items-center gap-3 p-3 rounded-xl glass-card">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center gradient-text text-xs font-semibold">
                      {m.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <span className="text-sm font-medium text-[#1a1a2e]">{m}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-2" style={display}>Supervisors at NAST</h3>
              <ul className="text-sm text-[#64748b] space-y-1">{Q.supervisors.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-3" style={display}>With thanks to</h3>
              <ul className="space-y-3">
                {Q.thanks.map((p) => (
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
          <Link to="/projects/biogas-study" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white">
            See the sister project: Biogas Feasibility Study
          </Link>
        </div>
      </section>

      <Lightbox src={zoom} onClose={() => setZoom(null)} />
    </div>
  );
}
