import React, { Component } from "react";
import Education from "./Education";
import Experience from "./Experience";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Skills from "./Skills";
import About from "./About";

export default class Home extends Component {
  render() {
    return (
      <section>
        <NavBar></NavBar>
        <div className="container">
          <div className="row">
            <div className="col s12 m4 l3">
              <Profile></Profile>
            </div>
            <div className="col s12 m8 l9">
              <About></About>
              <div id="skills">
                <Skills id="turkmen"></Skills>
              </div>
              <div id="education">
                <Education></Education>
              </div>
              <div id="experience">
                <Experience></Experience>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
