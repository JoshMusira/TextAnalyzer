import React from 'react'
import image from '../night.jpg'
import '../../Styles/about.css'

const About = () => {
    return (
        <div className='mainContainer'>
            <div className="leftContainer">
                <img src={image} alt="imageLogo" />
            </div>

            <div className="rightContainer">
                <h1>ABOUT US</h1>
                <p>Consectetur adipisicing elit. Dolorum quo deserunt atque minima quia error nam ullam laborum debitis eius magnam, explicabo aliquid necessitatibus nulla nisi cumque illum excepturi labore.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor blanditiis voluptates est reprehenderit, architecto possimus quam earum distinctio facere! Quod quo et sint! Porro, maiores.</p>
            </div>
        </div>
    )
}

export default About