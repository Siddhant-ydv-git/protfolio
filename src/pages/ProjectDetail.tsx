import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useReveal, SectionLabel, Tag, Card } from '../components/Shared';
import { projects } from '../data/portfolio';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const ref = useReveal();

  if (!project) {
    return (
      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4 text-[#1a1a2e]">Project not found</h2>
        <Link to="/projects" className="gradient-text hover:underline">Back to Projects</Link>
      </section>
    );
  }

  return (
    <section className="py-24 px-6">
      <div ref={ref} className="reveal max-w-4xl mx-auto">
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#ff6b5b] transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        {/* Banner image with fallback */}
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-2xl mb-8"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const next = e.currentTarget.nextElementSibling as HTMLElement;
              if (next) next.style.display = 'flex';
            }}
          />
        ) : null}
        <div
          className="w-full h-64 md:h-80 rounded-2xl mb-8 bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] items-center justify-center text-[#94a3b8] text-sm"
          style={{ display: project.image ? 'none' : 'flex' }}
        >
          {project.title}
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[#1a1a2e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          {project.title}
        </h1>

        <div className="space-y-8 mt-8">
          <div>
            <SectionLabel>Overview</SectionLabel>
            <p className="text-[#64748b] leading-relaxed">{project.overview}</p>
          </div>

          <div>
            <SectionLabel>Objectives</SectionLabel>
            <ul className="space-y-2">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-[#64748b]">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[#ff6b5b] to-[#14b8a6] flex-shrink-0" />
                  {obj}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <SectionLabel>Methodology</SectionLabel>
            <p className="text-[#64748b] leading-relaxed">{project.methodology}</p>
          </div>

          <div>
            <SectionLabel>Outcomes & Results</SectionLabel>
            <p className="text-[#64748b] leading-relaxed">{project.outcomes}</p>
          </div>

          <div>
            <SectionLabel>Team</SectionLabel>
            <div className="flex flex-wrap gap-4">
              {project.team.map((member) => (
                <div key={member} className="flex items-center gap-3 p-3 rounded-xl glass-card glass-hover">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center gradient-text text-xs font-semibold">
                    {member.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span className="text-sm font-medium text-[#1a1a2e]">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium glass-card text-[#1a1a2e] hover:border-[#ff6b5b] transition-all duration-300">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
