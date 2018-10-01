import React from 'react';
import ReactDOM from 'react-dom';
import KuntoIndex from './KuntoIndex';
import KuntoApp from './KuntoApp';
import KuntoLomake from './components/KuntoLomake';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<div><KuntoIndex /> <KuntoApp /> <KuntoLomake /></div>, document.getElementById('root'));
registerServiceWorker();
