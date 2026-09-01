export type Classification = 'ai' | 'organic' | 'hybrid';

export interface Tape {
  id: string;
  title: string;
  artist: string;
  classification: Classification;
  genre: string;
  mood: string;
  bpm: number;
  key: string;
  duration: string;
  cover: string;
  description: string;
  skillsNeeded: string[];
  collaborationStatus: 'open' | 'closed' | 'pitch-ready';
  rating: number;
  plays: string;
  createdAt: string;
}

export interface Review {
  id: string;
  tapeTitle: string;
  tapeArtist: string;
  reviewer: string;
  reviewerRole: string;
  rating: number;
  body: string;
  date: string;
}

export interface CollabOpportunity {
  id: string;
  type: string;
  tapeTitle: string;
  artist: string;
  classification: Classification;
  description: string;
  skillsNeeded: string[];
}

export const tapes: Tape[] = [
  {
    id: 'td-001',
    title: 'Reel to Reel',
    artist: 'Loso Jones',
    classification: 'hybrid',
    genre: 'Alt R&B',
    mood: 'Late Night',
    bpm: 72,
    key: 'F# minor',
    duration: '3:42',
    cover: 'https://images.pexels.com/photos/8168570/pexels-photo-8168570.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'AI-generated demo reworked with live bass and analog synth layers. Second verse still needs a vocalist.',
    skillsNeeded: ['Vocalist', 'Mix Engineer'],
    collaborationStatus: 'open',
    rating: 4.7,
    plays: '12.4K',
    createdAt: '2 days ago',
  },
  {
    id: 'td-002',
    title: 'Ghost Frequency',
    artist: 'NOVA-9',
    classification: 'ai',
    genre: 'Electronic',
    mood: 'Ethereal',
    bpm: 128,
    key: 'A minor',
    duration: '4:15',
    cover: 'https://images.pexels.com/photos/8168564/pexels-photo-8168564.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Fully AI-generated ambient electronic piece. Built from a single prompt and evolved across three iterations.',
    skillsNeeded: ['Producer', 'Live Drummer'],
    collaborationStatus: 'open',
    rating: 4.3,
    plays: '8.1K',
    createdAt: '5 days ago',
  },
  {
    id: 'td-003',
    title: 'Dust & Static',
    artist: 'Mara Clay',
    classification: 'organic',
    genre: 'Indie Folk',
    mood: 'Melancholic',
    bpm: 65,
    key: 'C major',
    duration: '3:18',
    cover: 'https://images.pexels.com/photos/20792953/pexels-photo-20792953.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Stripped-back acoustic demo recorded in a single take. Looking for a cellist and a producer for full arrangement.',
    skillsNeeded: ['Cellist', 'Producer'],
    collaborationStatus: 'open',
    rating: 4.9,
    plays: '5.7K',
    createdAt: '1 day ago',
  },
  {
    id: 'td-004',
    title: 'Brass Circuit',
    artist: 'The Analog Collective',
    classification: 'hybrid',
    genre: 'Jazz Fusion',
    mood: 'Driving',
    bpm: 110,
    key: 'D minor',
    duration: '5:02',
    cover: 'https://images.pexels.com/photos/8896511/pexels-photo-8896511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'AI brass arrangement paired with live rhythm section. Needs a mastering engineer for final polish.',
    skillsNeeded: ['Mastering Engineer'],
    collaborationStatus: 'pitch-ready',
    rating: 4.6,
    plays: '3.2K',
    createdAt: '1 week ago',
  },
  {
    id: 'td-005',
    title: 'Lowlight',
    artist: 'KAIRO',
    classification: 'ai',
    genre: 'Ambient',
    mood: 'Cinematic',
    bpm: 90,
    key: 'E minor',
    duration: '6:30',
    cover: 'https://images.pexels.com/photos/8168567/pexels-photo-8168567.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'AI-generated cinematic soundscape. Seeking a visual artist for sync collaboration and film placement.',
    skillsNeeded: ['Visual Artist', 'Sync'],
    collaborationStatus: 'open',
    rating: 4.1,
    plays: '15.8K',
    createdAt: '3 days ago',
  },
  {
    id: 'td-006',
    title: 'Wirehead',
    artist: 'Sable Tone',
    classification: 'organic',
    genre: 'Post-Punk',
    mood: 'Aggressive',
    bpm: 140,
    key: 'B minor',
    duration: '2:55',
    cover: 'https://images.pexels.com/photos/3109821/pexels-photo-3109821.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Raw garage recording. Full band performance captured live to four-track. Seeking remix producer.',
    skillsNeeded: ['Remixer', 'Mix Engineer'],
    collaborationStatus: 'open',
    rating: 4.4,
    plays: '6.3K',
    createdAt: '4 days ago',
  },
];

export const reviews: Review[] = [
  {
    id: 'r-001',
    tapeTitle: 'Reel to Reel',
    tapeArtist: 'Loso Jones',
    reviewer: 'Dex Marlow',
    reviewerRole: 'Producer · 12 years',
    rating: 4.5,
    body: 'The chorus is genuinely strong and the bass anchoring it has real weight. The second verse loses momentum though — a live vocal with some grit could create a stronger transition into the final chorus. The AI elements work best in the verses where the texture supports rather than leads.',
    date: '3 days ago',
  },
  {
    id: 'r-002',
    tapeTitle: 'Dust & Static',
    tapeArtist: 'Mara Clay',
    reviewer: 'Yuki Tanaka',
    reviewerRole: 'Songwriter · 8 years',
    rating: 5.0,
    body: 'This is the kind of demo that most writers wish they could make. The vocal performance carries real vulnerability and the guitar work is confident without being flashy. A cello line in the bridge would elevate this from a good demo to a finished record. The songwriting is already there.',
    date: '1 day ago',
  },
  {
    id: 'r-003',
    tapeTitle: 'Ghost Frequency',
    tapeArtist: 'NOVA-9',
    reviewer: 'Priya Shah',
    reviewerRole: 'Engineer · 10 years',
    rating: 4.0,
    body: 'The sound design is impressive for a fully AI-generated piece. The low end is well-controlled and the stereo image is wide. However, the arrangement lacks dynamic contrast — everything sits at the same energy level throughout. A live drummer adding human variation in the second half would transform this.',
    date: '4 days ago',
  },
];

export const collabOpportunities: CollabOpportunity[] = [
  {
    id: 'c-001',
    type: 'Vocalist Wanted',
    tapeTitle: 'Reel to Reel',
    artist: 'Loso Jones',
    classification: 'hybrid',
    description: 'Seeking a vocalist for the second verse and final chorus. Alt R&B feel, think late-night warm tones.',
    skillsNeeded: ['Vocals', 'Alt R&B'],
  },
  {
    id: 'c-002',
    type: 'Producer Wanted',
    tapeTitle: 'Ghost Frequency',
    artist: 'NOVA-9',
    classification: 'ai',
    description: 'Need a producer to add dynamic contrast and arrangement variation to a flat AI-generated electronic piece.',
    skillsNeeded: ['Production', 'Electronic'],
  },
  {
    id: 'c-003',
    type: 'Cellist Wanted',
    tapeTitle: 'Dust & Static',
    artist: 'Mara Clay',
    classification: 'organic',
    description: 'Looking for a cellist to record a bridge part for an indie folk demo. Single take, warm room sound.',
    skillsNeeded: ['Cello', 'Folk'],
  },
  {
    id: 'c-004',
    type: 'Mastering Engineer Wanted',
    tapeTitle: 'Brass Circuit',
    artist: 'The Analog Collective',
    classification: 'hybrid',
    description: 'Final polish needed on a jazz fusion hybrid track before pitch submission. Analog chain preferred.',
    skillsNeeded: ['Mastering', 'Jazz'],
  },
];
