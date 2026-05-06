import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const RibbonWaveGraph = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  // Grid parameters for the ribbon wave
  const rows = 14;
  const cols = 45;
  const spacing = 0.45;
  
  const nodes = useMemo(() => {
    const points: { pos: [number, number, number], color: string, id: number }[] = [];
    let idCounter = 0;
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - cols / 2) * spacing;
        const z = (r - rows / 2) * spacing;
        
        // Flowing wave function mimicking a ribbon
        const y = Math.sin(x * 0.5) * 1.8 + Math.cos(z * 0.6) * 0.6;
        
        // Color transition: Blue (#3b82f6) -> Purple/Maroon (#800000) -> Orange (#f97316)
        const t = c / cols;
        const color = new THREE.Color();
        if (t < 0.5) {
          // Blue to Purple/Maroon
          color.lerpColors(new THREE.Color('#3b82f6'), new THREE.Color('#800000'), t * 2);
        } else {
          // Purple/Maroon to Orange
          color.lerpColors(new THREE.Color('#800000'), new THREE.Color('#f97316'), (t - 0.5) * 2);
        }
        
        points.push({ 
          pos: [x, y, z], 
          color: `#${color.getHexString()}`,
          id: idCounter++
        });
      }
    }
    return points;
  }, [rows, cols, spacing]);

  const edges = useMemo(() => {
    const lines: { points: [number, number, number][], color: string }[] = [];
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const currentIdx = r * cols + c;
        const node = nodes[currentIdx];
        
        // Connect to right neighbor
        if (c < cols - 1) {
          const right = nodes[currentIdx + 1];
          lines.push({ points: [node.pos, right.pos], color: node.color });
        }
        
        // Connect to bottom neighbor
        if (r < rows - 1) {
          const bottom = nodes[currentIdx + cols];
          lines.push({ points: [node.pos, bottom.pos], color: node.color });
        }
        
        // Occasional diagonal connections for "complex network" feel
        if (r < rows - 1 && c < cols - 1 && Math.random() > 0.7) {
          const diagonal = nodes[currentIdx + cols + 1];
          lines.push({ points: [node.pos, diagonal.pos], color: node.color });
        }
      }
    }
    return lines;
  }, [nodes, rows, cols]);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      // Gentle cinematic rotation/orbit
      meshRef.current.rotation.y = Math.sin(t * 0.05) * 0.1;
      meshRef.current.position.y = Math.sin(t * 0.2) * 0.1;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Interconnected Lines */}
      {edges.map((edge, i) => (
        <Line 
          key={`edge-${i}`} 
          points={edge.points} 
          color={edge.color} 
          lineWidth={0.6} 
          transparent 
          opacity={0.35} 
        />
      ))}
      
      {/* Textured Nodes (Data Points) */}
      {nodes.map((node) => (
        <Sphere key={`node-${node.id}`} position={node.pos} args={[0.07, 12, 12]}>
          <meshStandardMaterial 
            color={node.color} 
            roughness={0.7} 
            metalness={0.2}
            emissive={node.color}
            emissiveIntensity={0.15}
          />
        </Sphere>
      ))}
    </group>
  );
};

export const CinematicDataAnimation = () => {
  return (
    <div className="w-full h-[650px] bg-white rounded-[3rem] overflow-hidden relative border border-slate-100 shadow-2xl">
      <Canvas 
        shadows 
        gl={{ antialias: true }} 
        camera={{ position: [0, 6, 16], fov: 32 }}
      >
        <color attach="background" args={['#ffffff']} />
        
        {/* Clean, even lighting */}
        <ambientLight intensity={0.7} />
        <spotLight position={[10, 20, 10]} angle={0.25} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#cbd5e1" />
        
        <Float speed={1.4} rotationIntensity={0.1} floatIntensity={0.25}>
          <RibbonWaveGraph />
        </Float>
        
        {/* Subtle ground reflection area */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -8, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#ffffff" transparent opacity={0.05} />
        </mesh>
      </Canvas>
      
      {/* Minimalist Vector Overlay */}
      <div className="absolute top-12 left-12 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <span className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.4em]">Precision Data Wave</span>
        </div>
        <div className="h-[2px] w-32 bg-slate-100" />
      </div>

      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-1 pointer-events-none">
        <span className="text-[10px] text-slate-300 font-mono tracking-widest uppercase mb-1">
          Geometric Knowledge Graph // NODE_REF_881
        </span>
        <div className="flex gap-1">
          <div className="w-8 h-1 bg-blue-500/20 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 animate-[loading_2s_ease-in-out_infinite]" />
          </div>
          <div className="w-8 h-1 bg-orange-500/20 rounded-full overflow-hidden">
            <div className="h-full bg-orange-500 animate-[loading_2s_ease-in-out_infinite_delay-700]" />
          </div>
        </div>
      </div>
    </div>
  );
};
