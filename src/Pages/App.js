import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './App.css';
import Results from './Results';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />
        <div className="App-content">
          <Router>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
