import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon
} from "mdbreact";

const FormPage = () => {
  return (
    <MDBContainer fluid style={{ maxWidth: "700px" }} className="my-5">
      <MDBRow md="6">
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sumit Your Doubt Here</p>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="grey-text font-weight-light"
                />
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                  placeholder="Your name"
                />

                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                />
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="grey-text font-weight-light"
                />
                <input
                  type="email"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                  placeholder="Your Doubt Here"
                />
                <div className="text-center py-4 mt-3">
                  <MDBBtn
                    id="hvr"
                    className="btn btn-outline-purple"
                    type="submit"
                  >
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
