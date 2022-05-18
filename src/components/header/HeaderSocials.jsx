import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillGoogleCircle} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
         <a href="https://linkedin.com" target='_blank'><FaLinkedin/></a>   
         <a href="https://github.com" target='_blank'><AiFillGithub/></a>   
         <a href="https://google.com" target='_blank'><AiFillGoogleCircle/></a>   
    </div>
  )
}

export default HeaderSocials