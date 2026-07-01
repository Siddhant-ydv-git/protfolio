import { useReveal, SectionLabel, SectionTitle, Divider, Card, Button } from '../components/Shared';

const skills = ['3D Printing', 'SolidWorks', 'AutoCAD', 'ANSYS', 'Python', 'MATLAB', 'Arduino', 'Raspberry Pi'];

const education = [
  { degree: 'B.E. in Mechanical Engineering', institution: 'Institute of Engineering, Pulchowk Campus, Tribhuvan University', period: '2021 – 2025', detail: 'Graduated with focus on unmanned systems, robotics, and alternative energy research. Active in campus innovation programs and research projects.' },
  { degree: 'Higher Secondary (10+2)', institution: 'Science Stream, Nepal', period: '2019 – 2021', detail: 'Physics, Chemistry, Mathematics with focus on engineering fundamentals.' },
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
              <img src="/photo.jpg.jpeg" alt="Siddhant Yadav" style={{width: '200px', borderRadius: '12px'}} />
            <p className="text-[#64748b] leading-relaxed mb-4">
              I am a Mechanical Engineer graduated from Pulchowk Campus, Institute of Engineering, Tribhuvan University, Nepal. My passion lies at the intersection of mechanical design, electronics, and intelligent systems, building autonomous platforms that operate in challenging real-world environments.
            </p>
          
            <p className="text-[#64748b] leading-relaxed mb-4">
              I'm employed as Management Trainee at Gorkha Brewery Pvt. Ltd., Part of Carlsberg Group.
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
                <div key={skill} className="flex items-center gap-3 p-3 rounded-xl glass-card glass-hover transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ff6b5b]/20 to-[#14b8a6]/20 flex items-center justify-center text-[#ff6b5b] text-xs font-bold" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                    {skill.charAt(0)}
                  </div>
                  <span className="text-sm font-medium text-[#1a1a2e]">{skill}</span>
                </div>
              ))}
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
