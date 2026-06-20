import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Environment,
  ContactShadows,
  MeshDistortMaterial,
  MeshTransmissionMaterial,
} from "@react-three/drei";

function SerumBottle({ position = [0, 0, 0], scale = 1 }) {
  const group = useRef();
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y =
      Math.sin(state.clock.getElapsedTime() * 0.4) * 0.3;
  });

  return (
    <group ref={group} position={position} scale={scale}>
      {/* Bottle body */}
      <mesh position={[0, -0.1, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.6, 1.6, 64]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.05}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.04}
          backside
          color="#efdcd0"
          attenuationColor="#c7a896"
          attenuationDistance={0.6}
        />
      </mesh>
      {/* Liquid */}
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[0.52, 0.57, 1.1, 64]} />
        <meshStandardMaterial
          color="#cfa18f"
          metalness={0.2}
          roughness={0.2}
          transparent
          opacity={0.85}
        />
      </mesh>
      {/* Neck */}
      <mesh position={[0, 0.85, 0]} castShadow>
        <cylinderGeometry args={[0.22, 0.3, 0.28, 32]} />
        <meshStandardMaterial color="#a87561" metalness={0.55} roughness={0.35} />
      </mesh>
      {/* Cap */}
      <mesh position={[0, 1.15, 0]} castShadow>
        <cylinderGeometry args={[0.28, 0.28, 0.35, 32]} />
        <meshStandardMaterial color="#5b3a2e" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Cap top ring */}
      <mesh position={[0, 1.35, 0]} castShadow>
        <torusGeometry args={[0.27, 0.03, 16, 64]} />
        <meshStandardMaterial color="#c7a896" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Label */}
      <mesh position={[0, -0.1, 0.601]}>
        <planeGeometry args={[0.85, 0.6]} />
        <meshStandardMaterial color="#fff9f5" roughness={0.6} />
      </mesh>
    </group>
  );
}

function CreamBlob({ position = [-2.4, 0.6, -0.6], scale = 0.8 }) {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.sin(t * 0.6) * 0.15;
    mesh.current.rotation.y = t * 0.2;
    mesh.current.rotation.x = Math.sin(t * 0.3) * 0.2;
  });
  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <sphereGeometry args={[0.9, 64, 64]} />
      <MeshDistortMaterial
        color="#e5ccbd"
        distort={0.4}
        speed={1.5}
        roughness={0.3}
        metalness={0.15}
      />
    </mesh>
  );
}

function BronzeSphere({ position = [2.4, -0.4, -0.4], scale = 0.55 }) {
  const mesh = useRef();
  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.getElapsedTime();
    mesh.current.position.y = position[1] + Math.cos(t * 0.7) * 0.18;
    mesh.current.rotation.y = -t * 0.3;
  });
  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 4]} />
      <MeshDistortMaterial
        color="#a87561"
        distort={0.25}
        speed={2}
        roughness={0.2}
        metalness={0.5}
      />
    </mesh>
  );
}

function Ring({ position = [0, -0.8, 0] }) {
  const ring = useRef();
  useFrame((state) => {
    if (!ring.current) return;
    ring.current.rotation.z = state.clock.getElapsedTime() * 0.2;
  });
  return (
    <mesh ref={ring} position={position} rotation={[Math.PI / 2.2, 0, 0]}>
      <torusGeometry args={[1.6, 0.015, 16, 100]} />
      <meshStandardMaterial color="#c7a896" metalness={0.8} roughness={0.3} />
    </mesh>
  );
}

export default function ThreeProductScene({
  variant = "hero",
  className = "",
}) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} />
        <directionalLight position={[-4, 2, -3]} intensity={0.5} color="#cfa18f" />
        <Suspense fallback={null}>
          {variant === "hero" && (
            <>
              <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
                <SerumBottle />
              </Float>
              <CreamBlob />
              <BronzeSphere />
              <Ring />
            </>
          )}
          {variant === "showcase" && (
            <>
              <Float speed={1} rotationIntensity={0.5} floatIntensity={0.7}>
                <SerumBottle position={[-1.4, 0, 0]} scale={0.85} />
              </Float>
              <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.5}>
                <SerumBottle position={[1.4, 0.1, -0.5]} scale={0.7} />
              </Float>
              <CreamBlob position={[0, -0.9, -0.3]} scale={0.65} />
              <BronzeSphere position={[0, 1.1, -0.6]} scale={0.45} />
            </>
          )}
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.35}
            scale={6}
            blur={2.4}
            color="#5b3a2e"
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
