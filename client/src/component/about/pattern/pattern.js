import React, { Component } from "react";
import "./pattern.css";

export default class Pattern extends Component {
  render() {
    return (
      <div id="mb-0">
        <div className="jumbotron text-center hoverable p-4 bg-light mb-0">
          <div className="row">
            <div className="col-md-4 offset-md-1 mx-3 my-3">
              <div className="view overlay">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/laptop-sm.jpg"
                  className="img-fluid"
                  alt="#"
                />
                <>
                  <div className="mask rgba-white-slight" />
                </>
              </div>
            </div>

            <div className="col-md-7 text-md-left ml-3 mt-3">
              <a href="#!" className="green-text">
                <h6 className="h6 pb-1">
                  <i className="fas fa-book-reader" /> Pattern
                </h6>
              </a>

              <h4 className="h4 mb-4">
                These are Previous Year Pattern of Examination
              </h4>

              <p className="font-weight-normal">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque, totam rem aperiam, eaque ipsa quae ab
                illo inventore veritatis et quasi architecto beatae vitae dicta
                sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur.
              </p>
              <p className="font-weight-normal">
                by{" "}
                <>
                  <strong>Carine Fox</strong>
                </>
                , 19/08/2016
              </p>

              {/* <a  className="btn btn-success">Read more</a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
