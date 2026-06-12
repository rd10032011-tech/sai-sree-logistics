'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
}

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null!);
  const lineRef = useRef<THREE.LineSegments>(null!);

  const { nodePositions, linePairs } = useMemo(() => {
    const count = 120;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (seededRandom(i * 137 + 1) - 0.5) * 25;
    }

    const pairs: number[] = [];
    for (let i = 0; i < count; i++) {
      const connections = Math.floor(seededRandom(i * 7) * 3) + 1;
      for (let j = 0; j < connections; j++) {
        const target = Math.floor(seededRandom(i * 13 + j * 5) * count);
        if (target !== i) {
          pairs.push(i * 3, i * 3 + 1, i * 3 + 2);
          pairs.push(target * 3, target * 3 + 1, target * 3 + 2);
        }
      }
    }

    return { nodePositions: positions, linePairs: new Float32Array(pairs) };
  }, []);

  const lineGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(linePairs, 3));
    return geo;
  }, [linePairs]);

  const nodeGeometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));
    const sizes = new Float32Array(120);
    for (let i = 0; i < 120; i++) {
      sizes[i] = seededRandom(i * 31) * 0.15 + 0.05;
    }
    geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    return geo;
  }, [nodePositions]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.03;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.008) * 0.05;
    }
    if (lineRef.current) {
      const mat = lineRef.current.material as THREE.LineBasicMaterial;
      mat.opacity = 0.15 + Math.sin(clock.getElapsedTime() * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      <points geometry={nodeGeometry}>
        <pointsMaterial
          size={0.08}
          color="#F5A300"
          transparent
          opacity={0.7}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={lineRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#F5A300" transparent opacity={0.15} depthWrite={false} />
      </lineSegments>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color="#F5A300" transparent opacity={0.15} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 12, 12]} />
        <meshBasicMaterial color="#F5A300" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function OrbitalRings() {
  const ref = useRef<THREE.Group>(null!);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.01) * 0.1;
    }
  });

  const rings = useMemo(() => {
    const data: { radius: number; color: string; opacity: number }[] = [];
    for (let i = 0; i < 4; i++) {
      data.push({
        radius: 2.5 + i * 1.8,
        color: i === 0 ? '#F5A300' : i === 1 ? '#B31B1B' : i === 2 ? '#5B0000' : '#F5A300',
        opacity: 0.08 - i * 0.015,
      });
    }
    return data;
  }, []);

  return (
    <group ref={ref}>
      {rings.map((ring, i) => (
        <mesh key={i} rotation={[Math.PI / 3 + i * 0.2, 0, 0]}>
          <ringGeometry args={[ring.radius - 0.02, ring.radius, 80]} />
          <meshBasicMaterial color={ring.color} transparent opacity={ring.opacity} side={THREE.DoubleSide} depthWrite={false} />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 55 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <NetworkNodes />
        <OrbitalRings />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}
