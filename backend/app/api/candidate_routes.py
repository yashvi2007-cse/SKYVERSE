"""
SKYVERSE - Citizen Discovery Hub & Investigation Workspace Routes
"""
import uuid
import time
from typing import Optional, List
from fastapi import APIRouter, HTTPException, Query

from app.database.db import get_db_connection
from app.schemas.api_models import (
    CandidateCreateRequest,
    CandidateStatusUpdateRequest,
    InvestigationSaveRequest
)

router = APIRouter(prefix="/api", tags=["Citizen Discovery & Investigations"])

@router.get("/candidates")
async def list_candidates(
    status: Optional[str] = Query(None),
    candidate_type: Optional[str] = Query(None)
):
    """Lists submitted citizen science candidate reports."""
    conn = await get_db_connection()
    try:
        query = "SELECT * FROM candidates WHERE 1=1"
        params = []
        if status:
            query += " AND review_status = ?"
            params.append(status)
        if candidate_type:
            query += " AND candidate_type = ?"
            params.append(candidate_type)
        query += " ORDER BY created_at DESC"
        
        cursor = await conn.execute(query, params)
        rows = await cursor.fetchall()
        
        candidates = []
        for r in rows:
            c = dict(r)
            # Fetch evidence count
            ev_cursor = await conn.execute(
                "SELECT COUNT(*) as count FROM candidate_evidence WHERE candidate_id = ?",
                (c["id"],)
            )
            ev_row = await ev_cursor.fetchone()
            c["evidence_count"] = ev_row["count"] if ev_row else 0
            candidates.append(c)
            
        return candidates
    finally:
        await conn.close()

@router.get("/candidates/{candidate_id}")
async def get_candidate(candidate_id: str):
    """Retrieves full candidate report with supporting evidence."""
    conn = await get_db_connection()
    try:
        cursor = await conn.execute(
            "SELECT * FROM candidates WHERE candidate_id = ? OR id = ?",
            (candidate_id, candidate_id)
        )
        row = await cursor.fetchone()
        if not row:
            raise HTTPException(status_code=404, detail=f"Candidate {candidate_id} not found.")
        
        c = dict(row)
        ev_cursor = await conn.execute(
            "SELECT * FROM candidate_evidence WHERE candidate_id = ? ORDER BY created_at ASC",
            (c["id"],)
        )
        ev_rows = await ev_cursor.fetchall()
        c["evidence"] = [dict(e) for e in ev_rows]
        return c
    finally:
        await conn.close()

@router.post("/candidates")
async def create_candidate(req: CandidateCreateRequest):
    """Submits a new candidate investigation to the Citizen Discovery Hub."""
    conn = await get_db_connection()
    try:
        cid = str(uuid.uuid4())
        # Generate human-friendly ID: SKY-2026-XXXX
        human_id = f"SKY-2026-{int(time.time() % 10000):04d}"
        
        await conn.execute("""
            INSERT INTO candidates (
                id, candidate_id, user_id, ra, dec, candidate_type,
                description, reason, review_status
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'Submitted')
        """, (
            cid, human_id, "usr_guest", req.ra, req.dec,
            req.candidate_type, req.description, req.reason
        ))

        # Add initial evidence record
        ev_id = str(uuid.uuid4())
        await conn.execute("""
            INSERT INTO candidate_evidence (
                id, candidate_id, observation_reference, evidence_description, image_url, evidence_type
            ) VALUES (?, ?, ?, ?, ?, 'time_domain_comparison')
        """, (
            ev_id, cid,
            ", ".join(req.observation_references) if req.observation_references else "SPHEREx Multi-Epoch",
            f"Candidate flagged at RA {req.ra}°, Dec {req.dec}°: {req.description}",
            req.evidence_image_url
        ))

        await conn.commit()
        return {
            "success": True,
            "id": cid,
            "candidate_id": human_id,
            "status": "Submitted",
            "message": "Candidate submitted successfully to community review queue."
        }
    finally:
        await conn.close()

@router.patch("/candidates/{candidate_id}/status")
async def update_candidate_status(candidate_id: str, req: CandidateStatusUpdateRequest):
    """Updates review workflow status (e.g. Under Review, Needs More Evidence, Reviewed)."""
    valid_statuses = ["Draft", "Submitted", "Under Review", "Needs More Evidence", "Reviewed", "Archived"]
    if req.review_status not in valid_statuses:
        raise HTTPException(status_code=400, detail=f"Invalid status '{req.review_status}'. Must be one of {valid_statuses}")

    conn = await get_db_connection()
    try:
        cursor = await conn.execute(
            "SELECT id FROM candidates WHERE candidate_id = ? OR id = ?",
            (candidate_id, candidate_id)
        )
        row = await cursor.fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="Candidate not found")

        db_id = row["id"]
        await conn.execute("""
            UPDATE candidates
            SET review_status = ?, reviewer_notes = COALESCE(?, reviewer_notes),
                review_score = COALESCE(?, review_score), updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        """, (req.review_status, req.reviewer_notes, req.review_score, db_id))
        await conn.commit()
        
        return {"success": True, "candidate_id": candidate_id, "new_status": req.review_status}
    finally:
        await conn.close()

@router.get("/investigations")
async def list_investigations():
    """Returns saved user investigations."""
    conn = await get_db_connection()
    try:
        cursor = await conn.execute(
            "SELECT * FROM investigations ORDER BY updated_at DESC LIMIT 20"
        )
        rows = await cursor.fetchall()
        return [dict(r) for r in rows]
    finally:
        await conn.close()

@router.post("/investigations")
async def save_investigation(req: InvestigationSaveRequest):
    """Saves a workspace investigation session for fast retrieval."""
    conn = await get_db_connection()
    try:
        inv_id = str(uuid.uuid4())
        await conn.execute("""
            INSERT INTO investigations (
                id, user_id, ra, dec, field_of_view, target_name, category, notes, tags
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            inv_id, "usr_guest", req.ra, req.dec, req.field_of_view,
            req.target_name, req.category, req.notes, req.tags
        ))
        await conn.commit()
        return {"success": True, "id": inv_id, "message": "Investigation saved to workspace."}
    finally:
        await conn.close()

