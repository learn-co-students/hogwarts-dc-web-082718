import React from 'react'


class HogDetails extends React.Component{
  render(){
    return(
      <div className="hog-detail">
        <p></p>
        <p><strong>{this.props.hogIsGreased ? "Greased" : "Not Greased"}</strong></p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator
				with Thru-the-Door Ice and Water: <strong>{this.props.hogWeight}</strong></p>
        <p>Medal: <strong>{this.props.hogMedal}</strong></p>
      </div>
    )
  }
}

export default HogDetails
