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
      'Conduct field trials in water bodies of Nepal'
    ],
    methodology: 'The USV hull was designed using CAD and fabricated with fiber-glass materials. A sensor integration board connects SONAR (Bluerobotics Altemeter and Echosounder Ping Sonar), LiDAR (LiVOX-Mid360), IMU, and GPS modules. Pixhawk 6 for path following. Data fusion uses point cloud registration algorithms to combine SONAR depth profiles with LiDAR terrain models.',
    outcomes: 'Successfully completed field trials on the Kulekhani Reservoir, Taudaha Lake, Phewa Lake, Narayani River, and Trishuli River, generating 3D bathymetric maps with milimeter accuracy. The platform demonstrated stable autonomous navigation in currents up to 1.5 m/s. Presented at the University Scholar Conference 2025 and published findings in Chemical Horizon journal.',
    team: ['Siddhant Yadav', 'Hemkala Awasthi', 'Regal Ghimire','Rudip Shrestha']
  },
  {
    slug: 'h2o-lightcraft',
    title: 'H2O LightCraft',
    image: '/projects/h2o-lightcraft.jpg',
    shortDesc: 'This was a project funded by the Ministry of Education Science and Technology, Government of Nepal. The goal of the project was to develop a device to help high school students learn the scientific principles in fun and practical way.',
    tags: ['STEAM', 'Light', 'Water', 'Hydrogen Fuel'],
    category: 'STEAM',
    overview: 'This was a project funded by the Ministry of Education Science and Technology, Government of Nepal. The goal of the project was to develop a device to help high school students learn the scientific principles in fun and practical way.',
    objectives: [
      'Design a compact device for STEAM teaching material',
      'Fabricate the device',
      'Integrate the optical systems to demostrate different priniciple of light',
      'Integrate the electrolysis system',
      'Integrate the LiFi techonology demostratino kit.'
    ],
    methodology: 'The system was design in Solidwork with proper dimensioning and clearance. The fabrication was done using plywood and glass. Different system were tested individually and integrated one by one. Final assembly including power supply wiring etc were done.',
    outcomes: 'The device was completely designed, fabricated and tested by the team. The demonstration was also done in program organized by the ministry in front of school students. The students found the device very interactive and engaging. They learned about acid-base reaction, different ligh principles and phenomenon like reflection, refraction, total internal reflectino, rgb color mixing, hologram, electrolysis of water, telescope, microscope, and hydrogen as fule.',
    team: ['Siddhant Yadav', 'Shristi Paudyal', 'Swastik Dangi']
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
      'Effective areation with mobile system',
      'Build a low-cost, solar-powered system for rural fish farms',
      'Enable remote monitoring via mobile app'
    ],
    methodology: 'DO sensors feed data to an Arduino Mega controller. A threshold-based control algorithm with hysteresis prevents rapid cycling. Solar panels charge a battery bank for off-grid operation. An ESP32 module provides WiFi connectivity for remote monitoring through a custom web dashboard.',
    outcomes: 'The project was not successful because of budget over run from restimated budget. We learned the engineering is not just about making machines. The machines should also cost effective.',
    team: ['Siddhant Yadav', 'Subhanjal Pant', 'Rajib Mandal']
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
  { name: 'Assoc. Prof. Dr. Shree Raj Shakya', role: 'Project Supervisor', institution: 'Pulchowk Campus, IOE' },
  { name: 'Ass. Prof. Dr. Sudip Bhattrai', role: 'Research Advisor / Mentor', institution: 'Pulchowk Campus, IOE' },
  { name: 'Ass. Prof. Kamal Darlami', role: 'Project Supervisor', institution: 'Pulchowk Campus, IOE' },
  { name: 'Ass. Prof. Biman Rimal', role: 'Research Advisro / Mentor', institution: 'Pulchowk Campus, IOE' }
];

export const organizations = [
  { name: 'NAST', logo: '/orgs/nast.png' },
  { name: 'BlueRobotics', logo: '/orgs/bluerobotics.png' },
  { name: 'SEDS Pulchowk', logo: '/orgs/seds.png' },
  { name: 'Pulchowk Campus', logo: '/orgs/pulchowk.png' },
  { name: 'Kathmandu University', logo: '/orgs/ku.png' },
  { name: 'Gorkha Brewery', logo: '/orgs/gorkha.png' },
  { name: 'Thermopharm', logo: '/orgs/thermopharm.png' },
  { name: 'Carlsberg Group', logo: '/orgs/carlsberg.png' },
  { name: 'IIEC, Pulchowk', logo: '/orgs/iiec.png' },
  { name: 'National Innovation Centre', logo: '/orgs/nic.png' },
  { name: 'MoEST, GoN', logo: '/orgs/moest.png' },
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
    quote: 'A reliable and capable team leader with strong leadership and professionalism.',
    name: 'Rudip Shrestha',
    role: 'Project Member, ANVESAK',
    rating: 5,
    photo: '/testimony/darlami.jpg'
  },
  {
    quote: 'One of the most passionate and result driven individuals I have had the honor of working with and learning from. His greatest strength extends beyond engineering knowledge, that is his exceptional problem-solving ability, dedication to learning and unwavering commitment to every project he takes on. His experience across a wide range of unique and innovative projects demonstrates not only his technical skills but also his adaptability, creativity and determination to deliver meaningful results.',
    name: 'Regal Ghimire',
    role: 'Project Member, ANVESAK',
    rating: 5,
    photo: '/testimony/bhattrai.jpg'
  }
];

export const blogs = [
  {
    slug: 'have-you-heard-a-plant-speak',
    image: '/blog/plant-communication.png',
    title: 'Have You Heard a Plant Speak? The Secret Language of Nature',
    excerpt: 'From Kannada conversations I could not understand at Airbus to ultrasonic clicks in tomato plants — a look at how plants communicate, and what it means to truly listen.',
    date: 'October 2026',
    readTime: '8 min read',
    category: 'Science & Nature',
    content: `
      <p class="lead">I've recently joined Airbus as an intern in Bangalore, and it's been an incredible journey so far. I work with a fantastic team, and there's a unique cultural dynamic in our workspace: about 50% of my teammates are native Kannada speakers. Often, they converse in their local language, and sometimes, they even randomly speak to me in Kannada.</p>
      <p>Here is the interesting part: while I don't understand a single Kannada word, I almost always get the <em>vibe</em> of what they are saying. I understand the intent, the emotion, and the context. A tone of voice, a smile, a small gesture, a look at the screen, the situation we are all in. Somehow the message arrives. "Come, let's go for coffee." "That was a good idea." "Hey, look at this." "Let's go for lunch." No dictionary needed.</p>
      <p>It made me realize a fundamental truth: <strong>we don't necessarily need words to communicate.</strong></p>
      <p>If humans can exchange complex ideas without a single shared spoken word, what about the rest of the natural world? What about the silent trees and plants we walk past every day?</p>
      <p>The seed for this thought was planted on 23rd September 2022, when I was hiking through Shivapuri Nagarjun National Park with some friends. As we walked through the dense, quiet woods, two of my friends, Salina and Shristi, started talking, looking up at the canopy, and wondering: <em>"Do these trees talk to each other? What would they even say?"</em></p>
      <p>That question followed me for years, until I went and found the answer. And honestly, what I found changed how I look at every leaf.</p>

      <h2>First, What Is Communication?</h2>
      <p>At its core, communication is just the exchange of information and knowledge. Humans use vocal cords, sure, but a huge part of our population communicates through other brilliant methods like sign language or Braille. If we can communicate through touch and visual cues, how can we arrogantly assume plants don't communicate just because they don't have mouths?</p>
      <p>The truth is, plants are exceptional communicators. They just do it silently.</p>

      <h2>Perfumes With a Meaning</h2>
      <p>When a caterpillar starts chewing a leaf, the plant does not just sit there and suffer. It releases special airborne chemicals called <em>volatile organic compounds</em> (VOCs). Think of them as perfumes with a meaning. And these perfumes carry messages.</p>
      <p>Some of those smells work like a phone call to the bodyguards. They attract the caterpillar's natural enemies, like tiny parasitic wasps, which arrive to deal with the attacker. Basically, the plant is saying, "I'm under attack! Someone call the police!"</p>
      <p>You might have smelled freshly cut grass. Maybe that was a cry for help.</p>
      <p>In a study on maize plants (the corn family) in Kenya, scientists found that when one plant was targeted by stem-borer moth eggs, the neighbouring healthy plants also changed their chemistry and became more attractive to the wasps. A warning message had travelled through the air from one plant to the next.</p>

      <h2>Do Plants Make Sound?</h2>
      <p>So, plants communicate through VOCs and smell, but they just don't produce sound? Maybe not.</p>
      <p>In 2023, a team at Tel Aviv University, led by Professor Lilach Hadany, published a study in the journal <em>Cell</em>. They placed microphones near tomato and tobacco plants and recorded them. The plants <em>were making sounds</em>.</p>
      <p>The sounds are ultrasonic clicks, too high for human ears. If you slowed them down, they would sound like popcorn popping or bubble wrap being squeezed. A healthy, calm plant made less than one click per hour. But a plant that was thirsty or had its stem cut made around 30 to 50 clicks per hour. The recorded sounds were about as loud as a normal human conversation, and an AI could even tell <em>what kind of stress</em> the plant was feeling just by listening.</p>
      <p>Scientists think the clicks come from tiny air bubbles forming and bursting inside the plant's water pipes. So is it a "scream"? Maybe not on purpose. But here is the exciting part: a moth looking for a place to lay eggs, or a neighbouring plant, might be able to hear it.</p>
      <p>The same research group showed that flowers of the beach evening primrose made their nectar about 20% sweeter within just three minutes of hearing the buzz of a bee. The flower is shaped a bit like a tiny satellite dish. A flower that hears a bee coming, and prepares a sweeter welcome.</p>

      <h2>Counting, Feeling and Recognising Family</h2>
      <p>Take the <strong>Venus flytrap</strong>. Its trap has tiny trigger hairs inside. If an insect touches one hair, the plant does not snap shut. It waits. It <em>remembers</em> that first touch for about 20 to 30 seconds. If a second touch comes in that time, snap! The trap closes. If the second touch is late, the plant forgets the first one.</p>
      <p>That is counting. That is short-term memory. In a plant.</p>
      <p>Or look at a climbing plant. Put a stick near it and the tendrils will find it, wrap around it, and climb. It is feeling its surroundings and making a decision, slowly, patiently.</p>
      <p>Scientists have also found hints that some plants behave differently around their own relatives than around strangers. There is research suggesting that sea rocket plants share their root space more politely with siblings. A plant that recognizes family. Think about that for a second.</p>

      <h2>Deals Between Plants and Animals</h2>
      <p>Plants also make <em>deals</em> with animals.</p>
      <p>The bullhorn acacia tree in Central America grows big, hollow thorns that look like the horns of a bull. Inside live tiny, fierce ants. The tree gives them a home, sweet nectar, and special protein snacks. In return, the ants guard the tree like soldiers. If a hungry animal touches the tree, the ants rush out in thousands and attack. They even cut down other plants growing around the base so the tree gets enough sunlight.</p>
      <p>Neither can survive well without the other. They are partners in a very serious contract.</p>

      <h2>The "Wood Wide Web"</h2>
      <p>While plants don't have a nervous system, they are deeply connected. Underneath the soil of any forest lies a sprawling, intricate ecosystem of fungi known as mycelium. This fungal network connects the roots of trees, creating a symbiotic "Wood Wide Web."</p>
      <p>Through this network, trees can share nutrients, water, and information. They can even recognize their own family members. A "mother tree" will actively pump excess carbon and nutrients to her shaded saplings to ensure they survive. When a tree is dying, it might dump its remaining resources into the network to help the community. They are quite literally supporting each other in the dark.</p>

      <h2>So, Do Plants Talk Like Animals?</h2>
      <p>The answer is not written yet.</p>
      <p>In 2023, a group of scientists led by Justine Karst reviewed the evidence and argued that the popular story about mycelium networks has run ahead of the science. Fungal networks are real. But whether trees <em>deliberately</em> talk and share through them is still being debated. Simard and others disagree and are defending the idea. Scientists argue about whether plants "speak" on purpose or whether they only give off signals that others pick up.</p>

      <h2>Why Do We Need to Decode Their Language?</h2>
      <p>If we learn to read plant signals, the possibilities get wild.</p>
      <p>Plants are intimately tuned to the environment. Have you ever noticed water droplets on the edges of plant leaves in the morning (a process called guttation)? Interestingly, plants often stop producing these droplets when it's going to rain. Flowers like daisies, dandelions, and tulips are highly weather-sensitive and will fold their petals before a storm. By learning to decode this plant language, we could potentially forecast the weather with incredible hyper-local accuracy.</p>
      <p>But the uses of plant communication get even more sci-fi. Because plants constantly sample their environment and react chemically, researchers are exploring how they can be used as sentinels. At MIT, a team led by Michael Strano put tiny carbon nanotubes inside spinach leaves. The plants were able to detect chemicals used in explosives like landmines in groundwater. The leaves glowed with an infrared signal, a camera picked it up, and the system sent an email alert to the scientists. Plants sending emails! The researchers described it as overcoming the plant/human communication barrier. Imagine green sentinels guarding airports, borders, or farmland.</p>
      <p>In the future, plants sitting in strategic locations like airports might just be sniffing for dangerous substances, chemical weapons, or drugs.</p>

      <h2>A Playful Thought: Who Is Manipulating Whom?</h2>
      <p>Are we manipulating them, or are they manipulating us? Are they secretly controlling us?</p>
      <p>There is ongoing research testing whether plants can hear (some roots grow toward the sound of running water) and whether they can sense human odor. Perhaps humankind is simply not advanced enough yet to fully crack their code and translate their chemical vocabulary into our words.</p>
      <p>Look at what plants have achieved. Wheat, rice, maize and potatoes now cover vast areas of the planet. Why? Because humans plant them, water them, protect them, and carry their seeds across continents. Flowers make themselves beautiful and sweet-smelling, and we buy them, plant them, and put them on our tables. Fruits make themselves delicious so we will spread their seeds.</p>
      <p>It makes me wonder: we think we are cultivating them, but could it be that they are manipulating us? They produce the exact chemical compounds (caffeine, sugar, oxygen, beautiful floral scents) that ensure we protect them, water them, and spread their seeds across the globe.</p>
      <p>Maybe plants did not need to learn to talk to us. Maybe they just learned how to make us do things for them. This is a playful idea, but there is a famous book about it, <em>The Botany of Desire</em> by Michael Pollan, if you want to go down that rabbit hole.</p>

      <h2>Back on the Trail</h2>
      <p>When I think about that hike now, I do not see silent trees. I see a crowded, busy city. Chemical messages floating through the air. Tiny clicks in the leaves. Roots curling toward water. Flowers listening for bees. Ants guarding their green home.</p>
      <p>The forest was never quiet. <strong>We just didn't know how to listen.</strong></p>
      <p>I am an engineer, and my whole training is about reading signals, whether from a sensor, a machine or a system. As a kid from Nepal who looked up at the stars and dreamed of space, I never expected that one day a conversation on a hiking trail would make me look <em>down</em>, at the leaves, the roots, and the soil, and feel the same wonder.</p>
      <p>The lesson? Communication is not only about words. My Kannada-speaking teammates at Airbus taught me that, and the plants of Shivapuri Nagarjun proved it.</p>
      <p>Next time you walk through a forest, a park, or even past a plant on your office desk, slow down. You may not hear anything. But somewhere, something is saying hello.</p>
      <p>Maybe say hello back.</p>
      <p><em>What do you think? Have you ever felt like you understood something without a single word being spoken? I would love to hear your story.</em></p>
    `,
    tags: ['Plant Communication', 'Nature', 'Science', 'Airbus', 'Shivapuri Nagarjun']
  },
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
