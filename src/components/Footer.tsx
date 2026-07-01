import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Siddhant-ydv-git/', icon: Github },
  { name: 'Instagram', href: 'https://www.instagram.com/siddhant4815/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/siddhant-yadav-620308392/', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold tracking-tight gradient-text" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Siddhant
            </Link>
            <p className="text-[#64748b] text-sm mt-3 leading-relaxed">
              Mechanical Engineer building autonomous systems for the real world. Passionate about space, sustainability, and making technology accessible.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#1a1a2e] mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: 'About', path: '/about' },
                { label: 'Projects', path: '/projects' },
                { label: 'Blog', path: '/blog' },
                { label: 'Publications', path: '/publications' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-sm text-[#64748b] hover:text-[#ff6b5b] transition-colors duration-200">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-[#1a1a2e] mb-3">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass-card glass-hover flex items-center justify-center text-[#64748b] hover:text-[#ff6b5b] transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
