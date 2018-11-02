import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import Filter from './Filter.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
      sort: 'None'
    }
  }

  sortWeight = (hogs) => {
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

    return (hogs.sort((a, b) => {
        return a[weight] - b[weight]
    }))
  }

  sortName = (hogs) => {
    return hogs.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
  }

  getHogs = () => {
    if (this.state.filter === 'All' && this.state.sort === 'None') {
      return hogs

    } else if (this.state.filter === 'All' && this.state.sort === 'Name'){
      return this.sortName(hogs)

    } else if (this.state.filter === 'All' && this.state.sort === 'Weight') {
      return this.sortWeight(hogs)

    } else if (this.state.filter === 'Greased' && this.state.sort === 'None') {
      let greasedHogs = hogs.filter(hog => hog.greased === true)
      return greasedHogs

    } else if (this.state.filter === 'Greased' && this.state.sort === 'Name') {
      let greasedHogs = hogs.filter(hog => hog.greased === true)
      return this.sortName(greasedHogs)

    } else if (this.state.filter === 'Greased' && this.state.sort === 'Weight'){
      let greasedHogs = hogs.filter(hog => hog.greased === true)
      return this.sortWeight(greasedHogs)
    }
  }

  handleFilter = (event) => {
    event.persist();
    let newFilter = event.currentTarget.value;

    this.setState({
      filter: newFilter
    })
  }

  handleSort = (event) => {
    event.persist();
    let newSort = event.currentTarget.value;

    this.setState({
      sort: newSort
    })
  }

  render() {
    return (
      <div className="App">
        <Nav/>
        <Filter handleFilter={this.handleFilter} handleSort={this.handleSort}/>
        <HogContainer hogs={this.getHogs()}/>
      </div>
    )
  }
}

export default App;
