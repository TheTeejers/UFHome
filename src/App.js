import React, { Component } from 'react';
import MapSearch from './components/results/MapSearch.js';
import SearchSightingsApi from './components/results/SearchSightingsApi.js';
import Results from './components/results/Results.js';
import ufo from './components/images/ufo.png';
import './App.css';


class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <h1 className="siteTitle"><img src={ufo} className='ufo-logo-left'/>UFHome<img src={ufo} className='ufo-logo-right'/></h1>
          <p className="siteIntro">
            Get to where THEY were!
          </p>
        </header>

        <div className='resultsDisplayContainer'>
          <div className='mapSearchContanier'>
            <div className='mapResultsContainer'>
              <MapSearch sightings={this.state.cities}/>
            </div>
            <div>
              <SearchSightingsApi query={this.state.query} handleSearchInput={this.handleSearchInput} onSubmitQuery={this.onSubmitQuery} />
            </div>
          </div>
          <div className='resultsListContainer'>
            <Results sightings={this.state.cities} />
          </div>
        </div>






      </div>
    );
  }
}

export default App;
