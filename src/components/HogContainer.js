import React from "react"
import HogCard from "./HogCard"
import FilterBar from './FilterBar'

class HogContainer extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        hogs: this.props.hogs,
        filterGreased: false,
        sort: "nil"
      }
    }
    render(){
      return (
        <div className = "HogContainer ui cards ui grid ">
          <FilterBar sortHogsBy = {this.sortHogsBy} filterOn = {this.state.filterGreased} filterGreased = {this.filterGreased}/>
          {this.renderHogCards()}
        </div>
      )
    }

    sortHogsBy = (e) =>{
      let value  = e.target.value
      console.log(this.props.hogs[1])
      if (value === "name"){
        this.setState({
          sort: value,
          hogs: this.props.hogs.sort((a,b) => a[value].toLowerCase().localeCompare(b[value].toLowerCase()))
        })
      }
      else{
        value = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        this.setState({
          sort: value,
          hogs: this.props.hogs.sort((a,b) => a[value]-b[value])
        })
      }
    }

    filterGreased = () =>{

      if (this.state.filterGreased){
        this.setState({
          filterGreased:false,
          hogs:this.props.hogs
        })
      }
      else{
        this.setState({
          filterGreased:true,
          hogs:this.props.hogs.filter(hog => hog.greased)
        })
      }
    }

    renderHogCards(){
      return this.state.hogs.map((hog,index) =>{
        return <HogCard
        greased = {hog.greased}
        highestMedalAchieved = {hog["highest medal achieved"]}
        name = {hog.name}
        specialty = {hog.specialty}
        weight = {hog["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}
        key = {index}
        />
      })
    }





}

export default HogContainer
