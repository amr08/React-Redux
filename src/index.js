import React from "react";
import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

const routes = makeMainRoutes();

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    { routes }
    </Provider>,
    document.getElementById('root')
);




