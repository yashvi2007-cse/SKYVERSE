"""
SKYVERSE - Gaia Mission Data Release 3 (DR3) API Routes
"""
from fastapi import APIRouter, Query, HTTPException
from app.astronomy.coordinates import parse_and_validate_coordinates
from app.services.gaia_service import query_gaia_dr3_counterpart

router = APIRouter(prefix="/api/gaia", tags=["Gaia DR3 Supporting Astrometry"])

@router.get("/reference")
async def get_gaia_reference(
    ra: float = Query(...),
    dec: float = Query(...),
    radius_arcsec: float = Query(5.0)
):
    """
    Searches for Gaia DR3 counterparts within radius_arcsec.
    Returns proper motion, parallax, optical photometry, and matching confidence.
    """
    val = parse_and_validate_coordinates(ra, dec)
    if not val["valid"]:
        raise HTTPException(status_code=400, detail=val["error"])

    result = await query_gaia_dr3_counterpart(
        ra=val["ra"],
        dec=val["dec"],
        match_radius_arcsec=radius_arcsec
    )
    return result

