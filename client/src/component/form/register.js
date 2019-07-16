import React, { Component,useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Field ,reduxForm } from 'redux-form';
import CustomInput from './customInput';
import {connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../actions/index';
// import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
// import facebookSecret from '../../config/facebook-secret';
// import googleSecret from '../../config/google-secret';
import "./register.css";
import "./school";
class FormPage extends Component {

  formData = async (formData)=>{
      console.log('formData',formData);
      const response = await this.props.register(formData);

      // await this.props.emailVerification();
      console.log('response after registering is ',response);
  }

  //  responseGoogle = async (res)=>{
  //   console.log('inside google button',res);
  //   await this.props.googleoAuth(res);
  // }
  // responseFacebook = async (res)=>{
  //   console.log('response inside facebook button is',res);
  //   await this.props.facebookOAuth(res);
  // }

  render(){
    const {handleSubmit} = this.props;
    console.log('this.props',this.props);
    return (
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: "700px" }}>
          <h4 className="card-title mt-3 text-center" id="clr">
            Create Account
          </h4>
          <p className="text-center">Get started with your free account</p>
          {/* <p>
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
          </p> */}
          {/* <p >
            <p className = "test">
              <FacebookLogin 
                className= "test1"
                appId={facebookSecret.clientID}
                autoLoad={false}
                textButton = "LOGIN VIA FACEBOOK"
                fields="name,email,picture"
                callback = {this.responseFacebook}
              />
            </p>
            <p style = {{display:"flex"}}>
              <GoogleLogin 
                className= "test"
                clientId={googleSecret.clientID}
                buttonText = "LOGIN VIA GOOGLE"
                onSuccess = {this.responseGoogle}
              />
            </p>
          </p> */}
          
          
          {/* {<p className="divider-text">
            <span className="bg-light">OR</span>
          </p>} */}
          {
            this.props.errorMessage ? 
            <div className = 'alert alert-danger' style = {{textAlign:"center"}}>{this.props.errorMessage}</div>:null
          }
          {
            this.props.successMessage ? 
            <div className = "alert alert-success" style = {{textAlign:"center"}}>{this.props.successMessage}</div>:null
          }
          <form onSubmit = {handleSubmit(this.formData)}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>
              </div>
              <Field
                name="fullName"
                placeholder="Full name"
                type="text"
                component = {CustomInput}
                required
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-user" />{" "}
                </span>
              </div>
              <Field
                name="Class"
                placeholder="Class"
                type="text"
                component = {CustomInput}
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
              <Field
                name="emailId"
                
                placeholder="Email address"
                type="email"
                component = {CustomInput}
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
              <Field
                name="schoolId"
                
                placeholder="School"
                type="text"
                component = {CustomInput}
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
              <Field
                name="city"
                
                placeholder="City/Town"
                type="text"
                component = {CustomInput}
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
              <Field
                name="district"
                
                placeholder="District"
                type="text"
                component = {CustomInput}
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
              <Field
                name="state"
                
                placeholder="State"
                type="text"
                component = {CustomInput}
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
              <Field
                name="country"
                
                placeholder="Country If Other"
                component = {CustomInput}
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
              <Field
                name="phoneNo"
                
                placeholder="Phone number"
                type="text"
                component = {CustomInput}
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
              <Field
                name = "password"
                
                placeholder="Create password"
                type="password"
                component = {CustomInput}
                required
              />
            </div>
            {/* {<div className="form-group input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock" />{" "}
                </span>
              </div>
              <Field
                name = "password"
                className="form-control"
                placeholder="Repeat password"
                type="password"
                component = {CustomInput}
                required
              />
            </div>} */}
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
            <p className="text-center">
              Select a School? <Link to="/school">Schools</Link>{" "}
            </p>
          </form>
        </article>
      </div>
    );
  }
};

const mapStateToProps = (state)=>{
  return {
    errorMessage:state.auth.error,
    successMessage:state.auth.success
  }
}

export default compose(connect(mapStateToProps,actions),reduxForm({form:"register"}))(FormPage);
// reduxForm({form:"register"})(FormPage)