import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';
import { useCounterBreakingBad } from '../../hooks/useCounterBreakingBad';

import '../05-useLayoutEffect/LayoutEffect.css'
 

export const MemoHook = () => {

    const { counter, increment } = useCounterBreakingBad(5000)
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [ counter ])

    return (
        <div>
        <h1>MemoHook</h1>
       
        <h2>Counter: <small> { counter } </small></h2> 
        <hr />
        
        <p>{ memoProcesoPesado }</p>
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

 