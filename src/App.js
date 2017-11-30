import React, { Component } from 'react';
import MapSearch from './components/results/MapSearch.js';
import SearchSightingsApi from './components/results/SearchSightingsApi.js';
import Results from './components/results/Results.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
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
        <Header />
        <div className='resultsDisplayContainer'>
          <div className='mapSearchContanier'>
            <MapSearch sightings={this.state.cities}/>
            <SearchSightingsApi query={this.state.query} handleSearchInput={this.handleSearchInput} onSubmitQuery={this.onSubmitQuery} />
          </div>
          <div className='resultsListContainer'>
            <Results sightings={this.state.cities} />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
