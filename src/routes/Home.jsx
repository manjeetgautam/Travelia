import React from 'react'
import Hero from '../components/Hero'
import {Navbar} from '../components/Navbar'

export const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww"

        title="Your Journey Your Story"

        text="choose your favourite destination"
        />
    </>
  )
}
