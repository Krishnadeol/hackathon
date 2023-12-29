import React from 'react';

import TiltCard from './components/TiltCard'
import HorizontalScrollCarousel from './components/HorizontalScrollCarousel'
import ParticleRing from './components/ParticleRing';
import Navbar from './components/Navbar';
import MouseTrail from './components/MouseImageTrail';

function App() {
  return (
    <div className='bg-[#10172a]'>
    <Navbar/>
    <ParticleRing/>
    <TiltCard/>
    <div className='py-20 px-20'><MouseTrail/></div>
    <HorizontalScrollCarousel/>
    

    </div>
  )
}

export default App
