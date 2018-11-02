import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <div>
        <span>
          <select onChange={this.props.handleFilter}>
            <option value="All">All</option>
            <option value="Greased">Greased</option>
          </select>
        </span>
        <span>
          <select onChange={this.props.handleSort}>
            <option value="None">Unsorted</option>
            <option value="Name">Sort By Name</option>
            <option value="Weight">Sort By Weight</option>
          </select>
        </span>
      </div>
    )
  }
}

export default Filter
