import React from "react";
import "./Link.css";

const Link = props => (
	<a href={props.link} className="m-2">{props.linkName}</a>
);

export default Link;