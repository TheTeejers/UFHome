import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <div className='footerContainer'>
        <p>Designed and Developed by <a className='mailLink' href="mailto:tjcancode@gmail.com?subject=I%20LOVE%20UFHome!%20We%20should%20chat!">TJ Loughry</a></p>
        <p> with &hearts; at General Assembly</p>
        <p>&#9400; 2017</p>
      </div>
    );
  }
}



export default Footer;
