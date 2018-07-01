import React, { Component } from 'react';
import content from "../content.json"

class MainPage extends Component { 

	constructor(props){
		super(props);
		this.state = {inners: ""}
	}

	render () {
		let path = this.props.location.pathname.substring(1);
		let contentItem = content.find(c => c.id === path)

		if (!contentItem) return null;

		return (
		<div className="col-md-12">{content.find(c => c.id === path).data}</div>
		)
	}
}

export default MainPage;