import React, { Component } from 'react';
import uniqWith from 'lodash/uniqWith';

class Results extends Component {
  render() {
    console.log(this.props.sightings.length)


    let locationCityStateResults = uniqWith(this.props.sightings, (sightingA, sightingB) => {
      // compare lat/long, return true if same, otherwise false
      return sightingA.obj.city === sightingB.obj.city && sightingA.obj.state === sightingB.obj.state;
    })
    .map((sightingData, index) => {

      return(
        <h3> {sightingData.obj.city}, {sightingData.obj.state}</h3>
      )
    });



    let results = this.props.sightings.map((sightingData, index) => {
      return(
        <div key={index}>
           <h3>
              <a href={`https://www.airbnb.com/s/${sightingData.obj.city}--${sightingData.obj.state}/`} className="airBnBButton" target ='blank'>{sightingData.obj.city}, {sightingData.obj.state}</a>
           </h3>
          <p>{sightingData.obj.date},  <a href={sightingData.obj.url} className="moreInfoButton" target ='blank'>{sightingData.obj.summary}</a></p>
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
