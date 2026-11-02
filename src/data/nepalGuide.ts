// ─────────────────────────────────────────────────────────────
//  "Planning a trip to Nepal?" blog: all content lives here.
//  Layout lives in src/pages/NepalGuidePage.tsx
//  Photos go in public/blog/nepal/  (the file names are listed below, next to each slot)
//  Videos: paste the YouTube ID (the 11 characters after /shorts/ or v=) into any `id: ''`.
//  While you run `npm run dev` every empty slot shows a dashed box. On the live site, empty slots hide.
// ─────────────────────────────────────────────────────────────
import type { PhotoSpec, VideoSpec } from '../components/MediaKit';

const p = (file: string, alt: string, hint: string, caption?: string): PhotoSpec => ({ file, alt, hint, caption });

export const guide = {
  slug: 'places-to-visit-in-nepal',
  title: 'Planning a trip to Nepal? Here’s where I’d send you',
  subtitle: 'A short, honest guide from someone who grew up here, written for a first-time visitor.',
  date: 'October 2026',
  readTime: '10 min read',
  category: 'Travel',
  tags: ['Nepal', 'Travel', 'Himalaya', 'Trekking', 'Kathmandu', 'Pokhara', 'Chitwan'],

  intro: [
    'My manager,who is from Germany, is planning a holiday. I told him he should visit Nepal at least once. He asked a fair question: where would you actually go?',
    'Explaining that in a chat or an email did not work, so I built this page. It has the places I would send you, a little about why Nepal looks the way it does, and the photos and videos that words cannot do justice.',
  ],

  hero: p('hero.jpg', 'A view of the Himalaya in Nepal', 'A wide, beautiful photo to open the page: a Himalayan panorama works best (landscape, at least 1600 px wide).'),

  toc: [
    ['why-nepal', 'Why Nepal looks like this'],
    ['kathmandu', 'Kathmandu'],
    ['around', 'Around the valley'],
    ['classics', 'Pokhara, Chitwan, Lumbini'],
    ['story', 'High up'],
    ['more', 'And more'],
    ['treks', 'Treks'],
    ['plan', 'Plan it'],
  ] as [string, string][],

  // ── 1. Geology ─────────────────────────────────────────────
  geology: {
    label: 'The big picture',
    title: 'Why Nepal looks the way it does',
    text: [
      'About 130 million years ago, a slab of land that was part of the giant southern supercontinent Gondwana, the same landmass that once held Africa, Antarctica and Australia together, broke away and began drifting north. That slab is the Indian Tectonic plate.',
      'It crossed the old Tethys Ocean, at times moving 15 to 20 cm a year, much faster than most plates ever manage. About 50 million years ago it ran into the Eurasian plate, the one that carries Tibet. Neither side could simply sink, so the crust crumpled and piled upward. The Himalaya is what that crash looks like.',
      'And it is not over. Indian Tectonic plate still pushes north at roughly 5 cm a year and the mountains keep rising by a few millimetres every year. It is also why Nepal has earthquakes. Drag the slider to watch it happen.',
    ],
    fossil: 'The summit of Everest is limestone that formed on a warm, shallow seafloor about 450 million years ago. Climbers walk on ancient seabed, with fossils of trilobites and sea lilies (crinoids) in the rock.',
    facts: [
      ['8 of 14', 'of the world’s 8,000 m peaks are in Nepal, wholly or on its borders'],
      ['8,848.86 m', 'Mount Everest, the highest point on Earth'],
      ['about 60 m', 'the lowest point, down in the southern plains (the Terai)'],
      ['~200 km', 'roughly how wide the country is, from jungle to glaciers'],
    ] as [string, string][],
    profileIntro: 'Because Nepal is a long, narrow strip laid across that collision, you can start in tropical jungle and be among glaciers within a day or two. Here is a rough sketch of the country from south to north. Every place in this guide sits on it.',
  },

  // Elevation sketch: x is "km from the southern border", elevations are the real heights of each place.
  profile: {
    markers: [
      { n: 1, name: 'Lumbini', elev: 150, x: 10 },
      { n: 2, name: 'Chitwan', elev: 200, x: 58 },
      { n: 3, name: 'Pokhara', elev: 822, x: 98 },
      { n: 4, name: 'Kathmandu', elev: 1400, x: 112 },
      { n: 5, name: 'Bethanchowk', elev: 3000, x: 132 },
      { n: 6, name: 'Bhairab Kunda', elev: 4250, x: 156 },
      { n: 7, name: 'Everest Base Camp', elev: 5364, x: 170 },
      { n: 8, name: 'Mount Everest', elev: 8849, x: 186 },
    ],
    bands: [['Terai', 0, 40], ['Churia hills', 36, 70], ['Mahabharat & mid-hills', 70, 140], ['High Himalaya', 140, 200], ['Tibet', 200, 225]] as [string, number, number][],
  },

  // ── 2. Kathmandu ───────────────────────────────────────────
  kathmandu: {
    label: 'Start here',
    title: 'Kathmandu',
    text: [
      'Kathmandu’s Tribhuvan International Airport is the main gateway to Nepal. Pokhara and Bhairahawa (near Lumbini) now have airports called “international” too, but almost all flights from Europe still land here, so you will start in Kathmandu either way.',
      'The Kathmandu Valley became a UNESCO World Heritage Site in 1979, listed as seven monument zones. Legend says the whole valley was once a lake. Geologists agree that it really was, before the water drained away.',
    ],
    zones: [
      ['Kathmandu Durbar Square', 'The old royal square, with temples and palace courtyards.'],
      ['Patan Durbar Square', 'Newar art and metalwork, usually quieter than Kathmandu.'],
      ['Bhaktapur Durbar Square', 'A medieval city of brick, woodcarving and pottery.'],
      ['Swayambhunath', 'A hilltop stupa with views over the whole valley.'],
      ['Boudhanath', 'One of the largest stupas in the world, at the heart of Tibetan Buddhism.'],
      ['Pashupatinath', 'The great Hindu temple complex on the Bagmati river.'],
      ['Changu Narayan', 'One of the oldest Hindu temples in the valley, on a hill above Bhaktapur.'],
    ] as [string, string][],
    zonePhoto: p('kathmandu-durbar.jpg', 'A heritage square in the Kathmandu Valley', 'A Durbar Square, stupa or temple photo from the valley.'),
    dharahara: {
      title: 'Dharahara, a tower that came back',
      text: [
        'Dharahara was built in 1832 by Prime Minister Bhimsen Thapa. It was rebuilt after the 1934 earthquake and collapsed again in the earthquake of 25 April 2015, which killed about 180 people at the tower alone.',
        'The new Dharahara, opened in 2021, is 72 m tall with a lift to the viewing deck and a small museum about the quake. Go up for the view, and stay a moment for what it stands for. From the top you can see the whole valley, and the Himalaya beyond it.',
      ],
      photos: [
        p('dharahara-1.jpg', 'The rebuilt Dharahara tower in Kathmandu', 'Your photo of Dharahara.'),
        p('dharahara-2.jpg', 'View from the Dharahara viewing deck', 'A second one, ideally the view from the top.'),
      ],
    },
    taudaha: {
      title: 'Taudaha, the lake of the serpents',
      text: 'Taudaha is a small lake on the south-western edge of the valley. Local legend says serpent spirits (nagas) live beneath it, and for centuries people have avoided fishing or swimming in it. It is a quiet morning trip and a good place to see birds.',
      video: { id: 'R6aSUD79YYc', title: 'Taudaha Lake', short: true, hint: '' } as VideoSpec,
    },
  },

  // ── 3. Around the valley ───────────────────────────────────
  around: {
    label: 'Within a day of the city',
    title: 'Around the valley',
    intro: 'Kathmandu sits in a bowl of hills, so the best views and the quietest walks are one short ride away.',
    places: [
      {
        name: 'Shivapuri Nagarjun',
        facts: ['National park since 2002', 'Day hike'],
        text: 'The only national park inside the valley, set up in 2002 to protect one of its last remaining forests. Walk through woods above the city and look out for birds.',
        photo: p('shivapuri.jpg', 'Forest trail in Shivapuri Nagarjun National Park', 'A forest or ridge photo from Shivapuri Nagarjun.'),
      },
      {
        name: 'Godawari and Phulchoki',
        facts: ['About 15 km south of the city', 'Phulchoki: 2,782 m'],
        text: 'Godawari has a botanical garden of around 82 hectares, and a trail leads up Phulchoki, the highest summit on the valley’s rim. Green, quiet and good for flowers and birds.',
        photo: p('godawari.jpg', 'Godawari botanical garden and Phulchoki hill', 'A photo from Godawari or the Phulchoki trail.'),
      },
      {
        name: 'Bethanchowk',
        facts: ['About 3,000 m', 'Kavre district', 'Overnight camp'],
        text: 'My pick for one of the best sunrises of your life. At about 3,000 m, it is often called the highest point of the Mahabharat range near Kathmandu. Hike up from Dhungkharka (two to three hours), camp on the top with your own gear or sleep in a nearby homestay, and wake up to snow peaks from Langtang to Everest.',
        photo: p('bethanchowk.jpg', 'Sunrise over the Himalaya from Bethanchowk', 'Your best sunrise or camp photo from Bethanchowk.'),
      },
    ],
  },

  // ── 4. The three classics ──────────────────────────────────
  classics: {
    label: 'Beyond the valley',
    title: 'Pokhara, Chitwan and Lumbini',
    intro: 'If you google “places to visit in Nepal”, these three show up again and again, and for good reason. Together with Kathmandu they make a first trip that covers lakes, jungle and the birthplace of the Buddha.',
    places: [
      {
        id: 'pokhara',
        name: 'Pokhara',
        tagline: 'Lakes, sunrise and the Annapurna range',
        facts: [
          ['From Kathmandu', 'about 200 km: a 25-minute flight or 6 to 8 hours by road'],
          ['Altitude', '822 m, much warmer than Kathmandu'],
          ['Best for', 'Lakeside time, mountain views, adventure sports'],
        ] as [string, string][],
        text: [
          'Pokhara is a lakeside city with the Annapurna range as its backdrop. Rent a boat on Phewa Lake, watch the sun rise over the peaks from Sarangkot (about 1,600 m), visit the World Peace Pagoda, or try paragliding. It is also the gateway to the Annapurna treks.',
        ],
        note: { text: 'A small personal link: in May 2026 my team tested our riverbed-mapping boat on Phewa Lake.', to: '/projects/anvesak', label: 'See the project' },
        photos: [
          p('pokhara.jpg', 'Phewa Lake in Pokhara', 'Phewa Lake with the mountains behind it.'),
          p('pokhara-sunrise.jpg', 'Sunrise over the Annapurna range from Sarangkot', 'Optional: Sarangkot sunrise or paragliding.'),
        ],
      },
      {
        id: 'chitwan',
        name: 'Chitwan',
        tagline: 'Rhinos, tigers and river jungle',
        facts: [
          ['From Kathmandu', 'roughly 5 to 6 hours by road'],
          ['Altitude', 'low and hot, around 250 m'],
          ['Best for', 'Wildlife safaris and Tharu village culture'],
        ] as [string, string][],
        text: [
          'Chitwan National Park was Nepal’s first national park (1973) and became a UNESCO World Heritage Site in 1984. It is home to the greater one-horned rhinoceros, with 694 counted in the park in 2021, as well as Bengal tigers, gharial crocodiles and hundreds of bird species. Take a jeep safari, a canoe ride on the river, or a guided walk.',
          'And do not be surprised if an elephant strolls along the road next to you. It really happens. Admire it from a distance and listen to your guide.',
        ],
        photos: [
          p('chitwan.jpg', 'A one-horned rhinoceros in Chitwan National Park', 'A rhino, a safari or the river at sunrise.'),
          p('chitwan-2.jpg', 'Jungle road in Chitwan', 'Optional: a second Chitwan photo.'),
        ],
      },
      {
        id: 'lumbini',
        name: 'Lumbini',
        tagline: 'The birthplace of the Buddha',
        facts: [
          ['Where', 'Rupandehi district, in the southern plains'],
          ['Getting there', 'a short flight to Bhairahawa, or most of a day by road'],
          ['Status', 'UNESCO World Heritage Site since 1997'],
        ] as [string, string][],
        text: [
          'Lumbini is the birthplace of Siddhartha Gautama, the Buddha. The sacred garden holds the Maya Devi Temple, built where tradition places his birth, a marker stone, the sacred Puskarini pond, and the Ashoka Pillar that Emperor Ashoka raised in 249 BCE. Around it, monasteries built by Buddhist communities from many countries line a calm walking area.',
        ],
        photos: [
          p('lumbini.jpg', 'The Maya Devi Temple area in Lumbini', 'Maya Devi Temple, the Ashoka Pillar or a monastery.'),
        ],
      },
    ],
  },

  // ── 5. Personal story ──────────────────────────────────────
  story: {
    label: 'A story from the mountains',
    title: 'Lying on a frozen lake at 4,250 m',
    chips: ['Sindhupalchok district', '4,250 m (13,944 ft)', 'Near the Tibet border', 'Sacred to Hindus and Buddhists'],
    photo: p('bhairabkunda-me.jpg', 'Siddhant lying on the frozen Bhairab Kunda lake', 'THE photo: you lying on the frozen lake at Bhairab Kunda.', 'Me on Bhairab Kunda, at about 13,944 ft.'),
    text: [
      'This is me on Bhairab Kunda, a sacred lake in Sindhupalchok district, close to the Tibet border, at about 4,250 m (13,944 ft). The lake was frozen when I got there, so I lay down on it for a photo and looked at the sky.',
      'I stayed overnight in a small hotel nearby, and I ended up in a long, late-night conversation with the owner’s daughter. It is one of the parts of that trip I remember best.',
      'This kind of beauty comes at a cost. Life in these high, remote places is not easy: long winters, thin air, and little in the way of roads, shops or hospitals. Yet when you talk to the people who live there and see how they go about their day, something shifts. How do they stay so content in a place so hard? I still think about it. If you go, make time to sit down and talk with the people you meet.',
    ],
  },

  // ── 6. Rafting ─────────────────────────────────────────────
  rafting: {
    label: 'An easy adventure',
    title: 'Take a day on the Trishuli',
    text: [
      'If you want some adventure without days of trekking, go rafting on the Trishuli River, a few hours from Kathmandu. It begins in the high Langtang and Gosaikunda area, where melting ice from Gosaikunda feeds it.',
      'I know this river a little differently. In May 2026 our final-year project, a boat that maps the riverbed, was tested here with the Armed Police Force following us in a raft. Being out on that current taught us a lot of respect for it.',
    ],
    link: { to: '/projects/anvesak', label: 'Read about the project' },
    photos: [
      p('trishuli-1.jpg', 'Rafting on the Trishuli River', 'Your rafting photo.'),
      p('trishuli-2.jpg', 'Rapids on the Trishuli River', 'A second rafting photo.'),
    ],
    videos: [
      { id: 'K1dllcDFihE', title: 'Rafting the Trishuli', hint: '' },
    ] as VideoSpec[],
  },

  // ── 7. And more ────────────────────────────────────────────
  more: {
    label: 'There is more',
    title: 'Nepal does not stop there',
    places: [
      {
        name: 'Sailung Dada',
        facts: ['Dolakha district', 'About 3,150 m', '6 to 7 hours from Kathmandu'],
        text: 'Sailung, northeast of the valley, is known for its hundred little hillocks and a wide-open Himalayan view across Everest, Langtang, Ganesh Himal and the Rolwaling range. We went in my third year of college with our classmates, and we had a really great time.',
        photo: p('sailung.jpg', 'Friends at Sailung Dada', 'Your college trip photo from Sailung.'),
      },
      {
        name: 'Jiri',
        facts: ['Dolakha district', 'About 190 km east of Kathmandu', '“Switzerland of Nepal”'],
        text: 'Jiri is nicknamed the “Switzerland of Nepal” for its green hills and cheese. Before the Lukla airstrip existed, almost every Everest expedition, including the 1953 one that put Hillary and Tenzing on the summit, began its walk through Jiri. Few trekkers start there now, which is exactly why it feels quiet.',
        photo: p('jiri.jpg', 'The hills around Jiri', 'A photo from Jiri.'),
      },
    ],
  },

  // ── 8. Treks ───────────────────────────────────────────────
  treks: {
    label: 'The real Nepal',
    title: 'Please plan at least one trek',
    intro: 'Now that you know how Nepal is built, you can see why I say this is a country to experience, not just to visit. Plan at least one trek. Pick a route that matches your fitness, go with a guide on remote trails, and take your time going up.',
    cards: [
      {
        name: 'Shey Phoksundo Lake',
        facts: ['Dolpo', '3,611 m'],
        text: 'A turquoise lake inside Shey Phoksundo National Park, Nepal’s largest, with Tibetan-influenced villages around it. Remote and unforgettable.',
        photo: p('phoksundo.jpg', 'Shey Phoksundo Lake', 'Phoksundo or a Dolpo trail photo. Use your own, or a CC-licensed one from Wikimedia Commons with credit.'),
      },
      {
        name: 'Rara Lake',
        facts: ['Mugu', '2,990 m'],
        text: 'Nepal’s largest lake, deep blue and ringed by forest inside Rara National Park. Far from the crowds.',
        photo: p('rara.jpg', 'Rara Lake', 'Rara Lake photo (own, or CC-licensed with credit).'),
      },
      {
        name: 'Tilicho Lake',
        facts: ['Manang', '4,919 m'],
        text: 'One of the highest lakes in the world for its size, reached from the Annapurna Circuit. Cold, vast and turquoise.',
        photo: p('tilicho.jpg', 'Tilicho Lake', 'Tilicho Lake photo (own, or CC-licensed with credit).'),
      },
      {
        name: 'Langtang Valley',
        facts: ['Rasuwa', 'Closest Himalayan park to Kathmandu'],
        text: 'A drive to Syabrubesi gets you to the trailhead, and from there it is forests, yak pastures and snow peaks all the way to Kyanjin Gompa.',
        photo: p('langtang.jpg', 'Langtang Valley', 'A Langtang trail photo.'),
      },
      {
        name: 'Mustang and Manang by bike',
        facts: ['Annapurna side', 'Upper Mustang needs a special permit'],
        text: 'If you prefer wheels to walking, the high, dry valleys of Manang and Mustang are famous for bike rides and some of the best views you will ever have.',
        photo: p('mustang.jpg', 'Cycling in Mustang', 'A bike or Mustang photo.'),
      },
      {
        name: 'Everest Base Camp',
        facts: ['5,364 m', 'Roughly two weeks round trip'],
        text: 'If you feel strong, this is the classic. It runs from Lukla through Sherpa villages up to the foot of the world’s highest mountain.',
        photo: p('ebc.jpg', 'Trekkers on the Everest Base Camp trail', 'An Everest region photo.'),
      },
    ],
    ebcStory: {},
    offbeat: {
      title: 'If you want the road less travelled',
      places: [
        {
          name: 'Dhorpatan',
          facts: ['Baglung, Myagdi and Rukum', '1,325 km²'],
          text: 'Nepal’s only hunting reserve is also a quiet trekking area, with views of Dhaulagiri, Gurja and Putha Hiunchuli, and wildlife such as blue sheep, Himalayan tahr and the danphe, Nepal’s national bird. Trails here see very few foreign visitors.',
          photo: p('dhorpatan.jpg', 'Meadows and mountains in Dhorpatan', 'A Dhorpatan photo.'),
        },
        {
          name: 'Badimalika',
          facts: ['Bajura, far west', 'About 4,200 m'],
          text: 'A pilgrimage temple of the goddess Bhagwati perched above 22 alpine meadows, in one of the most remote corners of the country. Thousands walk up for the Janai Purnima fair in August. A trek from Martadi takes days, and it feels like another world.',
          photo: p('badimalika.jpg', 'Alpine meadows near Badimalika temple', 'A Badimalika photo.'),
        },
      ],
    },
  },

  // ── 9. Plan it ─────────────────────────────────────────────
  plan: {
    label: 'Make it real',
    title: 'Plan it',
    info: [
      { title: 'When to go', text: 'Late September to November has clear skies and is the best time for trekking. March to May is warmer, and the rhododendrons bloom. The monsoon (June to August) is wet, though some far-western routes like Badimalika are popular then.' },
      { title: 'Visa', text: 'German passport holders need a visa. You can get one on arrival at Tribhuvan Airport or apply online up to 15 days before you fly. As of mid-2026 the fees are USD 30 for 15 days, USD 50 for 30 days and USD 125 for 90 days. Rules can change, so check the official immigration site before you travel.' },
      { title: 'Stay safe', text: 'Take travel insurance that covers trekking at altitude and helicopter evacuation. Go up slowly, and use a licensed guide on remote routes.' },
    ],
    itineraries: [
      {
        title: 'Ten days, no long trek',
        days: [
          ['Days 1 to 3', 'Kathmandu and the valley: heritage squares, Dharahara, Taudaha'],
          ['Day 4', 'Bethanchowk sunrise, or rafting on the Trishuli'],
          ['Days 5 to 6', 'Chitwan: safari, canoe and village walk'],
          ['Days 7 to 9', 'Pokhara: Phewa Lake, Sarangkot sunrise, paragliding'],
          ['Day 10', 'Fly back to Kathmandu'],
        ] as [string, string][],
      },
      {
        title: 'Two weeks or more, with a trek',
        days: [
          ['First days', 'Kathmandu and the valley, as above'],
          ['Then pick one', 'Langtang (drive to Syabrubesi), the Annapurna region from Pokhara, or Everest Base Camp via Lukla'],
          ['If you have time', 'Add Chitwan, and Lumbini by a short flight to Bhairahawa'],
        ] as [string, string][],
      },
    ],
    closing: 'If any of this sounds good, tell me what you enjoy most (mountains, wildlife, culture or plain rest) and I will help you shape the route. Questions are always welcome.',
  },

  sources: [
    ['UNESCO: Kathmandu Valley', 'https://whc.unesco.org/en/list/121'],
    ['Wikipedia: World Heritage Sites in Nepal', 'https://en.wikipedia.org/wiki/List_of_World_Heritage_Sites_in_Nepal'],
    ['Montana State University: Everest summit limestone', 'https://www.montana.edu/everest/facts/summit-limestone.html'],
    ['EarthDate: India and the Himalaya', 'https://www.earthdate.org/node/1109'],
    ['EarthSky: why India raced north', 'https://earthsky.org/?p=219891'],
    ['NTNC: National Rhino Count 2021', 'https://www.ntnc.org.np/news/752-one-horned-rhinos-nepal-determined-national-rhino-count-2021'],
    ['DNPWC: Dhorpatan Hunting Reserve', 'https://dnpwc.gov.np/en/conservation-area-detail/61'],
    ['Wikipedia: Dharahara', 'https://en.wikipedia.org/wiki/Dharahara'],
    ['Wikipedia: Jiri', 'https://en.wikipedia.org/wiki/Jiri'],
    ['Nepal Traveller: Bhairav Kunda', 'https://nepaltraveller.com/sidetrack/bhairav-kunda-unveiling-the-hidden-treasures-of-sindhupalchok'],
    ['Wikipedia: Visa policy of Nepal', 'https://en.wikipedia.org/wiki/Visa_policy_of_Nepal'],
  ] as [string, string][],
};
