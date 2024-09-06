import { ContactShadows, Environment, OrbitControls, TransformControls } from "@react-three/drei";
import React, { useMemo, useRef } from "react";
import { Arena } from "./Arena";
import { useControls } from "leva";

const CablecraftLab = () => {
  const { posX, posY, posZ, scaX, scaY, scaZ, rotX, rotY, rotZ } = useControls({
    posX: { value: 0, min: -1, max: 2, step: 0.0001 },
    posY: { value: 0, min: -1, max: 2, step: 0.0001 },
    posZ: { value: 0, min: -1, max: 2, step: 0.0001 },
    scaX: { value: 0, min: -1, max: 2, step: 0.0001 },
    scaY: { value: 0, min: -1, max: 2, step: 0.0001 },
    scaZ: { value: 0, min: -1, max: 2, step: 0.0001 },
    rotX: { value: 0, min: -1, max: Math.PI * 2, step: 0.01 },
    rotY: { value: 0, min: -1, max: Math.PI * 2, step: 0.01 },
    rotZ: { value: 0, min: -1, max: Math.PI * 2, step: 0.01 },
  });

  const options = {
    opacity: { value: 0.72, min: 0, max: 1, step: 0.0001 },
    scale: { value: 20, min: 1, max: 20, step: 0.0001 },
    blur: { value: 2, min: 0, max: 2, step: 0.0001 },
    far: { value: 8, min: 5, max: 20, step: 0.0001 },
    color: { value: "#aaaaaa" },
  };

  const shadows = useControls("Shadows", options);

  return (
    <>
      <OrbitControls makeDefault />
      <ContactShadows
        opacity={shadows.opacity}
        scale={shadows.scale}
        blur={shadows.blur}
        far={shadows.far}
        resolution={256}
        color={shadows.color}
      />
      <Arena />
      <Environment files="./hdr/s.hdr" />
    </>
  );
};

export default CablecraftLab;
