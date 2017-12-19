import React, { Component } from "react";
import "./Profile.scss";
import Home from "./Home/Home";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Interests from "./Interests/Interests";
import Contacts from "./Contacts/Contacts";
import axios from "axios";

const SKILLS_DATA_URL = "http://localhost:3000/skills";
let SKILLS_DATA = "";
class Profiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: "Home",
      skillsData: {}
    };
  }

  componentDidMount() {
    axios
      .get(SKILLS_DATA_URL)
      .then((response) => {
        this.setState({skillsData: response.data[0]})
      })
      .catch(function(error) {
        console.log(response);
      });
  }

  menuClick = item => {
    this.setState({ profile: item });
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
        <div className="menu-card">
          <span onClick={e => this.menuClick("Home")}>Home</span>
          <span onClick={e => this.menuClick("Skills")}>Skills</span>
          <span onClick={e => this.menuClick("Projects")}>Projects</span>
          <span onClick={e => this.menuClick("Interests")}>Interests</span>
          <span onClick={e => this.menuClick("Contacts")}>Contacts</span>
        </div>
        <div className="profiles-card">
          {this.getComponent(this.state.profile)}
        </div>
      </div>
    );
  }
}

export default Profiles;
