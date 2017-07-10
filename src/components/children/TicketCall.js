import React from "react";
import { getTickets } from "../utils/helpers";
import {connect } from "react-redux";
import { PropTypes } from "prop-types";
import DisplayTicket from "./DisplayTicket";


class TicketCall extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tickets: []
    };
  }

  componentDidMount() {
    getTickets().then(response => {
      const tickets = response.data;
      this.setState({tickets});
    });
  }

  render() {
    return (
      <div className="container card-docs unique-container">
        <DisplayTicket tickets={this.state.tickets} /> 
      </div>
    );
  }
}

// DisplayTicket.propTypes = {
//   tickets: React.PropTypes.array.isRequired
// }

// function mapStateToProps(state) {
//   return {
//     tickets: state.tickets
//   }
// }

export default TicketCall;
// connect(mapStateToProps)(DisplayTicket);