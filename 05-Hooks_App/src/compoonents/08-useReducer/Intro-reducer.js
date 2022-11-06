import React from 'react';

import './useReducer.css';

export const IntroReducer = () => {
    const inicialState = [{
        id: 1,
        toDo: 'Comprar el pan',
        done: false
    }];

    const toDoReducer = ( state = inicialState, action) => {
        if (action?.type === 'agregar') {
            return [ ...state, action.payload ];
        }
        return state;

    }

    let toDos = toDoReducer();
    

    const newToDo = [{
        id: 2,
        toDo: 'Comprar leche',
        done: false
    }];

    
    const actionAgregar = {
        type: 'agregar',
        payload: newToDo 
    }

    toDos = toDoReducer( toDos, actionAgregar );

console.log(toDos);


    return (
        <div>
            <h1>Intro useReducer</h1>
            <hr />
            

        </div>
    )
}
