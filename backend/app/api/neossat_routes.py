"""
SKYVERSE - Canadian Space Agency NEOSSat Research & Educational Routes
"""
from fastapi import APIRouter, Query
from app.services.neossat_service import (
    NEOSSAT_OVERVIEW,
    DATA_PRODUCT_EXPLANATIONS,
    COMPARATIVE_ANALYSIS,
    generate_neossat_demonstration_frame
)

router = APIRouter(prefix="/api/neossat", tags=["NEOSSat Research & Education"])

@router.get("/overview")
async def get_overview():
    """Returns mission architecture, mandates, and instrumentation."""
    return NEOSSAT_OVERVIEW

@router.get("/data-products")
async def get_data_products():
    """Explains CADC RAW, CLEAN, COR, and CORD data product definitions."""
    return DATA_PRODUCT_EXPLANATIONS

@router.get("/comparison")
async def get_comparison():
    """Provides comparative analysis: SPHEREx vs NEOSSat architectures."""
    return COMPARATIVE_ANALYSIS

@router.get("/demo-frame")
async def get_demo_frame(frame_type: str = Query("CORD", pattern="^(RAW|CLEAN|COR|CORD)$")):
    """Generates an educational demonstration frame for the requested CADC data product."""
    return generate_neossat_demonstration_frame(frame_type)
