

import React from 'react';

function Kunto(props) {
  return (
    <p style={styles.kuntoTyyli}>
    Otsikko: {props.kunto.otsikko}<br />
    Päivä: {props.kunto.paiva}<br />
    Tyyppi: {props.kunto.tyyppi}<br />
    Kesto: {props.kunto.kesto}<br />
    Kuvaus: {props.kunto.kuvaus}
    </p>
  )
}

const styles = {
  kuntoTyyli: {
    color: 'red',
    marginTop: '0,5cm',
    border: '1px solid powderblue',
    marginRight: '20cm',


  }
}

export default Kunto;
