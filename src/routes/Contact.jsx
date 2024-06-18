import React from 'react'
import { Navbar } from '../components/Navbar'
import Hero from '../components/Hero'
import "../components/Hero.css"
import Form from '../components/Form'

export const Contact = () => {
  return (
    <>
      <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg="https://www.hdwallpapers.net/previews/lake-prags-italy-1053.jpg"

        title="Contact"

        text="choose your favourite destination"
        />
      <Form/>
    </>
  )
}
