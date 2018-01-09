import React, { Component } from 'react';
import MapSearch from '../results/MapSearch.js';
import SearchSightingsApi from '../results/SearchSightingsApi.js';
import Results from '../results/Results.js';
// import Header from '../Header.js';
// import Footer from '../Footer.js';
// import ufo from '../images/ufo.png';
import './Search.css';

class Search extends Component {
  constructor(props){
    super(props);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.onSubmitQuery = this.onSubmitQuery.bind(this);
    this.state = {
      cities: [],
      query: ''
    }
  }

  handleSearchInput(event) {
    this.setState({
      query: event.target.value
    })
    console.log(this.state.query)
  }

  onSubmitQuery(results){
    this.setState({
      cities: results
    })
  }

  render() {
    return (
      <div className="Home">
        <div className='resultsDisplayContainer'>
          <div className='mapSearchContanier'>
            <MapSearch sightings={this.state.cities}/>
            <SearchSightingsApi query={this.state.query} handleSearchInput={this.handleSearchInput} onSubmitQuery={this.onSubmitQuery} />
          </div>
          <div className='resultsListContainer'>
            <Results sightings={this.state.cities} />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
