import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>PROFESSIONAL SKILLS</strong>
            </h6>
            <div className="row mt-top">
              <div className="col s6">
                <p>Java</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>Spring</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <p>JPA - Hibernate</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>Kotlin</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col s6">
              <p>Oracle</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <p>MySQL</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>React Js</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>Spring</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: "100%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
