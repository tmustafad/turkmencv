import React, { Component } from "react";
import { Link } from "react-scroll";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

export default class Navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250,
    });
  }
  render() {
    return (
      <>
        <nav className="light-blue darken-4">
          <div className="container">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                Turkmen Mustafa Demirci
              </Link>
              <Link to="/" data-target="side-nav" className="sidenav-trigger">
                <i className="material-icons">menu</i>
              </Link>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">
                    <i className="fas fa-home"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="skills">
                    <i className="fas fa-copy"></i>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="experience">
                    <i className="fas fa-id-badge"></i> Experiences
                  </Link>
                </li>
                <li>
                  <Link to="education">
                    <i className="fas fa-graduation-cap"></i> Educations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul className="sidenav sidenav-close" id="side-nav">
          <li />
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="skills">
              <i className="fas fa-copy"></i> Skills
            </Link>
          </li>
          <li>
            <Link to="experience">
              <i className="fas fa-id-badge"></i> Experience
            </Link>
          </li>
          <li>
            <Link to="education">
              <i className="fas fa-graduation-cap"></i> Education
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
