import React, { useState, useEffect } from 'react';
import { Sidebar } from './layouts/Sidebar';
import { TopHeader } from './layouts/TopHeader';
import { StarrySkyBackground } from './components/StarrySkyBackground';
import { OverviewModule } from './modules/overview/OverviewModule';
import { LearnExploreModule } from './modules/learn-explore/LearnExploreModule';
import { CosmicBrightnessQuestModule } from './modules/quest/CosmicBrightnessQuestModule';
import { SkyExplorerModule } from './modules/explorer/SkyExplorerModule';
import { CosmicTimeMachineModule } from './modules/time-machine/CosmicTimeMachineModule';
import { SpectralIntelligenceModule } from './modules/spectral/SpectralIntelligenceModule';
import { ChallengeTargetsModule } from './modules/targets/ChallengeTargetsModule';
import { ObjectInvestigationModule } from './modules/investigation/ObjectInvestigationModule';
import { CitizenDiscoveryModule } from './modules/discovery/CitizenDiscoveryModule';
import { ResourcesModule } from './modules/resources/ResourcesModule';
import { NeossatModule } from './modules/neossat/NeossatModule';
import { ChallengeTarget } from './types/astronomy';
import { validateCoordinates } from './services/api';

export function App() {
  // Default to WISE 0855 Challenge Target coordinates
  const [currentCoords, setCurrentCoords] = useState<{ ra: number; dec: number; fov: number }>({
    ra: 133.795129,
    dec: -7.245147,
    fov: 0.1
  });

  const [currentModule, setCurrentModule] = useState<string>('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [selectedTarget, setSelectedTarget] = useState<ChallengeTarget | null>(null);

  // Parse URL query parameters & pathname on initial mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname;
    const raParam = params.get('ra');
    const decParam = params.get('dec');
    const fovParam = params.get('fov');
    const modParam = params.get('module');

    if (raParam && decParam) {
      const raNum = parseFloat(raParam);
      const decNum = parseFloat(decParam);
      const fovNum = fovParam ? parseFloat(fovParam) : 0.1;
      if (!isNaN(raNum) && !isNaN(decNum)) {
        setCurrentCoords({ ra: raNum, dec: decNum, fov: fovNum });
      }
    }

    if (pathname.includes('/learn-explore')) {
      setCurrentModule('learn-explore');
    } else if (modParam) {
      setCurrentModule(modParam);
    }
  }, []);

  // Update URL history when coordinates or module change
  const updateUrl = (ra: number, dec: number, fov: number, mod: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set('ra', String(ra));
    url.searchParams.set('dec', String(dec));
    url.searchParams.set('fov', String(fov));
    url.searchParams.set('module', mod);
    if (mod === 'learn-explore') {
      url.pathname = '/learn-explore';
    } else {
      url.pathname = '/';
    }
    window.history.replaceState({}, '', url.toString());
  };

  const handleSelectModule = (mod: string) => {
    setCurrentModule(mod);
    updateUrl(currentCoords.ra, currentCoords.dec, currentCoords.fov, mod);
  };

  const handleCoordsChange = (coords: { ra: number; dec: number; fov: number }) => {
    setCurrentCoords(coords);
    updateUrl(coords.ra, coords.dec, coords.fov, currentModule);
  };

  const handleGlobalSearch = async (raStr: string, decStr: string) => {
    try {
      const val = await validateCoordinates(raStr, decStr, currentCoords.fov);
      if (val.valid) {
        handleCoordsChange({ ra: val.ra, dec: val.dec, fov: val.fov });
        setCurrentModule('explorer');
      } else {
        alert(val.error || 'Invalid coordinates entered');
      }
    } catch (e: any) {
      alert(e.message || 'Coordinate search failed');
    }
  };

  const handleSelectTarget = (target: ChallengeTarget) => {
    setSelectedTarget(target);
    handleCoordsChange({ ra: target.ra, dec: target.dec, fov: 0.1 });
  };

  return (
    <div className="relative flex h-screen w-screen overflow-hidden bg-[#050711] text-[#F8FAFC]">
      {/* Movable Particles Cosmic Sky Background */}
      <StarrySkyBackground />

      {/* Collapsible Left Sidebar */}
      <Sidebar
        currentModule={currentModule}
        onSelectModule={handleSelectModule}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <TopHeader
          currentModule={currentModule}
          onSearchCoordinates={handleGlobalSearch}
          currentCoords={currentCoords}
        />

        {/* Scrollable Module Canvas */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-[#080D18]/85 backdrop-blur-[2px]">
          {currentModule === 'overview' && (
            <OverviewModule
              onNavigate={handleSelectModule}
              onSelectTarget={handleSelectTarget}
              currentCoords={currentCoords}
            />
          )}

          {currentModule === 'learn-explore' && (
            <LearnExploreModule onNavigateModule={handleSelectModule} />
          )}

          {currentModule === 'quest' && (
            <CosmicBrightnessQuestModule onNavigateModule={handleSelectModule} />
          )}

          {currentModule === 'explorer' && (
            <SkyExplorerModule
              currentCoords={currentCoords}
              onCoordsChange={handleCoordsChange}
              onNavigateToTimeMachine={() => handleSelectModule('time-machine')}
            />
          )}

          {currentModule === 'time-machine' && (
            <CosmicTimeMachineModule
              currentCoords={currentCoords}
              onMarkSourceForInvestigation={() => handleSelectModule('investigation')}
            />
          )}

          {currentModule === 'spectral' && (
            <SpectralIntelligenceModule currentCoords={currentCoords} />
          )}

          {currentModule === 'targets' && (
            <ChallengeTargetsModule
              onSelectTarget={handleSelectTarget}
              onNavigate={handleSelectModule}
            />
          )}

          {currentModule === 'investigation' && (
            <ObjectInvestigationModule
              currentCoords={currentCoords}
              selectedTarget={selectedTarget}
              onNavigateToDiscovery={() => handleSelectModule('discovery')}
            />
          )}

          {currentModule === 'discovery' && (
            <CitizenDiscoveryModule
              onOpenCoordinate={(ra, dec) => {
                handleCoordsChange({ ra, dec, fov: 0.1 });
                handleSelectModule('explorer');
              }}
            />
          )}

          {currentModule === 'resources' && <ResourcesModule />}

          {currentModule === 'neossat' && <NeossatModule />}
        </main>
      </div>
    </div>
  );
}
export default App;

