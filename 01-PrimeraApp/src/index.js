import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CounterApp from './CounterApp';
import reportWebVitals from './reportWebVitals';
import PrimeraApp from './PrimeraApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <PrimeraApp saludo = 'Hola soy Fernando'/>
    <CounterApp value={0}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
