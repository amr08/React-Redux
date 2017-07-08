import React, { Component } from 'react';
// import { Navbar, Button } from 'react-bootstrap';

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
                <h1 className="navbar-brand"><a href="/"><span>Auth0</span></a></h1>
              </div>
              <div className="collapse navbar-collapse" id="navbar-collapse">
                <ul className="nav navbar-nav navbar-left no-basic">
                  <li className="li-why"><a href="#">Auth0 - React</a>
            

                  </li>
                    <button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.goTo.bind(this, 'home')}
                  >
                    Home
                  </button>


                  {
              !isAuthenticated() && (
                  <button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </button>
                )
            }
            {
              isAuthenticated() && (
                    <button
                      bsStyle="primary"
                      className="btn-margin"
                      onClick={this.logout.bind(this)}
                    >
                      Log Out
                    </button>
                  )
            }


            
                </ul>
                
              </div>
            </div>
          </nav>
        </header>


</div>


    );
  }
}

export default App;
