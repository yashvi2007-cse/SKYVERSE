import { StageInfo, LevelDefinition, AchievementBadge, QuestPlayerState, PlayerRank, DailyChallenge } from '../../types/quest';

export const QUEST_STAGES: StageInfo[] = [
  {
    id: 'stage1',
    name: 'Stage 1 — Starlight Beginner',
    subtitle: 'Perception, Optical Contrast & Apparent Flux',
    levels: [1, 2, 3],
    accentColor: '#38BDF8', // Cyan
    badge: 'Starlight Novice'
  },
  {
    id: 'stage2',
    name: 'Stage 2 — Understanding Starlight',
    subtitle: 'Magnitudes, Inverse-Square Law & Stellar Luminosity',
    levels: [4, 5, 6],
    accentColor: '#818CF8', // Indigo
    badge: 'Astrophysics Apprentice'
  },
  {
    id: 'stage3',
    name: 'Stage 3 — Stellar Explorer',
    subtitle: 'Time-Domain Variability, Light Curves & Object Types',
    levels: [7, 8, 9],
    accentColor: '#A78BFA', // Violet
    badge: 'Time-Domain Analyst'
  },
  {
    id: 'stage4',
    name: 'Stage 4 — Cosmic Scientist',
    subtitle: 'Infrared Astronomy, Molecular Spectra & Verification',
    levels: [10, 11, 12],
    accentColor: '#F59E0B', // Amber-Gold
    badge: 'Certified Cosmic Scientist'
  }
];

export const QUEST_ACHIEVEMENTS: AchievementBadge[] = [
  {
    id: 'first_light',
    name: 'First Starlight',
    description: 'Successfully identified your first brighter stellar source in Level 1.',
    icon: '✨',
    stage: 'stage1',
    requiredLevel: 1
  },
  {
    id: 'luminance_sorter',
    name: 'Flux Arranger',
    description: 'Accurately sorted five stars across the full dynamic range in Level 2.',
    icon: '📊',
    stage: 'stage1',
    requiredLevel: 2
  },
  {
    id: 'apparent_detective',
    name: 'Astrometric Detective',
    description: 'Decoupled celestial object morphology from apparent brightness in Level 3.',
    icon: '🔍',
    stage: 'stage1',
    requiredLevel: 3
  },
  {
    id: 'magnitude_master',
    name: 'Magnitude Master',
    description: 'Mastered Hipparchus & Pogson’s logarithmic magnitude scale in Level 4.',
    icon: '📐',
    stage: 'stage2',
    requiredLevel: 4
  },
  {
    id: 'inverse_square_ace',
    name: 'Inverse-Square Ace',
    description: 'Verified geometric dilution of light flux across distance in Level 5.',
    icon: '⚡',
    stage: 'stage2',
    requiredLevel: 5
  },
  {
    id: 'luminosity_champion',
    name: 'Luminosity Champion',
    description: 'Disentangled intrinsic stellar power from observer distance in Level 6.',
    icon: '🌟',
    stage: 'stage2',
    requiredLevel: 6
  },
  {
    id: 'variable_watcher',
    name: 'Variable Star Watcher',
    description: 'Detected periodic flux variations and identified stellar pulsations in Level 7.',
    icon: '📈',
    stage: 'stage3',
    requiredLevel: 7
  },
  {
    id: 'light_curve_builder',
    name: 'Light Curve Architect',
    description: 'Constructed an astronomical time-series light curve from raw epochs in Level 8.',
    icon: '⏱️',
    stage: 'stage3',
    requiredLevel: 8
  },
  {
    id: 'star_planet_sleuth',
    name: 'Cosmic Taxonomist',
    description: 'Distinguished nuclear energy producers from reflected planetary bodies in Level 9.',
    icon: '🪐',
    stage: 'stage3',
    requiredLevel: 9
  },
  {
    id: 'infrared_visionary',
    name: 'Thermal Visionary',
    description: 'Penetrated obscuring interstellar dust using near-infrared wavelengths in Level 10.',
    icon: '🔴',
    stage: 'stage4',
    requiredLevel: 10
  },
  {
    id: 'spectral_detective',
    name: 'Spectral Fingerprinter',
    description: 'Identified molecular absorption bands in SPHEREx near-IR channels in Level 11.',
    icon: '🌈',
    stage: 'stage4',
    requiredLevel: 11
  },
  {
    id: 'cosmic_scientist',
    name: 'Certified Cosmic Scientist',
    description: 'Completed the full quest and resolved the capstone time-domain investigation in Level 12!',
    icon: '🎓',
    stage: 'stage4',
    requiredLevel: 12
  }
];

export const QUEST_LEVELS: LevelDefinition[] = [
  // STAGE 1
  {
    id: 1,
    stageId: 'stage1',
    title: 'Spot the Brighter Star',
    subtitle: 'Perception of Visual Starlight',
    concept: 'Apparent Brightness & Photon Counting',
    description: 'Telescopes measure light as photons striking a detector. Compare two simulated stars and identify which star has a higher apparent brightness.',
    xpReward: 100,
    scientificFormula: 'N_γ = F × A × Δt',
    learningPoints: [
      'Apparent brightness describes how bright a celestial object appears to an observer on Earth or in orbit.',
      'A brighter star delivers more photons per second into our optical aperture.',
      'In digital astronomical images, brighter stars produce larger Point Spread Functions (PSFs) and higher pixel counts.'
    ],
    learnMoreText: 'When professional observatories like SPHEREx image the sky, incoming photons hit mercury-cadmium-telluride (HgCdTe) detectors. Pixels convert photons into photo-electrons. Brighter stars yield higher counts in analog-to-digital units (ADU).',
    scientificContextLink: {
      module: 'explorer',
      label: 'Open Sky Explorer',
      description: 'Explore authentic SPHEREx FITS pixel values and image intensity stretch modes.'
    }
  },
  {
    id: 2,
    stageId: 'stage1',
    title: 'The Brightness Challenge',
    subtitle: 'Ordering Relative Stellar Brightness',
    concept: 'Dynamic Range & Comparative Flux',
    description: 'The sky contains stars spanning orders of magnitude in flux. Arrange these five stars from brightest to dimmest.',
    xpReward: 125,
    scientificFormula: 'F_1 > F_2 > F_3 > F_4 > F_5',
    learningPoints: [
      'Astronomers rank stars by sorting their relative flux values.',
      'The human eye perceives brightness logarithmically, meaning a star must be significantly brighter to be perceived as clearly distinct.',
      'Precise aperture photometry measures total counts within a calibrated radius to rank stars objectively.'
    ],
    learnMoreText: 'Dynamic range in astronomy is the ratio between the brightest saturating star and the faintest detectable signal above the background noise floor. Telescopes must handle millions of photons from nearby stars without blinding detectors to faint background galaxies.',
    scientificContextLink: {
      module: 'explorer',
      label: 'Examine WCS Fluxes',
      description: 'See how astronomical cutouts preserve relative brightness between companion stars.'
    }
  },
  {
    id: 3,
    stageId: 'stage1',
    title: 'Brightness Detective',
    subtitle: 'Apparent Brightness vs. Object Nature',
    concept: 'Apparent Flux from Different Celestial Objects',
    description: 'Apparent brightness depends strictly on the flux arriving at our telescope, regardless of whether the object is a single star, a diffuse nebula, or an entire galaxy of 200 billion suns. Find the brightest-appearing object.',
    xpReward: 125,
    scientificFormula: 'F_{obs} = \\int f_\\lambda d\\lambda',
    learningPoints: [
      'A tiny star located just 4 light-years away can appear hundreds of times brighter in our night sky than a giant galaxy containing 200 billion stars located 2.5 million light-years away.',
      'Point sources concentrate their flux into a tight diffraction core, whereas extended sources (nebulae, galaxies) spread light over thousands of pixels.',
      'Never confuse an object’s actual physical size with how bright it looks in the night sky.'
    ],
    learnMoreText: 'Surface brightness measures flux per square arcsecond. A galaxy might emit 10^11 times more total energy than our Sun, but because that light is spread across billions of square parsecs, its apparent surface brightness is faint and ghostly.',
    scientificContextLink: {
      module: 'targets',
      label: 'Inspect Challenge Targets',
      description: 'Compare nearby Barnard’s Star with distant stellar systems.'
    }
  },

  // STAGE 2
  {
    id: 4,
    stageId: 'stage2',
    title: 'The Magnitude Mission',
    subtitle: 'The Logarithmic Astronomical Magnitude Scale',
    concept: 'Pogson’s Logarithmic Magnitude Formula',
    description: 'Ancient astronomer Hipparchus classified naked-eye stars from magnitude 1 (brightest) to 6 (faintest). Modern astronomy standardized this into a precise logarithmic scale where LOWER numbers indicate BRIGHTER objects.',
    xpReward: 150,
    scientificFormula: 'm_1 - m_2 = -2.5 \\log_{10}(F_1 / F_2)',
    learningPoints: [
      'The magnitude scale is inverted: smaller or negative numbers indicate brighter objects.',
      'Sirius has an apparent magnitude of -1.46, Vega is 0.0, the faintest naked-eye star is ~6.5, and SPHEREx observes down to magnitude ~19.5.',
      'A difference of exactly 5 magnitudes corresponds to a factor of 100 in observed flux. Each 1 magnitude step is a flux ratio of ~2.512.'
    ],
    learnMoreText: 'In 1856, Norman Pogson formalized Hipparchus’s system mathematically: 100^(1/5) ≈ 2.511886. Thus, a star of magnitude 1 is ~2.512 times brighter than magnitude 2, ~6.31 times brighter than magnitude 3, and exactly 100 times brighter than magnitude 6.',
    scientificContextLink: {
      module: 'investigation',
      label: 'Inspect Gaia DR3 Magnitudes',
      description: 'View real G, BP, and RP magnitudes extracted from ESA Gaia DR3 astrometry.'
    }
  },
  {
    id: 5,
    stageId: 'stage2',
    title: 'Cosmic Distance Mystery',
    subtitle: 'The Inverse-Square Law of Light',
    concept: 'Geometric Dilution of Radiation',
    description: 'Light radiates equally in all directions, spreading across a sphere whose area grows with the square of the distance. Move the star and observe how its apparent flux changes according to the inverse-square law.',
    xpReward: 150,
    scientificFormula: 'F = \\frac{L}{4\\pi d^2}',
    learningPoints: [
      'If you double the distance to a star (d → 2d), its light spreads over 4 times the area, reducing apparent brightness to 1/4 (25%).',
      'If you triple the distance (d → 3d), its apparent brightness drops to 1/9 (~11%).',
      'At 5 times the distance (d → 5d), observed flux drops to just 1/25 (4%)!'
    ],
    learnMoreText: 'Because space is three-dimensional, radiant energy passes through concentric spherical surfaces. The surface area of a sphere is 4πd². Since the total luminosity L is constant, the flux per unit area F = L / (4πd²).',
    scientificContextLink: {
      module: 'investigation',
      label: 'Calculate Parallax Distances',
      description: 'See how Gaia parallax angles (ϖ in milliarcseconds) yield distance in parsecs: d = 1 / ϖ.'
    }
  },
  {
    id: 6,
    stageId: 'stage2',
    title: 'Luminosity Lab',
    subtitle: 'Decoupling Luminosity from Distance',
    concept: 'Intrinsic Power vs. Observed Flux',
    description: 'Luminosity is the total electromagnetic power a star produces (measured in Watts or Solar Luminosities L_☉). Apparent brightness is only what reaches Earth. Identify which star produces more total energy.',
    xpReward: 175,
    scientificFormula: 'L = 4\\pi d^2 F',
    learningPoints: [
      'A high-luminosity supergiant star located far away can look faint from Earth.',
      'A low-luminosity red dwarf located close to Earth can appear brighter than a distant supergiant.',
      'To know a star’s true nature, astronomers must measure BOTH apparent flux (photometry) and distance (astrometric parallax).'
    ],
    learnMoreText: 'Our Sun has a luminosity L_☉ ≈ 3.828 × 10^26 Watts. Betelgeuse has a luminosity over 100,000 L_☉, but because it is ~550 light-years away, it appears no brighter than nearby Sirius (which is only 25 L_☉ but just 8.6 light-years away).',
    scientificContextLink: {
      module: 'targets',
      label: 'Compare Stellar Targets',
      description: 'Contrast Barnard’s Star (0.0035 L_☉) with luminous variable giants like R Draconis.'
    }
  },

  // STAGE 3
  {
    id: 7,
    stageId: 'stage3',
    title: 'Variable Star Watch',
    subtitle: 'Light Changing Across Time',
    concept: 'Time-Domain Astronomy & Stellar Pulsations',
    description: 'The sky is not static. Many stars pulsate, eclipse, or experience massive flares. Monitor a pulsating variable star in real time, record its brightness cycle, and determine its period.',
    xpReward: 175,
    scientificFormula: 'P = t_{peak, 2} - t_{peak, 1}',
    learningPoints: [
      'Variable stars change in brightness over periods ranging from fractions of a second to hundreds of days.',
      'Pulsating variables (like Cepheids and Miras) physically expand and contract, changing in both surface area and temperature.',
      'Measuring variability periods allows astronomers to calculate distances across the cosmos and understand stellar interiors.'
    ],
    learnMoreText: 'Henrietta Leavitt discovered in 1912 that Cepheid variables exhibit a strict period-luminosity relationship: longer pulsation periods correspond to brighter intrinsic luminosities. This discovery allowed Edwin Hubble to prove that Andromeda is an independent galaxy.',
    scientificContextLink: {
      module: 'time-machine',
      label: 'Open Cosmic Time Machine',
      description: 'Blink multi-epoch observations to spot variable stars and moving objects.'
    }
  },
  {
    id: 8,
    stageId: 'stage3',
    title: 'Build a Light Curve',
    subtitle: 'Scientific Data Visualization',
    concept: 'Time-Series Photometry & Phase Folding',
    description: 'Astronomers track time-domain changes by compiling light curves. Place observation measurements onto the graph to reconstruct the light curve and uncover the object’s variability behavior.',
    xpReward: 200,
    scientificFormula: '\\Delta m = m_{max} - m_{min}',
    learningPoints: [
      'A light curve plots measured brightness (or apparent magnitude) along the vertical y-axis against observation time (epochs) on the horizontal x-axis.',
      'The shape of the curve reveals the physical mechanism: symmetric curves indicate radial pulsations; sharp asymmetric dips indicate eclipsing binaries or transiting exoplanets.',
      'SPHEREx surveys the entire sky every 6 months, building up 4 to 8 multi-epoch measurements for every celestial coordinate.'
    ],
    learnMoreText: 'In time-domain astronomy, data is often sparse. Advanced algorithms like Lomb-Scargle periodograms are applied to unevenly spaced observation timestamps to extract hidden periodic signals from noise.',
    scientificContextLink: {
      module: 'time-machine',
      label: 'View Time-Lapse Sequences',
      description: 'Step through chronological epochs to track brightness variations.'
    }
  },
  {
    id: 9,
    stageId: 'stage3',
    title: 'Star or Planet?',
    subtitle: 'Distinguishing Celestial Bodies',
    concept: 'Nuclear Fusion vs. Reflected Albedo',
    description: 'Stars generate their own light through nuclear fusion in their cores. Planets and moons shine primarily by reflecting light from their host star. Analyze properties to correctly classify the celestial object.',
    xpReward: 200,
    scientificFormula: 'F_{planet} = F_{star} \\left(\\frac{R_p}{a}\\right)^2 A_g',
    learningPoints: [
      'Stars are incandescent plasma generating continuous energy via thermonuclear hydrogen fusion.',
      'Planets reflect a fraction (albedo A) of incoming host starlight and emit thermal infrared radiation based on their equilibrium temperature.',
      'Under telescope inspection, stars are point sources that twinkle due to Earth’s turbulent atmosphere, whereas nearby planets resolve into small discs that do not twinkle.'
    ],
    learnMoreText: 'Brown dwarfs occupy the mass gap (13 to 80 Jupiter masses) between planets and stars: they never achieved stable hydrogen fusion, but they emit internal heat from gravitational contraction in the infrared.',
    scientificContextLink: {
      module: 'targets',
      label: 'Inspect WISE 0855 & Epsilon Indi B',
      description: 'Study sub-stellar brown dwarfs that emit primarily thermal infrared radiation.'
    }
  },

  // STAGE 4
  {
    id: 10,
    stageId: 'stage4',
    title: 'Infrared Vision',
    subtitle: 'The Electromagnetic Spectrum Beyond Optical',
    concept: 'Wavelength Penetration & Dust Extinction',
    description: 'Visible light is easily blocked by interstellar dust. Infrared wavelengths have longer cycles that pass right through dust grains. Slide through wavelengths to reveal hidden stars embedded inside a stellar nursery.',
    xpReward: 225,
    scientificFormula: 'A_\\lambda \\propto \\lambda^{-1.75}',
    learningPoints: [
      'Interstellar extinction scatters short visible wavelengths (blue/green) much more severely than long infrared wavelengths.',
      'Near-infrared light (0.75 - 5.0 µm) penetrates dense clouds of cosmic dust, revealing newborn protostars and the centers of galaxies.',
      'SPHEREx carries a cryogenic near-infrared telescope specifically to map galaxies and interstellar ice without dust interference.'
    ],
    learnMoreText: 'Dust grains in space are comparable in size to visible light wavelengths (~0.5 µm), causing strong Rayleigh and Mie scattering. Infrared waves (1 to 5 µm) are larger than typical dust grains, allowing them to pass through unhindered.',
    scientificContextLink: {
      module: 'spectral',
      label: 'Explore 102 Spectral Channels',
      description: 'See how SPHEREx splits 0.75 to 5.00 µm into 102 individual bandpasses.'
    }
  },
  {
    id: 11,
    stageId: 'stage4',
    title: 'SPHEREx Spectral Challenge',
    subtitle: 'Decoding Molecular Chemical Fingerprints',
    concept: 'Spectrophotometry & Molecular Absorption Bands',
    description: 'Every chemical molecule absorbs specific infrared wavelengths. Inspect an educational 102-channel near-infrared spectrum and identify the molecular absorption bands of water ice and carbon dioxide.',
    xpReward: 250,
    scientificFormula: 'I(\\lambda) = I_0(\\lambda) e^{-\\tau(\\lambda)}',
    learningPoints: [
      'A spectrum graphs radiant intensity against wavelength λ.',
      'Water ice (H₂O) produces a prominent, wide absorption dip centered near 3.05 µm.',
      'Carbon dioxide ice (CO₂) causes a sharp absorption feature centered at 4.27 µm, while CO absorbs at 4.67 µm.',
      'By analyzing these 102 channels, SPHEREx maps the biogenic ingredients of water and organics across our Milky Way.'
    ],
    learnMoreText: 'SPHEREx uses 6 Linear Variable Filters (LVFs) mounted directly above its detector arrays. As light passes through the wedge-shaped dielectric coatings, the transmitted wavelength varies continuously across the detector.',
    scientificContextLink: {
      module: 'spectral',
      label: 'Extract Real SPHEREx Spectra',
      description: 'Run quick-look spectral extractions across real coordinates.'
    }
  },
  {
    id: 12,
    stageId: 'stage4',
    title: 'The Cosmic Investigator',
    subtitle: 'Capstone Scientific Investigation',
    concept: 'Full Time-Domain & Astrometric Synthesis',
    description: 'Put all your skills to the test! A citizen science alert has flagged an anomalous infrared source. Blink multi-epoch frames, analyze its photometer flux, check its infrared color, and classify this mysterious celestial object.',
    xpReward: 300,
    scientificFormula: '\\vec{\\mu} = \\frac{\\Delta \\vec{\\theta}}{\\Delta t}, \\quad \\Delta m(t)',
    learningPoints: [
      'Scientific discovery in time-domain astronomy requires combining astrometric position shifts, photometric light curves, and multi-band spectral colors.',
      'High proper motion objects are nearby stars or cool brown dwarfs traversing our solar neighborhood.',
      'Completing this capstone investigation certifies you as a SKYVERSE Cosmic Scientist ready to contribute real candidate discoveries!'
    ],
    learnMoreText: 'Real citizen science investigations like those in the SKYVERSE Discovery Hub empower researchers worldwide to find sub-stellar brown dwarfs, variable young stellar objects, and high-velocity stars.',
    scientificContextLink: {
      module: 'discovery',
      label: 'Launch Discovery Hub',
      description: 'Submit your own candidate observations with unique tracking IDs.'
    }
  }
];

export const INITIAL_PLAYER_STATE: QuestPlayerState = {
  xp: 0,
  currentLevel: 1,
  unlockedLevel: 1,
  rank: 'Starlight Beginner',
  streak: 1,
  lastPlayedDate: new Date().toISOString().split('T')[0],
  soundEnabled: true,
  completedLevels: {},
  unlockedBadges: [],
  playerName: 'Cadet Astronomer'
};

export const DAILY_CHALLENGE: DailyChallenge = {
  id: 'daily_inv_sq',
  date: new Date().toISOString().split('T')[0],
  title: 'Inverse-Square Master Challenge',
  description: 'Complete the Level 5 Cosmic Distance Mystery physics simulation with 3 stars.',
  xpReward: 50,
  completed: false,
  targetLevel: 5
};

export const calculateRank = (xp: number): PlayerRank => {
  if (xp >= 1600) return 'Cosmic Scientist';
  if (xp >= 1100) return 'Stellar Analyst';
  if (xp >= 650) return 'Astronomy Learner';
  if (xp >= 250) return 'Cosmic Explorer';
  return 'Starlight Beginner';
};

export const calculateNextRankThreshold = (xp: number): { nextRank: PlayerRank; neededXP: number; progress: number } => {
  if (xp >= 1600) {
    return { nextRank: 'Cosmic Scientist', neededXP: 0, progress: 100 };
  }
  if (xp >= 1100) {
    const diff = 1600 - 1100;
    const current = xp - 1100;
    return { nextRank: 'Cosmic Scientist', neededXP: 1600 - xp, progress: Math.min(100, Math.round((current / diff) * 100)) };
  }
  if (xp >= 650) {
    const diff = 1100 - 650;
    const current = xp - 650;
    return { nextRank: 'Stellar Analyst', neededXP: 1100 - xp, progress: Math.min(100, Math.round((current / diff) * 100)) };
  }
  if (xp >= 250) {
    const diff = 650 - 250;
    const current = xp - 250;
    return { nextRank: 'Astronomy Learner', neededXP: 650 - xp, progress: Math.min(100, Math.round((current / diff) * 100)) };
  }
  const diff = 250;
  return { nextRank: 'Cosmic Explorer', neededXP: 250 - xp, progress: Math.min(100, Math.round((xp / diff) * 100)) };
};
