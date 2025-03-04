import React from "react";
import "../css/Footer.css";
import logoIcon from "../assets/logoIcon.svg";
import socialIcon1 from "../assets/socialIcon1.svg";
import socialIcon2 from "../assets/socialIcon2.svg";
import socialIcon3 from "../assets/socialIcon3.svg";
import socialIcon4 from "../assets/socialIcon4.svg";
import callIcon from "../assets/callIcon.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-hero">
        <div className="footer-hero-text">
          <h2 className="footer-hero-title">
            Innovating IT solutions for the modern world.
          </h2>
          <p className="footer-hero-subtitle">
            Empowering businesses with cutting-edge technology and <br /> 
            tailored solutions.
          </p>
        </div>
        <div className="footer-hero-buttons">
          <button className="footer-btn primary-btn">Discover Our Services</button>
          <button className="footer-btn secondary-btn">
            <img src={callIcon} alt="Call Icon" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>

      {/* Large background text */}
      <div className="footer-bg-text">cache logic</div>

      <div className="footer-line"></div>

      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <h1 className="h1logo">
              <img src={logoIcon} alt="Cache Logic Logo" /> Cache Logic
            </h1>
          </div>
          <p className="footer-description">
            Cache Logic is a global IT services firm committed to powering 
            your business with innovative tech solutions.
          </p>
          <p className="footer-copyright">
            © 2027 Cache Logic. All rights reserved.
          </p>
        </div>

        <div className="footer-right">
          <h4 className="footer-column-title">Company</h4>
          <ul className="footer-links">
            <li>About us</li>
            <li>Careers</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
          <div className="footer-icons">
            <img src={socialIcon1} alt="Social Icon 1" />
            <img src={socialIcon2} alt="Social Icon 2" />
            <img src={socialIcon3} alt="Social Icon 3" />
            <img src={socialIcon4} alt="Social Icon 4" />
          </div>
        </div>
      </div>

      <div className="footer-line"></div>
    </footer>
  );
};

export default Footer;
