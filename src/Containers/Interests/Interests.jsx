import React, { Component } from "react";
import { Grid, Row, Col, Button, Image } from "react-bootstrap";
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
  selectPhoto = selected => {
    if (selected === "bombe") {
      window.open("https://youtu.be/C5-jtz_21SA");
    } else if (selected === "antammas") {
      window.open("https://youtu.be/OhjKDvrNaws");
    } else if (selected === "drugception") {
      window.open("https://youtu.be/g3tipuAfFOk");
    } else {
      window.open("https://youtu.be/SsgshEhDQrY");
    }
  };

  render() {
    return (
      <div className="interests-container" id="interests">
        <h1 className="name">Interests</h1>
        <Grid fluid={true} className="interests-content">
          <Row>
            <Col xs={12} md={12} lg={12}>
              <h2>The ART of Movie Making</h2>
              <h3> I have made a couple of short movies to learn the art</h3>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} lg={6}>
              <Image src={bombe} className="movie-image" />
            </Col>
            <Col xs={6} md={6} lg={6}>
              <h2
                className="movie-name"
                onClick={e => this.selectPhoto("bombe")}
              >
                Bombe Heluthaite (2017)
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} lg={6}>
              <Image src={antammas} className="movie-image" />
            </Col>
            <Col xs={6} md={6} lg={6}>
              <h2
                className="movie-name"
                onClick={e => this.selectPhoto("antammas")}
              >
                Antammas (2016)
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} lg={6}>
              <Image src={drupception} className="movie-image" />
            </Col>
            <Col xs={6} md={6} lg={6}>
              <h2
                className="movie-name"
                onClick={e => this.selectPhoto("drugception")}
              >
                Drugception (2016)
              </h2>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6} lg={6}>
              <Image src={alegalu} className="movie-image" />
            </Col>
            <Col xs={6} md={6} lg={6}>
              <h2
                className="movie-name"
                onClick={e => this.selectPhoto("alegalu")}
              >
                Alegalu (2015)
              </h2>
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
