// Container that holds the Property Details
import React from "react";
import { connect } from "react-redux";
import PropertyDetails from "./PropertyDetails";

const LeftContainer = menu => {
  const { currentlyOpen } = menu;
  return (
    <div>
      {currentlyOpen === "details" && <PropertyDetails />}
      {currentlyOpen === "tabs" && <div>TABS</div>}
    </div>
  );
};

const mapStateToProps = state => state.menu;

export default connect(mapStateToProps)(LeftContainer);
