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
    }

    // binding this to event-handler functions
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

  // var uniqueResults = uniqWith(originalArray, comparisonCallbackFunction);
  // uniqueResults now is items from originalArray, where no other item returns true when called with the comparison func

  let markerResults = uniqWith(this.props.sightings, (sightingA, sightingB) => {
    // compare lat/long, return true if same, otherwise false
    return sightingA.obj.loc[1] === sightingB.obj.loc[1] && sightingA.obj.loc[0] === sightingB.obj.loc[0];
  })
  .map((sightingData, index) => {

    return(
      <Marker onClick={this.onMarkerClick} name={sightingData.obj.city} position={{lat: sightingData.obj.loc[1], lng: sightingData.obj.loc[0]}} key={index}/>
    )
  });

  let info = this.props.sightings.map((sightingData, index) => {
    return(
      <p className='infoWindowSummary'>{sightingData.obj.date}, {sightingData.obj.shape},  {sightingData.obj.summary}</p>
    )
  });

  let infoWindowResults = this.props.sightings.map((sightingData, index) => {
    return(
      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow} key={index}>
            <div className='infoWindowInformation'>
              <h1>{this.state.selectedPlace.name} <button>Hello</button></h1>

              {info}
            </div>

        </InfoWindow>
    )
  });



    return (
      <div className="map">
        <Map google={this.props.google}
        style={{width: '75%', height: '75%', position: 'relative'}}

        initialCenter={{
            lat: 37.0902,
            lng: -95.7129
          }}
        zoom={4}
        onClick={this.onMapClicked}>
          {markerResults}

          {infoWindowResults}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB6W6GnRB9fqEkfSS9Zoo3gc71hy-OPNkk')
})(MapSearch);


