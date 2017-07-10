import React from "react";
import { connect } from "react-redux";
import { userTicketSubmission } from "../utils/helpers";
import { submitTickets } from "../../actions";


class SubmitTicket extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subject: "",
      body:""
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(event) {
      this.setState({ [event.target.name]: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({subject: "", body: ""});
    this.props.submitTickets(this.state);
    this.alertUser();
  }

  componentDidUpdate(prevProps, prevState) {
    //Sends Redux store data to helpers.js
    if(prevProps !== this.props) {
      userTicketSubmission(this.props);
    }
  }

  alertUser(){
    var addSuccessAlert = document.getElementById("alert");
    addSuccessAlert.innerHTML = "Ticket successfully submitted!";
    addSuccessAlert.className = "alert alert-success";
  }

  render() {
    return (

        <div className="container card-docs unique-container">
          <form className="form-horizontal col-xs-10 col-xs-offset-1  margin-adjustment" onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="col-xs-2 control-label">Subject</label>
              <div className="col-xs-10">
                <input 
                  className="form-control" 
                  value={this.state.subject}
                  name="subject"
                  onChange={this.onChange} 
                  type="text" 
                  placeholder="Subject" 
                  required />
              </div>
            </div>
            <div className="form-group">
              <label className="col-xs-2 control-label">Issue</label>
              <div className="col-xs-10">
                <textarea 
                  className="form-control" 
                  value={this.state.body}
                  name="body"
                  onChange={this.onChange} 
                  type="text" 
                  placeholder="Please list details" 
                  required />
              </div>
            </div> 
            <button className="btn btn-primary btn-md" type="submit" value="Submit" name="action">Submit</button>
            <div id="alert"></div>
          </form>
        </div>
   
    );
  }
}

function mapStateToProps(state) {
  return {
    tickets: state
  }
}

// function mapDispatchToProps(dispatch){
//   return bindActionCreators({getTickets}, dispatch);
// }


export default connect(mapStateToProps, { submitTickets }) (SubmitTicket);