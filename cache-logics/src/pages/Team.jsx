import React, { useRef, useEffect } from "react";
import Title from "../components/Title";
import "../css/Team.css";

// Importing images for team members and icons
import ceo from "../assets/ceo.png";
import member from "../assets/member-2.png";
import member2 from "../assets/member-3.png";
import arrow from "../assets/arrow-up-right.svg";
import socialIcon1 from "../assets/white-icon-1.svg";
import socialIcon2 from "../assets/white-icon-2.svg";
import socialIcon3 from "../assets/social-icon-5.svg";

const Team = () => {
  // Refs to track the containers for animation
  const teamContainerRef = useRef(null);
  const smContainerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer options
    const options = { threshold: 0.5 };

    // Function to handle animations when elements appear in the viewport
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up"); // Add animation when visible
        }
       
      });
    };

    // Create the observer
    const observer = new IntersectionObserver(observerCallback, options);

    // Observe the containers if they exist
    if (teamContainerRef.current) observer.observe(teamContainerRef.current);
    if (smContainerRef.current) observer.observe(smContainerRef.current);

    return () => observer.disconnect(); // Cleanup observer on component unmount
  }, []);

  return (
    <div className="team-page">
      {/* Section title */}
      <Title
        s_title="Our Team"
        intro="Meet Our Team"
        desc="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."
      />

      <div className="team-body">
        {/* Buttons for extra actions */}
        <div className="team-btns">
          <button id="principles">Read our principles</button>
          <button id="hiring">We’re hiring!</button>
        </div>

        {/* Mobile version of the team section */}
        <div className="sm-container">

<div className="sm-img">
<div className="sm-content-sm">
<div className="sm-content">
<img className="sm-arrow-icon" src={arrow} alt=""/> 
    <h3 className="sm-first">Faizan Ahmed</h3>
    <p id="sm-founder">Founder & CEO</p>
    <p className="sm-first-p">Former co-founder of Opendoor. Early staff at Apple and Google.</p>
    <div className="social-media">
    <img className="sm-icons" src={socialIcon3} alt="Social Icon 3" />
    <img className="sm-icons" src={socialIcon1} alt="Social Icon 1" />
    <img className="sm-icons" src={socialIcon2} alt="Social Icon 2" />
    </div>
</div>
<img className="ceo" src={ceo} alt="" />

</div>

</div>

<div className="sm-img"> 
<div id="sm-co-founder" className="sm-content">
<img className="sm-arrow-icon" src={arrow} alt=""/> 
    <h3>Abdullah Sarfaraz</h3>
    <p id="sm-co-founder">Co founder</p>
</div>     

<img className="co-founder" src={member} alt="" />
</div>

<div className="sm-img">
<div id="sm-product" className="sm-content product-manager">
<img className="sm-arrow-icon" src={arrow} alt=""/> 
    <h3>Annie Stanley</h3>
    <p id="sm-product">Product Manager</p>
</div>    
<img className="product-manager" src={member2} alt="" />
</div>

</div>

        {/* Desktop version of the team section */}
        <div className="team-container" ref={teamContainerRef}>
          {/* CEO Section */}
          <div className="image-1">
            <img className="ceo" src={ceo} alt="CEO" />
            <img className="ceo-arrow-icon" src={arrow} alt="Arrow Icon" />
            <div className="content-1 first">
              <h3>Faizan Ahmed</h3>
              <p id="founder">Founder & CEO</p>
              <p>Former co-founder of Opendoor. Early staff at Apple and Google.</p>
            </div>
            {/* Social media icons */}
            <div className="social-media">
              <img src={socialIcon3} alt="Social Icon 3" />
              <img src={socialIcon1} alt="Social Icon 1" />
              <img src={socialIcon2} alt="Social Icon 2" />
            </div>
          </div>

          {/* Co-Founder Section */}
          <div className="image-2">
            <img className="co-founder" src={member} alt="Co-Founder" />
            <div className="content-1 second">
              <img className="arrow-icon" src={arrow} alt="Arrow Icon" />
              <h3>Abdullah Sarfaraz</h3>
              <p>Co-Founder</p>
            </div>
          </div>

          {/* Product Manager Section */}
          <div className="image-3">
            <img className="product-manager" src={member2} alt="Product Manager" />
            <div className="content-1 third">
              <img className="arrow-icon" src={arrow} alt="Arrow Icon" />
              <h3>Annie Stanley</h3>
              <p>Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
