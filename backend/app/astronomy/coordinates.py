"""
SKYVERSE - Coordinate Validation and Conversion Utilities
Compliant with Astropy standards and IVOA coordinate guidelines.
"""
from typing import Dict, Any, Tuple, Optional
import math
from astropy.coordinates import SkyCoord, Angle
import astropy.units as u

def parse_and_validate_coordinates(
    ra_input: Any,
    dec_input: Any,
    fov_input: Optional[float] = 0.1
) -> Dict[str, Any]:
    """
    Validates and standardizes Right Ascension (RA) and Declination (Dec).
    Supports decimal degrees (float/int/str) and sexagesimal format strings:
    e.g. "08h55m10.831s", "-07d14'42.53"", "08:55:10.83 -07:14:42.5"
    """
    try:
        # Check if single string with both coordinates was passed in ra_input
        if isinstance(ra_input, str) and (dec_input is None or str(dec_input).strip() == ""):
            coord = SkyCoord(ra_input.strip(), unit=(u.hourangle, u.deg))
        else:
            ra_str = str(ra_input).strip()
            dec_str = str(dec_input).strip()
            
            # Check if decimal degrees
            is_decimal_ra = False
            try:
                ra_float = float(ra_str)
                is_decimal_ra = True
            except ValueError:
                is_decimal_ra = False

            is_decimal_dec = False
            try:
                dec_float = float(dec_str)
                is_decimal_dec = True
            except ValueError:
                is_decimal_dec = False

            if is_decimal_ra and is_decimal_dec:
                coord = SkyCoord(ra=ra_float * u.deg, dec=dec_float * u.deg, frame='icrs')
            else:
                # Sexagesimal parsing
                # If RA is in hours like "08h55m10s" or "08:55:10", treat accordingly
                if "h" in ra_str or ":" in ra_str or " " in ra_str:
                    ra_unit = u.hourangle
                else:
                    ra_unit = u.deg
                
                dec_unit = u.deg
                coord = SkyCoord(ra_str, dec_str, unit=(ra_unit, dec_unit), frame='icrs')

        ra_deg = float(coord.ra.deg)
        dec_deg = float(coord.dec.deg)

        # Coordinate boundary verification
        if not (0.0 <= ra_deg < 360.0):
            ra_deg = ra_deg % 360.0
        
        if not (-90.0 <= dec_deg <= 90.0):
            raise ValueError(f"Declination {dec_deg}° is outside physical boundary [-90°, +90°]")

        # Format sexagesimal string with padded zero
        ra_hms = str(coord.ra.to_string(unit=u.hourangle, sep=('h ', 'm ', 's'), precision=3, pad=True))
        dec_dms = str(coord.dec.to_string(unit=u.deg, sep=('° ', '\' ', '"'), precision=2, alwayssign=True, pad=True))

        # Compute Galactic and Ecliptic coordinates for astrophysical context
        galactic = coord.galactic
        ecliptic = coord.barycentrictrueecliptic

        # Validate Field of View (FOV)
        fov = float(fov_input) if fov_input is not None else 0.1
        if fov <= 0:
            fov = 0.1
        elif fov > 5.0:
            fov = 5.0  # Limit to 5 degrees to prevent massive archive payload

        return {
            "valid": True,
            "ra": round(ra_deg, 6),
            "dec": round(dec_deg, 6),
            "fov": round(fov, 4),
            "sexagesimal": {
                "ra_hms": ra_hms,
                "dec_dms": dec_dms,
                "formatted": f"{ra_hms}, {dec_dms}"
            },
            "galactic": {
                "l": round(float(galactic.l.deg), 4),
                "b": round(float(galactic.b.deg), 4)
            },
            "ecliptic": {
                "lon": round(float(ecliptic.lon.deg), 4),
                "lat": round(float(ecliptic.lat.deg), 4)
            },
            "frame": "ICRS",
            "equinox": "J2000.0"
        }
    except Exception as e:
        return {
            "valid": False,
            "error": f"Invalid coordinates '{ra_input}', '{dec_input}': {str(e)}",
            "ra": None,
            "dec": None,
            "fov": fov_input
        }
