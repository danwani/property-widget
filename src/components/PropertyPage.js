// Container that holds the Property Dialog

import React, { Component } from "react";
import PropertyDialog from "./PropertyDialog";

class PropertyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standardDialogOpen: false,
      propertyName: "",
      propertyNotes: ""
    };
  }

  // handleChange = {property, event} => {this.setState({property: event.target.value});

  onPropertyNameChange = event => {
    this.setState({ propertyName: event.target.value });
    // console.log(this.state.propertyName);
  };

  onPropertyNotesChange = event => {
    this.setState({ propertyNotes: event.target.value });
    // console.log(this.state.propertyNotes);
  };

  onSubmitHandler = evt => this.setState({ standardDialogOpen: true });

  closeDialog = evt => {
    this.setState({
      standardDialogOpen: false,
      propertyName: "",
      propertyNotes: ""
    });
  };

  render() {
    return (
      <div>
        <PropertyDialog
          onPropertyNameChange={this.onPropertyNameChange}
          onPropertyNotesChange={this.onPropertyNotesChange}
          onSubmitHandler={this.onSubmitHandler}
          closeDialog={this.closeDialog}
          state={this.state}
        />
      </div>
    );
  }
}

export default PropertyPage;
