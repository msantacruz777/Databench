import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

const NetworkGraph = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    const points: { pos: [number, number, number], color: string, id: number, size: number }[] = [];
    
    const hubs = [
      { pos: [-4, 2, 0], color: '#2563eb', size: 0.25 },
      { pos: [4, -2, 0], color: '#99E866', size: 0.25 },
      { pos: [0, 0, 0], color: '#3b82f6', size: 0.2 },
      { pos: [-2, -3, 2], color: '#1d4ed8', size: 0.18 },
      { pos: [3, 3, -1], color: '#84cc16', size: 0.22 },
    ];

    hubs.forEach((hub, i) => {
      points.push({ 
        pos: hub.pos as [number, number, number], 
        color: hub.color, 
        id: i, 
        size: hub.size
      });
      
      const clusterSize = 18 + Math.floor(Math.random() * 8);
      for (let j = 0; j < clusterSize; j++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 1.5 + Math.random() * 3.5;
        const x = hub.pos[0] + Math.cos(angle) * radius + (Math.random() - 0.5) * 2;
        const y = hub.pos[1] + Math.sin(angle) * radius + (Math.random() - 0.5) * 2;
        const z = hub.pos[2] + (Math.random() - 0.5) * 4;
        
        const t = (x + 6) / 12;
        const color = new THREE.Color();
        color.lerpColors(new THREE.Color('#2563eb'), new THREE.Color('#99E866'), THREE.MathUtils.clamp(t, 0, 1));

        points.push({ 
          pos: [x, y, z], 
          color: `#${color.getHexString()}`,
          id: points.length,
          size: 0.04 + Math.random() * 0.08
        });
      }
    });

    return points;
  }, []);

  const edges = useMemo(() => {
    const lines: { points: [number, number, number][], color: string, opacity: number }[] = [];
    
    nodes.forEach((node, i) => {
      const distances = nodes
        .map((other, j) => ({ index: j, dist: new THREE.Vector3(...node.pos).distanceTo(new THREE.Vector3(...other.pos)) }))
        .filter(d => d.index !== i)
        .sort((a, b) => a.dist - b.dist);

      for (let k = 0; k < 2; k++) {
        const neighbor = nodes[distances[k].index];
        lines.push({ 
          points: [node.pos, neighbor.pos], 
          color: node.color,
          opacity: 0.35 + (1 / (distances[k].dist + 1)) * 0.4
        });
      }

      if (Math.random() > 0.98) {
        const target = nodes[Math.floor(Math.random() * nodes.length)];
        lines.push({ 
          points: [node.pos, target.pos], 
          color: '#cbd5e1',
          opacity: 0.15
        });
      }
    });
    
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.y = Math.sin(t * 0.02) * 0.08;
      meshRef.current.rotation.x = Math.cos(t * 0.015) * 0.04;
    }
  });

  return (
    <group ref={meshRef}>
      {edges.map((edge, i) => (
        <Line 
          key={`edge-${i}`} 
          points={edge.points}
          color={edge.color} 
          lineWidth={1.2} 
          transparent 
          opacity={edge.opacity} 
        />
      ))}
      
      {nodes.map((node) => (
        <Sphere key={`node-${node.id}`} position={node.pos} args={[node.size, 16, 16]}>
          <meshStandardMaterial 
            color={node.color} 
            roughness={0.4} 
            metalness={0.1}
            emissive={node.color}
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}
    </group>
  );
};

export const CinematicDataAnimation = () => {
  return (
    <div className="w-full h-[650px] overflow-hidden relative">
      <Canvas 
        shadows 
        gl={{ antialias: true, alpha: true }} 
        camera={{ position: [0, 0, 15], fov: 35 }}
      >
        <ambientLight intensity={0.9} />
        <spotLight position={[10, 20, 10]} angle={0.25} penumbra={1} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#99E866" />
        
        <Float speed={0.4} rotationIntensity={0.1} floatIntensity={0.2}>
          <NetworkGraph />
        </Float>
      </Canvas>
      
      <div className="absolute top-12 left-12 flex flex-col gap-2 pointer-events-none">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#99E866] animate-pulse shadow-[0_0_10px_rgba(153,232,102,0.5)]" />
          <span className="text-[12px] font-bold text-slate-500 uppercase tracking-[0.4em]">Relational Knowledge Graph</span>
        </div>
        <div className="h-[2px] w-32 bg-[#99E866]/20" />
      </div>

      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-1 pointer-events-none">
        <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mb-1">
          Intelligent Network // SYNC_ACTIVE
        </span>
        <div className="flex gap-1">
          <div className="w-8 h-1 bg-blue-500/20 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 animate-[loading_2s_ease-in-out_infinite]" />
          </div>
          <div className="w-8 h-1 bg-[#99E866]/30 rounded-full overflow-hidden">
            <div className="h-full bg-[#99E866] animate-[loading_2s_ease-in-out_infinite_delay-350ms]" />
          </div>
        </div>
      </div>
    </div>
  );
};
