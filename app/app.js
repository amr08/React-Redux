import React from "react";
import { render } from "react-dom";
// import { browserHistory } from 'react-router';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
// import Auth from './Auth/Auth.js';
import routes from "./routes";

// const auth = new Auth();
// auth.login();

const store = createStore(
	(state = {}) => state,
	applyMiddleware(thunk)
);

render(
	<Provider store={store}>
	 {routes}
	 </Provider>, document.getElementById("app"));

// import { createStore } from "redux";

// const initialState = {
// 	result: 1,
// 	lastValues: []
// };

// const reducer = (state = initialState, action) => {
// 	switch (action.type){
// 		case "ADD":
// 			state = {
// 				result: state.result,
// 				lastValues: state.lastValues,
// 				result: state.result + action.payload
// 			};
		
// 			break;
// 		case "SUBTRACK":
// 			state = {
// 				result: state.result,
// 				lastValues: state.lastValues,
// 				result: state.result - action.payload
// 			};
// 			break;
// 	}
// 	return state;
// };

// const store = createStore(reducer);

// store.subscribe(() => {
// 	console.log("store updated", store.getState());
// });

// store.dispatch({
// 	type: "ADD",
// 	payload: 10
// });

// store.dispatch({
// 	type: "SUBTRACT",
// 	paylod: 22
// });