import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const FormPage = () => {
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
              name=""
              className="form-control"
              placeholder="Full name"
              type="text"
              required
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
              name=""
              className="form-control"
              placeholder="Email address"
              type="email"
              required
            />
          </div>
          {/* School */}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-graduation-cap" />{" "}
              </span>
            </div>
            <input
              name=""
              className="form-control"
              placeholder="School"
              type="text"
              required
            />
          </div>
          {/* City */}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-home" />{" "}
              </span>
            </div>
            <input
              name=""
              className="form-control"
              placeholder="City/Town"
              type="text"
              required
            />
          </div>
          {/* District */}
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-city" />{" "}
              </span>
            </div>
            <input
              name=""
              className="form-control"
              placeholder="District"
              type="text"
              required
            />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-map-marked-alt" />{" "}
              </span>
            </div>
            <input
              name=""
              className="form-control"
              placeholder="State"
              type="text"
              required
            />
          </div>

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-flag" />{" "}
              </span>
            </div>
            <select className="custom-select" style={{ maxWidth: "120px" }}>
              <option value="">India</option>
              <option value="1">other</option>
            </select>
            <input
              name=""
              className="form-control"
              placeholder="Country If Other"
              type="text"
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
              name=""
              className="form-control"
              placeholder="Phone number"
              type="text"
              required
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-building" />{" "}
              </span>
            </div>
            <select className="form-control" required>
              <option value=""> Select Paricipation type</option>
              <option>Organiser</option>
              <option>Paricipant</option>
              <option>School</option>
            </select>
          </div>
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-lock" />{" "}
              </span>
            </div>
            <input
              className="form-control"
              placeholder="Create password"
              type="password"
              required
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
              className="form-control"
              placeholder="Repeat password"
              type="password"
              required
            />
          </div>
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
          <p className="text-center">
            Have an account? <Link to="/login">Log In</Link>{" "}
          </p>
        </form>
      </article>
    </div>
  );
};

export default FormPage;
