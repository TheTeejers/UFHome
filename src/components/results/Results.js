import React, { Component } from 'react';
import uniqWith from 'lodash/uniqWith';
import './Results.css';

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
            var sightingDisplayDate = new Date(this.props.sightings[i].obj.date);
            sightingDisplayDate = sightingDisplayDate.toDateString('MM-DD-YYYY');
            uniqueSightingSummaryList.push(
              <div key= {i}>
                <div className='resultsListDetails'>
                  <p className='listDate'>Date Object was Sighted: {sightingDisplayDate}</p>
                  <p className='listShape'>Shape of Object: {this.props.sightings[i].obj.shape}</p>
                  <p className='resultsListDetailsSummary'>
                    <a href={this.props.sightings[i].obj.url} className="moreInfoLink" target ='new' >
                      {this.props.sightings[i].obj.summary}
                    </a>
                  </p>
                </div>
              </div>
            )
          }
        }
        return(
          <div key ={index}>
            <div className='sightingNameList'>
              <p className='resultListCityStateName'>
                <a href={`https://www.airbnb.com/s/${cityStateData.obj.city}--${cityStateData.obj.state}/`} className="airBnBLink" target ='blank'>{cityStateData.obj.city}, {cityStateData.obj.state} </a>
              </p>
            </div>
            <div className='target' key= {index}>
              <div id='listFill'>
                {uniqueSightingSummaryList}
              </div>
            </div>
          </div>
          )
    })

    // render
    return (
      <div className='resultsWindow'>

        {results}
      </div>
    );
  }
}

export default Results;
