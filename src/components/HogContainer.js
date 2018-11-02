import React, { Component } from 'react';
import Hog from './Hog.js'

class HogContainer extends Component {

  filizeName = name => {
    return name.replace(/ /g, '_').toLowerCase()
  }

  getSRC = name => {
    let file = this.filizeName(name);
    let src = require(`../hog-imgs/${file}.jpg`)
    return src
  }

  render() {
    return (
      <div className='ui grid container'>
        {this.props.hogs.map(hog =>
          <Hog
            key={hog.name}
            hog={hog}
            src={this.getSRC(hog.name)}
          />)}

      </div>
    )
  }
}

export default HogContainer
