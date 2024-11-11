import React from "react";
import "./card.css"
function Card(props) {
    return(
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{props.header}</h5>
                <a href="#" className="btn btn-primary">{props.btext}</a>
            </div>
        </div>
    )
}
export default Card