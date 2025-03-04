import React from "react";
import "../css//Products.css";
import Title from "../components/Title";


import product1Img from "../assets/product1.svg";
import product2Img from "../assets/product1.svg";
import product3Img from "../assets/product1.svg";
import demoIcon from "../assets/play-circle.svg";

import patternImg from "../assets/pattern.svg";

const Products = () => {
    return (
        <div className="products-page">
            
        <Title s_title="Our Portfolio" intro="Products We Have Worked On" desc="Powerful, self-serve product and growth analytics to help you convert,
                    engage, and retain more users. Trusted by over 4,000 startups."/>

            {/* ====== PRODUCT #1 ====== */}
            <div className="product product1">
                {/* Left side: Text */}
                <div className="product-text">
                    <h3 className="product-title">Product #1</h3>
                    <p className="product-description">
                        Whether you have a team of 2 or 200, our shared team inboxes keep
                        everyone on the same page and in the loop. Leverage automation to
                        move fast, while always giving customers a human, helpful experience.
                    </p>
                    <div className="product-buttons">
                        <button className="product-btn primary-btn">  <img src={demoIcon} alt="Demo Icon" className="button-icon" /> Demo</button>
                        <button className="product-btn secondary-btn">Learn more</button>
                    </div>
                </div>

                {/* Right side: Image container with pattern + product image */}
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

            {/* ====== PRODUCT #2 ====== */}
            <div className="product product2">
                {/* Left side: Image container */}
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

                {/* Right side: Text */}
                <div className="product-text">
                    <h3 className="product-title">Product #2</h3>
                    <p className="product-description">
                        Keep your customers in the flow by embedding help articles right on
                        your website. With Beacon, they never have to leave the page to find
                        an answer.
                    </p>
                    <div className="product-buttons">
                        <button className="product-btn primary-btn"><img src={demoIcon} alt="Demo Icon" className="button-icon" /> Demo</button>
                        <button className="product-btn secondary-btn">Learn more</button>
                    </div>
                </div>
            </div>



            {/* ====== PRODUCT #3 (reversed orientation) ====== */}
            <div className="product product3">

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

                {/* Right side: Text */}
                <div className="product-text">
                    <h3 className="product-title">Product #3</h3>
                    <p className="product-description">
                        This final product showcases a reversed layout: the product image
                        on the left, text on the right. Easily adapt your workflow to fit
                        any scenario, ensuring maximum flexibility for your customers.
                    </p>
                    <div className="product-buttons">
                        <button className="product-btn primary-btn"><img src={demoIcon} alt="Demo Icon" className="button-icon" /> Demo</button>
                        <button className="product-btn secondary-btn">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
