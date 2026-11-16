import { TopicItem } from '../../../../types/learnExplore';

export const STARS_TOPICS: TopicItem[] = [
  {
    id: 'star-formation',
    categoryId: 'stars-stellar',
    title: 'Star Formation',
    subtitle: 'From molecular cloud collapse to zero-age main sequence ignition',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Sparkles',
    summary: 'Stars are born when dense pockets within cold molecular clouds undergo gravitational collapse, forming protostars surrounded by protoplanetary disks.',
    introduction: 'In the deep freeze of interstellar space, vast clouds of cold gas and dust quietly drift. When triggered by a shockwave or internal turbulence, patches of these clouds exceed the Jeans mass, collapsing under their own gravity to ignite newborn stars.',
    simpleExplanation: 'Imagine an enormous pile of cold fluffy snow. If you pack it together tighter and tighter, it gets denser and heavier. Inside a cosmic gas cloud, gravity packs hydrogen gas so tightly that the center heats up to millions of degrees, until nuclear fusion ignites like a cosmic match.',
    howItWorks: [
      'Jeans Instability: When the gravitational inward force of a gas clump overcomes its internal thermal gas pressure, collapse becomes inevitable.',
      'Protostar Phase: As the clump collapses, gravitational potential energy transforms into thermal heat. A hot central core forms, obscured by dust.',
      'Accretion Disk & Jets: Conservation of angular momentum forces infalling material into a rotating protoplanetary disk, with bipolar magnetic jets blasting from the poles.',
      'Main Sequence Ignition: When core temperature surpasses ~10 million Kelvin, hydrogen fusion ignites stably, halting further gravitational collapse.'
    ],
    whyItMatters: [
      'Star formation directly determines the initial mass function (IMF), which sets the chemical and evolutionary trajectory of entire galaxies.',
      'Planetary systems and organic ices form as a natural byproduct inside the circumstellar disks surrounding young protostars.'
    ],
    terminology: [
      {
        term: 'Jeans Mass',
        definition: 'The minimum mass a gas cloud must possess to collapse under its own gravity against internal thermal pressure.'
      },
      {
        term: 'Protostar',
        definition: 'An early stage in stellar evolution where an infalling gas core is gathering mass but has not yet ignited sustained core hydrogen fusion.'
      },
      {
        term: 'T Tauri Star',
        definition: 'A young, pre-main-sequence variable star exhibiting intense stellar winds and strong magnetic activity.'
      }
    ],
    facts: [
      'It takes about 100,000 to 10 million years for a collapsing gas clump to become a fully stable main-sequence star.',
      'SPHEREx can peer through the dense dust envelopes of protostars to detect water ice and carbon dioxide frost lines.'
    ],
    keyTakeaways: [
      'Star birth requires cold, dense molecular gas.',
      'Gravitational collapse converts potential energy into intense thermal heat.',
      'Fusion ignites at ~10 million Kelvin, establishing hydrostatic balance.'
    ],
    vizType: 'stellar-evolution',
    vizTitle: 'Protostellar Collapse & Accretion Disk Interactive Model',
    vizDescription: 'Interactive simulation of Jeans mass collapse and the birth of a protostar with circumstellar disk.',
    skyverseBridge: {
      moduleId: 'targets',
      moduleName: 'Challenge Targets',
      actionLabel: 'Study RW Aurigae Young Star',
      description: 'Observe RW Aurigae, an active young T Tauri star system with a dynamic circumstellar disk.'
    },
    quizQuestions: [
      {
        id: 'sf_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What temperature must a protostar’s core roughly reach before hydrogen nuclear fusion can ignite?',
        options: ['1,000 Kelvin', '100,000 Kelvin', '10 million Kelvin', '100 billion Kelvin'],
        correctAnswerIndex: 2,
        explanation: 'Hydrogen nuclei (protons) carry positive charges and strongly repel each other; only at core temperatures exceeding ~10 million Kelvin do they move fast enough to overcome this Coulomb barrier and fuse.',
        hint: 'It takes millions of degrees of heat.'
      },
      {
        id: 'sf_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What mathematical condition describes when a gas cloud’s gravity overcomes internal gas pressure to trigger collapse?',
        options: ['The Chandrasekhar Limit', 'The Jeans Instability criterion', 'The Schwarzschild Radius', 'The Roche Limit'],
        correctAnswerIndex: 1,
        explanation: 'Sir James Jeans formulated the Jeans Mass and Jeans Length criteria, which establish the physical threshold for gravitational collapse in molecular clouds.',
        hint: 'Named after the British physicist Sir James Jeans.'
      },
      {
        id: 'sf_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Cold gas clouds collapse into stars much more easily than hot gas clouds.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Cold gas has much lower internal thermal pressure, allowing gravity to overcome it and trigger collapse much more readily.',
        hint: 'Hot gas expands outward vigorously; cold gas is calm.'
      },
      {
        id: 'sf_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'An astronomer observes a young protostar surrounded by a rotating disk of gas and dust that is blowing powerful high-speed gas jets from its poles. What evolutionary stage is this?',
        options: ['White Dwarf', 'Classical T Tauri / Pre-Main-Sequence star', 'Neutron Star', 'Red Supergiant'],
        correctAnswerIndex: 1,
        explanation: 'Classical T Tauri stars are pre-main-sequence objects characterized by accretion disks, intense magnetic fields, and prominent bipolar outflows.',
        hint: 'It is a young star in the final stages of gathering its mass before becoming a main sequence star.'
      },
      {
        id: 'sf_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What happens to the angular momentum of an infalling cloud as it collapses into a star?',
        options: [
          'It is completely destroyed.',
          'It is conserved, causing the collapsing material to spin faster and flatten into a disk.',
          'It turns into dark energy.',
          'It reverses direction every thousand years.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Due to conservation of angular momentum (like a figure skater pulling in their arms), the collapsing clump spins up rapidly, flattening into a circumstellar protoplanetary disk.',
        hint: 'Think of a spinning figure skater.'
      }
    ]
  },
  {
    id: 'stellar-evolution',
    categoryId: 'stars-stellar',
    title: 'Stellar Evolution',
    subtitle: 'Lifecycles across the Hertzsprung-Russell diagram from main sequence to stellar death',
    difficulty: 'Intermediate',
    readingTimeMinutes: 6,
    iconName: 'Sun',
    summary: 'A star’s destiny is dictated entirely by its initial birth mass: low-mass stars end gently as white dwarfs, while massive stars die in violent supernovae leaving neutron stars or black holes.',
    introduction: 'Stars are not eternal. Over millions or billions of years, they consume their nuclear fuel, swell into red giants, shed outer layers, or detonate in cosmic cataclysms that seed galaxies with the elements of life.',
    simpleExplanation: 'Think of star mass as a fuel budget and lifestyle choice. Giant heavy stars burn through their fuel at an insane rate, living fast and dying young in spectacular explosions. Small lightweight stars sip their fuel gently, living peacefully for trillions of years.',
    howItWorks: [
      'Main Sequence Lifetimes: Massive stars (O/B type) live only 5–50 million years; Sun-like stars (G type) live ~10 billion years; red dwarfs (M type) live up to trillions of years.',
      'Red Giant Phase: When core hydrogen is exhausted, the core contracts, heating the outer envelope to expand hundreds of times in size.',
      'Low/Intermediate Mass (< 8 Solar Masses): Expel outer layers as a planetary nebula, leaving behind a dense carbon-oxygen White Dwarf supported by electron degeneracy pressure.',
      'High Mass (> 8 Solar Masses): Fuse progressively heavier elements (He $\\to$ C $\\to$ O $\\to$ Ne $\\to$ Si $\\to$ Fe). Iron fusion absorbs energy rather than producing it, triggering instantaneous core collapse into a Supernova and forming a Neutron Star or Black Hole.'
    ],
    whyItMatters: [
      'Stellar evolution drives all cosmic nucleosynthesis: every atom of calcium in your bones and iron in your blood was forged inside dying stars.',
      'Tracking stellar populations allows astronomers to measure the ages of star clusters and trace the assembly history of galaxies.'
    ],
    terminology: [
      {
        term: 'Hertzsprung-Russell (H-R) Diagram',
        definition: 'A scatter plot of stars showing the relationship between stellar luminosity (or absolute magnitude) versus surface temperature (or spectral class).'
      },
      {
        term: 'Electron Degeneracy Pressure',
        definition: 'A quantum mechanical pressure arising from the Pauli Exclusion Principle that prevents electrons from occupying identical quantum states, supporting white dwarfs against gravity.'
      },
      {
        term: 'Chandrasekhar Limit',
        definition: 'The maximum theoretical mass of a non-rotating white dwarf (~1.44 solar masses), above which electron degeneracy pressure cannot prevent collapse.'
      }
    ],
    facts: [
      'In roughly 5 billion years, our Sun will swell into a red giant so large its outer atmosphere will engulf Mercury, Venus, and possibly Earth.',
      'A massive star can burn hydrogen for 10 million years, but burns its core silicon into iron in less than a single day before exploding!'
    ],
    keyTakeaways: [
      'A star’s initial mass is the single most important factor determining its lifespan and fate.',
      'Low-mass stars become white dwarfs; high-mass stars explode as core-collapse supernovae.',
      'Iron is the nuclear dead-end of stellar fusion because fusing iron absorbs energy.'
    ],
    vizType: 'stellar-evolution',
    vizTitle: 'H-R Diagram Stellar Evolution Simulator',
    vizDescription: 'Interactive Hertzsprung-Russell diagram tracking evolutionary tracks for low-mass vs. high-mass stars.',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Analyze Stellar Spectra in Spectral Lab',
      description: 'Explore the 102 near-infrared channels to identify stellar temperatures and atmospheric absorption.'
    },
    quizQuestions: [
      {
        id: 'se_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What single property of a star during its birth primarily determines its entire lifespan and ultimate death?',
        options: ['Its initial mass', 'Its speed of rotation', 'Its distance from the Milky Way center', 'The number of planets orbiting it'],
        correctAnswerIndex: 0,
        explanation: 'Mass dictates a star’s core temperature, pressure, fuel consumption rate, and whether it ends as a white dwarf, neutron star, or black hole.',
        hint: 'How heavy the star is sets its destiny.'
      },
      {
        id: 'se_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Why does the fusion of Iron-56 (Fe) inside a massive star’s core inevitably trigger core collapse?',
        options: [
          'Because iron is magnetic and repels starlight',
          'Because fusing iron absorbs energy rather than releasing it, immediately starving the core of outward pressure',
          'Because iron is too light to maintain gravity',
          'Because iron turns directly into helium'
        ],
        correctAnswerIndex: 1,
        explanation: 'Iron-56 has the highest nuclear binding energy per nucleon. Fusing elements heavier than iron is endothermic (absorbs energy), depriving the core of outward radiation support.',
        hint: 'Iron is a nuclear dead-end that consumes energy instead of releasing it.'
      },
      {
        id: 'se_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Our Sun will eventually explode as a violent core-collapse supernova.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. The Sun does not have enough mass (it needs > 8 solar masses). It will expand into a red giant, gently shed its outer envelope as a planetary nebula, and leave a white dwarf.',
        hint: 'Only massive stars (at least 8 times heavier than our Sun) detonate as supernovae.'
      },
      {
        id: 'se_q4',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What is the maximum mass a white dwarf can have before electron degeneracy pressure fails and it collapses, known as the Chandrasekhar Limit?',
        options: ['~0.5 Solar Masses', '~1.44 Solar Masses', '~3.0 Solar Masses', '~100 Solar Masses'],
        correctAnswerIndex: 1,
        explanation: 'Subrahmanyan Chandrasekhar calculated in 1930 that relativistic electron degeneracy pressure cannot support a white dwarf exceeding approximately 1.44 solar masses.',
        hint: 'Discovered by the Indian-American astrophysicist who won the 1983 Nobel Prize.'
      },
      {
        id: 'se_q5',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'You find two stars on the Main Sequence: Star A is blue and 20 times the mass of the Sun. Star B is red and 0.5 times the mass of the Sun. Which star will run out of fuel first?',
        options: [
          'Star B, because it is smaller and has less fuel.',
          'Star A, because massive stars burn their fuel at exponentially higher rates.',
          'Both will exhaust their fuel at the exact same second.',
          'Neither will ever run out of fuel.'
        ],
        correctAnswerIndex: 1,
        explanation: 'Stellar luminosity scales roughly with mass to the 3.5 power ($L \\propto M^{3.5}$). Massive stars burn their fuel so aggressively that their lifetimes are hundreds of times shorter.',
        hint: 'A gas-guzzling rocket burns through its tank far faster than a frugal hybrid.'
      }
    ]
  },
  {
    id: 'apparent-brightness',
    categoryId: 'stars-stellar',
    title: 'Apparent Brightness',
    subtitle: 'How bright a celestial object appears to an observer from Earth',
    difficulty: 'Beginner',
    readingTimeMinutes: 4,
    iconName: 'Sun',
    summary: 'Apparent brightness describes the amount of photon flux per unit area reaching a detector or eye on Earth, depending on both true luminosity and distance.',
    introduction: 'Look up at the night sky: some stars blaze like beacons, while others are faint specks. Does a brighter star actually produce more light, or is it simply much closer to Earth? Untangling this question is one of the foundations of astrophysics.',
    simpleExplanation: 'Imagine two identical flashlight bulbs: hold one directly in front of your face and put the other at the end of a long football field. The closer flashlight appears blindingly bright, even though both bulbs produce the exact same amount of light. That is apparent brightness!',
    howItWorks: [
      'Flux Measurement: Measured as the energy of light passing through one square meter per second ($W/m^2$).',
      'The Two Factors: Apparent brightness ($F$) depends on intrinsic luminosity ($L$) and distance ($d$) via the Inverse-Square Law: $F = L / (4\\pi d^2)$.',
      'Atmospheric Extinction: Light from stars passing through Earth’s atmosphere is dimmed by scattering and absorption.',
      'Astronomical Magnitude: Quantified using apparent magnitude ($m$), where smaller and negative numbers represent brighter objects.'
    ],
    whyItMatters: [
      'Apparent brightness is the raw observational measurement recorded by telescopes.',
      'When paired with distance measurements (from Gaia parallax), apparent brightness unlocks the true physical luminosity of stars.'
    ],
    terminology: [
      {
        term: 'Apparent Flux',
        definition: 'The rate at which radiant energy from a celestial body is received per unit area perpendicular to the direction of propagation.'
      },
      {
        term: 'Apparent Magnitude (m)',
        definition: 'A logarithmic measure of the brightness of an astronomical object as seen by an observer on Earth, normalized to the standard star Vega (m = 0).'
      },
      {
        term: 'Standard Candle',
        definition: 'An astronomical object of known intrinsic luminosity used to calculate distances based on its observed apparent brightness.'
      }
    ],
    facts: [
      'The Sun has an apparent magnitude of -26.7, appearing 400,000 times brighter than the full Moon (magnitude -12.6) simply because it is so close.',
      'The brightest star in the night sky, Sirius, appears bright mainly because it is only 8.6 light-years away, while distant supergiant stars are actually thousands of times more powerful.'
    ],
    keyTakeaways: [
      'Apparent brightness is how bright an object looks from Earth, not how much light it actually produces.',
      'It obeys the Inverse-Square Law ($F \\propto 1/d^2$).',
      'A dim-looking star can be either intrinsically faint or enormously far away.'
    ],
    vizType: 'inverse-square',
    vizTitle: 'Apparent Brightness vs. Distance Interactive Simulator',
    vizDescription: 'Adjust distance and luminosity sliders to observe real-time photon dilution and apparent magnitude changes.',
    skyverseBridge: {
      moduleId: 'quest',
      moduleName: 'Cosmic Brightness Quest',
      actionLabel: 'Play Quest Levels 1 & 2',
      description: 'Practice spotting brighter stars and sorting dynamic ranges in Cosmic Brightness Quest.'
    },
    quizQuestions: [
      {
        id: 'ab_q1',
        type: 'scenario',
        difficulty: 'Beginner',
        question: 'Two stars have identical intrinsic luminosities. Star A is twice as far from Earth as Star B. Which star appears brighter to an observer on Earth?',
        options: ['Star A', 'Star B', 'Both appear equally bright', 'Neither star produces light'],
        correctAnswerIndex: 1,
        explanation: 'Because both stars emit the same total energy, the star closer to Earth (Star B) will appear significantly brighter.',
        hint: 'Think about holding a flashlight close to you versus far away.'
      },
      {
        id: 'ab_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'If you move a star 3 times farther away from Earth, by what factor does its apparent brightness decrease?',
        options: ['It drops to 1/3', 'It drops to 1/6', 'It drops to 1/9', 'It stays the exact same'],
        correctAnswerIndex: 2,
        explanation: 'According to the Inverse-Square Law ($F \\propto 1/d^2$), tripling distance ($d = 3$) decreases the observed flux by $3^2 = 9$ (it drops to 1/9).',
        hint: 'Remember the formula $F = L / (4\\pi d^2)$.'
      },
      {
        id: 'ab_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: If a star appears dim in our night sky, it must be an intrinsically small, weak star.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. A dim-looking star could be an unimaginably luminous supergiant star that is situated thousands of light-years away.',
        hint: 'Consider the effect of immense distance.'
      },
      {
        id: 'ab_q4',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Which of the following apparent magnitude values corresponds to the brightest object?',
        options: ['m = +6.0', 'm = +1.0', 'm = 0.0', 'm = -1.5'],
        correctAnswerIndex: 3,
        explanation: 'On the astronomical magnitude scale, smaller and negative numbers indicate brighter objects. Magnitude -1.5 (like the star Sirius) is the brightest in this list.',
        hint: 'The magnitude scale is inverted; negative is brighter.'
      },
      {
        id: 'ab_q5',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'Astronomers detect a Type Ia Supernova in a distant galaxy with a known peak intrinsic luminosity. By measuring its apparent brightness, what fundamental property can they calculate directly?',
        options: ['The chemical composition of Earth', 'The distance to that distant galaxy', 'The number of black holes in our solar system', 'The age of our Moon'],
        correctAnswerIndex: 1,
        explanation: 'Because Type Ia supernovae are standard candles with known intrinsic luminosity ($L$), measuring their observed flux ($F$) allows astronomers to solve for distance ($d$) using the Inverse-Square Law.',
        hint: 'Standard candles are used to measure cosmic distances.'
      }
    ]
  },
  {
    id: 'absolute-magnitude',
    categoryId: 'stars-stellar',
    title: 'Absolute Magnitude',
    subtitle: 'Standardized true brightness at a fixed distance of 10 parsecs',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Sun',
    summary: 'Absolute magnitude ($M$) is the apparent magnitude a celestial object would have if placed at a standardized distance of exactly 10 parsecs (32.6 light-years) from Earth.',
    introduction: 'Because stars are scattered at vastly different distances across the galaxy, comparing their apparent brightness is like comparing apples to oranges. Absolute magnitude levels the playing field by asking: what if every star were placed at the exact same distance?',
    simpleExplanation: 'Imagine lining up every singer in the world at the exact same distance of 10 meters from you. Now you can truly hear who has the loudest voice, rather than just who is standing closest to your ear! Absolute magnitude does the exact same thing for stars at 10 parsecs.',
    howItWorks: [
      'Standardized Benchmark: Sets distance $d = 10\\,\\text{parsecs} \\approx 32.6\\,\\text{light-years}$.',
      'Distance Modulus Formula: $m - M = 5\\log_{10}(d) - 5$, where $m$ is apparent magnitude, $M$ is absolute magnitude, and $d$ is distance in parsecs.',
      'Comparing the Sun: The Sun’s apparent magnitude is $-26.7$, but its absolute magnitude is $+4.83$. If the Sun were 10 parsecs away, it would look like a faint, unremarkable star barely visible from suburban skies!',
      'Supergiants vs Dwarfs: Highly luminous blue supergiants have absolute magnitudes around $-7$ to $-9$, while dim red dwarfs have absolute magnitudes around $+15$.'
    ],
    whyItMatters: [
      'Allows astronomers to directly calculate true energy output without the confounding factor of distance.',
      'The difference between apparent and absolute magnitude ($m - M$) directly yields the distance to the star.'
    ],
    terminology: [
      {
        term: 'Distance Modulus',
        definition: 'The mathematical quantity $m - M = 5\\log_{10}(d) - 5$ that directly relates an object’s apparent magnitude, absolute magnitude, and distance in parsecs.'
      },
      {
        term: 'Bolometric Absolute Magnitude',
        definition: 'The absolute magnitude of an object calculated across all wavelengths of electromagnetic radiation, not just visible light.'
      },
      {
        term: 'Parsec',
        definition: 'The fundamental astronomical unit of distance, equal to $3.086 \\times 10^{13}\\,\\text{km}$ or $3.26\\,\\text{light-years}$.'
      }
    ],
    facts: [
      'If the blue supergiant Rigel (absolute magnitude -7.8) were placed at 10 parsecs, it would shine as brightly as the crescent Moon!',
      'Astronomers often express absolute magnitude in visual band ($M_V$) or near-infrared bands relevant to SPHEREx.'
    ],
    keyTakeaways: [
      'Absolute magnitude is the brightness an object would have at a distance of 10 parsecs (32.6 light-years).',
      'It represents true intrinsic power, independent of observer distance.',
      'Our Sun has an unremarkable absolute magnitude of +4.83.'
    ],
    vizType: 'inverse-square',
    vizTitle: 'Standardized Distance (10 Parsecs) Magnitude Comparator',
    vizDescription: 'Interactive comparison placing the Sun, Sirius, Rigel, and Betelgeuse at the standard 10 parsec distance.',
    skyverseBridge: {
      moduleId: 'quest',
      moduleName: 'Cosmic Brightness Quest',
      actionLabel: 'Master Magnitudes in Quest Level 4',
      description: 'Practice calculating logarithmic magnitudes in Cosmic Brightness Quest Level 4.'
    },
    quizQuestions: [
      {
        id: 'am_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What standardized distance from Earth is used to define a star’s absolute magnitude?',
        options: ['1 Astronomical Unit (AU)', '1 light-year', '10 parsecs (~32.6 light-years)', '1,000,000 kilometers'],
        correctAnswerIndex: 2,
        explanation: 'By international astronomical convention, absolute magnitude is defined as the apparent magnitude a star would have if located at exactly 10 parsecs.',
        hint: 'It is ten parsecs, roughly 32.6 light-years.'
      },
      {
        id: 'am_q2',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Our Sun appears blindingly bright in the daytime (m = -26.7). If the Sun were moved to the standard absolute magnitude distance of 10 parsecs, what would it look like?',
        options: [
          'It would still blind human eyes',
          'It would appear like a modest, faint star (M = +4.83) in the night sky',
          'It would be completely invisible even to the Hubble telescope',
          'It would explode into a supernova'
        ],
        correctAnswerIndex: 1,
        explanation: 'At 10 parsecs, our Sun has an absolute magnitude of +4.83, making it a faint, unremarkable star easily outshone by naked-eye stars like Vega or Sirius.',
        hint: 'The Sun is an average star that only looks bright because we are right next to it.'
      },
      {
        id: 'am_q3',
        type: 'true-false',
        difficulty: 'Intermediate',
        question: 'True or False: If a star’s apparent magnitude equals its absolute magnitude (m = M), that star is located at exactly 10 parsecs from Earth.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. In the distance modulus formula $m - M = 5\\log_{10}(d) - 5$, when $m = M$, we have $5\\log_{10}(d) - 5 = 0$, which solves to $d = 10$ parsecs.',
        hint: 'Review the definition: absolute magnitude is the apparent magnitude at 10 parsecs.'
      },
      {
        id: 'am_q4',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'Star X has an absolute magnitude of M = -5. Star Y has an absolute magnitude of M = 0. Which star is intrinsically more luminous, and by what factor?',
        options: [
          'Star Y is 5 times brighter',
          'Star X is 100 times brighter',
          'Star X is 5 times dimmer',
          'Both emit identical power'
        ],
        correctAnswerIndex: 1,
        explanation: 'On the Pogson magnitude scale, a difference of 5 magnitudes corresponds to a factor of exactly $100$ in brightness ($2.512^5 = 100$). Because smaller numbers are brighter, $M = -5$ is 100 times more luminous than $M = 0$.',
        hint: 'A difference of 5 magnitudes equals an exact factor of 100.'
      },
      {
        id: 'am_q5',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'An astronomer measures an apparent magnitude of m = 15 for a star whose absolute magnitude is known to be M = 10. Is the star closer than 10 parsecs or farther than 10 parsecs?',
        options: ['Farther than 10 parsecs', 'Closer than 10 parsecs', 'Exactly at 10 parsecs', 'It is inside the Sun'],
        correctAnswerIndex: 0,
        explanation: 'Because the star looks dimmer ($m = 15$) than its standardized brightness at 10 parsecs ($M = 10$), it must be located farther away than 10 parsecs ($d = 100$ parsecs).',
        hint: 'It appears fainter than it would at 10 parsecs, so it must be farther away.'
      }
    ]
  },
  {
    id: 'luminosity',
    categoryId: 'stars-stellar',
    title: 'Luminosity',
    subtitle: 'The total electromagnetic energy radiated per second by a star',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Sun',
    summary: 'Luminosity is the intrinsic physical power of a celestial object, measured in Watts or Solar Luminosities ($L_\\odot$), independent of the observer’s location.',
    introduction: 'While apparent brightness depends on where you stand in the universe, luminosity is an invariant property of the star itself. It is the raw physical wattage of the star, determined by its surface area and surface temperature.',
    simpleExplanation: 'Think of luminosity like the wattage printed on a light bulb box: a 100-Watt bulb produces 100 Joules of light every second, regardless of whether you look at it from one inch away or from an airplane miles above.',
    howItWorks: [
      'Stefan-Boltzmann Law: For a spherical star of radius $R$ and surface temperature $T$, luminosity is given by $L = 4\\pi R^2 \\sigma T^4$.',
      'Extreme Temperature Sensitivity: Because luminosity depends on temperature to the fourth power ($T^4$), doubling a star’s temperature increases its energy output by $2^4 = 16$ times!',
      'Solar Luminosity Benchmark: Our Sun’s luminosity ($1\\,L_\\odot$) is $3.828 \\times 10^{26}\\,\\text{Watts}$.',
      'Mass-Luminosity Relation: For main-sequence stars, luminosity scales steeply with mass ($L \\propto M^{3.5}$). A star with 10 times the Sun’s mass shines with more than 3,000 times the Sun’s luminosity!'
    ],
    whyItMatters: [
      'Determines the size and location of the circumstellar habitable zone where liquid water can exist on orbiting planets.',
      'Governs the rate of stellar evolution and galactic radiation feedback.'
    ],
    terminology: [
      {
        term: 'Solar Luminosity (L_☉)',
        definition: 'A standard unit of radiant power equal to $3.828 \\times 10^{26}\\,\\text{Watts}$, representing the total energy output of our Sun.'
      },
      {
        term: 'Stefan-Boltzmann Constant (σ)',
        definition: 'A fundamental physical constant ($\approx 5.67 \\times 10^{-8}\\,\\text{W}\\cdot\\text{m}^{-2}\\cdot\\text{K}^{-4}$) relating radiant power to temperature.'
      },
      {
        term: 'Bolometric Correction',
        definition: 'The correction applied to convert visual luminosity into total bolometric luminosity emitted across all electromagnetic wavelengths.'
      }
    ],
    facts: [
      'The most luminous known star, R136a1 in the Large Magellanic Cloud, blazes with roughly 4.7 million times the luminosity of our Sun.',
      'Our Sun releases more energy in a single second than humanity has consumed in all of recorded civilization.'
    ],
    keyTakeaways: [
      'Luminosity is the true power output of a star, measured in Watts.',
      'It depends on the star’s radius squared ($R^2$) and temperature to the fourth power ($T^4$).',
      'A small increase in temperature produces a colossal increase in luminosity.'
    ],
    vizType: 'stellar-evolution',
    vizTitle: 'Stefan-Boltzmann Star Radius & Temperature Wattage Simulator',
    vizDescription: 'Adjust stellar radius and surface temperature to observe exponential changes in total luminosity ($L = 4\\pi R^2 \\sigma T^4$).',
    skyverseBridge: {
      moduleId: 'quest',
      moduleName: 'Cosmic Brightness Quest',
      actionLabel: 'Compare Luminosity in Quest Level 6',
      description: 'Explore the decoupling of intrinsic luminosity and distance in Luminosity Lab.'
    },
    quizQuestions: [
      {
        id: 'lum_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the standard unit of luminosity in the International System of Units (SI)?',
        options: ['Watts (Joules per second)', 'Kilograms', 'Light-years', 'Candela per hour'],
        correctAnswerIndex: 0,
        explanation: 'Luminosity is power (energy emitted per unit time), measured in Watts ($1\\,\\text{Watt} = 1\\,\\text{Joule/second}$).',
        hint: 'The same unit used for household lightbulbs.'
      },
      {
        id: 'lum_q2',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Two stars have identical radii, but Star A has a surface temperature of 12,000 K while Star B has a surface temperature of 6,000 K (twice as hot). By what factor is Star A more luminous?',
        options: ['2 times', '4 times', '8 times', '16 times'],
        correctAnswerIndex: 3,
        explanation: 'According to the Stefan-Boltzmann law ($L \\propto T^4$), doubling the temperature ($2T$) increases luminosity by $2^4 = 16$ times.',
        hint: 'Remember that temperature is raised to the fourth power.'
      },
      {
        id: 'lum_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: A star’s luminosity changes depending on how far away an astronomer is standing from it.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. Luminosity is an intrinsic property of the star itself (like a lightbulb’s wattage). Only apparent brightness changes with distance.',
        hint: 'Does a 100-watt bulb change its wattage when you walk into another room?'
      },
      {
        id: 'lum_q4',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'Why do main-sequence stars with 10 times the Sun’s mass have lifetimes hundreds of times shorter than the Sun?',
        options: [
          'Because their luminosity scales as $L \\propto M^{3.5}$, burning their fuel thousands of times faster',
          'Because they are cooled by interstellar ice',
          'Because they lose all their mass to dark matter',
          'Because they do not undergo nuclear fusion'
        ],
        correctAnswerIndex: 0,
        explanation: 'Lifetime is proportional to fuel divided by consumption rate ($T \\propto M / L \\propto M / M^{3.5} = M^{-2.5}$). A 10-solar-mass star burns through its fuel ~3,160 times faster.',
        hint: 'They have 10 times more fuel, but burn it thousands of times faster.'
      },
      {
        id: 'lum_q5',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Betelgeuse is a red supergiant with a cool surface temperature (~3,500 K compared to the Sun’s 5,778 K). Why is it still over 100,000 times more luminous than our Sun?',
        options: [
          'Because it is located inside a black hole',
          'Because its radius is colossal (nearly 1,000 times larger than the Sun), giving it a gigantic surface area',
          'Because it burns coal instead of hydrogen',
          'Because it reflects light from Jupiter'
        ],
        correctAnswerIndex: 1,
        explanation: 'Luminosity depends on both temperature and surface area ($L = 4\\pi R^2 \\sigma T^4$). Even though it is cool, its immense radius (~700 solar radii) gives it an enormous surface area.',
        hint: 'Its size makes up for its lower surface temperature.'
      }
    ]
  },
  {
    id: 'variable-stars',
    categoryId: 'stars-stellar',
    title: 'Variable Stars',
    subtitle: 'Stars whose brightness fluctuates predictably or eruptively over time',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'Variable stars exhibit changes in apparent brightness due to periodic physical pulsations, eclipsing binary orbits, or cataclysmic stellar eruptions.',
    introduction: 'For centuries, astronomers assumed the stars were immutable, permanent jewels in the celestial sphere. In reality, thousands of stars undergo dramatic changes in brightness on timescales of hours, days, or months. These variable stars are the beating hearts of time-domain astronomy.',
    simpleExplanation: 'Imagine a star that breathes: as it expands, it cools and dims; as gravity pulls it back together, pressure heats it up and it brightens. Other times, two stars orbit each other, periodically blocking each other’s light like a cosmic eclipse. Watching these brightness changes over time is called time-domain astronomy.',
    howItWorks: [
      'Intrinsic Variables: Physical changes in the star itself, such as radial pulsations driven by the Kappa Mechanism (helium ionization opacity in Cepheids and RR Lyrae stars).',
      'Extrinsic Variables: Geometric or external causes, such as Eclipsing Binaries (where one star periodically passes in front of another) or rotating spotted stars.',
      'Cataclysmic Variables: Violent outbursts caused by thermonuclear explosions on white dwarf surfaces in binary systems (novae and recurrent novae).',
      'Period-Luminosity Relationship: Henrietta Swan Leavitt discovered in 1912 that the pulsation period of a Classical Cepheid directly correlates with its intrinsic luminosity, providing astronomy’s first cosmic standard candle.'
    ],
    whyItMatters: [
      'Cepheid variable stars allowed Edwin Hubble in 1923 to prove that the Andromeda Galaxy was a separate galaxy outside the Milky Way.',
      'Variable stars are primary targets for time-domain space missions like SPHEREx and Gaia, which monitor celestial changes across multi-epoch surveys.'
    ],
    terminology: [
      {
        term: 'Light Curve',
        definition: 'A graph of astronomical brightness (flux or magnitude) plotted as a function of time.'
      },
      {
        term: 'Cepheid Variable',
        definition: 'A pulsating variable star with a precise mathematical relationship between its pulsation period and absolute luminosity.'
      },
      {
        term: 'Eclipsing Binary',
        definition: 'A binary star system whose orbital plane lies so close to our line of sight that the components periodically eclipse one another.'
      }
    ],
    facts: [
      'Henrietta Swan Leavitt’s discovery of the Cepheid period-luminosity relation revolutionized modern cosmology and won posthumous Nobel praise.',
      'Some Mira-type variable stars, like R Draconis, fluctuate in brightness by more than a factor of 1,000 over a single year!'
    ],
    keyTakeaways: [
      'Variable stars change brightness through internal pulsations, eclipses, or eruptions.',
      'Plotting brightness over time creates a diagnostic light curve.',
      'Cepheids act as standard candles, unlocking distances to distant galaxies.'
    ],
    vizType: 'light-curve',
    vizTitle: 'Pulsating Cepheid & Eclipsing Binary Light Curve Simulator',
    vizDescription: 'Interactive demonstration comparing radial pulsations versus binary eclipses with real-time scrolling light curve plots.',
    skyverseBridge: {
      moduleId: 'time-machine',
      moduleName: 'Cosmic Time Machine',
      actionLabel: 'Detect Variable Stars in Time Machine',
      description: 'Use the blink comparator to discover brightness fluctuations across multiple observation epochs.'
    },
    quizQuestions: [
      {
        id: 'vs_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is a scientific graph of an astronomical object’s brightness plotted over time called?',
        options: ['A light curve', 'A Hertzsprung diagram', 'A mass spectrum', 'A Doppler shift plot'],
        correctAnswerIndex: 0,
        explanation: 'A light curve graphs brightness (flux or magnitude) on the vertical axis against time on the horizontal axis.',
        hint: 'It is a curve showing how light changes over time.'
      },
      {
        id: 'vs_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What historic discovery by Henrietta Swan Leavitt made Cepheid variable stars crucial for measuring cosmological distances?',
        options: [
          'The Period-Luminosity Relationship',
          'The discovery of black holes',
          'The invention of the reflecting telescope',
          'The measurement of the speed of light'
        ],
        correctAnswerIndex: 0,
        explanation: 'Leavitt discovered that brighter Cepheid variables have longer pulsation periods, allowing astronomers to calculate their true luminosity simply by measuring their period.',
        hint: 'Measuring how many days a Cepheid takes to pulse reveals how truly luminous it is.'
      },
      {
        id: 'vs_q3',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'You inspect a light curve that shows a steady flat brightness, interrupted periodically by sharp, steep dips every 3.2 days. What kind of variable system is this most likely?',
        options: ['An Eclipsing Binary star system', 'A solitary pulsar', 'A red giant exploding', 'A rogue planet drifting in deep space'],
        correctAnswerIndex: 0,
        explanation: 'Eclipsing binaries exhibit periodic sharp drops in light when one star passes in front of the other, briefly blocking a fraction of the total light.',
        hint: 'One star is passing directly in front of another on a fixed orbit.'
      },
      {
        id: 'vs_q4',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: All variable stars change brightness because their physical radius physically expands and contracts.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. Many variable stars are extrinsic variables (such as eclipsing binaries), where the stars remain constant in physical size but periodically eclipse one another.',
        hint: 'Remember that two stars orbiting each other can cause apparent brightness changes without either star physically pulsating.'
      },
      {
        id: 'vs_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'Which target star featured in the SKYVERSE platform is a classic Mira-type pulsating red giant with large brightness swings?',
        options: ['R Draconis', 'Barnard’s Star', 'WISE 0855', 'Epsilon Indi B'],
        correctAnswerIndex: 0,
        explanation: 'R Draconis is an archetypal Mira-type long-period variable star that pulsates over hundreds of days, dramatically altering its apparent brightness in the infrared.',
        hint: 'It is located in the northern constellation of Draco.'
      }
    ]
  },
  {
    id: 'supernovae',
    categoryId: 'stars-stellar',
    title: 'Supernovae',
    subtitle: 'Cataclysmic stellar detonations outshining entire galaxies',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Zap',
    summary: 'Supernovae are titanic stellar explosions marking the catastrophic death of massive stars (Type II) or the thermonuclear destruction of white dwarfs (Type Ia).',
    introduction: 'When a star dies in a supernova, it releases more energy in a few seconds than our Sun will produce over its entire 10-billion-year lifetime. For a few weeks, a single exploding star can outshine all the hundreds of billions of stars in its host galaxy combined.',
    simpleExplanation: 'Imagine an engine that has been running smoothly for millions of years suddenly running out of coolant and exploding with enough force to shatter an entire city. A supernova is the ultimate cosmic demolition, blasting heavy elements into space to form future generations of planets.',
    howItWorks: [
      'Type II (Core Collapse): Occurs in massive stars (> 8 solar masses) when the iron core collapses into a neutron star or black hole in milliseconds, causing an enormous shockwave that rips the star apart.',
      'Type Ia (Thermonuclear): Occurs in binary systems when a carbon-oxygen white dwarf accretes mass from a companion, reaches the Chandrasekhar limit (~1.44 solar masses), and ignites runaway carbon fusion.',
      'Heavy Element Synthesis: Explosive nucleosynthesis creates elements heavier than iron, including gold, platinum, and uranium.',
      'Supernova Remnants: The expanding shell of gas creates glowing shockwaves (like the Crab Nebula or Cas A) that trigger new star formation in nearby molecular clouds.'
    ],
    whyItMatters: [
      'Type Ia supernovae have nearly uniform peak luminosities, serving as "standard candles" that led to the Nobel-winning discovery of the accelerating universe and Dark Energy.',
      'Disperses essential life elements (carbon, oxygen, iron, phosphorus) throughout the interstellar medium.'
    ],
    terminology: [
      {
        term: 'Core Collapse Supernova',
        definition: 'An explosion caused by the gravitational collapse of the iron core of a massive star at the end of its nuclear-burning life.'
      },
      {
        term: 'Type Ia Supernova',
        definition: 'A thermonuclear detonation of a carbon-oxygen white dwarf that exceeds the Chandrasekhar mass limit in a binary star system.'
      },
      {
        term: 'Neutrino Burst',
        definition: 'A massive flood of neutrinos carrying away 99% of a core-collapse supernova’s gravitational energy in a few seconds.'
      }
    ],
    facts: [
      'The last naked-eye supernova observed in our Milky Way was Kepler’s Supernova in 1604, over four centuries ago.',
      'Supernova 1987A in the Large Magellanic Cloud was detected by underground neutrino detectors hours before its visible light reached Earth, confirming theoretical models of core collapse.'
    ],
    keyTakeaways: [
      'Supernovae occur via core collapse of massive stars or thermonuclear detonation of white dwarfs.',
      'They forge and distribute the universe’s heavy elements.',
      'Type Ia supernovae proved that cosmic expansion is accelerating.'
    ],
    vizType: 'stellar-evolution',
    vizTitle: 'Supernova Blast Wave & Light Curve Decay Simulator',
    vizDescription: 'Interactive simulation of radioactive nickel-56 decay powering the peak brightness and decay curve of a supernova.',
    skyverseBridge: {
      moduleId: 'discovery',
      moduleName: 'Discovery Hub',
      actionLabel: 'Report Transient Candidates in Discovery Hub',
      description: 'Submit and verify transient brightness candidates discovered in SPHEREx multi-epoch data.'
    },
    quizQuestions: [
      {
        id: 'sn_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Which type of supernova occurs when a white dwarf in a binary system exceeds the Chandrasekhar mass limit and explodes completely?',
        options: ['Type Ia Supernova', 'Type II Core Collapse Supernova', 'Kilonova', 'Planetary Nebula'],
        correctAnswerIndex: 0,
        explanation: 'Type Ia supernovae are thermonuclear explosions of carbon-oxygen white dwarfs that accrete matter until reaching the Chandrasekhar limit (~1.44 solar masses).',
        hint: 'It is designated as Type 1-a.'
      },
      {
        id: 'sn_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What percentage of the total energy released in a core-collapse supernova is carried away by invisible neutrinos?',
        options: ['Roughly 1%', 'Roughly 10%', 'Roughly 50%', 'Over 99%'],
        correctAnswerIndex: 3,
        explanation: 'Over 99% of the gravitational binding energy released during core collapse is radiated away as an intense burst of neutrinos; optical light accounts for less than 0.01%!',
        hint: 'Almost all the energy escapes as ghostly neutral particles.'
      },
      {
        id: 'sn_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: A single supernova can briefly shine brighter than all the billions of stars in its host galaxy combined.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. At peak luminosity, a supernova reaches an absolute magnitude around -19 to -20, matching or exceeding the optical brightness of an entire galaxy.',
        hint: 'Think about how much energy is released in seconds.'
      },
      {
        id: 'sn_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'In the late 1990s, two teams of astronomers measured the distances to distant Type Ia supernovae and found them to be fainter than expected. What monumental cosmological discovery did this reveal?',
        options: [
          'The universe is collapsing toward a Big Crunch',
          'The expansion of the universe is accelerating, driven by Dark Energy',
          'Telescopes were fogged up by dust on Earth',
          'The speed of light has slowed down'
        ],
        correctAnswerIndex: 1,
        explanation: 'The observed faintness of distant Type Ia supernovae proved that cosmic expansion is speeding up rather than slowing down, earning the 2011 Nobel Prize in Physics for Dark Energy.',
        hint: 'It proved that cosmic expansion is accelerating.'
      },
      {
        id: 'sn_q5',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What radioactive element synthesized in a supernova explosion powers its glowing light curve for months through radioactive decay?',
        options: ['Uranium-235', 'Nickel-56 decaying into Cobalt-56 and Iron-56', 'Carbon-14', 'Helium-4'],
        correctAnswerIndex: 1,
        explanation: 'The characteristic decline of a supernova’s light curve is driven by gamma rays released during the radioactive decay of Nickel-56 (half-life 6 days) to Cobalt-56 (half-life 77 days) to stable Iron-56.',
        hint: 'It decays from Nickel to Cobalt to stable Iron.'
      }
    ]
  },
  {
    id: 'black-holes',
    categoryId: 'stars-stellar',
    title: 'Black Holes',
    subtitle: 'Gravitational singularities where spacetime curves to infinity and light cannot escape',
    difficulty: 'Advanced',
    readingTimeMinutes: 6,
    iconName: 'Orbit',
    summary: 'Black holes are regions of spacetime where gravity is so intense that nothing—not even light—possesses enough velocity to escape beyond their event horizons.',
    introduction: 'Predicted by Albert Einstein’s General Relativity in 1915, black holes are the most extreme gravitational engines in the universe. Where mass is compressed into an infinitesimal volume, space and time warp so violently that the laws of conventional physics break down.',
    simpleExplanation: 'Every planet and star has an "escape velocity"—the speed you need to blast off and escape into space. A black hole is an object with so much mass packed into such a tiny space that its escape velocity exceeds the speed of light. Since nothing can travel faster than light, nothing can get out!',
    howItWorks: [
      'Event Horizon: The point of no return. The radius of this sphere is the Schwarzschild Radius ($R_s = 2GM/c^2$).',
      'Singularity: At the mathematical center, general relativity predicts a point of infinite gravitational curvature and infinite density.',
      'Accretion Disk: Gas falling toward a black hole forms a friction-heated disk glowing at millions of degrees, blasting X-rays into space.',
      'Types: Stellar-mass black holes (3–50 solar masses), Intermediate-mass (100–10,000 solar masses), and Supermassive black holes (millions to billions of solar masses at galaxy cores).'
    ],
    whyItMatters: [
      'Supermassive black holes regulate galaxy growth through high-energy relativistic jets.',
      'Colliding black holes generate gravitational waves, allowing astronomers to observe spacetime ripples with LIGO and Virgo.'
    ],
    terminology: [
      {
        term: 'Event Horizon',
        definition: 'The boundary surrounding a black hole beyond which events cannot affect an outside observer, demarcating the escape velocity threshold equal to the speed of light.'
      },
      {
        term: 'Schwarzschild Radius',
        definition: 'The radius of the event horizon for a non-rotating, uncharged black hole: $R_s = \\frac{2GM}{c^2}$.'
      },
      {
        term: 'Spaghettification',
        definition: 'The extreme tidal elongation of an object falling into a strong gravitational gradient, stretching it vertically and compressing it horizontally.'
      }
    ],
    facts: [
      'If you could squeeze Earth down to the size of a marble (about 1.8 centimeters across), it would become a black hole!',
      'The Event Horizon Telescope produced the first direct silhouette image of a supermassive black hole in galaxy M87 in 2019.'
    ],
    keyTakeaways: [
      'Black holes form when massive stellar cores or gas clouds collapse past their Schwarzschild radius.',
      'The event horizon is a boundary of spacetime, not a physical surface.',
      'Matter falling into black holes glows brilliantly before crossing the horizon.'
    ],
    vizType: 'celestial-galaxy',
    vizTitle: 'Gravitational Lensing & Event Horizon Interactive Simulation',
    vizDescription: 'Interactive demonstration of light bending around the photon sphere and accretion disk of a Kerr black hole.',
    skyverseBridge: {
      moduleId: 'investigation',
      moduleName: 'Object Investigation',
      actionLabel: 'Analyze High-Energy Sources in Lab',
      description: 'Investigate extreme celestial candidates and high proper-motion sources in the Investigation Lab.'
    },
    quizQuestions: [
      {
        id: 'bh_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the name of the boundary surrounding a black hole beyond which nothing, not even light, can escape?',
        options: ['The Ergosphere', 'The Event Horizon', 'The Oort Boundary', 'The Van Allen Belt'],
        correctAnswerIndex: 1,
        explanation: 'The event horizon is the physical boundary where the escape velocity equals the speed of light, representing the ultimate point of no return.',
        hint: 'It marks the horizon beyond which events cannot be observed from the outside.'
      },
      {
        id: 'bh_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the mathematical equation for the Schwarzschild radius of a non-rotating black hole of mass M?',
        options: ['$R_s = 2GM / c^2$', '$R_s = mc^2$', '$R_s = 4\\pi d^2$', '$R_s = G M_1 M_2 / r$'],
        correctAnswerIndex: 0,
        explanation: 'Karl Schwarzschild solved Einstein’s field equations in 1916 to show that $R_s = \\frac{2GM}{c^2}$.',
        hint: 'It depends on gravitational constant G, mass M, and speed of light squared c².'
      },
      {
        id: 'bh_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: If the Sun were instantly replaced by a black hole with the exact same mass as the Sun, Earth would immediately be sucked inside.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False! Because the mass would remain exactly 1 solar mass, the gravitational force at Earth’s 1 AU distance would not change; Earth would continue orbiting peacefully in the dark.',
        hint: 'Gravity at a distance depends only on mass, not physical density.'
      },
      {
        id: 'bh_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'If black holes emit no light from within their event horizons, how do astronomers detect and observe them with telescopes?',
        options: [
          'By feeling their heat on Earth directly',
          'By observing X-rays from superheated gas in their accretion disks and tracking the orbits of nearby stars',
          'By shining giant lasers at them',
          'By measuring their magnetic compass needles'
        ],
        correctAnswerIndex: 1,
        explanation: 'Gas spiraling into a black hole reaches millions of degrees, radiating intense X-rays and radio waves, while stars orbiting the invisible mass reveal its location and weight.',
        hint: 'Matter swirling around the black hole gets superheated before it falls in.'
      },
      {
        id: 'bh_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What is the humorous yet scientifically accurate term coined for the extreme tidal stretching experienced by an object approaching a stellar-mass black hole?',
        options: ['Pancake effect', 'Spaghettification', 'Macaroni elongation', 'Cosmic stretching'],
        correctAnswerIndex: 1,
        explanation: 'Because gravitational pull on your feet is millions of times stronger than on your head, tidal forces stretch you vertically like a noodle—a process formally known as spaghettification.',
        hint: 'Named after an Italian pasta.'
      }
    ]
  },
  {
    id: 'neutron-stars',
    categoryId: 'stars-stellar',
    title: 'Neutron Stars & Pulsars',
    subtitle: 'City-sized stellar remnants of pure nuclear matter and cosmic lighthouse beacons',
    difficulty: 'Advanced',
    readingTimeMinutes: 5,
    iconName: 'Zap',
    summary: 'Neutron stars are the ultra-dense collapsed cores of massive stars, packing more mass than our Sun into a sphere just 20 kilometers wide, held up by neutron degeneracy pressure.',
    introduction: 'Imagine crushing an entire star heavier than our Sun into a sphere the size of a city. At these incomprehensible densities, atomic electrons are crushed directly into protons to create a sea of pure neutrons. These bizarre stellar corpses spin hundreds of times per second, blinking like cosmic lighthouses.',
    simpleExplanation: 'If you took a single teaspoon of material from a neutron star and brought it to Earth, it would weigh over a billion tons—roughly the weight of Mount Everest! When these stars have intense magnetic fields and spin rapidly, they sweep radio beams across space, creating periodic blinks known as pulsars.',
    howItWorks: [
      'Electron Capture: During core collapse, intense pressure forces electrons and protons to merge into neutrons and neutrinos: $p + e^- \\to n + \\nu_e$.',
      'Neutron Degeneracy Pressure: The Pauli exclusion principle prevents neutrons from occupying the same state, halting collapse if mass is below the Tolman-Oppenheimer-Volkoff (TOV) limit (~2.1 solar masses).',
      'Rapid Spin: Conservation of angular momentum shrinks a star from 1,000,000 km to 20 km, accelerating its spin up to hundreds of rotations per second.',
      'Magnetic Beams (Pulsars): Magnetic fields a trillion times stronger than Earth’s channel particles out magnetic poles, creating beams of light that sweep like a lighthouse.'
    ],
    whyItMatters: [
      'Pulsars serve as ultra-precise celestial clocks, used to detect low-frequency gravitational waves and test Einstein’s general relativity.',
      'Neutron star collisions (kilonovae) are the primary cosmic factories of heavy elements like gold, platinum, and iodine.'
    ],
    terminology: [
      {
        term: 'Pulsar',
        definition: 'A highly magnetized, rapidly rotating neutron star that emits a beam of electromagnetic radiation out of its magnetic poles.'
      },
      {
        term: 'Tolman-Oppenheimer-Volkoff (TOV) Limit',
        definition: 'The upper mass limit (~2.1 to 2.3 solar masses) for a stable neutron star, beyond which it must collapse into a black hole.'
      },
      {
        term: 'Magnetar',
        definition: 'An extreme type of neutron star with an extraordinarily powerful magnetic field ($10^9$ to $10^{11}$ Tesla).'
      }
    ],
    facts: [
      'The fastest known pulsar, PSR J1748-2446ad, spins at an astonishing 716 rotations per second—its equator travels at nearly a quarter the speed of light!',
      'When two neutron stars collided in 2017 (event GW170817), gravitational waves and light were detected simultaneously, proving kilonovae produce much of the universe’s gold.'
    ],
    keyTakeaways: [
      'Neutron stars pack 1.4–2.1 solar masses into a city-sized sphere ~20 km in diameter.',
      'Supported against total collapse by quantum neutron degeneracy pressure.',
      'Pulsars sweep relativistic radio beams across space with atomic-clock precision.'
    ],
    vizType: 'stellar-evolution',
    vizTitle: 'Pulsar Lighthouse Emission & Spin-Down Simulator',
    vizDescription: 'Interactive demonstration of misaligned magnetic axis sweeping radiation beams across an observer’s line of sight.',
    skyverseBridge: {
      moduleId: 'time-machine',
      moduleName: 'Cosmic Time Machine',
      actionLabel: 'Inspect Fast Periodic Transients',
      description: 'Analyze time-lapse observations to monitor rapid transient events in the SPHEREx pipeline.'
    },
    quizQuestions: [
      {
        id: 'ns_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Approximately how wide is a typical neutron star that contains more mass than our entire Sun?',
        options: ['About the diameter of Earth (~12,700 km)', 'About the size of a city (~20 kilometers)', 'About the size of a grain of sand', 'About the size of Jupiter'],
        correctAnswerIndex: 1,
        explanation: 'A neutron star packs 1.4 to 2 solar masses into a sphere only about 20 kilometers (12 miles) in diameter—roughly the size of Manhattan or a medium city.',
        hint: 'It is roughly the size of a metropolitan city.'
      },
      {
        id: 'ns_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What quantum mechanical principle prevents a neutron star below the TOV limit from collapsing into a black hole?',
        options: ['Thermal gas pressure', 'Neutron degeneracy pressure', 'Centrifugal anti-gravity', 'Electrostatic repulsion'],
        correctAnswerIndex: 1,
        explanation: 'Neutron degeneracy pressure, rooted in the Pauli exclusion principle for identical fermions (neutrons), provides the outward quantum pressure that supports the star.',
        hint: 'It is the neutron equivalent of electron degeneracy pressure.'
      },
      {
        id: 'ns_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Pulsars are rotating neutron stars whose radiation beams sweep past Earth like a lighthouse beacon.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Discovered by Jocelyn Bell Burnell in 1967, pulsars emit relativistic radiation along their magnetic axes, which pulse regularly as the star spins.',
        hint: 'Think of a rotating beacon on a lighthouse.'
      },
      {
        id: 'ns_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'In 2017, the gravitational-wave event GW170817 observed two neutron stars merging in a "kilonova". Spectroscopy confirmed this cataclysm created massive amounts of which heavy precious metals?',
        options: ['Pure Hydrogen and Helium', 'Gold and Platinum', 'Uranium only', 'Plastic and glass'],
        correctAnswerIndex: 1,
        explanation: 'The rapid neutron-capture process (r-process) in the debris of colliding neutron stars forges heavy elements including gold, platinum, and rare-earth metals.',
        hint: 'The collision created the gold in your jewelry.'
      },
      {
        id: 'ns_q5',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is a neutron star with an extraordinarily intense magnetic field—up to a quadrillion times stronger than Earth’s—called?',
        options: ['A Magnetar', 'A White Dwarf', 'A Quasar', 'A Brown Dwarf'],
        correctAnswerIndex: 0,
        explanation: 'Magnetars possess the strongest magnetic fields in the known universe ($10^{13}$ to $10^{15}$ Gauss), occasionally triggering starquakes that blast gamma-ray flares across the galaxy.',
        hint: 'The name comes from its extreme magnetism.'
      }
    ]
  }
];

