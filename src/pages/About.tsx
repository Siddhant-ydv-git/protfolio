import { useReveal, SectionLabel, SectionTitle, Divider, Card, Button } from '../components/Shared';
import { Trophy, ExternalLink } from 'lucide-react';

const skills = ['3D Printing', 'SolidWorks', 'AutoCAD', 'ANSYS', 'Python', 'MATLAB', 'Arduino', 'Raspberry Pi'];

// Optional one-line note shown under a skill name (makes that card full width)
const skillNotes: Record<string, string> = {
  '3D Printing': 'Coordinator of 3D Printing Facility at IIEC, Pulchowk Campus',
};

// Skills whose name links to a YouTube playlist
const skillLinks: Record<string, string> = {
  '3D Printing': 'https://www.youtube.com/watch?v=i2u8UZolJiU&list=PLZlRt89OmauU',
  SolidWorks: 'https://www.youtube.com/watch?v=C0pmu8rHkKI&list=PLPRsE4c2QPb0',
};

const awards = [
  { title: 'First Place', detail: 'Team Aasha, World Environment Day Proposal Competition by FSU-2081' },
  { title: 'Winner', detail: 'Theme Matching Award for AquaScan, MechTrix 2082' },
  { title: 'Finalist', detail: 'Team BriqTech, Energy Hackathon 9.0, LOCUS 2026' },
  { title: 'Winner', detail: 'National Astronomy Olympiad; represented Nepal at the 14th International Olympiad on Astronomy and Astrophysics, Colombia (2021)' },
  { title: 'Finalist', detail: 'Hult Prize at IOE Pulchowk Campus' },
  { title: 'Thematic Runner-up', detail: 'Project Demonstration, LOCUS 2026' },
  { title: 'People’s Choice Award', detail: 'NASA’s International Space Apps Challenge 2021' },
];

const education = [
  { degree: 'B.E. in Mechanical Engineering', institution: 'Department of Mechanical and Aerospace Engineering, Pulchowk Campus, Institute of Engineering, Tribhuvan University', period: '2022 - 2026', detail: 'Graduated with focus on unmanned systems, robotics, and alternative energy research. Active in campus innovation programs and research projects.' },
  { degree: 'School Leaving Certificate (SLC)', institution: 'St. Xaviers School, Godavari, Nepal', period: '2019 – 2021', detail: 'Physics, Chemistry, Mathematics, and Computer.' },
  { degree: 'Secondary Education Examination (SEE)', institution: 'Shree Janata Ma. V. Sundarpur, Mahottari, Nepal', period: '2019 – 2021', detail: '' },

];

const languages = [
  { name: 'Maithali', level: 'Native' },
  { name: 'Nepali', level: 'Fluent' },
  { name: 'English', level: 'Fluent' },
  { name: 'Hindi', level: 'Conversational' },
  { name: 'Bhojpuri', level: 'Conversational' },
];

export default function About() {
  const heroRef = useReveal();
  const bioRef = useReveal();
  const skillsRef = useReveal();
  const awardsRef = useReveal();
  const eduRef = useReveal();
  const langRef = useReveal();

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="reveal relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="blob w-96 h-96 bg-[#ff6b5b] top-10 -left-48" />
          <div className="blob w-80 h-80 bg-[#14b8a6] bottom-10 right-10" style={{ animationDelay: '-3s' }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            About <span className="gradient-text">Me</span>
          </h1>
        </div>
      </section>

      {/* Bio + Skills */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div ref={bioRef} className="reveal">
            <SectionLabel>Biography</SectionLabel>
            <SectionTitle>Who I Am</SectionTitle>
            <Divider />
            <p className="text-[#64748b] leading-relaxed mb-4">
              I am a Mechanical Engineer graduated from Pulchowk Campus, Institute of Engineering, Tribhuvan University, Nepal. My passion lies at the intersection of mechanical design, electronics, and intelligent systems, building autonomous platforms that operate in challenging real-world environments.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-4">
              I'm employed as Industrial Solution - Intern at Airbus India Pvt. Ltd.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-4">
              From designing unmanned surface vehicles for river bathymetry to working on research projects related to biomass briquetting and biogas, I thrive on engineering solutions that create tangible impact. My research spans SONAR-based mapping, LiDAR integration, autonomous navigation, and Alternative energy including biogas and biomass briquettes.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-4">
              Beyond engineering, I am passionate about disaster risk management, space exploration, STEAM education and making technology accessible.
            </p>
            <p className="text-[#64748b] leading-relaxed mb-6">
              Also I'm considerably good at managing people and leading organizations and clubs.
            </p>
            <Button href="/cv.pdf" variant="primary" download>Download CV</Button>
          </div>

          <div ref={skillsRef} className="reveal">
            <SectionLabel>Skills</SectionLabel>
            <SectionTitle>Technical Stack</SectionTitle>
            <Divider />
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill} className={`flex items-center gap-3 p-3 rounded-xl glass-card glass-hover transition-all duration-300 ${skillNotes[skill] ? 'col-span-2' : ''}`}>
                  <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center text-[#ff6b5b] text-xs font-bold" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {skill.charAt(0)}
                  </div>
                  <div>
                    {skillLinks[skill] ? (
                      <a
                        href={skillLinks[skill]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#1a1a2e] hover:text-[#ff6b5b] transition-colors"
                      >
                        {skill}
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-[#1a1a2e]">{skill}</span>
                    )}
                    {skillNotes[skill] && <p className="text-xs text-[#64748b] leading-snug mt-0.5">{skillNotes[skill]}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Awards */}
            <div ref={awardsRef} className="reveal mt-12">
              <SectionLabel>Recognition</SectionLabel>
              <SectionTitle>Awards</SectionTitle>
              <Divider />
              <div className="space-y-3">
                {awards.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl glass-card glass-hover transition-all duration-300">
                    <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center text-[#ff6b5b]">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#1a1a2e]">{a.title}</p>
                      <p className="text-sm text-[#64748b] leading-relaxed">{a.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-6">
        <div ref={eduRef} className="reveal max-w-4xl mx-auto">
          <SectionLabel>Education</SectionLabel>
          <SectionTitle>Academic Background</SectionTitle>
          <Divider />
          <div className="relative pl-8">
            <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#ff6b5b] to-[#14b8a6]" />
            {education.map((edu, i) => (
              <div key={i} className="relative pb-8 last:pb-0">
                <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-[#ff6b5b] to-[#14b8a6] -translate-x-[5px]" />
                <p className="font-mono text-xs gradient-text mb-1" style={{ fontFamily: 'Space Grotesk, monospace' }}>{edu.period}</p>
                <h4 className="text-lg font-semibold mb-1 text-[#1a1a2e]">{edu.degree}</h4>
                <p className="text-sm text-[#64748b] mb-2">{edu.institution}</p>
                <p className="text-sm text-[#64748b] leading-relaxed">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-16 px-6">
        <div ref={langRef} className="reveal max-w-4xl mx-auto">
          <SectionLabel>Languages</SectionLabel>
          <SectionTitle>Language Proficiency</SectionTitle>
          <Divider />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {languages.map((lang) => (
              <Card key={lang.name}>
                <h4 className="text-base font-semibold mb-2 text-[#1a1a2e]">{lang.name}</h4>
                <p className="text-sm text-[#64748b]">{lang.level}</p>
                <div className="mt-3 h-1.5 bg-[#e2e8f0] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#ff6b5b] to-[#14b8a6] rounded-full transition-all duration-700"
                    style={{ width: lang.level === 'Native' ? '100%' : lang.level === 'Fluent' ? '85%' : '60%' }}
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
