import React, { Component } from "react";
import Pattern from "./pattern/pattern";
import Sponsers from "./sponsers/sponsers";
import Gallery from "./gallery/gallery";
import Broucher from "./broucher/broucher";
export default class About extends Component {
  render() {
    return (
      <>
        <Broucher />
        <Pattern />
        <Gallery />
        <Sponsers />
      </>
    );
  }
}
