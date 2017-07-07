

import React from "react";
import { Link } from "react-router";

class Login extends React.Component {

  render() {
 
    return (
      <div className="container">
     	<Link to="/task">Fake Login</Link>
      </div>
    );
  }
}

export default Login;

// class Login extends Component {
//   login() {
//     this.props.auth.login();
//   }
//   render() {
//     const { isAuthenticated } = this.props.auth;
//     return (
//       <div className="container">
//         {
//           isAuthenticated() && (
//               <h4>
//                 You are logged in!
//               </h4>
//             )
//         }
//         {
//           !isAuthenticated() && (
//               <h4>
//                 You are not logged in! Please{' '}
//                 <a
//                   style={{ cursor: 'pointer' }}
//                   onClick={this.login.bind(this)}
//                 >
//                   Log In
//                 </a>
//                 {' '}to continue.
//               </h4>
//             )
//         }
//       </div>
//     );
//   }
// }

// export default Login;

// class Login extends React.Component {
// 	constructor(props){
// 	    super(props);
// 		this.state = {
// 		    username: "",
// 		    password: "",
// 		}
// 	    this.handleUserChange = this.handleUserChange.bind(this);
// 	    this.handleLogin = this.handleLogin.bind(this);
// 	}

// 	handleUserChange(event) {
// 	   	this.setState({ [event.target.name]: event.target.value});
// 	}

//   	handleLogin(event) {
//   		event.preventDefault();
//   	}

// 	render() {
// 		return (
// 			<div className="container">
// 				<div className="row">
// 					<form className="col s12">
// 						<div className="row">
//                             <div className="input-field col s12">
// 								<input
//                                     type="text"
//                                     className="validate"
//                                     value={this.state.username}
//                                     name="username"
//                                     onChange= {this.handleUserChange}
//                                     required />
//                                 <label htmlFor="username">User Name </label>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="input-field col s12">
//                             	<input
//                                     type="text"
//                                     className="validate"
//                                     value={this.state.password}
//                                     name="password"
//                                     onChange={this.handleUserChange}
//                                     required />
//                                 <label htmlFor="password">Password</label>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col s12">

//                                 <button className="btn waves-effect" name="action"><Link to="/task"></Link>Login</button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
// 			</div>
// 		);
// 	}
// };

// export default Login;

// import { Navbar, Button } from 'react-bootstrap';


// class Login extends Component {
//   goTo(route) {
//     this.props.history.replace(`/${route}`)
//   }

//   login() {
//     this.props.auth.login();
//   }

//   logout() {
//     this.props.auth.logout();
//   }

//   render() {
//     const { isAuthenticated } = this.props.auth;

//     return (
//       <div>
//         <Navbar fluid>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#">Auth0 - React</a>
//             </Navbar.Brand>
//             <Button
//               bsStyle="primary"
//               className="btn-margin"
//               onClick={this.goTo.bind(this, 'home')}
//             >
//               Home
//             </Button>
//             {
//               !isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.login.bind(this)}
//                   >
//                     Log In
//                   </Button>
//                 )
//             }
//             {
//               isAuthenticated() && (
//                   <Button
//                     bsStyle="primary"
//                     className="btn-margin"
//                     onClick={this.logout.bind(this)}
//                   >
//                     Log Out
//                   </Button>
//                 )
//             }
//           </Navbar.Header>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default Login;

