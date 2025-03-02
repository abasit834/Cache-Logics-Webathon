import React from "react";
import "./ServicesIntro.css";

import aiIcon from "../assets/aiIcon.svg";
import autoIcon from "../assets/autoIcon.svg";
import cyberIcon from "../assets/cyberIcon.svg";
import webIcon from "../assets/webIcon.svg";
import arrowIcon from "../assets/arrowIcon.svg";
import warrowIcon from "../assets/warrowIcon.svg";

const ServicesIntro = () => {
  return (
    <div className="services-page">
      {/* INTRO SECTION */}
      <div className="services-intro">
        <span className="services-intro__subtitle">Our Services</span>
        <h2 className="services-intro__title">Services We Offer</h2>
        <p className="services-intro__description">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users.
        </p>
      </div>

      {/* SERVICE CARDS */}
      <div className="services-list">
        <div className="services-row">
          <div className="service-card" id="card1">
            <img src={aiIcon} alt="AI Icon" className="card-icon" />
            <h3>Artificial Intelligence (AI/ML)</h3>
            <p>
              Revolutionizing decisions through intelligent solutions. We use latest AI solutions to enhance and digitalize your operations.
            </p>
            <a href="#" className="service-link">View Service <img
              src={arrowIcon}
              alt="arrow icon"
              className="service-icon"
            /></a>
          </div>

          <div className="service-card highlight" id="card2">
            <img src={autoIcon} alt="auto Icon" className="card-icon" />
            <h3>Automation</h3>
            <p>Streamlining processes for greater efficiency.</p>
            <a href="#" className="service-link">View Service
              <img
                src={warrowIcon}
                alt="warrow icon"
                className="service-icon"
              />
            </a>
          </div>

          <div className="service-card" id="card3">
            <img src={cyberIcon} alt="cyber Icon" className="card-icon" />
            <h3>Cybersecurity</h3>
            <p>Protecting your business from evolving threats.</p>
            <a href="#" className="service-link">View Service
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="service-icon"
              />
            </a>
          </div>
        </div>

        <div className="services-row">
          <div className="service-card" id="card4">
            <img src={cyberIcon} alt="cyber Icon" className="card-icon" />
            <h3>Custom Solutions</h3>
            <p>Tech built uniquely for your needs.</p>
            <a href="#" className="service-link">View Service
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="service-icon"
              />
            </a>
          </div>



          <div className="service-card" id="card5">
            <img src={cyberIcon} alt="cyber Icon" className="card-icon" />
            <h3>DevOps</h3>
            <p>Optimizing development and deployment pipelines.</p>
            <a href="#" className="service-link">View Service
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="service-icon"
              />
            </a>
          </div>

          <div className="service-card" id="card6">
            <img src={webIcon} alt="web Icon" className="card-icon" />
            <h3>Web & Mobile Apps</h3>
            <p>
              Building high-performance, user-friendly applications tailored to your business needs. From sleek mobile experiences to robust web platforms, we ensure seamless functionality and scalability.
            </p>
            <a href="#" className="service-link">View Service
              <img
                src={arrowIcon}
                alt="arrow icon"
                className="service-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesIntro;
