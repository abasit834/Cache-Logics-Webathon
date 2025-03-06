import React from "react";
import "../css/Standout.css";
import Title from "../components/Title"

import teamImage from "../assets/stout.svg";

import globeIcon from "../assets/globeIcon.svg";
import supportIcon from "../assets/supportIcon.svg";
import tailoredIcon from "../assets/tailoredIcon.svg";

const Standout = () => {
  return (
    <div className="standout-page" id="about-us">

      <Title s_title="Why Us" intro="How does Cache Logic stands out?" desc=" At Cache Logic, we are a passionate team of tech experts dedicated to powering
          your IT evolution. Founded by industry leaders with diverse expertise, we focus
          on delivering innovative, reliable, and scalable tech solutions—from AI and
          automation to cybersecurity and app development. Our mission is simple: help
          your business stay ahead in a digital world."/>


      <div className="standout-image-container">
        <img
          src={teamImage}
          alt="Team working together"
          className="standout-image"
        />
      </div>


      <div className="standout-cards-container">

        <div className="standout-card">
          <img src={globeIcon} alt="Globe Icon" className="standout-card__icon" />
          <h3 className="standout-card__title">Global Reach With Localized Expertise.</h3>
          <p className="standout-card__text">
            We bring world-class IT solutions to businesses across the globe while ensuring
            tailored, region-specific support that aligns with your unique market needs.
          </p>
          <a href="#" className="standout-card__link">Learn more →</a>
        </div>


        <div className="standout-card">
          <img src={supportIcon} alt="Support Icon" className="standout-card__icon" />
          <h3 className="standout-card__title">Dedicated Support To Drive Your Success.</h3>
          <p className="standout-card__text">
            Our expert team is always available to provide hands-on assistance, ensuring
            smooth implementation and ongoing optimization of your IT solutions.
          </p>
          <a href="#" className="standout-card__link">Learn more →</a>
        </div>


        <div className="standout-card">
          <img src={tailoredIcon} alt="Tailored Icon" className="standout-card__icon" />
          <h3 className="standout-card__title">Tailored Solutions For Every Industry.</h3>
          <p className="standout-card__text">
            Whether you’re in finance, healthcare, or e-commerce, we create customized
            technology solutions designed to meet your industry’s challenges and goals.
          </p>
          <a href="#" className="standout-card__link">Learn more →</a>
        </div>
      </div>
    </div>
  );
};

export default Standout;
