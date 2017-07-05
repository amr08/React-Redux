import React from "react";

class Login extends React.Component {
	constructor(props){
	    super(props);
		this.state = {
		    username: "",
		    password: "",
		}
	    this.handleUserChange = this.handleUserChange.bind(this);
	    this.handleLogin = this.handleLogin.bind(this);
	}

	handleUserChange(event) {
	   	this.setState({ [event.target.name]: event.target.value});
	}

  	handleLogin(event) {
  		event.preventDefault();
  	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<form className="col s12" action="/login" method="POST" onSubmit={this.handleLogin}>
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
                                    type="text"
                                    className="validate"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.handleUserChange}
                                    required />
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect" type="submit" value="Submit" name="action">Login</button>
                            </div>
                        </div>
                    </form>
                </div>
			</div>
		);
	}
};

export default Login;