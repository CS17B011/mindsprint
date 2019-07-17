import React, { Component } from "react";
import "./jumbotron.css";
import { Link } from "react-router-dom";

export default class jumbotron extends Component {
  style = {
    backgroundImage:
      "url(https://wallpaperplay.com/walls/full/a/7/d/182541.jpg)"
  };

  render() {
    return (
      <div className="jumbotron card card-image" id="mb-0" style={this.style}>
        <div className="text-white text-center py-5 px-4">
          <div>
            <h2 className="card-title h1-responsive pt-3 mb-5 font-bold">
              <strong>Description About Exam</strong>
            </h2>
            <p className="mx-2 mb-5" id="fnt">
              If the organizer is able to bring greater than 75 registrations
              he/she can get free tirutsava merchandise.
            </p>
            <Link to="/downloads">
              <button id="hvr" className="btn btn-outline-white btn-md">
                <i className="fas fa-clone left">View Sample Paper </i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
