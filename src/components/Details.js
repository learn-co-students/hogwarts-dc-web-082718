import React, { Component } from 'react';

class Details extends Component {



  render() {

    return (

      <div>DETAILS:
        <p>specialty: {this.props.details.specialty}</p>
        <p>{this.props.details.greased ? "Greased" : "Ungreased"}</p>
        <p>weight: {this['props']['details']['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
        <p>highest medal: {this['props']['details']['highest medal achieved']}</p>
      </div>
    )
  }
}

export default Details;
