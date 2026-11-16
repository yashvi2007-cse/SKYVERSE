# SKYVERSE — REST API Documentation

Base URL: `http://localhost:8000/api`

### Core Endpoints

#### 1. System Health
- **`GET /health`**
- Returns server status, version, and archive connection flags.

#### 2. Coordinate Validation
- **`GET /spherex/validate-coordinates?ra={ra}&dec={dec}&fov={fov}`**
- Parses decimal or sexagesimal input, returning standardized ICRS, Galactic, and Ecliptic values.

#### 3. SPHEREx Observations
- **`GET /spherex/observations?ra={ra}&dec={dec}&radius={radius}`**
- Queries official NASA/IPAC IRSA `spherex.obscore` records chronologically.

#### 4. SPHEREx Cutout
- **`GET /spherex/cutout?ra={ra}&dec={dec}&fov={fov}&band={band}&epoch_mjd={mjd}&stretch={stretch}`**
- Returns 2D scientific pixel matrix, WCS astrometric header, and flux statistics.

#### 5. Spectral Channels & Spectrum
- **`GET /spherex/channels`**: Catalog of 102 spectral channels.
- **`GET /spherex/channels/{channel_id}`**: Details for single spectral channel.
- **`GET /spherex/spectrum?ra={ra}&dec={dec}&aperture_radius_arcsec={r}`**: Extracts 102-channel infrared spectrum with uncertainties.

#### 6. Cosmic Time Machine Comparison
- **`POST /compare/epochs`**: Compares two epochs; computes WCS alignment, difference image, and dipole detection.

#### 7. Challenge Targets
- **`GET /targets`**: List all 5 NASA challenge benchmarks.
- **`GET /targets/{target_id}`**: Detailed astrophysical dossier and archive coverage.

#### 8. Gaia DR3 Cross-Match
- **`GET /gaia/reference?ra={ra}&dec={dec}&radius_arcsec={r}`**: Queries ESA Gaia DR3 for astrometric counterpart.

#### 9. Citizen Discovery Hub
- **`GET /candidates`**: Filter candidate reports by status/type.
- **`POST /candidates`**: Submit candidate report with auto-generated ID (`SKY-2026-XXXX`).
- **`PATCH /candidates/{candidate_id}/status`**: Reviewer workflow status update.

#### 10. NEOSSat Research
- **`GET /neossat/overview`**: CSA mission specifications.
- **`GET /neossat/data-products`**: RAW/CLEAN/COR/CORD definitions.
- **`GET /neossat/demo-frame?frame_type={type}`**: Educational demonstration frames.

