import React from 'react'
import "./About.css"
import me from "../Header/me.png"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>A Little </h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>General Assembly: Software Engineering</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Hours</h5>
              <small>500 plus hours Full-Stack Dev</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Language</h5>
              <small>Javascript, </small>
              <small>React, Node, </small>
              <small>CSS, HTML, MongoDB </small>
            </article>
          </div>

          <p>
            Hi! I attended the Fully-Immersive Software Engineering Boot-camp through General Assembly. This boot-camp taught me languages such as, Vanilla Javascript, React, Node, MongoDB, Python. I also gain essential skills like, learning the core skills to build Full-Stack web apps, computer science fundamentals, collaboration tools, working with third-part API's, utilizing Postman, version control with Git and GitHub, and much more! Through this award winning program I have learned, implemented, and successfully completed web applications in various languages, that I am proud of! 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About