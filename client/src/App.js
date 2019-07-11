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
import Perks from "./component/Perks/perk";
import Contact from "./component/contact/contact";
import Faqs from "./component/faqs/faqs";
import Query from "./component/query/query";
import School from "./component/form/school";
// import Downloads from "./component/downloads/download";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Corousel} />
          <Route exact path="/" component={Perks} />
          <Route exact path="/" component={Jumbo} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/faqs" component={Faqs} />
            <Route exact path="/school" component={School} />
            <Route exact path="/query" component={Query} />
            {/* <Route exact path="/downloads" component={Downloads} /> */}

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
