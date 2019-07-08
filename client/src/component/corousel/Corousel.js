import React, { Component } from "react";
import "./colo.css";
import Information from "./information.jpg";
import Second from "./second.jpeg";
import Third from "./third.jpeg";

class Corousel extends Component {
  render() {
    return (
      <div>
        <div className="bd-example mt-0">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleCaptions" data-slide-to="1" />
              <li data-target="#carouselExampleCaptions" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Information}
                  className="d-block w-100"
                  style={{ maxHeight: "850px", minHeight: "232px" }}
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ maxHeight: "850px", minHeight: "232px" }}
                  src={Second}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img
                  style={{ maxHeight: "850px", minHeight: "232px" }}
                  src={Third}
                  className="d-block w-100"
                  alt="..."
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Corousel;
