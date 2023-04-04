import React from "react";
const Photo = props =>
    <div><h3>{props.photo.title}</h3>
        <img  src={props.photo.url} alt={props.photo.title} style={{ width: "50%" , height:"400px"}} />
        <p>{props.photo.explanation}</p></div>;
export default Photo;