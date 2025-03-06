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
        <img id="logo" src={logo} alt="" />
        
        <nav id="large">
        <ul>
            <li>Home</li>
            <li  onClick={() => { document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });}}>Services <img src={icon} alt="" /></li>
            <li  onClick={() => { document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });}}>About <img src={icon} alt="" /></li>
            <li  onClick={() => { document.getElementById("contact-us-page")?.scrollIntoView({ behavior: "smooth" });}}>Contact</li>
        </ul>
        </nav>

        
        <nav id="small" className={show ? "show" : "hide"}>
         <img src={close} alt="" onClick={()=>setShow(false)} />   
        <ul>
            <li>Home</li>
            <li  onClick={() => { document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });setShow(false)}}>Services <img src={icon} alt="" /></li>
            <li  onClick={() => { document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });setShow(false)}}>About <img src={icon} alt="" /></li>
            <li  onClick={() => { document.getElementById("contact-us-page")?.scrollIntoView({ behavior: "smooth" });setShow(false)}}>Contact</li>
        </ul>
        </nav>

        <img id="mobile-icon" src={hamburger} alt="" onClick={()=>setShow(true)} />
        <button id="contact-us" onClick={() => { document.getElementById("contact-us-page")?.scrollIntoView({ behavior: "smooth" });}}
        >
        Contact Us
        </button>
        </header>
    );
}

export default Navbar;