import React from 'react'
import countryFacts from '../api/countryData.json'

const About = () => {
  return (
    <section className='section-about container'>
      <h2 className="container-title">
 Here are the Interesting facts
 <br/>  
 we're proud of
      </h2>

      <div className='gradient-cards'>

{
  countryFacts.map((ele)=>{

    const {id,name,capital,population,interesting_fact}=ele;
    return(
      <div className='card' key={id}>
        <div className='container-card bg-blue-box'>
          <p className='card-title'>{name}</p>
          <p className=''>
            <span className='card-description'>Capital:</span> {capital}
          </p>
          <p className=''>
            <span className='card-description'>Population:</span>{population}
          </p>
          <p className=''>
            <span className='card-description'>Interesting Fact:</span> {interesting_fact}
          </p>
          
        </div>
       </div> 
    )

  })
}

       
      </div>
    </section>
  )
}

export default About
