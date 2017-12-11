import React, { Component } from "react";
import MyMapComponent from "./MyMapComponent";
import Data from "./Data";
import Select from "react-select";
import "./react-select.css";

const options = [
  { label: "Best Of", value: "bestOf" },
  { label: "Best Streets", value: "bestStreets" }
];

class App extends Component {
  state = {
    markers: [],
    selectedMarker: false,
    value: []
  };
  handleSelectChange = newValue => {
    console.log({ newValue });
    const reducer = (accumulator, selection) => {
      return accumulator.concat(Data[selection.value]);
    };

    const markers = newValue.reduce(reducer, []);
    this.setState({ value: newValue, markers: markers });
  };
  render() {
    return (
      <div>
        <Select
          multi
          onChange={this.handleSelectChange}
          options={options}
          placeholder="Select your favourite(s)"
          removeSelected={true}
          value={this.state.value}
        />
        <MyMapComponent
          markers={this.state.markers}
          selectedMarker={this.state.selectedMarker}
          setMarker={marker => {
            this.setState({ selectedMarker: marker });
          }}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `90vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;
