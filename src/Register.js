import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { IconButton } from "@rmwc/icon-button";
import "@material/icon-button/dist/mdc.icon-button.css";
import "./Register.css";

const Register = ({ match }) => {
  return (
    <div className="register">
        <div className="register__header">
          <h3>Register for {match.params.level} level</h3>
        </div>
        <div className="register__register-container">
          <div className="register__payment-container">
            [Stripe container goes here]
          </div>
          <div className="register__break"></div>
          <Link to="/pricing" className="register__back-button">
            <IconButton icon="arrow_back" label="Back" />
          </Link>
          <Link to="/" className="register__forward-button">
            <IconButton icon="arrow_forward" label="Forward" />
          </Link>
    
        </div>
      </div>
  );
};

export default Register;
