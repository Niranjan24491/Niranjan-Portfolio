import React, { Component } from "react";
import { Grid, Row, Col, Button } from "react-bootstrap";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import "./Contacts.scss";

const CONTACT_DATA_URL = "http://localhost:3000/contact";
const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: 13.039245, lng: 77.571556 }}
    >
      {props.isMarkerShown && (
        <Marker position={{ lat: 13.039245, lng: 77.571556 }} />
      )}
    </GoogleMap>
  ))
);

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      thoughtValue: ""
    };
  }

  onInputChange = (type, e) => {
    if (type === "name") {
      this.setState({
        nameValue: e.target.value
      });
    } else {
      this.setState({
        thoughtValue: e.target.value
      });
    }
  };

  submitResponse = () => {
    if (this.state.nameValue && this.state.thoughtValue) {
      axios
        .post(CONTACT_DATA_URL, {
          name: this.state.nameValue,
          message: this.state.thoughtValue
        })
        .then(response => {
          alert("Submitted successfully");
        })
        .catch(function(error) {
          console.log(response);
        });
    }
  };

  render() {
    return (
      <div className="contacts-container" id="contact">
        <h1 className="name">Contact Me !!!</h1>
        <Grid fluid={true}>
          <Row className="show-grid">
            <Col xs={12} md={12} lg={12}>
              <h4>
                Now that you know about me...Feel free to get in touch !!!
              </h4>
              <div className="">
                <form>
                  <label id="fname">Your Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                    onBlur={e => this.onInputChange("name", e)}
                  />

                  <label id="subject">Your Thoughts</label>
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    onBlur={e => this.onInputChange("thought", e)}
                  />

                  <Button
                    bsStyle="success"
                    onClick={e => this.submitResponse()}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={12} lg={12} className="contacts-map">
              <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `300px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Contacts;
