import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-content">
            <h6>
              <strong>EDUCATION</strong>
            </h6>
            <table class="striped">
              <thead>
                <tr>
                  <th>School</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Major</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marmara Universty</td>
                  <td>Sep 2001</td>
                  <td>June 2005</td>
                  <td>
                    Bachelor of Science: Automative Eng- Techniccal Education
                    Faculty
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h6>
              <strong>CERTIFICATION</strong>
            </h6>
            <table class="striped">
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>Issue Date</th>
                  <th>Topic</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Coursera - Stanford Universty</td>
                  <td>July 2018</td>
                  <td>Machine Learning</td>

                  <td>
                    <a
                      // to="/"
                      href="https://www.coursera.org/account/accomplishments/verify/TDWDVS4RKJ36"
                      class="btn blue lighten-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Coursera - JetBrains</td>
                  <td>May 2020</td>
                  <td>Kotlin for Java Developers</td>

                  <td>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      // to="/"
                      href="https://www.coursera.org/account/accomplishments/certificate/NDLHJVGAE2GR"
                      class="btn blue lighten-2"
                    >
                      View
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
