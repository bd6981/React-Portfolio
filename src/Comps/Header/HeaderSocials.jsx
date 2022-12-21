import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/brittany~davis/" target="_blank" style={{color: "white"}}><BsLinkedin/></a>
        <a href="https://github.com/bd6981" target="_blank" style={{color: "white" }} onClick={{color: "green"}}><BsGithub/></a>
        </div>
  )
}

export default HeaderSocials