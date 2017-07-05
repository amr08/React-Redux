import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./routes";

ReactDOM.render(<Router history={browserHistory} routes={routes} />, document.getElementById("app"));

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