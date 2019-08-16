import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import NoPageAvailable from './components/404';
import HomePage from './components/Home';
import Result from './components/Result';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router >
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/result" exact component={Result} />
            <Route component={NoPageAvailable} />
          </Switch>
        </Router>

      </div>
    );
  }
}

export default App;
