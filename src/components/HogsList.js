import React from 'react';
import Hog from './Hog'

const HogsList = ({hogs}) => {
  return(
    <div className="ui grid container">
      {hogs.map(hog => <Hog hog={hog} key={hog.name}/>)}
    </div>
  )
}

export default HogsList
