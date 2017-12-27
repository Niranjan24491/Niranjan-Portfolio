import React, { Component } from "react";
import "./Home.scss";
import htmlLogo from "../../../images/htmlLogo.png";
import { Grid, Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: "700px"
    };
  }

  render() {
    return (
      <Grid fluid={true} className="home-container" id="home">
        <Row>
          <Col lg={12} md={12} xs={12}>
            <h1 className="name">
              NIRANJAN THRINESHWAR
              <span className="sub-name"> </span>
            </h1>
            <h3 className="name">
              Sanjaynagar, Bangalore-560094 . (+91) 966-377-0742 .{" "}
              <span className="sub-name"> NIRANJAN.SUNAADA@GMAIL.COM</span>
            </h3>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} xs={12}>
            <p>
              I am a 'FULL STACK DEVELOPER' with 4+ years of experience in the
              field of UI development. would like to qualify as a top level
              designer & developer in a growth oriented organization which
              offers diverse job responsibilities and allows me to enhance my
              skills.I have spent the last 4 years in self development to become
              a better developer every day and have tried to learn in-depth
              about the technologies I follow. Although I love what I'm doin, I
              feel I'm ready to take the next step and challenge the extra mile
              which the clients require.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} xs={12}>
            <div className="social-card">
              <FontAwesome
                name="facebook"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
              <FontAwesome
                name="google-plus"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
              <FontAwesome
                name="twitter"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
              <FontAwesome
                name="youtube"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
              <FontAwesome
                name="linkedin"
                style={{ textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)" }}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}
