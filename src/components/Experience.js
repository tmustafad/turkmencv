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
                  Mar&nbsp;
                  <strong>2019</strong> -<strong>Current</strong>
                </p>
              </div>
              <div className="col xl8 l8 m6 s12">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>JAVA SOLUTIONS ARCHITECT</strong>
                  </h6>
                  <p>
                    Designing and developing new features and APIs with Java
                    ,J2EE and Spring for internal BSS application which is being
                    used by MVNOs and finding solutions for complex IT problems
                    during integration phase with third party applications.
                    <br></br>
                    Dockerizing the current modules and making them work in
                    harmony through a custom api gateway POC projects for AWS
                    technologies like EC2,S3 and Elastic Beanstalk (These
                    project can be found in gitlab) . <br></br>Streamlined
                    deployment process by developing continuous integration
                    tools like Jenkins Benchmarking server code to validate code
                    changes.<br></br>
                    End-to-End automation for all build with Gitlab CI and
                    Jenkins Building a service layer for migrating new
                    customer's data and making adjustments to it in order to
                    comply with the current database.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="row mt-top">
              <div className="col xl4 l4 m6 s12">
                <p className="teal year_exp white-text">Turkcell Plc</p>
                <p className="teal year_exp white-text">
                  Dec&nbsp;
                  <strong>2010</strong> - Mar&nbsp;
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
                    auditing, etc.<br></br> Designed and applied user interface
                    frameworks and reusable components on Java based web
                    technologies such as JSF, I both used core JDBC and JPA for
                    interacting with relational databases such as Oracle,MySQL.
                    <br></br>
                    Our Java applications are running on Oracle Weblogic App
                    Server For some applications we used Tomcat Servlet
                    Container.<br></br> Converting legacy SOA application into
                    Microservices , as a design decision this conversion is
                    achieved through small Spring Boot modules where they
                    communicate through a custom api gateway.<br></br> Design
                    and the development of a rest api by using spring MVC and
                    Spring Boot, this api is called through an UI which is
                    developed with Angular .<br></br>This API is doing basic
                    CRUD operations Converting the code base from Java7 to
                    Java8.<br></br>This contains analyzing the code and inspect
                    where we can get the advantages of new Java features such as
                    functional interfaces,stream api etc.
                    <br></br> Junit is used for simple TTD For simulating the
                    service calls , Mockito and an internal test api is used
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="row mt-top">
              <div className="col xl4 l4 m6 s12">
                <p className="teal year_exp white-text">Aviva Plc</p>
                <p className="teal year_exp white-text">
                  Nov&nbsp;
                  <strong>2009</strong> - Dec&nbsp;
                  <strong>2010</strong>
                </p>
              </div>
              <div className="col xl8 l8 m6 s12">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>SOFTWARE DEVELOPMENT SPECIALIST</strong>
                  </h6>
                  <p>
                    Developed J2EE applications and portlets using frameworks
                    like JSF,Spring and custom made MVC framework developed
                    internally by Aviva Software Dev.<br></br>Team Developed a
                    custom Enterpries Service Bus by implementing SOA Design
                    Patterns.<br></br>
                    We also use Hibernate at DB level together with Spring.
                    <br></br> There is also Lotus Notes Applications developed
                    by LN team including me.<br></br> Handling IT Governance
                    Issues of Aviva Turkey Branch.We use Cobit framework at
                    Governance side
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="row mt-top">
              <div className="col xl4 l4 m6 s12">
                <p className="teal year_exp white-text">32Bit Bilgisayar</p>
                <p className="teal year_exp white-text">
                  Oct&nbsp;
                  <strong>2006</strong> - Nov&nbsp;
                  <strong>2009</strong>
                </p>
              </div>
              <div className="col xl8 l8 m6 s12">
                <blockquote className="no-pad">
                  <h6 className="no-pad mt-bottom">
                    <strong>SOFTWARE DEVELOPER</strong>
                  </h6>
                  <p>
                    I took part in Turkey's one of the biggest SOA projects at
                    Aksigorta (Leading Insurance Company).<br></br> We developed
                    BPELs working on Web- sphere Process Server and developed
                    GUIs using Struts framework.<br></br> I also took part in
                    Isbank (The leading Bank in Turkey) Credit scoring SOA
                    project, We used business rules as web services to calculate
                    customers' credit ratings.<br></br> I also took part in
                    Akbank (The leading Bank in Turkey) MultiChannel
                    Architecture POC using IBM tool BTT
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
