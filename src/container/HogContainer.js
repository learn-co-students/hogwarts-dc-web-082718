import React, {Component} from 'react'
import HogTile from "../components/HogTile"

class HogContainer extends Component {
  render(){
    return(
      <div className="ui grid container">
        {this.props.AllHogs.map(hog => <HogTile
          key={hog.name}
          hogName= {hog.name}
          hogSpecialty= {hog.specialty}
          hogIsGreased= {hog.greased}
          hogWeight= {hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
          hogMedal={hog['highest medal achieved']}
          /> )}
      </div>
    )
  }
}

export default HogContainer
