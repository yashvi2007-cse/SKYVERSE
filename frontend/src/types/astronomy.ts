export interface CoordinateValidation {
  valid: boolean;
  ra: number;
  dec: number;
  fov: number;
  sexagesimal?: {
    ra_hms: string;
    dec_dms: string;
    formatted: string;
  };
  galactic?: {
    l: number;
    b: number;
  };
  ecliptic?: {
    lon: number;
    lat: number;
  };
  frame?: string;
  equinox?: string;
  error?: string;
}

export interface ObservationRecord {
  obs_id: string;
  dataproduct_type: string;
  calib_level: number;
  s_ra: number;
  s_dec: number;
  band: number;
  detector: string;
  wavelength_min_um: number;
  wavelength_max_um: number;
  mjd_start: number;
  mjd_end: number;
  date_obs: string;
  exposure_time_s: number;
  access_url?: string;
  target_name?: string;
  release_date?: string;
  data_rights?: string;
}

export interface ObservationEpoch {
  epoch_index: number;
  date: string;
  iso_date: string;
  mjd: number;
  observations_count: number;
  detectors: string[];
  bands: number[];
}

export interface ObservationsResponse {
  success: boolean;
  ra: number;
  dec: number;
  radius_deg: number;
  total_records: number;
  epochs_count: number;
  observations: ObservationRecord[];
  epochs: ObservationEpoch[];
  archive_source: string;
  query_timestamp?: string;
  message?: string;
}

export interface CutoutResponse {
  success: boolean;
  ra: number;
  dec: number;
  fov_deg: number;
  band: number;
  detector: string;
  band_name: string;
  wavelength_range_um: [number, number];
  epoch_mjd: number;
  date_obs: string;
  dimensions: [number, number];
  wcs: {
    CRVAL1: number;
    CRVAL2: number;
    CRPIX1: number;
    CRPIX2: number;
    CDELT1: number;
    CDELT2: number;
    CTYPE1: string;
    CTYPE2: string;
    CUNIT1?: string;
    CUNIT2?: string;
    NAXIS1?: number;
    NAXIS2?: number;
    PIXSCALE?: number;
    BUNIT?: string;
  };
  statistics: {
    min_flux: number;
    max_flux: number;
    mean_flux: number;
    median_flux: number;
    std_flux: number;
    mean_uncertainty: number;
    unit: string;
  };
  pixels: number[][];
  stretch_applied: string;
}

export interface ComparisonResponse {
  success: boolean;
  ra: number;
  dec: number;
  fov_deg: number;
  band: number;
  epoch_a: {
    mjd: number;
    date: string;
    pixels: number[][];
    stats: {
      mean: number;
      std: number;
    };
  };
  epoch_b: {
    mjd: number;
    date: string;
    pixels: number[][];
    stats: {
      mean: number;
      std: number;
    };
  };
  delta_days: number;
  difference: {
    difference_pixels: number[][];
    raw_diff_min: number;
    raw_diff_max: number;
    raw_diff_mean: number;
    max_positive_sigma: number;
    max_negative_sigma: number;
    positive_residuals_count: number;
    negative_residuals_count: number;
    has_motion_dipole: boolean;
    dipole_separation_pix: number;
    scientific_interpretation: string;
  };
  wcs: Record<string, any>;
}

export interface SpectralPoint {
  channel: number;
  band: number;
  detector: string;
  wavelength_um: number;
  wavelength_min_um: number;
  wavelength_max_um: number;
  resolving_power: number;
  flux_mJy: number;
  uncertainty_mJy: number;
  snr: number;
  quality_flag: number;
  features: string[];
}

export interface SpectrumResponse {
  success: boolean;
  ra: number;
  dec: number;
  aperture_radius_arcsec: number;
  total_channels: number;
  wavelength_range_um: [number, number];
  spectrum_type: string;
  methodology_note: string;
  peak_flux: {
    channel: number;
    wavelength_um: number;
    flux_mJy: number;
    band: number;
    detector: string;
  };
  points: SpectralPoint[];
  reference_features: Array<{
    name: string;
    wavelength: number;
    type: string;
    category: string;
  }>;
}

export interface GaiaCandidate {
  source_id: string;
  ra: number;
  dec: number;
  separation_arcsec: number;
  parallax_mas?: number;
  parallax_error_mas?: number;
  distance_pc?: number;
  pmra_mas_yr?: number;
  pmra_error_mas_yr?: number;
  pmdec_mas_yr?: number;
  pmdec_error_mas_yr?: number;
  total_pm_mas_yr?: number;
  phot_g_mean_mag?: number;
  phot_bp_mean_mag?: number;
  phot_rp_mean_mag?: number;
  bp_rp_color?: number;
  radial_velocity_km_s?: number;
}

export interface GaiaResponse {
  match_found: boolean;
  status: string;
  confidence?: string;
  matching_method?: string;
  scientific_disclaimer?: string;
  best_match?: GaiaCandidate;
  candidates_count?: number;
  candidates?: GaiaCandidate[];
  message?: string;
}

export interface ChallengeTarget {
  id: string;
  name: string;
  catalog_designation: string;
  category: string;
  object_type: string;
  spectral_type: string;
  ra: number;
  dec: number;
  ra_hms: string;
  dec_dms: string;
  constellation: string;
  distance_ly: number;
  distance_pc: number;
  proper_motion: {
    pm_ra_mas_yr: number;
    pm_dec_mas_yr: number;
    total_pm_arcsec_yr: number;
    position_angle_deg: number;
  };
  parallax_mas: number;
  scientific_objective: string;
  scientific_significance: string;
  expected_phenomenon: string;
  gaia_dr3_source_id?: string;
  infrared_properties: string;
}

export interface CandidateItem {
  id: string;
  candidate_id: string;
  user_id: string;
  investigation_id?: string;
  ra: number;
  dec: number;
  candidate_type: string;
  description: string;
  reason: string;
  review_status: string;
  reviewer_notes?: string;
  review_score?: number;
  created_at: string;
  updated_at?: string;
  evidence_count?: number;
  evidence?: any[];
}

