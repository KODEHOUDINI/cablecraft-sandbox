import { useThree } from "@react-three/fiber";
import { editable as e } from "@theatre/r3f";

const MyCube = () => {
  const camera = useThree((state) => state.camera);
  console.log(camera);
  camera.lookAt(10, 0.5, 0);
  return (
    <e.mesh theatreKey="Boxy">
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </e.mesh>
  );
};

export default MyCube;
