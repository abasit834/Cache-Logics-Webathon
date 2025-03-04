import React from "react";
import Title from "../components/Title";
import "../css/Team.css";

import ceo from "../assets/ceo.png";
import member from "../assets/member-2.png";
import member2 from '../assets/member-3.png';

const Team = ()=>{
    return (
        <div className="team-page">
        <Title s_title="Our Team" intro="Meet Our Team" desc="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."/>
        
        <div className="team-body">
        <div className="team-btns">
             <button id="principles">Read our principles</button>
             <button id="hiring">We’re hiring!</button>
        </div>

        <div className="team-container">
             <div className="image-1">
                <img src={ceo} alt="" />
                <div className="content-1 first">
                <h3>Faizan Ahmed</h3>
                <p id="founder">Founder & CEO</p>
                <p>Former co-founder of Opendoor. Early staff at Apple and Google.</p>
                </div>
                </div>

                <div className="image-2">
                <img src={member} alt="" />
                {/* <div className="content-1 second">

                </div> */}
                </div>

                <div className="image-3">
                <img src={member2} alt="" />
                <div className="content-1 third">
                    <h3>Annie Stanley</h3>
                    <p>Product Manager</p>
                </div>
               </div> 

        </div>

        </div>

        </div>

    );

}

export default Team;

