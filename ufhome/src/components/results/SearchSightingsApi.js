import React, { Component } from 'react';
import axios from 'axios';

class SearchSightingsApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCity: '',
      searchingSkies: false
    }

    this.getSearch = this.getSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getSearch(){
    this.setState({
      searchingSkies: true
    });
    var distance = ((this.refs.distanceseed.value))
    axios.get(`https://cors-anywhere.herokuapp.com/https://ufo-api.herokuapp.com/api/sightings/location/near?limit=50&location=${this.refs.locationseed.value}&radius=${distance || 500000}`)
    .then((response) => {
      console.log('I SHOULD HAVE SEARCH RESULTS');
      // console.log(response.data);
      // console.log(response.data.sightings);
      if (response.data.status === 'ERROR') {
        alert('Error in fetching data for the location')
      } else {
        let newSighting = response.data.sightings
        this.setState({
          searchCity: newSighting,
          searchingSkies: false
        })
        console.log(newSighting)
        // call App function to update App state of search results
        this.props.onSubmitQuery(newSighting);
      }
    }).catch((error) => {
      console.log(error)
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.getSearch();
  }


  render() {
    return (
      <div className='searchReturn'>
        <h1>{this.state.searchingSkies ? 'Looking at the stars....' : 'HELLO!!!'}</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='City and State' ref='locationseed'
              onKeyDown={(event) => {if(event.keyCode === 13) this.getSearch()}}/>
          <input type='text' placeholder='Distance (miles)' ref='distanceseed'
              onKeyDown={(event) => {if(event.keyCode === 13) this.getSearch()}}/>
          <button>Search the Skies Now!</button>
        </form>
      </div>
    )
  }

}

export default SearchSightingsApi
