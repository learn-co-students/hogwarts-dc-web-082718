import hogs from '../porkers_data';
import React, {Component} from 'react'
import HogsList from './HogsList'
import Filter from './Filter'

export default class HogsContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      hogs: this.props.hogs,
      greased: true
    }
  }

  showAllHogs = () => {
    this.setState({
      hogs: this.props.hogs
    })
  }

  sortHogsByName = () => {
    let newHogs = [...this.props.hogs]
    let sortedHogs = newHogs.sort(function(a, b) {
      var hogA = a.name.toUpperCase();
      var hogB = b.name.toUpperCase();
      return (hogA < hogB) ? -1 : (hogA > hogB) ? 1 : 0;
    });
    this.setState({
      hogs: sortedHogs
    })
  }

  sortHogsByWeight = () => {
    let newHogs = [...this.props.hogs]
    let sortedHogs = newHogs.sort(function(a, b) {
      var hogA = a.weight;
      var hogB = b.weight;
      return (hogA < hogB) ? -1 : (hogA > hogB) ? 1 : 0;
    });
    this.setState({
      hogs: sortedHogs
    })
  }

  toggleGreasedHogs = () => {

    this.setState({
      greased: !this.state.greased
    })

    if(this.state.greased === true) {
      let newHogs = [...this.props.hogs]
      let greasedHogs = newHogs.filter(hog => {return hog.greased === true})
      this.setState({
        hogs: greasedHogs
      })
    } else {
      let newHogs = [...this.props.hogs]
      let ungreasedHogs = newHogs.filter(hog => {return hog.greased === false})
      this.setState({
        hogs: ungreasedHogs
      })
    }
  }

  render() {
    return(
      <div>
        <Filter
          showAllHogs={this.showAllHogs}
          sortHogsByName={this.sortHogsByName}
          sortHogsByWeight={this.sortHogsByWeight}
          toggleGreasedHogs={this.toggleGreasedHogs}
        />
        <HogsList hogs={this.state.hogs}/>
      </div>
    )
  }
}
