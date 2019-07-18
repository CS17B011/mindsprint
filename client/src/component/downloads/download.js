import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText} from 'mdbreact';
import data from './mockData';
import './download.css';

class Downloads extends React.Component {

  state = {
    modal: false
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    const ret = data.map((dat) => {
      return(
        <div className="col-12 col-md-6">
          <MDBCard style={{ width: "22rem" }} className="card">
          <MDBCardBody>
            <MDBCardTitle>{dat.name}</MDBCardTitle>
            <MDBCardText>
                {dat.year}
            </MDBCardText>
            <MDBCardText>
                {dat.download}
            </MDBCardText>
              <a href={process.env.PUBLIC_URL +'/'+ dat.download+'.pdf'} download>Summa</a>
          </MDBCardBody>
        </MDBCard>
      </div>
      );
    })

    return(
      <React.Fragment>
      <div className="jumbotron">
        <p>Last Year Papers</p>
      </div>
      <div className="container">
        <div className="row justify-self-center">
          {ret}
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Downloads;
