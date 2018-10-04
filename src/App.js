import React, { Component } from "react";
import background from "./map_background.png";
import { Button } from "@rmwc/button";
import "./App.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogButton
} from "@rmwc/dialog";
import "@material/button/dist/mdc.button.css";
import "@material/dialog/dist/mdc.dialog.css";
import "@material/button/dist/mdc.button.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { standardDialogOpen: false };
  }

  render() {
    const backgroundStyle = {
      backgroundImage: `url(${background})`,
      height: "800px",
      backgroundRepeat: "no-repeat",
      WebkitTransition: "all", // note the capital 'W' here
      msTransition: "all" // 'ms' is the only lowercase vendor prefix
    };

    return (
      <div className="App">
        <header className="App-header">Fun times with ReactJS</header>
        <div style={backgroundStyle}>
          {/** Standard dialog usage */}
          <Dialog
            open={this.state.standardDialogOpen}
            onClose={evt => {
              console.log(evt.detail.action);
              this.setState({ standardDialogOpen: false });
            }}
          >
            <DialogTitle>Property</DialogTitle>
            <DialogContent>
              <img className="App-property-image" alt="Property thumbnail" src="https://www.endlesssummerresort.com.au/assets/cache/endless-summer-1120269w-2000x1000pcy.jpg"/>

            </DialogContent>
            <DialogActions>
              <DialogButton action="close">Cancel</DialogButton>
              <DialogButton action="accept" isDefaultAction>
                Sweet!
              </DialogButton>
            </DialogActions>
          </Dialog>

          <Button
            className="App-call-to-action"
            raised
            onClick={evt => this.setState({ standardDialogOpen: true })}
          >
            View property details
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
