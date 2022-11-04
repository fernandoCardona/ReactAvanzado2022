import React, { useState } from 'react';
import { useCounterBreakingBad } from '../../hooks/useCounterBreakingBad';
import '../05-useLayoutEffect/LayoutEffect.css'
import { Small } from './Small'

export const Memorize = () => {

    const { counter, increment } = useCounterBreakingBad(10)
    const [show, setShow] = useState(true);
    return (
        <div>
        <h1>Memorize</h1>
        <hr />
        <h2>Counter: <Small value={ counter }/></h2>
        <button
            className="btn btn-primary"
            onClick={ increment }
        > 
            +1
        </button>
        <button
            className="btn btn-outline-primary"
            onClick={ () => { 
                setShow( !show );
            }}
        > 
            Show/hide { JSON.stringify(show) }
        </button>

        </div>
    )
}

 
