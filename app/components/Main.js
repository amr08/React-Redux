import React from "react";
import Nav from "./children/Nav";

class Main extends React.Component {

	render() {
		return (
			<div>
				<Nav />
				{this.props.children}
			</div>
		);
	}
}

export default Main;