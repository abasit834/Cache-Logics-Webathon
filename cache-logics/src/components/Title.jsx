import React from "react";
import "./Title.css";


const Title = (props) => {
    return(
        <div>
        <div className="intro">
        <span className="intro__subtitle">{props.s_title}</span>
        <h2 className="intro__title">{props.intro}</h2>
        <p className="intro__description">
          {props.desc}
        </p>
      </div>

        </div>
        
    );

}

export default Title;