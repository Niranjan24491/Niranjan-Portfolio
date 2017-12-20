import React, { Component } from "react";
import "./Home.scss";
import htmlLogo from "../../images/htmlLogo.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home-container">
        <div className="name">
          <h1 className="name">{`< ${this.props.data.firstName} 
        ${this.props.data.lastName} />`}</h1>
        </div>
        <div className="title">
          <div className="symbol">
            <img src={htmlLogo} />
          </div>
          <div className="sub-title">
            <h3>{`< Full Stack Developer />`}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
