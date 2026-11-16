import React, { useState, useEffect } from 'react';
import {
  Satellite,
  Info,
  ShieldCheck,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Activity
} from 'lucide-react';
import { AstroCanvas } from '../../components/AstroCanvas';
import {
  fetchNeossatOverview,
  fetchNeossatDataProducts,
  fetchNeossatDemoFrame
} from '../../services/api';

export const NeossatModule: React.FC = () => {
  const [overview, setOverview] = useState<any>(null);
  const [dataProducts, setDataProducts] = useState<any[]>([]);
  const [activeProduct, setActiveProduct] = useState<string>('CORD');
  const [demoFrame, setDemoFrame] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadNeossatData() {
      try {
        setLoading(true);
        const [ov, dp] = await Promise.all([
          fetchNeossatOverview(),
          fetchNeossatDataProducts()
        ]);
        setOverview(ov);
        setDataProducts(dp);
        const frame = await fetchNeossatDemoFrame('CORD');
        setDemoFrame(frame);
      } catch (err) {
        console.error('Error loading NEOSSat:', err);
      } finally {
        setLoading(false);
      }
    }
    loadNeossatData();
  }, []);

  const handleSelectProduct = async (code: string) => {
    setActiveProduct(code);
    try {
      const frame = await fetchNeossatDemoFrame(code);
      setDemoFrame(frame);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Strict Separation Notice */}
      <div className="p-4 rounded-xl bg-[#A78BFA]/10 border border-[#A78BFA]/30 flex items-center justify-between text-xs font-mono text-[#A78BFA] flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Satellite className="w-4 h-4" />
          <span className="font-bold">Comparative Research Notice:</span>
          <span className="text-[#94A3B8]">This educational module features the Canadian Space Agency NEOSSat mission. NEOSSat data is kept strictly segregated from NASA SPHEREx observations.</span>
        </div>
      </div>

      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-3">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Satellite className="w-5 h-5 text-[#A78BFA]" />
          NEOSSat Research & Learning (CSA)
        </h2>
        <p className="text-xs text-[#94A3B8] leading-relaxed">
          The Near-Earth Object Surveillance Satellite (NEOSSat) is Canada's dedicated microsatellite for tracking asteroids and resident space objects. Operating in low Earth orbit with an optical Maksutov telescope, its data products demonstrate space situational awareness and synthetic streak detection.
        </p>
      </div>

      {/* Mission Comparison Table: SPHEREx vs NEOSSat */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4">
        <h3 className="font-bold text-sm text-white flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#49D7E8]" />
          Comparative Mission Architecture: SPHEREx vs. NEOSSat
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-[#1E2D45] text-[#94A3B8]">
                <th className="pb-3 font-semibold">Parameter</th>
                <th className="pb-3 font-semibold text-[#6C8CFF]">NASA SPHEREx</th>
                <th className="pb-3 font-semibold text-[#A78BFA]">CSA NEOSSat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E2D45] text-[#F1F5F9]">
              <tr>
                <td className="py-2.5 text-[#94A3B8]">Telescope Optics</td>
                <td className="py-2.5">20-cm all-reflective aluminum</td>
                <td className="py-2.5">15-cm (f/5.88) Maksutov optical</td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#94A3B8]">Wavelength Bandpass</td>
                <td className="py-2.5 text-[#49D7E8]">0.75 - 5.00 µm (102 Near-IR Channels)</td>
                <td className="py-2.5 text-[#A78BFA]">300 - 900 nm (Broadband Optical)</td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#94A3B8]">Orbit</td>
                <td className="py-2.5">650 km Sun-synchronous Polar</td>
                <td className="py-2.5">785 km Sun-synchronous Polar (Dawn-Dusk)</td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#94A3B8]">Primary Objective</td>
                <td className="py-2.5">All-sky infrared cosmological & ice survey</td>
                <td className="py-2.5">Near-Earth asteroid tracking & orbital debris SSA</td>
              </tr>
              <tr>
                <td className="py-2.5 text-[#94A3B8]">Observation Cadence</td>
                <td className="py-2.5">6-month full-sky revisit cycle</td>
                <td className="py-2.5">Rapid re-pointing & streak-tracking (minutes)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* CADC Data Products Demonstration: RAW, CLEAN, COR, CORD */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-6">
        <div>
          <h3 className="font-bold text-sm text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F59E0B]" />
            CADC NEOSSat Data Products Pipeline (RAW / CLEAN / COR / CORD)
          </h3>
          <p className="text-xs text-[#94A3B8] mt-1">
            Explore the four sequential stages of calibration archived at the Canadian Astronomy Data Centre.
          </p>
        </div>

        {/* Product selector buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {dataProducts.map((p) => {
            const isSelected = p.code === activeProduct;
            return (
              <button
                key={p.code}
                onClick={() => handleSelectProduct(p.code)}
                className={`p-4 rounded-xl border text-left transition ${
                  isSelected
                    ? 'bg-[#1E2D45] border-[#A78BFA] shadow-lg shadow-[#A78BFA]/10'
                    : 'bg-[#111C2E] border-[#1E2D45] hover:border-[#2A3F60]'
                }`}
              >
                <div className="text-sm font-bold font-mono text-white flex items-center justify-between">
                  <span>{p.code}</span>
                  <span className="text-[10px] text-[#A78BFA]">{p.level}</span>
                </div>
                <div className="text-xs text-[#94A3B8] mt-1">{p.name}</div>
              </button>
            );
          })}
        </div>

        {/* Product Display & Demonstration Canvas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* Canvas */}
          <div className="h-[340px] w-full max-w-sm mx-auto">
            {demoFrame && demoFrame.pixels ? (
              <AstroCanvas
                pixels={demoFrame.pixels}
                colormap={activeProduct === 'CORD' ? 'coolwarm' : 'grayscale'}
                showCrosshair={true}
                showOrientation={false}
                showScale={false}
              />
            ) : (
              <div className="h-full bg-[#050811] rounded-xl flex items-center justify-center text-xs font-mono text-[#94A3B8]">
                Loading pipeline stage...
              </div>
            )}
          </div>

          {/* Pipeline Explanation */}
          <div className="space-y-4 text-xs font-mono">
            {demoFrame?.meta && (
              <div className="p-5 rounded-xl bg-[#111C2E] border border-[#1E2D45] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#A78BFA]">{demoFrame.meta.code} — {demoFrame.meta.name}</span>
                  <span className="text-[10px] text-[#94A3B8]">BITPIX = {demoFrame.meta.bitpix}</span>
                </div>

                <p className="text-[#94A3B8] leading-relaxed">
                  {demoFrame.meta.description}
                </p>

                <div className="pt-2 border-t border-[#1E2D45] text-[#49D7E8]">
                  <span className="font-bold">Scientific Application:</span> {demoFrame.meta.scientific_use}
                </div>
              </div>
            )}

            <div className="p-4 rounded-xl bg-[#0E1626] border border-[#1E2D45] text-[11px] text-[#94A3B8] leading-relaxed">
              <span className="text-white font-medium">Tracking Concept:</span> In CORD products, stationary field stars are removed through image differencing. Moving Near-Earth Asteroids (NEOs) or satellites produce distinct linear streaks revealing orbital velocity and trajectory.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

