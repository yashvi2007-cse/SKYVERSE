"""
SKYVERSE - Pydantic Request & Response Data Schemas
"""
from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field

class CoordinateQueryRequest(BaseModel):
    ra: Any = Field(..., description="Right Ascension in decimal degrees or sexagesimal string")
    dec: Any = Field(..., description="Declination in decimal degrees or sexagesimal string")
    fov: Optional[float] = Field(0.1, description="Field of View in degrees (0.01 to 5.0)")

class CutoutRequest(BaseModel):
    ra: float
    dec: float
    fov_deg: Optional[float] = 0.1
    band: Optional[int] = 1
    epoch_mjd: Optional[float] = None
    stretch: Optional[str] = "asinh"

class CompareRequest(BaseModel):
    ra: float
    dec: float
    fov_deg: Optional[float] = 0.1
    band: Optional[int] = 1
    epoch_a_mjd: float
    epoch_b_mjd: float
    stretch: Optional[str] = "asinh"

class SpectrumRequest(BaseModel):
    ra: float
    dec: float
    aperture_radius_arcsec: Optional[float] = 6.2

class GaiaQueryRequest(BaseModel):
    ra: float
    dec: float
    radius_arcsec: Optional[float] = 5.0

class CandidateCreateRequest(BaseModel):
    ra: float
    dec: float
    candidate_type: str = Field(..., description="e.g. 'Possible Moving Object', 'Possible Variable Object', 'Unusual Infrared Source'")
    description: str
    reason: str
    target_name: Optional[str] = None
    evidence_image_url: Optional[str] = None
    observation_references: Optional[List[str]] = []

class CandidateStatusUpdateRequest(BaseModel):
    review_status: str = Field(..., description="'Draft', 'Submitted', 'Under Review', 'Needs More Evidence', 'Reviewed', 'Archived'")
    reviewer_notes: Optional[str] = None
    review_score: Optional[float] = None

class InvestigationSaveRequest(BaseModel):
    ra: float
    dec: float
    field_of_view: float = 0.1
    target_name: Optional[str] = None
    category: Optional[str] = None
    notes: Optional[str] = None
    tags: Optional[str] = None

