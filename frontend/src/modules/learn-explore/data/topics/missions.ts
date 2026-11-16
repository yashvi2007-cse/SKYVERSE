import { TopicItem } from '../../../../types/learnExplore';

export const MISSIONS_TOPICS: TopicItem[] = [
  {
    id: 'space-telescopes',
    categoryId: 'space-missions',
    title: 'Space Telescopes & Observatories',
    subtitle: 'Overcoming atmospheric turbulence and absorption from orbit',
    difficulty: 'Beginner',
    readingTimeMinutes: 5,
    iconName: 'Telescope',
    summary: 'Space telescopes orbit above Earth’s atmosphere, eliminating atmospheric blurring, light pollution, and absorption to achieve unprecedented sharpness and multi-wavelength views.',
    introduction: 'In 1946, long before humans launched the first artificial satellite, astrophysicist Lyman Spitzer proposed placing telescopes into space. Earth’s turbulent, watery atmosphere is a blessing for life, but a curse for astronomers, blurring optical images and absorbing crucial infrared, ultraviolet, and X-ray light.',
    simpleExplanation: 'Imagine trying to read a street sign from the bottom of a swimming pool: the rippling water makes everything look blurry and wobbly. Earth’s atmosphere does the exact same thing to starlight! Putting a telescope in space pulls it out of the swimming pool into crystal-clear clarity.',
    howItWorks: [
      'Atmospheric Seeing: Atmospheric air turbulence constantly refracts incoming light waves, limiting ground-based optical resolution to ~0.5–1.0 arcseconds without adaptive optics.',
      'Absorption Bands: Water vapor, carbon dioxide, and ozone in Earth’s atmosphere completely absorb most infrared and ultraviolet wavelengths.',
      'Thermal Stability: In deep space (or at Lagrange points like Sun-Earth L2), temperatures remain ultra-stable, allowing sensitive infrared cryo-optics to operate without thermal drift.',
      'Wide-Field All-Sky Surveys: Satellites in Sun-synchronous low Earth orbit (like SPHEREx) or Lissajous L2 orbits continuously scan the entire sky over months.'
    ],
    whyItMatters: [
      'Space telescopes like Hubble, JWST, SPHEREx, and Gaia have revolutionized every field of astrophysics from the Big Bang to exoplanet atmospheres.',
      'Enables continuous, uninterrupted multi-epoch surveys of the changing time-domain universe.'
    ],
    terminology: [
      {
        term: 'Atmospheric Seeing',
        definition: 'The degradation of astronomical image sharpness caused by turbulent mixing in Earth’s atmosphere that perturbs the incoming optical wavefronts.'
      },
      {
        term: 'Lagrange Point 2 (L2)',
        definition: 'A gravitationally balanced equilibrium point roughly 1.5 million kilometers behind Earth on the Sun-Earth line, ideal for space observatories.'
      },
      {
        term: 'Adaptive Optics',
        definition: 'A ground-based telescope technology that uses deformable mirrors rapidly adjusted by computers to counteract atmospheric blurring in real time.'
      }
    ],
    facts: [
      'The Hubble Space Telescope has made over 1.5 million observations and orbited Earth over 175,000 times since its launch in 1990.',
      'NASA’s James Webb Space Telescope features a 5-layer tennis-court-sized sunshield that keeps its optics at a frosty -233°C (40 Kelvin) in the shadow of L2.'
    ],
    keyTakeaways: [
      'Space telescopes eliminate atmospheric blurring and atmospheric absorption.',
      'Essential for observing near-infrared, far-infrared, ultraviolet, X-rays, and gamma rays.',
      'Operate in Earth orbit or at Sun-Earth Lagrange points (L2).'
    ],
    vizType: 'coordinates-sphere',
    vizTitle: 'Space Telescope Orbits: Low-Earth vs. L2 Lagrange Point Simulator',
    vizDescription: 'Interactive demonstration comparing low-Earth polar Sun-synchronous orbits with Sun-Earth L2 Lagrange orbits.',
    skyverseBridge: {
      moduleId: 'overview',
      moduleName: 'Overview & 3D Telescope',
      actionLabel: 'Inspect 3D SPHEREx Telescope in Overview',
      description: 'Interact with the 3D rotating model of the SPHEREx satellite in the Overview module.'
    },
    quizQuestions: [
      {
        id: 'st_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the primary advantage of placing a telescope into space rather than building it on a mountain on Earth?',
        options: [
          'It completely avoids the blurring, turbulence, and absorption of Earth’s atmosphere',
          'It is much cheaper and easier to repair in space',
          'Space telescopes are closer to the stars by a significant fraction of a light-year',
          'Telescopes can only run on space solar power'
        ],
        correctAnswerIndex: 0,
        explanation: 'Space telescopes operate above the turbulent atmosphere, avoiding optical distortion and atmospheric absorption of infrared, UV, and X-ray light.',
        hint: 'Earth’s atmosphere blurs starlight and blocks many wavelengths.'
      },
      {
        id: 'st_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Who first proposed the revolutionary concept of placing astronomical telescopes into space in a famous 1946 paper?',
        options: ['Lyman Spitzer Jr.', 'Edwin Hubble', 'Carl Sagan', 'Stephen Hawking'],
        correctAnswerIndex: 0,
        explanation: 'Astrophysicist Lyman Spitzer Jr. wrote a landmark RAND Corporation paper in 1946 proposing an extraterrestrial astronomical observatory.',
        hint: 'NASA named its infrared space telescope after him in 2003.'
      },
      {
        id: 'st_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Ground-based telescopes on mountain summits can observe gamma rays and X-rays directly from the sky.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False! Earth’s atmosphere absorbs virtually all incoming cosmic X-rays and gamma rays, protecting life on the ground but requiring astronomers to use space observatories.',
        hint: 'Our atmosphere shields Earth from dangerous high-energy rays.'
      },
      {
        id: 'st_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Where is the James Webb Space Telescope (JWST) located in space?',
        options: [
          'In a low-Earth orbit right next to the International Space Station (~400 km)',
          'Orbiting around the Sun-Earth Lagrange Point 2 (L2), roughly 1.5 million kilometers from Earth',
          'On the surface of the Moon',
          'In orbit around Mars'
        ],
        correctAnswerIndex: 1,
        explanation: 'JWST operates in a halo orbit around the second Sun-Earth Lagrange point (L2), 1.5 million km behind Earth, where Earth and Sun remain in the same direction behind its sunshield.',
        hint: 'Sun-Earth L2 Lagrange point.'
      },
      {
        id: 'st_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What advanced ground-based technology uses deformable mirrors pulsed hundreds of times per second to partially counteract atmospheric turbulence?',
        options: ['Adaptive Optics (AO)', 'Infrared dispersion', 'Digital zoom', 'Optical parallax'],
        correctAnswerIndex: 0,
        explanation: 'Adaptive Optics uses laser guide stars and deformable mirrors adjusted up to 1,000 times per second to cancel out atmospheric wavefront phase distortions.',
        hint: 'Optics that adapt dynamically to changing atmospheric ripples.'
      }
    ]
  },
  {
    id: 'nasa-spherex',
    categoryId: 'space-missions',
    title: 'NASA SPHEREx Mission',
    subtitle: 'The all-sky near-infrared spectral surveyor: 102 channels across 4 epochs',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Telescope',
    summary: 'SPHEREx (Spectro-Photometer for the History of the Universe, Epoch of Reionization and Ices Explorer) is a NASA MIDEX mission mapping the entire sky in 102 near-infrared bands.',
    introduction: 'While famous space telescopes like Hubble and Webb zoom in with narrow drinking-straw fields of view on tiny patches of the sky, NASA’s SPHEREx mission is designed to do the exact opposite: survey the ENTIRE celestial sky across 102 distinct near-infrared wavelengths every six months.',
    simpleExplanation: 'Imagine Webb as a super-powerful microscope that inspects one single cell at a time. SPHEREx is like a full-body 3D MRI scanner for the entire universe! It maps every single constellation, galaxy, and star cluster in rich color slices from 0.75 to 5.0 micrometers.',
    howItWorks: [
      'Mission Design: A 20-centimeter aluminum telescope with wide field-of-view ($3.5^\\circ \\times 11.3^\\circ$) flying in a Sun-synchronous low Earth polar orbit.',
      'Linear Variable Filters (LVFs): Instead of mechanical filter wheels or diffraction gratings, SPHEREx mounts LVFs directly above its infrared detector arrays, providing 102 continuous spectral channels simultaneously as the spacecraft steps across the sky.',
      'Four Full-Sky Epochs: Completes a comprehensive all-sky survey every six months, accumulating four complete independent sky maps over its 2-year baseline mission.',
      'Three Core Science Goals: 1) Measure cosmic inflation via large-scale 3D galaxy clustering. 2) Trace the extragalactic background light during the Epoch of Reionization. 3) Map biogenic water and organic ices ($H_2O, CO_2, CO$) across protoplanetary disks in the Milky Way.'
    ],
    whyItMatters: [
      'The central scientific dataset powering SKYVERSE! SPHEREx delivers the first spectroscopic dataset spanning hundreds of millions of stars and galaxies.',
      'Enables citizen scientists and researchers to discover moving objects and variable infrared stars.'
    ],
    terminology: [
      {
        term: 'MIDEX',
        definition: 'NASA’s Medium-Class Explorers program for competitive, high-priority scientific space missions.'
      },
      {
        term: 'Linear Variable Filter (LVF)',
        definition: 'An interference filter whose passband wavelength varies linearly across its spatial dimension, enabling slitless spectral mapping.'
      },
      {
        term: 'Epoch of Reionization (EoR)',
        definition: 'The cosmic period ~400 million years after the Big Bang when ultraviolet starlight from the first stars re-ionized the neutral hydrogen fog filling the universe.'
      }
    ],
    facts: [
      'SPHEREx will capture near-infrared spectra for over 450 million galaxies and over 100 million stars across the entire sky.',
      'SPHEREx uses passive cooling with three concentric V-groove thermal radiators, allowing it to stay below 80 Kelvin without consumable liquid helium!'
    ],
    keyTakeaways: [
      'SPHEREx maps the entire sky every 6 months across 102 near-infrared channels (0.75–5.0 µm).',
      'Uses innovative Linear Variable Filters (LVFs) directly on detector arrays.',
      'Three main goals: Cosmic Inflation, Epoch of Reionization, and Interstellar Biogenic Ices.'
    ],
    vizType: 'coordinates-sphere',
    vizTitle: 'SPHEREx All-Sky Polar Survey Orbit & Scan Strategy Simulator',
    vizDescription: 'Interactive demonstration of SPHEREx’s 97-minute Sun-synchronous polar orbit and 6-month full-sky coverage precession.',
    skyverseBridge: {
      moduleId: 'overview',
      moduleName: 'Overview & Mission Status',
      actionLabel: 'View SPHEREx Mission Dashboard',
      description: 'Check real-time SPHEREx survey status, coverage percentage, and active sky observations.'
    },
    quizQuestions: [
      {
        id: 'sx_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What does the acronym SPHEREx stand for?',
        options: [
          'Spectro-Photometer for the History of the Universe, Epoch of Reionization and Ices Explorer',
          'Space Planetary High Energy Rocket Explorer',
          'Solar Powered Hydrogen Emission Radiation Experiment',
          'Super Planet Hunter for Exoplanets'
        ],
        correctAnswerIndex: 0,
        explanation: 'SPHEREx stands for "Spectro-Photometer for the History of the Universe, Epoch of Reionization and Ices Explorer".',
        hint: 'It describes spectroscopy, the universe’s history, reionization, and ices.'
      },
      {
        id: 'sx_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'How many times will SPHEREx map the ENTIRE celestial sphere during its planned 2-year primary mission?',
        options: ['1 time', '2 times', '4 complete independent epochs', '1,000 times'],
        correctAnswerIndex: 2,
        explanation: 'SPHEREx completes an all-sky survey every 6 months, yielding 4 complete, independent full-sky spectral epochs over its 2-year nominal mission.',
        hint: 'Four epochs—one every 6 months for 2 years.'
      },
      {
        id: 'sx_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: SPHEREx only observes tiny isolated patches of the sky, just like the James Webb Space Telescope.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False! Unlike JWST’s deep narrow view, SPHEREx is an all-sky survey designed to map 100% of the entire celestial sphere in every direction.',
        hint: 'SPHEREx maps the whole sky.'
      },
      {
        id: 'sx_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Instead of using heavy, motorized filter wheels or moving slit spectrographs, what optical component does SPHEREx mount directly over its infrared detectors?',
        options: ['Linear Variable Filters (LVFs)', 'Sunglasses', 'Glass prisms on rotating motors', 'Magnifying glasses'],
        correctAnswerIndex: 0,
        explanation: 'Linear Variable Filters (LVFs) have wedge coatings whose transmitted wavelength changes continuously across the detector, enabling robust, motionless spectral mapping.',
        hint: 'Filters whose wavelength varies linearly across the surface.'
      },
      {
        id: 'sx_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'Which of the following is NOT one of the three primary science drivers of the NASA SPHEREx mission?',
        options: [
          'Probing the physics of cosmic inflation in the infant universe',
          'Mapping the origin and distribution of water ice and biogenic molecules in the Milky Way',
          'Searching for fossil dinosaur bones on Mars',
          'Measuring the total light produced by the first stars during the Epoch of Reionization'
        ],
        correctAnswerIndex: 2,
        explanation: 'SPHEREx is a cosmic space observatory and does not conduct planetary geology on Mars. Its three core pillars are Cosmic Inflation, Epoch of Reionization, and Interstellar Ices.',
        hint: 'One of these is planetary geology on Mars.'
      }
    ]
  },
  {
    id: '102-spectral-channels',
    categoryId: 'space-missions',
    title: '102 Spectral Channels & Infrared Bands',
    subtitle: 'Continuous near-infrared spectroscopy from 0.75 to 5.00 micrometers',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'SPHEREx divides the near-infrared spectrum into 102 discrete channels, delivering a full spectrum for every pixel and capturing crucial ice and gas absorption bands.',
    introduction: 'In ordinary color photography, your smartphone camera records the world in just 3 broad color channels: Red, Green, and Blue. SPHEREx does not just use 3 channels: it captures 102 distinct spectral channels across near-infrared light, turning every point on the sky into an information-rich chemical spectrum.',
    simpleExplanation: 'Imagine listening to music through an old AM radio that only plays 3 muffled notes. Now imagine upgrading to a high-fidelity 102-band audio equalizer! With 102 channels, you can hear every individual instrument and note clearly. In astronomy, those 102 channels reveal the exact molecular makeup of stars, ices, and galaxies.',
    howItWorks: [
      'Wavelength Range: Spans from $0.75\\,\\mu m$ (just beyond the red limit of human vision) to $5.00\\,\\mu m$ (mid-infrared boundary).',
      'Spectral Resolution: Channels 1–48 (0.75 to 2.42 µm) have resolution $R \\approx 41$; Channels 49–102 (2.42 to 5.00 µm) have higher resolution $R \\approx 135$.',
      'The Water Ice Band (3.05 µm): Water ice ($H_2O$) exhibits a prominent, deep absorption dip centered at $3.05\\,\\mu m$ caused by O-H bond stretching.',
      'The Carbon Dioxide Band (4.27 µm): Frozen $CO_2$ ice displays a sharp, distinct absorption feature centered at $4.27\\,\\mu m$.',
      'Carbon Monoxide Band (4.67 µm): $CO$ ice is detected at $4.67\\,\\mu m$.'
    ],
    whyItMatters: [
      'Enables astronomers to calculate how much water and carbon is locked up in interstellar grains before being incorporated into newly forming planets.',
      'Core feature of SKYVERSE’s Spectral Intelligence and Quest Level 11 modules.'
    ],
    terminology: [
      {
        term: 'Channel (Spectroscopic)',
        definition: 'A discrete, narrow wavelength bandpass recorded by a detector, characterized by its central wavelength and bandpass width $\\Delta\\lambda$.'
      },
      {
        term: 'O-H Stretch Vibration',
        definition: 'The fundamental molecular bond vibration in water ($H_2O$) that absorbs near-infrared photons around 3.05 micrometers.'
      },
      {
        term: 'Spectrophotometry',
        definition: 'The quantitative measurement of reflection or transmission properties of a material as a function of wavelength.'
      }
    ],
    facts: [
      'Human vision sees from ~0.38 to 0.75 µm. SPHEREx begins exactly where human vision ends (0.75 µm) and extends over six times deeper into the infrared (5.0 µm)!',
      'SPHEREx’s 102 channels will produce the first complete all-sky inventory of interstellar water ice in the history of science.'
    ],
    keyTakeaways: [
      'SPHEREx captures 102 near-infrared channels from 0.75 to 5.00 µm.',
      'Higher resolution ($R \\approx 135$) in the 2.4–5.0 µm region targets biogenic ices.',
      'Water ice absorbs at 3.05 µm; Carbon Dioxide ice absorbs at 4.27 µm.'
    ],
    vizType: 'spectrum-wavelength',
    vizTitle: '102-Band SPHEREx Channel Extractor & Ice Absorption Analyzer',
    vizDescription: 'Interactive spectrum graph highlighting all 102 channels, showing where $H_2O$ ice (3.05 µm) and $CO_2$ ice (4.27 µm) produce absorption dips.',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Inspect 102 Channels in Spectral Lab',
      description: 'Interact with the 102-band channel slider and inspect real molecular absorption profiles.'
    },
    quizQuestions: [
      {
        id: 'ch_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the exact near-infrared wavelength range covered by SPHEREx’s 102 spectral channels?',
        options: ['0.75 to 5.00 micrometers (µm)', '0.01 to 0.10 nanometers', '10 to 100 meters', '400 to 700 nanometers (visible light only)'],
        correctAnswerIndex: 0,
        explanation: 'SPHEREx observes across 102 channels spanning 0.75 to 5.00 micrometers ($\mu$m), covering the near-infrared spectrum.',
        hint: 'From 0.75 to 5.00 micrometers.'
      },
      {
        id: 'ch_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'At which near-infrared wavelength does interstellar water ice (H2O) create a famous, prominent absorption feature in SPHEREx spectra?',
        options: ['0.80 µm', '1.20 µm', '3.05 µm', '4.95 µm'],
        correctAnswerIndex: 2,
        explanation: 'The O-H stretch fundamental vibrational absorption band of water ice produces a characteristic broad absorption dip centered at approximately 3.05 micrometers.',
        hint: 'Around 3.05 micrometers.'
      },
      {
        id: 'ch_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: SPHEREx captures all 102 channels for every single pixel observed across the sky.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. SPHEREx is a full-sky imaging spectrometer; every point on the celestial sphere gets measured across all 102 near-infrared channels.',
        hint: 'Every pixel gets a complete 102-channel spectrum.'
      },
      {
        id: 'ch_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'An astronomer analyzes a SPHEREx spectrum and detects a sharp absorption dip at 4.27 µm. Which biogenic ice molecule produces this distinct signature?',
        options: ['Pure Helium', 'Carbon Dioxide ice (CO2)', 'Liquid Gold', 'Metallic Hydrogen'],
        correctAnswerIndex: 1,
        explanation: 'Carbon dioxide ($CO_2$) ice exhibits an intense, narrow asymmetric C=O stretch absorption dip centered at 4.27 micrometers.',
        hint: 'Carbon dioxide ice.'
      },
      {
        id: 'ch_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'In Cosmic Brightness Quest Level 11, what is the player tasked with doing using SPHEREx’s spectral bands?',
        options: [
          'Analyzing spectral channels to identify molecular absorption dips for water ice and CO2',
          'Flying a virtual drone through an asteroid belt',
          'Naming constellations after Greek gods',
          'Translating radio signals from Mars'
        ],
        correctAnswerIndex: 0,
        explanation: 'Level 11 of Cosmic Brightness Quest tests the player’s ability to analyze 102-band near-infrared spectra and pinpoint biogenic ice absorption features.',
        hint: 'Identifying molecular absorption dips in Level 11.'
      }
    ]
  },
  {
    id: 'astronomical-coordinates',
    categoryId: 'space-missions',
    title: 'Astronomical Coordinates & WCS',
    subtitle: 'Navigating the celestial sphere with equatorial coordinate systems',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Compass',
    summary: 'Astronomical coordinate systems project Earth’s latitude and longitude onto the celestial sphere, providing unique addresses for every star, galaxy, and observation.',
    introduction: 'If you want to meet a friend on Earth, you can give them a latitude and longitude GPS coordinate. But how do astronomers tell a space telescope where to point in the infinite 3D cosmos? By projecting Earth’s coordinate grid onto the celestial sphere.',
    simpleExplanation: 'Imagine Earth sitting at the center of an enormous hollow glass sphere with the stars painted on the inside. If you project Earth’s equator and poles straight out into space, you get the Celestial Equator and Celestial Poles! Any spot on this cosmic sphere has an exact celestial address.',
    howItWorks: [
      'Equatorial Coordinate System: The primary celestial coordinate system used by astronomers, fixed with respect to the distant stars.',
      'Right Ascension (RA): The celestial equivalent of longitude, measured in hours, minutes, and seconds ($0^h$ to $24^h$) or decimal degrees ($0^\\circ$ to $360^\\circ$).',
      'Declination (Dec): The celestial equivalent of latitude, measured in degrees, arcminutes, and arcseconds from $-90^\\circ$ (South Celestial Pole) through $0^\\circ$ (Celestial Equator) to $+90^\\circ$ (North Celestial Pole).',
      'World Coordinate System (WCS): Standardized FITS header keywords (e.g., CRVAL, CRPIX, CDELT, CTYPE) that mathematically map raw image pixel coordinates (X, Y) to real sky coordinates (RA, Dec).'
    ],
    whyItMatters: [
      'Allows telescopes around the world and in space to point at the exact same target with sub-arcsecond precision.',
      'Enables automated cross-matching between SPHEREx infrared catalogs, Gaia astrometry, and CADC archives in SKYVERSE.'
    ],
    terminology: [
      {
        term: 'Right Ascension (RA, α)',
        definition: 'The angular distance of a particular point measured eastward along the celestial equator from the vernal equinox.'
      },
      {
        term: 'Declination (Dec, δ)',
        definition: 'The angular distance of a point north or south of the celestial equator, positive northward and negative southward.'
      },
      {
        term: 'World Coordinate System (WCS)',
        definition: 'The astronomical convention for encoding spatial and spectral world coordinates directly inside FITS file headers.'
      }
    ],
    facts: [
      'Because Earth’s rotational axis slowly wobbles like a spinning top every 26,000 years (axial precession), celestial coordinates must always specify an epoch—modern astronomers use the standardized epoch J2000.0.',
      'One hour of Right Ascension equals exactly 15 degrees of sky rotation ($360^\\circ / 24^h = 15^\\circ/h$).'
    ],
    keyTakeaways: [
      'Right Ascension (RA) is celestial longitude (0–24 hours or 0–360°).',
      'Declination (Dec) is celestial latitude (-90° to +90°).',
      'WCS maps image pixel positions to physical celestial coordinates.'
    ],
    vizType: 'coordinates-sphere',
    vizTitle: '3D Celestial Sphere & Equatorial Coordinate Grid Simulator',
    vizDescription: 'Interactive 3D celestial sphere showing celestial equator, vernal equinox origin, RA hours, and Dec degree circles.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'Input Coordinates in Sky Explorer',
      description: 'Search any RA/Dec coordinate pair or jump to target benchmarks in the Sky Explorer.'
    },
    quizQuestions: [
      {
        id: 'ac_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Which coordinate on the celestial sphere is the astronomical equivalent of Earth’s latitude?',
        options: ['Declination (Dec)', 'Right Ascension (RA)', 'Azimuth', 'Parallax'],
        correctAnswerIndex: 0,
        explanation: 'Declination (Dec) measures angular distance north (+) or south (-) of the celestial equator, exactly like latitude on Earth.',
        hint: 'It ranges from -90° at the south celestial pole to +90° at the north celestial pole.'
      },
      {
        id: 'ac_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'How many degrees of celestial rotation correspond to exactly one hour (1h) of Right Ascension?',
        options: ['1 degree', '15 degrees', '60 degrees', '360 degrees'],
        correctAnswerIndex: 1,
        explanation: 'Because a full 360-degree circle takes 24 hours of Earth rotation, $360^\\circ / 24\\,\\text{hours} = 15^\\circ$ per hour of Right Ascension.',
        hint: 'Divide 360 degrees by 24 hours.'
      },
      {
        id: 'ac_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: The North Celestial Pole has a Declination of exactly +90°.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Declination is 0° at the celestial equator, +90° at the North Celestial Pole (near Polaris), and -90° at the South Celestial Pole.',
        hint: 'The celestial poles are at +90° and -90°.'
      },
      {
        id: 'ac_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'What standardized astronomical header metadata inside FITS files maps raw detector pixel coordinates (X, Y) to real sky coordinates (RA, Dec)?',
        options: ['World Coordinate System (WCS)', 'GPS metadata', 'JPEG EXIF tags', 'HTML stylesheet'],
        correctAnswerIndex: 0,
        explanation: 'The World Coordinate System (WCS) is the rigorous international standard in FITS headers that provides the mathematical projection from pixel space to celestial coordinates.',
        hint: 'World Coordinate System.'
      },
      {
        id: 'ac_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'Why do astronomers need to specify an epoch (such as J2000.0) when citing high-precision celestial coordinates?',
        options: [
          'Because Earth’s rotational axis slowly precesses in space over a 26,000-year cycle, shifting the coordinate grid over time',
          'Because stars stop moving on leap years',
          'Because telescopes break every 10 years',
          'Because the speed of light changes with the seasons'
        ],
        correctAnswerIndex: 0,
        explanation: 'Due to gravitational tugs from the Moon and Sun, Earth’s rotational axis precesses like a spinning top every 25,772 years, causing the vernal equinox and coordinate grid to slowly drift.',
        hint: 'Axial precession slowly wobbles Earth’s rotational axis.'
      }
    ]
  },
  {
    id: 'right-ascension-declination',
    categoryId: 'space-missions',
    title: 'Right Ascension & Declination',
    subtitle: 'The precise celestial addressing system used by modern space observatories',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Compass',
    summary: 'Right Ascension (hours, minutes, seconds) and Declination (degrees, arcminutes, arcseconds) form the universal coordinate pair pinpointing every object in the sky.',
    introduction: 'In the SKYVERSE top header, you see coordinate boxes displaying RA and Dec. Every star, asteroid, and galaxy in our database has a unique address written in this celestial notation. Learning to read and convert RA and Dec is the first step toward professional astronomical navigation.',
    simpleExplanation: 'Think of Right Ascension and Declination like the street and house number for stars! Right Ascension (RA) tells you which cosmic street you are on (east-west), while Declination (Dec) tells you how far up or down the street you need to walk (north-south).',
    howItWorks: [
      'Right Ascension (RA): Zero-point is defined by the Vernal Equinox (the point where the Sun crosses the celestial equator in March). Measured eastward in hours, minutes, seconds ($00^h 00^m 00^s$) or decimal degrees ($0^\\circ$ to $360^\\circ$). Conversion: $\\text{RA}_{deg} = 15 \\times (h + m/60 + s/3600)$.',
      'Declination (Dec): Measured from the celestial equator ($0^\\circ$) northwards ($+0^\\circ$ to $+90^\\circ$) and southwards ($-0^\\circ$ to $-90^\\circ$) in degrees, arcminutes (\'), and arcseconds (").',
      'Sexagesimal vs. Decimal: Astronomers freely convert between sexagesimal notation (e.g., $08^h 55^m 10.83^s, -07^\\circ 14\' 42.5"$) and decimal degrees (e.g., $133.795129^\\circ, -7.245147^\\circ$).',
      'Proper Motion Shift: Over decades, nearby stars drift slightly across the grid due to their real physical motion through the galaxy.'
    ],
    whyItMatters: [
      'Essential for querying professional astronomy archives including NASA IRSA, Gaia DR3, CADC, and the SKYVERSE backend API.',
      'Enables high-precision time-domain tracking of moving Near-Earth Asteroids and high-proper-motion stars.'
    ],
    terminology: [
      {
        term: 'Sexagesimal Notation',
        definition: 'A base-60 numbering system used to express angles and time (hours/degrees, minutes, seconds).'
      },
      {
        term: 'Vernal Equinox (First Point of Aries)',
        definition: 'The astronomical zero-point of Right Ascension, where the ecliptic crosses the celestial equator from south to north.'
      },
      {
        term: 'Arcsecond (")',
        definition: 'An angular unit of measurement equal to 1/3600th of a degree (or 1/60th of an arcminute).'
      }
    ],
    facts: [
      'One arcsecond is roughly the apparent size of a U.S. quarter coin viewed from a distance of 5 kilometers (3 miles) away!',
      'Barnard’s Star has the fastest proper motion of any known star, racing across our celestial coordinate grid by 10.3 arcseconds every single year.'
    ],
    keyTakeaways: [
      'RA is measured in hours/minutes/seconds or decimal degrees ($0–360^\\circ$).',
      'Dec is measured in degrees/arcminutes/arcseconds ($-90^\\circ$ to $+90^\\circ$).',
      'SKYVERSE seamlessly accepts both sexagesimal and decimal coordinate formats.'
    ],
    vizType: 'coordinates-sphere',
    vizTitle: 'Sexagesimal to Decimal Coordinate Converter & Sky Target Locator',
    vizDescription: 'Interactive calculator converting RA (hms) and Dec (dms) into decimal degrees with live visual pointer on the celestial sphere.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'Search Coordinates in Sky Explorer',
      description: 'Enter RA/Dec coordinates into the global search bar to fetch real SPHEREx FITS observations.'
    },
    quizQuestions: [
      {
        id: 'rad_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the zero-point origin of the Right Ascension (RA = 0h) coordinate system?',
        options: [
          'The Vernal Equinox (where the Sun crosses the celestial equator in March)',
          'The center of the Earth',
          'The North Star (Polaris)',
          'The Greenwich observatory clock'
        ],
        correctAnswerIndex: 0,
        explanation: 'Right Ascension zero ($0^h 00^m 00^s$) is defined as the vernal equinox, the exact celestial position of the Sun at the start of northern hemisphere spring.',
        hint: 'The vernal equinox point in spring.'
      },
      {
        id: 'rad_q2',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Convert 02h 00m 00s of Right Ascension into decimal degrees.',
        options: ['2.0 degrees', '15.0 degrees', '30.0 degrees', '60.0 degrees'],
        correctAnswerIndex: 2,
        explanation: 'Since each hour of RA equals $15^\\circ$, multiplying $2\\,\\text{hours} \\times 15^\\circ/\\text{hour} = 30.0^\\circ$.',
        hint: 'Multiply the hours by 15.'
      },
      {
        id: 'rad_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: A star located at Declination -45° is in the Southern Celestial Hemisphere.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Positive declinations represent the Northern Celestial Hemisphere, while negative declinations represent the Southern Celestial Hemisphere.',
        hint: 'Negative declination means south of the celestial equator.'
      },
      {
        id: 'rad_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Which challenge target star featured in SKYVERSE has the highest known proper motion in the entire night sky (10.3 arcseconds/year)?',
        options: ['Barnard’s Star', 'Polaris', 'Rigel', 'Betelgeuse'],
        correctAnswerIndex: 0,
        explanation: 'Barnard’s Star, a red dwarf located 5.96 light-years away in Ophiuchus, has the largest known proper motion of any star at 10.3 arcseconds per year.',
        hint: 'Named after astronomer E. E. Barnard.'
      },
      {
        id: 'rad_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'How many arcseconds are there in one degree of angular measurement on the sky?',
        options: ['60 arcseconds', '360 arcseconds', '3,600 arcseconds', '60,000 arcseconds'],
        correctAnswerIndex: 2,
        explanation: 'There are 60 arcminutes in one degree, and 60 arcseconds in one arcminute ($60 \\times 60 = 3,600$ arcseconds per degree).',
        hint: 'Just like seconds in an hour: $60 \\times 60$.'
      }
    ]
  },
  {
    id: 'fits-files',
    categoryId: 'space-missions',
    title: 'FITS Files & Astronomical Data',
    subtitle: 'Flexible Image Transport System: the scientific gold standard format',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'FITS (Flexible Image Transport System) is the international standard file format for astronomical data, preserving raw scientific pixel counts and rich calibration metadata.',
    introduction: 'When a space telescope like SPHEREx or Hubble snaps an image, it does not save it as a compressed JPEG or PNG. Instead, professional observatories worldwide use FITS files. Defined in 1981, FITS is the enduring, lossless scientific format that powers modern astronomical archives.',
    simpleExplanation: 'A standard JPEG photo compresses colors and throws away scientific data to make the file small. A FITS file does the exact opposite: it preserves the exact number of photons detected by every single sensor pixel, alongside a rich digital header describing telescope temperature, exposure time, coordinates, and filters.',
    howItWorks: [
      'Structure: Composed of one or more Header and Data Units (HDUs). Each HDU consists of an ASCII text header followed by binary data arrays.',
      'Header Metadata: Plain-text cards containing 80-character keyword-value pairs (e.g., TELESCOP = \'SPHEREx\', EXPTIME = 120.0, CRVAL1 = 133.795).',
      'Lossless Scientific Pixels: Pixel arrays store raw 16-bit, 32-bit, or 64-bit integer or floating-point values representing true physical photon flux or calibrated intensity ($MJy/sr$).',
      'Multi-Extension FITS (MEF): Can bundle multiple image layers, error uncertainty maps, mask flags, and tabular spectra inside a single cohesive file.'
    ],
    whyItMatters: [
      'Guarantees backward compatibility: a FITS file written in 1982 can still be opened and calibrated by modern Python Astropy software today.',
      'Powers the backend data pipeline of SKYVERSE, serving raw and cut-out FITS observations to the browser.'
    ],
    terminology: [
      {
        term: 'FITS (Flexible Image Transport System)',
        definition: 'The standard astronomical data format endorsed by the IAU for storage and transmission of images, spectra, and tables.'
      },
      {
        term: 'Header and Data Unit (HDU)',
        definition: 'A fundamental block in a FITS file consisting of an ASCII header followed by an optional binary data array or table.'
      },
      {
        term: 'Astropy',
        definition: 'A core Python library developed by professional astronomers for handling FITS files, coordinate transformations, and astronomical calculations.'
      }
    ],
    facts: [
      'The rule of the FITS standard is: "Once FITS, always FITS"—meaning modern software is strictly required to read FITS files created decades ago without modification!',
      'FITS headers can be opened and read with any simple text editor because they are formatted in standardized 80-column ASCII cards.'
    ],
    keyTakeaways: [
      'FITS is the lossless scientific standard format for astronomical images and tables.',
      'Stores exact physical photon counts, not compressed display colors.',
      'Contains ASCII headers with telescope coordinates, exposure time, and WCS calibration.'
    ],
    vizType: 'coordinates-sphere',
    vizTitle: 'FITS Header Inspector & Pixel Array Interactive Viewer',
    vizDescription: 'Interactive demonstration showing raw FITS ASCII header cards paired with 2D calibrated pixel intensity maps.',
    skyverseBridge: {
      moduleId: 'explorer',
      moduleName: 'Sky Explorer',
      actionLabel: 'Inspect FITS Layers in Sky Explorer',
      description: 'Load real SPHEREx FITS observations, toggle color maps, and inspect raw pixel values.'
    },
    quizQuestions: [
      {
        id: 'ff_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What does the acronym FITS stand for in astronomical data science?',
        options: [
          'Flexible Image Transport System',
          'Fast Infrared Telescope Satellite',
          'Field Inspection Tracking Standard',
          'Focused Image Telemetry Signal'
        ],
        correctAnswerIndex: 0,
        explanation: 'FITS stands for Flexible Image Transport System, the standard data format created by astronomers in 1981.',
        hint: 'Flexible Image Transport System.'
      },
      {
        id: 'ff_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Why do astronomers avoid using standard image formats like JPEG or PNG for scientific research?',
        options: [
          'JPEGs apply lossy compression that alters real photon counts and cannot store 64-bit precision or astronomical coordinate headers',
          'JPEGs are illegal to send over the internet',
          'PNG files only work on Android phones',
          'Space telescopes cannot run computer code'
        ],
        correctAnswerIndex: 0,
        explanation: 'Consumer image formats like JPEG discard crucial scientific photon values to reduce file size and lack standardized headers for coordinates (WCS), calibration, and uncertainty maps.',
        hint: 'JPEGs compress away exact scientific numbers.'
      },
      {
        id: 'ff_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: FITS file headers are written in human-readable ASCII text that can be opened in simple text viewers.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. FITS headers are composed of 80-character ASCII text cards with keyword = value pairs that can be read with standard text tools.',
        hint: 'They are formatted as simple 80-character text cards.'
      },
      {
        id: 'ff_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'What open-source Python library is used by NASA, academic observatories, and SKYVERSE to read, manipulate, and analyze FITS files?',
        options: ['Astropy', 'Photoshop', 'Microsoft Excel', 'PyGame'],
        correctAnswerIndex: 0,
        explanation: 'Astropy is the community-standard Python package containing extensive modules (`astropy.io.fits`, `astropy.wcs`, `astropy.coordinates`) for astronomical computing.',
        hint: 'Astropy.'
      },
      {
        id: 'ff_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What is a FITS file containing multiple headers and data arrays (e.g., science image, error map, and data quality mask) called?',
        options: [
          'A Multi-Extension FITS (MEF) file',
          'A Zip archive',
          'A BitTorrent packet',
          'An MP3 file'
        ],
        correctAnswerIndex: 0,
        explanation: 'A Multi-Extension FITS (MEF) file contains a primary HDU followed by one or more extension HDUs bundling image arrays, covariance matrices, and tables together.',
        hint: 'Multi-Extension FITS.'
      }
    ]
  },
  {
    id: 'multi-epoch-observations',
    categoryId: 'space-missions',
    title: 'Multi-Epoch Observations & Time-Domain Astronomy',
    subtitle: 'Scanning the dynamic universe over time to discover moving and variable objects',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Clock',
    summary: 'Multi-epoch observations survey the same sky coordinates at multiple points in time, enabling the discovery of proper motion, optical transients, and stellar variability.',
    introduction: 'If you only take a single snapshot of a crowded city street, you cannot tell which cars are moving, which traffic lights are blinking, or which pedestrians are walking. To understand motion and change, you must take multiple snapshots over time. That is the essence of multi-epoch astronomy.',
    simpleExplanation: 'Imagine playing a "spot the difference" game with two photos of the night sky taken six months apart. Most distant stars stay in the exact same place. But an asteroid will have moved to a new spot, a variable star will have grown brighter or dimmer, and an exploding supernova will have suddenly appeared out of nowhere!',
    howItWorks: [
      'Baseline Cadence: Revisiting the same field on timescales of hours, days, months, or years ($Epoch_1, Epoch_2, Epoch_3, Epoch_4$).',
      'Blink Comparator: Rapidly toggling between images taken at different epochs to catch human eye attention on moving or flashing sources (the technique Clyde Tombaugh used to discover Pluto in 1930).',
      'Image Subtraction (Difference Imaging): Subtracting an aligned template image from a new science image ($I_{diff} = I_{new} - I_{ref}$) after matching point spread functions. Static stars cancel to zero, leaving only transient or variable sources.',
      'Astrometric Proper Motion: Measuring positional shift ($\Delta\\alpha, \Delta\\delta$) over time yields an object’s angular velocity across the plane of the sky.'
    ],
    whyItMatters: [
      'Essential for planetary defense to track near-Earth asteroids that could collide with our planet.',
      'Core functionality of SKYVERSE’s Cosmic Time Machine module, allowing users to blink SPHEREx epochs and generate difference images.'
    ],
    terminology: [
      {
        term: 'Cadence',
        definition: 'The frequency and scheduling pattern with which an astronomical survey revisits and re-observes the same field of view.'
      },
      {
        term: 'Image Subtraction',
        definition: 'The mathematical process of subtracting an aligned reference image from a new science image to isolate changes in brightness or position.'
      },
      {
        term: 'Proper Motion (μ)',
        definition: 'The apparent angular rate of motion of a star across the celestial sphere relative to distant background objects, measured in milliarcseconds per year (mas/yr).'
      }
    ],
    facts: [
      'Clyde Tombaugh spent months manually blinking pairs of photographic glass plates using a mechanical blink comparator before discovering Pluto in February 1930.',
      'SKYVERSE’s Cosmic Time Machine automates digital blinking and difference imaging directly in the browser across SPHEREx observation epochs.'
    ],
    keyTakeaways: [
      'Multi-epoch astronomy observes the same coordinates repeatedly over time.',
      'Blinking reveals motion; image subtraction isolates brightness variations.',
      'Crucial for detecting variable stars, supernovae, and near-Earth asteroids.'
    ],
    vizType: 'light-curve',
    vizTitle: 'Blink Comparator & Multi-Epoch Difference Imaging Simulator',
    vizDescription: 'Interactive demonstration toggling between Epoch 1 and Epoch 2 images, showing animated blinking and clean subtracted difference images.',
    skyverseBridge: {
      moduleId: 'time-machine',
      moduleName: 'Cosmic Time Machine',
      actionLabel: 'Launch Cosmic Time Machine',
      description: 'Blink multiple SPHEREx epochs and calculate difference images to discover moving infrared sources.'
    },
    quizQuestions: [
      {
        id: 'meo_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What historical discovery technique involves rapidly switching back and forth between two sky images of the same field taken at different times?',
        options: ['Blink Comparator', 'Radio tuning', 'Laser scanning', 'Polarimetry'],
        correctAnswerIndex: 0,
        explanation: 'The blink comparator rapidly alternates between two photographic plates; static stars remain stationary while moving or variable objects appear to jump or flash.',
        hint: 'It blinks back and forth between images.'
      },
      {
        id: 'meo_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Which famous dwarf planet was discovered in 1930 by Clyde Tombaugh using a mechanical blink comparator?',
        options: ['Pluto', 'Ceres', 'Eris', 'Sedna'],
        correctAnswerIndex: 0,
        explanation: 'Clyde Tombaugh discovered Pluto at Lowell Observatory in 1930 by painstakingly comparing photographic plates taken days apart with a blink comparator.',
        hint: 'Discovered in 1930 by Clyde Tombaugh.'
      },
      {
        id: 'meo_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: In difference imaging, static background stars subtract to zero, leaving only objects that changed in brightness or moved.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. When you subtract an aligned reference image from a new image, constant stars cancel out completely, cleanly isolating variable or moving sources.',
        hint: 'Constant values cancel out when subtracted.'
      },
      {
        id: 'meo_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'You compare two SPHEREx observations taken 6 months apart. You notice a point of light has moved by 0.2 arcseconds between the epochs. What kind of object is this most likely?',
        options: [
          'A high proper-motion nearby star or brown dwarf',
          'A distant galaxy 10 billion light-years away',
          'A supermassive black hole at the center of the universe',
          'A dead pixel on the sensor'
        ],
        correctAnswerIndex: 0,
        explanation: 'Distant galaxies have zero detectable motion on human timescales. An object exhibiting measurable angular displacement over months must be relatively close to our Solar System (a nearby star, brown dwarf, or asteroid).',
        hint: 'Only nearby celestial objects exhibit noticeable motion over a few months.'
      },
      {
        id: 'meo_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'In Cosmic Brightness Quest Level 12 (The Cosmic Investigator), what capstone investigation skill must the player execute?',
        options: [
          'Inspect multi-epoch images, identify photometric variability, and submit a candidate verification report',
          'Construct an actual space telescope from hardware',
          'Calculate the mass of the Moon by hand',
          'Write a computer operating system'
        ],
        correctAnswerIndex: 0,
        explanation: 'Level 12 challenges the player to synthesize everything learned by investigating multi-epoch observations, blinking data, and submitting a formal variability report.',
        hint: 'Inspecting multi-epoch data and verifying a candidate.'
      }
    ]
  },
  {
    id: 'gaia-mission',
    categoryId: 'space-missions',
    title: 'ESA Gaia Mission',
    subtitle: 'Mapping the 3D positions, distances, and proper motions of nearly two billion stars',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Telescope',
    summary: 'ESA’s Gaia mission is creating the most precise 3D space catalog ever made, measuring stellar positions, trigonometric parallaxes, and proper motions for ~1.8 billion stars.',
    introduction: 'For centuries, astronomers struggled to know how far away stars truly were. Launched in 2013 by the European Space Agency, the Gaia space observatory revolutionized astrometry by measuring stellar distances through pure geometry (parallax) with accuracy equivalent to measuring the diameter of a human hair in Paris from London.',
    simpleExplanation: 'Hold your thumb out in front of your face and close your left eye, then switch and close your right eye. Notice how your thumb seems to jump back and forth against the distant wall? That is parallax! As Earth orbits the Sun, nearby stars shift slightly against distant galaxies, allowing Gaia to calculate their exact distances.',
    howItWorks: [
      'Trigonometric Parallax: Measures the apparent annual wobble of a nearby star caused by Earth’s orbit around the Sun: $d = 1 / p$, where $d$ is distance in parsecs and $p$ is parallax angle in arcseconds.',
      'Astrometric Precision: Measures positions with sub-milliarcsecond to microarcsecond precision.',
      'Proper Motion Vector: Measures the true 2D velocity of stars across the sky ($\mu_\\alpha^*, \mu_\\delta$) in milliarcseconds per year.',
      'Galactic Archaeology: Traces ancient stellar streams to reveal that the Milky Way merged with other galaxies (like the Gaia-Enceladus Sausage merger) billions of years ago.'
    ],
    whyItMatters: [
      'Provides the gold-standard reference catalog that anchors all modern astronomical coordinates, including SKYVERSE’s Object Investigation module.',
      'Calibrates the cosmic distance ladder that anchors all cosmological measurements.'
    ],
    terminology: [
      {
        term: 'Trigonometric Parallax (p)',
        definition: 'The apparent angular displacement of a nearby star against distant background objects as viewed from opposite sides of Earth’s orbit.'
      },
      {
        term: 'Gaia DR3 (Data Release 3)',
        definition: 'The third major public data release from the Gaia mission (June 2022), providing astrometry, photometry, and radial velocities for ~1.8 billion stars.'
      },
      {
        term: 'Proper Motion (µ)',
        definition: 'The apparent angular rate of change in the position of a celestial body on the sky, usually expressed in milliarcseconds per year (mas/yr).'
      }
    ],
    facts: [
      'Gaia’s focal plane is the largest digital camera ever flown in space, packing 106 CCD sensors into an enormous 1-gigapixel array.',
      'Gaia measurements proved that the Milky Way’s spiral disk is warped and rippling like a wave, perturbed by a past gravitational collision with a dwarf galaxy.'
    ],
    keyTakeaways: [
      'Gaia measures 3D positions, distances (parallax), and motions for ~1.8 billion stars.',
      'Distance formula: $d\\,\\text{(parsecs)} = 1 / p\\,\\text{(arcseconds)}$.',
      'Gaia DR3 reference data is built directly into SKYVERSE Object Investigation.'
    ],
    vizType: 'coordinates-sphere',
    vizTitle: 'Gaia Parallax Angle & Stellar Proper Motion Vector Simulator',
    vizDescription: 'Interactive demonstration of Earth’s orbit causing annual parallax wobble and linear proper motion displacement.',
    skyverseBridge: {
      moduleId: 'investigation',
      moduleName: 'Object Investigation',
      actionLabel: 'Cross-Match Gaia DR3 in Investigation Lab',
      description: 'Cross-match target candidates against official Gaia DR3 astrometric source IDs and parallax distances.'
    },
    quizQuestions: [
      {
        id: 'gm_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Which space agency launched and operates the Gaia space telescope?',
        options: ['European Space Agency (ESA)', 'NASA only', 'JAXA', 'Canadian Space Agency only'],
        correctAnswerIndex: 0,
        explanation: 'Gaia is a flagship mission of the European Space Agency (ESA), launched in December 2013 to map the Milky Way in 3D.',
        hint: 'The European Space Agency.'
      },
      {
        id: 'gm_q2',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'A nearby star has a measured Gaia trigonometric parallax angle of p = 0.1 arcseconds. What is the star’s distance in parsecs?',
        options: ['1 parsec', '10 parsecs (~32.6 light-years)', '100 parsecs', '0.1 light-years'],
        correctAnswerIndex: 1,
        explanation: 'Using the fundamental parallax distance formula $d = 1 / p$: $d = 1 / 0.1 = 10$ parsecs (approx. 32.6 light-years).',
        hint: 'Calculate $1 / 0.1$.'
      },
      {
        id: 'gm_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Gaia has mapped positions and motions for nearly two billion stars in our galaxy.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Gaia Data Release 3 (DR3) cataloged positions, brightnesses, and motions for roughly 1.8 billion stars, the largest 3D census in human history.',
        hint: 'Nearly 2 billion stars.'
      },
      {
        id: 'gm_q4',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the term for a star’s real physical motion across the plane of the sky, measured in milliarcseconds per year?',
        options: ['Proper Motion', 'Parallax wobble', 'Retrograde orbit', 'Refraction'],
        correctAnswerIndex: 0,
        explanation: 'Proper motion is the angular change in position over time as a star travels through the galaxy relative to the Sun.',
        hint: 'Its proper motion across the sky.'
      },
      {
        id: 'gm_q5',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'In SKYVERSE’s Object Investigation module, what key Gaia catalog parameter is cross-matched alongside coordinates to verify if a candidate is a real high-proper-motion source?',
        options: [
          'Gaia DR3 Source ID, Proper Motion (pmRA, pmDec), and Parallax',
          'The star’s telephone number',
          'The star’s color photo in JPEG',
          'The names of the astronauts who visited it'
        ],
        correctAnswerIndex: 0,
        explanation: 'SKYVERSE cross-matches the candidate’s coordinates against Gaia DR3, displaying its official Gaia Source ID, proper motion vector, and parallax measurement.',
        hint: 'Gaia Source ID, Proper Motion, and Parallax.'
      }
    ]
  },
  {
    id: 'neossat-mission',
    categoryId: 'space-missions',
    title: 'NEOSSat Mission & CADC Archives',
    subtitle: 'Canada’s space-based sentinel for asteroids, satellites, and exoplanets',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Telescope',
    summary: 'NEOSSat (Near-Earth Object Surveillance Satellite) is Canada’s pioneering microsatellite dedicated to tracking near-Earth asteroids, space debris, and exoplanet transits from orbit.',
    introduction: 'Launched in 2013 by the Canadian Space Agency (CSA) and Defence Research and Development Canada (DRDC), NEOSSat is a suitcase-sized microsatellite with a 15-centimeter Maksutov telescope. Orbiting 800 km above Earth, it guards our planet by tracking fast-moving asteroids that are difficult to see from the ground.',
    simpleExplanation: 'Think of NEOSSat as a small space security camera! Because ground-based telescopes can only look for asteroids during the night, they struggle to spot asteroids coming from the direction of the Sun. Orbiting in space, NEOSSat can track asteroids, space debris, and alien exoplanets day and night without atmospheric interference.',
    howItWorks: [
      'Microsatellite Platform: A compact 74-kilogram satellite equipped with a 15-cm f/5.88 Maksutov-Cassegrain optical telescope and dual CCD detectors.',
      'Sun-Synchronous Dawn-Dusk Orbit: Operates in low Earth orbit at ~800 km altitude, keeping its solar panels continuously illuminated by the Sun.',
      'CADC Data Products: Raw and calibrated observations are processed and publicly archived at the Canadian Astronomy Data Centre (CADC) in four standard pipeline tiers: RAW, CLEAN, COR, and CORD.',
      'Near-Earth Asteroid Tracking: Observes at small solar elongation angles, discovering asteroids that approach Earth from the glare of the daytime sky.'
    ],
    whyItMatters: [
      'Pioneering proof-of-concept for affordable space-based planetary defense and space situational awareness.',
      'Integrated directly into SKYVERSE’s Comparative Research section, allowing users to explore genuine Canadian Space Agency CADC data products.'
    ],
    terminology: [
      {
        term: 'NEOSSat',
        definition: 'Near-Earth Object Surveillance Satellite, a Canadian microsatellite launched in 2013 for asteroid tracking and space situational awareness.'
      },
      {
        term: 'CADC (Canadian Astronomy Data Centre)',
        definition: 'One of the world’s leading scientific data centers, archiving data from NEOSSat, CFHT, Gemini, and James Webb telescopes.'
      },
      {
        term: 'Solar Elongation',
        definition: 'The angular separation between the Sun and an astronomical object (such as an asteroid) as viewed from an observer.'
      }
    ],
    facts: [
      'NEOSSat was the world’s very first dedicated space-based microsatellite designed specifically for tracking near-Earth asteroids!',
      'In addition to guarding against asteroids, NEOSSat has conducted precise high-cadence exoplanet transit observations and monitored artificial satellites and space junk.'
    ],
    keyTakeaways: [
      'NEOSSat is a Canadian Space Agency microsatellite tracking asteroids and space debris.',
      'Operates in an 800 km dawn-dusk polar orbit.',
      'CADC archives provide standardized scientific data tiers: RAW, CLEAN, COR, and CORD.'
    ],
    vizType: 'coordinates-sphere',
    vizTitle: 'NEOSSat Dawn-Dusk Orbit & Asteroid Intercept Simulator',
    vizDescription: 'Interactive demonstration of NEOSSat’s polar orbit scanning at low solar elongations to detect incoming near-Earth asteroids.',
    skyverseBridge: {
      moduleId: 'neossat',
      moduleName: 'NEOSSat Research',
      actionLabel: 'Launch NEOSSat Learning Lab',
      description: 'Explore the full Canadian Space Agency & CADC pipeline (RAW/CLEAN/COR/CORD) in the NEOSSat module.'
    },
    quizQuestions: [
      {
        id: 'neo_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Which national space agency developed and operates the NEOSSat microsatellite?',
        options: ['Canadian Space Agency (CSA)', 'NASA only', 'ESA only', 'ISRO only'],
        correctAnswerIndex: 0,
        explanation: 'NEOSSat was developed jointly by the Canadian Space Agency (CSA) and Defence Research and Development Canada (DRDC).',
        hint: 'The Canadian Space Agency.'
      },
      {
        id: 'neo_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the primary scientific and defense objective of the NEOSSat space satellite?',
        options: [
          'Tracking Near-Earth Asteroids (NEOs) and monitoring orbital space debris',
          'Digging for diamonds on the Moon',
          'Measuring ocean waves on Earth',
          'Broadcasting satellite television'
        ],
        correctAnswerIndex: 0,
        explanation: 'NEOSSat’s primary mission is discovering and tracking Near-Earth Asteroids (planetary defense) and tracking artificial satellites and space debris.',
        hint: 'Tracking asteroids and space debris.'
      },
      {
        id: 'neo_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: NEOSSat observations are archived and publicly accessible through the Canadian Astronomy Data Centre (CADC).',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. NEOSSat data is processed and made available to scientists and educators worldwide through the Canadian Astronomy Data Centre (CADC).',
        hint: 'CADC hosts NEOSSat data products.'
      },
      {
        id: 'neo_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'In the CADC NEOSSat data pipeline featured in SKYVERSE, which tier represents the highest calibrated data with cosmic ray and bias correction applied?',
        options: ['CORD (Corrected and Dark subtracted)', 'RAW', 'DRAFT', 'PREVIEW'],
        correctAnswerIndex: 0,
        explanation: 'The CADC pipeline tiers progress from RAW to CLEAN, COR, and CORD (calibrated, cosmic-ray cleaned, and dark-subtracted).',
        hint: 'CORD is the final calibrated product.'
      },
      {
        id: 'neo_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'Why can NEOSSat discover asteroids that ground-based optical telescopes often miss?',
        options: [
          'Because its orbit allows it to observe at small solar elongations (closer to the Sun) where daytime sky glare blinds ground telescopes',
          'Because NEOSSat uses nuclear radar lasers',
          'Because NEOSSat is twice as large as the Hubble telescope',
          'Because ground telescopes are turned off on weekends'
        ],
        correctAnswerIndex: 0,
        explanation: 'Ground telescopes cannot observe near the Sun during daylight; from orbit, NEOSSat can point close to the Sun, spotting asteroids that approach Earth from the sunward direction.',
        hint: 'It can look closer to the Sun without atmospheric glare.'
      }
    ]
  }
];

