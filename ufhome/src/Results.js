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
              <li key= {i}>
              //trying to get count of sightings per location
              {this.props.sightings[i].obj.summary.length}
                <h4>A(n) {this.props.sightings[i].obj.shape} was seen on {this.props.sightings[i].obj.date}</h4>
                <ul>
                  <li>
                    <a href={this.props.sightings[i].obj.url} className="moreInfoLink" target ='popup' >

                      {this.props.sightings[i].obj.summary}
                    </a>


                  </li>
                </ul>
              </li>
            )
          }
        }
        return(
          <div key ={index}>
            <h3>
              <a href={`https://www.airbnb.com/s/${cityStateData.obj.city}--${cityStateData.obj.state}/`} className="airBnBLink" target ='blank'>{cityStateData.obj.city}, {cityStateData.obj.state} </a>
            </h3>
            <ul key= {index}>
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
