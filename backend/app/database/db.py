"""
SKYVERSE - Asynchronous SQLite Database Layer
Handles personal investigations, candidate submissions, review statuses, and evidence records.
"""
import os
import aiosqlite
import json
from typing import List, Dict, Any, Optional
from datetime import datetime

DATABASE_DIR = os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(__file__))), "data")
DATABASE_PATH = os.path.join(DATABASE_DIR, "skyverse.db")

async def init_db():
    os.makedirs(DATABASE_DIR, exist_ok=True)
    async with aiosqlite.connect(DATABASE_PATH) as db:
        await db.execute("PRAGMA foreign_keys = ON;")
        
        # Users table
        await db.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id TEXT PRIMARY KEY,
                username TEXT NOT NULL,
                email TEXT,
                role TEXT DEFAULT 'citizen_scientist',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """)

        # Default guest user
        await db.execute("""
            INSERT OR IGNORE INTO users (id, username, email, role)
            VALUES ('usr_guest', 'Citizen Astronomer', 'astronomer@skyverse.space', 'citizen_scientist');
        """)

        # Investigations table
        await db.execute("""
            CREATE TABLE IF NOT EXISTS investigations (
                id TEXT PRIMARY KEY,
                user_id TEXT NOT NULL,
                ra REAL NOT NULL,
                dec REAL NOT NULL,
                field_of_view REAL NOT NULL,
                target_name TEXT,
                category TEXT,
                notes TEXT,
                tags TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users (id)
            );
        """)

        # Observation references associated with investigations
        await db.execute("""
            CREATE TABLE IF NOT EXISTS observation_references (
                id TEXT PRIMARY KEY,
                investigation_id TEXT NOT NULL,
                archive_identifier TEXT NOT NULL,
                observation_time REAL NOT NULL,
                source_mission TEXT DEFAULT 'SPHEREx',
                band TEXT,
                calib_level INTEGER,
                access_url TEXT,
                metadata_json TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (investigation_id) REFERENCES investigations (id) ON DELETE CASCADE
            );
        """)

        # Candidates table for Citizen Discovery Hub
        await db.execute("""
            CREATE TABLE IF NOT EXISTS candidates (
                id TEXT PRIMARY KEY,
                candidate_id TEXT UNIQUE NOT NULL,
                user_id TEXT NOT NULL,
                investigation_id TEXT,
                ra REAL NOT NULL,
                dec REAL NOT NULL,
                candidate_type TEXT NOT NULL,
                description TEXT NOT NULL,
                reason TEXT NOT NULL,
                review_status TEXT DEFAULT 'Submitted',
                reviewer_notes TEXT,
                review_score REAL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (user_id) REFERENCES users (id)
            );
        """)

        # Supporting Candidate Evidence table
        await db.execute("""
            CREATE TABLE IF NOT EXISTS candidate_evidence (
                id TEXT PRIMARY KEY,
                candidate_id TEXT NOT NULL,
                observation_reference TEXT,
                evidence_description TEXT NOT NULL,
                image_url TEXT,
                evidence_type TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (candidate_id) REFERENCES candidates (id) ON DELETE CASCADE
            );
        """)
        
        await db.commit()

async def get_db_connection() -> aiosqlite.Connection:
    conn = await aiosqlite.connect(DATABASE_PATH)
    conn.row_factory = aiosqlite.Row
    await conn.execute("PRAGMA foreign_keys = ON;")
    return conn

