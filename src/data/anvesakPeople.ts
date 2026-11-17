// People and organisations shown in "Team and supporters" on the ANVESAK page.
//
// Photos go in:  public/people/<file>.jpg   (square or portrait, about 300 x 300 px is plenty)
// Logos go in:   public/orgs/<file>.png     (transparent or white background)
// A missing image shows a neat initials badge, so you can add them one by one.
//
// For every person you can set:
//   url     - makes the NAME a link (e.g. a personal website)
//   scholar - adds a "Google Scholar" link under the name. Paste the full profile address,
//             e.g. 'https://scholar.google.com/citations?user=XXXXXXXX'. Leave '' to hide it.
import type { Person, Org } from '../components/PeopleKit';

export const supervisors: Person[] = [
  { name: 'Assoc. Prof. Dr. Shree Raj Shakya', role: 'Supervisor · Director, Center for Energy Studies, IOE', image: '/people/shree-raj-shakya.jpg', url: 'https://scholar.google.com/citations?user=E_mZJP0AAAAJ&hl=fr&oi=ao' },
  { name: 'Asst. Prof. Kamal Darlami', role: 'Supervisor · Dept. of Mechanical and Aerospace Engineering', image: '/people/kamal-darlami.jpg', url: 'https://www.kamaldarlami.com.np/', scholar: '' },
];

export const advisors: Person[] = [
  { name: 'Asst. Prof. Dr. Sudip Bhattrai', role: 'Head, Dept. of Mechanical and Aerospace Engineering', image: '/people/sudip-bhattrai.jpg', url: 'https://scholar.google.com/citations?user=C-LiMykAAAAJ&hl=fr' },
  { name: 'Asst. Prof. Biman Rimal', role: 'Provided the LiDAR sensor, with feedback and support', image: '/people/biman-rimal.jpg', url: 'https://scholar.google.com/citations?user=Oh1DAi0AAAAJ&hl=fr&oi=ao' },
];

export const team: Person[] = [
  { name: 'Siddhant Yadav', role: 'Project lead', image: '/mine.jpg' },
  { name: 'Hemkala Awasthi', role: '', image: '/people/hemkala-awasthi.jpg' },
  { name: 'Regal Ghimire', role: '', image: '/people/regal-ghimire.jpg' },
  { name: 'Rudip Shrestha', role: '', image: '/people/rudip-shrestha.jpg' },
];

export const orgs: Org[] = [
  { name: 'BlueRobotics', role: 'Donated the Ping sonar', logo: '/orgs/bluerobotics.png', url: 'https://bluerobotics.com/' },
  { name: 'Armed Police Force, Nepal', role: 'Field testing campaign, May 2026', logo: '/orgs/apf.png' },
  { name: 'NAST – NCCKMC & KVDA', role: 'Partial research funding (Kathmandu Urban EbA project)', logo: '/orgs/nast.png' },
  { name: 'Nepal Electricity Authority', role: 'Support at Kulekhani', logo: '/orgs/nea.png' },
  { name: 'IIEC, Pulchowk Campus', role: 'Workspace and facilities', logo: '/orgs/iiec.png' },
  { name: 'Pulchowk Campus, IOE', role: 'Home department', logo: '/orgs/pulchowk.png' },
];
