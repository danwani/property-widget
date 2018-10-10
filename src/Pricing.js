import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <div className="pricing__header">
        <h3>Pricing Options</h3>
      </div>
      {/* TODO refactor to component */}
      <div className="pricing__options">
        <div className="pricing__option">
          <div className="pricing__options-title">Beginner</div>
          <div className="pricing__options-info">
            This is our entry level pricing, for those just getting started
          </div>
          <Link to="/register/beginner">
            <Button raised>$20 /mth</Button>
          </Link>
        </div>
        <div className="pricing__option">
          <div className="pricing__options-title">Advanced</div>
          <div className="pricing__options-info">
            Think you're elite? This level is for you!
          </div>
          <Link to="/register/advanced">
            <Button raised>$50 /mth</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
