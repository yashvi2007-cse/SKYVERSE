import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Plus,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  Archive,
  Eye,
  FileCheck,
  Send,
  MessageSquare,
  ChevronRight,
  X
} from 'lucide-react';
import { CandidateItem } from '../../types/astronomy';
import { fetchCandidates, submitCandidate, updateCandidateStatus } from '../../services/api';

interface CitizenDiscoveryProps {
  onOpenCoordinate?: (ra: number, dec: number) => void;
}

export const CitizenDiscoveryModule: React.FC<CitizenDiscoveryProps> = ({
  onOpenCoordinate
}) => {
  const [candidates, setCandidates] = useState<CandidateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateItem | null>(null);

  // New candidate modal state
  const [showNewModal, setShowNewModal] = useState(false);
  const [newRa, setNewRa] = useState('');
  const [newDec, setNewDec] = useState('');
  const [newType, setNewType] = useState('Possible Moving Object');
  const [newDesc, setNewDesc] = useState('');
  const [newReason, setNewReason] = useState('');

  // Reviewer state
  const [reviewerNotes, setReviewerNotes] = useState('');
  const [reviewScore, setReviewScore] = useState(8.5);

  const loadCandidates = async () => {
    try {
      setLoading(true);
      const data = await fetchCandidates(
        statusFilter === 'ALL' ? undefined : statusFilter
      );
      setCandidates(data);
    } catch (err) {
      console.error('Error fetching candidates:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCandidates();
  }, [statusFilter]);

  const handleCreateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRa || !newDec || !newDesc || !newReason) {
      alert('Please complete all required candidate fields.');
      return;
    }
    try {
      await submitCandidate({
        ra: Number(newRa),
        dec: Number(newDec),
        candidate_type: newType,
        description: newDesc,
        reason: newReason
      });
      setShowNewModal(false);
      setNewRa('');
      setNewDec('');
      setNewDesc('');
      setNewReason('');
      loadCandidates();
    } catch (err: any) {
      alert(err.message || 'Submission failed');
    }
  };

  const handleUpdateStatus = async (newStatus: string) => {
    if (!selectedCandidate) return;
    try {
      await updateCandidateStatus(selectedCandidate.candidate_id, newStatus, reviewerNotes, reviewScore);
      setSelectedCandidate((prev) => prev ? { ...prev, review_status: newStatus, reviewer_notes: reviewerNotes, review_score: reviewScore } : null);
      loadCandidates();
    } catch (err: any) {
      alert(err.message || 'Status update failed');
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Reviewed':
        return 'bg-[#10B981]/20 text-[#10B981] border-[#10B981]/40';
      case 'Under Review':
        return 'bg-[#6C8CFF]/20 text-[#6C8CFF] border-[#6C8CFF]/40';
      case 'Needs More Evidence':
        return 'bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/40';
      case 'Archived':
        return 'bg-[#94A3B8]/20 text-[#94A3B8] border-[#94A3B8]/40';
      default: // Submitted
        return 'bg-[#49D7E8]/20 text-[#49D7E8] border-[#49D7E8]/40';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Discovery Hub Header */}
      <div className="p-6 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#A78BFA]" />
            Citizen Discovery Hub
          </h2>
          <p className="text-xs text-[#94A3B8] mt-1">
            Community-driven time-domain astronomical investigation workflow. Submit, evaluate, and peer-review candidates.
          </p>
        </div>

        <button
          onClick={() => setShowNewModal(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#6C8CFF] to-[#A78BFA] text-[#080D18] font-bold text-xs font-mono shadow-lg hover:opacity-95 transition"
        >
          <Plus className="w-4 h-4" />
          Submit New Candidate
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-mono">
        {['ALL', 'Submitted', 'Under Review', 'Needs More Evidence', 'Reviewed', 'Archived'].map((st) => (
          <button
            key={st}
            onClick={() => setStatusFilter(st)}
            className={`px-3 py-1.5 rounded-xl border transition whitespace-nowrap ${
              statusFilter === st
                ? 'bg-[#1E2D45] text-white border-[#6C8CFF] font-bold'
                : 'bg-[#111C2E] text-[#94A3B8] border-[#1E2D45] hover:text-white'
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Candidate List & Detail Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Candidate Cards */}
        <div className="lg:col-span-2 space-y-3">
          {loading ? (
            <div className="p-12 text-center font-mono text-xs text-[#94A3B8]">
              Loading candidate registry...
            </div>
          ) : candidates.length === 0 ? (
            <div className="p-12 text-center font-mono text-xs text-[#94A3B8] bg-[#0E1626] rounded-2xl border border-[#1E2D45]">
              No candidates found matching the selected filter.
            </div>
          ) : (
            candidates.map((cand) => (
              <div
                key={cand.id}
                onClick={() => setSelectedCandidate(cand)}
                className={`p-5 rounded-2xl bg-[#0E1626] border transition cursor-pointer space-y-3 shadow-md ${
                  selectedCandidate?.id === cand.id
                    ? 'border-[#6C8CFF] shadow-lg shadow-[#6C8CFF]/10'
                    : 'border-[#1E2D45] hover:border-[#2A3F60]'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold font-mono text-sm text-[#F1F5F9]">{cand.candidate_id}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono border ${getStatusBadge(cand.review_status)}`}>
                        {cand.review_status}
                      </span>
                    </div>
                    <div className="text-xs text-[#49D7E8] font-mono">
                      {cand.candidate_type} • RA {cand.ra}° | Dec {cand.dec}°
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-[#94A3B8]">
                    {cand.created_at.split(' ')[0]}
                  </span>
                </div>

                <p className="text-xs text-[#94A3B8] line-clamp-2 leading-relaxed">
                  {cand.description}
                </p>

                <div className="pt-2 border-t border-[#1E2D45] flex items-center justify-between text-[11px] font-mono text-[#94A3B8]">
                  <span>Evidence records: {cand.evidence_count || 1}</span>
                  {cand.review_score && (
                    <span className="text-[#10B981] font-bold">Review Score: {cand.review_score}/10</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Col: Candidate Inspector & Reviewer Workbench */}
        <div className="space-y-4">
          {selectedCandidate ? (
            <div className="p-5 rounded-2xl bg-[#0E1626] border border-[#1E2D45] shadow-xl space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between border-b border-[#1E2D45] pb-3">
                <span className="font-bold text-sm text-white">{selectedCandidate.candidate_id}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border ${getStatusBadge(selectedCandidate.review_status)}`}>
                  {selectedCandidate.review_status}
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-[#94A3B8]">Coordinates:</div>
                  <div className="text-white font-bold mt-0.5">
                    RA: {selectedCandidate.ra}°, Dec: {selectedCandidate.dec}°
                  </div>
                </div>

                <div>
                  <div className="text-[#94A3B8]">Category:</div>
                  <div className="text-[#49D7E8] font-bold mt-0.5">{selectedCandidate.candidate_type}</div>
                </div>

                <div>
                  <div className="text-[#94A3B8]">Description:</div>
                  <div className="text-white bg-[#111C2E] p-2.5 rounded-lg border border-[#1E2D45] mt-1 leading-relaxed">
                    {selectedCandidate.description}
                  </div>
                </div>

                <div>
                  <div className="text-[#94A3B8]">Reason for Submission:</div>
                  <div className="text-[#94A3B8] bg-[#111C2E] p-2.5 rounded-lg border border-[#1E2D45] mt-1 leading-relaxed">
                    {selectedCandidate.reason}
                  </div>
                </div>

                {selectedCandidate.reviewer_notes && (
                  <div className="p-3 rounded-lg bg-[#111C2E] border border-[#10B981]/30 text-[#10B981] space-y-1">
                    <div className="font-bold">Reviewer Assessment:</div>
                    <div>{selectedCandidate.reviewer_notes}</div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-[#1E2D45]">
                {onOpenCoordinate && (
                  <button
                    onClick={() => onOpenCoordinate(selectedCandidate.ra, selectedCandidate.dec)}
                    className="w-full py-2 bg-[#1E2D45] hover:bg-[#2A3F60] text-white rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5"
                  >
                    Open Coordinates in Sky Explorer <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {/* Reviewer Action Bar */}
                <div className="pt-2 space-y-2">
                  <div className="text-[11px] text-[#94A3B8]">Update Workflow Status:</div>
                  <div className="grid grid-cols-2 gap-1.5">
                    <button
                      onClick={() => handleUpdateStatus('Under Review')}
                      className="py-1 px-2 bg-[#111C2E] hover:bg-[#6C8CFF]/20 text-[#6C8CFF] rounded border border-[#1E2D45] text-[10px]"
                    >
                      Under Review
                    </button>
                    <button
                      onClick={() => handleUpdateStatus('Needs More Evidence')}
                      className="py-1 px-2 bg-[#111C2E] hover:bg-[#F59E0B]/20 text-[#F59E0B] rounded border border-[#1E2D45] text-[10px]"
                    >
                      Needs Evidence
                    </button>
                    <button
                      onClick={() => handleUpdateStatus('Reviewed')}
                      className="py-1 px-2 bg-[#111C2E] hover:bg-[#10B981]/20 text-[#10B981] rounded border border-[#1E2D45] text-[10px]"
                    >
                      Mark Reviewed
                    </button>
                    <button
                      onClick={() => handleUpdateStatus('Archived')}
                      className="py-1 px-2 bg-[#111C2E] hover:bg-[#94A3B8]/20 text-[#94A3B8] rounded border border-[#1E2D45] text-[10px]"
                    >
                      Archive
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[#0E1626] border border-[#1E2D45] text-center text-xs font-mono text-[#94A3B8]">
              Select a candidate report to inspect evidence and peer review status.
            </div>
          )}
        </div>
      </div>

      {/* New Candidate Submission Modal */}
      {showNewModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0E1626] border border-[#1E2D45] rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[#1E2D45] pb-3">
              <span className="font-bold text-sm text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#A78BFA]" />
                Submit Candidate Investigation
              </span>
              <button
                onClick={() => setShowNewModal(false)}
                className="p-1 rounded text-[#94A3B8] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[#94A3B8]">RA (degrees):</label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={newRa}
                    onChange={(e) => setNewRa(e.target.value)}
                    placeholder="133.795"
                    className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg p-2 text-white focus:outline-none focus:border-[#6C8CFF]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[#94A3B8]">Dec (degrees):</label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={newDec}
                    onChange={(e) => setNewDec(e.target.value)}
                    placeholder="-7.245"
                    className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg p-2 text-white focus:outline-none focus:border-[#6C8CFF]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[#94A3B8]">Candidate Category:</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg p-2 text-white focus:outline-none focus:border-[#6C8CFF]"
                >
                  <option value="Possible Moving Object">Possible Moving Object</option>
                  <option value="Possible Variable Object">Possible Variable Object</option>
                  <option value="Unusual Infrared Source">Unusual Infrared Source</option>
                  <option value="Other Interesting Observation">Other Interesting Observation</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[#94A3B8]">Description of Phenomenon:</label>
                <input
                  type="text"
                  required
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="e.g. Significant motion dipole observed in Band 5 difference image"
                  className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg p-2 text-white focus:outline-none focus:border-[#6C8CFF]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[#94A3B8]">Reason for Submission & Supporting Observations:</label>
                <textarea
                  rows={3}
                  required
                  value={newReason}
                  onChange={(e) => setNewReason(e.target.value)}
                  placeholder="Describe astrometric displacement or flux amplitude changes across epochs..."
                  className="w-full bg-[#111C2E] border border-[#1E2D45] rounded-lg p-2 text-white focus:outline-none focus:border-[#6C8CFF]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="px-4 py-2 rounded-lg bg-[#111C2E] text-[#94A3B8] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#6C8CFF] text-[#080D18] font-bold hover:bg-[#5A7AE6] transition"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

