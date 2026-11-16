"""
SKYVERSE - Cosmic Time Machine Comparison API Routes
"""
from fastapi import APIRouter, HTTPException
from app.astronomy.coordinates import parse_and_validate_coordinates
from app.processing.image_processor import process_comparison_epochs
from app.schemas.api_models import CompareRequest

router = APIRouter(prefix="/api/compare", tags=["Cosmic Time Machine"])

@router.post("/epochs")
async def compare_epochs(req: CompareRequest):
    """
    Compares two observation epochs:
    Generates aligned images, statistical differences, noise sigma levels, and dipole detection.
    """
    val = parse_and_validate_coordinates(req.ra, req.dec, req.fov_deg)
    if not val["valid"]:
        raise HTTPException(status_code=400, detail=val["error"])

    result = await process_comparison_epochs(
        ra=val["ra"],
        dec=val["dec"],
        fov_deg=val["fov"],
        band=req.band or 1,
        epoch_a_mjd=req.epoch_a_mjd,
        epoch_b_mjd=req.epoch_b_mjd,
        stretch=req.stretch or "asinh"
    )
    return result

@router.post("/blink")
async def prepare_blink(req: CompareRequest):
    """Alias for epoch comparison tailored for rapid client-side blinking."""
    return await compare_epochs(req)

@router.post("/difference")
async def compute_diff(req: CompareRequest):
    """Returns difference image diagnostics and residual source evaluation."""
    return await compare_epochs(req)

