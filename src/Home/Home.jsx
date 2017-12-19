import React, { Component } from "react";
import "./Home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.data.name
    };
  }

  render() {
    return (
      <div className="home-container">
        <h1 className="name">{this.state.name}</h1>
      </div>
    );
  }
}

export default Home;
