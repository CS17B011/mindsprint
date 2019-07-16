import React, { Component } from "react";
import DownloadCard from "./DownloadCard";
import "./download.css";
import { MDBContainer, MDBJumbotron } from "mdbreact";

export default class download extends Component {
  state = {
    cards: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(downloads => {
        this.setState({
          cards: downloads
        });
        console.log(downloads);
      });
  }
  render() {
    const { cards } = this.state;
    return (
      <div>
        <MDBJumbotron fluid className="bg-light">
          <MDBContainer className="bg-light">
            <h2 className="display-4">Previous Year Papers</h2>
          </MDBContainer>
        </MDBJumbotron>
        <div className="download-card-list">
          {cards.map(card => {
            return (
              <DownloadCard
                key={card.id}
                id={card.id}
                name={card.name}
                username={card.username}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
