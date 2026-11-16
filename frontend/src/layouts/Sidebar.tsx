import React from 'react';
import {
  Compass,
  Telescope,
  Clock,
  Activity,
  Search,
  Sparkles,
  Target,
  BookOpen,
  Satellite,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  GraduationCap
} from 'lucide-react';

interface SidebarProps {
  currentModule: string;
  onSelectModule: (moduleId: string) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentModule,
  onSelectModule,
  collapsed,
  onToggleCollapse
}) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: Compass, badge: null },
    { id: 'learn-explore', label: 'Learn & Explore', icon: GraduationCap, badge: 'Learn' },
    { id: 'quest', label: 'Brightness Quest', icon: Award, badge: 'Game' },
    { id: 'explorer', label: 'Sky Explorer', icon: Telescope, badge: 'DR1' },
    { id: 'time-machine', label: 'Cosmic Time Machine', icon: Clock, badge: 'Blink' },
    { id: 'spectral', label: 'Spectral Intelligence', icon: Activity, badge: '102 Ch' },
    { id: 'targets', label: 'Challenge Targets', icon: Target, badge: '5 NASA' },
    { id: 'investigation', label: 'Object Investigation', icon: Search, badge: null },
    { id: 'discovery', label: 'Discovery Hub', icon: Sparkles, badge: 'Citizen' },
    { id: 'resources', label: 'Resources & About', icon: BookOpen, badge: null },
  ];

  return (
    <aside
      className={`relative flex flex-col bg-[#0E1626] border-r border-[#1E2D45] transition-all duration-300 z-30 select-none ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Platform Branding */}
      <div className="flex items-center justify-between p-4 border-b border-[#1E2D45] h-16">
        <div
          onClick={() => onSelectModule('overview')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#6C8CFF] to-[#A78BFA] flex items-center justify-center p-0.5 shadow-lg shadow-[#6C8CFF]/20 group-hover:scale-105 transition">
            <div className="w-full h-full bg-[#080D18] rounded-[7px] flex items-center justify-center">
              <Telescope className="w-4 h-4 text-[#49D7E8]" />
            </div>
          </div>
          {!collapsed && (
            <div className="flex flex-col">
              <span className="font-bold tracking-wider text-base text-[#F1F5F9] font-mono">
                SKY<span className="text-[#6C8CFF]">VERSE</span>
              </span>
              <span className="text-[10px] text-[#94A3B8] tracking-tight">
                SPHEREx Time-Domain
              </span>
            </div>
          )}
        </div>

        <button
          onClick={onToggleCollapse}
          className="p-1 rounded text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#1E2D45] transition"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Main Navigation Links */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        <div className={`px-2 py-1 text-[10px] uppercase font-mono tracking-wider text-[#94A3B8]/60 ${collapsed ? 'hidden' : 'block'}`}>
          Scientific Modules
        </div>

        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentModule === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectModule(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group relative ${
                isActive
                  ? 'bg-[#1E2D45] text-[#49D7E8] shadow-sm shadow-[#49D7E8]/10 border border-[#2A3F60]'
                  : 'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#111C2E]'
              }`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 transition-colors ${
                  isActive ? 'text-[#49D7E8]' : 'text-[#94A3B8] group-hover:text-[#6C8CFF]'
                }`}
              />

              {!collapsed && (
                <div className="flex-1 flex items-center justify-between text-left">
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        isActive
                          ? 'bg-[#49D7E8]/20 text-[#49D7E8]'
                          : 'bg-[#111C2E] text-[#94A3B8] group-hover:text-[#6C8CFF]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </div>
              )}

              {/* Tooltip for collapsed mode */}
              {collapsed && (
                <div className="absolute left-full ml-2 px-2.5 py-1 bg-[#111C2E] text-white text-xs rounded-md shadow-xl border border-[#1E2D45] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition z-50">
                  {item.label}
                </div>
              )}
            </button>
          );
        })}

        {/* Separate NEOSSat Education Section */}
        <div className="pt-4 mt-4 border-t border-[#1E2D45]">
          <div className={`px-2 py-1 text-[10px] uppercase font-mono tracking-wider text-[#94A3B8]/60 ${collapsed ? 'hidden' : 'block'}`}>
            Comparative Research
          </div>
          <button
            onClick={() => onSelectModule('neossat')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all group relative ${
              currentModule === 'neossat'
                ? 'bg-[#1E2D45] text-[#A78BFA] border border-[#2A3F60]'
                : 'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-[#111C2E]'
            }`}
          >
            <Satellite
              className={`w-4 h-4 shrink-0 transition-colors ${
                currentModule === 'neossat' ? 'text-[#A78BFA]' : 'text-[#94A3B8] group-hover:text-[#A78BFA]'
              }`}
            />
            {!collapsed && (
              <div className="flex-1 flex items-center justify-between text-left">
                <span className="truncate">NEOSSat Research</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded font-mono bg-[#A78BFA]/15 text-[#A78BFA]">
                  CSA
                </span>
              </div>
            )}
            {collapsed && (
              <div className="absolute left-full ml-2 px-2.5 py-1 bg-[#111C2E] text-white text-xs rounded-md shadow-xl border border-[#1E2D45] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition z-50">
                NEOSSat Research & Learning
              </div>
            )}
          </button>
        </div>
      </nav>

      {/* Footer Info & Verification Badge */}
      <div className="p-3 border-t border-[#1E2D45] bg-[#0A101C]">
        <div className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg bg-[#111C2E]/60 border border-[#1E2D45]/70 text-[11px] text-[#94A3B8]">
          <ShieldCheck className="w-4 h-4 text-[#10B981] shrink-0" />
          {!collapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-[#F1F5F9] font-medium truncate">NASA IRSA Verified</span>
              <span className="text-[10px] text-[#94A3B8] truncate">SPHEREx DR1 Data</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

