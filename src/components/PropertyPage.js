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

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
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
