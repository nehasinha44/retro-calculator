import React from 'react';
import ReactDOM from 'react-dom';
import '../src/assert/index.css';
import Calculator from './Component/calculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();
