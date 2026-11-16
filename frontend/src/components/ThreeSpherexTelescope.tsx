import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface ThreeSpherexProps {
  className?: string;
  autoRotate?: boolean;
}

export const ThreeSpherexTelescope: React.FC<ThreeSpherexProps> = ({
  className = '',
  autoRotate: initialAutoRotate = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(initialAutoRotate);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const width = container.clientWidth || 550;
    const height = container.clientHeight || 450;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 7.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // Group for the entire satellite
    const satelliteGroup = new THREE.Group();
    scene.add(satelliteGroup);

    // 1. Conical Gold Thermal Radiator Shield (SPHEREx signature feature)
    // Three nested concentric truncated cones (radiation thermal shields)
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xdfab35,
      metalness: 0.92,
      roughness: 0.25,
      side: THREE.DoubleSide,
    });

    const innerShieldMaterial = new THREE.MeshStandardMaterial({
      color: 0x222938,
      metalness: 0.8,
      roughness: 0.4,
      side: THREE.DoubleSide,
    });

    // Outer Cone (Main Solar/Thermal Shield)
    const outerConeGeo = new THREE.CylinderGeometry(2.3, 1.1, 2.2, 48, 1, true);
    const outerCone = new THREE.Mesh(outerConeGeo, goldMaterial);
    outerCone.position.y = 0.9;
    satelliteGroup.add(outerCone);

    // Mid Cone
    const midConeGeo = new THREE.CylinderGeometry(1.9, 0.95, 2.0, 36, 1, true);
    const midCone = new THREE.Mesh(midConeGeo, goldMaterial);
    midCone.position.y = 0.95;
    satelliteGroup.add(midCone);

    // Inner Cone (Optical Cavity)
    const innerConeGeo = new THREE.CylinderGeometry(1.5, 0.8, 1.8, 36, 1, true);
    const innerCone = new THREE.Mesh(innerConeGeo, innerShieldMaterial);
    innerCone.position.y = 1.0;
    satelliteGroup.add(innerCone);

    // Central Telescope Aperture (Mirror / Optical Bench)
    const mirrorGeo = new THREE.CircleGeometry(0.75, 32);
    const mirrorMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      metalness: 0.95,
      roughness: 0.1,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.25,
    });
    const mirror = new THREE.Mesh(mirrorGeo, mirrorMat);
    mirror.rotation.x = -Math.PI / 2;
    mirror.position.y = 0.3;
    satelliteGroup.add(mirror);

    // Struts / Support Vanes inside the shield
    for (let i = 0; i < 4; i++) {
      const angle = (i * Math.PI) / 2;
      const strutGeo = new THREE.CylinderGeometry(0.025, 0.025, 1.6);
      const strutMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9 });
      const strut = new THREE.Mesh(strutGeo, strutMat);
      strut.position.set(Math.cos(angle) * 0.9, 1.0, Math.sin(angle) * 0.9);
      strut.rotation.z = Math.cos(angle) * 0.35;
      strut.rotation.x = Math.sin(angle) * 0.35;
      satelliteGroup.add(strut);
    }

    // 2. Spacecraft Bus (Hexagonal Service Module at base)
    const busGeo = new THREE.CylinderGeometry(1.0, 1.1, 1.0, 6);
    const busMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.85,
      roughness: 0.3,
    });
    const bus = new THREE.Mesh(busGeo, busMat);
    bus.position.y = -0.55;
    satelliteGroup.add(bus);

    // Silver MLI (Multi-Layer Insulation) panels on bus
    const mliMat = new THREE.MeshStandardMaterial({
      color: 0xcfd8dc,
      metalness: 0.9,
      roughness: 0.35,
    });
    const mliBand = new THREE.Mesh(new THREE.CylinderGeometry(1.02, 1.02, 0.3, 6), mliMat);
    mliBand.position.y = -0.45;
    satelliteGroup.add(mliBand);

    // 3. Solar Array Wings (Deployable blue-tinted photovoltaic panels)
    const solarMat = new THREE.MeshStandardMaterial({
      color: 0x0f3460,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x16213e,
      emissiveIntensity: 0.3,
    });
    const panelFrameMat = new THREE.MeshStandardMaterial({ color: 0x0a0f1d, metalness: 0.9 });

    [-1, 1].forEach((dir) => {
      const wingGroup = new THREE.Group();

      // Panel slab
      const panelGeo = new THREE.BoxGeometry(2.4, 0.05, 1.3);
      const panel = new THREE.Mesh(panelGeo, solarMat);
      wingGroup.add(panel);

      // Frame border
      const frameGeo = new THREE.BoxGeometry(2.44, 0.07, 1.34);
      const frame = new THREE.Mesh(frameGeo, panelFrameMat);
      wingGroup.add(frame);

      // Solar grid cells lines
      for (let g = -1.0; g <= 1.0; g += 0.4) {
        const lineGeo = new THREE.BoxGeometry(0.015, 0.08, 1.25);
        const lineMat = new THREE.MeshBasicMaterial({ color: 0x60a5fa });
        const line = new THREE.Mesh(lineGeo, lineMat);
        line.position.x = g;
        wingGroup.add(line);
      }

      // Hinge Boom
      const boomGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.7);
      const boomMat = new THREE.MeshStandardMaterial({ color: 0x64748b, metalness: 0.9 });
      const boom = new THREE.Mesh(boomGeo, boomMat);
      boom.rotation.z = Math.PI / 2;
      boom.position.x = -dir * 1.5;
      wingGroup.add(boom);

      wingGroup.position.set(dir * 2.5, -0.6, 0);
      wingGroup.rotation.y = dir * 0.15;
      wingGroup.rotation.x = 0.2;
      satelliteGroup.add(wingGroup);
    });

    // 4. Star Tracker & High-Gain Antenna
    const antennaDishGeo = new THREE.SphereGeometry(0.35, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const antennaDish = new THREE.Mesh(
      antennaDishGeo,
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.8, side: THREE.DoubleSide })
    );
    antennaDish.position.set(0.8, -1.0, 0.7);
    antennaDish.rotation.x = Math.PI * 0.7;
    satelliteGroup.add(antennaDish);

    // Initial inclination matching the mockup angle
    satelliteGroup.rotation.x = 0.35;
    satelliteGroup.rotation.y = 0.65;
    satelliteGroup.rotation.z = -0.15;

    // 5. Surrounding Cosmic Particles / Starfield
    const particlesGeo = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 16;
      posArray[i + 1] = (Math.random() - 0.5) * 16;
      posArray[i + 2] = (Math.random() - 0.5) * 16;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xa78bfa,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(particlesGeo, particlesMat);
    scene.add(starField);

    // 6. Lighting
    // Warm Sun Directional Light
    const sunLight = new THREE.DirectionalLight(0xfff5e6, 2.5);
    sunLight.position.set(5, 4, 4);
    scene.add(sunLight);

    // Cyan Earth Albedo Light (coming from below)
    const earthLight = new THREE.DirectionalLight(0x38bdf8, 1.2);
    earthLight.position.set(-3, -4, 2);
    scene.add(earthLight);

    // Violet Cosmic Fill Light
    const cosmicLight = new THREE.PointLight(0xa78bfa, 1.5, 20);
    cosmicLight.position.set(-4, 3, -3);
    scene.add(cosmicLight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x1a2238, 1.0);
    scene.add(ambientLight);

    // Mouse drag interaction
    let isMouseDown = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isMouseDown = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      satelliteGroup.rotation.y += deltaX * 0.008;
      satelliteGroup.rotation.x += deltaY * 0.008;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isMouseDown = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle auto-rotation and floating bobbing
      if (autoRotate && !isMouseDown) {
        satelliteGroup.rotation.y += 0.004;
        satelliteGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.1;
      }

      starField.rotation.y = elapsedTime * 0.01;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate]);

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      <div
        ref={mountRef}
        className="w-full h-full min-h-[360px] md:min-h-[440px] cursor-grab active:cursor-grabbing relative"
        title="Click and drag to rotate the 3D SPHEREx observatory"
      />

      {/* Pill Badge matching reference image */}
      <div className="absolute bottom-2 z-10 flex items-center gap-2 pointer-events-auto">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1626]/85 border border-[#1E2D45] backdrop-blur-md text-[11px] font-mono text-[#94A3B8] shadow-lg shadow-black/40">
          <span className="text-[#38BDF8]">❖</span>
          <span>3D Interactive SPHEREx • Drag to rotate</span>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`ml-1.5 px-2 py-0.5 rounded text-[10px] transition ${
              autoRotate ? 'bg-[#38BDF8]/20 text-[#38BDF8]' : 'bg-[#1E2D45] text-[#94A3B8] hover:text-white'
            }`}
          >
            {autoRotate ? 'Auto-Spin' : 'Paused'}
          </button>
        </div>
      </div>
    </div>
  );
};
