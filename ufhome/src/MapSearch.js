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

    // let infoWindowData = uniqWith(this.props.sightings, (sighting) => {
    //   return this.state.selectedPlace.name === sightingB.obj.city;
    // }).map((cityStateData, index) => {
    //     let uniqueSightingSummaryList = [];
    //     for (var i = 0; i < this.props.sightings.length; i++) {
    //       if(this.props.sightings[i].obj.city === cityStateData.obj.city && this.props.sightings[i].obj.state === cityStateData.obj.state){
    //         uniqueSightingSummaryList.push(
    //           <li key= {i}>
    //             <h4>A(n) {this.props.sightings[i].obj.shape} was seen on {this.props.sightings[i].obj.date}</h4>
    //             <ul><li><a href={this.props.sightings[i].obj.url} className="moreInfoButton" target ='new'>{this.props.sightings[i].obj.summary}</a></li></ul>
    //           </li>
    //         )
    //       }
    //     }
    //     return(
    //       <div key ={index}>
    //         <h3>
    //           <a href={`https://www.airbnb.com/s/${cityStateData.obj.city}--${cityStateData.obj.state}/`} className="airBnBButton" target ='blank'>{cityStateData.obj.city}, {cityStateData.obj.state}</a>
    //         </h3>
    //         <ul key= {index}>
    //           {uniqueSightingSummaryList}
    //         </ul>
    //       </div>
    //       )
    // })


  let markerResults = uniqWith(this.props.sightings, (sightingA, sightingB) => {
    // compare lat/long, return true if same, otherwise false
    return sightingA.obj.loc[1] === sightingB.obj.loc[1] && sightingA.obj.loc[0] === sightingB.obj.loc[0];
  })
  .map((sightingData, index) => {

    return(
      <Marker icon={{url: require('./ufo.png')}} onClick={this.onMarkerClick} name={sightingData.obj.city} position={{lat: sightingData.obj.loc[1], lng: sightingData.obj.loc[0]}} key={index}/>
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
      <div className="map">
        <Map google={this.props.google}
        style={{width: '75%', height: '75%', position: 'relative'}}

        center={mapCenter}
        zoom={zoomLevel}
        onClick={this.onMapClicked}>
          {markerResults}

      <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div className='infoWindowInformation'>
              <h3>{this.state.selectedPlace.name}</h3>

              {/*{infoWindowData}*/}
            </div>

        </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyB6W6GnRB9fqEkfSS9Zoo3gc71hy-OPNkk')
})(MapSearch);


