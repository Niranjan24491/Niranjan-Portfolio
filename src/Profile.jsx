import React, { Component } from "react";
import "./Profile.scss";
import bgm from "../images/bg3.jpg";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Interests from "./Interests/Interests";
import Contacts from "./Contacts/Contacts";
import axios from "axios";
import FontAwesome from "react-fontawesome";

const SKILLS_DATA_URL = "http://localhost:3000/skills";
class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "Home",
      skillsData: {},
      menuClass: "menu-card-white"
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
    this.setState({ profile: item });
    if (item === "Home") {
      this.setState({ menuClass: "menu-card-white" });
    } else {
      this.setState({ menuClass: "menu-card-black" });
    }
  };

  imageDiv = () => {
    if (this.state.profile === "Home") {
      return (
        <div className="bg-image">
          <img src={bgm} />
        </div>
      );
    }
  };
  getComponent = item => {
    switch (item) {
      case "Home":
        return <Home data={this.state.skillsData} />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Interests":
        return <Interests />;
      case "Contacts":
        return <Contacts />;
    }
  };

  render() {
    return (
      <div className="profiles-container">
        {this.imageDiv()}
        <div className={`menu-card ${this.state.menuClass}`}>
          <span onClick={e => this.menuClick("Home")}>Home</span>
          <span onClick={e => this.menuClick("Skills")}>Skills</span>
          <span onClick={e => this.menuClick("Projects")}>Projects</span>
          <span onClick={e => this.menuClick("Interests")}>Interests</span>
          <span onClick={e => this.menuClick("Contacts")}>Contacts</span>
        </div>
        <div className="profiles-card">
          {this.getComponent(this.state.profile)}
        </div>
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
      </div>
    );
  }
}

export default Profiles;
