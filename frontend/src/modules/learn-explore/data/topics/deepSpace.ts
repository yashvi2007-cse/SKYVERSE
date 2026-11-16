import { TopicItem } from '../../../../types/learnExplore';

export const DEEP_SPACE_TOPICS: TopicItem[] = [
  {
    id: 'milky-way',
    categoryId: 'deep-space',
    title: 'The Milky Way Galaxy',
    subtitle: 'Our cosmic home: a barred spiral galaxy of 100–400 billion stars',
    difficulty: 'Beginner',
    readingTimeMinutes: 5,
    iconName: 'Compass',
    summary: 'The Milky Way is our home galaxy, spanning roughly 100,000 light-years across with a central stellar bar, spiral arms, and a supermassive black hole named Sagittarius A*.',
    introduction: 'On a dark summer night, a luminous milky river of light arcs across the sky. Galileo’s telescope revealed in 1610 that this band consists of countless unresolved stars. Today we know we live inside a grand barred spiral galaxy, orbiting about 26,000 light-years from its supermassive core.',
    simpleExplanation: 'Imagine an enormous spinning pancake of stars and glowing gas about 100,000 light-years across, with a thicker bulge and a bar in the center. Our Sun and Solar System are located halfway out from the center, quietly cruising in one of the spiral arms called the Orion-Cygnus Spur.',
    howItWorks: [
      'Structure: Composed of a thin disk (gas, dust, young stars), a thick disk (older stars), a central peanut-shaped bar and bulge, and a vast spherical stellar and dark matter halo.',
      'Galactic Orbit: Our Sun orbits the center of the galaxy at roughly 220 km/s, taking approximately 230 million years to complete one "Cosmic Year".',
      'The Galactic Center: Home to Sagittarius A*, a supermassive black hole of ~4.15 million solar masses.',
      'Spiral Arms: Spiral density waves compress gas along the Perseus, Scutum-Centaurus, Sagittarius, and Norma arms, continually triggering fresh star birth.'
    ],
    whyItMatters: [
      'Provides our primary close-up laboratory for studying stellar populations, interstellar chemistry, and galactic dynamics.',
      'SPHEREx maps the entire Milky Way in near-infrared, bypassing dust to catalog stellar populations and ices.'
    ],
    terminology: [
      {
        term: 'Sagittarius A* (Sgr A*)',
        definition: 'The supermassive black hole located at the dynamical center of the Milky Way galaxy.'
      },
      {
        term: 'Galactic Year (Cosmic Year)',
        definition: 'The duration of time (approx. 225–250 million Earth years) required for the Sun to orbit once around the center of the Milky Way.'
      },
      {
        term: 'Galactic Bulge',
        definition: 'A tightly packed, spheroidal group of stars forming the central hub of our barred spiral galaxy.'
      }
    ],
    facts: [
      'The last time our Solar System was in this exact spot in its galactic orbit, early dinosaurs were just beginning to walk on Earth!',
      'You cannot see the center of our galaxy with optical telescopes because thick clouds of interstellar dust block visible light; only infrared, radio, and X-ray telescopes can pierce through.'
    ],
    keyTakeaways: [
      'The Milky Way is a barred spiral galaxy spanning ~100,000 light-years.',
      'Our Sun is located halfway from the center in the Orion Spur.',
      'At its core lies the supermassive black hole Sagittarius A* (~4.15 million solar masses).'
    ],
    vizType: 'celestial-galaxy',
    vizTitle: 'Milky Way Spiral Arms & Solar Orbit Interactive Map',
    vizDescription: 'Interactive 3D galaxy view showing our Sun’s location in the Orion Spur and orbital path around Sagittarius A*.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'Explore the Galactic Plane in Sky Explorer',
      description: 'Navigate full-sky SPHEREx coordinates centered on the Milky Way bulge and Sagittarius A*.'
    },
    quizQuestions: [
      {
        id: 'mw_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Approximately how wide is the main stellar disk of our Milky Way galaxy?',
        options: ['1,000 light-years', '100,000 light-years', '10 million light-years', '100 Astronomical Units'],
        correctAnswerIndex: 1,
        explanation: 'The stellar disk of the Milky Way has an estimated diameter of approximately 100,000 light-years (with faint gas halos extending even farther).',
        hint: 'Roughly one hundred thousand light-years.'
      },
      {
        id: 'mw_q2',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Approximately how long does it take our Sun to complete one single orbit around the center of the Milky Way (one Cosmic Year)?',
        options: ['365 days', '1 million years', '~230 million years', '10 billion years'],
        correctAnswerIndex: 2,
        explanation: 'Traveling at ~220 km/s at a distance of ~26,000 light-years from the core, the Sun requires about 225 to 250 million Earth years to complete one orbit.',
        hint: 'It takes more than 200 million years.'
      },
      {
        id: 'mw_q3',
        type: 'true-false',
        difficulty: 'Intermediate',
        question: 'True or False: Our Sun is located directly in the dense, supermassive center of the Milky Way.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. Our Sun is located about 26,000 light-years from the center, roughly halfway out in the disk in the minor Orion-Cygnus arm.',
        hint: 'We are situated in the quiet suburbs of the galaxy, not downtown.'
      },
      {
        id: 'mw_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Why did astronomers track the orbits of stars (like the star S2) near the center of our galaxy for over 25 years with infrared telescopes?',
        options: [
          'To prove the existence and measure the mass of the supermassive black hole Sagittarius A*',
          'To look for aliens communicating with radio beacons',
          'To see if stars bounce off the edge of space',
          'To test how fast planets freeze'
        ],
        correctAnswerIndex: 0,
        explanation: 'Tracking stars orbiting within a few light-hours of Sagittarius A* at up to 8,000 km/s proved that ~4.15 million solar masses of invisible matter is crammed into a tiny space, confirming a supermassive black hole.',
        hint: 'Their fast orbits proved that millions of solar masses were crammed into an invisible point.'
      },
      {
        id: 'mw_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What is the name of our neighboring spiral galaxy, currently approaching the Milky Way for a future merger in ~4.5 billion years?',
        options: ['The Andromeda Galaxy (M31)', 'The Whirlpool Galaxy (M51)', 'The Sombrero Galaxy', 'Centaurus A'],
        correctAnswerIndex: 0,
        explanation: 'The Andromeda Galaxy (Messier 31) is approaching our galaxy at ~110 km/s and will merge with the Milky Way in approximately 4.5 billion years.',
        hint: 'The nearest major spiral galaxy.'
      }
    ]
  },
  {
    id: 'galaxy-formation',
    categoryId: 'deep-space',
    title: 'Galaxy Formation & Evolution',
    subtitle: 'From primordial dark matter seeds to cosmic mergers and clusters',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Compass',
    summary: 'Galaxies grew hierarchically as small dark matter halos pulled in primordial gas, igniting the first stars and merging over cosmic time into grand spirals and giant ellipticals.',
    introduction: 'In the early universe shortly after the Big Bang, the cosmos was a nearly smooth sea of hydrogen and helium with tiny quantum density ripples. Over billions of years, gravity amplified these ripples, drawing gas into giant filaments and building the breathtaking galaxies we see today.',
    simpleExplanation: 'Think of galaxy formation like building a massive city out of LEGO bricks. You start with small individual cottages (proto-galaxies). Over time, these small cottages collide and merge together, forming larger towns and eventually sprawling mega-cities (giant spiral and elliptical galaxies).',
    howItWorks: [
      'Hierarchical Clustering: Small dark matter halos merge bottom-up over cosmic time to form increasingly massive structures.',
      'First Stars (Population III): Metal-free, hyper-massive stars ignite ~200 million years after the Big Bang, reionizing the cosmic neutral gas.',
      'Galactic Mergers: Major mergers between gas-rich spirals trigger intense starbursts and eventually settle into smooth, gas-poor elliptical galaxies.',
      'Active Galactic Nuclei (AGN) Feedback: Supermassive black holes blow out intense radiation and relativistic jets that heat surrounding gas, shutting down star formation ("quenching").'
    ],
    whyItMatters: [
      'Explains how chemical elements evolved from pristine hydrogen/helium into the iron, carbon, and gold found today.',
      'SPHEREx maps the large-scale spatial clustering of millions of galaxies across deep cosmic time to test cosmic inflation.'
    ],
    terminology: [
      {
        term: 'Hierarchical Assembly',
        definition: 'The cosmological model where large cosmic structures (galaxies and clusters) are formed by the continuous gravitational merger of smaller precursor clumps.'
      },
      {
        term: 'Starburst Galaxy',
        definition: 'A galaxy undergoing an exceptionally high rate of star formation, often triggered by a gravitational collision or close encounter with another galaxy.'
      },
      {
        term: 'Quenching',
        definition: 'The process by which a galaxy permanently ceases active star formation, typically driven by gas heating from active galactic nuclei (AGN).'
      }
    ],
    facts: [
      'The James Webb Space Telescope has discovered surprisingly massive, bright galaxies existing just 300–400 million years after the Big Bang, challenging existing formation models!',
      'When two galaxies collide, the collision triggers the birth of millions of new stars even though virtually zero individual stars ever physically hit each other.'
    ],
    keyTakeaways: [
      'Galaxies formed hierarchically through bottom-up gravitational mergers.',
      'Dark matter provided the initial gravitational scaffolding.',
      'Supermassive black hole feedback regulates and shuts down star formation.'
    ],
    vizType: 'celestial-galaxy',
    vizTitle: 'Hierarchical Galaxy Merger & Morphological Evolution Simulator',
    vizDescription: 'Interactive simulation of two colliding spiral galaxies merging into a single elliptical galaxy.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'Inspect Distant Galaxies in Explorer',
      description: 'Explore distant galaxy fields and cluster environments across SPHEREx FITS observations.'
    },
    quizQuestions: [
      {
        id: 'gf_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'According to the standard cosmological model, did galaxies form "top-down" from one giant cloud or "bottom-up" by merging smaller pieces?',
        options: [
          'Bottom-up: Smaller clumps merged together hierarchically over time',
          'Top-down: One giant galaxy shattered into billions of pieces',
          'Galaxies were always present and never formed',
          'Galaxies were created by exploding planets'
        ],
        correctAnswerIndex: 0,
        explanation: 'In the Lambda-CDM model, structures form hierarchically ("bottom-up"): small dark matter clumps collapse first, repeatedly merging to form larger galaxies and galaxy clusters.',
        hint: 'Smaller pieces merged together like LEGO bricks.'
      },
      {
        id: 'gf_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What type of galaxy typically forms when two large gas-rich spiral galaxies collide and merge?',
        options: ['A Giant Elliptical galaxy', 'A tiny dwarf asteroid', 'A ring of pure water', 'A black hole with no stars'],
        correctAnswerIndex: 0,
        explanation: 'Gravitational tidal interactions scramble organized disk rotation into randomized 3D stellar orbits, while gas is consumed in starbursts, leaving an elliptical galaxy.',
        hint: 'The collision scrambles the spiral disks into a smooth football shape.'
      },
      {
        id: 'gf_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: The very first generation of stars in the early universe contained zero metals (elements heavier than helium).',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Population III stars formed purely from primordial Big Bang gas (approx. 75% hydrogen and 25% helium, with trace lithium) before any heavier elements had been forged.',
        hint: 'Heavier elements had not been forged by stars yet.'
      },
      {
        id: 'gf_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'What crucial feedback mechanism inside massive galaxies blasts away cold gas, heating the interstellar medium and permanently shutting down ("quenching") new star formation?',
        options: [
          'Relativistic jets and radiation from the central supermassive active galactic nucleus (AGN)',
          'Ocean tides on orbiting planets',
          'Sunspots on small red dwarf stars',
          'Cosmic ice storms'
        ],
        correctAnswerIndex: 0,
        explanation: 'AGN feedback: matter feeding the central supermassive black hole releases enormous energy in jets and radiation winds that heat and expel cold gas, halting star formation.',
        hint: 'The central supermassive black hole acts like a cosmic furnace blowing gas away.'
      },
      {
        id: 'gf_q5',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What invisible component provided the initial gravitational "wells" that attracted primordial gas to form the earliest galaxies?',
        options: ['Dark Matter', 'Alien space stations', 'Solar flares', 'Starlight pressure'],
        correctAnswerIndex: 0,
        explanation: 'Because dark matter does not interact with electromagnetic radiation, it collapsed under gravity much earlier than ordinary matter, creating gravitational wells that pulled in gas.',
        hint: 'The invisible mass that does not emit or absorb light.'
      }
    ]
  },
  {
    id: 'dark-matter',
    categoryId: 'deep-space',
    title: 'Dark Matter',
    subtitle: 'The invisible gravitational scaffolding holding galaxies together',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Compass',
    summary: 'Dark matter is an unidentified form of matter that emits no electromagnetic radiation, yet makes up roughly 85% of all matter in the universe, revealed through its gravitational pull.',
    introduction: 'Every star, planet, galaxy, and cloud of gas you have ever seen in the night sky accounts for only about 15% of the matter in the cosmos. The remaining 85% is "dark matter"—a mysterious, invisible substance that permeates the universe, holding galaxies together like cosmic glue.',
    simpleExplanation: 'Imagine spinning a merry-go-round as fast as you can. If children on the edge were only holding on with weak glue, they would fly right off into the grass! Spiral galaxies spin so fast that their visible stars should fly apart. An invisible heavy halo—dark matter—provides the extra gravitational grip holding them tightly in place.',
    howItWorks: [
      'Galactic Rotation Curves: In the 1970s, Vera Rubin discovered that stars at the outer edges of spiral galaxies orbit just as fast as stars near the center, requiring an enormous invisible mass halo.',
      'Gravitational Lensing: Albert Einstein showed that mass bends light. Giant galaxy clusters bend starlight far more strongly than their visible matter can account for.',
      'Cosmic Web Evolution: Simulations of cosmological structure match our universe only when dark matter is included as a cold, collisionless particle (Cold Dark Matter, CDM).',
      'The Bullet Cluster: Direct observational proof where colliding galaxy clusters show their gas slowed by friction while their dark matter passed right through without colliding.'
    ],
    whyItMatters: [
      'Without dark matter, galaxies like our Milky Way could never have formed in the age of the universe.',
      'Solving the identity of dark matter particles (e.g., WIMPs, axions) is the Holy Grail of modern fundamental physics.'
    ],
    terminology: [
      {
        term: 'Cold Dark Matter (CDM)',
        definition: 'A theoretical model of dark matter consisting of particles that move much slower than the speed of light and do not interact electromagnetically.'
      },
      {
        term: 'Gravitational Lensing',
        definition: 'The bending of light from a distant source around a massive foreground object, acting like a cosmic magnifying glass.'
      },
      {
        term: 'Weakly Interacting Massive Particle (WIMP)',
        definition: 'A leading hypothetical elementary particle candidate for dark matter that interacts only via gravity and the weak nuclear force.'
      }
    ],
    facts: [
      'Astronomer Vera Rubin’s pioneering measurements of galactic rotation curves provided the first robust, inescapable observational evidence for dark matter.',
      'Millions of dark matter particles are passing through your body right now every second without touching a single atom!'
    ],
    keyTakeaways: [
      'Dark matter accounts for ~85% of all matter in the universe.',
      'It emits, reflects, and absorbs zero light, interacting only via gravity.',
      'Confirmed independently by galaxy rotation, gravitational lensing, and cosmic microwave background ripples.'
    ],
    vizType: 'celestial-galaxy',
    vizTitle: 'Galactic Rotation Curves: Newtonian vs. Dark Matter Simulation',
    vizDescription: 'Interactive graph comparing expected Keplerian drop-off ($v \\propto 1/\\sqrt{r}$) with flat observed rotation curves ($v \\approx \\text{const}$).',
    skyverseBridge: {
      moduleId: 'investigation',
      moduleName: 'Object Investigation',
      actionLabel: 'Analyze Astrometric Data in Lab',
      description: 'Study high-velocity stellar motions that reveal gravitational mass distributions in the Investigation Lab.'
    },
    quizQuestions: [
      {
        id: 'dm_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What percentage of all matter in the universe is estimated to be dark matter?',
        options: ['Less than 1%', 'About 15%', 'About 85%', '100%'],
        correctAnswerIndex: 2,
        explanation: 'Dark matter accounts for roughly 85% of all matter (and ~27% of the total mass-energy density of the universe), while ordinary atoms make up only ~15% of matter.',
        hint: 'The vast majority of matter in the cosmos is dark matter.'
      },
      {
        id: 'dm_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Which pioneering astronomer gathered the definitive observational evidence for dark matter in the 1970s by measuring flat galaxy rotation curves?',
        options: ['Vera Rubin', 'Carl Sagan', 'Galileo Galilei', 'Isaac Newton'],
        correctAnswerIndex: 0,
        explanation: 'Vera Rubin and Kent Ford measured optical rotation curves of spiral galaxies, proving outer stars moved unexpectedly fast due to invisible mass halos.',
        hint: 'The female astrophysicist who discovered flat rotation curves.'
      },
      {
        id: 'dm_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Dark matter is simply normal dust and dead cold planets floating in space.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. Normal matter (baryons) absorbs and scatters starlight. Dark matter does not interact with the electromagnetic force at all; it is non-baryonic matter.',
        hint: 'Normal dust would absorb starlight and glow in infrared.'
      },
      {
        id: 'dm_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'When astronomers look at the famous "Bullet Cluster" (two colliding clusters of galaxies), where is the majority of the mass located?',
        options: [
          'In the central pink X-ray gas that collided and slowed down',
          'In the outer blue regions where the dark matter passed right through without colliding',
          'In a single central planet',
          'All the mass evaporated'
        ],
        correctAnswerIndex: 1,
        explanation: 'Gravitational lensing maps revealed that the mass is centered in the outer regions, proving the collisionless dark matter sailed right through the collision while the normal gas crashed and stalled in the center.',
        hint: 'Dark matter passed cleanly through because it does not collide like gas.'
      },
      {
        id: 'dm_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What general relativity phenomenon allows astronomers to "weigh" invisible dark matter by observing distorted arcs of light from background galaxies?',
        options: ['Gravitational Lensing', 'Photoelectric emission', 'Nuclear fission', 'Compton scattering'],
        correctAnswerIndex: 0,
        explanation: 'Gravitational lensing bends spacetime around massive clusters, distorting background starlight into arcs and rings in exact proportion to the total mass (both visible and dark).',
        hint: 'Mass acts like a lens, bending light.'
      }
    ]
  },
  {
    id: 'dark-energy',
    categoryId: 'deep-space',
    title: 'Dark Energy',
    subtitle: 'The mysterious repulsive force accelerating the expansion of the universe',
    difficulty: 'Advanced',
    readingTimeMinutes: 5,
    iconName: 'Zap',
    summary: 'Dark energy is a smooth, repulsive energy density comprising roughly 68% of the universe, causing the expansion of the cosmos to accelerate.',
    introduction: 'Until 1998, all astronomers believed that gravity would eventually slow down the expansion of the universe. But when two teams measured distant Type Ia supernovae, they discovered the shocking truth: cosmic expansion is not slowing down at all—it is speeding up! The unknown driver of this cosmic acceleration is called Dark Energy.',
    simpleExplanation: 'Imagine tossing an apple straight up into the air. You expect gravity to slow it down and bring it back to your hand. Instead, you watch in utter disbelief as the apple suddenly accelerates upward faster and faster into the clouds! That is what the universe is doing, propelled by dark energy.',
    howItWorks: [
      'The 1998 Discovery: High-z Supernova Search Team and Supernova Cosmology Project measured distant Type Ia supernovae and found them ~25% fainter than expected in a decelerating universe.',
      'Cosmological Constant ($\Lambda$): Einstein introduced $\Lambda$ in 1917 as a static term; today, it represents the uniform vacuum energy of space with negative pressure ($w = -1$).',
      'Equation of State: Relativistic dark energy has negative pressure ($P = w\rho c^2$), which acts repulsive in General Relativity.',
      'Cosmic Dominance: In the early universe, matter density dominated. As space expanded, matter density diluted, but dark energy density remained constant, taking over cosmic acceleration ~5 billion years ago.'
    ],
    whyItMatters: [
      'Constitutes ~68% of everything in the universe, yet its microscopic nature remains the deepest mystery in modern physics.',
      'Dictates the ultimate fate of the cosmos (e.g., Big Freeze vs Big Rip).'
    ],
    terminology: [
      {
        term: 'Cosmological Constant (Λ)',
        definition: 'A term in Einstein’s field equations of General Relativity representing a constant, uniform vacuum energy density filling all space.'
      },
      {
        term: 'Vacuum Energy',
        definition: 'An underlying, inalienable quantum zero-point energy density that exists throughout all of empty space.'
      },
      {
        term: 'Big Freeze',
        definition: 'The projected cosmological fate where dark energy accelerates galaxies apart forever until stars burn out and the universe cools to absolute zero.'
      }
    ],
    facts: [
      'The discovery of dark energy won the 2011 Nobel Prize in Physics for Saul Perlmutter, Brian Schmidt, and Adam Riess.',
      'The theoretical vacuum energy predicted by quantum field theory differs from the observed value of dark energy by 120 orders of magnitude ($10^{120}$)—the worst prediction in the history of theoretical physics!'
    ],
    keyTakeaways: [
      'Dark energy causes the expansion of the universe to accelerate.',
      'It accounts for ~68% of the total cosmic energy-matter density.',
      'Unlike matter, dark energy does not dilute as space expands.'
    ],
    vizType: 'celestial-galaxy',
    vizTitle: 'Cosmic Expansion: Deceleration vs. Acceleration Simulator',
    vizDescription: 'Interactive cosmological scale factor graph showing how dark energy took over ~5 billion years ago to accelerate expansion.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'View Deep Cosmic Fields in Explorer',
      description: 'Explore distant cosmological epochs across large-scale SPHEREx surveys.'
    },
    quizQuestions: [
      {
        id: 'de_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What percentage of the universe’s total mass-energy budget is comprised of Dark Energy?',
        options: ['Roughly 5%', 'Roughly 27%', 'Roughly 68%', '100%'],
        correctAnswerIndex: 2,
        explanation: 'According to the Planck satellite and cosmological measurements, dark energy accounts for approximately 68.3% of the universe.',
        hint: 'More than two-thirds of the entire cosmos.'
      },
      {
        id: 'de_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What surprising discovery in 1998 earned the Nobel Prize in Physics and revealed the existence of Dark Energy?',
        options: [
          'Distant Type Ia supernovae were fainter than expected, proving cosmic expansion is accelerating',
          'The discovery of water on Mars',
          'The invention of the iPhone',
          'Finding that Earth is round'
        ],
        correctAnswerIndex: 0,
        explanation: 'Two independent teams discovered that distant Type Ia supernovae were fainter than expected, revealing that the universe is accelerating in its expansion.',
        hint: 'Distant supernovae proved the expansion is speeding up.'
      },
      {
        id: 'de_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Dark matter and dark energy are two names for the exact same physical thing.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False! Dark matter pulls things together via attractive gravity; dark energy pushes space apart, accelerating cosmic expansion.',
        hint: 'One pulls matter together with gravity; the other pushes space apart.'
      },
      {
        id: 'de_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'As the universe continues to expand and grow in volume, what happens to the density of dark energy compared to the density of ordinary matter?',
        options: [
          'Matter density dilutes as volume increases, while dark energy density remains constant per cubic meter of space',
          'Dark energy density drops to zero immediately',
          'Both matter and dark energy dilute at the exact same rate',
          'Dark energy turns into gold'
        ],
        correctAnswerIndex: 0,
        explanation: 'Matter density drops inversely with volume ($\\rho_m \\propto 1/V$), but if dark energy is a cosmological constant (vacuum energy), its density remains constant per unit volume of space.',
        hint: 'Vacuum energy is an inherent property of space itself.'
      },
      {
        id: 'de_q5',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What symbol did Albert Einstein introduce into his General Relativity field equations in 1917, which today represents dark energy?',
        options: ['The Greek letter Lambda (Λ)', 'The Greek letter Alpha (α)', 'The symbol Pi (π)', 'The letter X'],
        correctAnswerIndex: 0,
        explanation: 'Einstein introduced the cosmological constant $\\Lambda$ (Lambda), which today mathematically represents the repulsive vacuum energy of dark energy.',
        hint: 'The Greek letter Lambda.'
      }
    ]
  },
  {
    id: 'big-bang-theory',
    categoryId: 'deep-space',
    title: 'The Big Bang Theory',
    subtitle: 'The birth of space, time, and matter 13.8 billion years ago',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Sparkles',
    summary: 'The Big Bang theory is the prevailing cosmological model for the observable universe from its earliest known periods through its subsequent large-scale evolution.',
    introduction: 'Everything that has ever existed—every atom in your body, every planet, star, and galaxy—was once compressed into an unfathomably hot, dense singularity 13.8 billion years ago. The Big Bang was not an explosion of matter into pre-existing empty space, but the rapid expansion of space itself.',
    simpleExplanation: 'People often picture the Big Bang like a bomb exploding in the center of a dark, empty room. But that is wrong! There was no "room" and no "outside". Space itself was born and began expanding everywhere at once, cooling as it grew.',
    howItWorks: [
      'Cosmic Inflation: A fleeting fraction of a second after the beginning ($10^{-36}$ to $10^{-32}$ s), the universe expanded exponentially by a factor of at least $10^{26}$.',
      'Big Bang Nucleosynthesis: During the first 3 to 20 minutes, temperatures permitted protons and neutrons to fuse, forging ~75% hydrogen, ~25% helium, and trace lithium.',
      'Recombination & Photon Decoupling: At ~380,000 years, the universe cooled to ~3,000 K. Protons captured electrons to form neutral atoms, letting photons fly freely as the Cosmic Microwave Background (CMB).',
      'Cosmic Dark Ages: For ~200 million years, the universe was dark until the first generation of massive stars ignited, reionizing the cosmos.'
    ],
    whyItMatters: [
      'Explains the observed expansion of space (Hubble’s Law), the cosmic microwave background radiation, and the primordial abundances of light elements.',
      'SPHEREx tests cosmic inflation models by measuring galaxy clustering across the universe.'
    ],
    terminology: [
      {
        term: 'Cosmic Inflation',
        definition: 'A brief epoch of extraordinarily rapid exponential expansion of spacetime in the early universe, proposed to explain cosmic flatness and uniformity.'
      },
      {
        term: 'Recombination',
        definition: 'The epoch ~380,000 years after the Big Bang when charged electrons and protons bound into neutral hydrogen atoms, making the universe transparent.'
      },
      {
        term: 'Primordial Nucleosynthesis',
        definition: 'The production of atomic nuclei other than the lightest isotope of hydrogen during the first twenty minutes of the universe.'
      }
    ],
    facts: [
      'The term "Big Bang" was coined mockingly in 1949 by British astronomer Fred Hoyle, who favored a rival steady-state model!',
      'When an old analogue television was tuned between stations, about 1% of the static "snow" on the screen was caused by Big Bang CMB photons hitting the antenna.'
    ],
    keyTakeaways: [
      'The Big Bang was the expansion of space itself ~13.8 billion years ago, not an explosion in space.',
      'First 20 minutes forged primordial hydrogen (~75%) and helium (~25%).',
      'The universe became transparent at ~380,000 years, releasing the CMB.'
    ],
    vizType: 'celestial-galaxy',
    vizTitle: 'Cosmic Timeline: Inflation, Recombination & First Light Simulator',
    vizDescription: 'Interactive cosmological timeline scrubbing from $t = 0$ through Inflation, CMB formation, Dark Ages, and modern galaxies.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'Explore All-Sky SPHEREx Survey',
      description: 'See how full-sky observations map the large-scale structure left behind by the Big Bang.'
    },
    quizQuestions: [
      {
        id: 'bb_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Was the Big Bang an explosion of matter into pre-existing empty space, or the expansion of space itself?',
        options: [
          'The rapid expansion of space itself, creating matter, energy, and spacetime',
          'A bomb exploding in the center of an empty room',
          'Two planets crashing together',
          'A star exploding inside the Milky Way'
        ],
        correctAnswerIndex: 0,
        explanation: 'In General Relativity, the Big Bang was the simultaneous expansion of spacetime itself everywhere across the cosmos, not matter exploding into pre-existing space.',
        hint: 'Spacetime itself was created and stretched.'
      },
      {
        id: 'bb_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What are the two dominant primordial elements forged during the first 20 minutes of Big Bang nucleosynthesis?',
        options: [
          'Hydrogen (~75%) and Helium (~25%)',
          'Iron and Gold',
          'Carbon and Oxygen',
          'Silicon and Magnesium'
        ],
        correctAnswerIndex: 0,
        explanation: 'Primordial Big Bang nucleosynthesis produced roughly 75% hydrogen and 25% helium by mass, matching observations of pristine cosmic gas clouds.',
        hint: 'The two lightest elements in the periodic table.'
      },
      {
        id: 'bb_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: The name "Big Bang" was originally coined as an insult by an astronomer who did not believe in the theory.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Sir Fred Hoyle coined the term during a 1949 BBC radio broadcast to dismiss the idea, preferring his own steady-state model.',
        hint: 'Fred Hoyle meant it dismissively on the radio.'
      },
      {
        id: 'bb_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Why was the early universe completely opaque to light for the first 380,000 years after the Big Bang?',
        options: [
          'It was full of dense ionized plasma where photons were constantly trapped and scattered by free electrons',
          'The lights were turned off by gravity',
          'It was made of black coal',
          'Space had not been invented yet'
        ],
        correctAnswerIndex: 0,
        explanation: 'Before neutral atoms formed, the universe was an ionized plasma of free electrons and protons. Photons could travel only tiny distances before scattering off free electrons (Thomson scattering).',
        hint: 'Free electrons trapped photons in an impenetrable glowing fog.'
      },
      {
        id: 'bb_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What brief cosmological event during the first $10^{-32}$ seconds expanded the universe exponentially faster than the speed of light?',
        options: ['Cosmic Inflation', 'Planetary accretion', 'A Supernova', 'The Big Rip'],
        correctAnswerIndex: 0,
        explanation: 'Alan Guth proposed Cosmic Inflation in 1980 to explain why the universe is so homogeneous and geometrically flat, postulating an exponential expansion driven by a scalar field.',
        hint: 'Inflation stretches space flat.'
      }
    ]
  },
  {
    id: 'cosmic-microwave-background',
    categoryId: 'deep-space',
    title: 'The Cosmic Microwave Background',
    subtitle: 'The afterglow snapshot of the infant universe at 380,000 years old',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'The Cosmic Microwave Background (CMB) is the thermal echo of the Big Bang, a nearly uniform bath of microwave photons permeating all of space at 2.725 Kelvin.',
    introduction: 'In 1965, two radio astronomers in New Jersey, Arno Penzias and Robert Wilson, pointed their horn antenna at the sky and detected an annoying hum. No matter where they pointed, the hiss remained. They had stumbled upon the greatest relic in history: the thermal baby picture of our universe.',
    simpleExplanation: 'Imagine snapping a photograph of the entire universe when it was just a 380,000-year-old toddler. That is the CMB! Over the past 13.8 billion years, cosmic expansion has stretched that white-hot glow into cold, invisible microwaves that fill every cubic centimeter of space.',
    howItWorks: [
      'Recombination Epoch: At $T \\approx 3,000\\,\\text{K}$, electrons joined protons to form neutral hydrogen. Photons were suddenly free to travel across space without scattering.',
      'Redshift of 1,100: Cosmic expansion has stretched those photons by a factor of 1,100 ($z \\approx 1100$), cooling the radiation from 3,000 K down to $2.7255\\,\\text{K}$.',
      'Blackbody Perfection: The CMB is the most mathematically perfect blackbody radiation spectrum ever measured in nature.',
      'Tiny Temperature Ripples: Fluctuations of just 1 part in 100,000 (microkelvins) represent the gravitational seeds that grew into all galaxies and superclusters today.'
    ],
    whyItMatters: [
      'Provides the definitive cornerstone proof of the Big Bang model.',
      'Precision maps from COBE, WMAP, and Planck satellite missions revealed the exact age of the universe (13.787 billion years) and its matter composition.'
    ],
    terminology: [
      {
        term: 'Cosmic Microwave Background (CMB)',
        definition: 'Electromagnetic radiation left over from the epoch of recombination in the early Big Bang, filling the universe at a temperature of 2.725 K.'
      },
      {
        term: 'Surface of Last Scattering',
        definition: 'The spherical shell around us representing the distance at which CMB photons underwent their final scattering off free electrons ~380,000 years after the Big Bang.'
      },
      {
        term: 'Anisotropy',
        definition: 'Directional dependence or variation in a physical property; in the CMB, minute temperature fluctuations across the sky.'
      }
    ],
    facts: [
      'Penzias and Wilson initially thought the strange microwave hiss was caused by pigeon droppings inside their horn antenna; their discovery won the 1978 Nobel Prize in Physics.',
      'Every cubic centimeter of the universe contains about 411 ancient CMB photons from the dawn of time.'
    ],
    keyTakeaways: [
      'The CMB is the thermal afterglow of the Big Bang released at 380,000 years.',
      'Cooled by cosmic expansion to 2.725 Kelvin.',
      'Its tiny temperature ripples are the primordial seeds of all galaxies.'
    ],
    vizType: 'spectrum-wavelength',
    vizTitle: 'Planck CMB Blackbody Curve & Temperature Anisotropy Simulator',
    vizDescription: 'Interactive demonstration of the 2.725 K blackbody peak at 1.9 mm and microkelvin temperature ripples across the sky.',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Analyze Thermal Spectra in Spectral Lab',
      description: 'Explore how blackbody curves shift with temperature in the Spectral Intelligence module.'
    },
    quizQuestions: [
      {
        id: 'cmb_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the Cosmic Microwave Background (CMB)?',
        options: [
          'The thermal afterglow of the Big Bang released when the universe was 380,000 years old',
          'Microwave signals sent by alien communication towers',
          'Radiation emitted by kitchen microwave ovens',
          'Light reflecting off asteroids in the asteroid belt'
        ],
        correctAnswerIndex: 0,
        explanation: 'The CMB is the ancient thermal relic radiation emitted when the universe cooled sufficiently for neutral atoms to form, allowing photons to decouple and travel freely.',
        hint: 'It is the oldest light in the cosmos, left over from the infant universe.'
      },
      {
        id: 'cmb_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the average temperature of the Cosmic Microwave Background radiation today across empty space?',
        options: ['0 Kelvin', '2.725 Kelvin (-270.4°C)', '300 Kelvin (room temperature)', '3,000 Kelvin'],
        correctAnswerIndex: 1,
        explanation: 'Originally emitted at ~3,000 K, cosmic expansion has stretched and cooled the CMB photons down to an average temperature of approximately 2.7255 Kelvin.',
        hint: 'Just under 3 degrees above absolute zero.'
      },
      {
        id: 'cmb_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: The CMB is only found in a small patch of the sky near the North Star.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. The CMB permeates every single direction in the sky with near-perfect uniformity, confirming the cosmological principle.',
        hint: 'It comes from everywhere in the universe uniformly.'
      },
      {
        id: 'cmb_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Arno Penzias and Robert Wilson discovered the CMB in 1965. What funny issue did they initially suspect was causing the strange noise in their radio antenna?',
        options: [
          'Pigeon droppings and nesting pigeons inside the horn antenna',
          'A broken radio transistor',
          'A nearby police car radio',
          'Solar flares melting their wires'
        ],
        correctAnswerIndex: 0,
        explanation: 'They carefully cleaned pigeon droppings and removed nesting pigeons from their Bell Labs horn antenna, but the uniform microwave hum remained!',
        hint: 'Pigeons living inside their antenna.'
      },
      {
        id: 'cmb_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What did the tiny temperature fluctuations (1 part in 100,000) mapped in the CMB by satellite missions like Planck represent?',
        options: [
          'The primordial density ripples that gravity pulled together to form all galaxies and clusters',
          'Dust on the camera lens of the satellite',
          'Collisions between black holes',
          'Optical reflections from Earth’s oceans'
        ],
        correctAnswerIndex: 0,
        explanation: 'These minute quantum fluctuations represented slightly denser pockets of matter that, under gravity over billions of years, collapsed into galaxies and cosmic filaments.',
        hint: 'The seeds that grew into all cosmic structures.'
      }
    ]
  },
  {
    id: 'gravitational-waves',
    categoryId: 'deep-space',
    title: 'Gravitational Waves',
    subtitle: 'Ripples in the fabric of spacetime from colliding black holes and neutron stars',
    difficulty: 'Advanced',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'Gravitational waves are propagating disturbances in the curvature of spacetime traveling at the speed of light, generated by accelerating massive astrophysical bodies.',
    introduction: 'In 1916, Albert Einstein predicted that accelerating masses would send ripples through the very fabric of spacetime, like ripples on a pond. For a century, these waves seemed impossible to detect. Then, on September 14, 2015, the laser interferometers of LIGO detected the chirp of two colliding black holes 1.3 billion light-years away.',
    simpleExplanation: 'Imagine space as a giant sheet of taut rubber. If you roll two heavy bowling balls around each other faster and faster, they churn up waves in the rubber sheet that roll outward. When those waves pass through Earth, they literally stretch and squeeze physical objects by less than the width of a proton!',
    howItWorks: [
      'Einstein’s Quadrupole Formula: Only asymmetric accelerations generate gravitational radiation ($h \\propto \\frac{G}{c^4} \\frac{\\ddot{Q}}{r}$).',
      'Laser Interferometry (LIGO & Virgo): Uses 4-kilometer perpendicular laser arms. A passing wave stretches one arm while compressing the other, shifting the laser interference pattern.',
      'Unbelievable Precision: Detectors measure displacement changes of $10^{-18}$ meters—one ten-thousandth the diameter of a single atomic proton!',
      'Multi-Messenger Astronomy: In 2017, the collision of two neutron stars (GW170817) was detected via gravitational waves and followed up by optical, infrared, and gamma-ray telescopes worldwide.'
    ],
    whyItMatters: [
      'Opens a completely new sensory window on the cosmos: we can now "hear" violent black hole mergers that emit zero light.',
      'Directly tests Einstein’s General Relativity in the strongest gravitational fields in the universe.'
    ],
    terminology: [
      {
        term: 'Interferometer',
        definition: 'An optical instrument that splits a beam of light into two paths and recombines them to measure tiny differences in distance via interference fringes.'
      },
      {
        term: 'Chirp Signal',
        definition: 'The characteristic gravitational-wave signal from an inspiraling binary system, increasing rapidly in both frequency and amplitude until merger.'
      },
      {
        term: 'Multi-Messenger Astronomy',
        definition: 'Astrophysical observation combining electromagnetic radiation, gravitational waves, neutrinos, and cosmic rays.'
      }
    ],
    facts: [
      'In the final fraction of a second before two black holes merged in event GW150914, they converted 3 entire solar masses of pure matter into gravitational wave energy, radiating more power than all the stars in the observable universe combined!',
      'The 2017 Nobel Prize in Physics was awarded to Rainer Weiss, Kip Thorne, and Barry Barish for the historic first detection of gravitational waves.'
    ],
    keyTakeaways: [
      'Gravitational waves are ripples in spacetime propagating at the speed of light.',
      'Detected by laser interferometers measuring movements smaller than an atomic nucleus.',
      'Enable multi-messenger astronomy alongside infrared and optical surveys like SPHEREx.'
    ],
    vizType: 'redshift-doppler',
    vizTitle: 'Inspiraling Binary Spacetime Ripple & Chirp Simulator',
    vizDescription: 'Interactive demonstration of two orbiting black holes spiraling inward, producing expanding gravitational wave ripples and a frequency chirp.',
    skyverseBridge: {
      moduleId: 'time-machine',
      moduleName: 'Cosmic Time Machine',
      actionLabel: 'Search for Merger Counterparts in Time Machine',
      description: 'Search for multi-epoch optical and near-infrared counterparts of gravitational wave events.'
    },
    quizQuestions: [
      {
        id: 'gw_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Who first predicted the existence of gravitational waves in 1916 as part of his General Theory of Relativity?',
        options: ['Albert Einstein', 'Isaac Newton', 'Stephen Hawking', 'Galileo Galilei'],
        correctAnswerIndex: 0,
        explanation: 'Albert Einstein predicted gravitational waves in 1916 as propagating perturbations in spacetime metric curvature caused by accelerating masses.',
        hint: 'The author of General Relativity.'
      },
      {
        id: 'gw_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'At what speed do gravitational waves travel through the vacuum of space?',
        options: [
          'At the speed of light (c)',
          'At the speed of sound',
          'Infinitely fast (instantaneous)',
          'At 1,000 miles per hour'
        ],
        correctAnswerIndex: 0,
        explanation: 'General Relativity mandates that gravitational waves propagate at precisely the speed of light in vacuum ($c \\approx 300,000\\,\\text{km/s}$), confirmed by GW170817.',
        hint: 'They travel at the cosmic speed limit.'
      },
      {
        id: 'gw_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Gravitational waves are sound waves traveling through air.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False! Gravitational waves are distortions in the fabric of space and time itself; they do not require any medium or air and travel freely through vacuum.',
        hint: 'They are ripples of spacetime itself, not acoustic waves in air.'
      },
      {
        id: 'gw_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'LIGO detects gravitational waves using 4-kilometer laser arms. How small of a length change can LIGO detect when a gravitational wave passes through?',
        options: [
          'About the width of a human hand',
          'About the thickness of a sheet of paper',
          'Less than one ten-thousandth the diameter of a single atomic proton (~10⁻¹⁸ meters)',
          'One kilometer'
        ],
        correctAnswerIndex: 2,
        explanation: 'LIGO’s laser interferometers achieve the astounding sensitivity of measuring arm length changes of $10^{-18}$ meters—thousands of times smaller than a proton.',
        hint: 'Incomprehensibly smaller than an atomic nucleus.'
      },
      {
        id: 'gw_q5',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the name of the revolutionary new era of astronomy that observes cosmic cataclysms using both gravitational waves and electromagnetic telescopes simultaneously?',
        options: ['Multi-Messenger Astronomy', 'Static astronomy', 'Acoustic astronomy', 'Ptolemaic astronomy'],
        correctAnswerIndex: 0,
        explanation: 'Multi-messenger astronomy combines diverse cosmic messengers (photons across all wavelengths, gravitational waves, neutrinos, and cosmic rays) to study extreme events.',
        hint: 'Multiple messengers observing the same event.'
      }
    ]
  }
];

