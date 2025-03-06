import React, { useEffect, useRef } from "react";
import "../css/Products.css";
import Title from "../components/Title";

import product1Img from "../assets/product1.svg";
import product2Img from "../assets/product1.svg";
import product3Img from "../assets/product1.svg";
import demoIcon from "../assets/play-circle.svg";
import patternImg from "../assets/pattern.svg";

const Products = () => {
  const prod1Ref = useRef(null);
  const prod2Ref = useRef(null);
  const prod3Ref = useRef(null);

  useEffect(() => {
    const options = {
      threshold: 0.5,
    };
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
          entry.target.classList.add(entry.target.dataset.animation);
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, options);
    if (prod1Ref.current) observer.observe(prod1Ref.current);
    if (prod2Ref.current) observer.observe(prod2Ref.current);
    if (prod3Ref.current) observer.observe(prod3Ref.current);
  }, []);

  return (
    <div className="products-page">
      <Title
        s_title="Our Portfolio"
        intro="Products We Have Worked On"
        desc="Powerful, self-serve product and growth analytics to help you convert,
              engage, and retain more users. Trusted by over 4,000 startups."
      />

      {/* PRODUCT #1: animate from left */}
      <div
        ref={prod1Ref}
        className="product product1"
        data-animation="animate-left"
      >
        <div className="product-text">
          <h3 className="product-title">Product #1</h3>
          <p className="product-description">
            Whether you have a team of 2 or 200, our shared team inboxes keep everyone
            on the same page and in the loop. Leverage automation to move fast,
            while always giving customers a human, helpful experience.
          </p>
          <div className="product-buttons">
            <button className="product-btn primary-btn">
              <img src={demoIcon} alt="Demo Icon" className="button-icon" /> Demo
            </button>
            <button className="product-btn secondary-btn">Learn more</button>
          </div>
        </div>

        <div className="product-image-container">
          <img
            src={patternImg}
            alt="Decorative pattern"
            className="pattern-image pattern-image1"
          />
          <img
            src={product1Img}
            alt="Product 1 Screenshot"
            className="product-image"
          />
        </div>
      </div>

      {/* PRODUCT #2: animate from right */}
      <div
        ref={prod2Ref}
        className="product product2"
        data-animation="animate-right"
      >
        <div className="product-image-container">
          <img
            src={patternImg}
            alt="Decorative pattern"
            className="pattern-image pattern-image2"
          />
          <img
            src={product2Img}
            alt="Product 2 Screenshot"
            className="product-image"
          />
        </div>

        <div className="product-text">
          <h3 className="product-title">Product #2</h3>
          <p className="product-description">
            Keep your customers in the flow by embedding help articles right on
            your website. With Beacon, they never have to leave the page to find
            an answer.
          </p>
          <div className="product-buttons">
            <button className="product-btn primary-btn">
              <img src={demoIcon} alt="Demo Icon" className="button-icon" /> Demo
            </button>
            <button className="product-btn secondary-btn">Learn more</button>
          </div>
        </div>
      </div>

      {/* PRODUCT #3: animate from left (reversed orientation) */}
      <div
        ref={prod3Ref}
        className="product product3"
        data-animation="animate-left"
      >
        <div className="product-image-container">
          <img
            src={patternImg}
            alt="Decorative pattern"
            className="pattern-image pattern-image3"
          />
          <img
            src={product3Img}
            alt="Product 3 Screenshot"
            className="product-image"
          />
        </div>

        <div className="product-text">
          <h3 className="product-title">Product #3</h3>
          <p className="product-description">
          Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.
          </p>
          <div className="product-buttons">
            <button className="product-btn primary-btn">
              <img src={demoIcon} alt="Demo Icon" className="button-icon" /> Demo
            </button>
            <button className="product-btn secondary-btn">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
