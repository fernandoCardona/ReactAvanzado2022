import React, { useEffect, useReducer } from 'react';
import { toDoReducer } from './toDoReducer';
import { useForm } from '../../hooks/useForm';
import { ToDoList } from './ToDoList'; 

import './styles.css';




const init = () => {
    // return [{
    //     id:new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
    return JSON.parse(localStorage.getItem('toDos')) || [];
}


export const ToDoApp = () => {

    const [ toDos, dispatch ] = useReducer( toDoReducer, [], init );

    const [ { description }, handleInputChange, reset ] = useForm({
        description: '',
    });

    

    useEffect(() => {
        localStorage.setItem( 'toDos', JSON.stringify(toDos) )
    }, [toDos]);

    

    const handleDelete = ( toDoId ) => {
         console.log( toDoId )

         //2-Generamos la action
         const action ={ 
            type: 'delete',
            payload: toDoId
        }
        //3-Mediante dispatch enviamos al compponente la accion.
        dispatch( action );
        
    }

    const handleToggle = ( toDoId ) => {
        dispatch( {
            type: 'toggle',
            payload: toDoId
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if( description.trim().length <= 1 ){
            return;
        }
        console.log('Nueva tarea');

        //1-Creamos el new todo
        const newToDo = {
            id:new Date().getTime(),
            desc: description,
            done: false
        };
        //2-Generamos la action
        const action ={ 
            type: 'add',
            payload: newToDo
        }
        //3-Mediante dispatch enviamos al compponente la accion
        dispatch( action );
        reset();
    }
    return (
        <>
            <div className="header">
                <h1>ToDoApp: { toDos.length } </h1>
            <hr />
            </div>
            <div className="cont-agregar-toDo">
                <h4>AGREGAR ToDos:</h4>
                
                <form onSubmit={ handleSubmit }>
                    <input 
                        type="text" 
                        name="description"
                        placeholder="Aprender ...."
                        value={description}
                        onChange={ handleInputChange }
                    /> 
                    <button 
                        type="submit"
                        className="btn btn-outline-primary"
                    >
                        Agregar
                    </button>
                </form>
                <hr />

            </div>
             <div>
                <div className="row">
                    <div className=""> 
                        {/* <ul className="list-group list-group-flush">
                        { 
                            toDos.map( (toDo, i) => (
                                <li
                                    key={toDo.id}
                                    className="list-group-item"
                                >
                                    <div className="toDo-cont">
                                        <p 
                                            className={`${ toDo.done && 'complete' }`}
                                            onClick={ () => { handleToggle( toDo.id ) } }
                                        >
                                            <strong>{ i +1 }.</strong> { toDo.desc } 
                                        </p>

                                        <div className="cont-buttons">

                                            <button 
                                                className="btn btn-danger"
                                                onClick={ () => handleDelete( toDo.id ) }
                                            >
                                                Borrar
                                            </button>
                                            
                                            

                                        </div>
                                        
                                    </div>
                                </li>
                              
                            ))
                        }
                        </ul> */}
                        <ToDoList 
                            toDos={ toDos } 
                            handleDelete = { handleDelete } 
                            handleToggle ={ handleToggle } 
                           
                        />

                    </div>
                    
                </div>
        
        </div>
        </>
       
    )
}
