"""
SKYVERSE - Comprehensive Scientific Verification Test Suite
Verifies all 5 NASA Challenge Targets, coordinate converters, WCS math,
102-channel spectral extractions, differencing dipole algorithms, and database records.
"""
import asyncio
from app.astronomy.coordinates import parse_and_validate_coordinates
from app.astronomy.spherex_bands import SPHEREX_CHANNELS, DETECTOR_CONFIG, get_channel_by_index
from app.astronomy.targets import CHALLENGE_TARGETS, get_target, list_targets
from app.services.spherex_service import query_spherex_observations, get_spherex_cutout
from app.processing.image_processor import process_comparison_epochs, compute_difference_image
from app.processing.spectrum_processor import extract_quicklook_spectrum
from app.services.gaia_service import query_gaia_dr3_counterpart
from app.services.neossat_service import generate_neossat_demonstration_frame
from app.database.db import init_db, get_db_connection

def test_coordinate_parsing_decimal():
    res = parse_and_validate_coordinates(133.795129, -7.245147)
    assert res["valid"] is True
    assert abs(res["ra"] - 133.795129) < 1e-4
    assert abs(res["dec"] - (-7.245147)) < 1e-4
    assert "08h 55m" in res["sexagesimal"]["formatted"]

def test_coordinate_parsing_sexagesimal():
    res = parse_and_validate_coordinates("08h55m10.831s", "-07d14'42.53\"")
    assert res["valid"] is True
    assert abs(res["ra"] - 133.7951) < 0.01
    assert abs(res["dec"] - (-7.2451)) < 0.01

def test_invalid_coordinates():
    res = parse_and_validate_coordinates("invalid_ra", 100.0)
    assert res["valid"] is False
    assert "error" in res

def test_spherex_102_channels():
    assert len(SPHEREX_CHANNELS) == 102
    assert len(DETECTOR_CONFIG) == 6
    # Channel 1: ~0.76 µm in Band 1
    ch1 = get_channel_by_index(1)
    assert ch1["band"] == 1
    assert ch1["detector"] == "D1"
    assert ch1["wavelength_min_um"] >= 0.75
    # Channel 102: ~4.98 µm in Band 6
    ch102 = get_channel_by_index(102)
    assert ch102["band"] == 6
    assert ch102["detector"] == "D6"
    assert ch102["wavelength_max_um"] <= 5.01

def test_all_5_challenge_targets_exist():
    target_ids = ["barnards_star", "epsilon_indi_b", "wise_0855", "rw_aurigae", "r_draconis"]
    targets = list_targets()
    assert len(targets) == 5
    for tid in target_ids:
        t = get_target(tid)
        assert t["name"] is not None
        assert 0.0 <= t["ra"] <= 360.0
        assert -90.0 <= t["dec"] <= 90.0
        assert t["scientific_objective"] is not None

def test_cutout_generation_and_wcs():
    async def run():
        res = await get_spherex_cutout(ra=133.7951, dec=-7.2451, fov_deg=0.1, band=1, stretch="asinh")
        assert res["success"] is True
        assert res["dimensions"] == [128, 128]
        assert "CRVAL1" in res["wcs"]
        assert len(res["pixels"]) == 128
        assert res["statistics"]["max_flux"] > res["statistics"]["min_flux"]
    asyncio.run(run())

def test_difference_imaging_and_dipole_detection():
    async def run():
        # WISE 0855 high proper motion between Epoch 1 (May 2025) and Epoch 2 (Nov 2025)
        res = await process_comparison_epochs(
            ra=133.7951, dec=-7.2451, fov_deg=0.1, band=5,
            epoch_a_mjd=60801.514, epoch_b_mjd=60986.376
        )
        assert res["success"] is True
        diff = res["difference"]
        assert "difference_pixels" in diff
        assert "scientific_interpretation" in diff
        assert diff["has_motion_dipole"] is True
    asyncio.run(run())

def test_spectrum_extraction():
    spec = extract_quicklook_spectrum(ra=133.7951, dec=-7.2451)
    assert spec["success"] is True
    assert spec["total_channels"] == 102
    assert len(spec["points"]) == 102
    assert spec["points"][0]["flux_mJy"] > 0

def test_neossat_demonstration():
    frame = generate_neossat_demonstration_frame("CORD")
    assert frame["frame_type"] == "CORD"
    assert frame["dimensions"] == [100, 100]
    assert len(frame["pixels"]) == 100

def test_database_initialization():
    async def run():
        await init_db()
        conn = await get_db_connection()
        try:
            cur = await conn.execute("SELECT name FROM sqlite_master WHERE type='table'")
            tables = [row[0] for row in await cur.fetchall()]
            assert "users" in tables
            assert "investigations" in tables
            assert "candidates" in tables
            assert "candidate_evidence" in tables
        finally:
            await conn.close()
    asyncio.run(run())

if __name__ == "__main__":
    test_coordinate_parsing_decimal()
    test_coordinate_parsing_sexagesimal()
    test_invalid_coordinates()
    test_spherex_102_channels()
    test_all_5_challenge_targets_exist()
    test_cutout_generation_and_wcs()
    test_difference_imaging_and_dipole_detection()
    test_spectrum_extraction()
    test_neossat_demonstration()
    test_database_initialization()
    print("ALL 10 SCIENTIFIC ENGINE TESTS PASSED SUCCESSFULLY!")
