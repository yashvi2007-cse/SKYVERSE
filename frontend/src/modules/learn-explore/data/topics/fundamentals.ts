import { TopicItem } from '../../../../types/learnExplore';

export const FUNDAMENTALS_TOPICS: TopicItem[] = [
  {
    id: 'universe',
    categoryId: 'space-fundamentals',
    title: 'The Observable Universe',
    subtitle: 'Everything that exists in space, time, matter, and energy',
    difficulty: 'Beginner',
    readingTimeMinutes: 5,
    iconName: 'Globe',
    summary: 'The universe encompasses all of physical reality, spanning an observable diameter of roughly 93 billion light-years with trillions of galaxies.',
    introduction: 'When we look up into the night sky, we are gazing into the boundless expanse of the universe. The universe is not just empty space with distant stars; it is the fabric of space and time itself, constantly expanding since its birth approximately 13.8 billion years ago.',
    simpleExplanation: 'Imagine blowing up a balloon with dots drawn on it. As the balloon inflates, every dot moves away from every other dot. That is how our universe expands! There is no physical "center" or "edge" in 3D space; rather, the fabric of space itself is stretching across billions of years.',
    howItWorks: [
      'Origin in the Big Bang: Began approximately 13.8 billion years ago from an extremely hot, dense singularity.',
      'Cosmic Expansion: Spacetime itself expands uniformly; distant galaxies appear to recede faster from us due to Hubble-Lemaître expansion.',
      'Composition: Ordinary matter (atoms, gas, stars) makes up only ~5% of the universe. Dark matter comprises ~27%, and mysterious dark energy accounts for ~68% of the total cosmic energy density.',
      'Cosmic Web: Gravity sculpts matter into vast filaments and clusters separated by enormous cosmic voids.'
    ],
    whyItMatters: [
      'Provides the universal laboratory for all fundamental physical laws, from quantum mechanics to Einstein’s general relativity.',
      'Understanding cosmic evolution allows astronomers to predict the ultimate fate of space, stars, and cosmological horizons.'
    ],
    terminology: [
      {
        term: 'Observable Universe',
        definition: 'The spherical region of the universe containing all matter that can be observed from Earth today, bounded by the cosmic light horizon (~93 billion light-years in diameter).'
      },
      {
        term: 'Cosmic Scale Factor',
        definition: 'A mathematical parameter that quantifies how distances between galaxies grow over cosmological epochs.'
      },
      {
        term: 'Cosmic Void',
        definition: 'Vast, underdense regions between galaxy filaments that contain almost no galaxies.'
      }
    ],
    facts: [
      'Because light takes time to travel, looking deep into the universe is literally looking back in time to the dawn of the cosmos.',
      'The cosmic horizon expands every single second as ancient light finally completes its journey to Earth.'
    ],
    keyTakeaways: [
      'The universe is ~13.8 billion years old and its observable realm stretches across 93 billion light-years.',
      'Space itself is expanding, carrying galaxy clusters apart.',
      'Everything we see in stars and planets represents merely 5% of the cosmos.'
    ],
    vizType: 'celestial-galaxy',
    vizTitle: 'Cosmic Web & Observable Horizon Simulation',
    vizDescription: 'Interactive visualization showing expanding cosmic scales and galaxy cluster distribution across the cosmological horizon.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'Explore the Sky in Sky Explorer',
      description: 'Navigate full-sky SPHEREx coordinates and explore distant cosmological deep fields.'
    },
    quizQuestions: [
      {
        id: 'univ_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Approximately how old is our universe based on modern cosmic microwave background measurements?',
        options: ['4.5 billion years', '13.8 billion years', '100 billion years', '6,000 years'],
        correctAnswerIndex: 1,
        explanation: 'Astronomical measurements from ESA Planck and WMAP satellites confirm the age of the universe is approximately 13.787 ± 0.020 billion years.',
        hint: 'It is roughly three times older than our Sun and Solar System (4.6 billion years).'
      },
      {
        id: 'univ_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What percentage of the universe’s total energy-matter budget is made of ordinary matter (atoms, stars, planets)?',
        options: ['Roughly 5%', 'Roughly 50%', 'Over 90%', 'Less than 0.01%'],
        correctAnswerIndex: 0,
        explanation: 'Ordinary baryonic matter makes up only about 4.9% of the universe; dark matter constitutes 26.8% and dark energy accounts for 68.3%.',
        hint: 'The vast majority of the cosmos is invisible dark matter and dark energy.'
      },
      {
        id: 'univ_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: The universe has a known physical wall or boundary at its outer edge.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. The "observable universe" is bounded by the distance light has traveled since the Big Bang, but the physical universe extends beyond that with no known physical boundary.',
        hint: 'Think about whether light travel time creates an observational horizon rather than a physical wall.'
      },
      {
        id: 'univ_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'Astronomers observe two distant galaxies that appear to be separating faster than the speed of light. Does this violate Einstein’s Special Relativity?',
        options: [
          'Yes, Einstein’s theory has been disproven.',
          'No, Special Relativity limits motion through space, whereas cosmic expansion is the stretching of space itself.',
          'Yes, but only if both galaxies contain supermassive black holes.',
          'No, because the galaxies are optical illusions.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Special relativity forbids objects moving through space faster than c. However, in General Relativity, spacetime itself can stretch at arbitrary rates across cosmological distances.',
        hint: 'Consider the distinction between moving inside space versus the expansion of space itself.'
      },
      {
        id: 'univ_q5',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the primary force responsible for pulling matter together into galaxies and clusters?',
        options: ['Electromagnetism', 'Gravity', 'Strong Nuclear Force', 'Centrifugal Force'],
        correctAnswerIndex: 1,
        explanation: 'Gravity is the dominant attractive force across astronomical distances, pulling gas clouds and dark matter into filaments and galaxies.',
        hint: 'It is the force that also keeps the planets orbiting our Sun.'
      }
    ]
  },
  {
    id: 'stars',
    categoryId: 'space-fundamentals',
    title: 'Stars',
    subtitle: 'Self-luminous spheres of plasma powered by nuclear fusion',
    difficulty: 'Beginner',
    readingTimeMinutes: 5,
    iconName: 'Sun',
    summary: 'Stars are massive celestial bodies of ionized gas held together by gravity, generating thermal energy and light via nuclear fusion at their cores.',
    introduction: 'Every star is a cosmic fusion reactor. Balancing the inward crush of gravity against the outward blast of thermal and radiation pressure, stars illuminate the darkness of space and forge the chemical elements necessary for planets and life.',
    simpleExplanation: 'Think of a star as a cosmic tug-of-war. Gravity pulls all its hydrogen gas tightly inward. Deep at the center, the pressure and heat become so intense that hydrogen nuclei slam together and fuse into helium, releasing massive amounts of light and heat that push back against gravity.',
    howItWorks: [
      'Hydrostatic Equilibrium: The inward gravitational collapse is precisely balanced by outward thermal and radiation pressure.',
      'Nuclear Fusion: In stellar cores (at temperatures exceeding 10 million Kelvin), hydrogen atoms fuse into helium through the proton-proton chain or CNO cycle.',
      'Energy Transport: Energy radiates outward through radiative and convective zones before escaping from the photosphere as light.',
      'Spectral Types: Stars are classified by temperature (O, B, A, F, G, K, M) ranging from hot blue giants (over 30,000 K) to cool red dwarfs (~3,000 K).'
    ],
    whyItMatters: [
      'Stars are cosmic element factories: through nucleosynthesis, they create carbon, oxygen, iron, and other heavy elements essential for terrestrial planets.',
      'Stars serve as distance markers (standard candles) and drive cosmic chemical enrichment across galactic history.'
    ],
    terminology: [
      {
        term: 'Hydrostatic Equilibrium',
        definition: 'The stable balance between gravitational compression and outward thermal/radiation pressure inside a star.'
      },
      {
        term: 'Photosphere',
        definition: 'The visible surface layer of a star from which photons freely radiate into space.'
      },
      {
        term: 'Nuclear Fusion',
        definition: 'The physical reaction where atomic nuclei combine to form heavier nuclei, releasing energy according to E = mc².'
      }
    ],
    facts: [
      'Our Sun fuses about 600 million tons of hydrogen into helium every single second.',
      'Red dwarf stars burn their fuel so frugally that they can shine stably for trillions of years.'
    ],
    keyTakeaways: [
      'Stars are kept stable by the balance of gravity and nuclear fusion pressure.',
      'Stellar color indicates surface temperature: blue stars are hot; red stars are cool.',
      'Heavy elements in our bodies were forged inside ancient stars that exploded long ago.'
    ],
    vizType: 'stellar-evolution',
    vizTitle: 'Stellar Fusion & Hydrostatic Equilibrium Visualizer',
    vizDescription: 'Interactive demonstration of the equilibrium between gravitational inward pull and core thermonuclear pressure.',
    skyverseBridge: {
      moduleId: 'targets',
      moduleName: 'Challenge Targets',
      actionLabel: 'Inspect Stars in Challenge Targets',
      description: 'Study extreme stars like Barnard’s Star and pulsating variable R Draconis.'
    },
    quizQuestions: [
      {
        id: 'stars_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What process powers the light and heat generated at the core of main sequence stars?',
        options: ['Chemical combustion of coal', 'Thermonuclear fusion of hydrogen', 'Radioactive decay of uranium', 'Gravitational friction only'],
        correctAnswerIndex: 1,
        explanation: 'Main sequence stars generate energy by fusing hydrogen nuclei into helium under extreme core temperatures and pressures.',
        hint: 'It involves the joining of light atomic nuclei, releasing energy governed by E = mc².'
      },
      {
        id: 'stars_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Which stellar spectral class corresponds to the hottest surface temperatures?',
        options: ['Class M (Red)', 'Class G (Yellow, like our Sun)', 'Class O (Blue)', 'Class K (Orange)'],
        correctAnswerIndex: 2,
        explanation: 'In the Morgan-Keenan spectral sequence (O, B, A, F, G, K, M), Class O stars are the hottest, with surface temperatures exceeding 30,000 Kelvin.',
        hint: 'Remember the mnemonic: "Oh Be A Fine Girl/Guy, Kiss Me".'
      },
      {
        id: 'stars_q3',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'If a stable main sequence star suddenly stopped core nuclear fusion, what would immediately begin to happen to its structure?',
        options: [
          'It would expand into empty space.',
          'Gravity would cause it to contract and collapse inward.',
          'It would turn into a frozen rock immediately.',
          'Its color would immediately shift to ultraviolet.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Without outward thermal and radiation pressure produced by fusion, hydrostatic equilibrium breaks, and gravity pulls the stellar core inward.',
        hint: 'Consider what happens when one side of a balanced tug-of-war stops pulling.'
      },
      {
        id: 'stars_q4',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Cool stars glow red, while extremely hot stars glow blue or blue-white.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. According to Wien’s Displacement Law of blackbody radiation, hotter bodies peak at shorter, higher-energy wavelengths (blue), while cooler bodies peak at longer wavelengths (red).',
        hint: 'Think of how a heated metal bar glows dull red first, then bright yellow and blue-white as it gets hotter.'
      },
      {
        id: 'stars_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What state of equilibrium keeps a star from either blowing apart or collapsing into a point?',
        options: ['Hydrodynamic turbulence', 'Hydrostatic equilibrium', 'Adiabatic expansion', 'Thermal inversion'],
        correctAnswerIndex: 1,
        explanation: 'Hydrostatic equilibrium is the exact physical balance between inward gravitational force and outward thermal gas pressure.',
        hint: 'The word root "hydro" + "static" means fluids in balance.'
      }
    ]
  },
  {
    id: 'planets',
    categoryId: 'space-fundamentals',
    title: 'Planets',
    subtitle: 'Sub-stellar worlds orbiting parent stars or wandering rogue',
    difficulty: 'Beginner',
    readingTimeMinutes: 4,
    iconName: 'Orbit',
    summary: 'Planets are massive celestial bodies orbiting stars that are large enough to be rounded by their own gravity and have cleared their orbital neighborhoods.',
    introduction: 'Planets are the diverse worlds of the cosmos. Ranging from small rocky globes with active volcanoes to titanic gas giants with crushing storms, planets form out of the protoplanetary disks of gas and dust surrounding young stars.',
    simpleExplanation: 'While stars shine by creating their own light, planets are illuminated by reflecting the light of their parent stars. Over billions of years, orbiting dust grains collided and clumped together like snowballs, growing into full-fledged worlds.',
    howItWorks: [
      'Accretion: Dust in protoplanetary disks clumps into planetesimals, then protoplanets, and finally mature planets.',
      'Differentiation: Dense heavy elements (like iron and nickel) sink to form cores, while lighter silicates form mantles and crusts.',
      'Three IAU Criteria: A planet must orbit a star, possess sufficient mass to assume a nearly round shape (hydrostatic equilibrium), and have cleared its orbital neighborhood of competing debris.',
      'Atmospheric Retention: Planetary gravity and magnetic fields prevent solar winds from stripping away volatile atmospheric gases.'
    ],
    whyItMatters: [
      'Planets provide the complex chemical and geological environments required for oceans, atmospheres, and organic life.',
      'Studying diverse planets in our Solar System and beyond helps us understand the origin and destiny of Earth.'
    ],
    terminology: [
      {
        term: 'Accretion',
        definition: 'The gradual accumulation of matter through gravitational attraction in a protoplanetary disk.'
      },
      {
        term: 'Planetesimal',
        definition: 'Kilometer-sized rocky or icy bodies that serve as the early building blocks of planets.'
      },
      {
        term: 'Hydrostatic Equilibrium (Planetary)',
        definition: 'The state where an object is massive enough that its own self-gravity overcomes rock rigidity, pulling it into a spherical shape.'
      }
    ],
    facts: [
      'Jupiter contains more than twice the mass of all other planets in our solar system combined.',
      'Some planets do not orbit any star at all; they are known as rogue or free-floating planets wandering dark interstellar space.'
    ],
    keyTakeaways: [
      'Planets do not generate energy by nuclear fusion; they shine by reflected starlight.',
      'Planets are classified into rocky terrestrial worlds, gas giants, and ice giants.',
      'Thousands of planets (exoplanets) have now been confirmed orbiting other stars.'
    ],
    vizType: 'planetary-orbit',
    vizTitle: 'Planetary Orbital Mechanics & Velocity Simulator',
    vizDescription: 'Interactive demonstration of Keplerian orbital motion showing how distance from the host star dictates orbital speed.',
    skyverseBridge: {
      moduleId: 'targets',
      moduleName: 'Challenge Targets',
      actionLabel: 'Explore WISE 0855 Sub-stellar World',
      description: 'Inspect WISE 0855, one of the coldest known sub-stellar objects just 7.2 light-years from Earth.'
    },
    quizQuestions: [
      {
        id: 'plan_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the primary visual difference between how stars and planets shine in the night sky?',
        options: [
          'Stars produce their own light through nuclear fusion; planets reflect starlight.',
          'Stars are made of rock; planets are made of fire.',
          'Planets are always brighter than all stars.',
          'Stars only emit infrared light; planets emit ultraviolet light.'
        ],
        correctAnswerIndex: 0,
        explanation: 'Stars generate light through internal thermonuclear fusion, whereas planets do not have fusion and shine primarily by reflecting light from their parent star.',
        hint: 'One creates light internally; the other acts like a mirror.'
      },
      {
        id: 'plan_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'According to the International Astronomical Union (IAU) definition, which of the following is NOT a requirement to be classified as a full planet?',
        options: [
          'It must orbit a star directly.',
          'It must have sufficient mass to be nearly round.',
          'It must possess at least one liquid ocean and life.',
          'It must have cleared the neighborhood around its orbit.'
        ],
        correctAnswerIndex: 2,
        explanation: 'Having an ocean or life is not a criterion. The three criteria are: orbiting a star, hydrostatic spherical shape, and clearing its orbital zone.',
        hint: 'Most planets in our solar system have no oceans or life at all.'
      },
      {
        id: 'plan_q3',
        type: 'true-false',
        difficulty: 'Intermediate',
        question: 'True or False: Rogue planets wander through interstellar space without orbiting any host star.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Rogue planets are planet-mass objects that were either ejected from their birth planetary systems or formed directly in small molecular gas clouds.',
        hint: 'Think about whether planets can be gravitationally slingshotted out of young solar systems.'
      },
      {
        id: 'plan_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'A newly discovered celestial body is spherical and orbits the Sun, but its orbit crosses a dense asteroid belt full of thousands of similar-sized rocks. What is its classification?',
        options: ['Full Planet', 'Dwarf Planet', 'Brown Dwarf', 'Main Sequence Star'],
        correctAnswerIndex: 1,
        explanation: 'Because it has not cleared its orbital neighborhood of competing debris (similar to Pluto and Ceres), it is categorized as a dwarf planet.',
        hint: 'This is the exact reason Pluto was reclassified in 2006.'
      },
      {
        id: 'plan_q5',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Which planet in our solar system has the largest mass and strongest magnetic field?',
        options: ['Earth', 'Mars', 'Jupiter', 'Neptune'],
        correctAnswerIndex: 2,
        explanation: 'Jupiter is the most massive planet in our solar system (over 318 Earth masses) and boasts an immense magnetosphere.',
        hint: 'It is the fifth planet from our Sun and the largest gas giant.'
      }
    ]
  },
  {
    id: 'galaxies',
    categoryId: 'space-fundamentals',
    title: 'Galaxies',
    subtitle: 'Gravitationally bound islands of stars, gas, dust, and dark matter',
    difficulty: 'Beginner',
    readingTimeMinutes: 5,
    iconName: 'Compass',
    summary: 'Galaxies are the grand metropolises of the cosmos, containing anywhere from millions to hundreds of trillions of stars rotating around supermassive central black holes.',
    introduction: 'Our Sun is just one of hundreds of billions of stars orbiting inside a colossal cosmic city called the Milky Way. Across the universe, hundreds of billions of galaxies exist in breathtaking spiral, elliptical, and irregular shapes.',
    simpleExplanation: 'Imagine a gigantic whirlpool of stars, glowing gas clouds, and invisible dark matter spinning together across hundreds of thousands of light-years. That is a galaxy. Almost every major galaxy harbors a supermassive black hole at its heart.',
    howItWorks: [
      'Gravitational Binding: Dark matter halos provide the deep gravitational wells that hold hundreds of billions of stars together.',
      'Hubble Classification: Galaxies are classified morphologically into Spirals (like the Milky Way and Andromeda), Ellipticals (smooth, football-shaped, aged), and Irregulars.',
      'Stellar Orbits: In spiral galaxies, stars orbit in a relatively flat disk, while stars in elliptical galaxies move in randomized 3D trajectories.',
      'Central Engines: Most large galaxies contain supermassive black holes ranging from millions to billions of times the mass of our Sun.'
    ],
    whyItMatters: [
      'Galaxies are the basic structural units through which stars form, live, die, and chemically enrich the universe.',
      'Studying galaxy collisions and distribution reveals how dark matter and dark energy shape the large-scale architecture of the cosmos.'
    ],
    terminology: [
      {
        term: 'Dark Matter Halo',
        definition: 'A massive spherical envelope of non-luminous dark matter that extends far beyond the visible boundaries of a galaxy.'
      },
      {
        term: 'Spiral Density Wave',
        definition: 'A propagating wave of higher gravitational density in a galaxy’s disk that compresses gas and triggers star formation along spiral arms.'
      },
      {
        term: 'Supermassive Black Hole',
        definition: 'A black hole with a mass of 10⁵ to 10¹⁰ solar masses located at the nucleus of virtually every massive galaxy.'
      }
    ],
    facts: [
      'Our Milky Way galaxy is on a collision course with the neighboring Andromeda galaxy; they will merge in about 4.5 billion years to form a giant elliptical galaxy dubbed "Milkdromeda".',
      'The largest known galaxies in giant galaxy clusters span millions of light-years across and contain over 100 trillion stars.'
    ],
    keyTakeaways: [
      'Galaxies are massive collections of stars, gas, and dark matter bound by mutual gravity.',
      'They come in spiral, elliptical, and irregular shapes.',
      'Nearly all large galaxies host supermassive black holes at their cores.'
    ],
    vizType: 'celestial-galaxy',
    vizTitle: 'Spiral Galaxy Rotation & Density Wave Simulator',
    vizDescription: 'Interactive demonstration of galactic rotation curves showing why stars in the outer disk orbit faster than Newtonian physics predicts without dark matter.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'View Milky Way Plane in Explorer',
      description: 'Observe real near-infrared SPHEREx images along the galactic plane.'
    },
    quizQuestions: [
      {
        id: 'gal_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What type of galaxy is our home galaxy, the Milky Way?',
        options: ['Barred Spiral galaxy', 'Giant Elliptical galaxy', 'Irregular dwarf galaxy', 'Ring galaxy'],
        correctAnswerIndex: 0,
        explanation: 'The Milky Way is classified as a barred spiral galaxy, with distinct spiral arms unwinding from a central elongated bar of stars.',
        hint: 'It features spiral arms radiating from a central rectangular bar of stars.'
      },
      {
        id: 'gal_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What lies at the center of the Milky Way at the location known as Sagittarius A*?',
        options: ['A single giant blue star', 'A supermassive black hole with ~4 million solar masses', 'A hollow void of empty space', 'A cluster of planets'],
        correctAnswerIndex: 1,
        explanation: 'Astronomers tracked star orbits around Sagittarius A* for decades (winning the 2020 Nobel Prize) proving it is a supermassive black hole of ~4.15 million solar masses.',
        hint: 'It is a point of immense gravity that does not emit light directly.'
      },
      {
        id: 'gal_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: When two galaxies collide, most of their individual stars collide head-on with each other.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. The distances between individual stars are so immense compared to their physical sizes that virtually no stars collide directly during a galactic merger.',
        hint: 'Think about how vast the empty space is between stars compared to their size.'
      },
      {
        id: 'gal_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'When astronomers measure the orbital velocities of stars at the outer edge of a spiral galaxy, they find the stars move much faster than expected based only on visible matter. What accounts for this discrepancy?',
        options: ['The solar wind', 'An unseen halo of Dark Matter', 'Light pressure from distant quasars', 'Cosmic ray impacts'],
        correctAnswerIndex: 1,
        explanation: 'Vera Rubin’s discovery of flat galactic rotation curves proved that an invisible halo of dark matter supplies the extra gravitational pull keeping outer stars bound.',
        hint: 'It is the invisible mass that makes up roughly 85% of all matter in the universe.'
      },
      {
        id: 'gal_q5',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the closest major spiral galaxy to our own Milky Way?',
        options: ['Triangulum Galaxy (M33)', 'Andromeda Galaxy (M31)', 'Large Magellanic Cloud', 'Sombrero Galaxy (M104)'],
        correctAnswerIndex: 1,
        explanation: 'The Andromeda Galaxy (Messier 31) is the nearest large spiral galaxy, located approximately 2.5 million light-years away.',
        hint: 'It is named after a mythological princess and is visible to the naked eye under dark skies.'
      }
    ]
  },
  {
    id: 'nebulae',
    categoryId: 'space-fundamentals',
    title: 'Nebulae',
    subtitle: 'Cosmic clouds of interstellar gas and dust where stars are born and die',
    difficulty: 'Beginner',
    readingTimeMinutes: 4,
    iconName: 'Sparkles',
    summary: 'Nebulae are vast interstellar clouds of ionized gas and dust that act as both stellar nurseries where young stars ignite and colorful burial grounds for dying stars.',
    introduction: 'Few celestial sights rival the magnificent beauty of nebulae. Spanning light-years across, these cosmic clouds glow with vibrant colors as ultraviolet light from nearby newborn or dying stars energizes hydrogen, oxygen, and nitrogen gas.',
    simpleExplanation: 'Nebulae are the recycling centers of the cosmos. When giant stars explode or shed their outer shells, they eject gas and dust into space. Over millions of years, gravity pulls this enriched dust together again to form fresh stars and rocky worlds.',
    howItWorks: [
      'Emission Nebulae: Clouds of ionized gas (primarily hydrogen) that glow brightly when energized by ultraviolet radiation from hot young stars.',
      'Reflection Nebulae: Dust clouds that do not emit their own light, but reflect the blue light of nearby stars.',
      'Dark Nebulae: Dense clouds of molecular gas and dust so thick they block the visible light of background stars.',
      'Planetary Nebulae: Expanding shells of gas ejected by dying intermediate-mass stars (like our Sun) at the end of their lives.',
      'Supernova Remnants: High-velocity blast waves expanding into space following the catastrophic explosion of a massive star.'
    ],
    whyItMatters: [
      'Nebulae are the birthplaces of stars, solar systems, and planetary systems.',
      'Infrared observatories like SPHEREx and JWST can penetrate through the thick dust of nebulae to reveal hidden proto-stars and chemical ices.'
    ],
    terminology: [
      {
        term: 'Molecular Cloud',
        definition: 'A cold, dense interstellar cloud whose high density permits the formation of molecules, predominantly molecular hydrogen (H₂).'
      },
      {
        term: 'Planetary Nebula',
        definition: 'An expanding glowing shell of ionized gas expelled by red giant stars near the end of their lives; unrelated to planets.'
      },
      {
        term: 'H II Region',
        definition: 'An interstellar cloud of ionized atomic hydrogen illuminated by hot O- and B-type young stars.'
      }
    ],
    facts: [
      'The Orion Nebula is one of the closest massive stellar nurseries to Earth, located about 1,344 light-years away and visible to the naked eye.',
      'The term "planetary nebula" is a historical misnomer from the 18th century because early astronomers using small telescopes thought their round greenish discs resembled Uranus or Neptune.'
    ],
    keyTakeaways: [
      'Nebulae are clouds of gas and dust spanning light-years across space.',
      'They represent both stellar nurseries (star birth) and stellar remnants (star death).',
      'Infrared wavelengths allow astronomers to look through opaque nebular dust.'
    ],
    vizType: 'stellar-evolution',
    vizTitle: 'Nebular Collapse & Protostar Formation Simulator',
    vizDescription: 'Interactive simulation demonstrating how a cold molecular cloud collapses under gravity to ignite a newborn star.',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Analyze Nebular Spectra in Spectral Lab',
      description: 'Observe near-infrared emission and molecular ice absorption across 102 channels.'
    },
    quizQuestions: [
      {
        id: 'neb_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Why are nebulae often called "stellar nurseries"?',
        options: [
          'Because old stars go there to cool down',
          'Because new stars are born from their collapsing gas and dust clouds',
          'Because they are small and young',
          'Because planets turn into nebulae'
        ],
        correctAnswerIndex: 1,
        explanation: 'Cold, dense molecular nebulae collapse under gravity to form young protostars and planetary disks, earning them the nickname "stellar nurseries".',
        hint: 'Think about where newborn stars originate.'
      },
      {
        id: 'neb_q2',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Planetary nebulae have nothing to do with planets.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. The name was coined by early astronomers whose low-resolution telescopes made the spherical gas clouds look like greenish gas giant planets.',
        hint: 'It is a historical naming accident.'
      },
      {
        id: 'neb_q3',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Which wavelength range is most effective for peering inside dense, dusty nebulae to observe forming stars?',
        options: ['Ultraviolet light', 'Visible light', 'Infrared light', 'Gamma rays'],
        correctAnswerIndex: 2,
        explanation: 'Infrared light has longer wavelengths that pass right through microscopic interstellar dust grains without being scattered, unveiling hidden protostars.',
        hint: 'This is the main reason NASA built the SPHEREx and James Webb space telescopes.'
      },
      {
        id: 'neb_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'You observe a glowing reddish cloud of gas excited by intense ultraviolet radiation from a nearby hot O-type star. What kind of nebula are you observing?',
        options: ['Reflection Nebula', 'Emission Nebula (H II Region)', 'Dark Nebula', 'Asteroid Belt'],
        correctAnswerIndex: 1,
        explanation: 'When gas absorbs UV radiation and re-emits visible light (particularly hydrogen-alpha at 656.3 nm), it forms a glowing emission nebula.',
        hint: 'The gas is energized to emit its own light.'
      },
      {
        id: 'neb_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What Famous supernova remnant in the constellation Taurus was created by a massive star explosion witnessed on Earth in the year 1054 AD?',
        options: ['The Crab Nebula (M1)', 'The Eagle Nebula (M16)', 'The Ring Nebula (M57)', 'The Horsehead Nebula'],
        correctAnswerIndex: 0,
        explanation: 'The Crab Nebula (M1) is the expanding remnant of the supernova of 1054 AD, recorded by Chinese and Arab astronomers, housing a rapidly spinning pulsar at its core.',
        hint: 'It is the first object cataloged by Charles Messier.'
      }
    ]
  },
  {
    id: 'asteroids-and-comets',
    categoryId: 'space-fundamentals',
    title: 'Asteroids and Comets',
    subtitle: 'Rocky fragments and dirty snowballs leftover from planet formation',
    difficulty: 'Beginner',
    readingTimeMinutes: 5,
    iconName: 'Zap',
    summary: 'Asteroids and comets are ancient, primitive remnants preserved from the dawn of our solar system 4.6 billion years ago.',
    introduction: 'While planets get most of the attention, millions of small rocky and icy bodies orbit our Sun. Asteroids and comets are cosmic time capsules, preserving pristine organic molecules, metals, and water from the earliest stages of planetary birth.',
    simpleExplanation: 'Think of asteroids as leftover bricks and gravel from when the planets were built, mostly made of rock and metal. Comets, on the other hand, are dirty snowballs made of ice, dust, and frozen gases that develop spectacular glowing tails whenever they swing close to the Sun.',
    howItWorks: [
      'Asteroid Belt: Most asteroids orbit between Mars and Jupiter, where Jupiter’s tidal gravity prevented them from accreting into a full planet.',
      'Comet Anatomy: As a comet approaches the Sun, solar heating vaporizes its ices (sublimation), creating a glowing atmosphere (coma) and two distinct tails (ion tail and dust tail).',
      'Tails Always Point Away: The solar wind and radiation pressure push comet tails away from the Sun, meaning comets actually travel tail-first as they head back into deep space!',
      'Origin Reservoirs: Short-period comets originate in the Kuiper Belt beyond Neptune, while long-period comets come from the distant, spherical Oort Cloud.'
    ],
    whyItMatters: [
      'Asteroids and comets delivered substantial water, carbon, and amino acids to the early Earth, helping spark life.',
      'Monitoring Near-Earth Asteroids (NEOs) is critical for planetary defense to prevent catastrophic cosmic impacts.'
    ],
    terminology: [
      {
        term: 'Sublimation',
        definition: 'The physical transition of a substance directly from the solid to the gas state without passing through the liquid state.'
      },
      {
        term: 'Near-Earth Object (NEO)',
        definition: 'An asteroid or comet whose orbit brings it into proximity with Earth’s orbit (perihelion distance less than 1.3 AU).'
      },
      {
        term: 'Oort Cloud',
        definition: 'A theoretical vast spherical cloud of predominantly icy planetesimals proposed to surround the Sun up to ~100,000 AU away.'
      }
    ],
    facts: [
      'A comet’s ion tail always points directly away from the Sun, pushed straight out by the high-speed solar wind.',
      'Meteor showers occur when Earth plows through the dusty debris trail left behind along a comet’s orbit.'
    ],
    keyTakeaways: [
      'Asteroids are primarily rocky/metallic remnants orbiting between Mars and Jupiter.',
      'Comets are icy bodies from the Kuiper Belt or Oort Cloud that develop tails near the Sun.',
      'They carry unaltered chemical records from the birth of the solar system.'
    ],
    vizType: 'planetary-orbit',
    vizTitle: 'Elliptical Comet Orbit & Solar Wind Tail Simulator',
    vizDescription: 'Interactive demonstration showing how a comet’s speed increases at perihelion and how its dual tails point away from the Sun.',
    skyverseBridge: {
      moduleId: 'neossat',
      moduleName: 'NEOSSat Research',
      actionLabel: 'Track Asteroids in NEOSSat Lab',
      description: 'Explore Near-Earth Asteroid tracking with Canada’s NEOSSat space satellite.'
    },
    quizQuestions: [
      {
        id: 'ast_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What primarily causes a comet to develop a glowing tail as it approaches the Sun?',
        options: [
          'Friction with Earth’s upper atmosphere',
          'Solar heat vaporizes its ices, releasing dust and gas pushed away by solar wind',
          'Nuclear explosions on its surface',
          'Gravitational pulling from Mars'
        ],
        correctAnswerIndex: 1,
        explanation: 'Solar radiation causes volatile ices to sublimate into gas, which along with dust is pushed away by radiation pressure and solar wind to create tails.',
        hint: 'It is caused by the heat and wind coming from the Sun.'
      },
      {
        id: 'ast_q2',
        type: 'true-false',
        difficulty: 'Intermediate',
        question: 'True or False: As a comet moves away from the Sun back toward deep space, it travels tail-first.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True! Because solar wind always pushes the tail away from the Sun, a comet moving away from the Sun has its tail trailing in front of its direction of motion.',
        hint: 'Remember that the tail direction is dictated by solar wind, not the comet’s travel direction.'
      },
      {
        id: 'ast_q3',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Where is the main Asteroid Belt located in our solar system?',
        options: ['Between Earth and Mars', 'Between Mars and Jupiter', 'Beyond Pluto', 'Inside Mercury’s orbit'],
        correctAnswerIndex: 1,
        explanation: 'The main Asteroid Belt orbits the Sun between the orbits of the terrestrial planet Mars and the gas giant Jupiter.',
        hint: 'It sits between the last rocky planet and the first gas giant.'
      },
      {
        id: 'ast_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Earth experiences the Perseid meteor shower every August. What is Earth actually traveling through during this event?',
        options: [
          'A cloud of radioactive solar flare particles',
          'A trail of dusty debris left behind by Comet Swift-Tuttle',
          'Fragments of an exploding star',
          'Pieces of the Moon’s crust'
        ],
        correctAnswerIndex: 1,
        explanation: 'Periodic meteor showers occur when Earth’s orbit intersects the dust trail shed by comets as they orbit the Sun.',
        hint: 'Comets leave behind dusty tracks along their orbital path.'
      },
      {
        id: 'ast_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What is the largest known object in the asteroid belt, classified as both a giant asteroid and a dwarf planet?',
        options: ['Vesta', 'Pallas', 'Ceres', 'Eros'],
        correctAnswerIndex: 2,
        explanation: 'Ceres is approximately 940 kilometers in diameter and comprises about a third of the entire mass of the asteroid belt, making it round and a recognized dwarf planet.',
        hint: 'It was visited by NASA’s Dawn spacecraft in 2015.'
      }
    ]
  },
  {
    id: 'constellations',
    categoryId: 'space-fundamentals',
    title: 'Constellations',
    subtitle: 'Human patterns on the celestial sphere and modern sky sector boundaries',
    difficulty: 'Beginner',
    readingTimeMinutes: 4,
    iconName: 'Compass',
    summary: 'Constellations are apparent star patterns recognized across cultures, formally standardized by modern astronomers into 88 official sky sectors covering the entire celestial sphere.',
    introduction: 'For millennia, human stargazers connected the dots of the night sky, weaving mythological heroes, mythical creatures, and sacred animals into celestial tapestries. Today, constellations serve as a scientific coordinate map for navigating the heavens.',
    simpleExplanation: 'Stars in a constellation appear close together in our night sky, but that is an optical illusion of perspective! In reality, one star might be 20 light-years away while another in the same constellation is 2,000 light-years behind it.',
    howItWorks: [
      'Perspective Effect: Stars forming a pattern are usually completely unrelated, separated by hundreds of light-years along our line of sight.',
      '88 Official Constellations: In 1922, the International Astronomical Union (IAU) standardized 88 official constellations with precise boundary borders covering the entire sky.',
      'Celestial Coordinates: Astronomers use constellation regions to name stars, galaxies, and astronomical sources (e.g., Alpha Centauri, Sagittarius A*).',
      'Seasonal Skies: As Earth orbits the Sun, our night sky faces different directions in space, causing constellations to shift with the seasons.'
    ],
    whyItMatters: [
      'Constellations provide an intuitive spatial index for locating celestial targets, space missions, and exoplanets.',
      'They represent humanity’s oldest shared scientific and cultural heritage across human civilizations.'
    ],
    terminology: [
      {
        term: 'Asterism',
        definition: 'A prominent, recognized pattern of stars that is not an official constellation (e.g., The Big Dipper is an asterism within Ursa Major).'
      },
      {
        term: 'Celestial Sphere',
        definition: 'An imaginary sphere of arbitrarily large radius, concentric with Earth, on which all celestial objects appear projected.'
      },
      {
        term: 'Bayer Designation',
        definition: 'A stellar naming system using Greek letters followed by the Latin genitive of the constellation (e.g., Alpha Orionis for Betelgeuse).'
      }
    ],
    facts: [
      'The Big Dipper is not a constellation; it is an asterism located inside the larger official constellation Ursa Major (the Great Bear).',
      'Because stars are moving through space (proper motion), the shapes of constellations will distort noticeably over tens of thousands of years.'
    ],
    keyTakeaways: [
      'The IAU recognizes exactly 88 official constellations dividing the celestial sphere.',
      'Stars in a constellation are not physically close together; they just line up along our sightline.',
      'Proper motion causes constellation shapes to slowly evolve over millennia.'
    ],
    vizType: 'coordinates-sphere',
    vizTitle: 'Celestial Sphere & Constellation Boundary Mapper',
    vizDescription: 'Interactive 3D celestial sphere showing constellation boundaries and coordinate grids.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'Locate Constellations in Sky Explorer',
      description: 'Pinpoint celestial targets across Orion, Ursa Major, and Draco in SPHEREx imagery.'
    },
    quizQuestions: [
      {
        id: 'con_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'How many official constellations are recognized by the International Astronomical Union (IAU)?',
        options: ['12', '48', '88', '365'],
        correctAnswerIndex: 2,
        explanation: 'In 1922, the IAU officially defined 88 constellations with precise polygonal borders covering the entire celestial sphere.',
        hint: 'There are far more than just the 12 zodiac signs.'
      },
      {
        id: 'con_q2',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Stars in the same constellation are gravitationally bound together at the exact same distance from Earth.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. Constellation stars only appear close together due to 2D line-of-sight perspective; they are typically at vastly different distances in 3D space.',
        hint: 'Think about looking at two streetlights from far away where one is actually blocks behind the other.'
      },
      {
        id: 'con_q3',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the correct astronomical term for a famous pattern of stars (like the Big Dipper or Summer Triangle) that is NOT an official constellation?',
        options: ['Asterism', 'Planetesimal', 'Pulsar', 'Ecliptic'],
        correctAnswerIndex: 0,
        explanation: 'An asterism is an informal recognized pattern of stars within or across official constellations.',
        hint: 'It shares the Greek root "aster" meaning star.'
      },
      {
        id: 'con_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'If you could travel 100,000 years into the future, how would the constellations appear in the night sky?',
        options: [
          'They would look identical because stars never move.',
          'They would be noticeably distorted due to the stellar proper motion of individual stars.',
          'All stars would have merged into one point.',
          'All constellations would have vanished completely.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Stars move through our galaxy at tens of kilometers per second (proper motion), so over 100,000 years their relative positions shift, distorting familiar patterns.',
        hint: 'Stars are moving at high speeds around the galactic core.'
      },
      {
        id: 'con_q5',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Which bright star, located at the end of the handle of the Little Dipper (Ursa Minor), currently serves as the North Star for Earth navigation?',
        options: ['Sirius', 'Polaris', 'Betelgeuse', 'Vega'],
        correctAnswerIndex: 1,
        explanation: 'Polaris is aligned very closely with Earth’s northern rotational axis, meaning it remains nearly stationary in the northern night sky.',
        hint: 'Its name reflects its position near the celestial north pole.'
      }
    ]
  },
  {
    id: 'light-years',
    categoryId: 'space-fundamentals',
    title: 'Light Years',
    subtitle: 'The cosmic yardstick: measuring distance through the speed of light',
    difficulty: 'Beginner',
    readingTimeMinutes: 4,
    iconName: 'Compass',
    summary: 'A light-year is a unit of astronomical distance equal to the distance a beam of light travels in a vacuum in one Earth year — roughly 9.46 trillion kilometers.',
    introduction: 'Space is so mind-bogglingly vast that measuring distances in kilometers or miles becomes completely impractical. To measure the distances between stars and galaxies, astronomers use the fastest messenger in the universe: light.',
    simpleExplanation: 'A light-year is NOT a measure of time; it is a measure of DISTANCE. Just as you might say a friend lives "twenty minutes away by car", astronomers say Proxima Centauri is "4.24 light-years away by light-speed".',
    howItWorks: [
      'Universal Speed Limit: Light travels in a vacuum at exactly 299,792,458 meters per second (approx. 300,000 km/s).',
      'The Calculation: In one Julian year (365.25 days), light travels approx. 9.4607 × 10¹² kilometers (5.88 trillion miles).',
      'Lookback Time: Because light travels at a finite speed, seeing an object 1,000 light-years away means observing it as it was 1,000 years ago.',
      'Astronomical Units vs Light-Years: An AU is Earth-Sun distance (~8.3 light-minutes). A light-year is ~63,241 AU.'
    ],
    whyItMatters: [
      'Allows astronomers to comprehend the scale of galaxies and cosmological horizons.',
      'Means telescopes act as time machines, allowing us to inspect the infant universe directly.'
    ],
    terminology: [
      {
        term: 'Lookback Time',
        definition: 'The time elapsed between when a photon was emitted by a distant celestial source and when it is detected on Earth.'
      },
      {
        term: 'Parsec (pc)',
        definition: 'An astronomical unit of distance equal to ~3.26 light-years, defined as the distance at which an object has a parallax angle of one arcsecond.'
      },
      {
        term: 'Astronomical Unit (AU)',
        definition: 'The mean distance from the center of the Earth to the center of the Sun, approx. 149.6 million kilometers (8.32 light-minutes).'
      }
    ],
    facts: [
      'Sunlight hitting your eyes right now left the Sun roughly 8 minutes and 20 seconds ago.',
      'If you look at the Andromeda Galaxy tonight, your eyes are absorbing photons that began their journey 2.5 million years ago, before modern humans existed!'
    ],
    keyTakeaways: [
      'A light-year is a unit of distance, not time (~9.46 trillion km).',
      'Looking out into deep space is always looking backward in time.',
      'One light-year equals ~63,240 Astronomical Units.'
    ],
    vizType: 'inverse-square',
    vizTitle: 'Cosmic Distance Ladder & Light Travel Time Visualizer',
    vizDescription: 'Interactive visualizer demonstrating how lookback time scales with distance from the Moon (1.3 light-seconds) to distant quasars (billions of light-years).',
    skyverseBridge: {
      moduleId: 'quest',
      moduleName: 'Cosmic Brightness Quest',
      actionLabel: 'Test Light Distances in Quest Level 5',
      description: 'Solve the Inverse-Square Law distance challenge in Cosmic Brightness Quest.'
    },
    quizQuestions: [
      {
        id: 'ly_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What does a "light-year" measure?',
        options: ['Time elapsed in space', 'Physical distance', 'Brightness of a star', 'Mass of a galaxy'],
        correctAnswerIndex: 1,
        explanation: 'A light-year is a unit of astronomical distance: the distance light travels in one Julian year (approx. 9.46 trillion kilometers).',
        hint: 'Even though it contains the word "year", it measures how far, not how long.'
      },
      {
        id: 'ly_q2',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Approximately how long does it take for light emitted from the Sun to reach Earth?',
        options: ['Instantaneous (0 seconds)', '8 minutes and 20 seconds', '24 hours', '1 year'],
        correctAnswerIndex: 1,
        explanation: 'The Sun is about 150 million km away. At 300,000 km/s, light takes roughly 500 seconds, or ~8 minutes and 20 seconds, to reach Earth.',
        hint: 'It is a few minutes, not hours or days.'
      },
      {
        id: 'ly_q3',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'A star located 500 light-years from Earth goes supernova today. When will astronomers on Earth first be able to see the explosion in their telescopes?',
        options: ['Instantly today', 'In 500 years', '500 years ago', 'Never, light cannot cross that distance'],
        correctAnswerIndex: 1,
        explanation: 'Because the star is 500 light-years away, the light from the supernova requires 500 Earth years to travel across space to reach our detectors.',
        hint: 'Light travels at exactly one light-year per year.'
      },
      {
        id: 'ly_q4',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: A parsec is larger than a light-year.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. One parsec equals approximately 3.26 light-years (or about 30.9 trillion kilometers).',
        hint: 'One parsec contains more than 3 light-years.'
      },
      {
        id: 'ly_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'Roughly how many kilometers are in one single light-year?',
        options: ['150 million km', '384,400 km', '9.46 trillion km', '100 billion km'],
        correctAnswerIndex: 2,
        explanation: 'Multiplying the speed of light (299,792 km/s) by the seconds in a year (31,557,600 s) yields approximately 9.46 × 10¹² km (9.46 trillion km).',
        hint: 'It is close to 9.5 trillion kilometers.'
      }
    ]
  }
];

