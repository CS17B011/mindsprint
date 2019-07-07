import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Nav/Navbar";
import Corousel from "./component/corousel/Corousel";
import Footer from "./component/footer/footer";
import Jumbo from "./component/jumbotron/jumbotron";
import About from "./component/about/about";
import Register from "./component/form/register";
import Login from "./component/form/login";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Corousel} />
          <Route exact path="/" component={Jumbo} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
          </Switch>

          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
