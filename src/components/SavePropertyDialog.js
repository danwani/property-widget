// View component included into the Property Page

import React, {Component} from "react";
import { Grid } from "rmwc";
import { GridCell } from "rmwc";
import { GridInner } from "rmwc";
import { TextField } from "@rmwc/textfield";
import { Button } from "@rmwc/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton
} from "@rmwc/dialog";

import "@material/button/dist/mdc.button.css";
import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";
import "./SavePropertyDialog.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

class SavePropertyDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
      propertyName: "",
      propertyNotes: ""
    };
  }

  render() {
    return (
      <div>
        <Dialog
          className="property-dialog"
          open={this.props.savePropertyDialogOpen}
          onClose={closeDialog}
        >
          <DialogTitle>Property Details</DialogTitle>
          <DialogContent>
            <Grid>
              <GridCell span="4" className="label">
                Property Name:
              </GridCell>
              <GridCell span="8">
                <TextField onChange={handleChange} name="propertyName" />
              </GridCell>
              <GridCell span="4" className="label">
                Property Notes:
              </GridCell>
              <GridCell span="8">
                <TextField
                  textarea
                  fullwidth
                  rows="3"
                  onChange={handleChange}
                  name="propertyNotes"
                />
              </GridCell>
            </Grid>
          </DialogContent>
          <DialogActions>
            <DialogButton action="close">Cancel</DialogButton>
            <DialogButton action="accept" isDefaultAction>
              Save Property
            </DialogButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default SavePropertyDialog;
