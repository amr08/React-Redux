import React from "react";
import { getTicketsFromApi } from "../utils/helpers";
import {connect } from "react-redux";
import DisplayTicket from "./DisplayTicket";
import { getTickets } from "../../actions";

class TicketCall extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tickets: []
    };
  }

  componentDidMount() {
    getTicketsFromApi().then(response => {
      const tickets = response.data;
      this.setState({tickets});
      this.props.getTickets(tickets);
    });
  }

  login() {
    this.props.auth.login();
  }
 
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
      {
        isAuthenticated() && (
          <div className="container card-docs unique-container">
            <DisplayTicket /> 
          </div>
        )
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state
  }
}

export default connect(mapStateToProps, { getTickets })(TicketCall);