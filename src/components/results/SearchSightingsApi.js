import React, { Component } from 'react';
import axios from 'axios';
import './SearchSightingsApi.css';


class SearchSightingsApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCity: '',
      searchingSkies: false,
      haveNotSearchedYet: 'Ready to start searching?'
    }

    this.getSearch = this.getSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getSearch(){
    this.setState({
      searchingSkies: true
    });
    var miles = ((this.refs.distanceseed.value))
    var meters = miles / 0.00062137;
    console.log("meters:", meters);
    console.log("miles:", miles);
    axios.get(`https://cors-anywhere.herokuapp.com/https://ufo-api.herokuapp.com/api/sightings/location/near?limit=150&location=${this.refs.locationseed.value}&radius=${meters || 250000}`)
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

  handleSubmit(event) {
    event.preventDefault();
    this.getSearch();
  }


  render() {
    return (
      <div className='searchReturn'>
        <h1 className='searchWaitingText' >{this.state.searchingSkies ? 'Searching...' : 'HELLO!!!'}</h1>
        <form onSubmit={this.handleSubmit}>
          <input className='inputText' type='text' placeholder='City and State' ref='locationseed'
              onKeyDown={(event) => {if(event.keyCode === 13) this.handleSubmit(event)}}/>
          <input className='inputText' type='text' placeholder='Distance (miles)' ref='distanceseed'
              onKeyDown={(event) => {if(event.keyCode === 13) this.handleSubmit(event)}}/>
          <button className='searchButton' onSubmit={this.handleSubmit}>Search the Skies</button>
        </form>
      </div>
    )
  }

}

export default SearchSightingsApi
