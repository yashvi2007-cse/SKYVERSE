# SKYVERSE — Scientific Data Sources

SKYVERSE adheres strictly to the eight authorized resources specified in the challenge guidelines.

### 1. NASA/IPAC Infrared Science Archive (IRSA) — SPHEREx
- **URL**: `https://irsa.ipac.caltech.edu/Missions/spherex.html`
- **Protocol**: IVOA TAP (Table Access Protocol) via `https://irsa.ipac.caltech.edu/TAP/sync`
- **Table**: `spherex.obscore` (IVOA ObsCore standard)
- **Cutout Access**: IRSA Image-Based Environmental (IBE) Cutout Service
- **Products**: Level 2 Multi-Extension FITS spectral images and All-Sky Mosaic Cubes.

### 2. SPHEREx Tutorial Notebooks
- **URL**: `https://caltech-ipac.github.io/irsa-tutorials/spherex/`
- **Role**: Reference implementations for FITS inspection, multi-extension HDUs, WCS coordinate transformations, PSF characterization, and quick-look spectrum extraction.

### 3. WISEView
- **URL**: `http://byw.tools/wiseview`
- **Role**: Interaction and citizen-science user-experience paradigm for image blinking, epoch comparison, and moving-object detection.

### 4. Gaia Mission Data Release 3 (DR3)
- **URL**: `https://archive.stsci.edu/missions-and-data/gaia` / `https://gea.esac.esa.int/tap-server/tap`
- **Role**: Supporting astrometric catalog providing reference stellar positions, proper motion vectors ($\mu_\alpha \cos\delta, \mu_\delta$), parallaxes ($\varpi$), and optical magnitudes ($G, BP, RP$).

### 5. CSA NEOSSat Mission
- **URL**: `https://www.asc-csa.gc.ca/eng/satellites/neossat/`
- **Role**: Scientific education on Near-Earth Object tracking, space situational awareness, and asteroid search methodologies.

### 6. Canadian Astronomy Data Centre (CADC)
- **URL**: `https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/`
- **Role**: Archival definitions for NEOSSat data levels: RAW, CLEAN, COR, and CORD products.

### 7. NEOSSat Python Tutorial
- **URL**: `https://github.com/asc-csa/NEOSSAT_Tutorial`
- **Role**: Python image processing techniques, bias/dark subtraction, and cosmic-ray handling.

### 8. NEOSSat Open Dataset
- **URL**: `https://data.asc-csa.gc.ca/dataset/neossat`
- **Role**: Separate educational demonstration dataset.

