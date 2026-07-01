import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useReveal, SectionLabel, SectionTitle, Divider, Card, Button } from '../components/Shared';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/Siddhant-ydv-git/', icon: Github },
  { name: 'Instagram', href: 'https://www.instagram.com/siddhant4815/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/siddhant-yadav-620308392/', icon: Linkedin },
];

export default function Contact() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl glass-card text-[#1a1a2e] text-sm focus:outline-none focus:border-[#ff6b5b] transition-colors duration-300 placeholder:text-[#94a3b8]';

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="reveal">
          <SectionLabel>Contact</SectionLabel>
          <SectionTitle>Get in Touch</SectionTitle>
          <Divider />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            {submitted && (
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-[#ff6b5b]/10 to-[#14b8a6]/10 border border-[#14b8a6] text-[#14b8a6] text-sm">
                Message sent successfully! I&apos;ll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-[#64748b] mb-1.5">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#64748b] mb-1.5">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClass}
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#64748b] mb-1.5">Subject</label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={inputClass}
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#64748b] mb-1.5">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${inputClass} h-32 resize-none`}
                  placeholder="Your message..."
                  required
                />
              </div>
              <Button variant="primary" onClick={() => {}} className="w-full justify-center">Send Message</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h4 className="text-base font-semibold mb-4 text-[#1a1a2e]">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center text-[#ff6b5b]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b] mb-0.5">Email</p>
                    <a href="mailto:siddhant@example.com" className="text-sm text-[#1a1a2e] hover:text-[#ff6b5b] transition-colors">siddhant@example.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center text-[#ff6b5b]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b] mb-0.5">Phone</p>
                    <p className="text-sm text-[#1a1a2e]">+977-XXXXXXXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center text-[#ff6b5b]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#64748b] mb-0.5">Location</p>
                    <p className="text-sm text-[#1a1a2e]">Lalitpur, Nepal</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="glass-card rounded-xl h-48 flex items-center justify-center text-[#64748b] text-sm">
              Google Maps Placeholder
            </div>

            <Card>
              <h4 className="text-base font-semibold mb-3 text-[#1a1a2e]">Social Links</h4>
              <div className="flex gap-3">
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
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
