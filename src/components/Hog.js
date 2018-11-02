import React, { Component } from 'react';
import Details from './Details.js'

class Hog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }
  }

  showDetails = (event) => {

    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className='ui eight wide column'>
      {this.props.hog.name}
        <img src={this.props.src} alt={this.props.hog.name} onClick={(event) => this.showDetails(event)}/>
        {this.state.show ? <Details details={this.props.hog}/> : null}
      </div>
    )
  }

}


export default Hog;
