// Container that holds the Property Details
import React, { Component } from "react";

import PropertyDetails from "./PropertyDetails";

class LeftContainer extends Component {
  render() {
    const { currentlyOpen, currentProperty, updateProperty } = this.props;

    return (
      <div>
        {currentlyOpen === "details" && (
          <PropertyDetails
            closeDetails={this.props.closeDetails}
            currentProperty={currentProperty}
            updateProperty={updateProperty}
          />
        )}
        {currentlyOpen === "tabs" && <div>TABS</div>}
      </div>
    );
  }
}

export default LeftContainer;
