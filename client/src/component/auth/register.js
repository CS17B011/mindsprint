import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import './auth.css';
import { Link } from 'react-router-dom';
class Register extends React.Component{
  render(){
    return (
        <div style = {{marginBottom:"20px",marginTop:"100px",minWidth:"0px"}}>
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
                  <MDBInput label="Full Name" group type="text" validate />
                  <MDBInput label="Class" group type="text" validate />
                  <MDBInput label="School Name" group type="text" validate />
                  <MDBInput label="District" group type="text" validate />
                  <MDBInput label="State" group type="text" validate />
                  <MDBInput label="District" group type="text" validate />
                  <MDBInput label="Phone Number" group type="text" validate />
                  <MDBInput label="Email" group type="email" validate />
                  <MDBInput label = "Organizer Id(optional)" group type="text" />
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
                        type="button"
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
        </div>
  );
};
}

export default Register;
