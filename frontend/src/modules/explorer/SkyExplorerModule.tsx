import React, { useState, useEffect } from 'react';
import {
  Search,
  SlidersHorizontal,
  Info,
  Download,
  Database,
  Calendar,
  Layers,
  Sparkles,
  ChevronDown,
  RotateCw,
  FileText,
  X,
  AlertTriangle,
  Compass
} from 'lucide-react';
import { AstroCanvas } from '../../components/AstroCanvas';
import {
  CoordinateValidation,
  ObservationsResponse,
  CutoutResponse,
  ObservationRecord
} from '../../types/astronomy';
import {
  validateCoordinates,
  fetchObservations,
  fetchCutout
} from '../../services/api';

interface SkyExplorerModuleProps {
  currentCoords: { ra: number; dec: number; fov: number };
  onCoordsChange: (coords: { ra: number; dec: number; fov: number }) => void;
  onNavigateToTimeMachine?: () => void;
}

export const SkyExplorerModule: React.FC<SkyExplorerModuleProps> = ({
  currentCoords,
  onCoordsChange,
  onNavigateToTimeMachine
}) => {
  const [raInput, setRaInput] = useState(String(currentCoords.ra));
  const [decInput, setDecInput] = useState(String(currentCoords.dec));
  const [fov, setFov] = useState(currentCoords.fov);
  const [band, setBand] = useState(1);
  const [stretch, setStretch] = useState('asinh');
  const [colormap, setColormap] = useState<'magma' | 'infrared' | 'viridis' | 'grayscale'>('infrared');
  const [invertCmap, setInvertCmap] = useState(false);

  const [validation, setValidation] = useState<CoordinateValidation | null>(null);
  const [observations, setObservations] = useState<ObservationsResponse | null>(null);
  const [cutout, setCutout] = useState<CutoutResponse | null>(null);
  const [selectedObs, setSelectedObs] = useState<ObservationRecord | null>(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showFitsHeader, setShowFitsHeader] = useState(false);

  // Perform search
  const handleSearch = async (overrideRa?: number, overrideDec?: number) => {
    try {
      setLoading(true);
      setError(null);

      const targetRa = overrideRa !== undefined ? overrideRa : raInput;
      const targetDec = overrideDec !== undefined ? overrideDec : decInput;

      // 1. Validate coordinates
      const val = await validateCoordinates(targetRa, targetDec, fov);
      setValidation(val);

      if (!val.valid) {
        setError(val.error || 'Invalid coordinates entered.');
        setLoading(false);
        return;
      }

      onCoordsChange({ ra: val.ra, dec: val.dec, fov: val.fov });

      // 2. Query observations from NASA IRSA TAP
      const obsData = await fetchObservations(val.ra, val.dec, val.fov * 1.5);
      setObservations(obsData);

      const chosenEpoch = obsData.observations.length > 0
        ? obsData.observations[0].mjd_start
        : undefined;

      if (obsData.observations.length > 0) {
        setSelectedObs(obsData.observations[0]);
      }

      // 3. Fetch Cutout FITS
      const cutoutData = await fetchCutout(val.ra, val.dec, val.fov, band, chosenEpoch, stretch);
      setCutout(cutoutData);

    } catch (err: any) {
      setError(err.message || 'Failed to retrieve scientific data from IRSA.');
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    handleSearch(currentCoords.ra, currentCoords.dec);
  }, [band, stretch]);

  // Handle observation select
  const handleSelectObservation = async (obs: ObservationRecord) => {
    setSelectedObs(obs);
    setBand(obs.band);
    try {
      setLoading(true);
      const cutoutData = await fetchCutout(currentCoords.ra, currentCoords.dec, fov, obs.band, obs.mjd_start, stretch);
      setCutout(cutoutData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadFits = () => {
    if (!cutout) return;
    const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(cutout, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", jsonStr);
    dlAnchor.setAttribute("download", `SPHEREx_Cutout_RA${cutout.ra}_Dec${cutout.dec}_Band${cutout.band}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Controls Grid */}
      <div className="p-5 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
        <form
          onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 items-end"
        >
          {/* RA Input */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#94A3B8]">Right Ascension (RA)</label>
            <input
              type="text"
              value={raInput}
              onChange={(e) => setRaInput(e.target.value)}
              placeholder="133.795 or 08h55m"
              className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg px-3 py-2 text-xs font-mono text-[#F1F5F9] focus:outline-none focus:border-[#6C8CFF]"
            />
          </div>

          {/* Dec Input */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#94A3B8]">Declination (Dec)</label>
            <input
              type="text"
              value={decInput}
              onChange={(e) => setDecInput(e.target.value)}
              placeholder="-7.245 or -07d14'"
              className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg px-3 py-2 text-xs font-mono text-[#F1F5F9] focus:outline-none focus:border-[#6C8CFF]"
            />
          </div>

          {/* Field of View */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#94A3B8]">Field of View (FOV)</label>
            <select
              value={fov}
              onChange={(e) => setFov(Number(e.target.value))}
              className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg px-3 py-2 text-xs font-mono text-[#F1F5F9] focus:outline-none focus:border-[#6C8CFF]"
            >
              <option value={0.05}>0.05° (3' arcmin)</option>
              <option value={0.1}>0.10° (6' arcmin)</option>
              <option value={0.25}>0.25° (15' arcmin)</option>
              <option value={0.5}>0.50° (30' arcmin)</option>
              <option value={1.0}>1.00° (60' arcmin)</option>
            </select>
          </div>

          {/* Band Selector */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#94A3B8]">SPHEREx Band</label>
            <select
              value={band}
              onChange={(e) => setBand(Number(e.target.value))}
              className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg px-3 py-2 text-xs font-mono text-[#F1F5F9] focus:outline-none focus:border-[#6C8CFF]"
            >
              <option value={1}>Band 1 (0.75-1.12 µm, D1)</option>
              <option value={2}>Band 2 (1.12-1.65 µm, D2)</option>
              <option value={3}>Band 3 (1.65-2.42 µm, D3)</option>
              <option value={4}>Band 4 (2.42-3.82 µm, D4)</option>
              <option value={5}>Band 5 (3.82-4.42 µm, D5)</option>
              <option value={6}>Band 6 (4.42-5.00 µm, D6)</option>
            </select>
          </div>

          {/* Astronomical Stretch */}
          <div className="space-y-1">
            <label className="text-[11px] font-mono text-[#94A3B8]">Image Stretch</label>
            <select
              value={stretch}
              onChange={(e) => setStretch(e.target.value)}
              className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg px-3 py-2 text-xs font-mono text-[#F1F5F9] focus:outline-none focus:border-[#6C8CFF]"
            >
              <option value="asinh">asinh (Lupton et al.)</option>
              <option value="linear">Linear (0.5% - 99.5%)</option>
              <option value="sqrt">Square Root (sqrt)</option>
              <option value="log">Logarithmic</option>
            </select>
          </div>

          {/* Search Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6C8CFF] hover:bg-[#5A7AE6] text-[#080D18] font-bold py-2 px-4 rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition disabled:opacity-50"
          >
            {loading ? <RotateCw className="w-3.5 h-3.5 animate-spin" /> : <Search className="w-3.5 h-3.5" />}
            Retrieve
          </button>
        </form>

        {/* Coordinate Validation Banner */}
        {validation && validation.valid && (
          <div className="pt-2 border-t border-[#1E2D45] flex items-center justify-between text-xs text-[#94A3B8] font-mono flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#49D7E8]">ICRS (J2000):</span>
              <span>{validation.sexagesimal?.formatted}</span>
            </div>
            {validation.galactic && (
              <div className="flex items-center gap-2 text-[11px]">
                <span>Galactic: (l={validation.galactic.l}°, b={validation.galactic.b}°)</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Image Exploration Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Main Astronomical Canvas Viewer */}
        <div className="lg:col-span-2 space-y-3">
          <div className="p-4 rounded-2xl bg-[#0E1626] border border-[#1E2D45] space-y-3 shadow-xl">
            {/* Viewer Header */}
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold font-mono text-[#F1F5F9]">
                  SPHEREx {cutout?.band_name || `Band ${band}`}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded font-mono bg-[#49D7E8]/15 text-[#49D7E8]">
                  {cutout?.detector || 'D1'}
                </span>
                <span className="text-[10px] text-[#94A3B8] font-mono">
                  {cutout?.wavelength_range_um ? `${cutout.wavelength_range_um[0]} - ${cutout.wavelength_range_um[1]} µm` : ''}
                </span>
              </div>

              {/* Colormap & Display Options */}
              <div className="flex items-center gap-2">
                <select
                  value={colormap}
                  onChange={(e) => setColormap(e.target.value as any)}
                  className="bg-[#111C2E] border border-[#1E2D45] rounded text-[11px] font-mono text-[#94A3B8] px-2 py-1 focus:outline-none"
                >
                  <option value="infrared">Infrared Palette</option>
                  <option value="magma">Magma (Perceptual)</option>
                  <option value="viridis">Viridis</option>
                  <option value="grayscale">Grayscale</option>
                </select>

                <button
                  onClick={() => setShowFitsHeader(true)}
                  className="flex items-center gap-1 text-[11px] font-mono text-[#94A3B8] hover:text-[#F1F5F9] bg-[#111C2E] px-2.5 py-1 rounded border border-[#1E2D45] transition"
                  title="Inspect FITS WCS Header"
                >
                  <FileText className="w-3.5 h-3.5 text-[#6C8CFF]" />
                  FITS Header
                </button>

                <button
                  onClick={handleDownloadFits}
                  className="flex items-center gap-1 text-[11px] font-mono text-[#94A3B8] hover:text-[#F1F5F9] bg-[#111C2E] px-2.5 py-1 rounded border border-[#1E2D45] transition"
                  title="Download FITS Cutout JSON"
                >
                  <Download className="w-3.5 h-3.5 text-[#49D7E8]" />
                  Export
                </button>
              </div>
            </div>

            {/* Canvas Viewer Component */}
            <div className="h-[460px] w-full">
              {loading ? (
                <div className="w-full h-full rounded-xl bg-[#050811] border border-[#1E2D45] flex flex-col items-center justify-center gap-3 text-xs text-[#94A3B8] font-mono">
                  <RotateCw className="w-6 h-6 animate-spin text-[#6C8CFF]" />
                  <span>Processing NASA/IPAC SPHEREx Cutout...</span>
                </div>
              ) : cutout && cutout.pixels ? (
                <AstroCanvas
                  pixels={cutout.pixels}
                  wcs={cutout.wcs}
                  colormap={colormap}
                  invertColormap={invertCmap}
                />
              ) : (
                <div className="w-full h-full rounded-xl bg-[#050811] border border-[#1E2D45] flex flex-col items-center justify-center gap-2 text-xs text-[#94A3B8] font-mono">
                  <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
                  <span>No cutout data available for requested coordinate.</span>
                </div>
              )}
            </div>

            {/* Scientific Statistics Bar */}
            {cutout && cutout.statistics && (
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-[#1E2D45] text-[11px] font-mono text-[#94A3B8]">
                <div>
                  Min: <span className="text-[#F1F5F9]">{cutout.statistics.min_flux}</span> {cutout.statistics.unit}
                </div>
                <div>
                  Max: <span className="text-[#F1F5F9]">{cutout.statistics.max_flux}</span> {cutout.statistics.unit}
                </div>
                <div>
                  Median: <span className="text-[#F1F5F9]">{cutout.statistics.median_flux}</span>
                </div>
                <div>
                  Std Dev (σ): <span className="text-[#A78BFA]">{cutout.statistics.std_flux}</span>
                </div>
                <div>
                  Mean Noise: <span className="text-[#49D7E8]">±{cutout.statistics.mean_uncertainty}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Col: Available Observations Table & Time Machine Trigger */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-[#F1F5F9] flex items-center gap-2">
                <Database className="w-4 h-4 text-[#49D7E8]" />
                Available Observations
              </h3>
              <span className="text-xs font-mono text-[#94A3B8]">
                {observations?.total_records || 0} records
              </span>
            </div>

            <p className="text-xs text-[#94A3B8]">
              Select an observation record to load its authentic FITS cutout or launch comparison.
            </p>

            {/* Chronological Observation List */}
            <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
              {observations?.observations.map((obs) => {
                const isSelected = selectedObs?.obs_id === obs.obs_id;
                return (
                  <div
                    key={obs.obs_id}
                    onClick={() => handleSelectObservation(obs)}
                    className={`p-3 rounded-xl border text-xs transition cursor-pointer ${
                      isSelected
                        ? 'bg-[#1E2D45] border-[#49D7E8]/60 text-white shadow-sm'
                        : 'bg-[#111C2E] border-[#1E2D45] text-[#94A3B8] hover:border-[#2A3F60] hover:text-[#F1F5F9]'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono">
                      <span className="font-bold text-[#F1F5F9]">{obs.obs_id}</span>
                      <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#111C2E] text-[#49D7E8]">
                        Band {obs.band} ({obs.detector})
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-mono mt-1 text-[#94A3B8]">
                      <span>{obs.date_obs.split('T')[0]}</span>
                      <span>MJD {obs.mjd_start}</span>
                      <span>{obs.exposure_time_s}s</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Launch Time Machine Button */}
            {observations && observations.epochs_count >= 2 && onNavigateToTimeMachine && (
              <button
                onClick={onNavigateToTimeMachine}
                className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#6C8CFF] to-[#A78BFA] text-[#080D18] font-bold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-[#6C8CFF]/20 hover:opacity-95 transition"
              >
                <Layers className="w-4 h-4" />
                Open In Cosmic Time Machine ({observations.epochs_count} Epochs)
              </button>
            )}
          </div>
        </div>
      </div>

      {/* FITS WCS Metadata Modal */}
      {showFitsHeader && cutout && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0E1626] border border-[#1E2D45] rounded-2xl max-w-2xl w-full p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[#1E2D45] pb-3">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <FileText className="w-4 h-4 text-[#6C8CFF]" />
                SPHEREx Multi-Extension FITS Header (WCS & Metadata)
              </div>
              <button
                onClick={() => setShowFitsHeader(false)}
                className="p-1 rounded text-[#94A3B8] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 text-[#94A3B8]">
              <div className="bg-[#111C2E] p-3 rounded-lg border border-[#1E2D45] space-y-1">
                <div className="text-[#49D7E8] font-bold">PRIMARY ASTROMETRIC WCS</div>
                <div>CRVAL1 = {cutout.wcs.CRVAL1} (Reference RA in degrees)</div>
                <div>CRVAL2 = {cutout.wcs.CRVAL2} (Reference Dec in degrees)</div>
                <div>CRPIX1 = {cutout.wcs.CRPIX1} (X reference pixel)</div>
                <div>CRPIX2 = {cutout.wcs.CRPIX2} (Y reference pixel)</div>
                <div>CDELT1 = {cutout.wcs.CDELT1} (Pixel scale along RA)</div>
                <div>CDELT2 = {cutout.wcs.CDELT2} (Pixel scale along Dec)</div>
                <div>CTYPE1 = '{cutout.wcs.CTYPE1}' (TAN gnomonic projection)</div>
                <div>CTYPE2 = '{cutout.wcs.CTYPE2}' (TAN gnomonic projection)</div>
                <div>PIXSCALE = {cutout.wcs.PIXSCALE || 6.2} arcsec / pixel</div>
              </div>

              <div className="bg-[#111C2E] p-3 rounded-lg border border-[#1E2D45] space-y-1">
                <div className="text-[#A78BFA] font-bold">OBSERVATION & INSTRUMENT</div>
                <div>TELESCOP= 'NASA SPHEREx' / All-Sky Spectral Explorer</div>
                <div>INSTRUME= 'SPHEREx-LVF' / Linear Variable Filter Spectrometer</div>
                <div>DETECTOR= '{cutout.detector}' / Hawaii-2RG Near-IR Focal Plane</div>
                <div>BAND    = {cutout.band} / {cutout.band_name}</div>
                <div>DATE-OBS= '{cutout.date_obs}' / Observation Start</div>
                <div>MJD-OBS = {cutout.epoch_mjd} / Modified Julian Date</div>
                <div>BUNIT   = '{cutout.statistics.unit}' / Physical Flux Density Unit</div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowFitsHeader(false)}
                className="px-4 py-2 bg-[#1E2D45] hover:bg-[#2A3F60] text-white rounded-lg text-xs"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

