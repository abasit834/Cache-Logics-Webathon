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
    <footer className="gnb-lsk-s9">
      <div className="urh-lkk-s8">
        <div className="zxc-h-txt">
          <h2 className="zxc-h-ttl">
            Innovating IT solutions for the modern world.
          </h2>
          <p className="zxc-h-stl">
            Empowering businesses with cutting-edge technology and <br /> 
            tailored solutions.
          </p>
        </div>
        <div className="zxc-h-btns">
          <button className="btn-x11 p-btn-x11">Discover Our Services</button>
          <button className="btn-x11 s-btn-x11">
            <img src={callIcon} alt="Call Icon" />
            <span>Contact Us</span>
          </button>
        </div>
      </div>

      {/* Large background text */}
      
      <div className="bg-txt-lkj">cache logic</div>

      <div className="line-lkj"></div>

      <div className="ppp-cnt-12">
        <div className="qwe-lft-5">
          <div className="logo-lkj">
            <h1 className="h1lg-lkj">
              <img src={logoIcon} alt="Cache Logic Logo" /> Cache Logic
            </h1>
          </div>
          <p className="desc-lkj">
            Cache Logic is a global IT services firm committed to powering 
            your business with innovative tech solutions.
          </p>
          <p className="ccc-rights">
            © 2027 Cache Logic. All rights reserved.
          </p>
        </div>

        <div className="rty-rgt-5">
          <h4 className="c-ttl-lkj">Company</h4>
          <ul className="llinks-lkj">
            <li>About us</li>
            <li>Careers</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
         
        </div>
       
          <div className="ic-lkj">
            <img src={socialIcon1} alt="Social Icon 1" />
            <img src={socialIcon2} alt="Social Icon 2" />
            <img src={socialIcon3} alt="Social Icon 3" />
            <img src={socialIcon4} alt="Social Icon 4" />
            
          </div>
          
          </div>
          <div className="line-lkj2"></div>
        
    </footer>
  );
};

export default Footer;
