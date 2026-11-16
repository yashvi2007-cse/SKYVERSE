# SKYVERSE — Scientific Methodology & Processing Foundations

## 1. Coordinate Standards & Transformation
SKYVERSE implements rigorous coordinate parsing powered by Astropy's `SkyCoord` engine:
- Supports ICRS celestial coordinates in decimal degrees and sexagesimal format (e.g. `08h55m10.831s -07d14'42.53"`).
- Automatically calculates corresponding Galactic coordinates $(l, b)$ and Barycentric True Ecliptic coordinates $(\lambda, \beta)$.

## 2. SPHEREx 102 Near-Infrared Spectral Channels
The SPHEREx payload features 6 Hawaii-2RG detector arrays equipped with Linear Variable Filters (LVF):
- **Band 1 (D1)**: $0.75 - 1.12\ \mu m$ (17 channels, $R \approx 41.4$)
- **Band 2 (D2)**: $1.12 - 1.65\ \mu m$ (17 channels, $R \approx 41.4$)
- **Band 3 (D3)**: $1.65 - 2.42\ \mu m$ (17 channels, $R \approx 41.4$)
- **Band 4 (D4)**: $2.42 - 3.82\ \mu m$ (17 channels, $R \approx 35.0$)
- **Band 5 (D5)**: $3.82 - 4.42\ \mu m$ (17 channels, $R \approx 110.0$)
- **Band 6 (D6)**: $4.42 - 5.00\ \mu m$ (17 channels, $R \approx 130.0$)

Quick-look spectra are extracted from multi-band data products using circular aperture photometry. 102 channels represent simultaneous physical wavelength measurements, not independent time epochs.

## 3. Difference Imaging & Dipole Kinematics
Image subtraction is performed between chronological epochs $A$ and $B$:
$$D = I_B - I_A - \Delta_{\text{bg}}$$
Uncertainties are propagated from the variance extensions:
$$\sigma_D = \sqrt{\sigma_A^2 + \sigma_B^2}$$
Statistical significance is evaluated via Z-score:
$$S = \frac{D}{\sigma_D}$$
- Moving sources produce an adjacent **dipole** (paired positive and negative residual peaks separated along the trajectory).
- Photometric variable stars produce monochromatic flux changes without spatial displacement.

## 4. Astrometric Proper Motion & Gaia DR3 Matching
Gaia DR3 cross-matching uses a cone search radius ($\le 5.0''$). Positional agreement is classified as:
- **Likely Astrometric Counterpart**: separation $\le 1.2''$
- **Probable Counterpart**: separation $\le 3.0''$
- **Possible Positional Coincidence**: separation $> 3.0''$
- **No Counterpart Found**: target is below optical Gaia detection threshold ($G > 21$ mag), characteristic of ultra-cold Y-dwarfs like WISE 0855.

