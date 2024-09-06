import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { editable as e, PerspectiveCamera, SheetProvider } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import MyCube from "./MyCube";

// our Theatre.js project sheet, we'll use this later
const demoSheet = getProject("Demo Project").sheet("Demo Sheet");
const MyEnv = () => {
  return (
    <Canvas gl={{ preserveDrawingBuffer: true }}>
      <SheetProvider sheet={demoSheet}>
        <PerspectiveCamera theatreKey="Camera" makeDefault position={[5, 5, -5]} fov={30} />
        <ambientLight />
        <e.pointLight theatreKey="Light" position={[10, 10, 10]} />
        <MyCube />
      </SheetProvider>
      <OrbitControls />
    </Canvas>
  );
};

export default MyEnv;
