import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { HookApp } from './HookApp';
import { CounterApp } from './compoonents/01-useState/CounterApp';
import { CounterWithcustomHook } from './compoonents/01-useState/CounterWithcustomHook';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HookApp/> */}
    {/* <CounterApp/> */}
    <CounterWithcustomHook/>
  </React.StrictMode>
);

