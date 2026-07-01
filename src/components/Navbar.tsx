import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled
            ? 'glass'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <Link to="/" className="text-xl font-bold tracking-tight gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
          Siddhant
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-[#ff6b5b] after:to-[#14b8a6] after:transition-all after:duration-300 ${
                  location.pathname === link.path
                    ? 'text-[#1a1a2e] after:w-full'
                    : 'text-[#64748b] hover:text-[#1a1a2e] after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-[22px] h-[2px] bg-[#1a1a2e] rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-[#1a1a2e] rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-[2px] bg-[#1a1a2e] rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      <div
        className={`fixed top-16 left-0 right-0 z-40 glass p-6 flex flex-col gap-4 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-base font-medium transition-colors duration-200 ${
              location.pathname === link.path ? 'gradient-text' : 'text-[#64748b]'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
