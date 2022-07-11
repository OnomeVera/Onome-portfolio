import React from 'react'
import './about.css'
import SMILINGME from '../../assets/smiling.jpg'
import {FaAward} from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={SMILINGME} alt="my pic" />
          </div>
        </div>

        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ completed projects/Tasks</small>
            </article>
          </div>

          <p>
          A dedicated and creative Developer with about 2 years of experience and a background in Mathematics with the ability to communicate in both French and English language. Ready to work as a team to develop, test, and maintain software applications and solutions.

            </p>

            <a href='#contact' className="btn btn-primary">Let's talk</a>

        </div>
      </div>
      </section>
  )
}

export default About