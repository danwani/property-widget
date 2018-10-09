// View component included into the Property Page

import React, { Component } from "react";
import { Grid } from "rmwc";
import { GridCell } from "rmwc";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";
import "./PropertyDetails.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propertyName: "",
      propertyNotes: ""
    };
  }

  render() {
    const { displayControl, handleChange, closeDetails } = this.props;

    return (
      <div className="property-details">
        <Grid>
          <GridCell span="12">
            <Button raised onClick={closeDetails}>
              X
            </Button>
          </GridCell>
          <GridCell span="12">
            <img
              className="property-details__property-image"
              alt="Property thumbnail"
              src="https://www.endlesssummerresort.com.au/assets/cache/endless-summer-1120269w-2000x1000pcy.jpg"
            />
          </GridCell>
          <GridCell span="4" className="label">
            Address:
          </GridCell>
          <GridCell span="8">Unit 1 9-21 Frank St Coolum Beach 4573</GridCell>
          <GridCell span="4" className="label">
            Plan:
          </GridCell>
          <GridCell span="8">L5, RP720278</GridCell>
          <GridCell span="4" className="label">
            Type:
          </GridCell>
          <GridCell span="8">Apartment</GridCell>
          <GridCell span="4" className="label">
            Area:
          </GridCell>
          <GridCell span="8">200 m&sup3;</GridCell>
          <GridCell span="4" className="label">
            Last Sale:
          </GridCell>
          <GridCell span="8">$670,000</GridCell>
          <GridCell span="4" className="label">
            Sale Date:
          </GridCell>
          <GridCell span="8">02/04/2017</GridCell>
          <GridCell span="12">
            <Button raised action="addToCRM">
              Save property
            </Button>
          </GridCell>
          <GridCell span="12">
            <Button raised action="compareSales">
              Compare sales
            </Button>
          </GridCell>
          <GridCell span="12">
            <Button raised action="prepareMail">
              Prepare mail
            </Button>
          </GridCell>
        </Grid>
      </div>
    );
  }
}

export default PropertyDetails;
