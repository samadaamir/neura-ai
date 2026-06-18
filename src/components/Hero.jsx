import React from 'react'
import PixelBlast from './PixelBlast';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime"
import Navbar from './Navbar';
const Hero = () => {
  return (
   
      <div className='w-full h-screen relative bg-black'>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#B497CF"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
         <div className='absolute inset-0 z-50 flex items-center justify-center'>
    <h1 className='text-white text-6xl font-bold'>
      Helooow
    </h1>
  </div>
      </div>

  )
}

export default Hero
