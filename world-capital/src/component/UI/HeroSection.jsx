import React from 'react'
import { FaRightLong } from "react-icons/fa6";
const HeroSection = () => {
  return (
    <div>
       <main className='hero-section main'>
      <div className="container grid grid-two-cols">
        <div  className='hero-content'>
        <h1 className='heading-xl'> Explore the World, And know the one country at a Time</h1> 
        <p className='paragraph'>Discover the history, culture, and beauty of every nation. Sort,
        Search, and filter through countries to find the details you need.</p>
        <button className='btn btn-darken btn-inline bg-white-box'>
          Start Exploring <FaRightLong/>
        </button>
        </div>

        <div className='hero-image'>
          <img  src="/public/images/world.png" alt='error404'/>
        </div>
      </div>
    </main>
    </div>
  )
}

export default HeroSection
