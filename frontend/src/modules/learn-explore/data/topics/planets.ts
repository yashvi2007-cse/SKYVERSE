import { TopicItem } from '../../../../types/learnExplore';

export const PLANETS_TOPICS: TopicItem[] = [
  {
    id: 'planetary-orbits',
    categoryId: 'planets-exoplanets',
    title: 'Planetary Orbits & Kepler’s Laws',
    subtitle: 'The mathematical ballet of planetary motion around host stars',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Orbit',
    summary: 'Planetary orbits follow elliptical paths governed by Kepler’s Three Laws of Planetary Motion, connecting orbital distance, velocity, and period.',
    introduction: 'In the early 1600s, Johannes Kepler shattered millennia of dogma that planetary orbits were perfect circles. By painstakingly analyzing Tycho Brahe’s planetary data, Kepler derived three geometric laws that describe how worlds glide through space under gravity.',
    simpleExplanation: 'Think of an orbit like swinging a ball on an elastic string. The closer the planet is to its star, the tighter gravity’s pull, and the faster the planet must race through space to keep from falling directly into the fire. Farther away, gravity is weaker, so distant planets drift along at a leisurely pace.',
    howItWorks: [
      'Kepler’s 1st Law (Law of Ellipses): All planets orbit the Sun in an ellipse, with the Sun situated at one of the two focal points (foci).',
      'Kepler’s 2nd Law (Law of Equal Areas): A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time; planets accelerate at perihelion (closest) and decelerate at aphelion (farthest).',
      'Kepler’s 3rd Law (Harmonic Law): The square of the orbital period ($T^2$) is directly proportional to the cube of the semi-major axis ($a^3$): $T^2 = a^3$ (when measuring period in Earth years and distance in Astronomical Units).',
      'Newtonian Generalization: Isaac Newton later derived Kepler’s laws from universal gravitation ($F = G M m / r^2$), proving they apply to all satellites, moons, and exoplanets throughout the cosmos.'
    ],
    whyItMatters: [
      'Allows astronomers to accurately predict planetary positions, steer interplanetary probes, and calculate the masses of stars and exoplanets.',
      'Forms the foundation of all orbital mechanics and satellite navigation.'
    ],
    terminology: [
      {
        term: 'Semi-Major Axis (a)',
        definition: 'One half of the major axis of an elliptical orbit, representing the average distance from the orbiting body to the central star.'
      },
      {
        term: 'Eccentricity (e)',
        definition: 'A dimensionless measure of how much an orbit deviates from a perfect circle (e = 0 is a circle, 0 < e < 1 is an ellipse).'
      },
      {
        term: 'Perihelion & Aphelion',
        definition: 'The closest point (perihelion) and farthest point (aphelion) to the Sun along an elliptical orbit.'
      }
    ],
    facts: [
      'Mercury has the most eccentric orbit of any planet in our solar system ($e \\approx 0.206$), speeding up to 47 km/s at perihelion.',
      'Pluto’s orbit is so eccentric and tilted that it occasionally slips closer to the Sun than Neptune!'
    ],
    keyTakeaways: [
      'Planets travel in elliptical orbits, not perfect circles.',
      'They speed up when closer to the star and slow down when farther away.',
      'Orbital period squared equals distance cubed ($T^2 = a^3$).'
    ],
    vizType: 'planetary-orbit',
    vizTitle: 'Kepler’s 3 Laws & Orbital Velocity Interactive Simulator',
    vizDescription: 'Adjust semi-major axis ($a$) and eccentricity ($e$) to observe orbital period ($T$) and sweeping equal areas in real time.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'Track Planetary Positions in Explorer',
      description: 'Observe how planetary targets drift across the celestial sphere relative to background stars.'
    },
    quizQuestions: [
      {
        id: 'po_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'According to Kepler’s First Law, what is the geometric shape of planetary orbits around the Sun?',
        options: ['Perfect Circles', 'Ellipses with the Sun at one focus', 'Parabolas', 'Figure-eight loops'],
        correctAnswerIndex: 1,
        explanation: 'Kepler’s First Law established that all planetary orbits are ellipses, with the Sun located at one focal point.',
        hint: 'It is a slightly stretched circle called an ellipse.'
      },
      {
        id: 'po_q2',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'An exoplanet orbits a Sun-like star at an average distance of 4 Astronomical Units (AU). According to Kepler’s Third Law ($T^2 = a^3$), what is its orbital period in Earth years?',
        options: ['2 years', '4 years', '8 years', '16 years'],
        correctAnswerIndex: 2,
        explanation: 'Using $T^2 = a^3$: $a = 4$, so $a^3 = 4^3 = 64$. Taking the square root gives $T = \\sqrt{64} = 8$ Earth years.',
        hint: 'Calculate $4 \\times 4 \\times 4 = 64$, then find the square root.'
      },
      {
        id: 'po_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: A planet moves at its fastest orbital speed when it is at aphelion (farthest from the Sun).',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. By Kepler’s Second Law, a planet moves fastest at perihelion (closest to the Sun) and slowest at aphelion (farthest from the Sun).',
        hint: 'Gravity pulls hardest when closest, speeding the planet up.'
      },
      {
        id: 'po_q4',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the orbital eccentricity of a mathematically perfect circle?',
        options: ['0', '0.5', '1.0', 'Infinity'],
        correctAnswerIndex: 0,
        explanation: 'An eccentricity of $e = 0$ corresponds to a perfect circle; as $e$ increases toward $1$, the ellipse becomes increasingly flattened.',
        hint: 'Zero deviation from a circle.'
      },
      {
        id: 'po_q5',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'A comet has a highly eccentric orbit ($e = 0.95$). Where will the comet spend the vast majority of its orbital lifetime?',
        options: [
          'Right next to the Sun at perihelion',
          'Far out at the distant aphelion edge of its orbit where its speed is slowest',
          'Evenly distributed across every section',
          'Inside the asteroid belt'
        ],
        correctAnswerIndex: 1,
        explanation: 'Because orbital speed drops to a crawl at aphelion (Kepler’s 2nd Law), comets spend over 90% of their orbital period quietly drifting through distant frozen space.',
        hint: 'Equal areas in equal time means it crawls when far away.'
      }
    ]
  },
  {
    id: 'gravity',
    categoryId: 'planets-exoplanets',
    title: 'Gravity & Gravitational Tides',
    subtitle: 'The universal sculptor of celestial orbits and planetary interiors',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Orbit',
    summary: 'Gravity is the universal attractive force that binds planets, drives ocean tides, causes tidal locking, and governs the large-scale structure of the cosmos.',
    introduction: 'From the falling of an apple to the orbits of entire galaxy clusters, gravity is the master architect of the universe. Described classically by Newton as mutual mass attraction and relativistically by Einstein as the warping of spacetime, gravity shapes worlds and tides.',
    simpleExplanation: 'Gravity is space telling matter how to move, and matter telling space how to curve. When a massive body sits in space, it bends the fabric of space like a bowling ball resting on a trampoline. Smaller objects naturally roll along these curved contours.',
    howItWorks: [
      'Newton’s Law of Gravitation: $F = G \\frac{M_1 M_2}{r^2}$. The force increases with mass and drops sharply with the square of the separation distance.',
      'Einstein’s General Relativity: Massive objects curve spacetime; orbital motion is inertial freefall along geodesics in curved space.',
      'Tidal Forces: The difference in gravitational pull between the near side and far side of an object stretches it into an ellipsoid.',
      'Tidal Locking: Over time, tidal friction slows a moon’s or exoplanet’s rotation until its orbital period matches its rotational period, keeping one permanent face turned toward the host star.'
    ],
    whyItMatters: [
      'Tidal heating generates subsurface liquid oceans on moons like Europa and Enceladus, making them prime candidates for extraterrestrial life.',
      'Gravitational assists (slingshots) enable interplanetary spacecraft to explore the outer solar system without massive fuel tanks.'
    ],
    terminology: [
      {
        term: 'Tidal Locking',
        definition: 'The synchronous state where an orbiting body always shows the exact same face to the object it orbits because its rotational and orbital periods are equal.'
      },
      {
        term: 'Roche Limit',
        definition: 'The minimum distance to which a celestial body, held together only by its own gravity, can approach a second body without being torn apart by tidal forces.'
      },
      {
        term: 'Geodesic',
        definition: 'The shortest path between two points in curved spacetime, representing the natural trajectory of freely falling particles.'
      }
    ],
    facts: [
      'Our Moon is tidally locked to Earth: humanity never saw the Moon’s far side until a Soviet spacecraft photographed it in 1959.',
      'Jupiter’s moon Io experiences such violent tidal flexing from Jupiter that it is the most volcanically active body in the solar system, venting lava hundreds of kilometers into space.'
    ],
    keyTakeaways: [
      'Gravity drops with the square of the distance ($F \\propto 1/r^2$).',
      'Tidal forces stretch bodies because gravity pulls harder on the closer side.',
      'Tidal locking causes moons and close-in exoplanets to keep one face forever facing their host star.'
    ],
    vizType: 'planetary-orbit',
    vizTitle: 'Spacetime Curvature & Tidal Stretching Simulator',
    vizDescription: 'Interactive demonstration showing how differential gravitational pull causes tidal bulges and orbital locking.',
    skyverseBridge: {
      moduleId: 'investigation',
      moduleName: 'Object Investigation',
      actionLabel: 'Inspect Proper Motion & Gravitational Pull',
      description: 'Analyze astrometric motion and gravitational proper motion vectors using Gaia DR3 astrometry.'
    },
    quizQuestions: [
      {
        id: 'grav_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'If the distance between two orbiting bodies is doubled, by what factor does the gravitational force between them change?',
        options: ['It doubles (2x stronger)', 'It is halved (1/2)', 'It drops to one-quarter (1/4)', 'It drops to zero'],
        correctAnswerIndex: 2,
        explanation: 'Newton’s universal gravitation law contains $r^2$ in the denominator ($F \\propto 1/r^2$). Doubling distance ($2r$) reduces gravity to $(1/2)^2 = 1/4$ of its original strength.',
        hint: 'It follows the inverse-square law.'
      },
      {
        id: 'grav_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Why do we always see the exact same face of the Moon from Earth?',
        options: [
          'Because the Moon does not rotate at all',
          'Because tidal locking has synchronized the Moon’s rotation period to match its orbital period (~27.3 days)',
          'Because the other side of the Moon is invisible',
          'Because Earth’s clouds block the other side'
        ],
        correctAnswerIndex: 1,
        explanation: 'Earth’s tidal forces slowed the Moon’s rotation until its orbital period matched its rotational period exactly (1:1 spin-orbit resonance), a state called tidal locking.',
        hint: 'It rotates on its axis at the exact same rate it orbits Earth.'
      },
      {
        id: 'grav_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Astronauts in orbit around Earth float weightlessly because there is zero gravity in space.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False! Gravity in low Earth orbit is still ~90% as strong as on the surface. Astronauts float because they and the spacecraft are in continuous freefall around Earth.',
        hint: 'They are falling around the Earth, not experiencing zero gravity.'
      },
      {
        id: 'grav_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'What happens when a fragile icy moon migrates too close to a giant planet and passes inside that planet’s Roche Limit?',
        options: [
          'It turns into a star',
          'Planetary tidal forces overcome the moon’s self-gravity and tear it apart into a planetary ring system',
          'It is thrown completely out of the solar system',
          'Its core freezes solid'
        ],
        correctAnswerIndex: 1,
        explanation: 'Inside the Roche limit, differential tidal forces exceed the moon’s internal self-gravitational cohesion, shredding it into rocky/icy debris (this is how Saturn’s magnificent rings formed).',
        hint: 'Think about how Saturn got its rings.'
      },
      {
        id: 'grav_q5',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What extreme tidal heating phenomenon makes Jupiter’s moon Io the most volcanically active world in our solar system?',
        options: [
          'Continuous gravitational tug-of-war between Jupiter and outer moons Europa and Ganymede, flexing Io’s interior',
          'Burning nuclear reactors left by aliens',
          'Solar flares heating its surface',
          'Chemical reactions with space ice'
        ],
        correctAnswerIndex: 0,
        explanation: 'Io is caught in an orbital resonance with Europa and Ganymede, continuously pumping its orbital eccentricity while Jupiter’s titanic gravity squishes and stretches its rocky mantle, melting it into lava.',
        hint: 'Tidal flexing generates immense friction and internal heat.'
      }
    ]
  },
  {
    id: 'exoplanets',
    categoryId: 'planets-exoplanets',
    title: 'Exoplanets',
    subtitle: 'Worlds orbiting other stars across the Milky Way galaxy',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Globe',
    summary: 'Exoplanets are planets outside our Solar System, ranging from scorching "Hot Jupiters" to ocean-covered "Super-Earths" and rocky terrestrial worlds.',
    introduction: 'Until the early 1990s, humanity did not know with certainty if any other stars possessed planets. Today, NASA missions like Kepler and TESS have confirmed over 5,500 exoplanets, revealing that our galaxy holds more planets than stars!',
    simpleExplanation: 'Just as our Sun has eight planets, distant stars are surrounded by their own families of worlds. Because exoplanets are drowned out by the glare of their parent stars, astronomers detect them using clever tricks—like watching the star dim slightly when a planet passes in front of it.',
    howItWorks: [
      'Transit Method: When an exoplanet crosses directly between its star and Earth, it blocks a tiny fraction (0.01% to 1%) of the starlight, producing a characteristic dip in the light curve.',
      'Radial Velocity Method (Doppler Wobble): An orbiting planet exerts a gravitational tug on its host star, causing the star to wobble slightly toward and away from Earth, shifting its spectral lines.',
      'Direct Imaging: Using coronagraphs to block out blinding starlight and capture direct infrared snapshots of young, glowing giant planets.',
      'Gravitational Microlensing: The gravitational field of a foreground star and planet acts like a lens, temporarily magnifying the light of a distant background star.'
    ],
    whyItMatters: [
      'Answering humanity’s most profound question: Are we alone in the universe?',
      'SPHEREx and JWST analyze transmission spectra of exoplanet atmospheres to search for biosignature gases like water vapor, ozone, and methane.'
    ],
    terminology: [
      {
        term: 'Transit',
        definition: 'An astronomical event where a smaller celestial body passes across the face of a larger body, partially eclipsing its light.'
      },
      {
        term: 'Hot Jupiter',
        definition: 'A class of gas giant exoplanets with physical characteristics similar to Jupiter, but with very short orbital periods (less than 10 days) and scorching surface temperatures.'
      },
      {
        term: 'Super-Earth',
        definition: 'An exoplanet with a mass higher than Earth’s, but substantially below those of the Solar System’s ice giants (Uranus and Neptune).'
      }
    ],
    facts: [
      'The first confirmed exoplanet around a Sun-like star (51 Pegasi b) was discovered in 1995, winning the 2019 Nobel Prize in Physics.',
      'Astronomers estimate there are at least 100 billion exoplanets in our Milky Way galaxy alone.'
    ],
    keyTakeaways: [
      'Thousands of exoplanets have been confirmed using transit and radial velocity methods.',
      'The transit method detects planets by measuring dips in stellar light curves.',
      'Exoplanet diversity far exceeds what we observe in our own Solar System.'
    ],
    vizType: 'light-curve',
    vizTitle: 'Exoplanet Transit Photometry & Depth Simulator',
    vizDescription: 'Adjust planet radius and star size to observe light curve transit depth ($\Delta F / F = (R_p / R_*)^2$).',
    skyverseBridge: {
      moduleId: 'time-machine',
      moduleName: 'Cosmic Time Machine',
      actionLabel: 'Analyze Periodic Dips in Time Machine',
      description: 'Search for multi-epoch periodic transit dips across candidate stars in the SPHEREx catalog.'
    },
    quizQuestions: [
      {
        id: 'exo_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Which method has discovered the greatest number of confirmed exoplanets to date (used by NASA’s Kepler mission)?',
        options: ['The Transit Method', 'Sending human astronauts to visit them', 'Listening for radio broadcasts', 'Direct optical photography with cellphones'],
        correctAnswerIndex: 0,
        explanation: 'The transit method, which observes the slight periodic dimming of a star as an exoplanet passes in front of it, has discovered over 75% of all known exoplanets.',
        hint: 'It detects planets by measuring the drop in starlight as the planet crosses in front.'
      },
      {
        id: 'exo_q2',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'An exoplanet with radius $R_p$ transits a star of radius $R_*$. If the planet’s radius is 1/10th the radius of the star, what fraction of the starlight is blocked during transit?',
        options: ['1/10th (10%)', '1/100th (1%)', '1/1000th (0.1%)', 'None, planets are transparent'],
        correctAnswerIndex: 1,
        explanation: 'Transit depth depends on the ratio of circular cross-sectional areas: $\\Delta F / F = (R_p / R_*)^2 = (1/10)^2 = 1/100$ or 1%.',
        hint: 'Transit depth scales with area: square the radius ratio.'
      },
      {
        id: 'exo_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: "Hot Jupiters" are giant gas planets that orbit extremely close to their host stars in just a few days.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Hot Jupiters were a major surprise to astronomers because they have masses like Jupiter but orbit closer than Mercury, heated to thousands of degrees.',
        hint: 'They are giant planets located scorchingly close to their stars.'
      },
      {
        id: 'exo_q4',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What technique measures an exoplanet by detecting the subtle back-and-forth wobble it induces on its parent star using Doppler spectral shifts?',
        options: ['Radial Velocity Method', 'Astrometric parallax only', 'Hubble deep field method', 'Gravitational wave detection'],
        correctAnswerIndex: 0,
        explanation: 'The Radial Velocity (Doppler) method measures the periodic redshift and blueshift of stellar absorption lines as the host star wobbles around the shared center of mass.',
        hint: 'It measures the star’s velocity toward and away from Earth along the line of sight.'
      },
      {
        id: 'exo_q5',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'When an exoplanet transits its host star, a tiny fraction of starlight filters through the planet’s upper atmosphere. What revolutionary technique allows astronomers to identify gases in that atmosphere?',
        options: [
          'Transmission Spectroscopy',
          'Drilling core samples with rovers',
          'Measuring the star’s magnetic compass',
          'Gravitational slingshot'
        ],
        correctAnswerIndex: 0,
        explanation: 'Transmission spectroscopy measures which wavelengths of starlight are absorbed by atmospheric gases during transit, revealing atmospheric fingerprints of water, methane, and carbon dioxide.',
        hint: 'Analyzing the spectrum of light transmitted through the planet’s air.'
      }
    ]
  },
  {
    id: 'habitable-zones',
    categoryId: 'planets-exoplanets',
    title: 'Habitable Zones',
    subtitle: 'The Goldilocks boundary where liquid water can pool on a planetary surface',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Globe',
    summary: 'The circumstellar habitable zone is the orbital band around a star where temperatures permit liquid water to exist stably on a rocky planet’s surface.',
    introduction: 'Life as we know it requires liquid water as a universal solvent. If a planet orbits too close to its host star, its oceans boil away into a runaway greenhouse; too far, and its water freezes into permanent ice. In between lies the "Goldilocks Zone" where conditions are just right.',
    simpleExplanation: 'Imagine sitting near a crackling campfire on a cold night. If you sit too close, you get burned. If you sit too far away, you freeze. The comfortable ring around the campfire where the temperature is pleasant is just like a star’s habitable zone.',
    howItWorks: [
      'Luminosity Scaling: The distance of the habitable zone scales with the square root of stellar luminosity ($d_{HZ} \\propto \\sqrt{L_*}$).',
      'Hot Stars vs Cool Stars: Hot, luminous F-type stars have habitable zones located far out (2–4 AU), while cool, dim M-dwarf stars have habitable zones nestled extremely close (0.05–0.2 AU).',
      'Atmospheric Influence: A planet’s actual surface temperature depends critically on greenhouse gases (like $CO_2$ and $H_2O$) and planetary albedo (reflectivity).',
      'Tidal Hazards for Red Dwarfs: Planets in the close-in habitable zones of red dwarf stars are often tidally locked, with one blistering permanent day side and one freezing night side.'
    ],
    whyItMatters: [
      'Prioritizes exoplanet targets for deep spectroscopic observation by space telescopes seeking signs of habitability and alien life.',
      'Helps scientists understand why Earth became a lush biosphere while Venus became a runaway greenhouse inferno and Mars became a frozen desert.'
    ],
    terminology: [
      {
        term: 'Circumstellar Habitable Zone (CHZ)',
        definition: 'The range of orbits around a star within which a planetary surface can support liquid water given sufficient atmospheric pressure.'
      },
      {
        term: 'Runaway Greenhouse Effect',
        definition: 'A positive feedback loop where heating increases atmospheric water vapor, trapping more heat until all surface oceans evaporate (as occurred on Venus).'
      },
      {
        term: 'Albedo',
        definition: 'The proportion of incident electromagnetic radiation reflected by a celestial surface (ranging from 0 for pure black to 1 for perfect reflection).'
      }
    ],
    facts: [
      'The TRAPPIST-1 system contains seven Earth-sized rocky planets orbiting a cool red dwarf, with at least three situated comfortably in the habitable zone.',
      'Earth sits near the inner edge of our Sun’s habitable zone; if Earth were moved just 5% closer to the Sun, our oceans might suffer a runaway greenhouse!'
    ],
    keyTakeaways: [
      'The habitable zone is defined by where liquid water can exist on a rocky planet.',
      'Its distance from the star depends on the star’s luminosity ($d \\propto \\sqrt{L}$).',
      'Being in the habitable zone does not guarantee life—atmosphere and magnetic fields are equally vital.'
    ],
    vizType: 'habitable-zone',
    vizTitle: 'Stellar Type & Habitable Goldilocks Zone Calculator',
    vizDescription: 'Select star spectral type (M, K, G, F) to dynamically visualize the inner and outer boundaries of the habitable zone.',
    skyverseBridge: {
      moduleId: 'targets',
      moduleName: 'Challenge Targets',
      actionLabel: 'Examine Epsilon Indi B System',
      description: 'Explore the brown dwarf binary Epsilon Indi B and its cool substellar environment.'
    },
    quizQuestions: [
      {
        id: 'hz_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What crucial substance must be capable of existing in liquid form on a planet’s surface for an orbit to be in the "Habitable Zone"?',
        options: ['Liquid Water', 'Liquid Methane', 'Liquid Nitrogen', 'Liquid Iron'],
        correctAnswerIndex: 0,
        explanation: 'By standard astronomical definition, the circumstellar habitable zone is defined as the orbital distance where temperatures permit liquid water on a rocky surface.',
        hint: 'The universal solvent of all terrestrial biology.'
      },
      {
        id: 'hz_q2',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Star A is a cool red dwarf emitting only 1% of the Sun’s luminosity ($L = 0.01\\,L_\\odot$). Where will its habitable zone be located compared to our Solar System?',
        options: [
          'Much closer to the star (around 0.1 AU)',
          'At the exact same 1 AU distance as Earth',
          'Much farther out (around 10 AU)',
          'Red dwarfs do not have habitable zones'
        ],
        correctAnswerIndex: 0,
        explanation: 'Because habitable zone distance scales as $\\sqrt{L}$, a star with $0.01\\,L_\\odot$ has its habitable zone at $\\sqrt{0.01} = 0.1$ AU—ten times closer than Earth is to the Sun.',
        hint: 'A dimmer fire requires you to sit much closer to stay warm.'
      },
      {
        id: 'hz_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: If a planet is located inside its star’s habitable zone, it is guaranteed to have life.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. The Moon is located in the Sun’s habitable zone at 1 AU, yet it is completely barren because it lacks an atmosphere and magnetic field to retain surface water.',
        hint: 'Think about our Moon, which is at the same distance as Earth.'
      },
      {
        id: 'hz_q4',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What dangerous consequence often affects planets orbiting inside the extremely tight habitable zones of active M-dwarf (red dwarf) stars?',
        options: [
          'Tidal locking and violent stellar flares stripping their atmospheres',
          'Falling into a black hole',
          'Floating into another galaxy',
          'Instant ice ages every 2 hours'
        ],
        correctAnswerIndex: 0,
        explanation: 'Planets in close M-dwarf habitable zones are tidally locked (one permanent day side, one permanent night side) and get battered by coronal mass ejections and UV flares from young red dwarfs.',
        hint: 'Being very close to an active star exposes a world to fierce stellar flares and tidal forces.'
      },
      {
        id: 'hz_q5',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'Which planet in our solar system suffered a catastrophic runaway greenhouse effect, turning its surface into a 465°C toxic furnace?',
        options: ['Venus', 'Mars', 'Mercury', 'Jupiter'],
        correctAnswerIndex: 0,
        explanation: 'Venus experienced a runaway greenhouse effect where evaporating oceans added water vapor to the air, trapping heat until all water was lost and $CO_2$ baked into a dense, crushing atmosphere.',
        hint: 'The second planet from the Sun and the hottest in our solar system.'
      }
    ]
  },
  {
    id: 'brown-dwarfs',
    categoryId: 'planets-exoplanets',
    title: 'Brown Dwarfs',
    subtitle: 'The sub-stellar boundary: "failed stars" caught between gas giants and red dwarfs',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Sun',
    summary: 'Brown dwarfs are sub-stellar objects with masses between ~13 and 80 Jupiter masses—massive enough to fuse deuterium, but not massive enough to ignite stable hydrogen fusion.',
    introduction: 'In the cosmic hierarchy between the heaviest gas giant planets and the lightest true stars lies an enigmatic class of objects: brown dwarfs. Often called "failed stars", these cool, dark worlds glow faintly in the infrared, cooling slowly for billions of years.',
    simpleExplanation: 'Think of a brown dwarf as a cosmic spark that never caught fire. If a ball of gas has more mass than Jupiter, it gets hot enough at its core to fuse a small amount of heavy hydrogen (deuterium). But it lacks the mass needed to ignite true hydrogen fusion, so it steadily cools like a dying ember.',
    howItWorks: [
      'Mass Range: Between ~13 Jupiter masses ($M_J$) and ~75–80 $M_J$ (approx. 0.075 to 0.08 solar masses).',
      'The Deuterium Threshold: At ~13 $M_J$, core pressure permits brief fusion of deuterium ($^2H$). Above ~65 $M_J$, lithium fusion occurs briefly.',
      'Degeneracy Support: Supported against gravitational collapse by electron degeneracy pressure, keeping their physical size almost constant (about the radius of Jupiter) regardless of mass!',
      'Spectral Classes: Classified by cool near-infrared temperatures into L, T, and Y dwarfs (Y dwarfs can have surface temperatures cooler than a human body!).'
    ],
    whyItMatters: [
      'Brown dwarfs bridge the gap between stellar astrophysics and planetary meteorology.',
      'They represent crucial benchmarks for infrared space telescopes like SPHEREx and NEOWISE, which map the solar neighborhood in infrared light.'
    ],
    terminology: [
      {
        term: 'Sub-stellar Object',
        definition: 'An astronomical object whose mass is below the minimum required to sustain steady core hydrogen fusion (~0.075–0.08 solar masses).'
      },
      {
        term: 'Deuterium Burning',
        definition: 'A low-temperature fusion reaction combining a proton and a deuteron to form helium-3 ($p + ^2H \\to ^3He + \\gamma$), occurring at core temperatures of ~1 million Kelvin.'
      },
      {
        term: 'Y Dwarf',
        definition: 'The coolest spectral class of brown dwarfs, with effective temperatures below ~500 K (including objects with water ice clouds).'
      }
    ],
    facts: [
      'WISE 0855-0714, located just 7.2 light-years from Earth, is a Y-dwarf with an estimated temperature around -23°C to -48°C, boasting water ice clouds in its atmosphere!',
      'Because brown dwarfs do not produce energy by steady fusion, their luminosity fades over billions of years as they cool into obscurity.'
    ],
    keyTakeaways: [
      'Brown dwarfs have masses between 13 and 80 Jupiter masses.',
      'They briefly fuse deuterium, but cannot sustain core hydrogen fusion.',
      'They shine predominantly in near-infrared and mid-infrared wavelengths.'
    ],
    vizType: 'habitable-zone',
    vizTitle: 'Mass Boundary & Cooling Track Simulator (Planet vs Brown Dwarf vs Star)',
    vizDescription: 'Interactive mass slider comparing Jupiter ($1 M_J$), Brown Dwarfs (13–80 $M_J$), and Red Dwarf Stars ($>80 M_J$).',
    skyverseBridge: {
      moduleId: 'targets',
      moduleName: 'Challenge Targets',
      actionLabel: 'Explore WISE 0855 Target',
      description: 'Investigate WISE 0855, the coldest known sub-stellar brown dwarf, in the Challenge Targets module.'
    },
    quizQuestions: [
      {
        id: 'bd_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Why are brown dwarfs often colloquially called "failed stars"?',
        options: [
          'Because they exploded and failed',
          'Because they lack sufficient mass to sustain stable core hydrogen fusion',
          'Because they failed their orbit',
          'Because they have no gravity'
        ],
        correctAnswerIndex: 1,
        explanation: 'Brown dwarfs do not have enough mass (they are below ~80 Jupiter masses) to generate the core temperatures and pressures required for stable hydrogen fusion.',
        hint: 'They never get hot enough to ignite sustained hydrogen fusion.'
      },
      {
        id: 'bd_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the approximate lower mass limit (in Jupiter masses) that distinguishes a gas giant planet from a brown dwarf capable of fusing deuterium?',
        options: ['1 Jupiter mass', '~13 Jupiter masses', '~80 Jupiter masses', '1,000 Jupiter masses'],
        correctAnswerIndex: 1,
        explanation: 'At approximately 13 Jupiter masses ($13\\,M_J$), the core reaches about 1 million Kelvin, allowing the brief fusion of deuterium (heavy hydrogen).',
        hint: 'It is a baker’s dozen of Jupiter masses.'
      },
      {
        id: 'bd_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Cold brown dwarfs emit virtually all of their light in infrared wavelengths rather than visible light.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Because their surface temperatures are relatively cool (ranging from ~250 K to 2,500 K), Wien’s law dictates that their blackbody radiation peaks heavily in the near- and mid-infrared.',
        hint: 'They are too cool to glow brightly in visible light.'
      },
      {
        id: 'bd_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'WISE 0855 is one of the closest celestial objects to our solar system (7.2 light-years). What makes its atmosphere especially fascinating to planetary scientists?',
        options: [
          'It is covered in liquid lava',
          'Its temperature is below freezing (-20°C) and it shows spectral evidence of water-ice clouds',
          'It has a diamond core with rings',
          'It produces visible green laser beams'
        ],
        correctAnswerIndex: 1,
        explanation: 'WISE 0855 is a Y-type brown dwarf so cold that water vapor condenses into water-ice clouds in its upper atmosphere, resembling Jupiter’s deep atmosphere.',
        hint: 'It is colder than an Antarctic winter, with frozen water clouds.'
      },
      {
        id: 'bd_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'Because electron degeneracy pressure supports brown dwarfs, what surprising physical property do all brown dwarfs between 13 and 80 Jupiter masses share?',
        options: [
          'They all have nearly the exact same radius (roughly the size of Jupiter)',
          'They all rotate at the exact same second',
          'They all have rings made of gold',
          'They all orbit the Andromeda galaxy'
        ],
        correctAnswerIndex: 0,
        explanation: 'In degenerate matter, adding mass increases the gravitational compression, balancing out size. Consequently, brown dwarfs spanning 13 to 80 Jupiter masses are all roughly within 10% of Jupiter’s radius!',
        hint: 'Adding mass makes degenerate matter denser rather than bigger.'
      }
    ]
  },
  {
    id: 'planetary-atmospheres',
    categoryId: 'planets-exoplanets',
    title: 'Planetary Atmospheres & Biosignatures',
    subtitle: 'Chemical blankets, greenhouse feedback, and spectroscopic markers of life',
    difficulty: 'Advanced',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'Planetary atmospheres protect worlds from radiation, regulate surface climate, and contain chemical biosignatures that reveal the potential presence of life.',
    introduction: 'A planet’s atmosphere is its breath of life. It acts as a thermal blanket, an ultraviolet shield, and a chemical laboratory. By dissecting the thin ring of gas surrounding an exoplanet as starlight filters through it, astronomers can sniff out the chemistry of distant worlds.',
    simpleExplanation: 'Just as your breath steams on a cold morning, every gas leaves its own invisible fingerprint on starlight. When a planet passes in front of its star, starlight shines through its atmosphere. Different gases absorb specific wavelengths of light, allowing us to read what is in the air from trillions of miles away.',
    howItWorks: [
      'Atmospheric Retention: Governed by escape velocity ($v_{esc} = \\sqrt{2GM/R}$) versus thermal velocity ($v_{th} = \\sqrt{3kT/m}$) of gas molecules.',
      'Greenhouse Effect: Atmospheric molecules like $H_2O$, $CO_2$, and $CH_4$ absorb outgoing infrared radiation from the surface, re-radiating heat back downward.',
      'Atmospheric Escape: Stellar wind, photo-evaporation, and lack of a protective magnetosphere can strip away volatile atmospheres (as solar wind stripped Mars).',
      'Biosignature Disequilibrium: The simultaneous detection of reducing gases (like methane, $CH_4$) and oxidizing gases (like oxygen, $O_2$, or ozone, $O_3$) strongly indicates active replenishment by biological metabolism.'
    ],
    whyItMatters: [
      'Detecting biosignature gases in an exoplanet atmosphere would be humanity’s first definitive evidence of alien life.',
      'SPHEREx provides wide-angle near-infrared spectroscopic calibration of atmospheric absorption bands across the sky.'
    ],
    terminology: [
      {
        term: 'Biosignature',
        definition: 'A substance—such as an element, isotope, or chemical compound—that provides scientific evidence of past or present biological activity.'
      },
      {
        term: 'Chemical Disequilibrium',
        definition: 'A state where chemical reactions are driven away from thermodynamic equilibrium by continuous external processes, such as biological metabolism on Earth.'
      },
      {
        term: 'Photo-evaporation',
        definition: 'The process in which energetic ultraviolet and X-ray radiation from a young star strips the gaseous atmosphere from an orbiting planet.'
      }
    ],
    facts: [
      'Earth’s atmosphere contains 21% free oxygen ($O_2$), which would rapidly oxidize rocks and vanish within a few million years if not constantly replenished by photosynthetic life.',
      'On Saturn’s moon Titan, the atmosphere is 95% nitrogen with a surface pressure 1.5 times Earth’s, featuring lakes and rain of liquid methane and ethane.'
    ],
    keyTakeaways: [
      'Atmospheres regulate temperature through the greenhouse effect and protect surfaces from cosmic rays.',
      'Molecules leave distinct absorption fingerprints in near-infrared starlight.',
      'Co-existing oxygen and methane in chemical disequilibrium is a prime biosignature candidate.'
    ],
    vizType: 'spectrum-wavelength',
    vizTitle: 'Atmospheric Transmission Spectroscopy & Absorption Bands Simulator',
    vizDescription: 'Interactive spectrum showing molecular absorption dips for $H_2O$ (1.4, 1.9, 3.0 µm), $CO_2$ (4.3 µm), and $CH_4$ (3.3 µm).',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Extract Spectral Bands in Spectral Lab',
      description: 'Explore the 102 SPHEREx near-infrared channels to detect ice and atmospheric absorption bands.'
    },
    quizQuestions: [
      {
        id: 'pa_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Which gas makes up the majority of Earth’s atmosphere (~78%)?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
        correctAnswerIndex: 1,
        explanation: 'Nitrogen ($N_2$) comprises approximately 78% of Earth’s atmosphere, with oxygen making up about 21% and argon roughly 0.9%.',
        hint: 'It is nitrogen, not oxygen.'
      },
      {
        id: 'pa_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Why would the simultaneous detection of Oxygen ($O_2$) and Methane ($CH_4$) in an exoplanet atmosphere be compelling evidence of life?',
        options: [
          'Because oxygen and methane are poisonous to rocks',
          'Because they react chemically with each other; their co-existence indicates active, continuous biological replenishment (chemical disequilibrium)',
          'Because only humans can manufacture oxygen',
          'Because methane only comes from cows'
        ],
        correctAnswerIndex: 1,
        explanation: 'Oxygen and methane naturally destroy each other through oxidation; seeing both in substantial quantities means an active source (like biology) is constantly pumping both into the air.',
        hint: 'They react and destroy each other unless constantly replenished.'
      },
      {
        id: 'pa_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Without the natural greenhouse effect, Earth’s average surface temperature would be well below freezing (around -18°C).',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. The natural greenhouse effect raises Earth’s average surface temperature by about 33°C (from -18°C up to a comfortable +15°C), enabling liquid water oceans.',
        hint: 'Atmospheric greenhouse gases keep our planet warm enough for liquid oceans.'
      },
      {
        id: 'pa_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Why did the planet Mars lose most of its ancient, dense atmosphere and surface rivers over the past 3.5 billion years?',
        options: [
          'Its small core cooled, shutting down its global magnetic field and allowing the solar wind to strip its atmosphere away',
          'It crashed into a giant comet that sucked its air out',
          'Its gravity suddenly increased tenfold',
          'Alien civilizations mined its atmosphere for fuel'
        ],
        correctAnswerIndex: 0,
        explanation: 'NASA’s MAVEN mission confirmed that when Mars lost its internal dynamo and magnetic field, the unshielded solar wind stripped its atmosphere into space at a rate of 100 grams per second.',
        hint: 'The loss of its global magnetic shield exposed the air to the stripping action of the solar wind.'
      },
      {
        id: 'pa_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'In which wavelength regime do key biogenic atmospheric molecules like Water ($H_2O$), Carbon Dioxide ($CO_2$), and Methane ($CH_4$) exhibit their strongest vibrational absorption bands?',
        options: ['X-ray wavelengths', 'Near- and Mid-Infrared wavelengths (0.8 to 5.0 µm)', 'Gamma-ray wavelengths', 'Ultraviolet wavelengths only'],
        correctAnswerIndex: 1,
        explanation: 'Molecular bond stretches (like O-H and C-H) resonate precisely at near- and mid-infrared frequencies (0.8 to 5.0 µm), making this the primary science window for SPHEREx and JWST.',
        hint: 'The exact near-infrared wavelength range surveyed by NASA SPHEREx.'
      }
    ]
  }
];

