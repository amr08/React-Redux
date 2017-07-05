import React from "react";
import { Link } from 'react-router';

class Nav extends React.Component {
	render() {
		return (
			<nav>
			    <div className="nav-wrapper">
			      	<Link to="/" className="brand-logo">Logo</Link>
			      	<ul id="nav-mobile" className="right hide-on-med-and-down">
				        <li><Link to="/signup">Signup</Link></li>
			      	</ul>
			    </div>
			</nav>

		);
	}
};

export default Nav;



