import React, {Component} from "react"
import Hog from './Hog'


export default class HogCard extends Component {

    constructor(props){
        super(props);

        this.state = {
            isGreased: props.hog.greased
        }
    }
    getImage = () => {
        return require(`../hog-imgs/${
            this.props.hog.name.split(" ")
            .join("_")
            .toLowerCase()
        }.jpg`)
    }

    greasePig = (event) => {
        console.log("flip")
        this.setState({
            isGreased: !this.state.isGreased
        })
    }

    render() {

        return (
            <div className="card">
            <img src = {this.getImage()} alt = "hog" / >
            <Hog hog={this.props.hog} isGreased={this.state.isGreased} greasePig={this.greasePig}/>

            </div>);

    }



}
