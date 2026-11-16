import { LearningCategory } from '../../../types/learnExplore';

export const LEARNING_CATEGORIES: LearningCategory[] = [
  {
    id: 'space-fundamentals',
    title: 'Space Fundamentals',
    subtitle: 'The Building Blocks of Cosmos',
    description: 'Master cosmic scales, celestial bodies, optical boundaries, and the foundational architecture of the observable universe.',
    iconName: 'Globe',
    gradient: 'from-[#38BDF8]/20 via-[#0284C7]/10 to-transparent',
    badgeColor: '#38BDF8',
    topicIds: [
      'universe',
      'stars',
      'planets',
      'galaxies',
      'nebulae',
      'asteroids-and-comets',
      'constellations',
      'light-years'
    ]
  },
  {
    id: 'stars-stellar',
    title: 'Stars & Stellar Science',
    subtitle: 'Nuclear Furnaces & Stellar Lifecycles',
    description: 'Investigate the birth, life cycles, thermodynamic luminosity, apparent brightness, and dramatic ends of stars.',
    iconName: 'Sun',
    gradient: 'from-[#F59E0B]/20 via-[#D97706]/10 to-transparent',
    badgeColor: '#F59E0B',
    topicIds: [
      'star-formation',
      'stellar-evolution',
      'apparent-brightness',
      'absolute-magnitude',
      'luminosity',
      'variable-stars',
      'supernovae',
      'black-holes',
      'neutron-stars'
    ]
  },
  {
    id: 'planets-exoplanets',
    title: 'Planets & Exoplanets',
    subtitle: 'Orbital Mechanics & Alien Worlds',
    description: 'Explore Keplerian orbits, gravitational tides, habitable goldilocks zones, sub-stellar brown dwarfs, and exoplanet detection.',
    iconName: 'Orbit',
    gradient: 'from-[#10B981]/20 via-[#059669]/10 to-transparent',
    badgeColor: '#10B981',
    topicIds: [
      'planetary-orbits',
      'gravity',
      'exoplanets',
      'habitable-zones',
      'brown-dwarfs',
      'planetary-atmospheres'
    ]
  },
  {
    id: 'light-spectral',
    title: 'Light & Spectral Science',
    subtitle: 'Photons, Wavelengths & Spectroscopic Fingerprints',
    description: 'Unpack the electromagnetic spectrum, near-infrared transmission, molecular absorption lines, and time-domain light curves.',
    iconName: 'Activity',
    gradient: 'from-[#A855F7]/20 via-[#7C3AED]/10 to-transparent',
    badgeColor: '#A855F7',
    topicIds: [
      'electromagnetic-spectrum',
      'wavelength',
      'frequency',
      'infrared-astronomy',
      'spectroscopy',
      'redshift-and-blueshift',
      'light-curves',
      'inverse-square-law'
    ]
  },
  {
    id: 'deep-space',
    title: 'Deep Space & Cosmology',
    subtitle: 'Galactic Evolution & the Expanding Universe',
    description: 'Journey through the Milky Way, dark matter halos, accelerating cosmic expansion, the Big Bang, and spacetime ripples.',
    iconName: 'Compass',
    gradient: 'from-[#EC4899]/20 via-[#BE185D]/10 to-transparent',
    badgeColor: '#EC4899',
    topicIds: [
      'milky-way',
      'galaxy-formation',
      'dark-matter',
      'dark-energy',
      'big-bang-theory',
      'cosmic-microwave-background',
      'gravitational-waves'
    ]
  },
  {
    id: 'space-missions',
    title: 'Space Missions & Technology',
    subtitle: 'Space Observatories & Astronomical Data',
    description: 'Discover how NASA SPHEREx, Gaia, and NEOSSat collect multi-spectral FITS data across multiple celestial epochs.',
    iconName: 'Telescope',
    gradient: 'from-[#6366F1]/20 via-[#4F46E5]/10 to-transparent',
    badgeColor: '#6366F1',
    topicIds: [
      'space-telescopes',
      'nasa-spherex',
      '102-spectral-channels',
      'astronomical-coordinates',
      'right-ascension-declination',
      'fits-files',
      'multi-epoch-observations',
      'gaia-mission',
      'neossat-mission'
    ]
  }
];

export const INITIAL_LEARNING_STATE: import('../../../types/learnExplore').UserLearningState = {
  xp: 120,
  streakDays: 3,
  lastActiveDate: new Date().toISOString().split('T')[0],
  completedTopicIds: ['universe', 'stars'],
  inProgressTopicId: 'apparent-brightness',
  quizHistory: {
    'universe': {
      topicId: 'universe',
      completed: true,
      viewedAt: new Date().toISOString(),
      quizPassed: true,
      bestScore: 100,
      totalAttempts: 1,
      accuracy: 100
    },
    'stars': {
      topicId: 'stars',
      completed: true,
      viewedAt: new Date().toISOString(),
      quizPassed: true,
      bestScore: 80,
      totalAttempts: 1,
      accuracy: 80
    }
  },
  unlockedAchievements: ['first-step', 'starlight-seeker'],
  bookmarkedTopicIds: ['apparent-brightness', 'nasa-spherex', '102-spectral-channels']
};

export const LEARNING_ACHIEVEMENTS: import('../../../types/learnExplore').LearningAchievement[] = [
  {
    id: 'first-step',
    title: 'Cosmic Curious',
    description: 'Read your very first astronomy topic in SKYVERSE.',
    icon: 'Sparkles',
    requiredTopicsCount: 1
  },
  {
    id: 'starlight-seeker',
    title: 'Starlight Seeker',
    description: 'Complete 3 topics and score 80%+ on their quizzes.',
    icon: 'Sun',
    requiredTopicsCount: 3
  },
  {
    id: 'spectral-analyst',
    title: 'Spectral Prodigy',
    description: 'Complete the Light & Spectral Science category with distinction.',
    icon: 'Activity',
    requiredTopicsCount: 8
  },
  {
    id: 'spherex-specialist',
    title: 'SPHEREx Specialist',
    description: 'Master Space Telescopes, 102 Spectral Channels, and FITS files.',
    icon: 'Telescope',
    requiredTopicsCount: 15
  },
  {
    id: 'master-cosmologist',
    title: 'Master Cosmologist',
    description: 'Amass 1,000+ Learning XP across all cosmic science categories.',
    icon: 'Award',
    requiredXp: 1000
  }
];

