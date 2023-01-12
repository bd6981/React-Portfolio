import React from 'react'
import Img from './CV.png'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Img} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets Talk</a>
    </div>
  )
}

export default CTA