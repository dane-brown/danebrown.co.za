import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Panel from './Panel';
import ToDo from './components/ToDo';
import NoMatch from './NoMatch';

// Styles
import './css/App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/panel/" component={Panel}></Route>
          <Route exact path="/panel/todo/" component={ToDo}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
