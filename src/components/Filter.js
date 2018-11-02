import React from 'react'

class Filter extends React.Component{

  render(){
    return(
      <div className="filterWrapper">
			<div className="ui menu">
				<div className="item">
					<label>Sort by: </label>
				</div>
				<div className="ui item">
					<select
						className="ui selection dropdown"
						name="sort"
						onChange={this.props.handleSelectChange}
						value={this.props.sortBy}>
						<option value="name">Name</option>
						<option value="weight">Weight</option>
					</select>
				</div>
				<div className="item">
					<label>Greased Pigs Only?</label>
				</div>
				<div className="item">
					<input
						className="ui toggle checkbox"
						checked={this.props.greased}
						onChange={this.props.handleToggleGreased}
						type="checkbox"
					/>
				</div>
			</div>
		</div>
	 )
  }

}

export default Filter
