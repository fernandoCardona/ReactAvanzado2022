import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';

import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

  const dispatch = useDispatch();

  const { active: note } = useSelector( state => state.notes );
  //console.log(note);
  const [ formValues, handleInputChange, reset ] = useForm( note );

  const activeId = useRef(note.id);

  useEffect(() => {
    
    dispatch( activeNote( formValues.id, { ...formValues } ) );

  }, [ formValues, dispatch ]);


  useEffect(() => {
    if ( note.id !== activeId.current ) {
      reset( note );
      activeId.current = note.id;
    }
  }, [ note, reset ]);

  const { body, title, id } = formValues;

  const handleDelete  = () => {
    dispatch( startDeleting( id ) )
  }

  return (
    <div className="notes__main-content">
        <NotesAppBar />
        <div className="notes__content">
        
            <input  
              typet="text"
              placeholder="Some awesome title"
              name="title"
              className="notes__title-input"
              value={ title }
              onChange={ handleInputChange }
            />
            <textarea 
                name="body"
                placeholder="what happend todays..."
                className="notes__textarea"
                value={ body }
                onChange={ handleInputChange }
            >

            </textarea>
            {
              ( note.url ) &&
                (
                  <div className="notes__image">
                  <img 
                      src={ note.url } 
                      alt="loque sea" 
                  />
                  </div>
                )
            }
            
            

        </div>
        <button
          className="btn btn-danger"
          onClick={ handleDelete }
        >
          Delete
        </button>
    </div>
  )
}
