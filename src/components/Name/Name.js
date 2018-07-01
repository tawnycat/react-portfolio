import React from "react";
import "./Name.css";

const Name = props => <h1 className={props.className}>{props.children}</h1>;

export default Name