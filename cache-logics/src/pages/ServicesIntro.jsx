import React from "react";
import "../css/ServicesIntro.css";
import Title from "../components/Title";

// Importing service icons
import aiIcon from "../assets/aiIcon.svg";
import autoIcon from "../assets/autoIcon.svg";
import cyberIcon from "../assets/cyberIcon.svg";
import webIcon from "../assets/webIcon.svg";
import arrowIcon from "../assets/arrowIcon.svg";
import warrowIcon from "../assets/warrowIcon.svg";

const ServicesIntro = () => {
  return (
    <div className="services-page" id="services">
    
      {/* Section title and description */}
      <Title 
        s_title="Our Services" 
        intro="Services We Offer" 
        desc="Powerful, self-serve product and growth analytics to help you convert,
              engage, and retain more users."
      />

      {/* Container for service cards */}
      <div className="services-list">
      
        {/* First row of service cards */}
        <div className="services-row">
        
          {/* AI/ML Service Card */}
          <div className="service-card" id="card1">
            <img src={aiIcon} alt="AI Icon" className="card-icon" />
            <h3>Artificial Intelligence (AI/ML)</h3>
            <p>
              Revolutionizing decisions through intelligent solutions. We use the latest AI solutions to enhance and digitalize your operations.
            </p>
            <a href="#" className="service-link">
              View Service 
              <img src={arrowIcon} alt="arrow icon" className="service-icon" />
            </a>
          </div>

          {/* Automation Service Card (Highlighted) */}
          <div className="service-card highlight" id="card2">
            <img src={autoIcon} alt="Automation Icon" className="card-icon" />
            <h3>Automation</h3>
            <p>Streamlining processes for greater efficiency.</p>
            <a href="#" className="service-link">
              View Service
              <img src={warrowIcon} alt="arrow icon" className="service-icon" />
            </a>
          </div>

          {/* Cybersecurity Service Card */}
          <div className="service-card" id="card3">
            <img src={cyberIcon} alt="Cybersecurity Icon" className="card-icon" />
            <h3>Cybersecurity</h3>
            <p>Protecting your business from evolving threats.</p>
            <a href="#" className="service-link">
              View Service
              <img src={arrowIcon} alt="arrow icon" className="service-icon" />
            </a>
          </div>
        </div>

        {/* Second row of service cards */}
        <div className="services-row">
        
          {/* Custom Solutions Service Card */}
          <div className="service-card" id="card4">
            <img src={cyberIcon} alt="Custom Solutions Icon" className="card-icon" />
            <h3>Custom Solutions</h3>
            <p>Tech built uniquely for your needs.</p>
            <a href="#" className="service-link">
              View Service
              <img src={arrowIcon} alt="arrow icon" className="service-icon" />
            </a>
          </div>

          {/* DevOps Service Card */}
          <div className="service-card" id="card5">
            <img src={cyberIcon} alt="DevOps Icon" className="card-icon" />
            <h3>DevOps</h3>
            <p>Optimizing development and deployment pipelines.</p>
            <a href="#" className="service-link">
              View Service
              <img src={arrowIcon} alt="arrow icon" className="service-icon" />
            </a>
          </div>

          {/* Web & Mobile Apps Service Card */}
          <div className="service-card" id="card6">
            <img src={webIcon} alt="Web & Mobile Apps Icon" className="card-icon" />
            <h3>Web & Mobile Apps</h3>
            <p>
              Building high-performance, user-friendly applications tailored to your business needs. 
              From sleek mobile experiences to robust web platforms, we ensure seamless functionality and scalability.
            </p>
            <a href="#" className="service-link">
              View Service
              <img src={arrowIcon} alt="arrow icon" className="service-icon" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServicesIntro;
