// Container that holds the Property Details
import React from "react";
import { connect } from "react-redux";
import PropertyDetails from "./PropertyDetails";

const LeftContainer = currentlyOpen => {
  return (
    <div>
      <PropertyDetails />
      {/* {currentlyOpen === "details" && <PropertyDetails />} */}
      {/* {currentlyOpen === "tabs" && <div>TABS</div>} */}
    </div>
  );
};

const mapStateToProps = state => ({
  currentlyOpen: state.currentlyOpen
});

export default connect(mapStateToProps)(LeftContainer);
