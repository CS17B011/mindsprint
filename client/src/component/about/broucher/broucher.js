import React from "react";
import Image from "./image.jpg";
import "./broucher.css";

import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage
} from "mdbreact";

const JumbotronPage = () => {
  return (
    <MDBContainer fluid className="mt-0  text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0 mb-1">
            <MDBCardImage className="img-fluid" src={Image} />
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default JumbotronPage;
