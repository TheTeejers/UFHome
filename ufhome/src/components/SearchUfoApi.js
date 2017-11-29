import React, { Component } from 'react';
import axios from 'axios';

class SearchUfoApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city : [],
      state : [],
      summary : [],
    };
    this.handleUfoSearch=this.handleUfoSearch.bind(this);
  }


  handleUfoSearch(event){
    event.preventDefault();
    axios.get(`https://cors-anywhere.herokuapp.com/https://ufo-api.herokuapp.com/api/sightings/search?city=${this.state.city}`)
    .then((res) => {
      let randomIndex = res.sightings.city.length
      this.setState({
        randomePick: res.sightings.city[randomIndex]
      })
    })
    .catch((error) => {
      console.log('error');
      this.setState({
        randomPick: null
      })
    })
  }


  componentDidMount() {
    fetch(`https://cors-anywhere.herokuapp.com/https://ufo-api.herokuapp.com/api/sightings/search?state=${this.state.city}`)
    .then(results => {
      return results.json();
    }).then(data => {
      let city = data.sightings.map((city, index) => {
        return(
          <div key={index}>
            <p>{city.city}</p>
          </div>
        )
      })
      let state = data.sightings.map((state, index) => {
        return(
          <div key={index}>
            <p>{state.state}</p>
          </div>
        )
      })
      let summary = data.sightings.map((summary, index) => {
        return(
          <div key={index}>
            <p>{summary.summary}</p>
          </div>
        )
      })

      this.setState({city: city});
      this.setState({state: state});
      this.setState({summary: summary});
      console.log('getting city');
    })
  }

  render() {
    // var sightings = this.state.sightings;
    // var location = '';
    // var globalLocation = '';
    // var summary = '';
    // var shape = '';
    // var duration = '';
    // var outputContainer = {};

    // if(sightings) {
    //   // location = (sightings.city) : '';
    //   // globalLocation = (sightings.loc): '';
    //   summary = (sightings.summary);
    // }


    return (
      <div className='ufoSearchContainer'>
        <input type='text' placeholder='City and State' ref={this.state.city}
            onKeyDown={(event) => {if(event.keyCode === 13) this.handleUfoSearch(event)}}/>
        <input type='button' id='submit-ufo-search' value='Search Sightings' onClick={this.handleUfoSearch}/>
        <div className='outputInformation'>
          <h3>{this.state.summary}, {this.state.city}</h3>
        </div>

        {this.state.city}, {this.state.state}, {this.state.summary}
      </div>
    )
  }
}

export default SearchUfoApi
