import React, { Component } from 'react';
import './App.css';
import MapSearch from './MapSearch.js';
import MapImage from './MapImage.js';
import Home from './views/Home.js';
import SearchUfoApi from './components/SearchUfoApi.js';
import SearchTryToWork from './components/results/SearchTryToWork.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="siteTitle">UFHome</h1>
          <p className="siteIntro">
            Get to where THEY were!
          </p>
        </header>
        <SearchTryToWork />
{/*        <Home />
        <SearchUfoApi />*/}
        {/*<MapSearch />*/}
        {/*<MapImage />*/}




      </div>
    );
  }
}

export default App;
