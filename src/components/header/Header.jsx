import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/me6.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`am</h5>
        <h1>Kristaps</h1>
        <h5 className="text-light">
          Web Developer
        </h5>
        <CTA />
          <a href="#contact" className='scroll__down'>Scroll down</a>
        <HeaderSocials />
        <div className='me'>
          <img src={ME} alt="" />
        </div>
        
      

      </div>
    </header>
  )
}

export default Header