import React from 'react'
import "./Nav.css"
import {BiUserPin} from 'react-icons/bi'
import {AiTwotoneHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {TiMessages} from 'react-icons/ti'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick= {() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiTwotoneHome/></a>
      <a href="#about" onClick= {() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUserPin/></a>
      <a href="#experience" onClick= {() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick= {() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill/></a>
      <a href="#contact" onClick= {() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessages/></a>
    </nav>
  )
}

export default Nav