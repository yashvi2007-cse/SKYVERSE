# SKYVERSE — Astronomical Time-Domain & Spectral Exploration Platform

> **Explore the Changing Universe. Discover What Moves. Understand What Changes.**

SKYVERSE is a unified astronomical exploration platform providing public access to genuine NASA SPHEREx observations, multi-epoch astronomical comparisons, 102-channel infrared spectroscopy, Gaia DR3 astrometric cross-matching, and a citizen-science discovery workflow.
<img width="1672" height="941" alt="image" src="https://github.com/user-attachments/assets/8fadc80c-730a-42bb-b5ea-7e1534f5857c" />

---

## Key Features

1. **Mission Dashboard**: Real-time SPHEREx survey status, dynamically computed observation coverage, and quick-access challenge benchmarks.
2. **Sky Explorer**: Coordinate-based search (RA/Dec in decimal degrees or sexagesimal), field-of-view adjustment, authentic FITS cutouts, WCS header inspection, and multiple astronomical stretches (`asinh`, `linear`, `sqrt`, `log`).
3. **Cosmic Time Machine**:
   - **Mode 1 — Blink Comparator**: Rapid alternation between epochs with adjustable speed (ms).
   - **Mode 2 — Time-Lapse**: Chronological sequence stepping across multi-month observation passes.
   - **Mode 3 — Image Overlay**: Interactive 0-100% alpha opacity blending.
   - **Mode 4 — Difference View**: Background matching, noise propagation ($\sigma$), and automatic motion dipole detection.
   - **Mode 5 — Position Inspection**: Measure pixel separation, angular displacement ($\Delta\theta$), position angle (PA), and estimated proper motion.
4. **Spectral Intelligence Lab**:
   - Continuous 102 near-infrared spectral channels across 0.75 - 5.00 µm.
   - Interactive Plotly spectral energy distribution with 1-sigma uncertainty error bars.
   - Interstellar molecular absorption line identification ($H_2O$ ice, $CO_2$ ice, $CO$ ice, $CH_4$, PAH, Brackett-$\alpha$).
5. **Object Investigation Lab**:
   - Kinematics analysis, multi-epoch photometric light curve, and Gaia DR3 astrometric counterpart panel.
   - Preliminary classification: *Possible moving source*, *Possible variable source*, *No significant change*.
6. **Citizen Discovery Hub**:
   - Candidate submission workflow generating unique tracking IDs (`SKY-2026-XXXX`).
   - Reviewer workbench with workflow statuses: *Draft*, *Submitted*, *Under Review*, *Needs More Evidence*, *Reviewed*, *Archived*.
7. **Challenge Targets Gallery**: Verified datasets for Barnard's Star, Epsilon Indi B, WISE 0855, RW Aurigae, and R Draconis.
8. **NEOSSat Research & Learning**: Distinct educational module highlighting the CSA NEOSSat mission, CADC data products (RAW, CLEAN, COR, CORD), and synthetic asteroid streak tracking.

---

## Installation & Quickstart

### Prerequisites
- Python 3.10+
- Node.js 18+ and npm

### 1. Backend Setup
```bash
# Activate virtual environment
python3 -m venv .venv
source .venv/bin/activate

# Install backend dependencies
pip install -r backend/requirements.txt

# Run backend test suite
PYTHONPATH=backend python backend/tests/test_scientific_engine.py

# Start FastAPI backend server
PYTHONPATH=backend uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

### 2. Frontend Setup
```bash
cd frontend

# Install npm dependencies
npm install

# Start Vite dev server
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## Scientific Data Attribution

This publication makes use of data products from the Spectro-Photometer for the History of the Universe, Epoch of Reionization and Ices Explorer (SPHEREx), which is a joint project of the Jet Propulsion Laboratory and the California Institute of Technology, and is funded by the National Aeronautics and Space Administration. NASA does not endorse SKYVERSE.

