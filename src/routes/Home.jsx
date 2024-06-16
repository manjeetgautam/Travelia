import React from 'react'
import Hero from '../components/Hero'
import {Navbar} from '../components/Navbar'
import './Home.css'

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

<div className="section1">
          <div className="section-title">
            <h3>Popular Destinations</h3>
            <p>Tours give you the opportunity to see a lot, within a time frame</p>
          </div>

          <div className="sec-box1">
            <div className="text-area">
              <h3>Tall Volcano, Batangas</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam culpa veniam maxime. Assumenda magnam voluptates quasi consequuntur deserunt eveniet, natus culpa quo iste aspernatur architecto quibusdam quisquam sapiente corrupti ut odit fuga iure illo necessitatibus distinctio id omnis eos, accusantium itaque perferendis veniam eum nisi enim eius consectetur? Expedita voluptatum unde qui ducimus adipisci quo ullam deleniti maiores in molestias?</p>
            </div>

            <div className="img-area">
              <img className='img1' src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <img className='img2' src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
          </div>

          <div className="sec-box1">
          <div className="img-area">
              <img className='img1' src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <img className='img2' src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className="text-area">
              <h3>Tall Volcano, Batangas</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam culpa veniam maxime. Assumenda magnam voluptates quasi consequuntur deserunt eveniet, natus culpa quo iste aspernatur architecto quibusdam quisquam sapiente corrupti ut odit fuga iure illo necessitatibus distinctio id omnis eos, accusantium itaque perferendis veniam eum nisi enim eius consectetur? Expedita voluptatum unde qui ducimus adipisci quo ullam deleniti maiores in molestias?</p>
            </div>

            
          </div>
        </div>
    </>
  )
}
