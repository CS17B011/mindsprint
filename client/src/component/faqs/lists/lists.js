import React from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import axios from "axios";
import "./lists.css";
import { MDBContainer, MDBJumbotron, MDBBtn, MDBCol, MDBIcon } from "mdbreact";

export default class PersonList extends React.Component {
  state = {
    doubt: [],
    showDoubt: []
  };
  // this.handleChange = this.handleChange.bind(this);

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const doubt = res.data;
      this.setState({ doubt: doubt, showDoubt: doubt });
    });
  }

  handleChange = e => {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.state.doubt;

      // Use .filter() to determine which items should be displayed
      // based on the search terms

      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.title.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.state.doubt;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      showDoubt: newList
    });
  };

  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MDBCol md="6">
            <div className="input-group md-form form-sm form-1 pl-0">
              <div className="input-group-prepend">
                <span
                  className="input-group-text purple lighten-3"
                  id="basic-text1"
                >
                  <MDBIcon className="text-white" icon="search" />
                </span>
              </div>
              <input
                onChange={e => this.handleChange(e)}
                className="form-control my-0 py-1"
                type="text"
                placeholder="Search Your Doubts Here"
                aria-label="Search"
              />
            </div>
          </MDBCol>
        </div>
        <MDBJumbotron fluid className="bg-light mb-0">
          <MDBContainer className="bg-light">
            <h2 className="display-5 text-center">
              Frequently Asked Questions
            </h2>
          </MDBContainer>
        </MDBJumbotron>

        <Accordion atomic={true}>
          {this.state.showDoubt.map(person => (
            <AccordionItem
              key={person.id}
              title={
                <i className="far fa-question-circle">
                  {"  "}
                  <span style={{ color: "#0d47a1" }}>{person.title}</span>
                </i>
              }
            >
              <i className="fas fa-star">
                {"  "}
                {person.body}
              </i>
            </AccordionItem>
          ))}
        </Accordion>

        <MDBJumbotron fluid className="bg-light mb-0">
          <MDBContainer className=" bg-light">
            <h2 className="display-6 text-center">Doesn't Find Your Doubt</h2>
            <h6 className="text-center">
              No Worries just send your doubt
              <Link className="text-white" to="/query">
                {" "}
                <MDBBtn gradient="peach" style={{ borderRadius: "50%" }}>
                  {" "}
                  HERE
                </MDBBtn>
              </Link>
            </h6>
            <h6 className="text-center">
              <i className="fas fa-laugh-beam" /> We wiil soon contact You
            </h6>
          </MDBContainer>
        </MDBJumbotron>
      </div>
    );
  }
}
