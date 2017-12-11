import React, { Component } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 29.5529817, lng: -95.6720993 }}
    >
      {props.markers.map(marker => {
        return (
          <Marker
            key={marker.name}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => props.setMarker(marker)}
          >
            {props.selectedMarker === marker && (
              <InfoWindow onCloseClick={() => props.setMarker(false)}>
                <div>{marker.name}</div>
              </InfoWindow>
            )}
          </Marker>
        );
      })}
    </GoogleMap>
  ))
);

export default MyMapComponent;
