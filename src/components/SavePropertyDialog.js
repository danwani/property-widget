// View component included into the Property Page

import React, { Component } from "react";
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
      dialogOpen: false
    };
  }

  openDialog = evt => this.setState({ dialogOpen: true });

  closeDialog = evt => {
    this.setState({
      dialogOpen: false
    });
  };

  saveProperty = evt => {
    console.log(this.titleInput.value);
    this.props.updateProperty({
      title: this.titleInput.value,
      comments: this.commentsInput.value
    });
    alert("Saving to api...");
  };

  render() {
    return (
      <div>
        <Dialog
          className="property-dialog"
          open={this.state.dialogOpen}
          onClose={this.closeDialog}
        >
          <DialogTitle>Save Property</DialogTitle>
          <DialogContent>
            <Grid>
              <GridCell span="4" className="label">
                Property Title:
              </GridCell>
              <GridCell span="8">
                <TextField inputRef={e => (this.titleInput = e)} />
              </GridCell>
              <GridCell span="4" className="label">
                Property Comments:
              </GridCell>
              <GridCell span="8">
                <TextField
                  textarea
                  fullwidth
                  rows="3"
                  inputRef={e => (this.commentsInput = e)}
                />
              </GridCell>
            </Grid>
          </DialogContent>
          <DialogActions>
            <DialogButton action="close">Cancel</DialogButton>
            <DialogButton
              onClick={this.saveProperty}
              action="accept"
              isDefaultAction
            >
              Save Property
            </DialogButton>
          </DialogActions>
        </Dialog>
        <Button outlined onClick={this.openDialog} action="addToCRM">
          Save property
        </Button>
      </div>
    );
  }
}
export default SavePropertyDialog;
