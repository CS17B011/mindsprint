import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardGroup,
  MDBContainer,
  MDBJumbotron
} from "mdbreact";

const PanelPage = props => {
  return (
    <>
      <MDBJumbotron fluid className="bg-light">
        <MDBContainer className="bg-light">
          <h2 className="display-4">Regional Heads</h2>
        </MDBContainer>
      </MDBJumbotron>
      <MDBContainer fluid className="mb-4">
        <MDBCardGroup deck>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag="h5">
                Andhra-Pradesh, Bihar, Rajasthan and Uttarakhand
              </MDBCardTitle>
              <MDBCardText>
                <span>
                  <i className="fas fa-file-signature" /> Name : Chandan
                </span>
                <br />
                <span>
                  <i className="fas fa-phone" /> Mobile : +919182260711
                </span>
                <br />
                <span>
                  <i className="fas fa-at" /> Email : culturalsec@iittp.ac.in
                </span>
                <br />
                <br />
                <span>
                  <i className="fas fa-file-signature" /> Name : Nikhil
                </span>
                <br />
                <span>
                  <i className="fas fa-phone" /> Mobile : +91836957675
                </span>
                <br />
                <span>
                  <i className="fas fa-at" /> Email : ee17b026@iittp.ac.in
                </span>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag="h5">
                Haryana, Himachal, Jammu & Kashmir, Jharkhand, Karnataka,
                Kerala, Madhya-Pradesh and Maharashtra
              </MDBCardTitle>
              <MDBCardText>
                <span>
                  <i className="fas fa-file-signature" /> Name : Anirudh Sampath
                </span>
                <br />
                <span>
                  <i className="fas fa-phone" /> Mobile : +919666512266
                </span>
                <br />
                <span>
                  <i className="fas fa-at" /> Email : me17b002@iittp.ac.in
                </span>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag="h5">Tamilnadu and Uttar-Pradesh</MDBCardTitle>
              <MDBCardText>
                <span>
                  <i className="fas fa-file-signature" /> Name : Aravind
                </span>
                <br />
                <span>
                  <i className="fas fa-phone" /> Mobile : +917358417176
                </span>
                <br />
                <span>
                  <i className="fas fa-at" /> Email : ee17b032@iittp.ac.in
                </span>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag="h5">Telangana</MDBCardTitle>
              <MDBCardText>
                <span>
                  <i className="fas fa-file-signature" /> Name : Akhil
                </span>
                <br />
                <span>
                  <i className="fas fa-phone" /> Mobile : +918985413595
                </span>
                <br />
                <span>
                  <i className="fas fa-at" /> Email : ee17b008@iittp.ac.in
                </span>
                <br />
                <br />
                <span>
                  <i className="fas fa-file-signature" /> Name : Alekhya
                </span>
                <br />
                <span>
                  <i className="fas fa-phone" /> Mobile : +918074670522
                </span>
                <br />
                <span>
                  <i className="fas fa-at" /> Email : ee17b012@iittp.ac.in
                </span>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </MDBContainer>
    </>
  );
};

export default PanelPage;
