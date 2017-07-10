import React from "react";
import {connect } from "react-redux";
import { getTickets } from "../../actions";

class DisplayTicket extends React.Component {
  constructor(props){
    super(props);
    this.currentTickets = []
  }

  componentWillReceiveProps(NextProps) {
    const length = NextProps.tickets.length;
    this.currentTickets = NextProps.tickets[length-1].text
  }

  render(){
    return (
      <table className="table table-fixed">
        <thead>
          <tr>
            <th width="50%" data-column="name">Subject</th>
            <th width="50%" data-column="email">Body</th>
          </tr>
        </thead>
        <tbody>
          {this.currentTickets.map(ticket => 
            <tr key={ticket.id}>
              <td className="text-truncate" title="">{ticket.subject}</td>
              <td>{ticket.description}</td>
            </tr>
          )}  
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state
  }
}

export default connect(mapStateToProps) (DisplayTicket);