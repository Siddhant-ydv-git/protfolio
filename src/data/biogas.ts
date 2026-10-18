// ─────────────────────────────────────────────────────────────
//  Biogas Feasibility Study at NAST: page content.
//  Edit text / links here. Layout lives in src/pages/BiogasPage.tsx
//  Images live in public/projects/biogas/  (refer to them as '/projects/biogas/<file>')
//  Source of all facts: the NAST internship report (Jan 2026).
// ─────────────────────────────────────────────────────────────

const img = (f: string) => `/projects/biogas/${f}`;

export const biogas = {
  title: 'Biogas Feasibility Study at NAST',
  tagline: 'Can kitchen waste from Kathmandu’s markets power everyday cooking? We built a working digester at NAST, fed it, measured it and burned the gas to find out.',
  heroImage: img('hero-digester.jpg'),
  org: 'Nepal Academy of Science and Technology (NAST), Khumaltar',
  period: 'Industrial attachment, 2025–26',

  // ── Headline numbers ───────────────────────────────────────
  stats: [
    { value: '≈ 5 m³', label: 'biogas collected at NTP in about 40 days' },
    { value: '59–75%', label: 'methane in the measured gas' },
    { value: '2,000 L', label: 'water to start up the digester' },
    { value: 'pH 6.5–7', label: 'slurry stayed near neutral' },
    { value: '24 min', label: 'to boil 1 L of water (from 18 °C)' },
    { value: '93 °C', label: 'water temperature in the best burn test' },
  ],

  // ── The question ───────────────────────────────────────────
  problem: {
    heading: 'Urban food waste is a problem. It could also be a fuel.',
    points: [
      'Large amounts of kitchen and vegetable waste are dumped in landfills or left to rot in the open, causing odour, methane emissions and health risks.',
      'Household biogas plants in Nepal mostly run on cow dung. Institutional systems that use urban kitchen waste are still rare.',
      'The question we set out to answer: does a small digester actually work under real, uncontrolled conditions, with real feed, weather and delays?',
    ],
  },

  // ── Setup ──────────────────────────────────────────────────
  setup: {
    intro: 'We used a TEENWIN biogas digester. It was first planned for an air-conditioned basement, but we moved it outdoors beside the NAST café, because the aim was to test real conditions, not ideal ones.',
    reasons: [
      'Close to a steady supply of kitchen waste',
      'Biogas could one day fuel the café’s cooking',
      'Easy to reach for daily feeding and monitoring',
      'Digested slurry can fertilise the nearby garden',
    ],
    photos: [
      { src: img('site-nast-cafe.jpg'), caption: 'The chosen site, beside the NAST café' },
      { src: img('setup-team.jpg'), caption: 'Setting up and filling the digester' },
      { src: img('digester-outlet.jpg'), caption: 'The digester with its gas outlet connected' },
    ],
  },

  // ── Feeding ────────────────────────────────────────────────
  feeding: [
    {
      phase: 'Step 1', title: 'Starting the culture with cow dung',
      points: [
        'Collected by hand from NARC, about 2 km away, and carried to site',
        '20 kg fed per day, over 10 days (not continuous)',
        'Gaps of up to 12 days during Tihar and postponed exams',
      ],
      image: img('cow-dung-transport.jpg'), pos: '50% 88%', caption: 'Carrying cow dung from NARC',
    },
    {
      phase: 'Step 2', title: 'Switching to kitchen waste',
      points: [
        'About 200 kg of rotten vegetables and fruit from Kalimati market',
        'Mixed 1:1 with water, crushed into a slurry and left to rot',
        '10 kg of slurry fed daily for more than a month',
      ],
      image: img('feed-preparation.jpg'), pos: '50% 70%', caption: 'Preparing the slurry',
    },
  ],

  // ── Monitoring ─────────────────────────────────────────────
  monitoring: [
    { title: 'Temperature, 24 × 7', text: 'A waterproof DS18B20 probe inside the digester, an Arduino UNO, an SD card module and two 3.7 V LiPo cells logged temperature day and night. Data was plotted in MATLAB.', image: img('electronics.jpg'), fit: 'cover', pos: '50% 50%' },
    { title: 'Gas volume and methane', text: 'An air pump moved gas from the digester to a storage bag through an ultrasonic flow meter, which recorded volume, flow rate and methane content (59–75%).', image: img('volume-diagram.jpg'), fit: 'contain', pos: '50% 50%' },
    { title: 'pH of the slurry', text: 'Output slurry was tested regularly at the NAST biology lab. It stayed almost constant, between 6.5 and 7, close to neutral.', visual: 'ph' },
    { title: 'Daily feed record', text: 'Every feeding was logged: weight, type of feed and the feed-to-water ratio, so production could be linked back to what went in.', image: img('feeding.jpg'), fit: 'cover', pos: '50% 35%' },
  ] as { title: string; text: string; image?: string; fit?: 'cover' | 'contain'; pos?: string; visual?: 'ph' }[],

  // ── Highlight: the stirrer-cover ───────────────────────────
  // NOTE: names and descriptions of the four parts below were written from the
  // CAD screenshot. Please check they match how the part really works.
  stirrer: {
    label: 'My contribution',
    title: 'A 3D-printed stirrer that also seals the inlet',
    intro: 'Fresh feed has to be mixed into the digester, and the inlet should stay closed to keep air out. I designed one printed part that does both jobs: it stirs the feed, and its wide plate doubles as a cover for the inlet opening.',
    chips: ['Designed in SolidWorks', '3D printed in-house', '3 printed parts', 'Stirs + seals'],
    image: img('stirrer-assembly.jpg'),
    parts: [
      { name: 'Grip', text: 'The ribbed handle at the top, used from outside to push, pull and turn the stirrer.', x: 19.6, y: 17 },
      { name: 'Cover plate', text: 'The wide disc rests over the inlet opening, so the feed has less contact with air while the digester is closed.', x: 47.5, y: 42.5 },
      { name: 'Shaft', text: 'A long rod connects the grip to the mixing head and reaches down into the feed.', x: 61.3, y: 60.7 },
      { name: 'Mixing head', text: 'A perforated plate with paddles that works through the thick slurry to break up clumps and mix new feed into what is already inside.', x: 80, y: 79 },
    ],
    // Add one entry per YouTube video, using the ID from youtube.com/shorts/THIS_PART.
    videos: [
      { id: 'i2u8UZolJiU', title: 'Timelapse: 3D printing the stirrer' },
      { id: 'C0pmu8rHkKI', title: 'Timelapse: CAD designing the stirrer' },
    ],
  },

  // ── Results ────────────────────────────────────────────────
  results: {
    intro: 'We judged the gas the practical way: by burning it.',
    boilImage: img('boiling-test.jpg'),
    boilCaption: 'Water boiling test on the biogas stove',
    bars: [
      { label: 'Outdoors, uncontrolled', value: 76, note: '16 °C → 76 °C' },
      { label: 'Indoors, controlled', value: 93, note: 'reached 93 °C, close to boiling' },
    ],
    notes: [
      'With the nozzle fully open, 1 L of water at 18 °C boiled in about 24 minutes.',
      'That is slower than a typical LPG stove. The gas came at low, unregulated pressure, even with a 30–40 kg load placed on the gas bag.',
      'Gas production was still continuing after the 40-day observation period.',
      'Comparing outdoor and indoor tests showed how strongly the environment affects how much of the gas’s heat is actually used.',
    ],
  },

  // ── Lessons ────────────────────────────────────────────────
  challenges: [
    { title: 'Irregular feeding', text: 'Festivals and postponed exams caused gaps of up to 12 days between feedings.' },
    { title: 'Slurry preparation', text: 'The 1:1 feed-to-water mix needed more careful preparation.' },
    { title: 'A burnt-out pump', text: 'Water and slurry travelled into the air pump during gas transfer and destroyed its circuit.' },
    { title: 'Leaking gas', text: 'Loosely tightened valves on the digester and storage bag let gas escape.' },
  ],

  next: [
    'Measure the overall thermal efficiency of stove, burner and pot, using LPG as the reference fuel',
    'Estimate the calorific value of the biogas from those comparison tests',
    'Keep logging production over a longer period for more reliable data',
    'Add pressure regulation to get a stronger, steadier flame',
    'Write up the work as a feasibility case study for Khumaltar (manuscript in preparation)',
  ],

  // ── People ─────────────────────────────────────────────────
  team: ['Siddhant Yadav', 'Hemkala Awasthi', 'Regal Ghimire', 'Rudip Shrestha'],
  supervisors: ['Dr. Ishwor Bajracharya, NAST', 'Mr. Deen Bandhu Parajuli, Technical Officer, NAST'],
  thanks: [
    { name: 'Er. Prashant Paudyal', role: 'Support throughout the work' },
    { name: 'NARC', role: 'Cow dung for the digester' },
    { name: 'Kalimati Fruit and Vegetable Market', role: 'Kitchen waste for feed' },
    { name: 'NAST staff', role: 'Lab access, vehicle and a friendly workplace' },
    { name: 'Dept. of Mechanical and Aerospace Engineering, IOE Pulchowk', role: 'Industrial attachment programme' },
  ],
};
