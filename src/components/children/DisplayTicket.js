import React from "react";
import helper from "../utils/helpers";

class DisplayTicket extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tickets: []
		};
	}

	componentDidMount() {
		helper.getTickets().then(response => {
			const tickets = response.data;
			this.setState({tickets});
		});
     }

	render() {
		return (
			<div className="container card-docs unique-container">
				<table className="table table-fixed">
  					<thead>
    					<tr>
					      	<th width="30%" data-column="name">Subject</th>
					      	<th width="70%" data-column="email">Body</th>
    					</tr>
  					</thead>
  					<tbody>
	  					{this.state.tickets.map(ticket => 
						    <tr>
							      <td className="text-truncate" title="">{ticket.subject}</td>
							      <td>{ticket.description}</td>
						    </tr>
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

export default DisplayTicket;