import React from 'react'
import "./Header.css"
import CTA from './CTA'
import me from "./IMG_2662.jpg"
import HeaderSocial from './HeaderSocials'
import img from "../../assets/fast-forward.png";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Brittany Davis</h1>
        <h3 className="text-light">A Junior Fullstack Developer</h3>
        <CTA />
        <HeaderSocial />
        {/* <div className="me">
          {/* <img src={me} alt="me"/> */}

        {/* </div>  */}
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
       
      </div>
    </header>
  );
}

export default Header