import React, { Component } from "react";
import { Button } from "@rmwc/button";
import "./PropertyDialog.css";
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
import "@material/layout-grid/dist/mdc.layout-grid.css";
import { Grid } from "rmwc";
import { GridCell } from "rmwc";
import { GridInner } from "rmwc";
import { TextField, TextFieldIcon, TextFieldHelperText } from "@rmwc/textfield";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

class PropertyDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      standardDialogOpen: false,
      propertyName: '',
      propertyNotes: '' 
    };
  }

  onPropertyNameChange = (event) => {
    this.setState({ propertyName: event.target.value });
    console.log(this.state.propertyName);
  }

  onPropertyNotesChange = (event) => {
    this.setState({ propertyNotes: event.target.value });
    console.log(this.state.propertyNotes);
  }

  render() {
    return (
      <div>
        {/** Standard dialog usage */}
        <Dialog
          className="PropertyDialog"
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
            <Grid>
              <GridCell span="12">
                <GridInner>
                  <GridCell span="5">
                    <img
                      className="PropertyDialog-property-image"
                      alt="Property thumbnail"
                      src="https://www.endlesssummerresort.com.au/assets/cache/endless-summer-1120269w-2000x1000pcy.jpg"
                    />
                  </GridCell>
                  <GridInner>
                    <GridCell span="12 text-right">3 bed 2 bath 1 car</GridCell>
                    <GridInner>
                      <GridCell span="4" className="label">
                        Address:
                      </GridCell>
                      <GridCell span="8">
                        Unit 1 9-21 Frank St Coolum Beach 4573
                      </GridCell>
                      <GridCell span="4" className="label">
                        Plan:
                      </GridCell>
                      <GridCell span="8">L5, RP720278</GridCell>
                    </GridInner>
                  </GridInner>
                </GridInner>
              </GridCell>
              <GridCell span="12">
                <GridInner>
                  <GridCell span="4" className="label">
                    Property Type:
                  </GridCell>
                  <GridCell span="8">Apartment</GridCell>
                  <GridCell span="4" className="label">
                    Area:
                  </GridCell>
                  <GridCell span="8">200 m&sup3;</GridCell>
                  <GridCell span="4" className="label">
                    Last Sale:
                  </GridCell>
                  <GridCell span="8">$670,000 @ 02/04/2017</GridCell>
                  <GridCell span="4" className="label">
                    Property Name:
                  </GridCell>
                  <GridCell span="8">
                    <TextField
                      onChange={this.onPropertyNameChange}
                    />
                  </GridCell>
                  <GridCell span="4" className="label">
                    Area:
                  </GridCell>
                  <GridCell span="8">
                    <TextField textarea fullwidth rows="3" onChange={this.onPropertyNotesChange} />
                  </GridCell>
                </GridInner>
              </GridCell>
            </Grid>
          </DialogContent>
          <DialogActions>
            <DialogButton action="close">Add to CRM</DialogButton>
            <a
              href={`mailto:info@orbmaps.com?subject=Info for ${this.state.propertyName}&amp;body=${this.state.propertyNotes}`}
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
          className="PropertyDialog-call-to-action"
          raised
          onClick={evt => this.setState({ standardDialogOpen: true })}
        >
          View property details
        </Button>
      </div>
    );
  }
}

export default PropertyDialog;
