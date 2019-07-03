import React, { Fragment } from "react";
import "./App.css";
import Navbar from "./component/Nav/Navbar";
import Corousel from "./component/corousel/Corousel";
import Footer from "./component/footer/footer";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Corousel />
      <Footer />
    </Fragment>
  );
}

export default App;
