// View component included into the Property Page

import React, { Component } from "react";
import { Button } from "@rmwc/button";
import { IconButton } from "@rmwc/icon-button";
import Moment from "moment";
import {
  List,
  ListItem,
  ListItemGraphic,
  ListItemText,
  ListItemPrimaryText,
  ListItemSecondaryText
} from "@rmwc/list";

import SavePropertyDialog from "./SavePropertyDialog";

import "@material/list/dist/mdc.list.css";
import "@material/button/dist/mdc.button.css";
import "@material/icon-button/dist/mdc.icon-button.css";
import "@material/textfield/dist/mdc.textfield.css";
import "@material/floating-label/dist/mdc.floating-label.css";
import "@material/notched-outline/dist/mdc.notched-outline.css";
import "@material/line-ripple/dist/mdc.line-ripple.css";
import "./PropertyDetails.css";

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
        <List twoLine className="property-details__details-list">
          <ListItem>
            <ListItemGraphic icon="room" />
            <ListItemText>
              <ListItemPrimaryText className="property-details__details-list-label">
                Address
              </ListItemPrimaryText>
              <ListItemSecondaryText className="property-details__details-list-detail">
                {currentProperty.address}
              </ListItemSecondaryText>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="account_balance" />
            <ListItemText>
              <ListItemPrimaryText className="property-details__details-list-label">
                Lot/Plan
              </ListItemPrimaryText>
              <ListItemSecondaryText className="property-details__details-list-detail">
                {currentProperty.plan}
              </ListItemSecondaryText>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="location_city" />
            <ListItemText>
              <ListItemPrimaryText className="property-details__details-list-label">
                Type
              </ListItemPrimaryText>
              <ListItemSecondaryText className="property-details__details-list-detail">
                {currentProperty.type}
              </ListItemSecondaryText>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="map" />
            <ListItemText>
              <ListItemPrimaryText className="property-details__details-list-label">
                Area
              </ListItemPrimaryText>
              <ListItemSecondaryText className="property-details__details-list-detail">
                {currentProperty.area} m&sup2;
              </ListItemSecondaryText>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="monetization_on" />
            <ListItemText>
              <ListItemPrimaryText className="property-details__details-list-label">
                Last Sale
              </ListItemPrimaryText>
              <ListItemSecondaryText className="property-details__details-list-detail">
                {new Intl.NumberFormat("en-GB", {
                  style: "currency",
                  currency: "AUD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0
                }).format(currentProperty.lastSaleValue)}
              </ListItemSecondaryText>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemGraphic icon="event" />
            <ListItemText>
              <ListItemPrimaryText className="property-details__details-list-label">
                Sale Date
              </ListItemPrimaryText>
              <ListItemSecondaryText className="property-details__details-list-detail">
                {Moment(currentProperty.lastSaleDate).format("DD/MM/YYYY")}
              </ListItemSecondaryText>
            </ListItemText>
          </ListItem>
          {currentProperty.title !== "" && (
            <ListItem>
              <ListItemGraphic icon="favorite" />
              <ListItemText>
                <ListItemPrimaryText className="property-details__details-list-label">
                  Property Name
                </ListItemPrimaryText>
                <ListItemSecondaryText className="property-details__details-list-detail">
                  {currentProperty.title}
                </ListItemSecondaryText>
              </ListItemText>
            </ListItem>
          )}
          {currentProperty.comments !== "" && (
            <ListItem>
              <ListItemGraphic icon="notes" />
              <ListItemText>
                <ListItemPrimaryText className="property-details__details-list-label">
                  Property Notes
                </ListItemPrimaryText>
                <ListItemSecondaryText className="property-details__details-list-detail">
                  {currentProperty.comments}
                </ListItemSecondaryText>
              </ListItemText>
            </ListItem>
          )}
        </List>
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
