import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App' ;
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<app />, document.getElementById('root'))
serviceWorker.unregister()
