import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Register from "./pages/Register";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">Scout</header>
          <Route exact path="/" component={Home} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/register/:level" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
