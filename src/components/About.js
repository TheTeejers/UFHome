import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './About.css';

class About extends Component {

  render() {
    return (
      <div className="Home">
        <div className='aboutUFHome'>
          <p className='about1'>
            Greetings, Earthling!
          </p>
          <p className='about2'>
            Looking for adventure that’s out of this world? You’ve arrived at the perfect destination--UFHome is the only place that helps you find sightings hot spots AND plan the perfect getaway.
          </p>
          <p className='about3'>
            Whether you’re looking for mystery lights, gray (or green) men, or just some glowing orbs floating in tandem--you’ve landed on the right place.
          </p>
          <p className='about4'>
            Start exploring:
              <ul className='aboutList'>
                <li className='aboutListItem'>1. Search for a destination anywhere in the world</li>
                <li className='aboutListItem'>2. The map will populate sightings nearby</li>
                <li className='aboutListItem'>3. Click the city name below the map</li>
                <li className='aboutListItem'>4. Book the perfect getaway near to the sightings hot spot</li>
              </ul>
          </p>
          <p className='about5'>
            So easy, even the crew of the Covenant can figure it out!
          </p>
          <form action='./Search'>
            <input className='searchButton' type="submit" value='Start Searching' />
          </form>
        </div>


      </div>
    );
  }
}

export default About;

