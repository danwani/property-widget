// View component included into the Property Page

import React, { Component } from "react";
import { Grid, GridInner } from "rmwc";
import { GridCell } from "rmwc";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";
import "./PropertyDetails.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import SavePropertyDialog from "./SavePropertyDialog";
import Moment from "moment";

class PropertyDetails extends Component {
  render() {
    const { closeDetails, currentProperty, updateProperty } = this.props;

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
              src={currentProperty.image}
            />
          </GridCell>
          <GridCell span="4" className="label">
            Address:
          </GridCell>
          <GridCell span="8">{currentProperty.address}</GridCell>
          <GridCell span="4" className="label">
            Plan:
          </GridCell>
          <GridCell span="8">{currentProperty.plan}</GridCell>
          <GridCell span="4" className="label">
            Type:
          </GridCell>
          <GridCell span="8">{currentProperty.type}</GridCell>
          <GridCell span="4" className="label">
            Area:
          </GridCell>
          <GridCell span="8">{currentProperty.area} m&sup3;</GridCell>
          <GridCell span="4" className="label">
            Last Sale:
          </GridCell>
          <GridCell span="8">${currentProperty.lastSaleValue}</GridCell>
          <GridCell span="4" className="label">
            Sale Date:
          </GridCell>
          <GridCell span="8">
            {Moment(currentProperty.lastSaleDate).format("DD/MM/YYYY")}
          </GridCell>
          {currentProperty.title !== "" && (
            <GridCell span="12">
            <GridInner>
              <GridCell span="4" className="label">
                Property name:
              </GridCell>
              <GridCell span="8">{currentProperty.title}</GridCell>
              </GridInner>
            </GridCell>
          )}
          {currentProperty.comments !== "" && (
            <GridCell span="12">
            <GridInner>
              <GridCell span="4" className="label">
                Property notes:
              </GridCell>
              <GridCell span="8">{currentProperty.comments}</GridCell>
              </GridInner>
            </GridCell>
          )}
          <GridCell span="12">
            <SavePropertyDialog
              currentProperty={currentProperty}
              updateProperty={updateProperty}
            />
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
