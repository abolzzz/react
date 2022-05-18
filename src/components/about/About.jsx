import React from 'react'
import './About.css'
import ME from '../../assets/me6.png'
import { BsFillAwardFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiFillFolderOpen } from 'react-icons/ai'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

    <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about me" />
        </div>
    </div>
      
        
        <div className="about__content">
          <div className="about__cards">
              <article className='about__card'>
                <BsFillAwardFill className='about__icon'/>
                <h5>Experience</h5>
                <small>0 year Experience</small>
              </article>
      
              <article className='about__card'>
                <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>0 clients +</small>
              </article>
        
              <article className='about__card'>
                <AiFillFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>0 projects</small>
              </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ratione tempora. Ut nesciunt accusantium, vel hic magni tempora sit animi sint voluptatibus dolores enim, aliquam odio, repellat eligendi expedita fuga.</p>

          <a href="contact" className='btn btn-primary'>Let`s Talk</a>
        </div>
  </div>
    

    </section>
  )
}

export default about