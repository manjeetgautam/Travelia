import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../components/Hero'
import '../components/Hero.css'

export const About = () => {
  return (
    <>
      <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://www.hdwallpapers.net/previews/neon-sunset-1170.jpg"

        title="About"

        text="choose your favourite destination"
        />
    </>
  )
}
