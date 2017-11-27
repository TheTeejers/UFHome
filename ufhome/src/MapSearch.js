import React, { Component } from 'react';
import './MapSearch.css';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapSearch extends Component {
render() {

  let results = this.props.sightings.map((sightingData, index) => {
    return(
      <Marker name={sightingData.obj.city} position={{lat: sightingData.obj.loc[1], lng: sightingData.obj.loc[0]}}  key={index}/>
    )
  });



    return (
      <div className="map">
        <Map google={this.props.google} zoom={14}>
          {results}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB6W6GnRB9fqEkfSS9Zoo3gc71hy-OPNkk')
})(MapSearch);


