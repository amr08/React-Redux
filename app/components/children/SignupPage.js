import React from "react";

class SignupPage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			email:"",
			passwordConfirmation:""
		}
		this.handleUserChange = this.handleUserChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	handleUserChange(event) {
	   	this.setState({ [event.target.name]: event.target.value});
	}

  	handleLogin(event) {
  		event.preventDefault();
  		console.log(this.state);
  	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" action="/signup" method="POST" onSubmit={this.handleLogin}>
						<div className="row">
                            <div className="input-field col s12">
								<input
                                    type="text"
                                    className="validate"
                                    value={this.state.username}
                                    name="username"
                                    onChange= {this.handleUserChange}
                                    required />
                                <label htmlFor="username">User Name </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    type="email"
                                    className="validate"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.handleUserChange}
                                    required />
                                <label htmlFor="password">Email</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                            	<input
                                    type="password"
                                    className="validate"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleUserChange}
                                    required />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>

                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    type="password"
                                    className="validate"
                                    value={this.state.passwordConfirmation}
                                    name="passwordConfirmation"
                                    onChange={this.handleUserChange}
                                    required />
                                <label htmlFor="password">Confirm Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect" type="submit" value="Submit" name="action">Signup</button>
                            </div>
                        </div>
                    </form>
                </div>
			</div>
		);
	}
}

export default SignupPage;