import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import "./Skills.scss";

class Skills extends Component {
  render() {
    return (
      <div className="skills-container">
        <h1 className="name">Skills</h1>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={12}>
              {" "}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Skills;
