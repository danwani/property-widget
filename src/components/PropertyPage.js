// Container that holds the Property Dialog

import React, { Component } from "react";
import { Button } from "@rmwc/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton
} from "@rmwc/dialog";

import "./PropertyPage.css";
import "@material/button/dist/mdc.button.css";
import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";
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

  onPropertyNameChange = event => {
    this.setState({ propertyName: event.target.value });
    // console.log(this.state.propertyName);
  };

  onPropertyNotesChange = event => {
    this.setState({ propertyNotes: event.target.value });
    // console.log(this.state.propertyNotes);
  };

  render() {
    return (
      <div>
        {/** Standard dialog usage */}
        <Dialog
          className="property-page"
          open={this.state.standardDialogOpen}
          onClose={evt => {
            console.log(evt.detail.action);
            this.setState({
              standardDialogOpen: false,
              propertyName: "",
              propertyNotes: ""
            });
          }}
        >
          <DialogTitle>Property Details</DialogTitle>
          <DialogContent>
            <PropertyDialog onPropertyNameChange={this.onPropertyNameChange} onPropertyNotesChange={this.onPropertyNotesChange}/>
          </DialogContent>
          <DialogActions>
            <DialogButton action="close">Add to CRM</DialogButton>
            <a
              href={`mailto:info@orbmaps.com?subject=Info for ${
                this.state.propertyName
              }&amp;body=${this.state.propertyNotes}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DialogButton action="accept" isDefaultAction>
                Prepare mail
              </DialogButton>
            </a>
          </DialogActions>
        </Dialog>

        <Button
          className="property-page__call-to-action"
          raised
          onClick={evt => this.setState({ standardDialogOpen: true })}
        >
          View property details
        </Button>
      </div>
    );
  }
}

export default PropertyPage;
