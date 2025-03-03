import React from "react";
import "../css/startscreen.css";
import bg from "../assets/image.png";
import call from "../assets/call.svg";
import companys from "../assets/logos.svg";


const Startscreen =()=>{
    return (
        <div id="start-screen">
             <img id="background-img" src={bg} alt="" />   
            <div className="main-container">
             <div className="bg-container"></div>

             <div className="content">
                  <h1>Fast-Tracking Your AI Evolution</h1>
                  <p>Empowering businesses with cutting-edge technology and tailored solutions.</p>
                  <div className="buttons">
                    <button id="discover-btn">Discover Our Services</button>
                    <button id="contact-btn">Contact Us</button>
             </div>
             </div>
            </div>
            <p id="company-text">Join 400+ companies that trust our innovative IT solutions to drive growth and success.</p>
           <img id="company-logos" src={companys} alt="" />
        </div>
    );
}

export default Startscreen;