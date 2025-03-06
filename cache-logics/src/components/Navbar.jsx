import React, { useState } from "react";
import logo from "../assets/Layer1.svg";
import icon from "../assets/Icon.svg";
import hamburger from "../assets/burger-menu.png";
import close from '../assets/cross.png';
import "./Navbar.css";

const Navbar = () => {
  // State to control whether the mobile menu is visible or not
  const [show, setShow] = useState(false);

  return (
    <header>
      {/* Company Logo */}
      <img id="logo" src={logo} alt="Company Logo" />

      {/* Navigation for larger screens */}
      <nav id="large">
        <ul>
          <li>Home</li>
          <li
            onClick={() => {
              // Smoothly scroll to the Services section
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Services <img src={icon} alt="Icon" />
          </li>
          <li
            onClick={() => {
              // Smoothly scroll to the About Us section
              document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            About <img src={icon} alt="Icon" />
          </li>
          <li
            onClick={() => {
              // Smoothly scroll to the Contact Us section
              document.getElementById("contact-us-page")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* Mobile navigation menu */}
      <nav id="small" className={show ? "show" : "hide"}>
        {/* Close icon to hide the mobile menu */}
        <img src={close} alt="Close Menu" onClick={() => setShow(false)} />
        <ul>
          <li>Home</li>
          <li
            onClick={() => {
              document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              setShow(false); // close mobile menu after clicking
            }}
          >
            Services <img src={icon} alt="Icon" />
          </li>
          <li
            onClick={() => {
              document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
              setShow(false);
            }}
          >
            About <img src={icon} alt="Icon" />
          </li>
          <li
            onClick={() => {
              document.getElementById("contact-us-page")?.scrollIntoView({ behavior: "smooth" });
              setShow(false);
            }}
          >
            Contact
          </li>
        </ul>
      </nav>

      {/* Hamburger icon for mobile menu */}
      <img
        id="mobile-icon"
        src={hamburger}
        alt="Open Menu"
        onClick={() => setShow(true)}
      />

      {/* Contact Us button for large screens */}
      <button
        id="contact-us"
        onClick={() => {
          document.getElementById("contact-us-page")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        Contact Us
      </button>
    </header>
  );
};

export default Navbar;
