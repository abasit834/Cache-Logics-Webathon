import React from "react";
import Title from "../components/Title";
import "../css/Team.css";

import ceo from "../assets/ceo.png";
import member from "../assets/member-2.png";
import member2 from '../assets/member-3.png';
import arrow from "../assets/arrow-up-right.svg";
import socialIcon1 from "../assets/white-icon-1.svg";
import socialIcon2 from "../assets/white-icon-2.svg";
import socialIcon3 from "../assets/social-icon-5.svg";


const Team = ()=>{
    return (
        <div className="team-page">
        <Title s_title="Our Team" intro="Meet Our Team" desc="Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work."/>
        
        <div className="team-body">
        <div className="team-btns">
             <button id="principles">Read our principles</button>
             <button id="hiring">We’re hiring!</button>
        </div>


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

        <div className="team-container">
             <div className="image-1">
                <img className="ceo" src={ceo} alt="" />
                <img className="ceo-arrow-icon" src={arrow} alt=""/>  
                <div className="content-1 first">
                <h3>Faizan Ahmed</h3>
                <p id="founder">Founder & CEO</p>
                <p>Former co-founder of Opendoor. Early staff at Apple and Google.</p>
                </div>
                <div className="social-media">
                <img src={socialIcon3} alt="Social Icon 3" />
                <img src={socialIcon1} alt="Social Icon 1" />
                <img src={socialIcon2} alt="Social Icon 2" />
                </div>
              </div>

                <div className="image-2"> 
                <img className="co-founder" src={member} alt="" />
                <div className="content-1 second">
                <img className="arrow-icon" src={arrow} alt="" />
                    <h3>Abdullah Sarfaraz</h3>
                    <p>Co-Founder</p>
                </div>   
                </div>

                <div className="image-3">
                <img className="product-manager" src={member2} alt="" />
                <div className="content-1 third">
                <img className="arrow-icon" src={arrow} alt="" />
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

