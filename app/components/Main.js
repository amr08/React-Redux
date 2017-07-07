import React from "react";
import Nav from "./children/Nav";
import SubmitTicket from "./children/SubmitTicket";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "./LoginPage";
// import helper from "./utils/helpers";

// const ticketSubmission = helper.userTicketSubmission;

class Main extends React.Component {

	render() {
		return (
			<div>
				<Login />
				{this.props.children}
			</div>
		);
	}
}

// Main.propTypes = {
//     userTicketSubmission: React.PropTypes.func.isRequired
// }

export default Main;