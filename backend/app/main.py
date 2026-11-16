"""
SKYVERSE - Master FastAPI Backend Application
"""
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timezone

from app.database.db import init_db, get_db_connection
from app.api.spherex_routes import router as spherex_router
from app.api.compare_routes import router as compare_router
from app.api.target_routes import router as target_router
from app.api.gaia_routes import router as gaia_router
from app.api.candidate_routes import router as candidate_router
from app.api.neossat_routes import router as neossat_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup: Initialize SQLite database
    await init_db()
    # Seed sample realistic investigations if empty
    conn = await get_db_connection()
    try:
        cur = await conn.execute("SELECT COUNT(*) as count FROM candidates")
        row = await cur.fetchone()
        if row and row["count"] == 0:
            # Seed 2 realistic candidate investigations
            await conn.execute("""
                INSERT INTO candidates (
                    id, candidate_id, user_id, ra, dec, candidate_type,
                    description, reason, review_status, reviewer_notes, review_score
                ) VALUES
                ('seed_1', 'SKY-2026-0001', 'usr_guest', 133.7951, -7.2451, 'Possible Moving Object',
                 'High-significance moving infrared source with negligible optical counterpart in Gaia DR3.',
                 'Difference imaging reveals a prominent positive/negative dipole between May 2025 and Nov 2025 observations. High proper motion (~8 arcsec/yr) consistent with cold brown dwarf WISE 0855 field.',
                 'Reviewed', 'Confirmed authentic high-motion substellar candidate with SPHEREx Band 5/6 excess.', 9.4),
                ('seed_2', 'SKY-2026-0002', 'usr_guest', 76.9566, 30.4014, 'Possible Variable Object',
                 'Near-infrared photometric dimming of ~0.65 mag detected across 102 spectral channels.',
                 'SPHEREx Band 1-3 flux shows substantial drop between 2025W19 and 2025W45, accompanied by dust absorption excess in Band 4.',
                 'Under Review', 'Currently examining circumstellar disk obscuration model against archival photometry.', 8.1)
            """)
            await conn.commit()
    finally:
        await conn.close()
        
    yield
    # Shutdown

app = FastAPI(
    title="SKYVERSE API",
    description="Public-facing Astronomical Time-Domain & Spectral Exploration Platform Backend",
    version="1.0.0",
    lifespan=lifespan
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(spherex_router)
app.include_router(compare_router)
app.include_router(target_router)
app.include_router(gaia_router)
app.include_router(candidate_router)
app.include_router(neossat_router)

@app.get("/api/health")
async def health_check():
    """System health check and operational status."""
    return {
        "status": "healthy",
        "service": "SKYVERSE Astronomical Engine",
        "version": "1.0.0",
        "archive_connection": "NASA/IPAC IRSA (SPHEREx DR1)",
        "astrometric_reference": "ESA / Gaia DR3",
        "channels_supported": 102,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

