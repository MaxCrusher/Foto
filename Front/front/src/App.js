import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import MainPage from './Layout/MainPage';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" component = {MainPage}/>
          <Route path="/" component={Footer} />
        </div>
      </Router>
    );
  }
}

export default App;
