import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImgProfile from "../images/turkmen.jpeg";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-image">
            <img className="activator" src={ImgProfile} alt="John Doe" />
            <Link className="btn-floating halfway-fab waves-effect waves-light red">
              <i className="material-icons activator">more_vert</i>
            </Link>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Turkmen Mustafa Demirci
            </span>
            <p>Senior Software Engineer</p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Follow Me
              <i className="material-icons right">close</i>
            </span>
            <p className="flex-container">
              <i className="fab fa-facebook-f grey-text text-darken-4 social_style"></i>
              <i className="fab fa-instagram grey-text text-darken-4 social_style"></i>
              <i className="fab fa-linkedin grey-text text-darken-4 social_style"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
