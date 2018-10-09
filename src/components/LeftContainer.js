// Container that holds the Property Details

import React, { Component } from "react";
import PropertyDetails from "./PropertyDetails";

class LeftContainer extends Component {
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { currentlyOpen } = this.props;

    return (
      <div>
        {currentlyOpen === "details" && (
          <PropertyDetails
            handleChange={this.handleChange}
            closeDetails={this.props.closeDetails}
          />
        )}
        {currentlyOpen === "tabs" && <div>TABS</div>}
      </div>
    );
  }
}

export default LeftContainer;
