import React from "react";
import {Route, IndexRoute } from "react-router";

//Components
import Main from "./components/Main";
import Login from "./components/children/Login";
import SignupPage from "./components/children/SignupPage";

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={Login} />
		<Route path="signup" component={SignupPage} />
	</Route>
);