import React, { Component } from "react";
import { Grid } from "rmwc";
import { GridCell } from "rmwc";
import { GridInner } from "rmwc";
import background from "./map_background.png";
import LeftContainer from "./components/LeftContainer";
import { Button } from "@rmwc/button";
import "@material/button/dist/mdc.button.css";
import "./App.css";
import "@material/layout-grid/dist/mdc.layout-grid.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyOpen: "tabs",
      currentProperty: {
        isInCrm: false
      }
    };
  }

  showDetails = evt => {
    const newProperty = {
        isInCrm: false,
        image: 'https://www.endlesssummerresort.com.au/assets/cache/endless-summer-1120269w-2000x1000pcy.jpg',
        address: 'Unit 1 9-21 Frank St Coolum Beach 4573',
        plan: 'L5, RP720278',
        type: 'Apartment',
        area: 200,
        lastSaleValue: 670000,
        lastSaleDate: new Date('02/04/2017'),
        title: '',
        comments: ''
    }
    this.setState({
      currentProperty: newProperty,
      currentlyOpen: "details"
    });
  };

  updateProperty = values => {
    this.setState({currentProperty: { ...this.state.currentProperty, ...values }});
  };

  closeDetails = evt => {
    this.setState({
      currentlyOpen: "tabs"
    });
  };

  render() {
    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      height: "800px",
      backgroundRepeat: "no-repeat",
      WebkitTransition: "all",
      msTransition: "all"
    };

    return (
      <div className="App">
        <header className="App-header">Fun times with ReactJS</header>
        <Grid>
          <GridCell span="3">
            <div>
              <LeftContainer
                currentlyOpen={this.state.currentlyOpen}
                closeDetails={this.closeDetails}
                currentProperty={this.state.currentProperty}
                updateProperty={this.updateProperty}
              />
            </div>
          </GridCell>
          <GridCell span="9">
            <div style={backgroundStyle}>
              <Button
                className="App__call-to-action"
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

export default App;
