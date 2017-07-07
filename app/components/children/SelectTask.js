import React from 'react';
import { Link } from "react-router";

class SelectTask extends React.Component {

	render() {
		return (
			<div className="container center center-align">
				<div className="row">
					<div className="col s6">
						<Link to="/ticket" className="box"> Create a Ticket</Link>
					</div>
					<div className="col s6">
						<Link to="/display" className="box"> View Current Tickets</Link>
					</div>
				</div>
			</div>			
		);
	}
};

export default SelectTask;

