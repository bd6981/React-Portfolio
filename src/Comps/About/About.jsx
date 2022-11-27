import React from 'react'
import "./About.css"
import me from "../Header/me.png"
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={me} alt="me" />
          </div>
        </div>
          <div className='about_content'></div>
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experiance</h5>
              <small>General Assembly</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experiance</h5>
              <small>General Assembly</small>
            </article>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experiance</h5>
              <small>General Assembly</small>
            </article>
          </div>
        
      </div>

    </section>    
  )
}

export default About
