import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import "./Interests.scss";
import bombe from "../../../images/bombe.jpg";
import antammas from "../../../images/antammas.jpg";
import alegalu from "../../../images/alegalu.jpg";
import drupception from "../../../images/drugception.jpg";

const PHOTO_SET = [
  {
    src: bombe,
    width: 6,
    height: 2,
    id: "bombe"
  },
  {
    src: antammas,
    width: 4,
    height: 2,
    id: "antammas"
  },
  {
    src: drupception,
    width: 4,
    height: 2,
    id: "drugception"
  },
  {
    src: alegalu,
    width: 6,
    height: 2,
    id: "alegalu"
  }
];

class Interests extends Component {
  selectPhoto = (e, obj) => {
    if (e.target.id === "bombe") {
      window.open("https://youtu.be/C5-jtz_21SA");
    } else if (e.target.id === "antammas") {
      window.open("https://youtu.be/OhjKDvrNaws");
    } else if (e.target.id === "drugception") {
      window.open("https://youtu.be/g3tipuAfFOk");
    } else {
      window.open("https://youtu.be/SsgshEhDQrY");
    }
  };
  render() {
    return (
      <div className="interests-container">
        <h1 className="name">Interests</h1>
        <Grid>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <h3>The ART of Movie Making</h3>
              <h5> I have made a couple of short movies to learn the art</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <Gallery
                photos={PHOTO_SET}
                columns={2}
                onClick={this.selectPhoto}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12}>
              <h4>
                IT'S NOT JUST ABOUT CREATIVITY, IT IS ABOUT THE PERSON YOU'RE
                BECOMING WHILE YOU'RE CREATING ...
              </h4>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Interests;
