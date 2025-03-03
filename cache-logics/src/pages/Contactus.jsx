import React from "react";
import "../css/Contactus.css"
import email from "../assets/mail-01.svg";
import phone from "../assets/mobile-icon.svg";
import office from "../assets/Icon-2.svg";

const Contactus = ()=>{
    return (
        <div className="contact-us">
            <div className="contact-us-intro">
                <span className="contact-us-intro__subtitle">Contact Us</span>
                <h2 className="contact-us-intro__title">Let’s Build the Next Product Together</h2>
                <p className="contact-us-intro__description">
                We’d love to hear from you. Please fill out this form or shoot us an email.
                </p>

        </div>
        
        <div className="contact-main">

        <div className="contact-info">

        <div>
                <img src={email} alt="" />
                <h3>Email</h3>
                <p>Our friendly team is here to help.</p>
                <span>hi@cachelogic.tech</span>
           </div>

           <div>
                <img src={phone} alt="" />
                <h3>Phone</h3>
                <p>Mon-Fri from 8am to 5pm.</p>
                <span>+1 (555) 000-0000</span>
           </div>

           <div>
                 <img src={office} alt="" />
                 <h3>Office</h3>
                 <p>Come say hello at our office HQ.</p>
                 <span>Building X, Street Y</span>
           </div>
            
        </div>

<div class="contact-form">
    <form action="">
        <div class="form-group">
            <div class="input-wrapper">
                <label for="first-name">First name</label>
                <input class="names" type="text" id="first-name" placeholder="First name"/>
            </div>
            <div class="input-wrapper">
                <label for="last-name">Last name</label>
                <input class="names" type="text" id="last-name" placeholder="Last name"/>
            </div>
        </div>
        
        <div class="input-wrapper">
            <label for="email">Email</label>
            <input type="text" id="email" placeholder="you@company.com"/>
        </div>

        <div class="input-wrapper">
            <label for="message">Message</label>
            <textarea id="message" placeholder="Leave us a message..."></textarea>
        </div>

        <div class="checkbox-wrapper">
            <input type="checkbox" id="privacy-policy"/>
            <label for="privacy-policy">You agree to our friendly <a href="#">privacy policy</a>.</label>
        </div>

        <button type="submit">Send message</button>
    </form>
</div>

        </div>
       


        </div>
    );
}

export default Contactus;