import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "rmwc";
import { GridCell } from "rmwc";
import { Button } from "@rmwc/button";
import background from "./map_background.png";
import LeftContainer from "../components/LeftContainer";
import { changeTab } from "../actions";

import "./Home.css";

import "@material/button/dist/mdc.button.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";

class Home extends Component {
  render() {
    console.log("props-home:");
    console.log(this.props);

    const openDetails = () => event => {
      this.props.changeTab("details");
    };

    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      height: "800px",
      backgroundRepeat: "no-repeat",
      WebkitTransition: "all",
      msTransition: "all"
    };

    return (
      <div className="home">
        <Grid>
          <GridCell span="3">
            <div>
              <LeftContainer />
            </div>
          </GridCell>
          <GridCell span="9">
            <div style={backgroundStyle}>
              <Button
                className="home__call-to-action"
                raised
                onClick={openDetails()}
              >
                View property details
              </Button>
            </div>
          </GridCell>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  changeTab: tab => dispatch(changeTab(tab))
});

export default connect(
  null,
  mapDispatchToProps
)(Home);
