import React, { Component } from "react";
import background from "./map_background.png";
import PropertyPage from "./components/PropertyPage";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
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
          <PropertyPage/>
        </div>
      </div>
    );
  }
}

export default App;
