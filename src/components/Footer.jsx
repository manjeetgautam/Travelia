import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="top-footer">
            <div className="heading">
                <h1>Travelia</h1>
                <p>Choose your favourite destination.</p>
            </div>

            <div className="social-links">
            <a href="/"><i class="fa-brands fa-square-facebook"></i></a>
            <a href="/"><i class="fa-brands fa-square-instagram"></i></a>
            <a href="/"><i class="fa-brands fa-square-youtube"></i></a>
            <a href="/"><i class="fa-brands fa-square-twitter"></i></a>
            </div>
        </div>

        <div className="links">
            <ul>
                <li className='li-head'>Project</li>
                <li><a href="/">Changelog</a></li>
                <li><a href="/">Status</a></li>
                <li><a href="/">License</a></li>
                <li><a href="/">All Versions</a></li>
            </ul>
            <ul>
                <li className='li-head'>Community</li>
                <li><a href="/">Github</a></li>
                <li><a href="/">Issues</a></li>
                <li><a href="/">Project</a></li>
                <li><a href="/">Twitter</a></li>
            </ul>
            <ul>
                <li className='li-head'>Help</li>
                <li><a href="/">Support</a></li>
                <li><a href="/">Troubleshooting</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
            <ul>
                <li className='li-head'>Others</li>
                <li><a href="/">Terms of Service</a></li>
                <li><a href="/">Privace Policy</a></li>
                <li><a href="/">License</a></li>
            </ul>
            
        </div>
    </footer>
  )
}

export default Footer