import React from 'react'
import "./Header.css"
import CTA from './CTA'
import me from "./IMG_2662.jpg"
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Brittany Davis</h1>
        <h3 className='text-light'>Junior Fullstack Developer</h3>
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