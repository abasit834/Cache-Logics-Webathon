import React from "react";
import '../css/Locations.css';
import world from '../assets/Content.svg';
import Title from "../components/Title";

const Locations =()=>{
    return (
        <div className="location-page">

        <Title s_title="Our Location" intro="We Are WORLDWIDE" desc="We help our clients from almost every part of the world."/>

        <div className="world-image">
          <img src={world} alt="" />  

        </div>

        <div className="countries">
           
           <div>
                <h3>United States</h3>
                <p>Building X, Street Y, Baltimore MD</p>
                <span>Find Us</span>
           </div>

           <div>
                <h3>Pakistan</h3>
                <p>Building X, Street Y, Lahore PK</p>
                <span>Find Us</span>
           </div>

           <div>
                 <h3>Whole Earth</h3>
                 <p>Mon-Fri from 8am to 5pm (PST).</p>
                 <span>+1 (555) 000-0000</span>
           </div>
            

        </div>

        </div>
    );
}

export default Locations;