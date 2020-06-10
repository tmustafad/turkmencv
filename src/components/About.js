import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className="mt-bottom">
              <strong>ABOUT ME</strong>
            </h6>
            <p className="grey-text">
              Software Engineer who precisely executes development projects from
              concept to delivery. Highly skilled software development
              professional bringing more than 10 years in software design,
              development and integration. Advanced knowledge of Java and
              related frameworks and tools like Spring ,Spring Boot,
              JPA,Hibernate,Docker,Jenkins, Kafka, J2EE.
            </p>
          </div>
          <div className="card-action">
            <h6>
              <strong>PERSONAL INFO</strong>
            </h6>
            <div className="row mt">
              <div className="col xl6 l6 m6 s12">
                <p>
                  <strong>Address:</strong> Istanbul / Turkey
                </p>
                <p>
                  <strong>Email:</strong> tmustafad@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +905304975644
                </p>
              </div>
              <div className="col xl6 l6 m6 s12">
                <p>
                  <strong>Main Language</strong> - English
                </p>
                <p>
                  <strong>Second Language</strong> - Turkish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
