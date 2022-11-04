import React from 'react'

export const ShowIncrement = React.memo( ( {increment} ) => {

    console.log('Me volvi a generar :(')

    const handleIncrement = () => {
        increment( 5 );
    }

    return (
        
        <button
            className="btn btn-primary"
            onClick={ handleIncrement}
        >
            Incrementar
        </button>

    )
} );