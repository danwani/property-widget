// View component included into the Property Page

import React, { Component } from "react";
import { Button } from "@rmwc/button";
import { IconButton } from "@rmwc/icon-button";
import {
  DataTable,
  DataTableContent,
  DataTableHead,
  DataTableBody,
  DataTableHeadCell,
  DataTableRow,
  DataTableCell
} from "@rmwc/data-table";
import "@rmwc/data-table/data-table.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "./PropertyDetails.css";
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
        <div className="property-details__close-button">
          <IconButton icon="close" label="Close" onClick={closeDetails} />
        </div>
        <img
          className="property-details__property-image"
          alt="Property thumbnail"
          src={currentProperty.image}
        />
        <DataTable className="property-details__detail-table">
          <DataTableContent>
            <DataTableHead />
            <DataTableBody>
              <DataTableRow>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  Address
                </DataTableCell>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  {currentProperty.address}
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  Plan
                </DataTableCell>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  {currentProperty.plan}
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  Type
                </DataTableCell>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  {currentProperty.type}
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  Area
                </DataTableCell>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  {currentProperty.area} m&sup3;
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  Last Sale
                </DataTableCell>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  ${currentProperty.lastSaleValue}
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  Sale Date
                </DataTableCell>
                <DataTableCell
                  className="property-details__table-cell"
                  alignStart
                >
                  {Moment(currentProperty.lastSaleDate).format("DD/MM/YYYY")}
                </DataTableCell>
              </DataTableRow>
              {currentProperty.title !== "" && (
                <DataTableRow>
                  <DataTableCell
                    className="property-details__table-cell"
                    alignStart
                  >
                    Property name
                  </DataTableCell>
                  <DataTableCell
                    className="property-details__table-cell"
                    alignStart
                  >
                    {currentProperty.title}
                  </DataTableCell>
                </DataTableRow>
              )}
              {currentProperty.comments !== "" && (
                <DataTableRow>
                  <DataTableCell
                    className="property-details__table-cell"
                    alignStart
                  >
                    Property notes
                  </DataTableCell>
                  <DataTableCell
                    className="property-details__table-cell"
                    alignStart
                  >
                    {currentProperty.comments}
                  </DataTableCell>
                </DataTableRow>
              )}
            </DataTableBody>
          </DataTableContent>
        </DataTable>
        <div>
          <SavePropertyDialog
            currentProperty={currentProperty}
            updateProperty={updateProperty}
            className="property-details__call-to-action"
          />
          <Button
            outlined
            action="compareSales"
            className="property-details__call-to-action"
          >
            Compare sales
          </Button>
          <Button
            outlined
            action="prepareMail"
            className="property-details__call-to-action"
          >
            Prepare mail
          </Button>
        </div>
      </div>
    );
  }
}

export default PropertyDetails;
