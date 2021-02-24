import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {Language} from './Context/Language'

ReactDOM.render(
  <React.StrictMode>
    <Language>
    <App />
    </Language>
  </React.StrictMode>,
  document.getElementById('root')
);