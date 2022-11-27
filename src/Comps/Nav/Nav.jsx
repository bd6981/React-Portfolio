import React from 'react'
import "./Nav.css"
import {BiUserPin} from 'react-icons/bi'
import {AiTwotoneHome} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceFill} from 'react-icons/ri'
import {TiMessages} from 'react-icons/ti'

const Nav = () => {
  return (
    <nav>
      <a href="active"><AiTwotoneHome/></a>
      <a href="#about"><BiUserPin/></a>
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceFill/></a>
      <a href="#contact"><TiMessages/></a>
    </nav>
  )
}

export default Nav