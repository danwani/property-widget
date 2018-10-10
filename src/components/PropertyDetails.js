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
                <DataTableCell className="property-details__table-cell">
                  Address
                </DataTableCell>
                <DataTableCell className="property-details__table-cell">
                  {currentProperty.address}
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell className="property-details__table-cell">
                  Plan
                </DataTableCell>
                <DataTableCell className="property-details__table-cell">
                  {currentProperty.plan}
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell className="property-details__table-cell">
                  Type
                </DataTableCell>
                <DataTableCell className="property-details__table-cell">
                  {currentProperty.type}
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell className="property-details__table-cell">
                  Area
                </DataTableCell>
                <DataTableCell className="property-details__table-cell">
                  {currentProperty.area} m&sup3;
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell className="property-details__table-cell">
                  Last Sale
                </DataTableCell>
                <DataTableCell className="property-details__table-cell">
                  ${currentProperty.lastSaleValue}
                </DataTableCell>
              </DataTableRow>
              <DataTableRow>
                <DataTableCell className="property-details__table-cell">
                  Sale Date
                </DataTableCell>
                <DataTableCell className="property-details__table-cell">
                  {Moment(currentProperty.lastSaleDate).format("DD/MM/YYYY")}
                </DataTableCell>
              </DataTableRow>
              {currentProperty.title !== "" && (
                <DataTableRow>
                  <DataTableCell className="property-details__table-cell">
                    Property name
                  </DataTableCell>
                  <DataTableCell className="property-details__table-cell">
                    {currentProperty.title}
                  </DataTableCell>
                </DataTableRow>
              )}
              {currentProperty.comments !== "" && (
                <DataTableRow>
                  <DataTableCell className="property-details__table-cell">
                    Property notes
                  </DataTableCell>
                  <DataTableCell className="property-details__table-cell">
                    {currentProperty.comments}
                  </DataTableCell>
                </DataTableRow>
              )}
            </DataTableBody>
          </DataTableContent>
        </DataTable>
        <div className="property-details__call-to-action">
          <SavePropertyDialog
            currentProperty={currentProperty}
            updateProperty={updateProperty}
          />
        </div>
        <div className="property-details__call-to-action">
          <Button outlined action="compareSales">
            Compare sales
          </Button>
        </div>
        <div className="property-details__call-to-action">
          <Button outlined action="prepareMail">
            Prepare mail
          </Button>
        </div>
      </div>
    );
  }
}

export default PropertyDetails;
