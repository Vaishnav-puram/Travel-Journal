import React from "react";
export default function Card(props) {
    return (
        <div className="menu">
            <img src={props.ele.coverImg} className="img" />
            <div className="lists">
                <div className="top">
                    <span className="loc">{props.ele.location}</span>
                    <span className="url">{props.ele.googleMapsUrl}</span>
                </div>
                <span className="name">{props.ele.title}</span>
                <span className="date">{props.ele.startDate}-{props.ele.startDate}</span>
                <span className="des">{props.ele.description}</span>
            </div>
        </div>

    )
}