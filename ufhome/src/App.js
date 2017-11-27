import React, { Component } from 'react';
// import './App.css';
import MapSearch from './MapSearch.js';
import MapImage from './MapImage.js';
import Home from './views/Home.js';
import SearchUfoApi from './components/SearchUfoApi.js';
import SearchTryToWork from './components/results/SearchTryToWork.js';
import Results from './Results.js';

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
          <h1 className="siteTitle">UFHome</h1>
          <p className="siteIntro">
            Get to where THEY were!
          </p>
          <SearchTryToWork query={this.state.query} handleSearchInput={this.handleSearchInput} onSubmitQuery={this.onSubmitQuery} />
          <Results sightings={this.state.cities} />

        </header>
        {/*<SearchTryToWork />*/}
{/*        <Home />
        <SearchUfoApi />*/}
        <MapSearch sightings={this.state.cities}/>
        {/*<MapImage />*/}




      </div>
    );
  }
}

export default App;
