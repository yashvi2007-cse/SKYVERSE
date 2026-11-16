"""
SKYVERSE - Canadian Space Agency (CSA) NEOSSat Research & Educational Service
Provides educational context, CADC data product architectures (RAW/CLEAN/COR/CORD),
and comparative space situational awareness demonstrations clearly separated from SPHEREx.
"""
from typing import Dict, Any, List
import numpy as np

NEOSSAT_OVERVIEW = {
    "mission_name": "Near-Earth Object Surveillance Satellite (NEOSSat)",
    "agency": "Canadian Space Agency (CSA) & Defence Research and Development Canada (DRDC)",
    "orbit": "Sun-synchronous low Earth orbit (altitude ~785 km, inclination 98.6°)",
    "launch_date": "February 25, 2013",
    "telescope": "15-cm (f/5.88) Maksutov optical telescope",
    "detector": "Two 1024x1024 E2V CCDs (one for science, one for fine guiding)",
    "field_of_view_deg": 0.85,
    "primary_mandates": [
        "Planetary Defense: Tracking Aten, Apollo, and Amor Near-Earth Asteroids (NEOs) at low solar elongation.",
        "Space Situational Awareness (SSA): Detecting and orbit determination for resident space objects (satellites and orbital debris).",
        "Target of Opportunity Astronomy: High-precision stellar photometry and exoplanet transit monitoring."
    ]
}

DATA_PRODUCT_EXPLANATIONS = [
    {
        "code": "RAW",
        "name": "Raw Telemetry Image",
        "level": "Level 0",
        "bitpix": 16,
        "description": "Direct instrument readout converted to 16-bit uncalibrated FITS image. Retains raw digital counts (ADU), bias pedestal, dark current accumulation, and raw cosmic ray impacts.",
        "scientific_use": "Engineering evaluation and raw telemetry auditing. Not suitable for science without calibration."
    },
    {
        "code": "CLEAN",
        "name": "Dark & Bias Corrected",
        "level": "Level 1A",
        "bitpix": -32,
        "description": "Bias subtracted and dark frame subtracted using thermal model matching CCD temperature at acquisition. Converted to 32-bit floating point.",
        "scientific_use": "Intermediate calibration product for custom photometric pipelines."
    },
    {
        "code": "COR",
        "name": "Flat-Fielded & Astrometrically Calibrated",
        "level": "Level 1B",
        "bitpix": -32,
        "description": "Flat-fielded using on-orbit sky flats, bad pixel interpolated, cosmic rays flagged, and initial WCS astrometric plate solution applied.",
        "scientific_use": "Standard science product for stationary star photometry and reference imaging."
    },
    {
        "code": "CORD",
        "name": "Differenced / Track-Stacked Product",
        "level": "Level 2",
        "bitpix": -32,
        "description": "Background differenced or track-stacked image. Stationary stars are subtracted or trailed, leaving moving Near-Earth Asteroids and high-speed satellite streaks isolated.",
        "scientific_use": "Asteroid recovery, streak astrometry, and orbital track determination."
    }
]

COMPARATIVE_ANALYSIS = {
    "title": "SPHEREx vs. NEOSSat: Comparative Mission Architecture",
    "spherex": {
        "telescope": "20-cm all-reflective aluminum telescope",
        "detector": "6 H2RG NIR arrays with Linear Variable Filters (LVF)",
        "spectral_coverage": "0.75 - 5.00 µm (102 spectral channels)",
        "orbit": "650 km Sun-synchronous Polar Orbit",
        "primary_mission": "All-sky infrared cosmological survey, cosmic ices, galaxy formation",
        "time_domain": "6-month full sky revisit cadence"
    },
    "neossat": {
        "telescope": "15-cm Maksutov optical telescope",
        "detector": "Visible CCD (300 - 900 nm)",
        "spectral_coverage": "Broadband optical unfiltered (clear filter)",
        "orbit": "785 km Sun-synchronous Polar Dawn-Dusk Orbit",
        "primary_mission": "Targeted tracking of Near-Earth Objects & space debris",
        "time_domain": "Rapid re-pointing cadence (minutes to hours)"
    }
}

def generate_neossat_demonstration_frame(frame_type: str = "CORD") -> Dict[str, Any]:
    """Generates an educational demonstration frame representing CADC NEOSSat data products."""
    npix = 100
    rng = np.random.RandomState(42)
    
    if frame_type == "RAW":
        # Bias pedestal ~1000 ADU + read noise + hot pixels
        img = rng.normal(1000, 25, size=(npix, npix))
        # Add cosmic ray hits
        for _ in range(8):
            rx, ry = rng.randint(5, npix-5), rng.randint(5, npix-5)
            img[ry:ry+2, rx:rx+2] += rng.uniform(3000, 8000)
    elif frame_type == "CLEAN":
        # Dark subtracted, centered near zero
        img = rng.normal(15, 8, size=(npix, npix))
    elif frame_type == "COR":
        # Calibrated with stars
        img = rng.normal(5, 3, size=(npix, npix))
        y, x = np.ogrid[:npix, :npix]
        for sx, sy, flux in [(25, 30, 450), (70, 40, 600), (45, 75, 300)]:
            img += flux * np.exp(-((x - sx)**2 + (y - sy)**2) / 6.0)
    else: # CORD
        # Differenced frame: stationary stars cancelled out, streak visible!
        img = rng.normal(0, 2, size=(npix, npix))
        # Draw a synthetic asteroid streak from (20, 25) to (75, 80)
        for t in np.linspace(0, 1, 80):
            sx = int(20 + t * 55)
            sy = int(25 + t * 55)
            img[max(0, min(npix-1, sy)), max(0, min(npix-1, sx))] += 45.0

    # Normalize for display
    vmin, vmax = np.percentile(img, 1), np.percentile(img, 99)
    norm = np.clip((img - vmin) / max(1e-5, vmax - vmin), 0.0, 1.0)

    return {
        "frame_type": frame_type,
        "dimensions": [npix, npix],
        "pixels": [[round(float(p), 4) for p in row] for row in norm],
        "meta": next((d for d in DATA_PRODUCT_EXPLANATIONS if d["code"] == frame_type), None)
    }

