import React, { Component } from 'react';
import '../App.css';
import Nav from '../components/Nav'
//// everything after is added
import AllHogs from "../porkers_data"
import HogContainer from './HogContainer'
import Filter from '../components/Filter'


class App extends Component {
  constructor(){
    super()
    this.state = {
      showOnlyGreased: false,
      sortBy: ""
    }
  }

  handleToggleGreased = () => {
    this.setState({ greased: !this.state.showOnlyGreased });
  }

  filterGreased = hogs => {
  return this.state.showOnlyGreased ? AllHogs.filter(hog => {
    return AllHogs.greased
  }) : AllHogs
}

  handleSelectChange = (event) => {
  this.setState({ sortBy: event.target.value });
  }

  sortHogs = hogs => {
    let acceptableHogs = this.filterGreased(hogs)
  }

  render() {
    return (
      <div className="App">
        <div className="sixteen wide column centered">
          < Nav />
        </div>
        <div className="sixteen wide column centered">
          <Filter  showOnlyGreased={this.handleToggleGreased} handleSelectChange={this.handleSelectChange} sortBy={this.state.sortBy}/>
        </div>
        <div className="sixteen wide column centered">
          <HogContainer AllHogs={this.filterGreased()} />
        </div>
      </div>
    )
  }
}

export default App;
