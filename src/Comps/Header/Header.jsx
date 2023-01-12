import React from 'react'
import "./Header.css"
import CTA from './CTA'
import me from "./IMG_2662.jpg"
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Brittany Davis</h1>
        <h5 className='text-light'>Junior Fullstack Developer</h5>
        <CTA/>
        <HeaderSocial/>
        {/* <div className="me">
          {/* <img src={me} alt="me"/> */}

        {/* </div>  */}
        <a href="#contact" className='scroll__down' >Scroll Down</a>
      </div>
    </header>
  
  )
}

export default Header