import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Plan</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project Planning | Wireframes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Technical Architecture | Flowcharts </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implementation of Initual User Interface</p>
            </li>
          </ul>
        </article>
        {/* plan */}
        <article className="service">
          <div className="service__head">
            <h3>Design & Develop</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Detailing Specifications</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Finalize User Interface</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Application Archtecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Interface Design & Test Plan </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>App Code & System Interface Development</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Deploy & Maintain</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Pre-Deployment Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Deploy To Staging Envirmonent</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Post-Depoyment Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Continued Maintence and Bug Checks</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services