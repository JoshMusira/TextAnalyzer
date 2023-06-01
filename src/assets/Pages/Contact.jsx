import React from 'react'
import ContactComponent from '../../Components/ContactComponent';
import { GoLocation } from "react-icons/go"
import { MdOutlineAddIcCall } from "react-icons/md"
import { FaFax } from "react-icons/fa"
import { TfiEmail } from "react-icons/tfi"

import '../../Styles/contact.css'

const Contact = () => {
    return (
        <div className='masterContainer'>

            <div className='TopContainer'>

                <ContactComponent image={<GoLocation />} service="OUR MAIN OFFICE" location="SoHo 94 Broadway St Detroit" />
                <ContactComponent image={<MdOutlineAddIcCall />} service="PHONE NUMBER" location="2334-136-8600 " />
                <ContactComponent image={<FaFax />} service="FAX" location="123-5334-56200" />
                <ContactComponent image={<TfiEmail />} service="EMAIL" location="musira@gmail.com" />
            </div>
            <div className="FormContainer">
                <form action="">
                    <span> <span className="first-letter">C</span>ontact  <span className="first-letter">U</span>s</span>
                    <input type="text" placeholder='Enter your Name' />
                    <input type="email" placeholder='Enter valid email address' />
                    <textarea name="" id="" ></textarea>

                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;