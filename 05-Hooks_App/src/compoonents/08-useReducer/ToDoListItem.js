import React from 'react';

export const ToDoListItem = ( { toDo, index, handleDelete, handleToggle } ) => {
  return (
    <li
        key={toDo.id}
        className="list-group-item"
    >
        <div className="toDo-cont">
            <p 
                className={`${ toDo.done && 'complete' }`}
                onClick={ () => { handleToggle( toDo.id ) } }
            >
                <strong>{ index +1 }.</strong> { toDo.desc } 
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
  )
}
