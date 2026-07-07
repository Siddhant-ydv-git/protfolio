import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal, SectionLabel, SectionTitle, Divider, Tag, TechPill } from '../components/Shared';
import { programs } from '../data/portfolio';

const categories = ['All', 'Space', 'Education'];

export default function Programs() {
  const [filter, setFilter] = useState('All');
  const ref = useReveal();
  const filtered = filter === 'All' ? programs : programs.filter((p) => p.category === filter);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionLabel>Programs & Events</SectionLabel>
          <SectionTitle>Programs & Events</SectionTitle>
          <Divider />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white'
                  : 'glass-card text-[#64748b] hover:text-[#1a1a2e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((program) => (
            <Link
              key={program.slug}
              to={`/programs/${program.slug}`}
              className="block glass-card overflow-hidden card-lift group"
            >
              {/* Real image */}
              {program.image && (
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-44 object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
              )}
              {/* Fallback */}
              <div
                className="w-full h-44 bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] items-center justify-center text-[#94a3b8] text-sm"
                style={{ display: program.image ? 'none' : 'flex' }}
              >
                {program.title}
              </div>

              <div className="p-6">
                <Tag>{program.category}</Tag>
                <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-[#ff6b5b] transition-colors text-[#1a1a2e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  {program.title}
                </h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-3">{program.shortDesc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {program.tags.map((t) => <TechPill key={t}>{t}</TechPill>)}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-medium gradient-text group-hover:underline">
                  View Details <span>&rarr;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
