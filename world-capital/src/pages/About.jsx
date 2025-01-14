import React from 'react'

const About = () => {
  return (
    <section className='section-about container'>
      <h2 className="container-title">
 Here are the Interestion facts
 <br/>  
 we're proud of
      </h2>

      <div className='gardient-cards'>
       <div className='card'>
        <div className='container-card bg-blue-box'>
          <p className='card-title'>India</p>
          <p className=''>
            <span className='card-description'>Capital:</span> Delhi
          </p>
          <p className=''>
            <span className='card-description'>Population:</span>14582595
          </p>
          <p className=''>
            <span className='card-description'>Interesting fact</span> We love India
          </p>
          
        </div>
       </div> 
      </div>
    </section>
  )
}

export default About
