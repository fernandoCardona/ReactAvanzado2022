import React,{ useCallback, useState }  from 'react';
import { Hijo } from './Hijo'
 

import '../05-useLayoutEffect/LayoutEffect.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }
    const incrementar = useCallback( ( numeros ) => {
        setValor( c => c + numeros );
      },
      [  setValor ],
    )

    return (
        <div>
        
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />
            <div className="tareaMemo">
                {
                    numeros.map( n => (
                        <Hijo 
                            key={ n }
                            numero={ n }
                            incrementar={ incrementar }
                        />
                    ))
                }
                {/* <Hijo /> */}

            </div>  
            
        </div>
    )
}
