import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Nav/Navbar";
import Corousel from "./component/corousel/Corousel";
import Footer from "./component/footer/footer";
import Jumbo from "./component/jumbotron/jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route to="/" component={Corousel} />

          <Route to="/" component={Jumbo} />
          <Switch />

          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
