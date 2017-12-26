import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./Experience.scss";
import deloitteLogo from "../../../images/deloitte.png";
import indegeneLogo from "../../../images/indegene.png";
import celstreamLogo from "../../../images/celstream.png";

export default class Experience extends Component {
  render() {
    return (
      <div className="experience-container" id="experience">
        <h1 className="name">Experience</h1>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col lg={12} md={12} xs={12}>
              <Row className="show-grid">
                <Col lg={9} md={9} xs={12}>
                  <h2 className="company">DELOITTE DIGITAL</h2>
                </Col>
                <Col lg={3} md={3} xs={12}>
                  <h3 className="duration">FEB 2016 - PRESENT</h3>
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12} xs={12}>
              <h3 className="designation">CONSULTANT</h3>
            </Col>
            <Col lg={8} md={8} xs={12}>
              <p className="description">
                Currently working as a UI developer from the past 1.5 years.
                Working in a Agile scrum with technologies like React, EmberJS
                etc.I do code reviews, build react modules. Been working on a
                project called "SCB NexGen" from 2years. Being in Deloitte
                Digital, I have taken many technical firm initiatives other than
                the regular project work to learn new technologies
              </p>
            </Col>
            <Col lg={4} md={4} xs={0} className="logo">
              <Image src={deloitteLogo} />
            </Col>
          </Row>

          <Row className="show-grid">
            <Col lg={12} md={12} xs={12}>
              <Row className="show-grid">
                <Col lg={9} md={9} xs={12}>
                  <h2 className="company">INDEGENE LIFE SYSTEMS</h2>
                </Col>
                <Col lg={3} md={3} xs={12}>
                  <h3 className="duration">DEC 2015 - FEB 2016</h3>
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12} xs={12}>
              <h3 className="designation">SENIOR SOFTWARE ENGINEER</h3>
            </Col>
            <Col lg={8} md={8} xs={12}>
              <p className="description">
                Was responsible for code reviews and develop front end web
                designs for health care products. developed various responsible
                web designs for health care products like pfizer, ranbaxy etc.
                lead a team of 2 and would provide tech support to the
                development team.
              </p>
            </Col>
            <Col lg={4} md={4} xs={0} className="logo">
              <Image src={indegeneLogo} />
            </Col>
          </Row>

          <Row className="show-grid">
            <Col lg={12} md={12} xs={12}>
              <Row className="show-grid">
                <Col lg={9} md={9} xs={12}>
                  <h2 className="company">CELSTREAM TECHNOLOGIES</h2>
                </Col>
                <Col lg={3} md={3} xs={12}>
                  <h3 className="duration">AUG 2013 - DEC 2015</h3>
                </Col>
              </Row>
            </Col>
            <Col lg={12} md={12} xs={12}>
              <h3 className="designation">SOFTWARE ENGINEER</h3>
            </Col>
            <Col lg={8} md={8} xs={12}>
              <p className="description">
                I started my career at this company as a C# developer. Gradually
                moved into UI technologies and eventually lead a team of 4. I
                would do code reviews and also train freshers on web
                technologies. Completed 3 projects successfully and learnt
                technologies like C#, SQL, HTML, CSS, bootstrap, javascript.
              </p>
            </Col>
            <Col lg={4} md={4} xs={0} className="logo">
              <Image src={celstreamLogo} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
