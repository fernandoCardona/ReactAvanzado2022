import React, { useRef } from 'react';
//import { useRef } from '../../hooks/useRef'

import './FocusScreen.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        //document.querySelector('input').select();
        inputRef.current.select();
    }

  return (
    <div>
        <h1>FocusScreen</h1>
        <hr />
    <div>
        <input 
            ref={ inputRef }
            type="text" 
            className="form-control" 
            placeholder="Su Nombre"
        />
        <button 
            type="submit"
            className="btn btn-outline-primary"
            onClick={handleClick}
        >
            Focus
        </button>
    </div>
        
    </div>
  )
}

 
