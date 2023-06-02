
import React from 'react'
import '../Styles/average.css'
const Average = ({ time, longest }) => {
    return (
        <div className='small-container'>
            <p>{time} </p>
            <span>{longest}</span>
        </div>
    )
}

export default Average