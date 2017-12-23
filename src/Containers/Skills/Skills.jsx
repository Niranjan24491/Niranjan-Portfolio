import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Rating from "../../Components/rating";
import "./Skills.scss";

class Skills extends Component {
  addSkills = (
    ratingType = "circle",
    rating,
    ratingName,
    image = false,
    textPosition = "right",
    tooltip = true,
    color = "#009688"
  ) => {
    return (
      <Rating
        ratingType={ratingType}
        rating={rating}
        ratingName={ratingName}
        image={image}
        textPosition={textPosition}
        tooltip={tooltip}
        maxRange={10}
        color={color}
      />
    );
  };
  render() {
    return (
      <div className="skills-container">
        <h1 className="name">Skills</h1>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={6} className="align-items-right">
              {this.addSkills("circle", 9, "HTML5", false, "right", true)}
            </Col>
            <Col xs={12} md={6} lg={6} className="align-items-left">
              {this.addSkills("circle", 8, "CSS", false, "left")}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={6} className="align-items-right">
              {this.addSkills("circle", 8, "Javascript")}
            </Col>
            <Col xs={12} md={6} lg={6} className="align-items-left">
              {this.addSkills("circle", 7, "OOJS", false, "left")}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={6} className="align-items-right">
              {this.addSkills("circle", 6, "React")}
            </Col>
            <Col xs={12} md={6} lg={6} className="align-items-left">
              {this.addSkills("circle", 4, "Redux", false, "left")}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={6} className="align-items-right">
              {this.addSkills("circle", 7, "EmberJS")}
            </Col>
            <Col xs={12} md={6} lg={6} className="align-items-left">
              {this.addSkills("circle", 7, "HandleBars", false, "left")}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={6} className="align-items-right">
              {this.addSkills("circle", 9, "Bootstrap")}
            </Col>
            <Col xs={12} md={6} lg={6} className="align-items-left">
              {this.addSkills("circle", 9, "Foundation", false, "left")}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={6} className="align-items-right">
              {this.addSkills("circle", 5, "Node")}
            </Col>
            <Col xs={12} md={6} lg={6} className="align-items-left">
              {this.addSkills("circle", 5, "Express", false, "left")}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={6} className="align-items-right">
              {this.addSkills("circle", 4, "AngularJS", false, "right")}
            </Col>
            <Col xs={12} md={6} lg={6} className="align-items-left">
              {this.addSkills("circle", 6, "MongoDB", false, "left")}
            </Col>
          </Row>
          <Row className="show-grid">
            <Col xs={12} md={6} lg={6} className="align-items-right">
              {this.addSkills("circle", 7, "SASS", false, "right")}
            </Col>
            <Col xs={12} md={6} lg={6} className="align-items-left">
              {this.addSkills("circle", 9, "jQuery", false, "left")}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Skills;
