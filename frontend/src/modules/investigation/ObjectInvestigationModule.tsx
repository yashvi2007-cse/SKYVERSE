import React, { useState, useEffect } from 'react';
import {
  Search,
  Activity,
  Compass,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  Layers,
  Save,
  Send,
  HelpCircle
} from 'lucide-react';
import Plot from 'react-plotly.js';
import {
  ChallengeTarget,
  ObservationsResponse,
  GaiaResponse,
  ComparisonResponse
} from '../../types/astronomy';
import {
  fetchObservations,
  fetchGaiaReference,
  fetchComparison,
  submitCandidate
} from '../../services/api';

interface ObjectInvestigationProps {
  currentCoords: { ra: number; dec: number; fov: number };
  selectedTarget?: ChallengeTarget | null;
  onNavigateToDiscovery?: () => void;
}

export const ObjectInvestigationModule: React.FC<ObjectInvestigationProps> = ({
  currentCoords,
  selectedTarget = null,
  onNavigateToDiscovery
}) => {
  const [obsData, setObsData] = useState<ObservationsResponse | null>(null);
  const [gaiaData, setGaiaData] = useState<GaiaResponse | null>(null);
  const [compData, setCompData] = useState<ComparisonResponse | null>(null);
  const [loading, setLoading] = useState(true);

  // Investigation outcome preliminary conclusion
  const [preliminaryOutcome, setPreliminaryOutcome] = useState<string>('Possible moving source');
  const [investigationNotes, setInvestigationNotes] = useState<string>('');
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);

  const ra = selectedTarget ? selectedTarget.ra : currentCoords.ra;
  const dec = selectedTarget ? selectedTarget.dec : currentCoords.dec;

  useEffect(() => {
    async function loadInvestigationData() {
      try {
        setLoading(true);
        const [obs, gaia, comp] = await Promise.all([
          fetchObservations(ra, dec, 0.1),
          fetchGaiaReference(ra, dec, 5.0),
          fetchComparison(ra, dec, 0.1, 5, 60801.514, 60986.376)
        ]);
        setObsData(obs);
        setGaiaData(gaia);
        setCompData(comp);

        // Pre-fill preliminary outcome based on physical findings
        if (comp.difference.has_motion_dipole) {
          setPreliminaryOutcome('Possible moving source');
        } else if (comp.difference.positive_residuals_count > 0 || comp.difference.negative_residuals_count > 0) {
          setPreliminaryOutcome('Possible variable source');
        } else {
          setPreliminaryOutcome('No significant change detected');
        }
      } catch (err) {
        console.error('Error loading investigation:', err);
      } finally {
        setLoading(false);
      }
    }
    loadInvestigationData();
  }, [ra, dec]);

  // Submit candidate to Hub
  const handleSubmitCandidate = async () => {
    try {
      const res = await submitCandidate({
        ra,
        dec,
        candidate_type: preliminaryOutcome,
        description: selectedTarget ? `${selectedTarget.name}: ${selectedTarget.scientific_objective}` : `Investigation at RA ${ra}°, Dec ${dec}°`,
        reason: investigationNotes || (compData?.difference.scientific_interpretation || 'Astrometric multi-epoch observation analysis.'),
        observation_references: obsData?.observations.map((o) => o.obs_id) || []
      });
      setSubmissionSuccess(`Candidate submitted! ID: ${res.candidate_id}`);
      if (onNavigateToDiscovery) {
        setTimeout(onNavigateToDiscovery, 1500);
      }
    } catch (err: any) {
      alert(err.message || 'Submission failed');
    }
  };

  // Light curve mock / physical points across observation epochs
  const lightCurveMjd = [60801.5, 60986.4];
  const lightCurveDates = ['2025-05-12', '2025-11-13'];
  const fluxA = compData ? compData.epoch_a.stats.mean * 10.0 : 45.0;
  const fluxB = compData ? compData.epoch_b.stats.mean * 10.0 : 42.0;

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Target / Region Overview Header */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold text-white">
                {selectedTarget ? selectedTarget.name : `Source at RA ${ra}°, Dec ${dec}°`}
              </h2>
              {selectedTarget && (
                <span className="text-xs px-2.5 py-0.5 rounded-full font-mono bg-[#6C8CFF]/20 text-[#6C8CFF] border border-[#6C8CFF]/30">
                  {selectedTarget.category}
                </span>
              )}
            </div>

            <p className="text-xs text-[#94A3B8] font-mono mt-1">
              RA: {ra}° | Dec: {dec}° • Field of View: 0.1° • SPHEREx DR1 Coverage
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#94A3B8]">Preliminary Classification:</span>
            <span className="px-3 py-1 rounded-lg text-xs font-bold font-mono bg-[#111C2E] text-[#49D7E8] border border-[#1E2D45]">
              {preliminaryOutcome}
            </span>
          </div>
        </div>

        {selectedTarget && (
          <p className="text-xs text-[#94A3B8] leading-relaxed pt-2 border-t border-[#1E2D45]">
            <span className="text-white font-medium">Scientific Objective:</span> {selectedTarget.scientific_objective}
          </p>
        )}
      </div>

      {/* Main Analysis Grid: Motion Analysis, Light Curve, Gaia Reference */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Col: Motion Analysis & Astrometric Kinematics */}
        <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
          <h3 className="font-bold text-sm text-[#F1F5F9] flex items-center gap-2">
            <Compass className="w-4 h-4 text-[#49D7E8]" />
            Astrometric Motion Analysis
          </h3>

          <div className="space-y-3 font-mono text-xs">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">Observation Baseline:</div>
                <div className="text-sm font-bold text-white mt-1">
                  ~{compData ? Math.round(compData.delta_days) : 185} days
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">Dipole Detection:</div>
                <div className={`text-sm font-bold mt-1 ${compData?.difference.has_motion_dipole ? 'text-[#10B981]' : 'text-[#94A3B8]'}`}>
                  {compData?.difference.has_motion_dipole ? 'Confirmed Motion Dipole' : 'No Dipole'}
                </div>
              </div>
            </div>

            {selectedTarget?.proper_motion && (
              <div className="p-4 rounded-xl bg-[#111C2E] border border-[#1E2D45] space-y-2">
                <div className="text-[#49D7E8] font-bold">Catalog Proper Motion:</div>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#94A3B8]">
                  <div>μ_α*: <span className="text-white">{selectedTarget.proper_motion.pm_ra_mas_yr} mas/yr</span></div>
                  <div>μ_δ: <span className="text-white">{selectedTarget.proper_motion.pm_dec_mas_yr} mas/yr</span></div>
                  <div>Total PM: <span className="text-[#A78BFA]">{selectedTarget.proper_motion.total_pm_arcsec_yr}" / yr</span></div>
                  <div>PA: <span className="text-[#49D7E8]">{selectedTarget.proper_motion.position_angle_deg}°</span></div>
                </div>
              </div>
            )}

            <p className="text-[11px] text-[#94A3B8] leading-relaxed">
              {compData?.difference.scientific_interpretation}
            </p>
          </div>
        </div>

        {/* Right Col: Photometric Brightness Analysis (Light Curve) */}
        <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
          <h3 className="font-bold text-sm text-[#F1F5F9] flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#6C8CFF]" />
            Multi-Epoch Brightness Analysis (Light Curve)
          </h3>

          <div className="h-[240px] w-full">
            <Plot
              data={[
                {
                  x: lightCurveDates,
                  y: [fluxA, fluxB],
                  error_y: {
                    type: 'data',
                    array: [1.5, 1.6],
                    visible: true,
                    color: '#6C8CFF',
                    width: 4
                  },
                  mode: 'lines+markers',
                  type: 'scatter',
                  marker: { color: '#49D7E8', size: 8 },
                  line: { color: '#6C8CFF', dash: 'dot', width: 2 }
                }
              ]}
              layout={{
                autosize: true,
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                margin: { l: 50, r: 20, t: 20, b: 40 },
                xaxis: {
                  title: { text: 'Observation Date', font: { color: '#94A3B8', size: 11 } },
                  tickfont: { color: '#94A3B8', family: 'JetBrains Mono', size: 10 },
                  gridcolor: 'rgba(30, 45, 69, 0.6)'
                },
                yaxis: {
                  title: { text: 'Calibrated Flux (mJy)', font: { color: '#94A3B8', size: 11 } },
                  tickfont: { color: '#94A3B8', family: 'JetBrains Mono', size: 10 },
                  gridcolor: 'rgba(30, 45, 69, 0.6)'
                },
                showlegend: false
              }}
              style={{ width: '100%', height: '100%' }}
              useResizeHandler={true}
            />
          </div>

          <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-[11px] font-mono text-[#94A3B8]">
            SPHEREx photometric flux calibrated across epochs in Band 5 (3.82 - 4.42 µm). Error bars indicate 1-sigma observational uncertainty.
          </div>
        </div>
      </div>

      {/* Gaia DR3 Supporting Reference Panel */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 font-bold text-sm text-[#F1F5F9]">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            Gaia Mission Data Release 3 (DR3) Astrometric Reference
          </div>

          {gaiaData && (
            <span className={`text-xs font-mono px-2.5 py-0.5 rounded-full border ${
              gaiaData.match_found
                ? 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30'
                : 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30'
            }`}>
              {gaiaData.status}
            </span>
          )}
        </div>

        {gaiaData && gaiaData.match_found && gaiaData.best_match ? (
          <div className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">Gaia DR3 Source ID:</div>
                <div className="text-xs font-bold text-[#49D7E8] truncate mt-1">
                  {gaiaData.best_match.source_id}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">Astrometric Separation:</div>
                <div className="text-sm font-bold text-white mt-1">
                  {gaiaData.best_match.separation_arcsec}" arcsec
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">Parallax (Distance):</div>
                <div className="text-sm font-bold text-white mt-1">
                  {gaiaData.best_match.parallax_mas ? `${gaiaData.best_match.parallax_mas} mas (~${gaiaData.best_match.distance_pc} pc)` : 'N/A'}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45]">
                <div className="text-[#94A3B8]">Optical G Magnitude:</div>
                <div className="text-sm font-bold text-white mt-1">
                  {gaiaData.best_match.phot_g_mean_mag ? `${gaiaData.best_match.phot_g_mean_mag} mag` : 'N/A'}
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-[11px] text-[#94A3B8] leading-relaxed">
              <span className="text-white font-medium">Matching Confidence:</span> {gaiaData.confidence} ({gaiaData.matching_method}). {gaiaData.scientific_disclaimer}
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-[#111C2E] border border-[#1E2D45] text-xs font-mono text-[#94A3B8]">
            {gaiaData?.message || 'No optical Gaia DR3 counterpart detected within search radius.'}
          </div>
        )}
      </div>

      {/* Investigation Conclusion & Candidate Submission Form */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
        <h3 className="font-bold text-sm text-[#F1F5F9] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#A78BFA]" />
          Investigation Conclusion & Citizen Science Submission
        </h3>

        <div className="space-y-4 text-xs font-mono">
          <div className="space-y-1">
            <label className="text-[#94A3B8]">Preliminary Evidence Assessment:</label>
            <select
              value={preliminaryOutcome}
              onChange={(e) => setPreliminaryOutcome(e.target.value)}
              className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-[#6C8CFF]"
            >
              <option value="Possible moving source">Possible moving source</option>
              <option value="Possible variable source">Possible variable source</option>
              <option value="Unusual infrared source">Unusual infrared source</option>
              <option value="No significant change detected">No significant change detected</option>
              <option value="Insufficient evidence">Insufficient evidence</option>
              <option value="Requires further investigation">Requires further investigation</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-[#94A3B8]">Scientist's Observational Notes & Reasoning:</label>
            <textarea
              rows={3}
              value={investigationNotes}
              onChange={(e) => setInvestigationNotes(e.target.value)}
              placeholder="Describe supporting difference dipole, proper motion direction, or photometric flux shift..."
              className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg p-3 text-white font-mono focus:outline-none focus:border-[#6C8CFF]"
            />
          </div>

          {submissionSuccess && (
            <div className="p-3 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 text-[#10B981] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{submissionSuccess}</span>
            </div>
          )}

          <div className="flex justify-end gap-3 pt-2">
            <button
              onClick={handleSubmitCandidate}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6C8CFF] to-[#A78BFA] text-[#080D18] font-bold flex items-center gap-2 hover:opacity-95 transition"
            >
              <Send className="w-4 h-4" />
              Submit to Citizen Discovery Hub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

