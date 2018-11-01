import React, {Component} from 'react';

class Hog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      detailsShown: false
    }
  }

  getHogImg = (hog) => {
    let slugifiedName = this.slugify(hog.name);
    return require(`../hog-imgs/${slugifiedName}.jpg`)
  }

  slugify = (name) => {
    let slugifiedName = name.toLowerCase().split(" ").join('_')
    return slugifiedName
  }

  isGreased = (greased) => {
    return greased ? '✅' : '❌'
  }

  details() {
    if(this.state.detailsShown) {
      return(
        <div>
          <div className="normalText">Greased: {this.isGreased(this.props.hog.greased)}</div>
          <div className="normalText">Specialty: {this.props.hog.specialty}</div>
          <div className="normalText">Weight: {this.props.hog.weight}</div>
          <div className="normalText">Highest Medal Achieved: {this.props.hog.medal}</div>
        </div>
      )
    }
  }

  detailsButton() {
    const buttonContent = (this.state.detailsShown ? 'Hide Details' : 'Show Details')
    return(
      <button onClick={this.handleClick}>{buttonContent}</button>
    )
  }

  handleClick = (e) => {
    this.setState({
      detailsShown: !this.state.detailsShown
    })
  }

  render() {
    return(
      <div className="pigTile ui seven wide column hoggyText">
        <h3>{this.props.hog.name}</h3>
        <img src={this.getHogImg(this.props.hog)} alt={this.props.hog.name}></img>
        <div>
          {this.detailsButton()}
          {this.details()}
        </div>
      </div>
    )
  }
}

export default Hog
