import { useGLTF } from '@react-three/drei';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RobotModel(props:any) {
  const { nodes } = useGLTF('/models/robot.glb');
  return (
    <group {...props} dispose={null}>
      {/* Just place your model once here */}
      <primitive object={nodes.Scene} />
    </group>
  );
}
