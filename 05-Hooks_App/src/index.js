import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { HookApp } from './HookApp';
//import { CounterApp } from './compoonents/01-useState/CounterApp';
//import { CounterWithcustomHook } from './compoonents/01-useState/CounterWithcustomHook';
//import { SimpleForm } from './compoonents/02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './compoonents/02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './compoonents/03-examples/MultipleCustomHooks';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HookApp/> */}
    {/* <CounterApp/> */}
    {/* <CounterWithcustomHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHook/> */}
    <MultipleCustomHooks/>
  </React.StrictMode> 
);
  
    