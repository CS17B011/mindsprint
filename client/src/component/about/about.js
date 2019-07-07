import React, { Component } from "react";
import Pattern from "./pattern/pattern";
import Sponsers from "./sponsers/sponsers";
import Gallery from "./gallery/gallery";

export default class About extends Component {
  render() {
    return (
      <>
        <Pattern />
        <Gallery />
        <Sponsers />
      </>
    );
  }
}
