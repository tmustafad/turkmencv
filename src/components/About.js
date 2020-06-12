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
            <p className="gray-text">
              Experienced Software Engineer with over 10 years of experience in
              Software Development. Excellent reputation for resolving problems,
              improving customer satisfaction and highly effective at developing
              new programs and fixing problems with existing systems. Proficient
              in Java ,Kotlin,JavaScript and Agile/Scrum methodology.
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
                  <strong>Email:</strong>
                  <a href="mailto:tmustafad@gmail.com"> tmustafad@gmail.com</a>
                </p>
                <p>
                  <strong>Phone:</strong> +905304975644
                </p>
              </div>
              <div className="col xl6 l6 m6 s12">
                <p>
                  <strong>Main Language</strong> - Turkish
                </p>
                <p>
                  <strong>Second Language</strong> - English
                </p>
                <p>
                  <pre>
                    <a
                      className="fa fa-facebook"
                      href="https://www.facebook.com/turkmen.m.demirci"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      className="fab fa-instagram grey-text text-darken-4 social_style"
                      href="https://www.instagram.com/tmustafad/"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      className="fab fa-linkedin grey-text text-darken-4 social_style"
                      href="https://www.linkedin.com/in/tdemirci/"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      className="fab fa-github grey-text text-darken-4 social_style"
                      href="https://github.com/tmustafad"
                      target="_blank"
                      rel="noopener noreferrer"
                    ></a>
                  </pre>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
