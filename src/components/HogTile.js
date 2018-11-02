import React, {Component} from 'react'
import HogDetails from './HogDetails'


class HogTile extends Component {
  constructor(){
    super()
    this.state = {
      isClicked: false
    }
  }

  getImg(hogName){
    let formattedName = this.props.hogName.split(" ").join("_").toLowerCase();
    let pigPic = require(`../hog-imgs/${formattedName}.jpg`);
    return pigPic;
  }

  clickHandler = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  render(){
    return(
      <div className="ui eight wide column pigTile">
        <div className="image">
          <img src={this.getImg(this.props.hogName)} alt={this.props.hogName} />
        </div>
        <div className="content">
          <div className="header">
            <h3>{this.props.hogName}</h3>
          </div>
          <div>Specialty: <strong>{this.props.hogSpecialty}</strong></div>
        </div>
        <div className="extra-content">
          {this.state.isClicked ? <HogDetails hogIsGreased={this.props.hogIsGreased} hogWeight={this.props.hogWeight} hogMedal={this.props.hogMedal} /> : null}
          <button onClick={this.clickHandler}> {this.state.isClicked ? "Less Info" : "More Info"} </button>
        </div>
      </div>
    )
  }
}

export default HogTile
