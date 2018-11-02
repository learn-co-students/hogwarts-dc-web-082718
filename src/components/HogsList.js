import React, {Component} from 'react';

import HogCard from './HogCard'


export default class HogsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            hogs: props.hogs
        }
    }

    generateHogsGrid = () => {

        return this.state.hogs.map(hog => {
            return <HogCard hog={hog}/>
        });
    }

    render(){

        return (<div className="ui grid container">

                {this.generateHogsGrid()}

        </div>);
    }



}
