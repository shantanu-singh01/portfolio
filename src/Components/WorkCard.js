import React from "react"
import "./WorkCardStyles.css"
// import { NavLink } from "react-router-dom";


const WorkCard = (props) => {
    return (
    <div className="project-card">
        <img src={props.imagesrc} alt="Project" />
        <h2 className="project-title">{props.title}</h2>
            <div className="pro-details">
                <p>{props.text}</p>
                <div className="pro-btns">
                    {/* <NavLink to={props.view} className="btn" target="_blank">VIEW</NavLink>
                    <NavLink to={props.source} className="btn">SOURCE</NavLink> */}
                   <a href={props.view}><button className="btn">VIEW</button></a>
                    <a href={props.source}><button className="btn">SOURCE</button></a>
                </div>
            </div>
    </div>
    )
}


export default WorkCard;