// ─────────────────────────────────────────────────────────────
//  Biomass Briquette Study at NAST: page content.
//  Edit text / links here. Layout lives in src/pages/BriquettePage.tsx
//  Images live in public/projects/briquettes/  (use '/projects/briquettes/<file>')
//  Source of all facts: the NAST internship report (Jan 2026).
// ─────────────────────────────────────────────────────────────

const img = (f: string) => `/projects/briquettes/${f}`;

export const briquettes = {
  title: 'Biomass Briquette Study at NAST',
  tagline: 'We revived a briquetting machine that had sat unused for eight years, which tested our mechanical engineering skills to its limit, pressed invasive-plant biochar and rice bran into solid fuel, and measured how much energy each recipe holds.',
  org: 'Nepal Academy of Science and Technology, Khumaltar',
  period: 'Industrial attachment, 2025–26',

  // ── Headline numbers ───────────────────────────────────────
  stats: [
    { value: '8 years', label: 'the machine sat unused before we restored it' },
    { value: '1 month', label: 'to repair and rewire it' },
    { value: '5', label: 'briquette samples' },
    { value: '25', label: 'bomb-calorimeter tests' },
    { value: '21.8 MJ/kg', label: 'best blend: 60–70% biochar + rice bran' },
    { value: '+42%', label: 'energy vs rice bran alone' },
  ],

  // ── The question ───────────────────────────────────────────
  problem: {
    heading: 'Farm waste is burned in the open. It could be burned on purpose.',
    points: [
      'Rice bran, straw and invasive plants pile up every year. Much of it is thrown away or burned in the open, polluting the air.',
      'Many households still depend on firewood and raw biomass, which burn inefficiently and smoke heavily indoors.',
      'Briquettes pack loose biomass into dense, uniform fuel that stores and burns better. The catch: quality depends on particle size, moisture, binder, pressure and temperature, and you only learn that by doing it.',
    ],
  },

  // ── How a briquette is made ────────────────────────────────
  steps: [
    { title: 'Prepare', text: 'Raw material is collected, sorted, weighed and mixed in a chosen ratio.' },
    { title: 'Feed', text: 'The mix goes into the hopper and a screw conveyor pulls it into the barrel.' },
    { title: 'Press', text: 'Pressure and heat in the extrusion barrel compact it, and the die shapes the briquette.' },
    { title: 'Test', text: 'Pieces are burned inside an oxygen bomb calorimeter to measure their energy content.' },
  ],
  machineParts: [
    ['Feed hopper', 'Holds the loose biomass'],
    ['Screw conveyor', 'Pushes material forward'],
    ['Extrusion barrel', 'Where the material is compressed'],
    ['Heating coil', 'Warms the barrel (no thermostat, a flaw we found)'],
    ['Die section', 'Shapes the briquette'],
    ['Power transmission', 'Motor and drive to the screw'],
  ] as [string, string][],

  // ── Restoration story (highlight) ──────────────────────────
  restore: {
    label: 'The hard part',
    title: 'Reviving a machine that had sat idle for eight years',
    intro: 'Before we could press a single briquette, we had to make the machine work again. It had stood idle for about eight years. Its wiring was dead, its barrel was jammed with old material, and some parts were damaged.',
    stages: [
      { phase: 'Inspect', title: 'Found: jammed, dirty, dead', text: 'Mechanical jamming, deposits of old material and damaged components. The workspace itself needed a full clean-up.', image: img('machine-before.jpg') },
      { phase: 'Repair', title: 'Rewired, cleaned, loosened', text: 'All wiring was faulty, so the motor and heating coil were rewired (about a month of work). The barrel and screw were cleaned, and jammed sections were freed with lubricants, chemical treatment and controlled heating.', image: img('team-repair.jpg') },
      { phase: 'Retry', title: 'Jam, heat, repeat', text: 'Carbonised biomass kept jamming the barrel on trial runs. Once, excessive heating even set trapped material alight inside the machine.', image: img('jammed-heating.jpg') },
    ],
    // Add your timelapse videos in the `videos` list below.
  },

  // ── Feedstock ──────────────────────────────────────────────
  feedstock: [
    { name: 'Lantana biochar', text: 'Charcoal made from Lantana camara, an invasive plant. It was already at the facility, stored in an open drum for years.', role: 'Main fuel' },
    { name: 'Rice bran', text: 'Contains natural starch, so it works as the binder that holds the briquette together.', role: 'Binder' },
    { name: 'Wheat straw', text: 'Collected from farmland in Mahottari. Its large particle size jammed the screw, so it was left out of the briquettes. Turning it into biochar first is the planned fix.', role: 'Set aside' },
  ],
  feedPhotos: [
    { src: img('raw-materials.jpg'), caption: 'Raw materials brought from Mahottari, Nepal' },
    { src: img('weighing.jpg'), caption: 'Weighing feed material' },
  ],

  // ── Testing ────────────────────────────────────────────────
  testing: {
    intro: 'Energy content was measured in an automatic oxygen bomb calorimeter at NAST, which burns a small sample in oxygen and records the temperature rise.',
    points: [
      'Five briquette samples were tested in the first trial.',
      'As safety concerns grew, later tests used unpressed powder mixtures instead of fully formed briquettes.',
      'Each recipe was tested three times, for 25 tests in all, using distilled water as the calorimeter medium.',
      'The calorimeter takes less than 1 g, and with no pelletiser available, briquettes were broken into small pieces by hand.',
      //'We noticed that inconsistent pH of the distilled water changed the readings.',
    ],
    photos: [
      { src: img('calorimeter.jpg'), caption: 'The automatic oxygen bomb calorimeter' },
      { src: img('samples.jpg'), caption: 'Briquettes made from different mixtures' },
    ],
  },

  // ── Results ────────────────────────────────────────────────
  // Best reading per recipe, in MJ/kg (the lab reports J/g: 1 J/g = 1 kJ/kg).
  results: {
    intro: 'Adding rice bran to biochar gave a fuel that holds far more energy than rice bran or straw alone.',
    max: 25,
    bars: [
      { label: 'Solid-powder biochar', value: 23.0, note: 'highest reading' },
      { label: 'Biochar 60% + rice bran 40%', value: 21.8, note: '20.1 – 21.8 over 3 tests', best: true },
      { label: 'Biochar 70% + rice bran 30%', value: 21.8, note: '21.6 – 21.8', best: true },
      { label: 'Biochar 80% + rice bran 20%', value: 21.6, note: '' },
      { label: '80 : 20, not heat-treated', value: 20.0, note: '' },
      { label: '60% biochar, 25% rice bran, 5% soil, 10% starch (+10% moisture)', value: 17.9, note: '17.6 – 17.9' },
      { label: 'Paral bhus (straw)', value: 16.4, note: '' },
      { label: 'Rice bran only', value: 15.4, note: '' },
    ],
    notes: [
      'Blends of 60–70% biochar with rice bran reached about 21.6–21.8 MJ/kg, around 42% more than rice bran alone (15.4).',
      'The mix with added soil, starch and moisture read lower, at about 17.6–17.9 MJ/kg.',
      'Repeated runs on pure biochar varied widely, from about 15 to 23 MJ/kg, and water pH affected readings.',
    ],
  },

  // ── Videos (YouTube) ───────────────────────────────────────
  // Add timelapse videos here. Use the 11-character ID from the link
  // (youtube.com/watch?v=THIS_PART or youtube.com/shorts/THIS_PART).
  // Set short: true for vertical YouTube Shorts. The section stays hidden while empty.
  videos: [
    // { id: 'XXXXXXXXXXX', title: 'Timelapse: restoring the briquetting machine', short: true },
  ] as { id: string; title: string; short?: boolean }[],

  // ── What went wrong ────────────────────────────────────────
  challenges: [
    { title: 'A bang like a cannon', text: 'Material stuck in the barrel turned to vapour under the closed lid, and the machine went off with a bang. Nobody was hurt.', image: img('smoke-incident.jpg') },
    { title: 'Dust everywhere', text: 'Without proper protective gear, biochar dust made breathing hard and got into eyes, nose and throat. Pressing was paused until the air was safer.' },
    { title: 'No temperature control', text: 'The heating coil stayed on once switched on, which hurt stability and was a serious safety risk during long runs. Furthermore, different value of temperature is required at different stages of the process. Lack of temperature control make is impossible to control the temperature.' },
    { title: 'Unsteady readings', text: 'Inconsistent pH of the distilled water affected the energy readings.' },
  ] as { title: string; text: string; image?: string }[],
  lessons: [
    'Wear proper PPE: dust masks, eye protection and gloves',
    'Read the machine manual before operating anything',
    'Plan the work and the schedule in advance',
    'Review the literature before starting field work',
  ],

  next: [
    'Finish proximate analysis: moisture, volatile matter, ash and fixed carbon',
    'Turn wheat straw into biochar, and reduce its particle size, so it can be pressed',
    'Fit a temperature controller and a pressure-relief mechanism to the machine',
    'Calibrate the calorimeter with standard reference materials',
    'Use proper PPE for every session',
  ],

  // ── People ─────────────────────────────────────────────────
  team: ['Siddhant Yadav', 'Hemkala Awasthi', 'Regal Ghimire', 'Rudip Shrestha'],
  supervisors: ['Dr. Ishwor Bajracharya, NAST', 'Mr. Deen Bandhu Parajuli, Technical Officer, NAST'],
  thanks: [
    { name: 'Er. Prashant Paudyal', role: 'Support throughout the work' },
    { name: 'Renewable Energy Testing Station, NAST', role: 'Machine, calorimeter and lab space' },
    { name: 'NAST staff', role: 'A friendly and encouraging workplace' },
    { name: 'Dept. of Mechanical and Aerospace Engineering, IOE Pulchowk', role: 'Industrial attachment programme' },
  ],
};
