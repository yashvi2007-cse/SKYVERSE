"""
SKYVERSE - SPHEREx Observation & Spectral Image Routes
"""
from fastapi import APIRouter, Query, HTTPException
from typing import Optional

from app.astronomy.coordinates import parse_and_validate_coordinates
from app.astronomy.spherex_bands import SPHEREX_CHANNELS, DETECTOR_CONFIG, get_channel_by_index
from app.services.spherex_service import query_spherex_observations, get_spherex_cutout
from app.processing.spectrum_processor import extract_quicklook_spectrum
from app.schemas.api_models import CutoutRequest, SpectrumRequest

router = APIRouter(prefix="/api/spherex", tags=["SPHEREx Data Access"])

@router.get("/validate-coordinates")
async def validate_coords(
    ra: str = Query(..., description="RA in degrees or sexagesimal"),
    dec: str = Query("", description="Dec in degrees or sexagesimal"),
    fov: float = Query(0.1, description="Field of View in degrees")
):
    """Validates and formats celestial coordinates."""
    res = parse_and_validate_coordinates(ra, dec, fov)
    return res

@router.get("/observations")
async def get_observations(
    ra: float = Query(..., description="Right Ascension in decimal degrees"),
    dec: float = Query(..., description="Declination in decimal degrees"),
    radius: float = Query(0.15, description="Search radius in degrees"),
    max_records: int = Query(50, description="Max records to retrieve")
):
    """Queries official NASA/IPAC IRSA SPHEREx ObsCore records for coordinates."""
    val = parse_and_validate_coordinates(ra, dec)
    if not val["valid"]:
        raise HTTPException(status_code=400, detail=val["error"])
    
    obs = await query_spherex_observations(ra=val["ra"], dec=val["dec"], radius_deg=radius, max_records=max_records)
    return obs

@router.get("/cutout")
async def get_cutout(
    ra: float = Query(...),
    dec: float = Query(...),
    fov: float = Query(0.1),
    band: int = Query(1),
    epoch_mjd: Optional[float] = Query(None),
    stretch: str = Query("asinh")
):
    """Retrieves an authentic scientific SPHEREx image cutout matrix with WCS and statistics."""
    val = parse_and_validate_coordinates(ra, dec, fov)
    if not val["valid"]:
        raise HTTPException(status_code=400, detail=val["error"])

    cutout = await get_spherex_cutout(
        ra=val["ra"],
        dec=val["dec"],
        fov_deg=val["fov"],
        band=band,
        epoch_mjd=epoch_mjd,
        stretch=stretch
    )
    return cutout

@router.get("/channels")
async def get_spectral_channels():
    """Returns the full catalog of 102 SPHEREx near-infrared spectral channels across 0.75-5.0 µm."""
    return {
        "total_channels": len(SPHEREX_CHANNELS),
        "detectors": DETECTOR_CONFIG,
        "channels": SPHEREX_CHANNELS
    }

@router.get("/channels/{channel_id}")
async def get_channel_detail(channel_id: int):
    """Returns details for a single SPHEREx spectral channel."""
    try:
        return get_channel_by_index(channel_id)
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

@router.get("/spectrum")
async def get_spectrum(
    ra: float = Query(...),
    dec: float = Query(...),
    aperture_radius_arcsec: float = Query(6.2)
):
    """Extracts a quick-look 102-channel infrared spectrum for the given coordinates."""
    val = parse_and_validate_coordinates(ra, dec)
    if not val["valid"]:
        raise HTTPException(status_code=400, detail=val["error"])

    spec = extract_quicklook_spectrum(
        ra=val["ra"],
        dec=val["dec"],
        aperture_radius_arcsec=aperture_radius_arcsec
    )
    return spec

