'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function RobotModel() {
  const { scene, animations } = useGLTF('/models/robot.glb')
  console.log(animations)
  return <primitive object={scene} />
}

export default function ModelCanvas() {
  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [50 , 50 , 50 ], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <RobotModel />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
