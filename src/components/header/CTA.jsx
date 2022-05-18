import React from 'react'
import pepega from '../../assets/pepega.jpg' 

const CTA = () => {
  return (
    <div className='cta'>
        <a href={pepega} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets talk</a>
    </div>
  )
}

export default CTA