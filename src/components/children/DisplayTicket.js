 import React from "react";
 import { PropTypes } from "prop-types";


// export default function TicketCall({ tickets }) {

//   const emptyMessage = (
//     <p> there are no tickets</p>

//     );

//   const ticketsList =  (
//     <p> tickets list </p>

//     );

class DisplayTicket extends React.Component {

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
            {this.props.tickets.map(ticket => 
              <tr>
                <td className="text-truncate" title="">{ticket.subject}</td>
                <td>{ticket.description}</td>
              </tr>
            )} 
          </tbody>
        </table>
        );
  }
}

export default DisplayTicket;


  //     <div>
  //     {tickets.length === 0 ? emptyMessage : ticketsList}
  //     </div>

  //   );
   
//   }
// }

  // TicketCall.propTypes = {
  //   tickets: React.PropTypes.array.isRequired
  // }
// }



// {this.state.tickets.map(ticket => 
//               <tr>
//                 <td className="text-truncate" title="">{ticket.subject}</td>
//                 <td>{ticket.description}</td>
//               </tr>
//             )}


