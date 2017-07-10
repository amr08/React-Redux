import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import SubmitTicket from "./components/children/SubmitTicket";
import TicketCall from "./components/children/TicketCall";
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <BrowserRouter history={history} component={App}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/home/submit" render={(props) => <SubmitTicket auth={auth} {...props} />} />
        <Route path="/home/display" render={(props) => <TicketCall auth={auth} {...props} />} />
        <Route path="/api" render={(props) => {
          handleAuthentication(props);
          return <Home {...props} /> 
        }}/>
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Home {...props} /> 
        }}/>
      </div>
    </BrowserRouter>
  );
}
