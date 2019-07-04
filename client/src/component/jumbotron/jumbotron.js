import React, { Component } from "react";
import "./jumbotron.css";

export default class jumbotron extends Component {
  style = {
    backgroundImage:
      "url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)"
  };

  render() {
    return (
      <div className="jumbotron card card-image" id="mb-0" style={this.style}>
        <div className="text-white text-center py-5 px-4">
          <div>
            <h2 className="card-title h1-responsive pt-3 mb-5 font-bold">
              <strong>Description About Exam</strong>
            </h2>
            <p className="mx-5 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat
              fugiat, laboriosam, voluptatem, optio vero odio nam sit officia
              accusamus minus error nisi architecto nulla ipsum dignissimos.
              Odit sed qui, dolorum!
            </p>
            <button className="btn btn-outline-white btn-md">
              <i className="fas fa-clone left"> View Sample Paper</i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
