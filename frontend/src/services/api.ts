import {
  CoordinateValidation,
  ObservationsResponse,
  CutoutResponse,
  ComparisonResponse,
  SpectrumResponse,
  GaiaResponse,
  ChallengeTarget,
  CandidateItem
} from '../types/astronomy';

const API_BASE = '/api';

export async function validateCoordinates(
  ra: string | number,
  dec: string | number = '',
  fov: number = 0.1
): Promise<CoordinateValidation> {
  const params = new URLSearchParams({
    ra: String(ra),
    dec: String(dec),
    fov: String(fov)
  });
  const res = await fetch(`${API_BASE}/spherex/validate-coordinates?${params}`);
  if (!res.ok) throw new Error('Coordinate validation failed');
  return res.json();
}

export async function fetchObservations(
  ra: number,
  dec: number,
  radius: number = 0.15
): Promise<ObservationsResponse> {
  const params = new URLSearchParams({
    ra: String(ra),
    dec: String(dec),
    radius: String(radius)
  });
  const res = await fetch(`${API_BASE}/spherex/observations?${params}`);
  if (!res.ok) throw new Error('Failed to retrieve SPHEREx observations');
  return res.json();
}

export async function fetchCutout(
  ra: number,
  dec: number,
  fov: number = 0.1,
  band: number = 1,
  epochMjd?: number,
  stretch: string = 'asinh'
): Promise<CutoutResponse> {
  const params = new URLSearchParams({
    ra: String(ra),
    dec: String(dec),
    fov: String(fov),
    band: String(band),
    stretch
  });
  if (epochMjd !== undefined) {
    params.set('epoch_mjd', String(epochMjd));
  }
  const res = await fetch(`${API_BASE}/spherex/cutout?${params}`);
  if (!res.ok) throw new Error('Failed to retrieve image cutout');
  return res.json();
}

export async function fetchComparison(
  ra: number,
  dec: number,
  fov: number,
  band: number,
  epochAMjd: number,
  epochBMjd: number,
  stretch: string = 'asinh'
): Promise<ComparisonResponse> {
  const res = await fetch(`${API_BASE}/compare/epochs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ra,
      dec,
      fov_deg: fov,
      band,
      epoch_a_mjd: epochAMjd,
      epoch_b_mjd: epochBMjd,
      stretch
    })
  });
  if (!res.ok) throw new Error('Epoch comparison processing failed');
  return res.json();
}

export async function fetchSpectrum(
  ra: number,
  dec: number,
  apertureRadiusArcsec: number = 6.2
): Promise<SpectrumResponse> {
  const params = new URLSearchParams({
    ra: String(ra),
    dec: String(dec),
    aperture_radius_arcsec: String(apertureRadiusArcsec)
  });
  const res = await fetch(`${API_BASE}/spherex/spectrum?${params}`);
  if (!res.ok) throw new Error('Spectrum extraction failed');
  return res.json();
}

export async function fetchGaiaReference(
  ra: number,
  dec: number,
  radiusArcsec: number = 5.0
): Promise<GaiaResponse> {
  const params = new URLSearchParams({
    ra: String(ra),
    dec: String(dec),
    radius_arcsec: String(radiusArcsec)
  });
  const res = await fetch(`${API_BASE}/gaia/reference?${params}`);
  if (!res.ok) throw new Error('Gaia DR3 cross-match failed');
  return res.json();
}

export async function fetchChallengeTargets(): Promise<ChallengeTarget[]> {
  const res = await fetch(`${API_BASE}/targets`);
  if (!res.ok) throw new Error('Failed to load challenge targets');
  return res.json();
}

export async function fetchTargetDetail(targetId: string): Promise<{ target: ChallengeTarget; archive_coverage: ObservationsResponse }> {
  const res = await fetch(`${API_BASE}/targets/${targetId}`);
  if (!res.ok) throw new Error(`Failed to load target ${targetId}`);
  return res.json();
}

export async function fetchCandidates(status?: string, type?: string): Promise<CandidateItem[]> {
  const params = new URLSearchParams();
  if (status) params.set('status', status);
  if (type) params.set('candidate_type', type);
  const res = await fetch(`${API_BASE}/candidates?${params}`);
  if (!res.ok) throw new Error('Failed to load candidates');
  return res.json();
}

export async function submitCandidate(payload: {
  ra: number;
  dec: number;
  candidate_type: string;
  description: string;
  reason: string;
  observation_references?: string[];
}): Promise<{ success: boolean; candidate_id: string; message: string }> {
  const res = await fetch(`${API_BASE}/candidates`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error('Failed to submit candidate');
  return res.json();
}

export async function updateCandidateStatus(
  candidateId: string,
  reviewStatus: string,
  reviewerNotes?: string,
  reviewScore?: number
): Promise<any> {
  const res = await fetch(`${API_BASE}/candidates/${candidateId}/status`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      review_status: reviewStatus,
      reviewer_notes: reviewerNotes,
      review_score: reviewScore
    })
  });
  if (!res.ok) throw new Error('Failed to update candidate review status');
  return res.json();
}

export async function fetchNeossatOverview(): Promise<any> {
  const res = await fetch(`${API_BASE}/neossat/overview`);
  if (!res.ok) throw new Error('Failed to load NEOSSat overview');
  return res.json();
}

export async function fetchNeossatDataProducts(): Promise<any[]> {
  const res = await fetch(`${API_BASE}/neossat/data-products`);
  if (!res.ok) throw new Error('Failed to load NEOSSat data products');
  return res.json();
}

export async function fetchNeossatDemoFrame(frameType: string = 'CORD'): Promise<any> {
  const res = await fetch(`${API_BASE}/neossat/demo-frame?frame_type=${frameType}`);
  if (!res.ok) throw new Error('Failed to load NEOSSat demonstration frame');
  return res.json();
}

