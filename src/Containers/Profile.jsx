import React, { Component } from "react";
import "./Profile.scss";
import profileImage from "../../images/profilePhoto.jpg";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Interests from "./Interests/Interests";
import Contacts from "./Contacts/Contacts";
import Education from "./Education/Education";
import axios from "axios";
import FontAwesome from "react-fontawesome";
import { Grid, Row, Col, Image } from "react-bootstrap";

const SKILLS_DATA_URL = "http://localhost:3000/skills";
class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "Home",
      skillsData: {},
      profileClass: ""
    };
  }

  componentDidMount() {
    axios
      .get(SKILLS_DATA_URL)
      .then(response => {
        this.setState({ skillsData: response.data[0] });
      })
      .catch(function(error) {
        console.log(response);
      });
  }

  menuClick = item => {
    switch (item) {
      case "Home":
        location.href = "#home";
        break;
      case "Skills":
        location.href = "#skills";
        break;
      case "Experience":
        location.href = "#experience";
        break;
      case "Education":
        location.href = "#education";
        break;
      case "Interests":
        location.href = "#interests";
        break;
      case "Contacts":
        location.href = "#contact";
        break;
    }
    item === "About"
      ? this.setState({
          profileClass: "profile-fluid"
        })
      : this.setState({
          profileClass: ""
        });
  };

  render() {
    return (
      <div className="portfolio">
        <div className="menu-container">
          <div className="menu-card menu-card-white">
            <div className="profile-image">
              <Image src={profileImage} circle />
            </div>
            <div className="menu-card">
              <span onClick={e => this.menuClick("Home")}>Home</span>
              <span onClick={e => this.menuClick("Skills")}>Skills</span>
              <span onClick={e => this.menuClick("Experience")}>
                Experience
              </span>
              <span onClick={e => this.menuClick("Education")}>Education</span>
              <span onClick={e => this.menuClick("Interests")}>Interests</span>
              <span onClick={e => this.menuClick("Contacts")}>Contact Me</span>
            </div>
          </div>
        </div>

        <div className="profile-container">
          <Grid fluid={true}>
            <Col xs={12} md={12} lg={12} className={this.state.profileClass}>
              <div className="profiles-card">
                <Home />
                <Skills />
                <Experience />
                <Education />
                <Interests />
                <Contacts />
              </div>
            </Col>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Profiles;
