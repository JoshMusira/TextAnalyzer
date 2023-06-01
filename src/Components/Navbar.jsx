import React from 'react'

const Navbar = ({ name }) => {
    return (
        <div className='navbar-container'>
            <span>{name}</span>
        </div>
    )
}

export default Navbar