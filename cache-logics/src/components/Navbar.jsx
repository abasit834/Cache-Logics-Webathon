import React from "react";
import logo from "../assets/Layer1.svg";
import icon from "../assets/Icon.svg";
import hamburger from "../assets/burger-menu.png";
import close from '../assets/cross.png';
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [show , setShow] = useState(false);

    return(
        <header>   
        <img src={logo} alt="" />
        
        <nav id="large">
        <ul>
            <li>Home</li>
            <li>Services <img src={icon} alt="" /></li>
            <li>About <img src={icon} alt="" /></li>
            <li>Contact</li>
        </ul>
        </nav>

        
        <nav id="small" className={show ? "show" : "hide"}>
         <img src={close} alt="" onClick={()=>setShow(false)} />   
        <ul>
            <li>Home</li>
            <li>Services <img src={icon} alt="" /></li>
            <li>About <img src={icon} alt="" /></li>
            <li>Contact</li>
        </ul>
        </nav>

        <img id="mobile-icon" src={hamburger} alt="" onClick={()=>setShow(true)} />
        <button id="contact-us">Contact Us</button>
        </header>
    );
}

export default Navbar;