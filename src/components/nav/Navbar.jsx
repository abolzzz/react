import React,{ useState } from 'react'
import './Navbar.css'
import {FaHome} from 'react-icons/fa'
import {FaUserCheck} from 'react-icons/fa'
import {BiBookBookmark} from 'react-icons/bi'
import {RiCustomerServiceLine} from 'react-icons/ri'
import {TiContacts} from 'react-icons/ti'



const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" id='1' onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FaHome/></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserCheck/></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiCustomerServiceLine/></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts/></a>
    </nav>
  )
}

export default Navbar