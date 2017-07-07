import React from "react";
import PropTypes from "prop-types";
import helper from "../utils/helpers";

class SubmitTicket extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: "",
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
			<div className="container">
				<div className="row">
					<form className="col s12" onSubmit={this.onSubmit}>
						<div className="row">
                            <div className="input-field col s12">
								<input
                                    type="text"
                                    className="validate"
                                    value={this.state.name}
                                    name="name"
                                    onChange= {this.onChange}
                                    required />
                                <label htmlFor="name">Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    type="text"
                                    className="validate"
                                    value={this.state.subject}
                                    name="subject"
                                    onChange={this.onChange}
                                    required />
                                <label htmlFor="subject">Subject</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                            	<textarea
                                    id="textarea"
                                    className="materialize-textarea validate"
                                    value={this.state.body}
                                    name="body"
                                    onChange={this.onChange}
                                    required 
                                />
                                <label htmlFor="body">Comments</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect" type="submit" value="Submit" name="action">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
			</div>
		);
	}
}

// SubmitTicket.propTypes = {
//     userTicketSubmission: React.PropTypes.func.isRequired
// }

export default SubmitTicket;