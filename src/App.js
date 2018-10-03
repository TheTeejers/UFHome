import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import About from './components/About.js';
// import ufo from './components/images/ufo.png';
import Search from './components/results/Search.js';
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
          <div className='buttonLayout'>
            <form action='/Search'>
              <input className='searchButton' type="submit" value='Let the Search Begin!' />
            </form>
            <form action='./About'>
                          <input className='searchButton' type="submit" value='About' />
            </form>
          </div>
        <Router basename = {process.env.PUBLIC_URL}>
          <div className='Home'>
            <Route exact path='/' component={ () => <Home /> } />
            <Route path='/Home' component={ () => <Home /> } />
            <Route path='/About' component={ () => <About /> } />
            <Route path='/Search' component={ () => <Search /> } />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
