import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../components/Hero'
import "../components/Hero.css"

export const Service = () => {
  return (
    <>
      <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://www.hdwallpapers.net/previews/starry-night-at-ghoufi-algeria-925.jpg"

        title="Service"

        text="choose your favourite destination"
        />
    </>
  )
}
