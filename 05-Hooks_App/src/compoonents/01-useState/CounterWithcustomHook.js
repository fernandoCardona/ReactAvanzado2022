import React from 'react';
import { useCounter } from '../../hooks/useCounter'
import './Counter.css';

export const CounterWithcustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100);

  return (
    <>
        <h1>Counter with Hook: {state}</h1>
        <hr />
        <div className="cont-buttons">
            <button className="btn btn-primary" onClick={ () => increment(2)}>+1</button>
            <button className="btn btn-secondary" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ () => decrement(2)}>-1</button>
        </div>
        
    </>
  )
}
 