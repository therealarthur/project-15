
import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {

  // All Class variables/properties MUST go inside constructor.
  // Other resources often show variables declared outside constructor, which
  // will not work.
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      coords: {
        lat: 40.7678,
        lng: -73.9645
      }
    };
    this.onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    
    this.onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
  }
  

  render() {
    return (
      <Map 
        initialCenter={this.state.coords}
        google={this.props.google} 
        onClick={this.onMapClicked}
        >
      
      <Marker 
        onClick={this.onMarkerClick} 
        name={'Current location'} 
        position={this.state.coords}
      />
      <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
      </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBL5S7OT8HqJ0_AVichcuta_Fogzd8_By4')
})(MapContainer)