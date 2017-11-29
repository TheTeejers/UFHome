import React, { Component } from 'react';
import axios from 'axios';

export default class SightingSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  axiosRequest(sightingLocation) {
    let url = `https://cors-anywhere.herokuapp.com/https://ufo-api.herokuapp.com/api/sightings/location/near?location=${ sightingLocation }`;

    axios.get(url)
    .then((response) => {
      this.makeMyObject(response.sightings.city);
    }).catch(event => event);
  }

    }
  }
}
