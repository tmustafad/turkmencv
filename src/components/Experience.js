import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>EXPERIENCE</strong>
            </h6>
            <div className="row mt-top">
              <div className="col xl4 l4 m6 s12">
                <p className="teal year_exp white-text">Effortel</p>
                <p className="teal year_exp white-text">
                  Mar
                  <strong>2019</strong> -<strong>Current</strong>
                </p>
              </div>
              <div className="col xl8 l8 m6 s12">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>JAVA SOLUTIONS ARCHITECT</strong>
                  </h6>
                  <p>
                    Designing , developing new features and APIs with Java &
                    Related frameworks for internal BSS application which is
                    being used by MVNOs and finding solutions for complex IT
                    problems during integration phase with third party
                    applications . POC projects for AWS technologies like EC2,S3
                    and Elastic Beanstalk (These project can be found on my
                    gitlab) Streamlined deployment process by developing
                    continuous integration tools like Jenkins. Benchmarking
                    server code to validate code changes. End-to-End automation
                    for all build with Gitlab CI and Jenkins. 
                  </p>
                </blockquote>
              </div>
            </div>
            <div className="row mt-top">
              <div className="col xl4 l4 m6 s12">
                <p className="teal year_exp white-text">Turkcell Plc</p>
                <p className="teal year_exp white-text">
                  Dec
                  <strong>2010</strong> - Mar
                  <strong>2019</strong>
                </p>
              </div>
              <div className="col xl8 l8 m6 s12">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>SENIOR SOFTWARE ENGINEER</strong>
                  </h6>
                  <p>
                    I took part in developing J2EE based application frameworks
                    including authorization, authentication, session management,
                    logging, application management, interface customization,
                    auditing, etc. Designed and applied user interface
                    frameworks and reusable components on Java based web
                    technologies such as JSF. I both used core JDBC and JPA for
                    interacting with relational databases such as Oracle,MySQL.
                    Our Java applications are running on Oracle Weblogic App
                    Server . For some applications we used Tomcat Servlet
                    Container. Converting legacy SOA application to a
                    Microservices based applications , as a design decision this
                    conversion is achieved through Springboot apps where they
                    communicate through a custom api gateway. Design and the
                    development of a rest api by using spring MVC and Spring
                    Boot, this api is called through an UI which is developed
                    with Angular. This API is doing basic CRUD operations.
                    Converting the code base from Java7 to Java8. This contains
                    analyzing the code and inspect where we can get the
                    advantages of new Java features such as functional
                    interfaces,stream api etc. Junit is used for simple TTD .
                    Whoever writes a piece of code ,he or she definetly writes
                    the tests of it. For simulating the service calls , we are
                    using both mockito and an internal test api. This test api
                    is developed by us. Most used technologies : Java 6,Java 8,
                    Hibernate 4.x, JPA, Spring 4.x, Axis, Spring WS, Spring MVC,
                    Spring Restful, Spring Batch, Spring Roo, JSON, JAXB, XML,
                    JSF, PL/SQL,Primefaces,Spring
                    Boot,Junit,Mockito,Docker,Jenkins Tools were used : Eclipse
                    IntelliJ GIT SVN. Weblogic 9.2 / 10.x and Tomcat 6/7 as
                    application server. Maven and Ant both used as build tool.
                    SOAP UI. Oracle Design Studio 7.x JREBEL
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
