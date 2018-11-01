import React from 'react';

class HogCard extends React.Component{
  constructor(){
    super()
    this.state = {
      clicked: false
    }
  }
  render(){
    return (

        <div className = "ui card five wide column" onClick = {this.handleClick}>
          {this.state.clicked?this.renderDetails():this.renderCard()}
         </div>
    )
  }
  renderCard(){
    return(
    <div>
        <div className = "image">
          <img src ={this.getImageURL(this.props.name)} alt = ""/>
        </div>
        <div className = "Content">
          {this.props.name}
        </div>
    </div>
    )
  }
  renderDetails(){
    return(
    <div className = "Content">
      <div className = "Name">
        <h4 className = "header"> {this.props.name} </h4><br/>
      </div>
      <div className = "details">
        Greased: {this.props.greased?"True":"False"} <br/><br/>
        Highest Medal Achieved: {this.props.highestMedalAchieved} <br/><br/>
        Specialty: {this.props.specialty} <br/><br/>
        Weight: {this.props.weight}
      </div>
    </div>
  )
  }
  handleClick = (e) =>{
    this.state.clicked?this.setState({clicked:false}):this.setState({clicked:true})
  }
  getImageURL(name){
    let imgName = name.split(" ").join("_").toLowerCase()
    let pic =  require(`../hog-imgs/${imgName}.jpg`)
    return pic
  }
}

export default HogCard
