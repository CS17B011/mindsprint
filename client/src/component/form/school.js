import React from "react";
import Select from "react-select";
import "./register.css";
//For more custamization goto 'react-select' npm
import axios from "axios";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow
} from "mdbreact";

class App extends React.Component {
  state = {
    selectedOption: null,
    doubt: [],
    showDoubt: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const doubt = res.data;
      this.setState({ doubt: doubt, showDoubt: doubt });
    });
  }

  handleChange = selectedOption => {
    const newList = this.state.doubt.filter(item => {
      // change current item to lowercase
      const lc = item.title.toLowerCase();
      // change search term to lowercase
      if (selectedOption) {
        const filter = selectedOption.title.toLowerCase();
        return lc.includes(filter);
      } else {
        // this.setState({ newList: this.state.doubt });
        return lc;
      }
    });
    this.setState({ selectedOption, showDoubt: newList });
    console.log(`Option selected:`, selectedOption);
  };
  handleChange1 = selectedOption => {
    const newList = this.state.doubt.filter(item => {
      // change current item to lowercase
      const lc = item.title.toLowerCase();
      // change search term to lowercase
      if (selectedOption) {
        const filter = selectedOption.body.toLowerCase();
        return lc.includes(filter);
      } else {
        return lc;
      }
    });
    this.setState({ selectedOption, showDoubt: newList });
    console.log(`Option selected:`, selectedOption);
  };
  handleChange2 = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  //   handleChange1 = selectedOption => {
  //     this.setState({ selectedOption1: selectedOption });
  //     console.log(`Option selected:`, selectedOption);
  //   };
  render() {
    const { selectedOption, selectedOption1, selectedOption2 } = this.state;

    return (
      <div>
        <MDBContainer fluid style={{ maxWidth: "700px" }} className="my-5">
          <MDBRow md="6">
            <MDBCol>
              <MDBCard>
                <MDBCardBody>
                  <form>
                  <p className="h4 text-center py-4">Select Your School</p>
                  <label className="grey-text font-weight-light" />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your School Code"
                  />
                  <label className="grey-text font-weight-light" />
                  <span className="ctr">OR</span>
                  <label className="grey-text font-weight-light" />
                  <Select
                    placeholder="State"
                    isClearable
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.state.showDoubt}
                    getOptionLabel={option => option.title}
                    getOptionValue={option => option.title}
                  />
                  <label className="grey-text font-weight-light" />
                  <Select
                    isClearable
                    placeholder="City"
                    value={selectedOption1}
                    onChange={this.handleChange1}
                    options={this.state.showDoubt}
                    getOptionLabel={option => option.body}
                    getOptionValue={option => option.body}
                  />
                  {/* <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    placeholder="Your Email"
                  /> */}
                  <label className="grey-text font-weight-light" />
                  <Select
                    isClearable
                    placeholder="School"
                    value={selectedOption2}
                    onChange={this.handleChange2}
                    options={this.state.showDoubt}
                    getOptionLabel={option => option.id}
                    getOptionValue={option => option.id}
                  />
                  {/* <input
                    type="email"
                    id="defaultFormCardEmailEx"
                    className="form-control"
                    placeholder="Your Doubt Here"
                  /> */}
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      id="hvr"
                      className="btn btn-outline-purple"
                      type="submit"
                    >
                      Select
                      <MDBIcon far icon="paper-plane" className="ml-2" />
                    </MDBBtn>
                  </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}
export default App;
