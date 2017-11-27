import React, { Component } from 'react';

export default class MapSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locationSearch: ''
    }
  }

  handleLocationSearch(event) {
    this.setState({locationSearch: event.target.value})
  }

  returnSearchLocation(search) {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${search}&key=AIzaSyB6W6GnRB9fqEkfSS9Zoo3gc71hy-OPNkk`, {
      method: 'GET'
    })
    .then((res) => res.json())
    .then((object) => {
      const lat = object.results[0].geometry.location.lat
      const lng = object.results[0].geometry.location.lng
      this.props.searchInput(lat, lng)
      this.setState({ locationSearch: ''})
    })
  }

  render() {
    return (
      <div className='sightingSearchContainer'>
        <div className='searchField'>
          <h2>Sighting Location Search</h2>
          <input className='sightingSearchInput' type='text' value={this.state.locationSearch} placeholder='City and State' onChange={(event) => this.handleLocationSearch(event)}/>
          <button className='sightingSearchButton' onClick={() => this.returnSearchLocation(this.state.locationSearch)}>Find Sightings</button>
        </div>
      </div>
    )
  }
}
