import React from 'react'
import Navbar from './Navbar'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='main-navbar' >
            <Navbar name="Text Analyzer" />
            <div className="main-navbar-elements">
                {/* <Navbar name="About Us" /> */}
                <Link id='Home' className='Link active' to="/">Home</Link>
                <Link id='about' className='Link' to="/about">About</Link>
                <Link id='contact' className='Link' to="/contact">Contact</Link>
                {/* <Navbar name="Contact Us" /> */}

            </div>
            <div className="humberger-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Header