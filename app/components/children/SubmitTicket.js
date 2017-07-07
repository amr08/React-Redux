import React from "react";
import PropTypes from "prop-types";
import helper from "../utils/helpers";

class SubmitTicket extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			subject: "",
			body:""
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(event) {
	   	this.setState({ [event.target.name]: event.target.value});
	}

  	onSubmit(event) {
        event.preventDefault();
       helper.userTicketSubmission(this.state);
        // console.log(userSubmission);
        // console.log(this.state);
        // this.props.helper.userTicketSubmission(this.state);
  	}

	render() {
		return (
            <form className="form-horizontal col-xs-10 col-xs-offset-1  margin-adjustment" onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label className="col-xs-3 control-label">Subject</label>
                            <div className="col-xs-9">
                                <input 
                                    className="form-control" 
                                    value={this.state.subject}
                                    name="subject"
                                    onChange= {this.onChange} 
                                    type="text" 
                                    placeholder="Subject" 
                                    required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-xs-3 control-label">Issue</label>
                            <div className="col-xs-9">
                                <input 
                                    className="form-control" 
                                    value={this.state.body}
                                    name="body"
                                    onChange= {this.onChange} 
                                    type="text" 
                                    placeholder="Please list details" 
                                    required />
                            </div>
                        </div>
                        <button className="btn btn-primary btn-md" type="submit" value="Submit" name="action">Submit</button>
                    </form>

		);
	}
}

// SubmitTicket.propTypes = {
//     userTicketSubmission: React.PropTypes.func.isRequired
// }

export default SubmitTicket;