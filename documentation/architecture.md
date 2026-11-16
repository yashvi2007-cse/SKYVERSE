# SKYVERSE — System Architecture

## 1. High-Level Overview

**SKYVERSE** is an astronomical time-domain and spectral exploration platform engineered to interface with genuine NASA SPHEREx mission data products and ESA Gaia DR3 astrometric catalogs.

```
+---------------------------------------------------------------------------------+
|                                 FRONTEND (React 19 + TypeScript + Vite)         |
|  - AstroCanvas (2D astronomical FITS renderer with WCS & Colormaps)              |
|  - Module 1: Sky Explorer (Coordinate search, WCS inspection, Cutouts)           |
|  - Module 2: Cosmic Time Machine (Blink, Time-lapse, Overlay, Difference View)   |
|  - Module 3: Spectral Intelligence (102 Near-IR channels, Plotly spectra)       |
|  - Module 4: Object Investigation Lab (Kinematics, Light Curve, Gaia DR3)      |
|  - Module 5: Citizen Discovery Hub (Candidate submission, Review workflow)      |
|  - Module 6: Challenge Targets (5 NASA benchmarks)                              |
|  - Module 7: NEOSSat Research (CADC RAW/CLEAN/COR/CORD demonstration)           |
|  - Module 8: Resources & Documentation (IRSA, Notebooks, Citations)             |
+----------------------------------------+----------------------------------------+
                                         | REST API (JSON / Array Streams)
+----------------------------------------v----------------------------------------+
|                                  BACKEND (FastAPI + Python 3)                   |
|  - Coordinate Engine (Astropy SkyCoord, ICRS, Galactic, Ecliptic conversions)   |
|  - SPHEREx Service (IRSA ObsCore TAP & IBE Cutout Processor)                    |
|  - Time-Domain Processor (WCS Alignment, Difference Imaging, Dipole Detection)  |
|  - Spectral Processor (102 Channels, LVF Detector Bands D1-D6, Features)        |
|  - Gaia Service (ESA Gaia DR3 TAP Cross-matcher, Proper Motion, Parallax)       |
|  - NEOSSat Service (CADC Pipeline Modeling: RAW, CLEAN, COR, CORD)              |
|  - SQLite Storage (aiosqlite: Investigations, Candidates, Evidence)             |
+-------------------+--------------------+--------------------+-------------------+
                    |                    |                    |
        +-----------v----------+ +-------v-------+ +----------v----------+
        | NASA/IPAC IRSA       | | ESA Gaia DR3  | | CADC NEOSSat Archive|
        | - spherex.obscore    | | - TAP ADQL    | | - RAW/CLEAN/COR/CORD|
        | - IBE Cutouts        | | - Astrometry  | | - Orbital tracking  |
        +----------------------+ +---------------+ +---------------------+
```

## 2. Directory Layout

```
skyverse/
├── frontend/
│   ├── src/
│   │   ├── components/       # AstroCanvas, Modals, Sliders
│   │   ├── layouts/          # Sidebar, TopHeader, MainLayout
│   │   ├── modules/          # 8 Core Modules + NEOSSat
│   │   ├── services/         # API Client & Data fetchers
│   │   ├── types/            # TypeScript interfaces
│   │   └── index.css         # Tailwind CSS v4 styling
│   └── package.json
├── backend/
│   ├── app/
│   │   ├── api/              # FastAPI router endpoints
│   │   ├── astronomy/        # Coordinates, Bands, Target Registry
│   │   ├── database/         # aiosqlite connection & tables
│   │   ├── processing/       # Differencing, Dipoles, Spectra
│   │   ├── schemas/          # Pydantic models
│   │   ├── services/         # IRSA, Gaia, NEOSSat integrations
│   │   └── main.py           # Application entrypoint
│   ├── tests/                # Automated scientific test suite
│   └── requirements.txt
└── documentation/
```

