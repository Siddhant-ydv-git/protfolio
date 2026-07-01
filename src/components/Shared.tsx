import { useEffect, useRef } from 'react';

export function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.15em] uppercase mb-2 gradient-text" style={{ fontFamily: 'Space Grotesk, monospace' }}>
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-[#1a1a2e]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {children}
    </h2>
  );
}

export function Divider() {
  return <div className="w-12 h-[3px] rounded bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] mb-8" />;
}

export function PlaceholderImage({ label, className = '' }: { label: string; className?: string }) {
  return (
    <div className={`glass-card rounded-xl flex items-center justify-center text-[#64748b] text-sm ${className}`}>
      {label}
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block font-mono text-[0.7rem] gradient-text bg-gradient-to-r from-[#ff6b5b]/10 to-[#14b8a6]/10 px-2 py-0.5 rounded" style={{ fontFamily: 'Space Grotesk, monospace' }}>
      {children}
    </span>
  );
}

export function TechPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[0.7rem] text-[#64748b] bg-[#f1f5f9] px-2 py-0.5 rounded border border-[#e2e8f0]" style={{ fontFamily: 'Space Grotesk, monospace' }}>
      {children}
    </span>
  );
}

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass-card glass-hover rounded-xl p-6 card-lift ${className}`}>
      {children}
    </div>
  );
}

export function Button({ children, to, href, onClick, variant = 'primary', className = '', download }: {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
  download?: boolean;
}) {
  const base = `inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 btn-ripple ${className}`;
  const styles = variant === 'primary'
    ? `${base} bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] text-white hover:shadow-[0_8px_24px_rgba(255,107,91,0.25)] hover:scale-[1.02]`
    : `${base} glass-card text-[#1a1a2e] hover:border-[#ff6b5b] hover:text-[#ff6b5b]`;

  if (to) {
    return <a href={to} className={styles}>{children}</a>;
  }
  if (href) {
    return <a href={href} className={styles} {...(download ? { download: true } : {})}>{children}</a>;
  }
  return <button onClick={onClick} className={styles}>{children}</button>;
}
