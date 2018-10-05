// View component included into the Property Page

import React, { Component } from "react";
import { Grid } from "rmwc";
import { GridCell } from "rmwc";
import { GridInner } from "rmwc";
import { TextField } from "@rmwc/textfield";

import "./PropertyDialog.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";

const PropertyDialog = ({onPropertyNameChange, onPropertyNotesChange}) =>
  <div className="property-dialog">
    <Grid>
      <GridCell span="12">
        <GridInner>
          <GridCell span="5">
            <img
              className="property-dialog__property-image"
              alt="Property thumbnail"
              src="https://www.endlesssummerresort.com.au/assets/cache/endless-summer-1120269w-2000x1000pcy.jpg"
            />
          </GridCell>
          <GridCell span="7">
            <GridInner>
              <GridCell span="12 text-right">3 bed 2 bath 1 car</GridCell>
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
          </GridCell>
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
            <TextField onChange={onPropertyNameChange} />
          </GridCell>
          <GridCell span="4" className="label">
            Area:
          </GridCell>
          <GridCell span="8">
            <TextField
              textarea
              fullwidth
              rows="3"
              onChange={onPropertyNotesChange}
            />
          </GridCell>
        </GridInner>
      </GridCell>
    </Grid>
  </div>;

export default PropertyDialog;
