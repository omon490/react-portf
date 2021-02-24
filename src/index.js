import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom"
import { ThemeProvider } from './Context/ThemeContext'
import {Language} from './Context/Language'
import App from './Components/App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Language>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Language>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);