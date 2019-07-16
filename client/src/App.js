import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import Reducers from "./component/reducers/index";
import Navbar from "./component/Nav/Navbar";
import Landing from "./component/landing/landing";
import Footer from "./component/footer/footer";

import About from "./component/about/about";
import Register from "./component/form/register";
import Login from "./component/form/login";

import Contact from "./component/contact/contact";
import Faqs from "./component/faqs/faqs";
import Query from "./component/query/query";
import School from "./component/form/school";
import EmailVerification from "./component/email/emailVerification";
import AuthGuard from "./component/hocs/authguard";
// import Downloads from "./component/downloads/download";

const jwtToken = localStorage.getItem("jwtToken");
class App extends Component {
  render() {
    return (
      <Provider
        store={createStore(
          Reducers,
          {
            auth: {
              jwtToken: jwtToken,
              isAuthenticated: jwtToken ? true : false
            }
          },
          applyMiddleware(ReduxThunk)
        )}
      >
        <Router>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/contact" component={AuthGuard(Contact)} />
            <Route exact path="/faqs" component={AuthGuard(Faqs)} />
            <Route exact path="/school" component={AuthGuard(School)} />
            <Route exact path="/query" component={AuthGuard(Query)} />
            {/* <Route exact path="/downloads" component={AuthGuard(Downloads)} /> */}
            <Route
              exact
              path="/emailVerification"
              component={EmailVerification}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={AuthGuard(About)} />
          </Switch>

          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
