import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small pt-4 clr" id="mb-0 clr">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">About Mindspirint</h5>
              <p>
                Here you can use rows and columns to organize your footer
                content.
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-2 mb-md-0 mb-3">
              <h5 className="text-uppercase">Follow Us</h5>

              <ul className="list-unstyled">
                <li>
                  <a id="xd" href="#!">
                    <i className="fab fa-facebook-square">{"   "}Facebook</i>
                  </a>
                </li>
                <li>
                  <a href="#!" id="xd">
                    <i className="fab fa-google"> Google+</i>
                  </a>
                </li>
                <li>
                  <a href="#!" id="xd">
                    <i className="fab fa-twitter"> Twitter</i>
                  </a>
                </li>
                <li>
                  <a href="#!" id="xd">
                    <i className="fab fa-instagram"> Instagram</i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
              <h5 className="text-uppercase">Sponsers</h5>

              <ul className="list-unstyled">
                <li>
                  <a id="xd" href="#!">
                    <i className="fab fa-facebook-square">{"   "}Facebook</i>
                  </a>
                </li>
                <li>
                  <a href="#!" id="xd">
                    <i className="fab fa-google"> Google+</i>
                  </a>
                </li>
                <li>
                  <a href="#!" id="xd">
                    <i className="fab fa-twitter"> Twitter</i>
                  </a>
                </li>
                <li>
                  <a href="#!" id="xd">
                    <i className="fab fa-instagram"> Instagram</i>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3">
              <h5 className="text-uppercase">Contact Us</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" id="xd">
                    <i className="fas fa-map-marked-alt">
                      {" "}
                      IIT Tirupati
                      <br /> Renigunta Road, Settipali Post
                      <br />
                      Tirupati 517506
                    </i>
                  </a>
                </li>
                <li>
                  <a href="#!" id="xd">
                    <i className="fas fa-mobile-alt"> +9194XXXXXXX</i>
                  </a>
                </li>
                <li>
                  <a href="#!" id="xd">
                    <i className="fas fa-at"> XXX@gmail.com</i>
                  </a>
                </li>
                <li>
                  <a href="#!" id="xd">
                    <i className="fab fa-internet-explorer"> www.xxx.com</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3  clr1">
          © 2019 Copyright:
          <a href="#1" id="xd">
            {" "}
            Mindspirint.com
          </a>
        </div>
      </footer>
    );
  }
}
