import React from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "react-light-accordion";
import "react-light-accordion/demo/css/index.css";
import axios from "axios";
import "./lists.css";
import { MDBContainer, MDBJumbotron, MDBBtn } from "mdbreact";

export default class PersonList extends React.Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div>
        <MDBJumbotron fluid className="bg-light mb-0">
          <MDBContainer className="bg-light">
            <h2 className="display-5 text-center">
              Frequently Asked Questions
            </h2>
          </MDBContainer>
        </MDBJumbotron>

        <Accordion atomic={true}>
          {this.state.persons.map(person => (
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
