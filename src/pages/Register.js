import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Icon } from "@rmwc/icon";
import { IconButton } from "@rmwc/icon-button";

import "@material/icon-button/dist/mdc.icon-button.css";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      authState: "unchecked"
    };
  }

  requestAuth = password => {
    const authUrl = "https://reqres.in/api/register";
    let authCreds = {
      email: "sydney@fife",
      password
    };
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const fetchData = {
      method: "POST",
      body: JSON.stringify(authCreds),
      headers: myHeaders
    };

    fetch(authUrl, fetchData)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            authState: "success"
          });
          console.log(result);
        },
        error => {
          this.setState({
            authState: "failed",
            error
          });
          console.log("ERROR" + error);
        }
      );
  };

  render() {
    const match = this.props.match;
    let authMarkup;
    if (this.state.authState === "failed") {
      authMarkup = (
        <div className="register__payment-container-failure">
          Auth failed! Click to retry
          <IconButton
            icon="credit_card"
            label="Authorize"
            onClick={this.requestAuth("pistol")}
          />
        </div>
      );
    } else {
      authMarkup = (
        <div>
          Click to authorize
          <IconButton
            icon="credit_card"
            label="Authorize"
            onClick={this.requestAuth("")}
          />
        </div>
      );
    }

    return (
      <div className="register">
        <div className="register__header">
          <h3>Register for {match.params.level} level</h3>
        </div>
        <div className="register__register-container">
          <div className="register__payment-container">
            [Stripe container goes here]
            {authMarkup}
          </div>
          <div className="register__break" />
          <Link to="/pricing" className="register__back-button">
            <IconButton icon="arrow_back" label="Back" />
          </Link>
          {this.state.authState === "success" && (
            <Link to="/" className="register__forward-button">
              <IconButton icon="arrow_forward" label="Forward" />
            </Link>
          )}
          {this.state.authState !== "success" && (
            <div className="register__forward-button">
              <Icon icon="highlight_off" label="Stop" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Register;
