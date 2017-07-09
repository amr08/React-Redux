import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
            <div className="container margin-adjustment">
              <div className="col-xs-12 col-md-6">
                <article className="card-docs"><i className="card-docs-icon icon-budicon-499 orange"></i>
                  <h2 className="card-docs-title">New Zendesk Ticket</h2>
                  <p className="card-docs-description">Create a new ticket on ZenDesk</p>
                  <Link to="/home/submit" className="btn btn-default">Create Ticket</Link>
                </article>
              </div>

              <div className="col-xs-12 col-md-6">
                <article className="card-docs"><i className="card-docs-icon icon-budicon-342 green"></i>
                  <h2 className="card-docs-title">Current Tickets</h2>
                  <p className="card-docs-description">View current Zendesk Tickets</p>
                  <Link to="/home/display" className="btn btn-default">See Tickets</Link>
                </article>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default Home;
