"""
SKYVERSE - Challenge Targets API Routes
"""
from fastapi import APIRouter, HTTPException
from app.astronomy.targets import list_targets, get_target
from app.services.spherex_service import query_spherex_observations

router = APIRouter(prefix="/api/targets", tags=["Challenge Targets"])

@router.get("")
async def get_all_targets():
    """Returns the 5 NASA Challenge Targets with complete astrophysical metadata."""
    return list_targets()

@router.get("/{target_id}")
async def get_target_detail(target_id: str):
    """Returns details and verification records for a specific target."""
    try:
        t = get_target(target_id)
        # Also query coverage
        cov = await query_spherex_observations(ra=t["ra"], dec=t["dec"], radius_deg=0.15)
        return {
            "target": t,
            "archive_coverage": cov
        }
    except KeyError as e:
        raise HTTPException(status_code=404, detail=str(e))

