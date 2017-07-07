import React from "react";
import {Route, Router, browserHistory, IndexRoute } from "react-router";

//Components
import Main from "./components/Main";
import Login from "./components/LoginPage";
import SubmitTicket from "./components/children/SubmitTicket";
import DisplayTicket from "./components/children/DisplayTicket";
import SelectTask from "./components/children/SelectTask";

export default (
	<Router history = {browserHistory}>
		<Route path="/" component={Login}>
			<IndexRoute component={Main} />
		</Route>
		<Route path="/task" component={SelectTask} />
		<Route path="ticket" component={SubmitTicket} />
		<Route path="display" component={DisplayTicket} />
	</Router>
);