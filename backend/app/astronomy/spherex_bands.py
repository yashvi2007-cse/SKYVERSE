"""
SKYVERSE - SPHEREx 102 Near-Infrared Spectral Channels Specification
Based on the NASA SPHEREx Explanatory Supplement and Caltech/IPAC IRSA specifications.
"""
from typing import List, Dict, Any
import numpy as np

# Detector configuration: 6 Hawaii-2RG (H2RG) focal plane detector arrays with Linear Variable Filters (LVF)
DETECTOR_CONFIG = [
    {
        "detector": "D1",
        "band": 1,
        "name": "Band 1 (0.75 - 1.12 µm)",
        "min_wavelength": 0.75,
        "max_wavelength": 1.12,
        "channels_count": 17,
        "res_power": 41.4,
        "primary_science": "Galaxy redshift z~0.1-0.5, stellar classification, Paschen series",
        "description": "Shortest near-IR band covering the 0.75-1.12 µm window, sensitive to low-redshift galaxy spectra and warm stellar photospheres."
    },
    {
        "detector": "D2",
        "band": 2,
        "name": "Band 2 (1.12 - 1.65 µm)",
        "min_wavelength": 1.12,
        "max_wavelength": 1.65,
        "channels_count": 17,
        "res_power": 41.4,
        "primary_science": "Galaxy redshift z~0.5-1.0, J-band stellar features, Paschen-beta",
        "description": "Covers astronomical J and H-band transition, sensitive to intermediate redshift galaxies and brown dwarf water vapor absorption."
    },
    {
        "detector": "D3",
        "band": 3,
        "name": "Band 3 (1.65 - 2.42 µm)",
        "min_wavelength": 1.65,
        "max_wavelength": 2.42,
        "channels_count": 17,
        "res_power": 41.4,
        "primary_science": "H-band and K-band, Paschen-alpha (1.875 µm), CO overtone (2.3 µm)",
        "description": "Spans the standard astronomical K-band atmospheric window, detecting interstellar ices and molecular hydrogen emission."
    },
    {
        "detector": "D4",
        "band": 4,
        "name": "Band 4 (2.42 - 3.82 µm)",
        "min_wavelength": 2.42,
        "max_wavelength": 3.82,
        "channels_count": 17,
        "res_power": 35.0,
        "primary_science": "Interstellar H2O ice (3.05 µm), CH4 ice (3.32 µm), PAH (3.3 µm)",
        "description": "Crucial planetary ice band sensitive to water ice grains in dense molecular clouds and protoplanetary disks."
    },
    {
        "detector": "D5",
        "band": 5,
        "name": "Band 5 (3.82 - 4.42 µm)",
        "min_wavelength": 3.82,
        "max_wavelength": 4.42,
        "channels_count": 17,
        "res_power": 110.0,
        "primary_science": "High-resolution CO2 ice (4.27 µm), Brackett-alpha (4.05 µm)",
        "description": "High resolving power (R~110) band engineered for precise interstellar CO2 ice absorption profiling and ionizing gas diagnostics."
    },
    {
        "detector": "D6",
        "band": 6,
        "name": "Band 6 (4.42 - 5.00 µm)",
        "min_wavelength": 4.42,
        "max_wavelength": 5.00,
        "channels_count": 17,
        "res_power": 130.0,
        "primary_science": "Highest resolution CO ice (4.67 µm), gas-phase CO fundamental",
        "description": "Longest wavelength band with highest resolving power (R~130), mapping carbon monoxide ice evolution and cold circumstellar matter."
    }
]

# Key astronomical spectral features in the SPHEREx bandpass (0.75 - 5.0 µm)
SPECTRAL_FEATURES = [
    {"name": "Paschen-beta (H I)", "wavelength": 1.282, "type": "atomic", "category": "Hydrogen recombination"},
    {"name": "Paschen-alpha (H I)", "wavelength": 1.875, "type": "atomic", "category": "Hydrogen recombination"},
    {"name": "H2 (1-0 S(1))", "wavelength": 2.122, "type": "molecular", "category": "Shocked molecular gas"},
    {"name": "CO first overtone", "wavelength": 2.293, "type": "molecular", "category": "Stellar atmosphere / disk"},
    {"name": "H2O ice absorption", "wavelength": 3.050, "type": "ice", "category": "Interstellar / Circumstellar Ice"},
    {"name": "PAH emission", "wavelength": 3.300, "type": "dust", "category": "Polycyclic Aromatic Hydrocarbons"},
    {"name": "CH4 (Methane) ice", "wavelength": 3.320, "type": "ice", "category": "Volatile Ices"},
    {"name": "Brackett-alpha (H I)", "wavelength": 4.052, "type": "atomic", "category": "Hydrogen recombination"},
    {"name": "CO2 ice absorption", "wavelength": 4.267, "type": "ice", "category": "Interstellar / Circumstellar Ice"},
    {"name": "CO gas-phase fundamental", "wavelength": 4.667, "type": "molecular", "category": "Cold Molecular Clouds"},
    {"name": "CO ice absorption", "wavelength": 4.674, "type": "ice", "category": "Volatile Ices"}
]

def generate_102_channels() -> List[Dict[str, Any]]:
    """Generates the full list of 102 SPHEREx near-infrared spectral channels."""
    channels = []
    channel_index = 1
    
    for det in DETECTOR_CONFIG:
        # In an LVF, lambda varies linearly across the array
        w_min = det["min_wavelength"]
        w_max = det["max_wavelength"]
        n_ch = det["channels_count"]
        r_power = det["res_power"]
        
        # Calculate step
        dw = (w_max - w_min) / n_ch
        
        for i in range(n_ch):
            lambda_center = w_min + (i + 0.5) * dw
            lambda_start = w_min + i * dw
            lambda_end = w_min + (i + 1) * dw
            delta_lambda = dw
            
            # Identify any closely matched scientific features within channel passband
            matched_features = [
                f["name"] for f in SPECTRAL_FEATURES
                if lambda_start <= f["wavelength"] <= lambda_end
            ]
            
            channels.append({
                "channel": channel_index,
                "detector": det["detector"],
                "band": det["band"],
                "wavelength_um": round(float(lambda_center), 4),
                "wavelength_min_um": round(float(lambda_start), 4),
                "wavelength_max_um": round(float(lambda_end), 4),
                "delta_wavelength_um": round(float(delta_lambda), 4),
                "resolving_power": r_power,
                "features": matched_features,
                "band_name": det["name"]
            })
            channel_index += 1
            
    return channels

SPHEREX_CHANNELS = generate_102_channels()

def get_channel_by_index(channel_id: int) -> Dict[str, Any]:
    if 1 <= channel_id <= 102:
        return SPHEREX_CHANNELS[channel_id - 1]
    raise ValueError(f"Channel {channel_id} out of range [1, 102]")

def get_channel_by_wavelength(wavelength_um: float) -> Dict[str, Any]:
    for ch in SPHEREX_CHANNELS:
        if ch["wavelength_min_um"] <= wavelength_um <= ch["wavelength_max_um"]:
            return ch
    # Fallback to closest
    diffs = [abs(ch["wavelength_um"] - wavelength_um) for ch in SPHEREX_CHANNELS]
    min_idx = int(np.argmin(diffs))
    return SPHEREX_CHANNELS[min_idx]

