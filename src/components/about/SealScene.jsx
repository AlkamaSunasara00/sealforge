"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer } from "@react-three/drei";

/* Revolved ring with small bevels: inner radius a, outer radius b, thickness t */
function ringProfile(a, b, t, bev = 0.05) {
  const h = t / 2;
  return [
    [a + bev, -h], [b - bev, -h], [b, -h + bev], [b, h - bev],
    [b - bev, h], [a + bev, h], [a, h - bev], [a, -h + bev], [a + bev, -h],
  ].map(([x, y]) => new THREE.Vector2(x, y));
}

function Ring({ a, b, t, y, bev, children, ...mat }) {
  const pts = useMemo(() => ringProfile(a, b, t, bev), [a, b, t, bev]);
  return (
    <mesh position={[0, y, 0]}>
      <latheGeometry args={[pts, 128]} />
      <meshPhysicalMaterial {...mat} />
      {children}
    </mesh>
  );
}

function Seal({ accent, reduced }) {
  const tilt = useRef();
  const spin = useRef();
  const screws = useMemo(
    () => Array.from({ length: 8 }, (_, i) => (i * Math.PI * 2) / 8),
    []
  );

  useFrame((state, dt) => {
    if (!reduced) spin.current.rotation.z += dt * 0.12;
    // gentle mouse parallax
    const { x, y } = state.pointer;
    tilt.current.rotation.y = THREE.MathUtils.lerp(tilt.current.rotation.y, -0.38 + x * 0.15, 0.04);
    tilt.current.rotation.x = THREE.MathUtils.lerp(tilt.current.rotation.x, 0.2 - y * 0.1, 0.04);
  });

  const silver = { color: "#c9ced6", metalness: 1, roughness: 0.2, envMapIntensity: 1.7 };

  return (
    <group ref={tilt} rotation={[0.2, -0.38, 0]}>
      <group ref={spin}>
        {/* local +Y of this group points at the camera */}
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* gland */}
          <Ring a={1.7} b={2.9} t={0.5} y={0} bev={0.07} {...silver} />
          {/* set screws */}
          {screws.map((a, i) => (
            <mesh key={i} position={[Math.cos(a) * 2.45, 0.3, Math.sin(a) * 2.45]}>
              <cylinderGeometry args={[0.17, 0.17, 0.14, 6]} />
              <meshStandardMaterial color="#6b7280" metalness={1} roughness={0.35} />
            </mesh>
          ))}
          {/* gasket ring in the brand accent colour */}
          <Ring a={1.95} b={2.4} t={0.1} y={0.3} bev={0.02} color={accent} metalness={0.2} roughness={0.45} />
          {/* stationary face (carbon) */}
          <Ring a={1.2} b={1.9} t={0.36} y={0.55} bev={0.04} color="#262b38" metalness={0.15} roughness={0.38} />
          {/* rotary face (silicon carbide, glossy) */}
          <Ring a={0.95} b={1.4} t={0.3} y={0.88} bev={0.03} color="#2c3957" metalness={0.5} roughness={0.12} clearcoat={1} clearcoatRoughness={0.05} />
          {/* elastomer */}
          <mesh position={[0, 1.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.12, 0.1, 24, 128]} />
            <meshStandardMaterial color="#0b0d12" roughness={0.85} metalness={0} />
          </mesh>
          {/* sleeve */}
          <Ring a={0.55} b={0.92} t={1.3} y={0.95} bev={0.04} {...silver} />
          {/* anti-rotation pin */}
          <mesh position={[0.74, 1.62, 0]}>
            <cylinderGeometry args={[0.07, 0.07, 0.22, 24]} />
            <meshStandardMaterial color="#e5e7eb" metalness={1} roughness={0.25} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

export default function SealScene({ accent = "#b8824f" }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 15], fov: 32 }}
      gl={{ antialias: true, alpha: true }}
      frameloop={reduced ? "demand" : "always"}
      aria-label="Realistic 3D model of a SealForge mechanical seal"
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 5, 6]} intensity={2} />
      {/* studio lights baked into the reflections: no files to download */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={9} position={[-5, 4, 6]} scale={[9, 3, 1]} />
        <Lightformer form="rect" intensity={6} position={[6, -2, 4]} scale={[6, 2, 1]} color="#9bbcff" />
        <Lightformer form="circle" intensity={7} position={[0, 6, 2]} scale={4} />
        <Lightformer form="ring" intensity={4} position={[0, 0, -6]} scale={7} />
      </Environment>
      <Seal accent={accent} reduced={reduced} />
    </Canvas>
  );
}