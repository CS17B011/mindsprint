import React, { Component } from "react";
import "./perk.css";
import { Link } from "react-router-dom";
export default class jumbotron extends Component {
  style = {
    backgroundImage:
      "url(https://wallimpex.com/data/out/697/dark-blue-backgrounds-10496281.jpg)"
  };

  render() {
    return (
      <div className="jumbotron card card-image" id="mb-0" style={this.style}>
        <div className="text-white text-center py-5 px-4">
          <div>
            <h2 className="card-title h1-responsive pt-3 mb-5 font-bold">
              <strong>Perks that will be given to Mindsprint organizers</strong>
            </h2>
            <p className="mx-2 mb-5">
              If the organizer is able to bring greater than 75 registrations
              he/she can get free tirutsava merchandise.
              <br /> Greater than 150 registrations he/she can get free VIP
              Tirutsava 2020 pro show passes + Tirutsava merchandise.
              <br /> Greater than 200 registrations he/she can get Food coupons
              of stalls in tirutsava + VIP Tirutsava 2020 pro show passes +
              Tirutsava merchandise.
              <br /> Note: the no of students will be on an individual basis ie
              if 2 students together bring 100 students 50 students will be
              added into each students registration count
            </p>
            <Link to="/register">
              <button id="hvr" className="btn btn-outline-white btn-md">
                <i className="fas fa-user-plus"> Register</i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
