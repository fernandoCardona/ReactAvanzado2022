import React, { useState, useLayoutEffect, useRef } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounterBreakingBad } from '../../hooks/useCounterBreakingBad'
import './LayoutEffect.css'

export const LayoutEffect = () => {
    const { counter, increment } = useCounterBreakingBad(1);
    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data && data[0];

    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {

        setBoxSize(pTag.current.getBoundingClientRect());
        
    }, [quote])

    return (
        <>
            <div >
                <h1> LayoutEffect </h1>
                <hr />
                
                    <blockquote className="blockquote text-right">
                        <p 
                            className="md-0"
                            ref={pTag}
                        > 
                            { quote }
                        </p>
                        
                    </blockquote>
                    <pre>
                        {JSON.stringify( boxSize, null, 3)}
                        <h5>width: { boxSize.width } <br /> </h5>
                        <h5>height: { boxSize.height } <br /> </h5> 
                    </pre>
                
                <button className="btn btn-primary" onClick={ increment }>
                    Siguiente quote
                </button>
                
            </div>  

            
        </>
        
        
    )
}

 
