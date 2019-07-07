import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const FormPage = () => {
  return (
    <div className="card bg-light">
      <article className="card-body mx-auto" style={{ maxWidth: "700px" }}>
        <h4 className="card-title mt-3 text-center" id="clr">
          Sign In To Your Account
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

          <div className="form-group input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                {" "}
                <i className="fa fa-lock" />{" "}
              </span>
            </div>
            <input
              className="form-control"
              placeholder="Password"
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
              Login{" "}
            </button>
          </div>
          <p className="text-center">
            Don't have an account? <Link to="/register">Register</Link>{" "}
          </p>
        </form>
      </article>
    </div>
  );
};

export default FormPage;
