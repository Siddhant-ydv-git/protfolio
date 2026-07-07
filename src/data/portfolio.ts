export const projects = [
  {
    slug: 'anvesak',
    title: 'ANVESAK',
    image: '/projects/anvesak.jpg',
    shortDesc: 'Unmanned Surface Vehicle for river bathymetry and mapping using SONAR and LiDAR to generate 3D maps.',
    tags: ['USV/Robotics', 'SONAR', 'LiDAR', 'ROS'],
    category: 'USV/Robotics',
    overview: 'ANVESAK is an Unmanned Surface Vehicle (USV) designed for autonomous river bathymetry surveying. It integrates SONAR for depth measurement and LiDAR for above-water topographic mapping, generating comprehensive 3D maps of river systems. The platform enables safe, efficient, and repeatable hydrographic surveys in challenging river environments across Nepal.',
    objectives: [
      'Design and fabricate a stable USV platform for river deployment',
      'Integrate single-beam SONAR for bathymetric data collection',
      'Implement LiDAR-based above-water terrain mapping',
      'Develop autonomous navigation with GPS waypoint following',
      'Generate fused 3D maps combining above and below-water data',
      'Conduct field trials on Kathmandu Valley rivers'
    ],
    methodology: 'The USV hull was designed using CAD and fabricated with marine-grade materials. A custom sensor integration board connects SONAR (Garmin CV25), LiDAR (Velodyne VLP-16), IMU, and GPS modules. Navigation runs on ROS with a PID controller for path following. Data fusion uses point cloud registration algorithms to combine SONAR depth profiles with LiDAR terrain models.',
    outcomes: 'Successfully completed field trials on the Bagmati River, generating 3D bathymetric maps with sub-meter accuracy. The platform demonstrated stable autonomous navigation in currents up to 1.5 m/s. Presented at the University Scholar Conference 2025 and published findings in Chemical Horizon journal.',
    team: ['Siddhant Yadav', 'Hemkala Awasthi', 'Regal Ghimire','Rudip Shrestha']
  },
  {
    slug: 'h2o-lightcraft',
    title: 'H2O LightCraft',
    image: '/projects/h2o-lightcraft.jpg',
    shortDesc: 'Hydro-powered illumination system harnessing water flow energy for sustainable lighting in remote areas.',
    tags: ['Energy', 'Hydropower', 'Sustainability', 'LED'],
    category: 'Energy',
    overview: 'H2O LightCraft is a micro-hydro powered lighting system designed for off-grid communities in Nepal. It converts kinetic energy from flowing water into electricity to power LED illumination, providing a sustainable and affordable lighting solution for rural households near streams and rivers.',
    objectives: [
      'Design a compact micro-hydro turbine for low-head water sources',
      'Develop efficient energy conversion and storage circuit',
      'Create durable, weather-resistant housing for outdoor deployment',
      'Achieve sufficient output to power LED lighting for 8+ hours',
      'Keep total system cost under $50 for community affordability'
    ],
    methodology: 'The turbine uses a Pelton wheel design optimized for low-flow streams. A 3D-printed prototype was tested with varying flow rates. The generator connects to a charge controller and Li-ion battery pack. LED arrays with diffusers provide even illumination. CAD modeling in SolidWorks preceded FEA analysis in ANSYS for structural validation.',
    outcomes: 'Prototype generated 5W sustained power from a 1.5m head, sufficient to light a small room. The system operated continuously for 72 hours in field testing. Recognized at the Pulchowk Innovation Program for sustainable design.',
    team: ['Siddhant Yadav', 'Team Member 2']
  },
  {
    slug: 'automatic-aerator',
    title: 'Automatic Aerator System',
    image: '/projects/automatic-aerator.jpg',
    shortDesc: 'Automated aeration control system for aquaculture ponds using dissolved oxygen sensing and smart actuation.',
    tags: ['USV/Robotics', 'IoT', 'Aquaculture', 'Automation'],
    category: 'USV/Robotics',
    overview: 'An automated pond aeration system that monitors dissolved oxygen levels in real-time and activates aerators only when needed, reducing energy waste and improving fish health in aquaculture operations.',
    objectives: [
      'Implement real-time dissolved oxygen monitoring with calibrated sensors',
      'Design smart control logic for automatic aerator activation',
      'Reduce energy consumption compared to continuous aeration',
      'Build a low-cost, solar-powered system for rural fish farms',
      'Enable remote monitoring via mobile app'
    ],
    methodology: 'DO sensors (Atlas Scientific) feed data to an Arduino Mega controller. A threshold-based control algorithm with hysteresis prevents rapid cycling. Solar panels charge a battery bank for off-grid operation. An ESP32 module provides WiFi connectivity for remote monitoring through a custom web dashboard.',
    outcomes: 'Achieved 40% energy savings compared to continuous aeration in pilot ponds. Maintained DO levels within optimal range (5-8 mg/L) with 95% reliability. The system was demonstrated at MechTRIX 13 engineering exhibition.',
    team: ['Siddhant Yadav', 'Team Member 2', 'Team Member 3']
  },
  {
    slug: 'biogas-study',
    title: 'Biogas & Biomass Energy Study',
    image: '/projects/biogas-study.jpg',
    shortDesc: 'Research internship at NAST analyzing biogas potential and biomass energy conversion for rural Nepal.',
    tags: ['Energy', 'Biogas', 'Biomass', 'Research'],
    category: 'Energy',
    overview: 'A research internship at the Nepal Academy of Science and Technology (NAST) focused on evaluating the viability of biogas digesters and biomass gasification systems for rural energy needs. The study included field surveys, lab analysis, and feasibility modeling.',
    objectives: [
      'Survey existing biogas installations across 3 districts',
      'Analyze feedstock composition and gas yield rates',
      'Model biomass gasification efficiency for local agricultural waste',
      'Assess economic viability and payback periods',
      'Propose optimized digester designs for Nepali conditions'
    ],
    methodology: 'Field surveys covered 30+ household biogas plants in Kavre, Dhading, and Chitwan. Lab analysis measured methane content, pH, and C/N ratios. Thermodynamic modeling in MATLAB simulated gasification performance. Economic analysis used NPV and IRR methods with local cost data.',
    outcomes: 'Identified that mixed agricultural waste feedstock increases biogas yield by 25% over pure dung. Proposed a modified fixed-dome digester design suitable for hilly terrain. Findings contributed to a NAST policy brief on rural renewable energy.',
    team: ['Siddhant Yadav', 'NAST Research Group']
  },
  {
    slug: 'hvac-internship',
    title: 'HVAC Systems Internship',
    image: '/projects/hvac-internship.jpg',
    shortDesc: 'Industrial internship at Thermopharm focusing on HVAC system design, load calculations, and installation.',
    tags: ['Education', 'HVAC', 'Thermodynamics', 'Industry'],
    category: 'Education',
    overview: 'A hands-on industrial internship at Thermopharm Engineering, focusing on HVAC system design for pharmaceutical cleanrooms and commercial buildings. Covered load calculations, duct design, equipment selection, and site supervision of installations.',
    objectives: [
      'Learn HVAC load calculation methods (CLTD, RTS)',
      'Design ductwork layouts using ASHRAE standards',
      'Select appropriate equipment (chillers, AHUs, FCUs)',
      'Understand cleanroom HVAC requirements for pharma',
      'Supervise installation and commissioning on-site'
    ],
    methodology: 'Worked under senior engineers on 3 live projects. Used Carrier HAP software for load calculations. Duct design followed ASHRAE guidelines with manual D sizing. Participated in site surveys, equipment procurement, and commissioning testing including air balance and leak testing.',
    outcomes: 'Completed load calculations and duct designs for a 10,000 sq ft pharmaceutical facility. Gained proficiency in Carrier HAP and AutoCAD MEP. Received commendation for accuracy in air balance reports.',
    team: ['Siddhant Yadav', 'Thermopharm Engineering Team']
  }
];

export const programs = [
  {
    slug: 'seds-cansat',
    title: 'SEDS CanSat Training',
    image: '/programs/seds-cansat.jpg',
    shortDesc: 'Intensive training program on CanSat design, fabrication, and launch organized by SEDS Nepal.',
    tags: ['Space', 'CanSat', 'Training'],
    category: 'Space',
    overview: 'A hands-on training program by Students for the Exploration and Development of Space (SEDS) Nepal covering the complete CanSat lifecycle — from conceptual design and PCB layout to payload integration and rocket launch.',
    objectives: [
      'Learn CanSat mission design and subsystem architecture',
      'Design and fabricate custom PCBs for sensor payloads',
      'Integrate telemetry, power, and recovery subsystems',
      'Conduct a test launch and analyze flight data'
    ],
    methodology: 'The program spanned 4 weeks with daily workshops. Teams of 4 designed their CanSat from scratch. Training covered KiCad for PCB design, 3D printing for structures, and Arduino for firmware. The culminating event was a rocket launch to 1km altitude.',
    outcomes: 'Successfully launched and recovered a CanSat with full telemetry data. Gained practical experience in systems engineering for small spacecraft.',
    team: ['SEDS Nepal Team']
  },
  {
    slug: 'nasa-space-apps',
    title: 'NASA Space Apps Challenge',
    image: '/programs/nasa-space-apps.jpg',
    shortDesc: 'Participated in the NASA International Space Apps Challenge, developing solutions for space exploration.',
    tags: ['Space', 'Hackathon', 'NASA'],
    category: 'Space',
    overview: 'The NASA Space Apps Challenge is an international hackathon where teams use NASA data to solve real-world problems in Earth science and space exploration. Participated as part of the Kathmandu local event.',
    objectives: [
      'Address a NASA-posed challenge using open data',
      'Develop a working prototype within 48 hours',
      'Present solution to judges and the global community'
    ],
    methodology: 'Selected a challenge related to Earth observation data. Built a web-based visualization tool using Python, Leaflet.js, and NASA satellite imagery. Worked in a team of 4 with roles for data processing, frontend, and presentation.',
    outcomes: 'Developed a flood risk visualization tool for Nepali river basins. Placed in the top 5 at the Kathmandu local event.',
    team: ['Hackathon Team']
  },
  {
    slug: 'innocraft',
    title: 'InnoCraft Program',
    image: '/programs/innocraft.jpg',
    shortDesc: 'Innovation and entrepreneurship program for developing engineering prototypes into viable products.',
    tags: ['Education', 'Innovation', 'Entrepreneurship'],
    category: 'Education',
    overview: 'InnoCraft is a structured program that guides engineering students through the innovation pipeline — from ideation and prototyping to business model development and investor pitching.',
    objectives: [
      'Develop a prototype from concept to MVP',
      'Learn design thinking and lean startup methodology',
      'Create a business model canvas',
      'Pitch to a panel of investors and industry mentors'
    ],
    methodology: 'The 12-week program included weekly mentorship sessions, design sprints, and milestone reviews. Used the Business Model Canvas framework and conducted 50+ customer discovery interviews.',
    outcomes: 'Refined the ANVESAK concept into a viable product proposition. Received feedback from industry mentors and connected with potential manufacturing partners.',
    team: ['InnoCraft Cohort']
  },
  {
    slug: 'art-of-science',
    title: 'Art of Science Photography',
    image: '/programs/art-of-science.jpg',
    shortDesc: 'Photography competition exploring the intersection of scientific phenomena and visual art.',
    tags: ['Education', 'Photography', 'Science'],
    category: 'Education',
    overview: 'A competition challenging participants to capture scientific phenomena through photography, bridging the gap between technical research and visual storytelling.',
    objectives: [
      'Capture scientific phenomena with artistic composition',
      'Demonstrate technical understanding through visual media',
      'Communicate complex concepts to a general audience'
    ],
    methodology: 'Submitted photographs of fluid dynamics experiments and structural testing. Used macro photography and long-exposure techniques to reveal patterns invisible to the naked eye.',
    outcomes: 'Received honorable mention for a long-exposure photograph of vortex shedding in water flow.',
    team: ['Individual Entry']
  },
  {
    slug: 'pulchowk-innovation',
    title: 'Pulchowk Innovation Program',
    image: '/programs/pulchowk-innovation.jpg',
    shortDesc: 'Campus innovation program supporting student engineering projects from concept to demonstration.',
    tags: ['Education', 'Innovation', 'Campus'],
    category: 'Education',
    overview: 'An initiative by Pulchowk Campus to foster innovation among engineering students through funding, mentorship, and exhibition opportunities for student-built projects.',
    objectives: [
      'Secure project funding through competitive proposal',
      'Build and demonstrate a working prototype',
      'Exhibit at the campus innovation showcase'
    ],
    methodology: 'Submitted a detailed project proposal for H2O LightCraft. Received funding for materials and fabrication. Worked in the campus workshop with faculty guidance over 3 months.',
    outcomes: 'Successfully demonstrated the H2O LightCraft prototype at the campus showcase. Received recognition for sustainable design innovation.',
    team: ['Pulchowk Innovation Cohort']
  },
  {
    slug: 'mechtrix-13',
    title: 'MechTRIX 13',
    image: '/programs/mechtrix-13.jpg',
    shortDesc: 'Annual mechanical engineering exhibition showcasing student projects and technical competitions.',
    tags: ['Education', 'Exhibition', 'Engineering'],
    category: 'Education',
    overview: 'MechTRIX is the flagship annual exhibition of the Mechanical Engineering department at Pulchowk Campus, featuring student projects, competitions, and industry showcases.',
    objectives: [
      'Exhibit the Automatic Aerator System project',
      'Participate in technical competitions',
      'Network with industry professionals and fellow engineers'
    ],
    methodology: 'Prepared a live demonstration of the aerator system with real-time DO monitoring. Created informational posters and a technical presentation for visitors.',
    outcomes: 'The Automatic Aerator System drew significant interest from aquaculture industry visitors. Made connections with potential collaborators for field deployment.',
    team: ['MechTRIX Exhibition Team']
  },
  {
    slug: 'planetarium-events',
    title: 'Free Planetarium Events',
    image: '/programs/planetarium-events.jpg',
    shortDesc: 'Organized free planetarium shows and stargazing events to promote space science awareness.',
    tags: ['Space', 'Outreach', 'Education'],
    category: 'Space',
    overview: 'A community outreach initiative organizing free planetarium shows and stargazing sessions to make astronomy and space science accessible to students and the general public.',
    objectives: [
      'Organize monthly planetarium shows at campus facilities',
      'Conduct stargazing sessions with telescopes',
      'Create educational content about celestial events'
    ],
    methodology: 'Coordinated with the campus astronomy club to schedule events. Set up portable planetarium domes and telescope arrays. Created presentation materials explaining constellations, planets, and astronomical phenomena.',
    outcomes: 'Organized 8 events reaching 500+ attendees. Increased campus astronomy club membership by 40%.',
    team: ['Astronomy Club Team']
  },
  {
    slug: 'ai-space-art',
    title: 'AI Space Art Competition',
    image: '/programs/ai-space-art.jpg',
    shortDesc: 'Competition combining artificial intelligence and space imagery to create artistic visualizations.',
    tags: ['Space', 'AI', 'Art'],
    category: 'Space',
    overview: 'A creative competition challenging participants to use AI tools and space imagery to produce artistic visualizations that communicate the beauty and mystery of the cosmos.',
    objectives: [
      'Use AI/ML tools to process space imagery',
      'Create visually striking artistic outputs',
      'Demonstrate the creative potential of AI in science communication'
    ],
    methodology: 'Used neural style transfer and generative models to transform NASA/ESA imagery into artistic compositions. Combined multiple processing techniques for unique visual effects.',
    outcomes: 'Created a series of AI-generated space art pieces. Submitted work for the competition and exhibition.',
    team: ['Individual Entry']
  }
];

export const publications = [
  {
    title: 'Kathmandu Valley Flood 2024: A Wake-Up Call for Urban Flood Management',
    venue: 'Chemical Horizon, Nexus SSOChE',
    date: 'February 2025',
    page: 'Page 23',
    doi: '#',
    abstract: 'This paper analyzes the devastating 2024 Kathmandu Valley floods, examining the hydrological, urban planning, and climate factors that contributed to the disaster. It proposes a framework for integrated urban flood management combining early warning systems, green infrastructure, and community-based preparedness strategies.',
    type: 'Journal'
  },
  {
    title: 'Design and Development of a System for River Bathymetry and Mapping Using SONAR and LiDAR to Generate 3D Map',
    venue: 'University Scholar Conference 2025, Kathmandu University',
    date: 'November 2025',
    page: '',
    doi: '#',
    abstract: 'This paper presents the design and development of ANVESAK, an unmanned surface vehicle system for autonomous river bathymetry. The system integrates SONAR for underwater depth profiling and LiDAR for above-water terrain mapping, generating fused 3D maps of river systems. Field trial results from the Bagmati River demonstrate sub-meter mapping accuracy.',
    type: 'Conference'
  }
];

export const collaborators = [
  { name: 'Assoc. Prof. Dr. Shree Raj Shakya', role: 'Faculty Mentor', institution: 'Pulchowk Campus, IOE' },
  { name: 'Ass. Prof. Dr. Sudip Bhattrai', role: 'Research Advisor', institution: 'Kathmandu University' },
  { name: 'Ass. Prof. Kamal Darlami', role: 'Project Supervisor', institution: 'Pulchowk Campus, IOE' }
];

export const organizations = [
  { name: 'NAST', logo: '/orgs/nast.png' },
  { name: 'BlueRobotics', logo: '/orgs/bluerobotics.png' },
  { name: 'SEDS Nepal', logo: '/orgs/seds.png' },
  { name: 'Pulchowk Campus', logo: '/orgs/pulchowk.png' },
  { name: 'Kathmandu University', logo: '/orgs/ku.png' },
  { name: 'Gorkha Brewery', logo: '/orgs/gorkha.png' },
  { name: 'Thermopharm', logo: '/orgs/thermopharm.png' },
  { name: 'Carlsberg Group', logo: '/orgs/carlsberg.png' },
];

export const testimonials = [
  {
    quote: 'Siddhant brings a rare combination of technical depth and creative problem-solving. His work on ANVESAK demonstrated exceptional engineering rigor and field capability.',
    name: 'Dr. Shree Raj Shakya',
    role: 'Associate Professor, Pulchowk Campus',
    rating: 5,
    photo: '/testimony/shakya.jpg'
  },
  {
    quote: 'One of the most dedicated students I have mentored. Siddhant consistently goes beyond the curriculum, building real systems that work in the field, not just on paper.',
    name: 'Dr. Sudip Bhattrai',
    role: 'Assistant Professor, Kathmandu University',
    rating: 5,
    photo: '/testimony/bhattrai.jpg'
  },
  {
    quote: 'His ability to integrate mechanical design with electronics and software makes him stand out. The automatic aerator project was a perfect example of systems thinking.',
    name: 'Kamal Darlami',
    role: 'Assistant Professor, Pulchowk Campus',
    rating: 5,
    photo: '/testimony/darlami.jpg'
  }
];

export const blogs = [
  {
    slug: 'beyond-the-bottle',
    image: '/blog/beyond-the-bottle.jpg',
    title: 'Beyond the Bottle: How Gorkha Brewery Is Quietly Changing Lives in Nawalparasi',
    excerpt: 'A reflection on my time as a Management Trainee at Gorkha Brewery — how a beer factory in Mukundapur became an institution holding a community together.',
    date: 'July 2025',
    readTime: '7 min read',
    category: 'Industry & Society',
    content: `
      <p class="lead">The first thing you notice when you arrive in Mukundapur is not the factory. It is the smell.</p>
      <p>A warm, earthy, unmistakable smell of cow and buffalo farms drifts through the air as you move through the village. For a newcomer, it takes a moment to place. But for the people who live here, it is the smell of a livelihood. One that, surprisingly, traces its roots back to a beer factory.</p>
      <p>I joined Gorkha Brewery Pvt. Ltd. as a Management Trainee a few months ago. As part of my induction, I was placed in the Packaging Department — one of the largest departments in the plant by headcount — and my department head gave me a simple but valuable instruction: go sit at every machine for a few hours, and learn from the operators. Not from manuals. From people.</p>
      <p>So, I did.</p>
      <p>But somewhere between the hum of the labelling machine and the rhythmic movement of bottles on the conveyor, I sat beside an operator who has worked in this factory for over 25 years.</p>
      <p>He joined Gorkha Brewery at the age of 21, a young boy from Sarlahi district, looking for work. His first job was in the bottle-feeding area. Nothing glamorous. Repetitive, physical, entry-level. But steady.</p>
      <p>Over the years, through multiple promotions and the kind of quiet persistence that doesn't make headlines, he worked his way up. Today, he is a permanent employee and skilled operator of the labelling machine.</p>
      <p>But that is only part of the story.</p>
      <p>He got married. He brought his wife here. His children grew up here, went to school here, built their early lives in this village that sits beside a beer factory in the western Terai. His son is now in Japan. Another son has gone back to Sarlahi and works as a contractor. His daughter is married.</p>
      <p>For a typical Nepali family, especially one from a rural district with limited opportunities, this is not a small thing. This is the whole dream: educated children, a settled daughter, a family that has moved forward. He has lived that dream, and he lived it because of a steady job that gave him dignity, growth, and a place to call home for a quarter century.</p>
      <p>What struck me most was how matter-of-factly he told me this. Not with pride, exactly. More with the quiet satisfaction of a man who knows that his life has gone the way it should.</p>
      <p>And this is not one man's story.</p>
      <p>Walk through the Packaging Department on any given shift and you are walking through a cross-section of rural Nepal. The workforce here is predominantly local — people from Nawalparasi, from Chitwan — who found stable, well-paying work at a time when that was not easy to find.</p>
      <p>The wages at Gorkha Brewery, by the standards of this region, are genuinely good. Workers here earn enough not just to survive but to plan, to put children in school, to build a house, and to save. The economic activity generated by a single factory with this many employees ripples outward: into local markets, transport, housing, small businesses.</p>

      <h2>Let us go back to that smell.</h2>
      <p>The reason almost every household in Mukundapur and the surrounding villages runs a cow or buffalo farm is not coincidental. Gorkha Brewery supplies <em>chokar</em>, the grain byproduct from the brewing process, at highly subsidised rates to local farmers. What is waste from the factory becomes feed for livestock. What might be discarded becomes income.</p>
      <p>This area has quietly become one of the more productive dairy zones in Nepal. Milk collection, dairy cooperatives, the morning rhythm of households built around their animals — all of it has a thread that leads back to the factory gate.</p>
      <p>This is what economists call a value chain effect, but in practice it just looks like a village where people have more than they used to.</p>

      <h2>The Uncomfortable Conversation</h2>
      <p>Here is the part of this article that I suspect will make some readers uncomfortable.</p>
      <p>Nepal is still, in large parts, a society that views alcohol with moral suspicion. Not without reasons — addiction and its social costs are real, and they cannot be dismissed. But the conversation rarely goes further than that. If the government announced tomorrow that it was banning the beer industry in Nepal, a significant portion of the population, particularly outside major cities, would likely support it. Many would call it a moral victory.</p>
      <p>They would be less aware of what disappears with it.</p>
      <p>The tax revenue that companies like Gorkha Brewery pay to the government every year is huge. These are funds that go into infrastructure, schools, hospitals, public services. The excise duty on alcohol is one of the more reliable revenue streams in Nepal's tax system, and the beer industry is a meaningful contributor to it.</p>
      <p>Then there are the indirect economic effects: the transport companies that move raw materials and finished goods, the suppliers of glass bottles and packaging materials, the contractors, the vendors, the landlords who rent rooms to workers who have migrated here.</p>
      <p>Gorkha Brewery is not just another beer producing company — it is a driver for social and economic change.</p>

      <h2>A Factory That Gives Back</h2>
      <p>Beyond employment and economic activity, Gorkha Brewery has also invested directly in the community through its Corporate Social Responsibility programs.</p>
      <p>These are not acts of charity from a disconnected corporation. They are investments in the community that the company itself depends on — the workforce, their families, the land.</p>

      <h2>What I Walked Away With</h2>
      <p>I came to Gorkha Brewery as an engineer, a Management Trainee. I expected to learn about machines, processes, and production lines. I did learn those things. But beyond that, sitting beside that labelling operator, listening to him describe 25 years of a life built in this place, I understood something that no textbook on industrial management had prepared me for.</p>
      <p>I walked away with the experience and learning that I'll carry to the rest of my life.</p>
      <p>A factory is not just a building where things are made. At its best, it is an institution that holds a community together. It is the reason a man from Sarlahi could raise his children, send his son to Japan, and sit at his machine with the quiet confidence of someone who has done what he set out to do.</p>
      <p>Gorkha Brewery makes beer. But what it has been quietly making, for decades, is something harder to put in a bottle: stability, opportunity, and a better life for the people of this corner of Nawalparasi.</p>
      <p>That story deserves to be told.</p>
    `,
    tags: ['Gorkha Brewery', 'Industry', 'Society', 'Nepal', 'Management']
  }
];

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Programs', path: '/programs' },
  { label: 'Publications', path: '/publications' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'People', path: '/people' },
  { label: 'Contact', path: '/contact' }
];
