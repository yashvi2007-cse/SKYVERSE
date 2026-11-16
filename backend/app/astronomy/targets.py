"""
SKYVERSE - Challenge Targets Registry
Verified coordinates, astrophysical parameters, scientific objectives, and archival coverage.
"""
from typing import Dict, Any, List

CHALLENGE_TARGETS: Dict[str, Dict[str, Any]] = {
    "barnards_star": {
        "id": "barnards_star",
        "name": "Barnard's Star",
        "catalog_designation": "GJ 699 / HIP 87937",
        "category": "High Proper Motion Red Dwarf",
        "object_type": "Stellar Kinematics Prototype",
        "spectral_type": "M4.0V",
        "ra": 269.452084,
        "dec": 4.693390,
        "ra_hms": "17h 57m 48.50s",
        "dec_dms": "+04° 41' 36.2\"",
        "constellation": "Ophiuchus",
        "distance_ly": 5.96,
        "distance_pc": 1.83,
        "proper_motion": {
            "pm_ra_mas_yr": -798.58,
            "pm_dec_mas_yr": 10328.12,
            "total_pm_arcsec_yr": 10.358,
            "position_angle_deg": 355.57
        },
        "parallax_mas": 546.976,
        "scientific_objective": "Demonstrate extreme stellar proper motion across chronological epochs. At ~10.36 arcsec/year, Barnard's Star moves visibly across the focal plane over months of SPHEREx survey operations.",
        "scientific_significance": "Nearest solitary red dwarf to the Solar System. Benchmark system for high-cadence astrometric time-domain comparison and image differencing dipole verification.",
        "expected_phenomenon": "Motion dipole in difference imaging: clean positive and negative flux residuals along the trajectory direction (PA ≈ 355.6°).",
        "gaia_dr3_source_id": "4472832130942575872",
        "infrared_properties": "Dominant emission in SPHEREx Band 1 & Band 2 (0.75 - 1.65 µm) typical of mid-M dwarfs with FeH and H2O absorption bands."
    },
    "epsilon_indi_b": {
        "id": "epsilon_indi_b",
        "name": "Epsilon Indi B",
        "catalog_designation": "Eps Ind Ba,Bb / GJ 845B",
        "category": "Substellar Brown Dwarf Binary System",
        "object_type": "T-Dwarf Binary Prototype",
        "spectral_type": "T1 + T6",
        "ra": 331.044167,
        "dec": -56.786111,
        "ra_hms": "22h 04m 10.60s",
        "dec_dms": "-56° 47' 10.0\"",
        "constellation": "Indus",
        "distance_ly": 11.87,
        "distance_pc": 3.64,
        "proper_motion": {
            "pm_ra_mas_yr": 3961.4,
            "pm_dec_mas_yr": -2538.3,
            "total_pm_arcsec_yr": 4.705,
            "position_angle_deg": 122.6
        },
        "parallax_mas": 275.0,
        "scientific_objective": "Investigate the substellar brown dwarf binary system and analyze near-infrared methane (CH4) and water vapor absorption across the SPHEREx 102 spectral channels.",
        "scientific_significance": "One of the closest and best-studied brown dwarf systems. Demonstrates the transition between warm L-dwarfs and cool T-dwarfs characterized by strong 1.6 µm and 2.2 µm methane bands.",
        "expected_phenomenon": "Rapid spatial displacement (~4.7 arcsec/yr) coupled with deep spectral dips in SPHEREx Bands 2, 3, and 4 due to atmospheric CH4 and H2O absorption.",
        "gaia_dr3_source_id": "6412629636608558208",
        "infrared_properties": "High infrared contrast compared to optical; strong near-IR continuum peaking in J and H bands with deep atmospheric molecular absorption troughs."
    },
    "wise_0855": {
        "id": "wise_0855",
        "name": "WISE 0855-0714",
        "catalog_designation": "WISE J085510.83-071442.5",
        "category": "Ultra-Cold Sub-Stellar Brown Dwarf / Y-Dwarf",
        "object_type": "Substellar Extreme Motion Object",
        "spectral_type": "Y4",
        "ra": 133.795129,
        "dec": -7.245147,
        "ra_hms": "08h 55m 10.831s",
        "dec_dms": "-07° 14' 42.53\"",
        "constellation": "Hydra",
        "distance_ly": 7.53,
        "distance_pc": 2.31,
        "proper_motion": {
            "pm_ra_mas_yr": -8077.0,
            "pm_dec_mas_yr": 650.0,
            "total_pm_arcsec_yr": 8.103,
            "position_angle_deg": 274.6
        },
        "parallax_mas": 433.0,
        "scientific_objective": "Demonstrate fast-moving brown dwarf investigation and examine spectral energy distribution in cold substellar atmospheres (~250 K) with potential water ice clouds.",
        "scientific_significance": "Fourth closest known stellar or substellar system to the Sun and the coldest known brown dwarf. Extremely faint in optical and short near-IR; bright in 4.5 µm SPHEREx Band 6.",
        "expected_phenomenon": "Prominent displacement of ~8.1 arcsec/yr. Detectable primarily in SPHEREx Bands 5 & 6 (3.8-5.0 µm) with almost zero flux in Band 1.",
        "gaia_dr3_source_id": None, # Extremely cold Y dwarf, below Gaia optical detection threshold
        "infrared_properties": "Extreme infrared color (Band 6 / Band 1 > 100). Crucial test case for SPHEREx cold planetary ice band sensitivity."
    },
    "rw_aurigae": {
        "id": "rw_aurigae",
        "name": "RW Aurigae",
        "catalog_designation": "RW Aur / HIP 23873",
        "category": "Classical T Tauri Young Variable Star",
        "object_type": "Circumstellar Disk Variable",
        "spectral_type": "K3:e + K5:e",
        "ra": 76.956625,
        "dec": 30.401361,
        "ra_hms": "05h 07m 49.59s",
        "dec_dms": "+30° 24' 04.9\"",
        "constellation": "Auriga",
        "distance_ly": 532.0,
        "distance_pc": 163.0,
        "proper_motion": {
            "pm_ra_mas_yr": 1.25,
            "pm_dec_mas_yr": -19.46,
            "total_pm_arcsec_yr": 0.0195,
            "position_angle_deg": 176.3
        },
        "parallax_mas": 6.13,
        "scientific_objective": "Investigate brightness variability caused by dynamic circumstellar dust obscuration, tidal disruption of protoplanetary disks, and stellar accretion changes.",
        "scientific_significance": "Archetypal young pre-main sequence binary exhibiting prolonged, multi-magnitude dimming events believed to arise from disrupted circumstellar disk material passing through line of sight.",
        "expected_phenomenon": "Significant photometric flux changes across observation epochs with corresponding color variations in near-infrared dust emission.",
        "gaia_dr3_source_id": "167520021666498816",
        "infrared_properties": "Strong infrared excess from warm circumstellar dust grains in SPHEREx Bands 3 through 6 (1.65 - 5.0 µm)."
    },
    "r_draconis": {
        "id": "r_draconis",
        "name": "R Draconis",
        "catalog_designation": "R Dra / HD 149214",
        "category": "Mira-type Pulsating Long-Period Variable Star",
        "object_type": "Pulsating Asymptotic Giant Branch (AGB) Star",
        "spectral_type": "M5e-M9e",
        "ra": 248.167500,
        "dec": 66.755000,
        "ra_hms": "16h 32m 40.20s",
        "dec_dms": "+66° 45' 18.0\"",
        "constellation": "Draco",
        "distance_ly": 2140.0,
        "distance_pc": 656.0,
        "proper_motion": {
            "pm_ra_mas_yr": -8.12,
            "pm_dec_mas_yr": 12.44,
            "total_pm_arcsec_yr": 0.0148,
            "position_angle_deg": 326.9
        },
        "parallax_mas": 1.524,
        "scientific_objective": "Investigate large-amplitude infrared stellar pulsation, periodic radial velocity expansion, and mass-loss mechanisms in circumstellar envelope shells.",
        "scientific_significance": "Classic Mira variable with a period of ~245 days and visual magnitude amplitude exceeding 6 magnitudes. SPHEREx observes dramatic infrared continuum and molecular absorption variations.",
        "expected_phenomenon": "Large flux variation between different observation epochs with prominent CO and H2O spectral profile shifts.",
        "gaia_dr3_source_id": "1611311130635293440",
        "infrared_properties": "Enormously bright infrared source peaking in Bands 2 and 3, modulated by the 245-day pulsation cycle."
    }
}

def get_target(target_id: str) -> Dict[str, Any]:
    norm_id = target_id.lower().replace("-", "_").replace(" ", "_")
    if norm_id in CHALLENGE_TARGETS:
        return CHALLENGE_TARGETS[norm_id]
    raise KeyError(f"Target '{target_id}' not found in challenge registry.")

def list_targets() -> List[Dict[str, Any]]:
    return list(CHALLENGE_TARGETS.values())

