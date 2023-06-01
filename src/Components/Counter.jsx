import React from 'react'
import '../Styles/section.css'

const Counter = ({ property, total }) => {
    return (
        <div className='Counter' >
            <p>{property}</p>
            <span>{total}</span>
        </div>
    )
}

export default Counter