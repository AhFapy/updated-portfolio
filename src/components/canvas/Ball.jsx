import React, {Suspense} from 'react'
import { Canvas } from "@react-three/fiber"
import {Decal, Float, OrbitControls, Preload, useTexture} from "@react-three/drei"


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl])

  return (
    <div>Ball</div>
    
  )
}

const BallCanvas = ({icon}) => {
  return (
    <Canvas
    frameloop='demand'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
    </Suspense>

    <Preload all />
  </Canvas>

  )
}

export default Ball