import { TopicItem } from '../../../../types/learnExplore';

export const LIGHT_TOPICS: TopicItem[] = [
  {
    id: 'electromagnetic-spectrum',
    categoryId: 'light-spectral',
    title: 'The Electromagnetic Spectrum',
    subtitle: 'From high-energy gamma rays to long cosmic radio waves',
    difficulty: 'Beginner',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'The electromagnetic spectrum encompasses all forms of electromagnetic radiation, ordered by wavelength and frequency from gamma rays to radio waves.',
    introduction: 'Visible light—the rainbow of colors that human eyes can see—is just a tiny sliver of reality, less than one percent of the entire electromagnetic spectrum. The universe is speaking to us across a vast chorus of invisible light: radio waves, microwaves, infrared, ultraviolet, X-rays, and gamma rays.',
    simpleExplanation: 'Imagine an enormous piano keyboard with 100 octaves. Human eyes can only hear a single key right in the middle! To hear the rest of the cosmic symphony, astronomers build specialized telescopes that "listen" to the bass notes of radio and infrared, and the high-pitched screams of X-rays and gamma rays.',
    howItWorks: [
      'Dual Nature: Light behaves simultaneously as propagating waves of electric and magnetic fields and as discrete energy packets called photons ($E = h\\nu$).',
      'The Spectrum Bands: Gamma rays (< 0.01 nm) $\\to$ X-rays (0.01–10 nm) $\\to$ Ultraviolet (10–400 nm) $\\to$ Visible (400–700 nm) $\\to$ Infrared (700 nm – 1 mm) $\\to$ Microwaves (1 mm – 1 m) $\\to$ Radio waves (> 1 m).',
      'Speed of Light Invariant: All electromagnetic waves travel at the speed of light in vacuum: $c = \\lambda \\nu \\approx 300,000\\,\\text{km/s}$.',
      'Atmospheric Windows: Earth’s atmosphere only permits visible light, parts of near-infrared, and radio waves to reach the ground; X-rays, gamma rays, and far-infrared must be observed from space satellites.'
    ],
    whyItMatters: [
      'Different astrophysical processes emit at different wavelengths: cold dust shines in infrared, hot stars radiate in ultraviolet, and exploding black holes blast gamma rays.',
      'Multi-wavelength astronomy gives us a complete, holistic view of cosmic structures that are completely invisible in ordinary optical telescopes.'
    ],
    terminology: [
      {
        term: 'Photon',
        definition: 'A quantum of electromagnetic radiation carrying energy proportional to its wave frequency: $E = h\\nu = hc/\\lambda$.'
      },
      {
        term: 'Atmospheric Window',
        definition: 'Wavelength bands of the electromagnetic spectrum that pass through Earth’s atmosphere with minimal absorption.'
      },
      {
        term: 'Planck’s Constant (h)',
        definition: 'A fundamental physical constant ($6.626 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$) relating photon energy to frequency.'
      }
    ],
    facts: [
      'If the entire electromagnetic spectrum were stretched across a road from Los Angeles to New York, the band of visible light human eyes can perceive would be thinner than a single strand of hair!',
      'Near-infrared light can pass right through interstellar dust clouds, allowing SPHEREx to map stars buried deep inside the Milky Way’s core.'
    ],
    keyTakeaways: [
      'Visible light is only a tiny fraction of the full electromagnetic spectrum.',
      'Shorter wavelengths (gamma, X-ray) carry higher energy; longer wavelengths (infrared, radio) carry lower energy.',
      'Space observatories are essential because Earth’s atmosphere blocks most high-energy and infrared bands.'
    ],
    vizType: 'spectrum-wavelength',
    vizTitle: 'Interactive Electromagnetic Spectrum & Wavelength Explorer',
    vizDescription: 'Explore the full spectrum from $10^{-14}\\,\\text{m}$ (gamma) to $10^3\\,\\text{m}$ (radio), highlighting SPHEREx’s near-infrared window.',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Launch Spectral Intelligence Lab',
      description: 'Explore the 102 SPHEREx near-infrared spectral channels spanning 0.75 to 5.00 µm.'
    },
    quizQuestions: [
      {
        id: 'em_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Which of the following electromagnetic waves carries the highest photon energy and shortest wavelength?',
        options: ['Radio waves', 'Infrared light', 'Visible green light', 'Gamma rays'],
        correctAnswerIndex: 3,
        explanation: 'Gamma rays have the shortest wavelengths and highest frequencies, making them the most energetic photons in the electromagnetic spectrum.',
        hint: 'Think of the radiation produced in atomic explosions and black hole mergers.'
      },
      {
        id: 'em_q2',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'At what speed do radio waves travel through empty space in a vacuum?',
        options: [
          'At the speed of sound (~343 m/s)',
          'At the speed of light (~300,000 km/s)',
          'At 100 miles per hour',
          'Radio waves cannot travel through space'
        ],
        correctAnswerIndex: 1,
        explanation: 'Because radio waves are a form of electromagnetic radiation (light), they travel at the speed of light: $c \\approx 300,000\\,\\text{km/s}$.',
        hint: 'Radio waves are light, not sound.'
      },
      {
        id: 'em_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Earth’s atmosphere is completely transparent to X-rays and gamma rays.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False! Earth’s atmosphere shields the surface by absorbing hazardous X-rays and gamma rays, which is why X-ray telescopes must be launched into space.',
        hint: 'Our atmosphere protects us from high-energy space radiation.'
      },
      {
        id: 'em_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'An astronomer wants to observe the cold dust and ice grains floating inside a stellar nursery. Which region of the electromagnetic spectrum should their telescope detect?',
        options: ['Gamma rays', 'Infrared radiation', 'Ultraviolet light', 'Hard X-rays'],
        correctAnswerIndex: 1,
        explanation: 'Cold dust and ice grains (temperatures of 10 K to 300 K) radiate thermal energy predominantly in the near- and mid-infrared.',
        hint: 'Warm objects and interstellar dust clouds glow in this band.'
      },
      {
        id: 'em_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What fundamental equation connects the energy (E) of a photon directly to its frequency (ν)?',
        options: ['$E = h\\nu$', '$F = ma$', '$E = mc^2$', '$V = IR$'],
        correctAnswerIndex: 0,
        explanation: 'Max Planck formulated $E = h\\nu$ (where $h$ is Planck’s constant), establishing that photon energy is directly proportional to its frequency.',
        hint: 'Planck’s law of radiation.'
      }
    ]
  },
  {
    id: 'wavelength',
    categoryId: 'light-spectral',
    title: 'Wavelength',
    subtitle: 'The crest-to-crest spatial length of an electromagnetic wave',
    difficulty: 'Beginner',
    readingTimeMinutes: 4,
    iconName: 'Activity',
    summary: 'Wavelength ($\lambda$) is the physical distance between consecutive wave peaks, inversely proportional to frequency and photon energy.',
    introduction: 'Every wave—from gentle ocean swells to ripples on a pond—has a spatial length. In electromagnetic radiation, wavelength dictates how light interacts with matter: whether it bounces off dust, passes cleanly through gas clouds, or is absorbed by atomic electrons.',
    simpleExplanation: 'Imagine ocean waves crashing on a beach. If you measure the distance from the top of one wave to the top of the next wave with a tape measure, that distance is the wavelength. In starlight, red light has longer waves, while blue light has shorter, tighter waves.',
    howItWorks: [
      'Spatial Measurement: Measured in meters ($m$), nanometers ($nm = 10^{-9}\\,m$), or micrometers / microns ($\\mu m = 10^{-6}\\,m$).',
      'The Wave Speed Formula: $c = \\lambda \\nu$, where $c$ is the speed of light, $\\lambda$ is wavelength, and $\\nu$ is frequency.',
      'Inverse Energy Relation: $E = \\frac{hc}{\\lambda}$. As wavelength increases, photon energy decreases.',
      'Dust Scattering (Rayleigh Criterion): Particles scatter light most efficiently when the wavelength is comparable to or smaller than the particle size. Interstellar dust (~0.5 µm) scatters short blue visible light, but long infrared waves glide right past!'
    ],
    whyItMatters: [
      'Determines whether light will be blocked by cosmic dust or penetrate through to our detectors.',
      'SPHEREx specifically observes from $0.75\\,\\mu m$ to $5.00\\,\\mu m$ across 102 discrete wavelength channels.'
    ],
    terminology: [
      {
        term: 'Micrometer / Micron (µm)',
        definition: 'One millionth of a meter ($10^{-6}\\,\\text{m}$), the standard unit of wavelength used in infrared astronomy.'
      },
      {
        term: 'Nanometer (nm)',
        definition: 'One billionth of a meter ($10^{-9}\\,\\text{m}$), commonly used for visible and ultraviolet wavelengths.'
      },
      {
        term: 'Rayleigh Scattering',
        definition: 'The scattering of light by particles much smaller than the wavelength of the radiation, scaling as $1/\\lambda^4$.'
      }
    ],
    facts: [
      'Human visible light spans wavelengths from roughly 380 nm (violet) to 750 nm (deep red).',
      'The cosmic microwave background has a peak wavelength of roughly 1.9 millimeters, stretched out by cosmic expansion over 13.8 billion years.'
    ],
    keyTakeaways: [
      'Wavelength is the distance between consecutive wave crests.',
      'Longer wavelengths have lower energy; shorter wavelengths have higher energy.',
      'Infrared wavelengths (0.75–5.0 µm) penetrate cosmic dust clouds far better than visible light.'
    ],
    vizType: 'spectrum-wavelength',
    vizTitle: 'Wave Crest & Micron Measurement Interactive Visualizer',
    vizDescription: 'Adjust wavelength slider to see wave compression from radio (meters) down to infrared (microns) and X-ray (nanometers).',
    skyverseBridge: {
      moduleId: 'quest',
      moduleName: 'Cosmic Brightness Quest',
      actionLabel: 'Explore Infrared Waves in Quest Level 10',
      description: 'Slide through wavelengths from visible to near-infrared in Level 10 (Infrared Vision).'
    },
    quizQuestions: [
      {
        id: 'wl_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the physical definition of a wave’s "wavelength"?',
        options: [
          'The distance between two consecutive wave crests or peaks',
          'How many waves pass by in one second',
          'The height of the wave from top to bottom',
          'The weight of the wave in kilograms'
        ],
        correctAnswerIndex: 0,
        explanation: 'Wavelength is the spatial length of one complete wave cycle, typically measured from crest to crest or trough to trough.',
        hint: 'It is the physical length of one complete wave.'
      },
      {
        id: 'wl_q2',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'In visible light, which color has the longest wavelength?',
        options: ['Blue', 'Green', 'Yellow', 'Red'],
        correctAnswerIndex: 3,
        explanation: 'Red light has the longest wavelength in the visible spectrum (~700 nm), while violet light has the shortest (~400 nm).',
        hint: 'Remember ROYGBIV—the red end is the longest.'
      },
      {
        id: 'wl_q3',
        type: 'true-false',
        difficulty: 'Intermediate',
        question: 'True or False: As the wavelength of an electromagnetic wave gets shorter, its photon energy increases.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True! By $E = hc/\\lambda$, energy is inversely proportional to wavelength. Shorter wavelengths mean higher-frequency, higher-energy photons.',
        hint: 'Short waves pack more energy.'
      },
      {
        id: 'wl_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Why do infrared waves (1 to 5 µm) pass through interstellar dust clouds that completely block visible light (0.5 µm)?',
        options: [
          'Because infrared waves are magnetic and push dust away',
          'Because infrared wavelengths are significantly larger than the microscopic dust grains (~0.5 µm), so they do not scatter easily',
          'Because dust clouds are made of ice that evaporates in infrared',
          'Because visible light is too heavy'
        ],
        correctAnswerIndex: 1,
        explanation: 'Interstellar dust grains are roughly 0.5 µm in size. Light scatters strongly when its wavelength matches the grain size. Longer infrared wavelengths glide right past without scattering.',
        hint: 'Waves much larger than the dust particles don’t get scattered.'
      },
      {
        id: 'wl_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'How many nanometers (nm) are equal to one micrometer / micron (µm)?',
        options: ['10 nm', '100 nm', '1,000 nm', '1,000,000 nm'],
        correctAnswerIndex: 2,
        explanation: 'One micrometer is $10^{-6}$ meters, and one nanometer is $10^{-9}$ meters. Therefore, $1\\,\\mu m = 1,000\\,nm$.',
        hint: 'A factor of one thousand.'
      }
    ]
  },
  {
    id: 'frequency',
    categoryId: 'light-spectral',
    title: 'Frequency',
    subtitle: 'The rate of wave cycles per second, measured in Hertz (Hz)',
    difficulty: 'Beginner',
    readingTimeMinutes: 4,
    iconName: 'Activity',
    summary: 'Frequency ($\nu$ or $f$) is the number of complete wave oscillations passing a fixed point per second, directly proportional to photon energy.',
    introduction: 'Imagine standing on a pier and counting how many ocean waves hit the wooden posts every minute. In physics, counting how many wave crests pass by in one single second gives you the wave’s frequency. For light, frequency determines photon energy and color.',
    simpleExplanation: 'If you rapidly shake the end of a jump rope up and down, you create rapid, tightly packed waves: that is high frequency! If you shake your hand slowly, you create lazy, spread-out waves: that is low frequency.',
    howItWorks: [
      'The Hertz Unit: 1 Hertz (Hz) equals one wave cycle per second ($1\\,\\text{Hz} = 1\\,\\text{s}^{-1}$).',
      'The Light Speed Equation: $\\nu = c / \\lambda$. Because the speed of light $c$ is constant, frequency and wavelength are inversely linked.',
      'Direct Energy Proportionality: Max Planck discovered that photon energy is directly proportional to frequency ($E = h\\nu$). Higher frequency means higher energy.',
      'Astronomical Frequencies: Cosmic radio waves oscillate at millions of cycles per second (MHz to GHz), while gamma rays oscillate at an unfathomable $10^{20}$ cycles per second!'
    ],
    whyItMatters: [
      'Radio astronomy relies on precise frequencies (like the famous 1420 MHz hydrogen line) to map the spiral arms of our galaxy.',
      'Enables molecular radio spectroscopy, identifying complex organic molecules in interstellar space.'
    ],
    terminology: [
      {
        term: 'Hertz (Hz)',
        definition: 'The SI unit of frequency, defined as one cycle or oscillation per second.'
      },
      {
        term: '21-Centimeter Hydrogen Line',
        definition: 'The spectral line emitted by neutral hydrogen when the spin of its electron flips, emitting at a precise frequency of 1420.405 MHz.'
      },
      {
        term: 'Doppler Frequency Shift',
        definition: 'The change in frequency observed when a light or sound source moves toward (higher frequency) or away from (lower frequency) an observer.'
      }
    ],
    facts: [
      'Radio astronomers use atomic hydrogen’s 1420 MHz frequency to map the neutral gas in our galaxy because dust is completely transparent at this frequency.',
      'Your eyes perceive visible light frequencies between 430 trillion Hz (red) and 750 trillion Hz (violet).'
    ],
    keyTakeaways: [
      'Frequency is the number of wave cycles passing a point per second (measured in Hertz).',
      'Higher frequency means higher photon energy ($E = h\\nu$).',
      'Frequency is inversely proportional to wavelength ($\nu = c / \lambda$).'
    ],
    vizType: 'redshift-doppler',
    vizTitle: 'Wave Frequency & Oscillation Rate Interactive Simulator',
    vizDescription: 'Interactive demonstration comparing low-frequency radio/infrared waves with high-frequency ultraviolet/gamma waves.',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Inspect Frequencies in Spectral Lab',
      description: 'Explore frequency and wavelength channels across the SPHEREx infrared spectrum.'
    },
    quizQuestions: [
      {
        id: 'fr_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the standard unit used to measure wave frequency?',
        options: ['Meters', 'Hertz (Hz)', 'Joules', 'Kelvin'],
        correctAnswerIndex: 1,
        explanation: 'Frequency is measured in Hertz (Hz), named after physicist Heinrich Hertz, where $1\\,\\text{Hz} = 1\\,\\text{cycle per second}$.',
        hint: 'Cycles per second.'
      },
      {
        id: 'fr_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'If a light wave’s wavelength is halved, what happens to its frequency?',
        options: ['It is cut in half', 'It doubles', 'It stays the same', 'It drops to zero'],
        correctAnswerIndex: 1,
        explanation: 'Because wave speed is constant ($c = \\lambda \\nu$), halving the wavelength ($\\lambda / 2$) causes the frequency to double ($2\\nu$).',
        hint: 'Wavelength and frequency are inversely proportional.'
      },
      {
        id: 'fr_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Higher frequency light carries higher photon energy.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. According to Planck’s relation ($E = h\\nu$), photon energy is directly proportional to frequency.',
        hint: 'Review $E = h\\nu$.'
      },
      {
        id: 'fr_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Astronomers detect the famous 21-cm spectral line of neutral hydrogen. At what precise radio frequency does this line emit?',
        options: ['100 kHz', '1420.4 MHz (1.42 GHz)', '500 THz', '10 GHz'],
        correctAnswerIndex: 1,
        explanation: 'The spin-flip transition of neutral hydrogen emits at exactly 1420.40575 MHz (wavelength $\\lambda \\approx 21.1\\,\\text{cm}$), a foundational benchmark of radio astronomy.',
        hint: 'Roughly 1.42 Gigahertz.'
      },
      {
        id: 'fr_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What happens to the observed frequency of light when an astronomical object is moving rapidly away from Earth?',
        options: [
          'Its frequency decreases (shifts toward the red end of the spectrum)',
          'Its frequency increases (shifts toward blue)',
          'Its speed slows down below the speed of light',
          'It turns into ultrasound'
        ],
        correctAnswerIndex: 0,
        explanation: 'By the Doppler effect, receding sources have their waves stretched to longer wavelengths and lower frequencies—a phenomenon called redshift.',
        hint: 'The wave cycles are stretched out, lowering their frequency.'
      }
    ]
  },
  {
    id: 'infrared-astronomy',
    categoryId: 'light-spectral',
    title: 'Infrared Astronomy & SPHEREx',
    subtitle: 'Peering through cosmic dust into the cold, hidden universe',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Telescope',
    summary: 'Infrared astronomy observes cosmic radiation between 0.75 µm and 1 mm, penetrating obscuring dust to study protostars, distant galaxies, and biogenic ices.',
    introduction: 'William Herschel discovered infrared light in 1800 by placing a thermometer just beyond the red end of a prism’s visible spectrum and noticing it heated up. Today, infrared astronomy is our premier window into the hidden cosmos: unveiling cool stars, protoplanetary disks, and the first galaxies.',
    simpleExplanation: 'If you put your hand in front of a campfire in the dark, you cannot see anything, but you can feel the heat radiating onto your skin. That heat is infrared light! Infrared telescopes have "thermal night vision" that can see through cosmic smoke and detect cool objects that emit no visible light at all.',
    howItWorks: [
      'Dust Penetration: Interstellar dust grains are about 0.5 µm wide; infrared waves (0.75 to 5.0 µm) glide right through with minimal scattering ($A_\\lambda \\propto \\lambda^{-1.75}$).',
      'Thermal Emission: Objects between 10 K and 3,000 K (cold dust clouds, brown dwarfs, exoplanets) emit peak thermal radiation in the infrared.',
      'Cosmological Redshift: Light emitted by the first stars and galaxies as visible or UV light 13 billion years ago has been stretched by cosmic expansion directly into near-infrared wavelengths!',
      'Cryogenic Cooling: Telescopes like SPHEREx must be cryogenically cooled with radiators and shields to keep their own thermal glow from blinding the sensitive detectors.'
    ],
    whyItMatters: [
      'NASA’s SPHEREx mission is mapping the entire celestial sphere across 102 near-infrared channels (0.75–5.0 µm) every six months.',
      'Enables astronomers to trace the origin of water ice and biogenic molecules across the Milky Way.'
    ],
    terminology: [
      {
        term: 'Near-Infrared (NIR)',
        definition: 'The region of the infrared spectrum closest to visible light, spanning wavelengths from 0.75 to 5.0 micrometers.'
      },
      {
        term: 'Extinction (Astronomical)',
        definition: 'The absorption and scattering of electromagnetic radiation by interstellar dust and gas between an astronomical object and the observer.'
      },
      {
        term: 'Linear Variable Filter (LVF)',
        definition: 'An optical filter whose transmitted wavelength varies continuously across its physical length, used by SPHEREx to obtain 102 spectral channels.'
      }
    ],
    facts: [
      'In visible light, the center of the Milky Way is completely invisible behind 30 magnitudes of dust extinction (dimmed by a factor of 1 trillion!). In near-infrared, it blazes brilliantly with millions of stars.',
      'SPHEREx uses passive cooling radiators pointed into the permanent cold of deep space to chill its optics down to below 80 Kelvin without heavy liquid helium.'
    ],
    keyTakeaways: [
      'Infrared penetrates dust clouds that block visible light.',
      'Cool objects (brown dwarfs, planetary disks, molecular ices) radiate primarily in infrared.',
      'SPHEREx surveys the entire sky across 102 near-infrared spectral bands.'
    ],
    vizType: 'spectrum-wavelength',
    vizTitle: 'Dust Extinction vs. Infrared Wavelength Simulator',
    vizDescription: 'Interactive slider showing how moving from $0.5\\,\\mu m$ to $4.5\\,\\mu m$ penetrates opaque dust clouds to reveal hidden stars.',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Analyze SPHEREx 102 Channels in Spectral Lab',
      description: 'Explore the full 102-channel near-infrared spectrum of real and benchmark targets.'
    },
    quizQuestions: [
      {
        id: 'ir_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'Who discovered infrared radiation in 1800 using a prism and a thermometer?',
        options: ['Isaac Newton', 'Sir William Herschel', 'Albert Einstein', 'Galileo Galilei'],
        correctAnswerIndex: 1,
        explanation: 'Sir William Herschel placed a thermometer just outside the red band of sunlight split by a prism and discovered an invisible form of radiant heat, which he named infrared light.',
        hint: 'The astronomer who also discovered the planet Uranus.'
      },
      {
        id: 'ir_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the primary scientific reason NASA’s SPHEREx space telescope observes in the near-infrared spectrum (0.75 to 5.0 µm)?',
        options: [
          'To look for green lasers from aliens',
          'To penetrate interstellar dust, survey biogenic ices (H2O, CO2), and detect cosmologically redshifted light from early galaxies',
          'Because infrared is the only light that travels at light speed',
          'To photograph the surface of Pluto'
        ],
        correctAnswerIndex: 1,
        explanation: 'Near-infrared penetrates dust clouds, captures molecular ice absorption bands, and detects ancient starlight redshifted by cosmic expansion.',
        hint: 'Infrared pierces dust and captures biogenic ices.'
      },
      {
        id: 'ir_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: If you look at the center of the Milky Way in visible light, it is almost completely blocked by thick clouds of cosmic dust.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True! Dust in the galactic plane dims visible light from the galactic center by about 30 magnitudes (a factor of one trillion). Infrared light cuts right through it.',
        hint: 'Interstellar dust blocks visible light from the galactic core.'
      },
      {
        id: 'ir_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Why do space telescopes observing in infrared need to be chilled to cryogenic temperatures (often below 80 Kelvin)?',
        options: [
          'To keep the onboard computers from catching fire',
          'To prevent the telescope’s own warm metal from glowing in infrared and blinding its sensitive detectors',
          'Because cold makes light travel faster',
          'To freeze space dust into ice cubes'
        ],
        correctAnswerIndex: 1,
        explanation: 'Any warm telescope radiates infrared light. Without cryogenic cooling or sunshades, the telescope’s own thermal glow would drown out faint cosmic signals.',
        hint: 'Warm objects glow in infrared, which would blind the telescope.'
      },
      {
        id: 'ir_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'How many distinct near-infrared spectral channels does NASA’s SPHEREx mission capture for every single pixel on the sky?',
        options: ['3 channels', '12 channels', '102 channels', '1,000 channels'],
        correctAnswerIndex: 2,
        explanation: 'SPHEREx uses four Linear Variable Filters across its detector arrays to record 102 continuous spectral channels from 0.75 to 5.00 µm for every point on the celestial sphere.',
        hint: 'The core number featured prominently in SKYVERSE.'
      }
    ]
  },
  {
    id: 'spectroscopy',
    categoryId: 'light-spectral',
    title: 'Spectroscopy & Spectral Fingerprints',
    subtitle: 'Decoding chemical composition, temperature, and velocity from starlight',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'Spectroscopy breaks light into its component wavelengths, revealing absorption and emission lines that identify chemical elements and physical conditions across the universe.',
    introduction: 'In 1835, French philosopher Auguste Comte declared that humans would never know what stars are made of. Just two decades later, Gustav Kirchhoff and Robert Bunsen showed that every chemical element produces a unique spectral barcode of lines. Today, spectroscopy is astrophysics’ most powerful tool.',
    simpleExplanation: 'Think of light from a star like a grocery store barcode. When starlight passes through the outer atmosphere of a star or gas cloud, each chemical element—hydrogen, helium, iron, water—absorbs very specific colors of light, leaving behind dark lines in the barcode that reveal exactly what is inside.',
    howItWorks: [
      'Kirchhoff’s Laws of Spectroscopy: 1) A hot dense object produces a continuous spectrum. 2) A hot thin gas produces an emission-line spectrum. 3) A cool gas in front of a continuous source produces an absorption-line spectrum.',
      'Quantum Transitions: Electrons orbit atomic nuclei in quantized energy levels. When an electron jumps down, it emits a photon of exact energy $\\Delta E = h\\nu$; when it absorbs a photon of that exact energy, it jumps up, creating a dark absorption line.',
      'Doppler Shift: If the emitting source moves toward Earth, its spectral lines shift to shorter wavelengths (blueshift); if moving away, they shift to longer wavelengths (redshift).',
      'Spectral Resolution ($R = \\lambda / \\Delta\\lambda$): Quantifies how finely a spectrograph can distinguish adjacent wavelengths.'
    ],
    whyItMatters: [
      'Reveals chemical composition, temperature, density, magnetic fields, and radial velocity of celestial bodies billions of light-years away.',
      'SPHEREx provides the world’s first full-sky near-infrared spectroscopic survey.'
    ],
    terminology: [
      {
        term: 'Absorption Spectrum',
        definition: 'A spectrum containing dark lines caused by the absorption of specific wavelengths of radiation by cooler intervening atoms or molecules.'
      },
      {
        term: 'Emission Spectrum',
        definition: 'A spectrum consisting of discrete bright lines produced by an excited gas as electrons drop to lower energy states.'
      },
      {
        term: 'Spectral Resolution (R)',
        definition: 'The ability of a spectrograph to separate closely spaced wavelengths, defined as $R = \\lambda / \\Delta\\lambda$.'
      }
    ],
    facts: [
      'The element Helium was discovered on the Sun via solar spectroscopy in 1868—27 years before it was ever identified on Earth!',
      'Joseph von Fraunhofer mapped over 570 dark absorption lines in the solar spectrum in 1814, now known as Fraunhofer lines.'
    ],
    keyTakeaways: [
      'Spectroscopy splits light into wavelengths, revealing chemical barcodes.',
      'Atomic electron jumps create precise absorption and emission lines.',
      'Spectral shifts reveal radial velocity and cosmic expansion.'
    ],
    vizType: 'spectrum-wavelength',
    vizTitle: 'Fraunhofer Absorption Lines & Element Barcode Simulator',
    vizDescription: 'Interactive spectrum showing absorption fingerprints for Hydrogen, Helium, Sodium, Water Ice, and CO₂.',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Extract Spectra in Spectral Intelligence',
      description: 'Click any sky region to extract its 102-band near-infrared spectrum in real time.'
    },
    quizQuestions: [
      {
        id: 'sp_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What creates the dark absorption lines seen in a star’s spectrum?',
        options: [
          'Gaps where the camera failed to record data',
          'Cooler atoms in the star’s atmosphere absorbing specific wavelengths of light',
          'Shadows cast by planets',
          'Space dust blocking the camera lens'
        ],
        correctAnswerIndex: 1,
        explanation: 'As continuous white light leaves the star’s hot core, atoms in its cooler outer atmosphere absorb specific photons corresponding to quantum electron jumps, creating dark absorption lines.',
        hint: 'Atoms absorb exact colors of light corresponding to electron energy levels.'
      },
      {
        id: 'sp_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'Which chemical element was discovered on the Sun during a solar eclipse in 1868 before it was ever discovered on Earth?',
        options: ['Hydrogen', 'Helium', 'Carbon', 'Gold'],
        correctAnswerIndex: 1,
        explanation: 'Astronomers detected an unknown yellow spectral line in sunlight during an 1868 eclipse and named the element Helium after Helios, the Greek god of the Sun.',
        hint: 'Named after the Greek god of the Sun, Helios.'
      },
      {
        id: 'sp_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: Every chemical element in the periodic table produces its own unique set of spectral lines.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Because each element has a unique quantum electron orbital structure, each element possesses a unique set of spectral lines, like an atomic fingerprint.',
        hint: 'Just like human fingerprints or store barcodes.'
      },
      {
        id: 'sp_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'A laboratory Hydrogen-alpha spectral line has a rest wavelength of 656.3 nm. When you observe a distant galaxy, that line appears shifted to 670.0 nm. What does this tell you about the galaxy?',
        options: [
          'The galaxy is moving away from Earth (it is redshifted)',
          'The galaxy is moving toward Earth (it is blueshifted)',
          'The galaxy is made of pure helium',
          'The galaxy has zero mass'
        ],
        correctAnswerIndex: 0,
        explanation: 'Because the observed wavelength (670.0 nm) is longer than the laboratory rest wavelength (656.3 nm), the light has been stretched to the red (redshift), meaning the galaxy is receding from us.',
        hint: 'The wavelength increased, shifting toward red.'
      },
      {
        id: 'sp_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What is the mathematical definition of spectral resolution (R)?',
        options: ['$R = \\lambda / \\Delta\\lambda$', '$R = mc^2$', '$R = 4\\pi d^2$', '$R = v / c$'],
        correctAnswerIndex: 0,
        explanation: 'Spectral resolution is defined as $R = \\lambda / \\Delta\\lambda$, where $\\lambda$ is the central wavelength and $\\Delta\\lambda$ is the smallest resolvable wavelength difference.',
        hint: 'Wavelength divided by the smallest distinguishable wavelength step.'
      }
    ]
  },
  {
    id: 'redshift-and-blueshift',
    categoryId: 'light-spectral',
    title: 'Redshift and Blueshift',
    subtitle: 'Doppler frequency shifts revealing velocity, expansion, and gravity',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'Redshift ($z > 0$) and blueshift ($z < 0$) describe the change in the observed wavelength of light caused by motion through space, cosmic expansion, or gravitational fields.',
    introduction: 'You have almost certainly experienced the Doppler effect with sound: when an ambulance speeds toward you, its siren sounds high-pitched; as it zooms away, the pitch drops. The exact same effect occurs with light, allowing astronomers to measure the velocity of stars and the expansion of the universe.',
    simpleExplanation: 'When an object shining with light moves toward you, it "catches up" to its own waves, squishing them together into shorter, bluer waves (blueshift). When it speeds away from you, it stretches its waves out into longer, redder waves (redshift).',
    howItWorks: [
      'Doppler Redshift: For relative motion along the line of sight: $z = \\frac{\\lambda_{obs} - \\lambda_{rest}}{\\lambda_{rest}} \\approx \\frac{v}{c}$ (for non-relativistic speeds).',
      'Cosmological Redshift: Caused not by motion through space, but by the stretching of space itself as the universe expands during the light’s journey: $1 + z = \\frac{a_0}{a_{emit}}$.',
      'Gravitational Redshift: Einstein’s General Relativity predicts that light climbing out of a strong gravitational well loses energy, shifting toward red.',
      'Hubble’s Law: Distant galaxies show redshifts directly proportional to their distance: $v = H_0 d$, proving the universe is expanding.'
    ],
    whyItMatters: [
      'Allowed Edwin Hubble in 1929 to discover that the universe is expanding.',
      'SPHEREx uses cosmological redshift of hundreds of millions of galaxies to reconstruct the 3D cosmic web and test inflationary cosmology.'
    ],
    terminology: [
      {
        term: 'Redshift Parameter (z)',
        definition: 'The fractional change in wavelength: $z = \\frac{\\lambda_{obs} - \\lambda_{emit}}{\\lambda_{emit}}$.'
      },
      {
        term: 'Hubble-Lemaître Law',
        definition: 'The observation that galaxies recede with a velocity proportional to their distance: $v = H_0 d$.'
      },
      {
        term: 'Radial Velocity',
        definition: 'The component of an astronomical object’s velocity directed directly toward or away from the observer along the line of sight.'
      }
    ],
    facts: [
      'The Andromeda galaxy is moving toward our Milky Way at roughly 110 kilometers per second, making its starlight blueshifted!',
      'The most distant known galaxy (observed by JWST at $z \\approx 14$) has had its ultraviolet light stretched by a factor of 15 into the infrared by cosmic expansion.'
    ],
    keyTakeaways: [
      'Blueshift means moving toward Earth; redshift means moving away.',
      'Cosmological redshift is the stretching of space itself, not velocity through space.',
      'Redshift parameter $z$ provides a cosmic clock and distance meter.'
    ],
    vizType: 'redshift-doppler',
    vizTitle: 'Doppler Shift & Cosmological Redshift Interactive Simulator',
    vizDescription: 'Adjust radial velocity slider from $-0.1c$ (blueshift) to $+0.8c$ (redshift) to observe spectral line displacement.',
    skyverseBridge: {
      moduleId: 'spectral',
      moduleName: 'Spectral Intelligence',
      actionLabel: 'Detect Redshifted Features in Spectral Lab',
      description: 'Observe how distant target spectra shift relative to rest-frame molecular absorption bands.'
    },
    quizQuestions: [
      {
        id: 'rs_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'When an astronomical object is moving rapidly TOWARD Earth, what happens to the starlight we observe?',
        options: [
          'Its waves are compressed to shorter wavelengths (Blueshift)',
          'Its waves are stretched to longer wavelengths (Redshift)',
          'Its light turns completely green',
          'Its light stops traveling'
        ],
        correctAnswerIndex: 0,
        explanation: 'Motion toward the observer compresses the incoming wavefronts into shorter wavelengths, shifting spectral features toward the blue/violet end of the spectrum (blueshift).',
        hint: 'Approaching means compressed waves, shifting toward blue.'
      },
      {
        id: 'rs_q2',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'What is the mathematical equation for the redshift parameter z in terms of observed wavelength (λ_obs) and rest wavelength (λ_rest)?',
        options: [
          '$z = (\\lambda_{obs} - \\lambda_{rest}) / \\lambda_{rest}$',
          '$z = \\lambda_{obs} \\times \\lambda_{rest}$',
          '$z = mc^2$',
          '$z = 4\\pi d^2$'
        ],
        correctAnswerIndex: 0,
        explanation: 'The redshift parameter $z$ is the fractional increase in wavelength: $z = \\frac{\\lambda_{obs} - \\lambda_{rest}}{\\lambda_{rest}}$.',
        hint: 'Fractional change: difference divided by original rest wavelength.'
      },
      {
        id: 'rs_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: The Andromeda galaxy exhibits a blueshift because it is gravitationally moving toward our Milky Way.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Andromeda is moving toward us at ~110 km/s under mutual gravitational attraction, so its light is blueshifted ($z = -0.001$).',
        hint: 'Andromeda is on a collision course with the Milky Way.'
      },
      {
        id: 'rs_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Edwin Hubble measured the redshifts of dozens of distant galaxies in 1929 and found that almost all of them were redshifted. What did this prove about the universe?',
        options: [
          'The universe is collapsing inward',
          'The universe is expanding',
          'The Milky Way is the physical center of creation',
          'Starlight gets tired and loses speed'
        ],
        correctAnswerIndex: 1,
        explanation: 'Because distant galaxies are redshifted with velocity proportional to distance ($v = H_0 d$), this proved that the fabric of space itself is expanding.',
        hint: 'Almost all distant galaxies are moving away from each other.'
      },
      {
        id: 'rs_q5',
        type: 'multiple-choice',
        difficulty: 'Advanced',
        question: 'What type of redshift occurs when light climbs out of an intense gravitational field (such as near the event horizon of a black hole)?',
        options: ['Gravitational Redshift', 'Doppler Blueshift', 'Thermal ionization', 'Reflective dispersion'],
        correctAnswerIndex: 0,
        explanation: 'Einstein’s General Relativity predicts gravitational redshift: photons climbing out of a gravitational well must expend energy, which reduces their frequency and stretches their wavelength.',
        hint: 'Caused by gravity pulling on photon energy.'
      }
    ]
  },
  {
    id: 'light-curves',
    categoryId: 'light-spectral',
    title: 'Light Curves & Time-Domain Photometry',
    subtitle: 'Graphing stellar brightness across epochs to discover variability and transits',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'A light curve is a time-series graph of an astronomical object’s brightness, revealing periodic pulsations, exoplanet transits, binary eclipses, and transient supernovae.',
    introduction: 'The universe is not a static photograph; it is a dynamic movie. Time-domain astronomy observes the sky over hours, days, months, and years. By plotting how an object’s brightness rises and falls over time, astronomers can diagnose astrophysical phenomena without ever needing to resolve them as spatial disks.',
    simpleExplanation: 'Think of a light curve like an electrocardiogram (ECG) for a star. An ECG plots your heart’s electrical pulse over time; a light curve plots a star’s brightness over time. A periodic heartbeat can reveal an orbiting exoplanet, a pulsating star, or a rotating asteroid.',
    howItWorks: [
      'Photometry Time Series: Brightness measurements (flux or magnitude) are collected at multiple epochs ($t_0, t_1, t_2, \\dots$).',
      'Phase Folding: For periodic signals, data points are folded by the candidate period ($P$) into a single phase cycle from $0.0$ to $1.0$.',
      'Distinct Signatures: 1) Exoplanet transit: flat baseline with periodic U-shaped or box-shaped dip. 2) Eclipsing binary: alternating deep primary and shallower secondary eclipses. 3) Cepheid variable: rapid brightening followed by slow linear decline. 4) Supernova: rapid explosive rise followed by exponential radioactive decay.',
      'Multi-Epoch Surveys: Surveys like SPHEREx, Gaia, and Vera C. Rubin Observatory scan the sky repeatedly, generating light curves for billions of objects.'
    ],
    whyItMatters: [
      'Light curves enable the discovery of exoplanets, stellar mass measurements, and black hole mergers.',
      'Core technology powering SKYVERSE’s Cosmic Time Machine and Object Investigation modules.'
    ],
    terminology: [
      {
        term: 'Phase Folding',
        definition: 'The mathematical technique of plotting time-series data against orbital phase (modulo the period) rather than calendar time.'
      },
      {
        term: 'Epoch',
        definition: 'A specific point in time at which an astronomical observation or measurement is recorded.'
      },
      {
        term: 'Photometry',
        definition: 'The astronomical branch measuring the flux or intensity of an astronomical object’s electromagnetic radiation.'
      }
    ],
    facts: [
      'NASA’s Kepler space telescope gathered 4 years of continuous high-precision light curves for over 150,000 stars, discovering thousands of exoplanets.',
      'SPHEREx will map the entire sky across 4 separate full-sky epochs over its primary 2-year mission, enabling time-domain color comparison.'
    ],
    keyTakeaways: [
      'A light curve graphs brightness on the y-axis against time on the x-axis.',
      'Different cosmic events (transits, pulsations, supernovae) produce distinct light curve shapes.',
      'Phase-folding reveals periodic signals hidden inside noisy time-series data.'
    ],
    vizType: 'light-curve',
    vizTitle: 'Interactive Light Curve Generator & Phase Folder',
    vizDescription: 'Select variable type (Pulsating Star, Eclipsing Binary, Exoplanet Transit) to view real-time plotted data points and phase folds.',
    skyverseBridge: {
      moduleId: 'time-machine',
      moduleName: 'Cosmic Time Machine',
      actionLabel: 'Build Light Curves in Cosmic Time Machine',
      description: 'Compare multiple observation epochs and generate photometric light curves in the Time Machine.'
    },
    quizQuestions: [
      {
        id: 'lc_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What physical quantities are plotted on the axes of an astronomical light curve?',
        options: [
          'Brightness (flux/magnitude) on the Y-axis vs. Time on the X-axis',
          'Distance on Y-axis vs. Star Weight on X-axis',
          'Temperature on Y-axis vs. Wavelength on X-axis',
          'Speed on Y-axis vs. Direction on X-axis'
        ],
        correctAnswerIndex: 0,
        explanation: 'A light curve is a time-series plot of astronomical brightness (flux or magnitude) as a function of time.',
        hint: 'Brightness over time.'
      },
      {
        id: 'lc_q2',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'You inspect a star’s light curve and see a completely flat line, interrupted every 5.4 days by a sharp 0.8% symmetrical drop in brightness that lasts 3 hours. What is the most probable cause?',
        options: [
          'An exoplanet transiting across the face of the star',
          'The star is running out of hydrogen',
          'A cloud of dark matter collided with the telescope',
          'The star is expanding into a red giant'
        ],
        correctAnswerIndex: 0,
        explanation: 'A flat baseline interrupted by periodic, flat-bottomed or U-shaped dips is the definitive signature of a transiting exoplanet.',
        hint: 'An orbiting world is periodically eclipsing a fraction of the star.'
      },
      {
        id: 'lc_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: "Phase folding" allows astronomers to fold thousands of days of observations into a single repeating cycle to reveal periodic patterns.',
        options: ['True', 'False'],
        correctAnswerIndex: 0,
        explanation: 'True. Phase folding stacks data modulo the orbital period, turning years of scattered observations into a clean, single-period curve.',
        hint: 'It wraps time into repeating orbital cycles.'
      },
      {
        id: 'lc_q4',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'An eclipsing binary star system shows two distinct dips per orbit: a deep primary dip and a shallower secondary dip. What does the secondary dip represent?',
        options: [
          'The cooler star passing behind the hotter star',
          'The star exploding',
          'The telescope turning off',
          'A comet passing in front of Earth'
        ],
        correctAnswerIndex: 0,
        explanation: 'The primary minimum occurs when the cooler star blocks the hotter star; the shallower secondary minimum occurs when the hotter star blocks the cooler star.',
        hint: 'The hotter star blocks the cooler star during the secondary dip.'
      },
      {
        id: 'lc_q5',
        type: 'multiple-choice',
        difficulty: 'Intermediate',
        question: 'In Cosmic Brightness Quest Level 8, what astronomical task must the player complete using time-domain data?',
        options: [
          'Reconstruct a light curve by plotting multi-epoch photometric observations',
          'Fly a spaceship to Mars',
          'Build a radio receiver',
          'Mine asteroids for gold'
        ],
        correctAnswerIndex: 0,
        explanation: 'Level 8 of Cosmic Brightness Quest challenges the player to plot multi-epoch brightness measurements to construct and interpret a scientific light curve.',
        hint: 'Building a light curve from observations.'
      }
    ]
  },
  {
    id: 'inverse-square-law',
    categoryId: 'light-spectral',
    title: 'The Inverse-Square Law of Light',
    subtitle: 'The fundamental geometric dilution of radiation: F = L / (4πd²)',
    difficulty: 'Intermediate',
    readingTimeMinutes: 5,
    iconName: 'Activity',
    summary: 'The Inverse-Square Law states that observed flux drops with the square of the distance from the source, because spherical wavefronts spread their energy over area A = 4πd².',
    introduction: 'Why do distant streetlights look dim? Why does Pluto receive 1,600 times less sunlight than Earth? The answer lies in the simple 3D geometry of space: as light radiates outward from a source, it expands in an ever-growing spherical bubble, diluting its photon density with the square of the distance.',
    simpleExplanation: 'Imagine spreading a single pat of butter over one slice of toast. Now imagine trying to spread that same single pat of butter over nine slices of toast! The butter gets nine times thinner. When distance triples ($3\\times$), light spreads over $3^2 = 9$ times as much area, making it nine times dimmer.',
    howItWorks: [
      'Spherical Geometry: A source radiating luminosity $L$ uniformly in 3D space produces expanding spherical wavefronts with surface area $A = 4\\pi d^2$.',
      'The Formula: $F = \\frac{L}{4\\pi d^2}$, where $F$ is observed flux ($W/m^2$), $L$ is luminosity ($W$), and $d$ is distance ($m$).',
      'The Scaling Rule: If distance doubles ($2d$), flux drops to $1/2^2 = 1/4$. If distance triples ($3d$), flux drops to $1/3^2 = 1/9$. If distance increases tenfold ($10d$), flux drops to $1/10^2 = 1/100$!',
      'Cosmic Distance Measurement: If astronomers know the intrinsic luminosity ($L$) of an object (a standard candle, like a Cepheid or Type Ia supernova), measuring its apparent flux ($F$) directly yields its distance ($d = \\sqrt{L / 4\\pi F}$).'
    ],
    whyItMatters: [
      'The foundation of the cosmic distance ladder that allows humanity to measure the size and scale of the observable universe.',
      'Dictates planetary surface temperatures and the solar power available for interplanetary space probes.'
    ],
    terminology: [
      {
        term: 'Radiant Flux (F)',
        definition: 'The total radiant energy passing through a unit surface area per unit time, measured in Watts per square meter ($W/m^2$).'
      },
      {
        term: 'Wavefront',
        definition: 'An imaginary surface connecting all points of a wave that share the same phase of oscillation.'
      },
      {
        term: 'Standard Candle',
        definition: 'An astronomical source of known intrinsic luminosity, allowing distance to be solved via the Inverse-Square Law.'
      }
    ],
    facts: [
      'Because Jupiter is roughly 5.2 AU from the Sun, it receives $5.2^2 \\approx 27$ times less solar energy per square meter than Earth!',
      'The Voyager 1 spacecraft, currently over 160 AU from the Sun, receives $160^2 \\approx 25,600$ times less sunlight than Earth, requiring nuclear power (RTGs) instead of solar panels.'
    ],
    keyTakeaways: [
      'Observed flux drops with the square of the distance ($F \\propto 1/d^2$).',
      'Light spreads over a sphere with surface area $A = 4\\pi d^2$.',
      'Knowing an object’s luminosity allows distance to be calculated directly from measured flux.'
    ],
    vizType: 'inverse-square',
    vizTitle: 'Geometric Dilution & Inverse-Square Law Wavefront Simulator',
    vizDescription: 'Interactive demonstration showing how a packet of photons spreads across areas of $1d^2$, $4d^2$, and $9d^2$ as distance scales from 1 to 3.',
    skyverseBridge: {
      moduleId: 'quest',
      moduleName: 'Cosmic Brightness Quest',
      actionLabel: 'Solve the Inverse-Square Lab in Quest Level 5',
      description: 'Experiment with distance sliders and flux calculations in Cosmic Brightness Quest Level 5.'
    },
    quizQuestions: [
      {
        id: 'isl_q1',
        type: 'multiple-choice',
        difficulty: 'Beginner',
        question: 'What is the mathematical relationship between observed flux (F), luminosity (L), and distance (d)?',
        options: [
          '$F = L / (4\\pi d^2)$',
          '$F = L \\times d$',
          '$F = m c^2$',
          '$F = 4\\pi d^2 / L$'
        ],
        correctAnswerIndex: 0,
        explanation: 'Light spreads over a sphere of surface area $4\\pi d^2$, so observed flux is $F = L / (4\\pi d^2)$.',
        hint: 'Luminosity divided by the surface area of a sphere.'
      },
      {
        id: 'isl_q2',
        type: 'scenario',
        difficulty: 'Beginner',
        question: 'If you move a detector 4 times farther away from a glowing star, by what factor does the observed brightness decrease?',
        options: ['It drops to 1/4', 'It drops to 1/8', 'It drops to 1/16', 'It stays the exact same'],
        correctAnswerIndex: 2,
        explanation: 'By the Inverse-Square Law ($F \\propto 1/d^2$), quadrupling distance ($d = 4$) reduces flux by $4^2 = 16$ (it drops to 1/16th of its original value).',
        hint: 'Square the distance increase: $4^2$.'
      },
      {
        id: 'isl_q3',
        type: 'true-false',
        difficulty: 'Beginner',
        question: 'True or False: The Inverse-Square Law occurs because space absorbs light and destroys photons over distance.',
        options: ['True', 'False'],
        correctAnswerIndex: 1,
        explanation: 'False. In empty space, zero photons are destroyed. The dimming is purely geometric: the same total number of photons spreads out over a larger spherical surface area.',
        hint: 'Photons are not destroyed; they just spread out across more area.'
      },
      {
        id: 'isl_q4',
        type: 'scenario',
        difficulty: 'Intermediate',
        question: 'Mars orbits the Sun at approximately 1.5 AU. Roughly how much solar energy does one square meter on Mars receive compared to one square meter on Earth?',
        options: [
          'About 1.5 times as much',
          'About 1 / 1.5² = 1 / 2.25 (~44% as much)',
          'Exactly the same',
          'Zero solar energy'
        ],
        correctAnswerIndex: 1,
        explanation: 'Using $F \\propto 1/d^2$, at $d = 1.5$ AU, the solar flux is $1 / (1.5)^2 = 1 / 2.25 \\approx 44.4\\%$ of the flux received at Earth.',
        hint: 'Calculate $1 / (1.5 \\times 1.5)$.'
      },
      {
        id: 'isl_q5',
        type: 'scenario',
        difficulty: 'Advanced',
        question: 'An astronomer observes two identical pulsating stars (same luminosity L). Star 1 has a measured flux of 100 units. Star 2 has a measured flux of 1 unit. How much farther away is Star 2 than Star 1?',
        options: ['2 times farther', '10 times farther', '100 times farther', '1,000 times farther'],
        correctAnswerIndex: 1,
        explanation: 'Since flux drops with the square of distance ($F \\propto 1/d^2$), a flux ratio of 100:1 means the distance ratio is $\\sqrt{100} = 10$. Star 2 is 10 times farther away.',
        hint: 'Take the square root of 100.'
      }
    ]
  }
];

