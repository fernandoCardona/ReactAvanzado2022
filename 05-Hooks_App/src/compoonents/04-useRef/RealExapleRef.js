import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import './FocusScreen.css'

export const RealExapleRef = () => {
    const [ show, setShow ] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
  return (

    <>
        <h1>RealExapleRef</h1>
        <hr />
        { show && <MultipleCustomHooks/> }
        <button className="btn btn-secondary" onClick={ handleClick }>Show/Hide</button>
    </>
    
  )
}
