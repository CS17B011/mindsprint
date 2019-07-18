import React, { Component } from "react";
import Select from "react-select";
import { Link, Redirect } from "react-router-dom";
import {MDBBtn,MDBIcon} from 'mdbreact';
import "./register.css";
import "./school";

class FormPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      emailId: "",
      countryCodeOption: true,
      countryCode: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
      schoolId: ""
    }
  }

  eventHandler = event => {
    if(event.target.name === "countryCode")
      this.setState({ [event.target.name]: event.target.checked});
    else {
      this.setState({ [event.target.name]: event.target.value});
    }
  }

  handleChange = selectedOption => {
    const newList = this.state.doubt.filter(item => {
      // change current item to lowercase
      const lc = item.title.toLowerCase();
      // change search term to lowercase
      if (selectedOption) {
        const filter = selectedOption.title.toLowerCase();
        return lc.includes(filter);
      } else {
        // this.setState({ newList: this.state.doubt });
        return lc;
      }
    });
    this.setState({ selectedOption, showDoubt: newList });
    console.log(`Option selected:`, selectedOption);
  };
  handleChange1 = selectedOption => {
    const newList = this.state.doubt.filter(item => {
      // change current item to lowercase
      const lc = item.title.toLowerCase();
      // change search term to lowercase
      if (selectedOption) {
        const filter = selectedOption.body.toLowerCase();
        return lc.includes(filter);
      } else {
        return lc;
      }
    });
    this.setState({ selectedOption, showDoubt: newList });
    console.log(`Option selected:`, selectedOption);
  };
  handleChange2 = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };

  render() {

    const { selectedOption, selectedOption1, selectedOption2 } = this.state;

    return (
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: "700px" }}>
          <h4 className="card-title mt-3 text-center" id="clr">
            Create Account
          </h4>
          <p className="text-center">Get started with your free account</p>
          <p>
            <a
              id="hvr"
              href="http://google.com"
              className="btn btn-block btn-twitter"
            >
              {" "}
              <i className="fab fa-google" />   Login via Google
            </a>
            <a
              id="hvr"
              href="http://fb.com"
              className="btn btn-block btn-facebook"
            >
              {" "}
              <i className="fab fa-facebook-f" />   Login via facebook
            </a>
          </p>
          <p className="divider-text">
            <span className="bg-light">OR</span>
          </p>
          <form>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>
              </div>
              <input
                name="fullName"
                className="form-control"
                placeholder="Full name"
                type="text"
                required
                onChange = {this.eventHandler}
                value = {this.state.fullName}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-envelope" />{" "}
                </span>
              </div>
              <input
                name="emailId"
                className="form-control"
                placeholder="Email address"
                type="email"
                required
                onChange = {this.eventHandler}
                value = {this.state.emailId}
              />
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-flag" />{" "}
                </span>
              </div>
              <select className="custom-select" style={{ maxWidth: "120px" }}
                name="countryCodeOption"
              >
                <option value="0" selected={this.state.countryCodeOption}>India</option>
                <option value="1" selected={!this.state.countryCodeOption}>other</option>
              </select>
              <input
                name="countryCode"
                className="form-control"
                placeholder="Country If Other"
                type="text"
                onChange = {this.eventHandler}
                value = {this.state.countryCode}
              />
            </div>

            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-phone" />{" "}
                </span>
              </div>
              <select className="custom-select" style={{ maxWidth: "120px" }}>
                <option value="">+91</option>
                <option value="1">other</option>
              </select>
              <input
                name="phoneNo"
                className="form-control"
                placeholder="Phone number"
                type="text"
                required
                onChange = {this.eventHandler}
                value = {this.state.phoneNo}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock" />{" "}
                </span>
              </div>
              <input
                name="password"
                className="form-control"
                placeholder="Create password"
                type="password"
                required
                onChange = {this.eventHandler}
                value = {this.state.password}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock" />{" "}
                </span>
              </div>
              <input
                name="confirmPassword"
                className="form-control"
                placeholder="Repeat password"
                type="password"
                required
                onChange = {this.eventHandler}
                value = {this.state.confirmPassword}
              />
            </div>
            <label className="grey-text font-weight-light" />
            <Select
              placeholder="State"
              isClearable
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.showDoubt}
              getOptionLabel={option => option.title}
              getOptionValue={option => option.title}
            />
            <label className="grey-text font-weight-light" />
            <Select
              isClearable
              placeholder="City"
              value={selectedOption1}
              onChange={this.handleChange1}
              options={this.state.showDoubt}
              getOptionLabel={option => option.body}
              getOptionValue={option => option.body}
            />
            {/* <input
              type="email"
              id="defaultFormCardEmailEx"
              className="form-control"
              placeholder="Your Email"
            /> */}
            <label className="grey-text font-weight-light" />
            <Select
              isClearable
              placeholder="School"
              value={selectedOption2}
              onChange={this.handleChange2}
              options={this.state.showDoubt}
              getOptionLabel={option => option.id}
              getOptionValue={option => option.id}
            />
            {/* <input
              type="email"
              id="defaultFormCardEmailEx"
              className="form-control"
              placeholder="Your Doubt Here"
            /> */}

            <div className="form-group">
              <button
                id="hvr"
                type="submit"
                className="btn btn-primary btn-block"
              >
                {" "}
                Create Account{" "}
              </button>
            </div>
          </form>
        </article>
      </div>
    );
  }

}

export default FormPage;
