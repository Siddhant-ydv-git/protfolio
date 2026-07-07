import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReveal, SectionLabel, SectionTitle, Divider, Tag, TechPill, Card } from '../components/Shared';
import { projects, testimonials, organizations, blogs } from '../data/portfolio';

const typingWords = ['Engineer', 'Maker', 'Researcher', 'Explorer'];

function TypingText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typingWords[wordIndex];
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex === word.length) {
        setTimeout(() => setIsDeleting(true), 1800);
        return;
      }
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typingWords.length);
        return;
      }
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <span>
      {typingWords[wordIndex].substring(0, charIndex)}
      <span className="typing-cursor" />
    </span>
  );
}

function HighlightsStrip() {
  const ref = useReveal();
  const items = [
    { label: 'Projects', value: '5+', path: '/projects' },
    { label: 'Publications', value: '2', path: '/publications' },
    { label: 'Awards', value: '6+', path: '/about' },
  ];
  return (
    <div ref={ref} className="reveal grid grid-cols-3 gap-4 max-w-2xl mx-auto">
      {items.map((item) => (
        <Link key={item.label} to={item.path} className="text-center p-6 rounded-xl glass-card glass-hover transition-all duration-300 group">
          <div className="text-3xl font-bold mb-1 gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.value}</div>
          <div className="text-sm text-[#64748b] group-hover:text-[#1a1a2e] transition-colors">{item.label}</div>
        </Link>
      ))}
    </div>
  );
}

function FeaturedBlog() {
  const ref = useReveal();
  const blog = blogs[0];

  return (
    <div ref={ref} className="reveal max-w-5xl mx-auto">
      <SectionLabel>Featured Blog</SectionLabel>
      <SectionTitle>{blog.title}</SectionTitle>
      <Divider />
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff6b5b] to-[#14b8a6] blur-2xl opacity-20 scale-105" />
            <div className="relative rounded-3xl overflow-hidden border border-black/5 shadow-xl aspect-[4/3] bg-gradient-to-br from-[#ff6b5b]/10 to-[#14b8a6]/10 flex items-center justify-center">
              {blog.image ? (
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const next = e.currentTarget.nextElementSibling as HTMLElement;
                    if (next) next.style.display = 'flex';
                  }}
                />
              ) : null}
              <div
                className="w-full h-full items-center justify-center text-[#94a3b8] text-sm"
                style={{ display: blog.image ? 'none' : 'flex' }}
              >
                {blog.category}
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#ff6b5b]/10 text-[#ff6b5b]">{blog.category}</span>
            <span className="text-xs text-[#64748b]">{blog.date}</span>
            <span className="text-xs text-[#64748b]">·</span>
            <span className="text-xs text-[#64748b]">{blog.readTime}</span>
          </div>
          <p className="text-base text-[#64748b] leading-relaxed mb-6">{blog.excerpt}</p>
          <Link
            to={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white hover:shadow-[0_8px_24px_rgba(255,107,91,0.25)] transition-all duration-300 btn-ripple hover:scale-[1.02]"
          >
            Read This Blog
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeaturedProject() {
  const ref = useReveal();
  const project = projects[0];
  return (
    <div ref={ref} className="reveal max-w-4xl mx-auto">
      <SectionLabel>Featured Project</SectionLabel>
      <SectionTitle>ANVESAK</SectionTitle>
      <Divider />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative rounded-2xl overflow-hidden h-64 bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                const next = e.currentTarget.nextElementSibling as HTMLElement;
                if (next) next.style.display = 'flex';
              }}
            />
          ) : null}
          <div
            className="w-full h-full items-center justify-center text-[#94a3b8] text-sm"
            style={{ display: project.image ? 'none' : 'flex' }}
          >
            ANVESAK USV
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Tag>USV/Robotics</Tag>
          <p className="text-[#64748b] mt-3 mb-4 leading-relaxed">{project.shortDesc}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((t) => <TechPill key={t}>{t}</TechPill>)}
          </div>
          <Link to="/projects/anvesak" className="inline-flex items-center gap-2 text-sm font-medium gradient-text hover:underline">
            View Details <span className="text-lg">&rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function RecentExperience() {
  const ref = useReveal();
  const experiences = [
    { date: 'May 2026 – June 2026', role: 'Management Trainee', org: 'Gorkha Brewery Pvt. Ltd. | Part of Carlsberg Group', location: 'Kathmandu, Nepal' },
    { date: '2023 – 2024', role: 'NAST Intern', org: 'Nepal Academy of Science & Technology', location: 'Lalitpur, Nepal' },
    { date: '2022 – 2023', role: 'HVAC Intern', org: 'Thermopharm Engineering', location: 'Kathmandu, Nepal' },
  ];
  return (
    <div ref={ref} className="reveal max-w-4xl mx-auto">
      <SectionLabel>Recent Experience</SectionLabel>
      <SectionTitle>Where I've Been</SectionTitle>
      <Divider />
      <div className="relative pl-8">
        <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#ff6b5b] to-[#14b8a6]" />
        {experiences.map((exp, i) => (
          <div key={i} className="relative pb-6 last:pb-0">
            <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-[#ff6b5b] to-[#14b8a6] -translate-x-[5px]" />
            <p className="font-mono text-xs gradient-text mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>{exp.date}</p>
            <h4 className="text-base font-semibold text-[#1a1a2e]">{exp.role}</h4>
            <p className="text-sm text-[#64748b]">{exp.org}</p>
            <p className="text-xs text-[#94a3b8] mt-0.5">{exp.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CollaboratorsMarquee() {
  const ref = useReveal();
  const items = [...organizations, ...organizations];

  return (
    <div ref={ref} className="reveal max-w-5xl mx-auto">
      <SectionLabel>Collaborators</SectionLabel>
      <SectionTitle>Organizations I've Worked With</SectionTitle>
      <Divider />
      <div className="marquee-wrap relative overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#fefefe] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#fefefe] to-transparent pointer-events-none" />
        <div className="marquee gap-8 py-4">
          {items.map((org, i) => (
            <div
              key={`${org.name}-${i}`}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-2xl glass-card glass-hover transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/60 flex items-center justify-center overflow-hidden flex-shrink-0">
                <img
                  src={org.logo}
                  alt={org.name}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    img.parentElement!.classList.add('gradient-text', 'font-bold', 'text-lg');
                    img.parentElement!.textContent = org.name.charAt(0);
                  }}
                />
              </div>
              <span className="text-base font-medium text-[#1a1a2e] whitespace-nowrap" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {org.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const ref = useReveal();

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <div ref={ref} className="reveal max-w-3xl mx-auto text-center">
      <SectionLabel>Testimonials</SectionLabel>
      <SectionTitle>What People Say</SectionTitle>
      <Divider />
      <div className="relative overflow-hidden">
        <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-full px-4">
              <div className="flex justify-center mb-5">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#ff6b5b] to-[#14b8a6] blur-md opacity-30 scale-110" />
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow-lg bg-gradient-to-br from-[#ff6b5b]/15 to-[#14b8a6]/15 flex items-center justify-center">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = 'none';
                        img.parentElement!.classList.add('gradient-text', 'font-bold', 'text-2xl');
                        img.parentElement!.textContent = t.name.charAt(0);
                      }}
                    />
                  </div>
                </div>
              </div>
              <blockquote className="text-lg text-[#64748b] leading-relaxed mb-4 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <p className="text-sm font-semibold text-[#1a1a2e]">{t.name}</p>
              <p className="text-xs text-[#64748b]">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? 'bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] w-6' : 'bg-[#e2e8f0]'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
        <div className="sonar-container">
          <div className="sonar-ring" />
          <div className="sonar-ring" />
          <div className="sonar-ring" />
          <div className="sonar-ring" />
          <div className="sonar-ring" />
        </div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-[500px] h-[500px] bg-[#ff6b5b] top-20 -right-40 opacity-30" />
          <div className="blob w-[400px] h-[400px] bg-[#14b8a6] bottom-20 -left-20 opacity-30" style={{ animationDelay: '-4s' }} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-12">
          {/* Floating Photo */}
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff6b5b] to-[#14b8a6] blur-2xl opacity-30 scale-110" />
            <div
              className="relative w-56 h-64 md:w-72 md:h-80 rounded-3xl overflow-hidden border-2 border-white/40 shadow-2xl"
              style={{ animation: 'photoFloat 6s ease-in-out infinite' }}
            >
              <img
                src="/mine.jpg"
                alt="Siddhant Yadav"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                  (e.currentTarget.parentElement as HTMLElement).classList.add('flex','items-center','justify-center','bg-gradient-to-br','from-[#ff6b5b]/20','to-[#14b8a6]/20');
                }}
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-3 rounded-3xl border border-[#ff6b5b]/20 -z-10" />
            <div className="absolute -inset-6 rounded-3xl border border-[#14b8a6]/10 -z-10" />
          </div>

          <div className="flex-1">
          <p className="font-mono text-sm gradient-text mb-4 opacity-0 animate-[fadeUp_0.8s_0.3s_forwards]" style={{ fontFamily: 'Space Grotesk, monospace' }}>
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 opacity-0 animate-[fadeUp_0.8s_0.5s_forwards] text-[#1a1a2e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Siddhant <span className="gradient-text">Yadav</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#64748b] mb-2 opacity-0 animate-[fadeUp_0.8s_0.7s_forwards]">
            <TypingText />
          </p>
          <p className="text-base text-[#64748b] mb-8 opacity-0 animate-[fadeUp_0.8s_0.8s_forwards]">
            Mechanical Engineering · Unmanned Systems · Space & Robotics
          </p>
          <div className="flex gap-4 opacity-0 animate-[fadeUp_0.8s_0.9s_forwards]">
            <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white hover:shadow-[0_8px_24px_rgba(255,107,91,0.25)] transition-all duration-300 btn-ripple hover:scale-[1.02]">
              View My Work
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium glass-card text-[#1a1a2e] hover:border-[#ff6b5b] transition-all duration-300">
              About Me
            </Link>
          </div>
          </div>{/* end flex-1 */}
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-[fadeUp_0.8s_1.2s_forwards]">
          <span className="text-[0.65rem] text-[#64748b] tracking-[0.1em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#ff6b5b] to-transparent animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>
        <style>{`
          @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes scrollPulse { 0%, 100% { opacity: 0.3; transform: scaleY(0.6); } 50% { opacity: 1; transform: scaleY(1); } }
        `}</style>
      </section>

      {/* Highlights */}
      <section className="py-20 px-6">
        <HighlightsStrip />
      </section>

      {/* Featured Blog */}
      <section className="py-20 px-6">
        <FeaturedBlog />
      </section>

      {/* Featured Project */}
      <section className="py-20 px-6">
        <FeaturedProject />
      </section>

      {/* Recent Experience */}
      <section className="py-20 px-6">
        <RecentExperience />
      </section>

      {/* Collaborators Marquee */}
      <section className="py-20 px-6 overflow-hidden">
        <CollaboratorsMarquee />
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <TestimonialsCarousel />
      </section>
    </>
  );
}
