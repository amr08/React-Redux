import React, { Component } from 'react';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <header className="site-header">
          <nav className="navbar navbar-default" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
                </button>
                <h1 className="navbar-brand"><a href="https://auth0.com/"><span>Auth0</span></a></h1>
              </div>
              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav navbar-left no-basic">
                  <li className="li-why"><a href="/home">Auth0 - Zenhub Ticket Portal</a>
                  </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  {
                    !isAuthenticated() && (
                      <button 
                        className="btn btn-primary" 
                        onClick={this.login.bind(this)}>
                        Log In
                      </button>
                    )
                  }
                  {
                    isAuthenticated() && (
                      <button 
                        className="btn btn-warning" 
                        onClick={this.logout.bind(this)}>
                        Log Out
                      </button>
                    )
                  }
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {
          !isAuthenticated() && (
            <div className="container">
              <h4> Please{' '} 
                <a 
                  style={{ cursor: 'pointer' }} 
                  onClick={this.login.bind(this)}>
                  Log In
                </a>
                {' '}to continue.
              </h4>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
