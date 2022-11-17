import React, { useState, useRef } from 'react'
import { Navbar } from '../Navbar'
import './contact.css'

export const Contact = () => {

    return (
        <div>
            <Navbar />

            <h2 className="title">Contact us</h2>
            <p className="subtitle">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>
                
            <div className="container">
                <form action="action_page.php">

                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                    <label htmlFor="subject">Subject</label>
                    <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                    <input type="submit" value="Submit"/>

                </form>
                </div>
        </div>
    )}