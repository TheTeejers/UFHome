import React, { Component } from 'react';

class Results extends Component {
  render() {
    console.log(this.props.sightings.length)
    let results = this.props.sightings.map((sightingData, index) => {
      return(
        <div key={index}>
          <h3>{sightingData.obj.city}, {sightingData.obj.state}</h3>
          <p>{sightingData.obj.date}, {sightingData.obj.summary}</p>
        </div>
      )
    });

    return (
      <div>
        {results}
      </div>
    );
  }
}

export default Results;
