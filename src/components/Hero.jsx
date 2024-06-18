import React from 'react'
import './Hero.css'

const Hero = (props) => {
  return (
    <>
        <div className={props.cName}>
            <img src={props.heroImg} alt="Heroimg" className="Heroimg" />
            <div className="hero-text">
                <h1 className='titleName'>{props.title}</h1>
                <p className='para'>{props.text}</p>
                <a className='hero-btn' href="/">
                    Travel Plan
                </a>
            </div>
        </div>

    </>
  )
}

export default Hero