import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';




//import { HookApp } from './HookApp';
//import { CounterApp } from './compoonents/01-useState/CounterApp';
//import { CounterWithcustomHook } from './compoonents/01-useState/CounterWithcustomHook';
//import { SimpleForm } from './compoonents/02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './compoonents/02-useEffect/FormWithCustomHook';
//import { MultipleCustomHooks } from './compoonents/03-examples/MultipleCustomHooks';
//import { FocusScreen } from './compoonents/04-useRef/FocusScreen';
//import { RealExapleRef } from './compoonents/04-useRef/RealExapleRef';
//import { LayoutEffect } from './compoonents/05-useLayoutEffect/LayoutEffect'; 
//import { Memorize } from './compoonents/06-useMemo/Memorize';
//import { MemoHook } from './compoonents/06-useMemo/MemoHook';
//import { CallbackHook } from './compoonents/06-useMemo/CallbackHook';
//import { Padre } from './compoonents/07-tarea-memo/Padre'
//import { IntroReducer } from './compoonents/08-useReducer/Intro-reducer';
//import { ToDoApp } from './compoonents/08-useReducer/ToDoApp';
import { MainApp } from './compoonents/09-useContext/MainApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <HookApp/> */}
    {/* <CounterApp/> */}
    {/* <CounterWithcustomHook/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHook/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    {/* <RealExapleRef/> */}
    {/* <LayoutEffect/> */}
    {/* <Memorize/> */}
    {/* <MemoHook/> */}
    {/* <CallbackHook/> */}
    {/* <Padre /> */}
    {/* <IntroReducer/> */}
    {/* <ToDoApp/> */}
    <MainApp/>
  </React.StrictMode> 
);
  
    