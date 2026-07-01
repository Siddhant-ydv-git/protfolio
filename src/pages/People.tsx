import { useReveal, SectionLabel, SectionTitle, Divider, PlaceholderImage, Card } from '../components/Shared';
import { collaborators, testimonials } from '../data/portfolio';

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? 'star-filled' : 'star-empty'}>&#9733;</span>
      ))}
    </div>
  );
}

export default function People() {
  const collabRef = useReveal();
  const testRef = useReveal();

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Collaborators */}
        <div ref={collabRef} className="reveal mb-16">
          <SectionLabel>People</SectionLabel>
          <SectionTitle>Collaborators & Mentors</SectionTitle>
          <Divider />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {collaborators.map((person) => (
              <Card key={person.name}>
                <PlaceholderImage label={person.name} className="w-20 h-20 rounded-full mb-4" />
                <h4 className="text-base font-semibold mb-1 text-[#1a1a2e]">{person.name}</h4>
                <p className="text-sm gradient-text mb-1">{person.role}</p>
                <p className="text-sm text-[#64748b]">{person.institution}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div ref={testRef} className="reveal">
          <SectionLabel>Testimonials</SectionLabel>
          <SectionTitle>What They Say</SectionTitle>
          <Divider />
          <div className="space-y-6">
            {testimonials.map((t, i) => (
              <Card key={i}>
                <div className="flex items-start gap-4">
                  <PlaceholderImage label={t.name} className="w-14 h-14 rounded-full flex-shrink-0" />
                  <div className="flex-1">
                    <Stars count={t.rating} />
                    <blockquote className="text-[#64748b] leading-relaxed mt-3 mb-3 italic">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="text-sm font-semibold text-[#1a1a2e]">{t.name}</p>
                    <p className="text-xs text-[#64748b]">{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
