import React, {Component} from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className="ui four item menu">
        <a className="item" onClick={this.props.showAllHogs}>All Hogs</a>
        <a className="item" onClick={this.props.sortHogsByName}>Hogs By Name</a>
        <a className="item" onClick={this.props.sortHogsByWeight}>Hogs By Weight</a>
        <a className="item" onClick={this.props.toggleGreasedHogs}>Toggle Greased Hogs</a>
      </div>
    )
  }
}
