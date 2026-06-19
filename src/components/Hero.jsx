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
      <div className='absolute inset-0 z-50 flex flex-col items-center justify-center gap-3'>
        <h1 className='text-white text-3xl font-bold'>
          AI-Powered Resume Optimization Platform
        </h1>
        <h2 className='text-white text-xl'>Get an ATS-Friendly Resume Score and Improve Your Resume for Any Job</h2>
        <p className='text-white max-w-150 text-xl'>Upload your resume and job description to receive an instant AI-powered resume score,
          ATS analysis, keyword recommendations, and personalized suggestions to increase your interview chances.
        </p>
        <div className='flex gap-8'>
          <button className='bg-amber-400 font-bold p-2 rounded-2xl'>Upload Resume</button>
        <button className='bg-amber-400 font-bold p-2 rounded-2xl'>See Demo Report</button>
        </div>

      </div>
    </div>

  )
}

export default Hero
