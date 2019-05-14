import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import emailtest from "./views/emailtest";
import NoMatch from "./NoMatch";

// Styles
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/email" component={emailtest} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
