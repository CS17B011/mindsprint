import React, { Component } from "react";
import Search from "./search/search";
import List from "./lists/lists";

export default class faqs extends Component {
  render() {
    return (
      <div>
        <Search />
        <List />
      </div>
    );
  }
}
