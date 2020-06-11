import React, { Component } from "react";
//import 'materialize-css/dist/css/materialize.min.css';
import { HashLink as Link } from "react-router-hash-link";

export default class Navbar extends Component {
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
                    <i class="fas fa-home"></i> Home
                  </Link>
                </li>
                <li>
                  <Link to="#skills">
                    <i class="fas fa-copy"></i> Skills
                  </Link>
                </li>
                <li>
                  <Link to="/experience">
                    <i class="fas fa-id-badge"></i> Experiences
                  </Link>
                </li>
                <li>
                  <Link to="/education">
                    <i class="fas fa-graduation-cap"></i> Educations
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <ul class="sidenav" id="side-nav">
          <li />
          <li>
            <Link to="/">
              <i class="fas fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/skills">
              <i class="fas fa-copy"></i> Skills
            </Link>
          </li>
          <li>
            <Link to="/Experience">
              <i class="fas fa-id-badge"></i> Experience
            </Link>
          </li>
          <li>
            <Link to="/Education">
              <i class="fas fa-graduation-cap"></i> Education
            </Link>
          </li>
        </ul>
      </>
    );
  }
}
