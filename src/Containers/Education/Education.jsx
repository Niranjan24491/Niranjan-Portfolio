import React, { Component } from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import schoolLogo from "../../../images/school.jpg";
import pucLogo from "../../../images/puc.png";
import collegeLogo from "../../../images/college.png";
import "./Education.scss";

export default class Education extends Component {
  render() {
    return (
      <div className="education-container" id="education">
        <h1 className="name">Education</h1>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col lg={12} md={12} xs={12}>
              <ul className="timeline">
                <li>
                  <div className="edu-description">
                    <h2>Nitte Meenakshi Institute of Technology</h2>
                    <h4>Computer Science and Engineering</h4>
                    <h4>CGPA: 77.5%</h4>
                    <h3> 2009-2013</h3>
                  </div>
                  <div className="edu-image">
                    <Image src={collegeLogo} circle />
                  </div>
                </li>

                <li>
                  <div className="edu-description">
                    <h2>KLE Independent PU College</h2>
                    <h4>PCMC</h4>
                    <h4>CGPA: 62%</h4>
                    <h3> 2007-2009</h3>
                  </div>
                  <div className="edu-image">
                    <Image src={pucLogo} style={{ marginTop: "18%" }} circle />
                  </div>
                </li>

                <li>
                  <div className="edu-description">
                    <h2>Poorna Prajna Education Center</h2>
                    <h4>CGPA: 88%</h4>
                    <h3> 1997-2007</h3>
                  </div>
                  <div className="edu-image">
                    <Image src={schoolLogo} circle />
                  </div>
                </li>
              </ul>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
