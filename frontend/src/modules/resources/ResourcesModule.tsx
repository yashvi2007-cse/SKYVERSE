import React from 'react';
import {
  BookOpen,
  ExternalLink,
  ShieldAlert,
  Database,
  Code2,
  Share2,
  FileText,
  Layers,
  Sparkles
} from 'lucide-react';

export const ResourcesModule: React.FC = () => {
  const resources = [
    {
      num: 1,
      title: 'NASA/IPAC Infrared Science Archive (IRSA)',
      url: 'https://irsa.ipac.caltech.edu/Missions/spherex.html',
      role: 'Primary Scientific Data Source',
      description: 'Hosts genuine SPHEREx Data Release 1 (DR1) and Quick Release (QR) multi-extension FITS spectral images, All-Sky Mosaic Cubes, and SIA2/TAP ObsCore interfaces.'
    },
    {
      num: 2,
      title: 'SPHEREx Tutorial Notebooks',
      url: 'https://caltech-ipac.github.io/irsa-tutorials/spherex/',
      role: 'Scientific Processing Reference',
      description: 'Technical foundation for multi-extension FITS reading, WCS astrometry interpretation, cutout generation, PSF inspection, and quick-look spectrum extraction.'
    },
    {
      num: 3,
      title: 'WISEView Time-Domain Viewer',
      url: 'http://byw.tools/wiseview',
      role: 'Interaction & Citizen-Science UX Reference',
      description: 'Inspiration for streamlined astronomical image blinking, chronological epoch stepping, and citizen-science volunteer moving-object visualization.'
    },
    {
      num: 4,
      title: 'Gaia Mission Data Release 3 (DR3)',
      url: 'https://archive.stsci.edu/missions-and-data/gaia',
      role: 'Supporting Astrometric Reference',
      description: 'Used for cross-matching optical counterparts, proper motion vector comparison, stellar parallax distances, and multi-band optical photometry (G, BP, RP).'
    },
    {
      num: 5,
      title: 'CSA NEOSSat Mission',
      url: 'https://www.asc-csa.gc.ca/eng/satellites/neossat/',
      role: 'Scientific Education & Moving-Object Reference',
      description: 'Reference for Canada\'s Near-Earth Object Surveillance Satellite, planetary defense asteroid tracking, and space situational awareness principles.'
    },
    {
      num: 6,
      title: 'Canadian Astronomy Data Centre (CADC)',
      url: 'https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/',
      role: 'Astronomical Archive Reference',
      description: 'Archival standards for NEOSSat RAW, CLEAN, COR, and CORD data product definitions and image calibration workflows.'
    },
    {
      num: 7,
      title: 'NEOSSat Python Tutorial',
      url: 'https://github.com/asc-csa/NEOSSAT_Tutorial',
      role: 'Python & Scientific Image Processing Reference',
      description: 'Methodology for astronomical FITS handling, dark/bias corrections, cosmic ray flagging, and scientific image handling.'
    },
    {
      num: 8,
      title: 'NEOSSat Open Dataset',
      url: 'https://data.asc-csa.gc.ca/dataset/neossat',
      role: 'Separate Educational Demonstration',
      description: 'Open data repository powering SKYVERSE\'s separate comparative space situational awareness educational module.'
    }
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-2">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-[#6C8CFF]" />
          Scientific Resources & Strict Data Policy
        </h2>
        <p className="text-xs text-[#94A3B8]">
          SKYVERSE is engineered exclusively with the eight official resources provided in the hackathon challenge. No unrelated external datasets or unverified catalogs are used.
        </p>
      </div>

      {/* Mandatory NASA Attribution & Non-Endorsement Notice */}
      <div className="p-5 rounded-2xl bg-[#111C2E] border border-[#6C8CFF]/30 space-y-3">
        <div className="flex items-center gap-2 text-sm font-bold text-[#F1F5F9]">
          <ShieldAlert className="w-4 h-4 text-[#F59E0B]" />
          Mandatory Scientific Attribution & Legal Disclaimer
        </div>
        <p className="text-xs text-[#94A3B8] italic leading-relaxed bg-[#0E1626] p-4 rounded-xl border border-[#1E2D45]">
          "This publication makes use of data products from the Spectro-Photometer for the History of the Universe, Epoch of Reionization and Ices Explorer (SPHEREx), which is a joint project of the Jet Propulsion Laboratory and the California Institute of Technology, and is funded by the National Aeronautics and Space Administration."
        </p>
        <p className="text-[11px] text-[#94A3B8]">
          <span className="text-white font-medium">Disclaimer:</span> NASA does not endorse SKYVERSE. SKYVERSE is an independent educational and research platform developed for open science exploration. All source attributions and data usage terms are strictly respected.
        </p>
      </div>

      {/* 8 Official Resources Grid */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white">The Eight Official Challenge Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources.map((res) => (
            <div
              key={res.num}
              className="p-5 rounded-2xl bg-[#0E1626] border border-[#1E2D45] space-y-3 shadow-md hover:border-[#2A3F60] transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-[#6C8CFF] uppercase tracking-wider">
                    Resource {res.num} • {res.role}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-1">{res.title}</h4>
                </div>
                <a
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-[#111C2E] text-[#94A3B8] hover:text-[#49D7E8] border border-[#1E2D45] transition"
                  title="Open Resource URL"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className="text-xs text-[#94A3B8] leading-relaxed">
                {res.description}
              </p>

              <div className="text-[11px] font-mono text-[#49D7E8] truncate">
                {res.url}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* URL Sharing Format Specification */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-3 font-mono text-xs">
        <div className="flex items-center gap-2 text-sm font-bold text-white">
          <Share2 className="w-4 h-4 text-[#A78BFA]" />
          Coordinate-Based URL Sharing Standard
        </div>
        <p className="text-[#94A3B8] leading-relaxed">
          SKYVERSE supports full state restoration from URL query parameters. Sharing a URL restores coordinates, field of view, active observation records, and comparison modes without requiring manual re-entry:
        </p>
        <div className="bg-[#111C2E] p-3 rounded-lg border border-[#1E2D45] text-[#49D7E8] break-all">
          https://skyverse.space/explore?ra=133.795129&dec=-7.245147&fov=0.1&band=5&module=time-machine
        </div>
      </div>
    </div>
  );
};

