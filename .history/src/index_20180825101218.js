import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assert/css/index.css';
import Calculator from './Component/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
