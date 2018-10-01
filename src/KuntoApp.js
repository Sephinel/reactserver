import React, { Component } from 'react';
import Kuntolista from './components/Kuntolista';
import {haeKaikkiTiedot} from './API/KuntoAPI';


 /* const map = [
  {
    otsikko: 'Maanantain kuntoilut',
    paiva: '10.9.2018',
    tyyppi: 'Pilates',
    kesto: '20 min',
    kuvaus: 'Lankutusta'
  },
  {
    otsikko: 'Tiistain kuntoilut',
    paiva: '11.9.2018',
    tyyppi: 'SpineGym',
    kesto: '10 min',
    kuvaus: 'Molemmat puolet'
  },
  {
    otsikko: 'Keskiviikon kuntoilut',
    paiva: '12.9.2018',
    tyyppi: 'Pilates',
    kesto: '25 min',
    kuvaus: 'Lankutusta'
  }
];

// const kuntotieto = { otsikko: 'Maanantain kuntoilut', paiva: '10.9.2018', Tyyppi: 'Pilates', Kesto: '20 min', kuvaus: 'Lankutusta'}

*/

 class KuntoApp extends Component {

   constructor(props) {
     super(props);
     this.state = {tiedot: []};
   }


   componentDidMount = () => {
     haeKaikkiTiedot(this.kasitteleVastaus);
   }

   kasitteleVastaus = (data, status) => {
     if (status !== 503) {
       this.setState({matkat: data});
     } else {
       alert("Virhe");
     }
   }

   render() {
     return (
       <div>
       <Kuntolista tiedot={this.state.tiedot} />
       </div>
     );
   }
 }

export default KuntoApp;
