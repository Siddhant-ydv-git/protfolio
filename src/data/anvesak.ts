// ─────────────────────────────────────────────────────────────
//  ANVESAK project page content.
//  Edit text / links here. The layout lives in src/pages/AnvesakPage.tsx
//  Images live in public/projects/anvesak/  (refer to them as '/projects/anvesak/<file>')
// ─────────────────────────────────────────────────────────────

export const anvesak = {
  title: 'ANVESAK',
  tagline: 'A locally built unmanned surface vessel that maps what lies beneath Nepal’s rivers and lakes.',
  heroImage: '/projects/anvesak/hero-narayani.jpg',

  // Put the link of the full project website here once it exists. Leave '' to hide the button.
  microsite: '',

  // ── Headline numbers ───────────────────────────────────────
  stats: [
    { value: '7', label: 'test sites across Nepal' },
    { value: 'More than 4.5 Lakh sq. m', label: 'Area mapped' },
    { value: '99%+', label: 'sonar calibration accuracy' },
    { value: '190,000+', label: 'Filtered depth points' },
    { value: 'Rs 6.62 lakh (NPR)', label: 'Project cost' },
  ],

  // ── Why it matters ─────────────────────────────────────────
  problem: {
    heading: 'Nepal’s rivers are poorly mapped, and the cost is paid in disaster risk preparedness and rescue time.',
    points: [
      'Little is known about the underwater terrain of Nepal’s rivers and lakes. Traditional surveys are tiring, slow, expensive and dangerous in deep, fast or muddy water.',
      'On rivers like the Trishuli, rescue teams searching for sunken vehicles or victims often work without any riverbed map, relying on visual search.',
      'Bathymetry also underpins flood management, sedimentation studies, infrastructure design and environmental monitoring.',
    ],
  },

  // ── How it works ───────────────────────────────────────────
  steps: [
    { title: 'Plan', text: 'Waypoints are set in Mission Planner, or the vessel is driven by radio control.' },
    { title: 'Navigate', text: 'A Pixhawk 6 running ArduRover uses GPS and an IMU to follow the path with two thrusters.' },
    { title: 'Sense', text: 'A single-beam sonar logs depth with every GPS fix; a LiDAR scans the terrain above water.' },
    { title: 'Map', text: 'Data is filtered in Python and MATLAB, then contoured in QGIS into 2D and 3D bathymetric maps.' },
  ],

  specs: [
    ['Hull', 'Fiberglass catamaran pontoons, 1.5 m long, 0.2 m diameter'],
    ['Mass', '21.5 kg, draft 7.2 cm'],
    ['Propulsion', '2 × 5 kgf thrusters, differential steering'],
    ['Controller', 'Pixhawk 4, ArduRover firmware'],
    ['Depth sensing', 'BlueRobotics Ping R2 single-beam sonar'],
    ['Terrain sensing', 'Livox Mid-360 LiDAR'],
    ['Links', 'Radio control and telemetry, onboard data logging'],
    ['Software', 'Mission Planner, Python, MATLAB, QGIS'],
  ] as [string, string][],

  // ── Build journey ──────────────────────────────────────────
  journey: [
    { phase: 'Phase I', title: 'Prototype and hull design', text: 'Small prototypes and buoyancy and stability tests led to a twin-pontoon catamaran, chosen for stability at the low speeds typical of river surveys.', image: '/projects/anvesak/journey-prototype.jpg' },
    { phase: 'Phase I', title: 'Final design and fabrication', text: 'The final hull was modelled in CAD and fabricated in fiberglass, then assembled with the sensor frame and electronics enclosure.', image: '/projects/anvesak/journey-fabrication.jpg' },
    { phase: 'Phase II', title: 'Sonar calibration', text: 'The speed of sound in water was tuned against measured depths. At 1450 m/s the sonar reached over 99% accuracy.', image: '/projects/anvesak/journey-sonar-calibration.jpg' },
    { phase: 'Phase III', title: 'Control system', text: 'Pixhawk 4, GPS, telemetry, power distribution and two ESC-driven thrusters were integrated and tested for waypoint following.', image: '/projects/anvesak/system-diagram.jpg' },
    { phase: 'Phase IV', title: 'First pond tests', text: 'Early trials at Pimbahal Pokhari checked propulsion, communication and data logging before going to larger water bodies.', image: '/projects/anvesak/journey-first-test.jpg' },
    { phase: 'Phase IV', title: 'Ready for the field', text: 'The complete system, transported and assembled on site, then deployed at Kulekhani, Taudaha, and later with APF on three major water bodies.', image: '/projects/anvesak/journey-assembled.jpg' },
  ],
  journeyVideo: { id: 'FaKtN06JsVc', title: 'One-Year Journey of ANVESAK' },

  // ── Field results ──────────────────────────────────────────
  sites: [
    {
      id: 'trishuli', name: 'Trishuli River', place: 'Kurintar', date: '16 May 2026',
      stats: [['Max depth', '13.81 m'], ['Area surveyed', '9,765 m²'], ['Depth points', '12,330'], ['Track length', '805 m']],
      note: 'A fast, turbid river. Two team members followed in an APF rafting boat for recovery, telemetry and radio range.',
      images: [{ src: '/projects/anvesak/map-trishuli.jpg', caption: 'Bathymetric contour map, Trishuli River' }, { src: '/projects/anvesak/trishuli-test.jpg', caption: 'Deployment with the APF support raft' }],
    },
    {
      id: 'narayani', name: 'Narayani River', place: 'Devghat, Chitwan', date: '17 May 2026',
      stats: [['Max depth', '8.3 m'], ['Area surveyed', '265,286 m²'], ['Depth points', '32,322'], ['Track length', '1,561 m']],
      note: 'A wide channel surveyed in zig-zag transects. The run was cut short after minor structural damage, but still produced a large dataset.',
      images: [{ src: '/projects/anvesak/map-narayani.jpg', caption: 'Bathymetric contour map, Narayani River' }, { src: '/projects/anvesak/hero-narayani.jpg', caption: 'ANVESAK underway on the Narayani' }],
    },
    {
      id: 'phewa', name: 'Phewa Lake', place: 'Tal Barahi, Pokhara', date: '18 May 2026',
      stats: [['Max depth', '18.61 m'], ['Area surveyed', '52,718 m²'], ['Depth points', '35,615'], ['Track length', '2,165 m']],
      note: 'Open-water test among tourist boats, with an APF motorboat on standby for safety and recovery.',
      images: [{ src: '/projects/anvesak/map-phewa.jpg', caption: 'Bathymetric contour map, Phewa Lake' }, { src: '/projects/anvesak/phewa-aerial.jpg', caption: 'ANVESAK on Phewa Lake' }],
    },
    {
      id: 'kulekhani', name: 'Kulekhani Reservoir', place: 'Makwanpur', date: '',
      stats: [['Depth recorded', 'up to 65 m'], ['Validated against', 'NEA survey 2025'], ['Navigation', 'Waypoint path verified']],
      note: 'Cross-sections from ANVESAK data were compared with the Nepal Electricity Authority’s 2025 bathymetric survey at benchmark points and near the dam intake, and closely followed them.',
      images: [{ src: '/projects/anvesak/map-kulekhani.jpg', caption: 'Depth contour map, Site A' }, { src: '/projects/anvesak/3d-kulekhani.jpg', caption: '3D bathymetry, Site A' }, { src: '/projects/anvesak/kulekhani-test.jpg', caption: 'Field deployment' }],
    },
    {
      id: 'taudaha', name: 'Taudaha Lake', place: 'Kathmandu Valley', date: '',
      stats: [['Max depth', '≈ 3.6 m'], ['Coverage', 'Whole lake'], ['Output', '2D and 3D maps']],
      note: 'The final validation of the full pipeline: sonar, GPS tracking, filtering and mapping, from raw data to finished maps.',
      images: [{ src: '/projects/anvesak/map-taudaha.jpg', caption: 'Depth contour map, Taudaha Lake' }, { src: '/projects/anvesak/3d-taudaha.jpg', caption: '3D bathymetry, Taudaha Lake' }, { src: '/projects/anvesak/taudaha-test.jpg', caption: 'Field deployment' }],
    },
    {
      id: 'pool', name: 'Swimming pool', place: 'Sonar + LiDAR test', date: '',
      stats: [['Calibration accuracy', '99%+'], ['Output', 'Fused 3D map'], ['Sensors', 'Sonar + LiDAR']],
      note: 'A controlled site where underwater sonar depth and above-water LiDAR points were combined into one 3D model. Fusion was demonstrated here; lake and river maps are sonar-based.',
      images: [{ src: '/projects/anvesak/fused-pool.jpg', caption: 'Sonar bathymetry fused with LiDAR scan' }, { src: '/projects/anvesak/3d-pool.jpg', caption: '3D depth model of the pool' }],
    },
  ],

  // ── Videos (YouTube) ───────────────────────────────────────
  // Add the 11-character video ID from the YouTube link (youtube.com/watch?v=THIS_PART).
  // The section stays hidden while this list is empty.
  videos: [
  { id: 'MhRHVcVjCdE', title: 'ANVESAK field tests' },
  ] as { id: string; title: string }[],

  // ── In the media ───────────────────────────────────────────
  media: [
    { outlet: 'TechPana', title: 'नेपाली विद्यार्थीले बनाए पानीमुनि स्क्यान गर्ने मानवरहित डुङ्गा, विपद् व्यवस्थापनमा काम लाग्ने', date: 'May 2026', url: 'https://techpana.com/2026/156826', image: '/projects/anvesak/media.jpeg' },
    { outlet: 'Department of Mechanical and Aerospace Engineering, Pulchowk Campus', title: 'Measuring the unknown depths', date: 'April 2026', url: 'https://www.facebook.com/watch/?v=2180696986015833', image: '/projects/anvesak/DMAE.jpeg' },
    { outlet: 'इन्जिनियरको ब्यथा अरुलाई के था', title: 'ANVESAK: Successfully Tested Across Major Water Bodies of Nepal!', date: 'October 2026', url: 'https://www.facebook.com/watch/?v=1973132003646460', image: '/projects/anvesak/EB.png' },
    { outlet: 'No Next Question (NNQ)', title: 'Four pulchowk engineering students develop autonomous boat for underwater mapping, detection and disaster response', date: 'May 2026', url: 'https://www.instagram.com/p/DYrp7P6Tqtk/', image: '/projects/anvesak/NNQ.jpeg' },
    { outlet: 'Routine of Education', title: 'Four mechanical engineering fourth-year students from Pulchowk Campus have developed an autonomous boat (मानवरहित डुङ्गा) designed to support disaster preparedness and rescue operations.', date: 'May 2026', url: 'https://www.facebook.com/share/p/1A5qBMKanW/', image: '/projects/anvesak/ROE.JPG' },
  ] as { outlet: string; title: string; date: string; url: string; image?: string }[],

  // ── Presentations and recognition ──────────────────────────
  recognition: [
    { title: 'Poster presentation, NAST Day', image: '/projects/anvesak/nast-poster.jpg' },
    { title: 'Paper presentation, University Scholar Conference, Kathmandu University', image: '/projects/anvesak/ku-conference.jpg' },
  ],

  // ── Honest limits and what comes next ──────────────────────
  limitations: [
    'The single-beam sonar only measures depth directly below the vessel, so it cannot detect objects or capture steep or stepped terrain.',
    'LiDAR performance drops in strong daylight.',
    'Battery endurance limits survey length, and the sealed electronics enclosure heats up in direct sun.',
    'Autonomous path following was not yet reliable in every current and wind condition.',
  ],
  next: [
    'Side-scan, multibeam or imaging sonar for underwater object detection and search-and-rescue use',
    'Thermal management and a purpose-built marine enclosure',
    'Larger batteries and stronger propulsion for fast rivers',
    'Better controller tuning and obstacle sensing for autonomy',
    'Real-time map display on the ground station',
  ],

  // ── People and partners ────────────────────────────────────
  team: ['Siddhant Yadav', 'Hemkala Awasthi', 'Regal Ghimire', 'Rudip Shrestha'],
  supervisors: ['Assoc. Prof. Dr. Shree Raj Shakya', 'Asst. Prof. Kamal Darlami'],
  partners: [
    { name: 'BlueRobotics', role: 'Donated the Ping sonar' },
    { name: 'Armed Police Force, Nepal', role: 'Field testing campaign, May 2026' },
    { name: 'NAST – NCCKMC & KVDA', role: 'Partial research funding (Kathmandu Urban EbA project, GEF/LDCF, UNEP)' },
    { name: 'Nepal Electricity Authority', role: 'Support at Kulekhani' },
    { name: 'IIEC, Pulchowk Campus', role: 'Workspace and facilities' },
    { name: 'Asst. Prof. Biman Rimal', role: 'Provided the LiDAR sensor' },
  ],
};