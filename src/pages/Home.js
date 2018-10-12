import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { Grid } from "rmwc";
import { GridCell } from "rmwc";
import background from "./map_background.png";
import LeftContainer from "../components/LeftContainer";
import { Button } from "@rmwc/button";

import "./Home.css";

import "@material/button/dist/mdc.button.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";

class Home extends Component {
  constructor(props) {
    super(props);
    const { showDetails } = this.props;
  }

  render() {
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
              <LeftContainer/>
            </div>
          </GridCell>
          <GridCell span="9">
            <div style={backgroundStyle}>
              <Button
                className="home__call-to-action"
                raised
                onClick={this.showDetails}
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

export default Home;

//TODO map showDetails action using mapDispatch