// Container that holds the Property Details

import React, { Component } from "react";
import PropertyDetails from "./PropertyDetails";

class PropertyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyName: "",
      propertyNotes: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="PropertyPage">
      
      <PropertyDetails
                handleChange={this.handleChange}
                onSubmitHandler={this.onSubmitHandler}
                closeDialog={this.closeDialog}
                state={this.state}
              />
      </div>
    );
  }
}

export default PropertyPage;
