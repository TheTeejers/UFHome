import React, { Component } from 'react';
import './Header.css';
import ufo from './images/ufo.png';

class Header extends Component {

  render() {
    return (
        <div className="App-header">
          <h1 className="siteTitle">
            <a href='http://www.agame.com/game/alien-education' target='blank'>
              <img src={ufo} className='ufo-logo-left' alt='bouncing ufo'/>
            </a>
            <a className='homeLink' href='./'>
              UFHome
            </a>
            <a href='https://www.youtube.com/watch?v=0qGTjIcVDAU' target='new' >
              <img src={ufo} className='ufo-logo-right' alt='bouncing ufo'/>
            </a>
          </h1>
          <p className="siteIntro">
            Get to where THEY were!
          </p>
        </div>
    );
  }
}



export default Header;
