import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import emailtest from "./views/emailtest";
import NoMatch from "./NoMatch";
import useDarkMode from "use-dark-mode";

// Styles
import "./css/App.css";

const App = () => {
  const darkMode = useDarkMode(false);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/email" component={emailtest} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
