import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import './auth.css';
import { Link } from 'react-router-dom';

class Register extends React.Component{

  state = {
    fullName: "sdksj",
    Class: "sdre",
    schoolName: "sdfdrew",
    district: "dfgds",
    state: "dfgre",
    phoneNo: "dfgd",
    emailId: "dfgds@jdsl",
    password: "dfgds",
    organizerId: "dfds"
  }

  eventHandler = event => {
    if(event.target.name === "agrreTC")
      this.setState({ [event.target.name]: event.target.checked});
    else {
      this.setState({ [event.target.name]: event.target.value});
    }
  }

  submitHandler = event => {
    event.preventDefault();

    const body = this.state;
    body.Class = Number(body.Class);
    console.log(body);
    if(!body.agreeTC)
      swal("Read Terms and Conditions and agree","","info");
    else {
      const config = {headers: {'Content-Type':'application/json'}}

      axios.post('http://localhost:5000/api/students/register',body,config)
          .then(res => swal("Good Job!", "You have successfully registered", "success"))
          .catch(err => {
            var errmsg;
            if(err.response.data.msg)
                errmsg = err.response.data.msg;
            else {
              errmsg = "error which is not properly handled";
            }
              swal("invalid credentials",errmsg,"error").then(()=>{
              if(err.response.data.field)
                document.getElementById(err.response.data.field).focus();
              });
              console.log(err.response.data.msg);
            });
    }
  }

  render(){
    return (
        <div style = {{marginBottom:"20px",marginTop:"20px"}}>
          <form onSubmit={this.submitHandler}>
            <MDBContainer id = "container">
              <MDBRow  style = {{justifyContent:"center"}} >
                <MDBCol>
                  <MDBCard
                    className="card-image"
                    style={{
                      backgroundColor:"black"
                    }}
                  >
                    <div className="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                      <div className="text-center">
                        <h3 className="white-text mb-5 mt-4 font-weight-bold">
                          <strong>SIGN</strong>
                          <Link to="/" className="green-text font-weight-bold">
                            <strong> UP</strong>
                          </Link>
                        </h3>
                      </div>
                      <MDBInput label="Full Name"
                       name="fullName"
                       group type="text"
                       id="fullName"
                       required
                       onChange = {this.eventHandler}
                       value = {this.state.fullName}/>
                      <MDBInput
                        label="Class"
                        name="Class"
                        group type="text"
                        id="Class"
                        required
                        onChange = {this.eventHandler}
                        value = {this.state.Class}/>
                      <MDBInput
                        label="School Name"
                        name="schoolName"
                        group type="text"
                        id="schoolName"
                        required
                        onChange = {this.eventHandler}
                        value = {this.state.schoolName}/>
                      <MDBInput
                        label="District"
                        name="district"
                        group type="text"
                        required
                        id="district"
                        onChange = {this.eventHandler}
                        value = {this.state.district}/>
                      <MDBInput
                        label="State"
                        name="state"
                        group type="text"
                        id="state"
                        required
                        onChange = {this.eventHandler}
                        value = {this.state.state}/>
                      <MDBInput
                        label="Phone Number"
                        name="phoneNo"
                        group type="text"
                        id="phoneNo"
                        required
                        onChange = {this.eventHandler}
                        value = {this.state.phoneNo}/>
                      <MDBInput
                        label="Email"
                        name="emailId"
                        group type="email"
                        id="emailId"
                        required
                        onChange = {this.eventHandler}
                        value = {this.state.emailId}/>
                      <MDBInput
                        label="Password"
                        name="password"
                        group type="password"
                        id="password"
                        required
                        onChange = {this.eventHandler}
                        value = {this.state.password}/>
                      <MDBInput
                        label = "Organizer Id(optional)"
                        name="organizerId"
                        group type="text"
                        onChange = {this.eventHandler}
                        value = {this.state.organizerId}/>
                      <div className="md-form pb-3">
                        <div className="form-check my-4">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="defaultCheck17"
                          />
                          <label
                            className="form-check-label white-text"
                            htmlFor="defaultCheck17"
                          >
                            Accept the
                            <Link to="/" className="green-text font-weight-bold">
                              Terms and Conditions
                            </Link>
                          </label>
                        </div>
                      </div>
                      <MDBRow className="d-flex align-items-center mb-4">
                        <div className="text-center mb-3 col-md-12">
                          <MDBBtn
                            color="success"
                            rounded
                            type="submit"
                            className="btn-block z-depth-1"
                          >
                            Sign in
                          </MDBBtn>
                        </div>
                      </MDBRow>
                      <MDBCol md="12">
                        <p className="font-small white-text d-flex justify-content-end">
                          Have an account?
                          <Link to="/" className="green-text ml-1 font-weight-bold">
                            Log in
                          </Link>
                        </p>
                      </MDBCol>
                    </div>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
        </MDBContainer>
          </form>
        </div>
  );
};
}

export default Register;
