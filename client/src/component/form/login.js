import React from "react";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import facebookSecret from '../../config/facebook-secret';
import googleSecret from '../../config/google-secret';
import * as actions from '../actions/index';
import {Field,reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import customInput from '../form/customInput';
import "./register.css";

class Login extends React.Component{

  formSubmit = async (data)=>{
    console.log('formSubmit inside local login');
    const response = await this.props.login(data);
    console.log('response after local login is',response);
    if (response === "Yes"){
      await this.props.history.push('/');
    }else{
      await this.props.history.push('/login');
    }
    
  }

  responseSuccessGoogle = async (res)=>{
    console.log('inside google button',res);
    const response = await this.props.googleoAuth(res);
    if (response === "Yes"){
      await this.props.history.push('/');
    }else{
      await this.props.history.push('/register');
    }
    
  }
  responseFailureGoogle = async (res)=>{
    console.log('inside google failure button',res);
    await this.props.googleoAuth(res);
    await this.props.history.push('/login');
  }
  responseFacebook = async (res)=>{
    console.log('response inside facebook button is',res);
    const response = await this.props.facebookOAuth(res);
    if (response === "Yes"){
      await this.props.history.push('/');
    }else{
      await this.props.history.push('/register');
    }
  }
  removeMessage = async ()=>{
    await this.props.removeMessage();
  }

  render(){
    const {handleSubmit} = this.props;
    return (
      <div className="card bg-light">
        <article className="card-body mx-auto" style={{ maxWidth: "700px" }}>
          <h4 className="card-title mt-3 text-center" id="clr">
            Sign In To Your Account
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
          <p >
              <p className = "test">
                <FacebookLogin 
                  className= "test1"
                  appId={facebookSecret.clientID}
                  autoLoad = {false}
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
                  onSuccess = {this.responseSuccessGoogle}
                  onFailure = {this.responseFailureGoogle}
                />
              </p>
            </p>
          <p className="divider-text">
            <span className="bg-light">OR</span>
          </p>
          {this.props.errorMessage?<div className = "alert alert-danger" style = {{textAlign:"center"}}>{this.props.errorMessage}</div>:null}
          {this.props.successMessage?<div className = "alert alert-success" style = {{textAlign:"center"}}>{this.props.successMessage}</div>:null}
          <form onSubmit = {handleSubmit(this.formSubmit)}>
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
                component = {customInput}
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
              <Field
                name = "password"
                component = {customInput}
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
              Don't have an account? <Link to="/register" onClick = {this.removeMessage}>Register</Link>{" "}
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
  };
}

export default compose(connect(mapStateToProps,actions),reduxForm({form:"login"}))(Login);;
