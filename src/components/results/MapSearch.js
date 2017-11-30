import React, { Component } from 'react';
import './MapSearch.css';
import uniqWith from 'lodash/uniqWith';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapSearch extends Component {
    constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      cities: this.props.sightings
    }
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

render() {
  let markerResults = uniqWith(this.props.sightings, (sightingA, sightingB) => {
    // compare lat/long, return true if same, otherwise false
    return sightingA.obj.loc[1] === sightingB.obj.loc[1] && sightingA.obj.loc[0] === sightingB.obj.loc[0];
  })
  .map((sightingData, index) => {
    return(
      <Marker icon={{url: require('../images/ufo.png')}} onClick={this.onMarkerClick} name={sightingData.obj.city} position={{lat: sightingData.obj.loc[1], lng: sightingData.obj.loc[0]}} key={index}/>
    )
  });

    var zoomLevel = 10;
    if (this.props.sightings.length){
      zoomLevel = 9
      };

    var mapCenter = {
            lat: 33.3943,
            lng: -104.5230
    };

    if (this.props.sightings.length){
      mapCenter = {
        lat: this.props.sightings[0].obj.loc[1],
        lng: this.props.sightings[0].obj.loc[0]
      };
    }

    return (
      <div className='mapResultsContainer'>
        <div className="map">
          <Map google={this.props.google}
            center={mapCenter}
            zoom={zoomLevel}
            onClick={this.onMapClicked}>
          {markerResults}
          <InfoWindow className='InfoWindow'
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div className='infoWindowInformation'>
              <h3>They were seen in {this.state.selectedPlace.name}!</h3>
            </div>
          </InfoWindow>
          </Map>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB6W6GnRB9fqEkfSS9Zoo3gc71hy-OPNkk')
})(MapSearch);


