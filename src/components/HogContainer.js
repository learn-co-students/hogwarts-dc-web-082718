import React from 'react';
import Hogdetail from './HogDetail'

const HogList = ({hogs}) => {


  return(
    <div>{hogs.map(hog => <Hogdetail hogs={hogs}/>)}</div>
  )

}

export default HogList;
