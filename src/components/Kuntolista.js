import React from 'react';
import Kunto from './Kunto';

function Kuntolista(props) {
  let tiedot = props.tiedot.map(
     function(kunto, index){
       return(<div><Kunto kunto={kunto} index={index} /></div>)
  }

)
  return (<div>{tiedot}</div>)

}

export default Kuntolista;
