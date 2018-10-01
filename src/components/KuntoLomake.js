import React, { Component } from 'react';
import { lisaaTietoKantaan, haeKaikkiTiedot } from '../API/KuntoAPI';
import Kuntolista from '../components/Kuntolista';

class KuntoLomake extends Component {
 constructor(props) {
     super(props);
     this.muuta = this.muuta.bind(this);
     this.lisaa = this.lisaa.bind(this);
     this.muutaOtsikko = this.muutaOtsikko.bind(this);
     this.state = { otsikko: '', paiva: '', tyyppi: '', kesto: '', kuvaus: '' };
     this.state = {matkat: []};
 }

 muuta (e) {
     this.setState({[e.target.name]: e.target.value});
 }

 muutaOtsikko(e) {
    this.setState ({ otsikko: e.target.value})
 }

 lisaa (e) {
    e.preventDefault();
    this.setState( { otsikko: '', paiva: '', tyyppi: '', kesto: '', kuvaus: ''} );
    lisaaTietoKantaan({otsikko: this.state.otsikko, paiva: this.state.paiva, paikka: this.state.tyyppi, saa: this.state.kesto, kuvaus: this.state.kuvaus}, this.kasitteleLisays);
 }

 kasitteleLisays = (status) => {
   if (status !== 503) {
     this.setState( { otsikko: '', paiva: '', tyyppi: '', kesto: '', kuvaus: ''} );
     haeKaikkiTiedot(this.kasitteleHaku);
   }
   else {
     alert('Lisäys ei onnistu');
     // Ilmoita käyttäjälle virheestä lisäämällä  tilaan muuttujan virheilmoitusta varten
   }
 }

componentDidMount = () => {
  haeKaikkiTiedot(this.kasitteleHaku);
}

kasitteleHaku = (data, status) => {
  if (status !== 503) {
   this.setState({matkat: data});
 }
 else {
   alert('Haku ei onnistu')
 }
}

  render() {
    return (
      <div>
        <form>
            <label style={styles.labelStyle} htmlFor='otsikko'>Otsikko</label>
            <input style={styles.inputStyle} type='text' value={this.state.otsikko} name='otsikko' onChange={ this.muutaOtsikko } /><br />

            <label style={styles.labelStyle} htmlFor='paiva'>Päivä</label>
            <input style={styles.inputStyle} type='text' value={this.state.paiva} name='paiva' onChange={ this.muuta } /><br />

            <label  style={styles.labelStyle} htmlFor='tyyppi'>Tyyppi</label>
            <input style={styles.inputStyle} type='text'  value={this.state.tyyppi} name='tyyppi' onChange={ this.muuta } /><br />

            <label style={styles.labelStyle} htmlFor='kesto'>Kesto</label>
            <input style={styles.inputStyle} type='text' value={this.state.kesto} name='kesto' onChange={ this.muuta } /><br />

            <label  style={styles.labelStyle}  htmlFor='kuvaus'>Kuvaus</label>
            <textarea style={styles.inputStyle} rows='4' cols='40' value={this.state.kuvaus} name='kuvaus' onChange={ this.muuta }></textarea><br />

            <input type='submit' value='Lisää' onClick={ this.lisaa } />
        </form>
        <Kuntolista tiedot={this.state.matkat} />
      </div>
    );
  }
}

const styles = {
  labelStyle: {
    width: '6cm',
    display: 'block',
    marginTop: '8px'
  },
  inputStyle: {
    marginTop: '8px',
    border: '1px solid',
    borderRadius: '6px'

  }
}
export default KuntoLomake;
