import React from "react";
import "./AboutContentStyles.css";
import {Link} from "react-router-dom";
import react1 from "../assets/stackimage1.png";
import react2 from "../assets/stackimage2.png";


const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>I'm a Web developer. I build resposive & secure websites for my clients.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={react1} className="img" alt="react" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={react2} className='img' alt="react.js" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutContent;
