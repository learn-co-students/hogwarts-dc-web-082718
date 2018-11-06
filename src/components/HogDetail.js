import React, {Component} from 'react'


export default class Hogdetail extends Component {
  render(){
    return (
      <div> Name: {this.props.hog.name}</div>
    )
  }
}
