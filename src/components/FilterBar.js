import React from "react"

const FilterBar = (props)=>{

    return(
      <div className = "sixteen wide column">
        Filter By Greased:
        <button onClick = {props.filterGreased}> {props.filterOn?"ON":"OFF"} </button>
        Sort By:
        <select onChange = {props.sortHogsBy}>
          <option value="nil"></option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>

      </div>
    )
  
}

export default FilterBar
