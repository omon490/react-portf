import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import {Language} from './Context/Language'

import {BrowserRouter} from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Language>
    <App />
    </Language>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);