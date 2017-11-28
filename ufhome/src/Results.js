import React, { Component } from 'react';
import uniqWith from 'lodash/uniqWith';

class Results extends Component {
  render() {
    console.log(this.props.sightings.length)

    // get unique city/state combos and then return sighting summaries unique to the city/state combo
    let results = uniqWith(this.props.sightings, (sightingA, sightingB) => {
      return sightingA.obj.city === sightingB.obj.city && sightingA.obj.state === sightingB.obj.state;
    }).map((cityStateData, index) => {
        let uniqueSightingSummaryList = [];
        for (var i = 0; i < this.props.sightings.length; i++) {
          if(this.props.sightings[i].obj.city === cityStateData.obj.city && this.props.sightings[i].obj.state === cityStateData.obj.state){
            uniqueSightingSummaryList.push(
              <li>{this.props.sightings[i].obj.summary}</li>
            );
          }
        }
        return(
          <div>
            <h3>
              <a href={`https://www.airbnb.com/s/${cityStateData.obj.city}--${cityStateData.obj.state}/`} className="airBnBButton" target ='blank'>{cityStateData.obj.city}, {cityStateData.obj.state}</a>
            </h3>
            <ul>
              {uniqueSightingSummaryList}
            </ul>
          </div>
          )
    })

    // render
    return (
      <div>
        {results}
      </div>
    );
  }
}

export default Results;
