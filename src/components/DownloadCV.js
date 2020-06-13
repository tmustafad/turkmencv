import React, { Component } from "react";
import { Button } from "react-bootstrap";
const url =
  "https://drive.google.com/file/d/1FXjXBjf1HmQ9leApqDEyzKNURPp-7GYT/view?usp=sharing";

export default class DownloadCV extends Component {
  render() {
    return (
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer" download>
          <Button>
            <i className="fas fa-download" />
            Download my CV
          </Button>
        </a>
      </div>
    );
  }
}
