import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PageNotFound from './pages/pageNotFound';
import PlanetFinder from './pages/mainPage';
import Result from './pages/resultPage';
import Header from './components/header';
import Footer from './components/footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router >
          <Switch>
            <Route path="/" exact component={PlanetFinder} />
            <Route path="/result" exact component={Result} />
            <Route component={PageNotFound} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
