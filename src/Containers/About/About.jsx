import React, { Component } from "react";
import axios from "axios";
import "./About.scss";
import { Parallax } from "react-parallax";
import bgm from "../../../images/aboutImg.jpg";

const ABOUT_DATA_URL = "http://localhost:3000/about";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutData: ""
    };
  }

  componentDidMount() {
    axios
      .get(ABOUT_DATA_URL)
      .then(response => {
        this.setState({ aboutData: response.data[0].aboutMe });
      })
      .catch(function(error) {
        console.log(response);
      });
  }
  render() {
    return (
      <div className="about-container">
        {/* <h1 className="name">About Me</h1> */}
        <Parallax bgImage={bgm} strength={400}>
          <p className="about-text">{this.state.aboutData}</p>
        </Parallax>
      </div>
    );
  }
}

export default About;
