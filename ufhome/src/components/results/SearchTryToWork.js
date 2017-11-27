import React, { Component } from 'react';
import axios from 'axios';

class SearchSightingsApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCity: '',
      searchingSkies: true,
    }

  this.getSearch = this.getSearch.bind(this);
  }

  componentDidMount() {
    this.getSearch();
  }

  getSearch(){
    this.setState({
      searchingSkies: true
    });
    var distance = ((this.refs.distanceseed.value))
    axios.get(`https://cors-anywhere.herokuapp.com/https://ufo-api.herokuapp.com/api/sightings/location/near?limit=500&location=${this.refs.locationseed.value}&radius=${distance || 500000}`)
    .then((response) => {
      console.log(response.data.sightings)
      let newSighting = response.data.sightings
      this.setState({
        searchCity: newSighting,
        searchingSkies: false
      })
    }).catch((error) => {
      console.log(error)
    });


  }

  formatCity(sightings) {
    var cities = '';
    for (let i of sightings.city){
      cities += i.city;
  }

  }
  render() {
    var sightings = this.state.getSearch;
    var sightingResults = '';
    if (sightings) {
      sightingResults = this.formatCity(sightings);
    }

    return (
      <div className='searchReturn'>
        <h1>{this.state.searchingSkies ? 'Looking at the stars....' : 'HELLO!!!'}</h1>
        <input type='text' placeholder='City and State' ref='locationseed'
            onKeyDown={(event) => {if(event.keyCode === 13) this.getSearch()}}/>
        <input type='text' placeholder='Distance (miles)' ref='distanceseed'
            onKeyDown={(event) => {if(event.keyCode === 13) this.getSearch()}}/>
        <button onClick={this.getSearch}>Search the Skies!</button>
        <div>
          <p>{sightingResults}words</p>
        </div>
      </div>
    )
  }

}

export default SearchSightingsApi
